# Concept Customs Website

## Overview
**Concept Customs** is a professional design hub specializing in ERLC (Elenium Roleplay) server designs. The website serves as a landing page and portfolio showcasing their services for custom liveries, logos, and graphic design work for ERLC gaming communities.

**Current Status:** Production-ready single-page application running on port 5000

---

## Project Architecture

### Tech Stack
- **Frontend Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.0
- **Styling:** Tailwind CSS 4.0.4
- **Icons:** Lucide-react + React-icons
- **Smooth Scrolling:** react-scroll 1.9.0
- **Language:** JavaScript (with TypeScript types)
- **Package Manager:** npm

### Project Structure
```
/
├── src/
│   ├── App.jsx              # Main application component with navigation
│   ├── HeroSection.jsx      # Landing section with CTA
│   ├── Features.jsx         # Why Choose Us section (4 features)
│   ├── ServicesList.jsx     # Services offered (3 main services)
│   ├── Footer.jsx           # Contact info and links
│   ├── server.js            # Express backend for Discord OAuth (not actively used)
│   └── index.jsx            # Application entry point
├── public/
│   └── favicon.svg
├── vite.config.js           # Vite configuration (port 5000, strictPort)
├── package.json             # Dependencies and scripts
└── tsconfig.json
```

---

## Website Content

### Brand Identity
- **Name:** Concept Customs
- **Tagline:** "Your go-to ERLC design hub"
- **Niche:** ERLC (Elenium Roleplay) server design services
- **Color Scheme:** Gradient purple/indigo with pink and yellow accents
- **Contact Email:** support@conceptcustoms.com
- **Discord:** https://discord.gg/MwaDWK5SUb

### Navigation Structure
Single-page application with smooth scrolling to sections:
1. **Home** - Hero section
2. **Features** - Why choose Concept Customs
3. **Services** - What they offer
4. **Contact** - Footer with contact info

### Page Sections

#### 1. Hero Section (`HeroSection.jsx`)
- Gradient background (indigo-600 to purple-700)
- Main heading: "Concept Customs" (with "Customs" in pink)
- Value proposition text about ERLC design services
- Primary CTA: "Join the Server" button (links to Discord)
- Background image placeholder (currently not active)

#### 2. Features Section (`Features.jsx`)
Four key selling points in a grid layout:

1. **Creative, Custom Designs**
   - Icon: Paintbrush (pink)
   - Description: Custom designs from scratch

2. **High-Quality Standards**
   - Icon: ShieldCheck (purple)
   - Description: Crisp, layered files ready to use

3. **Fast Turnaround**
   - Icon: Clock (indigo)
   - Description: 48-72 hour completion time

4. **Trusted by Top Servers**
   - Icon: Star (yellow)
   - Description: Powers respected ERLC communities

#### 3. Services Section (`ServicesList.jsx`)
Three main service offerings:

1. **Livery Design**
   - Custom vehicle liveries for departments
   - Clean, realistic, brand-tailored

2. **Logo Creation**
   - Unique logos for servers/agencies
   - Professional identity branding

3. **UI & Graphic Packs**
   - Banners, social media kits
   - Complete visual presence packages

#### 4. Footer Section (`Footer.jsx`)
- Contact email: support@conceptcustoms.com
- Discord link
- Terms and Privacy Policy links (pages not yet created: /tos, /privacy)
- Copyright: © 2025 Concept Customs

---

## Technical Configuration

### Vite Configuration
```javascript
{
  server: {
    host: '0.0.0.0',    // Allows external connections
    port: 5000,          // Required for Replit webview
    strictPort: true,    // Fails if port unavailable
  }
}
```

### Workflow Setup
- **Name:** Server
- **Command:** `npm run dev`
- **Port:** 5000
- **Output Type:** webview
- **Status:** Running

### Available Scripts
- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

## Key Dependencies

### Production
- react, react-dom (18.2.0)
- react-scroll (1.9.0) - Smooth navigation
- lucide-react (0.525.0) - Feature icons
- react-icons (5.4.0) - Additional icons
- tailwindcss (4.0.4) - Styling

### Backend (Currently Unused)
- express (4.21.2)
- cors (2.8.5)
- dotenv (16.4.7)
- node-fetch (3.3.2)
- *Note: server.js exists for Discord OAuth but is not actively running*

---

## Design System

### Colors
- **Primary Gradient:** `from-indigo-600 to-purple-700`
- **Accent Colors:**
  - Pink: `pink-300` (for brand name emphasis)
  - Yellow: `yellow-400` (for CTAs)
  - Purple shades: `purple-300`
  - Indigo shades: `indigo-200`
- **Neutral:** Gray-800, Gray-200, Gray-900

### Component Patterns
- Glassmorphism cards: `bg-white bg-opacity-10 backdrop-blur-md`
- Hover effects: `hover:shadow-xl transition-all duration-300`
- Fixed navigation: `fixed w-full top-0 z-50`
- Responsive grid: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`

---

## Recent Changes
- **Oct 19, 2025:** Fixed Vite configuration to strictly bind to port 5000 for Replit webview compatibility

---

## Known Issues & TODOs

### Production Readiness
1. ⚠️ **Tailwind CDN Warning** - Currently using cdn.tailwindcss.com (not recommended for production)
   - Should migrate to PostCSS plugin or Tailwind CLI
   - Current warning in browser console

2. **Missing Pages**
   - `/tos` - Terms of Service page (linked but not created)
   - `/privacy` - Privacy Policy page (linked but not created)

3. **Background Image**
   - Hero section has placeholder for background image
   - Path: `/path/to/design-showcase.jpg` (not implemented)

4. **Unused Backend**
   - `server.js` contains Discord OAuth logic but isn't running
   - May need integration for future features

---

## External Links
- **Discord Community:** https://discord.gg/MwaDWK5SUb
- **Contact Email:** support@conceptcustoms.com

---

## Development Notes

### Running Locally
1. `npm install` - Install dependencies
2. `npm run dev` - Start on port 5000
3. Open webview to see changes

### Port Requirements
- **Must use port 5000** for Replit webview
- `strictPort: true` ensures it fails if port is unavailable
- If port issues occur, kill existing node processes: `pkill -f "vite"`

### Styling Approach
- Uses Tailwind utility classes throughout
- No separate CSS files (except App.css which may be minimal/unused)
- Responsive design with mobile-first breakpoints

---

*Last Updated: October 19, 2025*
