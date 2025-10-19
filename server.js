import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Verify environment variables on startup
const requiredEnvVars = ['VITE_DESIGNER_PASSWORD', 'DISCORD_WEBHOOK_URL', 'OPENAI_API_KEY'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingVars.length > 0) {
  console.error(`❌ Missing required environment variables: ${missingVars.join(', ')}`);
  console.error('Server cannot start without all required environment variables.');
  process.exit(1);
} else {
  console.log('✅ All required environment variables are configured');
}

app.post('/api/verify-designer-password', (req, res) => {
  try {
    const { password } = req.body;
    const correctPassword = process.env.VITE_DESIGNER_PASSWORD;
    
    if (!correctPassword) {
      console.error('VITE_DESIGNER_PASSWORD not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    if (!password) {
      return res.status(400).json({ error: 'Password required' });
    }

    const isValid = password === correctPassword;
    res.json({ valid: isValid });
  } catch (error) {
    console.error('Error verifying password:', error);
    res.status(500).json({ error: 'Verification failed' });
  }
});

app.post('/api/submit-order', async (req, res) => {
  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.error('DISCORD_WEBHOOK_URL not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const { name, email, service, details, budget } = req.body;

    if (!name || !email || !service || !details) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const serviceLabels = {
      "livery": "Livery Design",
      "logo": "Logo Creation",
      "ui-graphics": "UI & Graphic Packs",
      "other": "Other / Custom Request"
    };

    const embed = {
      embeds: [{
        title: "🎨 New Order Request",
        color: 0x6366f1,
        fields: [
          {
            name: "👤 Customer Name",
            value: name,
            inline: true
          },
          {
            name: "📧 Email",
            value: email,
            inline: true
          },
          {
            name: "🎯 Service Type",
            value: serviceLabels[service] || service,
            inline: false
          },
          {
            name: "📝 Project Details",
            value: details,
            inline: false
          },
          {
            name: "💰 Budget",
            value: budget || "Not specified",
            inline: false
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Concept Customs Order System"
        }
      }]
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(embed)
    });

    if (!response.ok) {
      throw new Error(`Discord webhook failed: ${response.status}`);
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Error submitting order:', error);
    res.status(500).json({ error: 'Failed to submit order' });
  }
});

app.post('/api/chat', async (req, res) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      console.error('OPENAI_API_KEY not configured');
      return res.status(500).json({ error: 'AI service not configured' });
    }

    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    // Sanitize messages to prevent system prompt injection
    const sanitizedMessages = messages
      .filter(msg => msg.role === 'user' || msg.role === 'assistant')
      .map(msg => ({
        role: msg.role,
        content: String(msg.content || '')
      }));

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a helpful customer support assistant for Concept Customs, a professional ERLC (Elenium Roleplay) design hub specializing in custom liveries, logos, and graphic design.

ABOUT US:
- Your go-to ERLC design hub for sleek liveries, polished graphics, logos, and more
- Contact: support@conceptcustoms.com
- Discord: https://discord.gg/concept25

SERVICES WE OFFER:
1. Livery Design - Custom-made vehicle liveries for departments (clean, realistic, brand-tailored)
2. Logo Creation - Unique logos for servers/agencies (professional identity branding)
3. UI & Graphic Packs - Banners, social media kits, complete visual presence packages

OUR FEATURES:
- Creative, custom designs made from scratch
- High-quality standards (crisp, layered files)
- Fast turnaround: 48-72 hours for most projects
- Trusted by top ERLC servers

OUR TEAM:
- rally_boy143: Executive, Lead of Operations - Livery Design & Branding specialist (150+ projects)
- bloxydev__: Co Executive, Co-Lead of Operations - UI/UX & Graphics specialist (130+ projects)
- kingdummyj: Concept Custom's 2025 Best Designer! - Livery Designs, Clothing & Discord Development specialist (200+ projects)

WEBSITE NAVIGATION:
- Home: Main landing page with features and services
- Ordering: Fill out order form for custom designs
- Portfolio: View our designers' featured work and specialties
- Designer Access: Password-protected area for team members
- Meet the Team: Learn about our leadership
- Terms of Service & Privacy Policy available

HOW TO ORDER:
1. Fill out the order form on our Ordering page (provide name, email, service type, project details, budget)
2. OR join our Discord at https://discord.gg/concept25 for direct communication
3. Orders are sent to our team via Discord for processing

Be friendly, professional, and helpful. Answer questions about services, pricing, turnaround times, our team, and how to place orders. If asked about specific designers, mention their specialties and project counts.`
          },
          ...sanitizedMessages
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      throw new Error(`OpenAI API failed: ${response.status}`);
    }

    const data = await response.json();
    res.json({ message: data.choices[0].message.content });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Failed to process chat request' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running on port ${PORT}`);
});
