import express from 'express';
import cors from 'cors';
import path from 'path';
import fetch from 'node-fetch'; // Node 18+ can use native fetch

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// ===== Verify environment variables =====
const requiredEnvVars = ['VITE_DESIGNER_PASSWORD', 'DISCORD_WEBHOOK_URL', 'OPENAI_API_KEY'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingVars.length > 0) {
  console.error(`❌ Missing required environment variables: ${missingVars.join(', ')}`);
  process.exit(1);
} else {
  console.log('✅ All required environment variables are configured');
}

// ===== Countdown logic =====
let countdownEndTime = 0;
let countdownActive = false;
console.log('⏸️ Countdown is disabled by default. Use /api/set-countdown to enable.');

// ===== API Endpoints =====

// Countdown status
app.get('/api/countdown-status', (req, res) => {
  try {
    const now = Date.now();
    const timeRemaining = Math.max(0, countdownEndTime - now);
    res.json({ showCountdown: countdownActive && timeRemaining > 0, endTime: countdownEndTime, timeRemaining });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to get countdown status' });
  }
});

// Set countdown
app.post('/api/set-countdown', (req, res) => {
  try {
    const { password, hours } = req.body;
    if (password !== process.env.VITE_DESIGNER_PASSWORD) return res.status(401).json({ error: 'Unauthorized' });
    if (typeof hours !== 'number' || hours <= 0) return res.status(400).json({ error: 'Invalid hours value' });

    countdownEndTime = Date.now() + hours * 60 * 60 * 1000;
    countdownActive = true;
    console.log(`🔄 Countdown set for ${hours} hours, ends at ${new Date(countdownEndTime).toLocaleString()}`);
    res.json({ success: true, endTime: countdownEndTime, message: `Countdown set for ${hours} hours` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to set countdown' });
  }
});

// Verify designer password
app.post('/api/verify-designer-password', (req, res) => {
  try {
    const { password } = req.body;
    if (!process.env.VITE_DESIGNER_PASSWORD) return res.status(500).json({ error: 'Server misconfigured' });
    if (!password) return res.status(400).json({ error: 'Password required' });
    res.json({ valid: password === process.env.VITE_DESIGNER_PASSWORD });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Verification failed' });
  }
});

// Submit order to Discord webhook
app.post('/api/submit-order', async (req, res) => {
  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) return res.status(500).json({ error: 'Server misconfigured' });

    const { name, email, service, details, budget } = req.body;
    if (!name || !email || !service || !details) return res.status(400).json({ error: 'Missing required fields' });

    const serviceLabels = {
      livery: 'Livery Design',
      logo: 'Logo Creation',
      'ui-graphics': 'UI & Graphic Packs',
      other: 'Other / Custom Request',
    };

    const embed = {
      embeds: [{
        title: '🎨 New Order Request',
        color: 0x6366f1,
        fields: [
          { name: '👤 Customer Name', value: name, inline: true },
          { name: '📧 Email', value: email, inline: true },
          { name: '🎯 Service Type', value: serviceLabels[service] || service, inline: false },
          { name: '📝 Project Details', value: details, inline: false },
          { name: '💰 Budget', value: budget || 'Not specified', inline: false },
        ],
        timestamp: new Date().toISOString(),
        footer: { text: 'Concept Custom Order System' },
      }],
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(embed),
    });

    if (!response.ok) throw new Error(`Discord webhook failed: ${response.status}`);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit order' });
  }
});

// OpenAI Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'AI service not configured' });

    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: 'Invalid messages format' });

    const sanitizedMessages = messages
      .filter(msg => msg.role === 'user' || msg.role === 'assistant')
      .map(msg => ({ role: msg.role, content: String(msg.content || '') }));

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful customer support assistant for Concept Custom ...' },
          ...sanitizedMessages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', errorText);
      throw new Error(`OpenAI API failed: ${response.status}`);
    }

    const data = await response.json();
    res.json({ message: data.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process chat request' });
  }
});

// ===== Serve React frontend =====
const frontendPath = path.join(__dirname, '../frontend/dist'); // Adjust relative to backend
app.use(express.static(frontendPath));

// Root and all React routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(frontendPath, 'index.html'));
});

// ===== Start server =====
app.listen(PORT, () => console.log(`✅ Backend server running on port ${PORT}`));
