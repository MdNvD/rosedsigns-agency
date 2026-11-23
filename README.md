# RoseDsigns — Creative Agency Landing Page ("Brands that Bloom")

A bespoke, responsive, and interactive landing page crafted for **RoseDsigns**, an international creative design and digital marketing studio bridging high-craft visual identity, high-performance web engineering, and connected growth marketing across Chennai (India) and Perth (Western Australia).

Designed and developed for the **Web Design & Development Specialist** practical assessment task.

---

## 🌹 Design Philosophy: Why This Doesn't Look Like Generic AI
Generic AI templates typically rely on interchangeable purple-to-cyan gradient blobs, meaningless SaaS buzzwords ("accelerating synergy paradigms"), static stock photos, and shallow boilerplate layouts.

In contrast, this project was built from the ground up with a **bespoke agency art direction**:
1. **Brand Authenticity & Lore:** Strictly rooted in RoseDsigns’ authentic philosophy: *"Brands that Bloom"*. Incorporates real client case studies (**A2B Perth**, **Thirai Flicks**, and **Biriyani Box**) and reflects the agency’s dual-continental presence (Chennai creative studio & Perth APAC client operations).
2. **Distinctive Editorial Typography:** Pairs **Syne** (bold geometric display serif used by Awwwards Site-of-the-Day agencies) with **Plus Jakarta Sans** for crisp, legible UI copy and **Playfair Display** for editorial italic accents.
3. **Intentional Color Harmony:** Signature Velvet Rose (`#E23B55`), Obsidian Charcoal (`#0B0C10`), Warm Alabaster (`#FAF8F5`), and Champagne Gold accents (`#E5B26E`).
4. **Tangible Interactive Engineering:** Not just visual mockups—fully functional interactive tools including an interactive Project Cost & Timeline Estimator that synchronizes directly with the proposal contact form.

---

## ⚡ Key Interactive Features & Sections

| Section | Description |
| :--- | :--- |
| **1. Header & Navigation** | Sticky glassmorphic blur nav with smooth anchor jumps, active ScrollSpy observer, Dark/Light mode switcher, and responsive mobile slide-out drawer. |
| **2. Hero Section** | Bold editorial typography, live Q1/Q2 availability pill, animated metric counters (120+ brands, 4.8x ROI, 50K+ conversions), and interactive Showreel modal. |
| **3. Client Ticker Marquee** | Infinite CSS marquee showcasing notable client brands (*A2B Perth · Thirai Flicks · Biriyani Box*). |
| **4. Philosophy & 4 Pillars** | Explains the agency’s strategic advantage across 4 pillars: *Strategy, Soul, Performance, and Scale*. |
| **5. Core Capabilities** | 4 in-depth service domains (Brand Identity, Web Engineering, Growth Marketing, Local & AI Search) with deliverable checklists and tech tags. |
| **6. Filterable Selected Works** | Interactive category filter (`All`, `Hospitality & F&B`, `Entertainment & Cinema`, `Web Development`) with custom high-res vector case study mockups and interactive modal dialogs detailing challenges, solutions, and ROI metrics. |
| **7. Interactive Cost Estimator** | Real-time calculation widget where clients select service scope, business scale, and delivery timeline to calculate estimated investment, with a 1-click button to auto-fill the proposal form. |
| **8. The Bloom Framework** | 4-step agency operational methodology (*01 Discover & Seed → 02 Cultivate & Design → 03 Engineer & Build → 04 Scale & Bloom*). |
| **9. Verified Testimonials** | Authentic quotes and star ratings from franchise directors and marketing heads. |
| **10. FAQ Accordion** | Expandable/collapsible accordion addressing cross-border delivery, turnaround times, and intellectual property ownership. |
| **11. Proposal & Contact Form** | Functional form with validation, service multi-select, budget selector, and instant animated success state. |
| **12. Footer** | Sitemap links, newsletter subscription with instant feedback, social links, and floating back-to-top button. |

