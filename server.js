import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => {
  console.log(`✅ Backend server running on port ${PORT}`);
});
