# Concept Custom Website

## Overview
Concept Custom is a professional design hub specializing in ERLC (Elenium Roleplay) server designs. The website serves as a landing page and portfolio, showcasing services for custom liveries, logos, and graphic design work tailored for ERLC gaming communities. The project aims to provide a comprehensive online presence, including client ordering, designer access, and AI-powered customer support.

## User Preferences
I prefer iterative development with a focus on clear, concise explanations. Please ask before making major architectural changes or significant modifications to existing components. Ensure all new features are fully responsive and integrate seamlessly with the existing design system. Do not make changes to the folder `public/images/`.

## System Architecture
The project is a React 18.2.0 single-page application built with Vite 5.0.0 and styled using Tailwind CSS 4.0.4. It uses `react-scroll` for smooth navigation and `lucide-react` and `react-icons` for iconography. The application is structured into distinct React components for different sections (e.g., `HeroSection`, `ServicesList`, `Ordering`, `Portfolio`).

**Key Architectural Decisions & Features:**
- **Multi-page Navigation:** Implemented with React Router for dedicated pages like Home, Ordering, Portfolio, Designer Access, Meet the Team, Terms of Service, and Privacy Policy.
- **AI Live Chat:** A floating widget powered by OpenAI GPT-3.5-turbo provides instant customer support across all pages, communicating securely via a backend API.
- **Secure Backend API:** An Express.js server (`server.js`) handles sensitive operations such as Discord webhook integration for order submissions, designer password verification, and proxying OpenAI API calls, protecting API keys and sensitive information.
- **Synchronized Coming Soon Countdown:** A server-managed countdown timer that displays the same time across all devices and users. When the timer ends, the website unlocks and stays unlocked until manually rescheduled. The countdown is stored in server memory (resets on server restart to 9 hours by default).
- **Responsive Design:** All pages and components are optimized for mobile, tablet, and desktop viewing, utilizing a hamburger menu for mobile navigation.
- **Designer Access:** A password-protected section provides internal documentation for team designers.
- **Portfolio Showcase:** A dedicated page highlights kingdummyj, Concept Custom's 2025 Best Designer, with detailed project samples showcasing Livery Designs, Clothing & Discord Development work.
- **Vite Configuration:** Configured to run on port 5000 with a proxy for `/api` requests to the backend server on port 3001, ensuring seamless communication in the Replit environment.
- **Design System:** Utilizes a consistent color scheme (gradient purple/indigo with pink and yellow accents) and component patterns like glassmorphism cards and hover effects.

## Countdown Management

The website has a synchronized countdown feature that locks the site until the timer ends.

**How It Works:**
- When the backend server starts, it initializes a 9-hour countdown
- All users see the same countdown time, synchronized across all devices
- When the countdown ends, the website unlocks and stays unlocked
- The website remains unlocked until you manually set a new countdown

**To Reschedule the Countdown:**

Use the following command in your terminal or via API tool (replace `YOUR_PASSWORD` with your designer password and `HOURS` with the number of hours):

```bash
curl -X POST https://your-domain/api/set-countdown \
  -H "Content-Type: application/json" \
  -d '{"password": "YOUR_PASSWORD", "hours": HOURS}'
```

Example to set a 9-hour countdown:
```bash
curl -X POST https://your-domain/api/set-countdown \
  -H "Content-Type: application/json" \
  -d '{"password": "your-designer-password", "hours": 9}'
```

**Environment Variables Required:**
- `VITE_DESIGNER_PASSWORD` - Password for designer access and countdown management
- `DISCORD_WEBHOOK_URL` - Discord webhook for order submissions
- `OPENAI_API_KEY` - OpenAI API key for AI chat widget

## External Dependencies
- **React:** Frontend library for building user interfaces.
- **Vite:** Next-generation frontend tooling for fast development.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Lucide-react & React-icons:** Icon libraries.
- **react-scroll:** For smooth scrolling navigation.
- **Express.js:** Backend framework for Node.js, used for API endpoints.
- **CORS:** Node.js middleware for enabling Cross-Origin Resource Sharing.
- **OpenAI API:** Used for the AI-powered live chat widget (GPT-3.5-turbo).
- **Discord Webhooks:** Integrated for submitting customer orders to a Discord channel.