---

## 📱 Responsive Ergonomics & Verification
- **Desktop (1920×1080 & 1440px wide):** Generous whitespace, multi-column grids, and tactile hover states.
- **Mobile (390px - 504px viewports):** Zero horizontal overflow, touch-friendly tap targets (minimum 44px), clean mobile drawer navigation, and responsive typography scaling using CSS `clamp()`.

High-resolution screenshots are included in the `/screenshots/` directory:
- `screenshots/desktop-preview.png` — Above-the-fold 1920×1080 desktop view
- `screenshots/desktop-fullpage.png` — Full desktop scroll
- `screenshots/mobile-preview.png` — Mobile viewport view
- `screenshots/mobile-fullpage.png` — Complete mobile scroll

---

## 🚀 How to Run Locally

### Option A: Double Click
Simply double-click `index.html` to open it in any modern web browser (Chrome, Edge, Safari, Firefox). Zero build step required!

### Option B: Node.js HTTP Server
```bash
npx serve . -l 3000
# or
npm start
```
Then visit `http://localhost:3000`.

### Option C: Python Server
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000`.

---

## 🌐 Instant 1-Click Hosting / Deployment

To host this site live for the RoseDsigns recruitment review:

### Via Vercel (Recommended — Takes 30 seconds):
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in this directory and press Enter for all prompts.
3. You will immediately receive a live URL (e.g., `https://rosedsigns-portfolio.vercel.app`).

### Via Netlify:
1. Drag and drop this folder directly into [Netlify Drop](https://app.netlify.com/drop).
2. Instant live production URL is generated immediately.

### Via GitHub Pages:
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of RoseDsigns landing page"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. In GitHub repository **Settings > Pages**, choose `main` branch and `/ (root)`, then click Save.

---

## 📁 Project File Structure
```
├── index.html               # Main semantic HTML5 document
├── package.json             # NPM project scripts & metadata
├── README.md                # Project documentation & candidate notes
├── take_screenshots.py      # Automated high-res screenshot capture utility
├── css/
│   ├── variables.css        # Design tokens, color palette, dark/light themes
│   ├── base.css             # Resets, typography, layout containers, glows
│   ├── components.css       # Nav, cards, badges, modals, estimator, forms
│   ├── animations.css       # Keyframes, hover lifts, pulse rings, marquee
│   └── responsive.css       # Fluid breakpoints for mobile, tablet, desktop
├── js/
│   ├── theme.js             # Dark/Light mode controller with persistence
│   ├── estimator.js         # Interactive pricing & proposal synchronizer
│   ├── portfolio.js         # Category filtering & case study modal system
│   ├── form.js              # Form validation & submission feedback
│   └── main.js              # Sticky nav, mobile drawer, scroll spy, accordion
├── assets/
│   ├── a2b-perth.svg        # Custom vector mockup for A2B Perth case study
│   ├── thirai-flicks.svg    # Custom vector mockup for Thirai Flicks case study
│   ├── biriyani-box.svg     # Custom vector mockup for Biriyani Box case study
│   └── aura-living.svg      # Custom vector mockup for Aura Living case study
└── screenshots/
    ├── desktop-preview.png  # High-res desktop viewport preview
    ├── desktop-fullpage.png # High-res full-length desktop capture
    ├── mobile-preview.png   # High-res mobile viewport preview
    └── mobile-fullpage.png  # High-res full-length mobile capture
```

---

## ✉️ Candidate Note for Pooja R Balaji & Team RoseDsigns
> *"This landing page was designed and developed by **Mohammed Navith** as part of the recruitment evaluation for the Web Design & Development Specialist position. Built purely as candidate spec work with strict adherence to RoseDsigns' brand guidelines ('Brands that Bloom'), authentic client roster (A2B Perth, Thirai Flicks, Biriyani Box), and cross-border operations between Chennai and Perth."*
