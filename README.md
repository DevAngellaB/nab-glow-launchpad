# 🌸 N.A.B Glow - Nourish. Align. Blossom

> **Affordable skincare, body care, and digital wellness tools for women seeking a simple but powerful self-care routine.**

[![Live Site](https://img.shields.io/badge/Live%20Site-devangellab.github.io-pink?style=for-the-badge)](https://devangellab.github.io/nab-glow-launchpad/)
[![Launch Date](https://img.shields.io/badge/Launch%20Date-January%201%2C%202026-blue?style=for-the-badge)](https://devangellab.github.io/nab-glow-launchpad/)
[![Waitlist](https://img.shields.io/badge/Join-Waitlist-gradient?style=for-the-badge)](https://devangellab.github.io/nab-glow-launchpad/#newsletter)

## ✨ About N.A.B Glow

N.A.B Glow is a beauty and wellness brand launching January 1st, 2026. We believe in making self-care accessible, affordable, and effective for every woman who wants to nourish her skin, align her body, and blossom into her most radiant self.

### Our Three Pillars:
- 🧴 **Skincare**: Gentle, effective formulas for glowing, healthy skin
- 💆‍♀️ **Body Care**: Nourishing products for head-to-toe wellness  
- 📱 **Digital Glow Tools**: Wellness apps and guides for mindful living

## 🚀 Live Preview

**Website**: [devangellab.github.io/nab-glow-launchpad](https://devangellab.github.io/nab-glow-launchpad/)

### Key Features
- ✅ Responsive landing page with smooth animations
- ✅ Product category showcase
- ✅ Waitlist signup system with Netlify Forms
- ✅ Admin analytics dashboard (`/admin`)
- ✅ Social media integration
- ✅ SEO optimized with custom favicon
- ✅ PWA ready with manifest

## 📊 Waitlist System

Our comprehensive waitlist system captures:
- **Email signups** with timestamp tracking
- **Product interests** (Skincare, Body Care, Digital Tools)
- **Specific product preferences** (Starter Kit, Complete System, Custom Plan)
- **Engagement analytics** with localStorage backup

### View Analytics
- **Admin Dashboard**: Visit `/admin` to view collected data
- **Netlify Forms**: Check your Netlify dashboard for form submissions
- **Local Storage**: Data backed up in browser for development

See [WAITLIST_SETUP.md](./WAITLIST_SETUP.md) for detailed implementation guide.

## 🛠 Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui with custom variants
- **Forms**: Netlify Forms integration
- **Routing**: React Router with HashRouter (GitHub Pages compatible)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages via gh-pages

### Custom Features
- 🎨 Brand-specific color palette and gradients
- ✨ Glow effects and animations
- 📱 Mobile-first responsive design
- 🔧 Smooth scrolling navigation
- 📈 Built-in analytics dashboard

## 🏃‍♀️ Quick Start

### Prerequisites
- Node.js 16+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/DevAngellaB/nab-glow-launchpad.git

# Navigate to project directory
cd nab-glow-launchpad

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:8080
npm run preview      # Preview production build

# Building
npm run build        # Build for production
npm run build:dev    # Build in development mode

# Deployment
npm run deploy       # Build and deploy to GitHub Pages
npm run predeploy    # Pre-deployment build (runs automatically)

# Quality
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── HeroSection.tsx # Landing hero section
│   ├── ProductCategories.tsx # Product showcase
│   ├── NewsletterSection.tsx # Waitlist signup
│   ├── WaitlistAdmin.tsx # Analytics dashboard
│   └── ...
├── pages/              # Page components
├── utils/              # Utility functions
├── assets/             # Images and static files
└── styles/             # CSS files

public/
├── favicon.ico         # Legacy favicon
├── favicon.svg         # Modern SVG favicon
├── manifest.json       # PWA manifest
└── robots.txt         # SEO robots file
```

## 🎨 Design System

### Brand Colors
- **Primary**: Pink gradient (`#f9c2e7` to `#e91e63`)
- **Secondary**: Blue gradient (`#b8e6ff` to `#64b5f6`)
- **Accent**: Cream tones (`#fef7f0`)
- **Text**: Dark purple (`#2d1b45`)

### Typography
- **Font Family**: Inter (system fallback)
- **Headings**: Bold weights with text shadows
- **Body**: Regular weight with optimal line height

## 🚢 Deployment

The site is automatically deployed to GitHub Pages using the `gh-pages` package.

### Manual Deployment
```bash
npm run deploy
```

### Automatic Deployment
Push to `main` branch, then run deploy command. The site will be available at:
`https://devangellab.github.io/nab-glow-launchpad/`

## 📈 Analytics & Monitoring

### Built-in Analytics
- Visit `/admin` to view waitlist analytics
- Download JSON exports of collected data
- Monitor engagement patterns and popular products

### Recommended Additions
- Google Analytics 4
- Hotjar for user behavior
- Email marketing integration (Mailchimp, ConvertKit)

## 🔧 Configuration

### Environment Setup
- **Base URL**: Configured for GitHub Pages in `vite.config.ts`
- **Routing**: HashRouter for static hosting compatibility
- **Forms**: Netlify Forms with hidden form detection

### Customization
- **Colors**: Update CSS custom properties in `src/index.css`
- **Content**: Modify component files in `src/components/`
- **Images**: Replace assets in `src/assets/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact & Support

- **Email**: hello@nabglow.com
- **Instagram**: [@glow.withnab](https://instagram.com/glow.withnab)
- **Website**: [N.A.B Glow Launchpad](https://devangellab.github.io/nab-glow-launchpad/)

## 📄 License

This project is private and proprietary to N.A.B Glow. All rights reserved.

---

**Made with 💕 for glowing skin and wellness** | Launching January 1st, 2026 ✨
