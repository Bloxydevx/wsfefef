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
│   ├── Ordering.jsx         # Order form with Discord webhook integration
│   ├── Portfolio.jsx        # Designer portfolio showcase page
│   ├── DesignerAccess.jsx   # Password-protected designer handbook
│   ├── MeetTheTeam.jsx      # Team leadership page with images
│   ├── ChatWidget.jsx       # AI-powered live chat widget (OpenAI)
│   ├── Footer.jsx           # Contact info and links
│   └── index.jsx            # Application entry point
├── public/
│   ├── images/
│   │   ├── rally_boy143.png # Team member image
│   │   └── bloxydev__.png   # Team member image
│   └── favicon.svg
├── server.js                # Express backend for webhooks & OpenAI API
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
Multi-page application with React Router:
1. **Home** - Main landing page (Hero + Features + Services sections)
2. **Ordering** - Separate page with order form
3. **Portfolio** - Designer showcase page featuring best designers and their work
4. **Designer Access** - Password-protected designer handbook
5. **Meet the Team** - Leadership team page with rally_boy143 and bloxydev__
6. **Terms of Service** - Legal ToS page (/tos) - linked from footer
7. **Privacy Policy** - Privacy policy page (/privacy) - linked from footer

**AI Live Chat:**
- Floating chat widget available on all pages (bottom right)
- Powered by OpenAI GPT-3.5-turbo
- Provides instant customer support about services, pricing, and ordering

**Mobile Responsive:**
- Hamburger menu on mobile devices (screens < 768px)
- Desktop horizontal menu on larger screens
- All pages optimized for mobile and tablet viewing

### Page Sections

#### Home Page (`Home.jsx`)
Displays the main landing page with all sections:
- Hero Section
- Features Section
- Services Section
- Footer

#### Ordering Page (`Ordering.jsx`)
Standalone ordering form where customers can:
- Enter their name and email
- Select service type (Livery, Logo, UI/Graphics, Other)
- Describe project details
- Specify budget
- Submit order via secure backend API (sends to Discord webhook)
- Alternative option to join Discord directly

#### Designer Access Page (`DesignerAccess.jsx`)
Password-protected page for team designers:
- **Password:** Stored securely in VITE_DESIGNER_PASSWORD environment variable
- Contains full Designer Handbook with:
  - Rules and expectations
  - Pay rates and promotions
  - Quality control procedures
  - Order logging instructions
  - Command reference
  - Bot hosting prices
  - Asset usage guidelines

#### Meet the Team Page (`MeetTheTeam.jsx`)
Showcases the leadership team:
- **rally_boy143** - Executive, Lead Of Operations (with image support)
- **bloxydev__** - Co Executive, Co-Lead Of Operations (with image support)
- Images can be uploaded to public/images/ folder
- Fallback to gradient avatar with initial if image not available
- Includes call-to-action to join Discord
- Fully responsive for mobile and desktop

#### Terms of Service Page (`TermsOfService.jsx`)
Complete legal terms covering:
- Acceptance of terms
- Eligibility requirements
- User conduct policies
- Content ownership
- Moderation and termination
- Effective date: October 18, 2025

#### Privacy Policy Page (`PrivacyPolicy.jsx`)
Comprehensive privacy policy including:
- Information collection practices
- Data usage and sharing
- Security measures
- User rights
- Third-party service links
- COPPA compliance
- Effective date: October 18, 2025

#### Portfolio Page (`Portfolio.jsx`)
Showcases the elite design team and their work:
- **Featured Designers:**
  - rally_boy143 (Executive, Lead Of Operations) - Livery Design & Branding specialist
  - bloxydev__ (Co Executive, Co-Lead Of Operations) - UI/UX & Graphics specialist
- **For Each Designer:**
  - Profile image with featured badge
  - 5-star rating display
  - Projects completed count (150+ and 130+ respectively)
  - Specialty areas
  - Featured work portfolio with 3 sample projects each
  - Project categories (Livery, Logo, Branding, Graphics, UI/UX)
- **Call-to-Actions:**
  - Join Discord to work with specific designers
  - Place order button
- Fully responsive design for mobile and desktop

#### AI Chat Widget (`ChatWidget.jsx`)
AI-powered customer support chat available on all pages:
- **Features:**
  - Floating button in bottom right corner
  - Opens to full chat interface
  - Message history maintained during session
  - Real-time responses powered by OpenAI GPT-3.5-turbo
  - Loading indicators and smooth animations
- **Backend Integration:**
  - Securely communicates with `/api/chat` endpoint
  - API key protected server-side
  - System prompt customized for Concept Customs services
- **User Experience:**
  - Greeting message on first open
  - Mobile-responsive chat window
  - Graceful error handling with Discord fallback
  - Auto-scrolls to latest messages

### Component Details

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
    proxy: {
      '/api': {
        target: 'http://localhost:3001',  // Proxy API requests to backend
        changeOrigin: true,
      }
    }
  }
}
```

**API Proxy:** The Vite dev server proxies all `/api/*` requests to the Express backend on port 3001. This enables the frontend to communicate with the backend using relative URLs (e.g., `/api/verify-designer-password`) instead of absolute URLs with port numbers, ensuring compatibility in Replit's environment.

### Workflow Setup
- **Frontend Server**
  - **Name:** Server
  - **Command:** `npm run dev`
  - **Port:** 5000
  - **Output Type:** webview
  - **Status:** Running

- **Backend API**
  - **Name:** Backend
  - **Command:** `node server.js`
  - **Port:** 3001
  - **Output Type:** console
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

### Backend (Active)
- express (5.1.0) - API server for secure webhook proxy and AI chat
- cors (2.8.5) - Cross-origin resource sharing
- *Note: server.js provides:*
  - Discord webhook integration for order submissions
  - Designer password verification
  - OpenAI chat API proxy for AI customer support

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
- **Oct 19, 2025 (Latest Update):**
  - **Added AI Live Chat:** Implemented OpenAI-powered customer support chatbot
    - Created ChatWidget.jsx component with floating chat interface
    - Added `/api/chat` backend endpoint for OpenAI API integration
    - Uses GPT-3.5-turbo with custom system prompt about Concept Customs services
    - Available on all pages with mobile-responsive design
    - Secure API key management through environment variables
  - **Added Portfolio Page:** New designer showcase page
    - Features rally_boy143 and bloxydev__ with their specialties
    - Displays 5-star ratings and project counts (150+ and 130+)
    - Shows 3 featured projects per designer with categories
    - Fully responsive with professional card-based design
  - **Updated Navigation:** Added Portfolio link between Ordering and Designer Access
  - **Environment Variable Improvements:** Added startup validation for all required secrets
  - **Backend Enhancements:** server.js now handles three API endpoints:
    - `/api/verify-designer-password` - Designer authentication
    - `/api/submit-order` - Discord webhook proxy for orders
    - `/api/chat` - OpenAI chat completions for AI support

- **Oct 19, 2025 (Earlier):**
  - **Fixed API Communication:** Added Vite proxy configuration to route `/api/*` requests to backend on port 3001
  - Updated frontend to use relative API paths instead of absolute URLs with port numbers
  - Fixed designer password authentication system
  - Fixed Discord webhook integration for order submissions
  - Both features now fully functional in Replit's environment

- **Oct 19, 2025 (Earlier):** 
  - Fixed Vite configuration to strictly bind to port 5000 for Replit webview compatibility
  - Added React Router for multi-page navigation
  - Created separate Ordering page with order form
  - Created password-protected Designer Access page with full Designer Handbook
  - Updated navigation: Home | Ordering | Designer Access | Meet the Team
  - Replaced "Contact" nav item with "Meet the Team" page
  - Kept Features section on main home page
  - Added Terms of Service page (/tos) with complete legal terms
  - Added Privacy Policy page (/privacy) with comprehensive privacy information
  - Implemented mobile-responsive navigation with hamburger menu
  - Added Meet the Team page featuring rally_boy143 (Executive) and bloxydev__ (Co Executive)
  - All pages now fully mobile accessible with responsive design
  - **Security Improvements:**
    - Implemented secure backend API (server.js) for Discord webhook integration
    - Moved designer password to VITE_DESIGNER_PASSWORD environment variable
    - Removed hardcoded secrets from client-side code
    - Order form now submits through backend API to protect webhook URL
  - **Team Images:**
    - Added image support for team members (rally_boy143 and bloxydev__)
    - Images can be placed in public/images/ directory
    - Graceful fallback to gradient avatars if images unavailable

---

## Known Issues & TODOs

### Production Readiness
1. ⚠️ **Tailwind CDN Warning** - Currently using cdn.tailwindcss.com (not recommended for production)
   - Should migrate to PostCSS plugin or Tailwind CLI
   - Current warning in browser console

3. **Background Image**
   - Hero section has placeholder for background image
   - Path: `/path/to/design-showcase.jpg` (not implemented)

4. **Team Member Images**
   - Upload rally_boy143.png and bloxydev__.png to public/images/ directory
   - Images should be square format (recommended: 512x512px or higher)
   - Supported formats: PNG, JPG, WebP

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
