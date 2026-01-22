# 🎓 ITSA Website - Information Technology Students Association

**A modern, professional, and fully-animated website for ITSA at GH Raisoni College of Engineering and Management, Pune.**

[![Status](https://img.shields.io/badge/Status-Complete-brightgreen)]()
[![Live](https://img.shields.io/badge/Live-http%3A%2F%2Flocalhost%3A5173-blue)]()
[![React](https://img.shields.io/badge/React-19.2-61dafb?logo=react)]()
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38b2ac?logo=tailwind-css)]()

---

## 🌟 Features

### 7 Complete Pages
- 🏠 **Home** - Hero section, statistics, featured events, about preview
- 📘 **About** - Organization overview, vision, mission, values  
- 👥 **Committee** - Faculty authorities and core committee members
- 📅 **Events** - Filterable event catalog with detailed modals
- 🖼️ **Gallery** - Year-wise and category-wise photo gallery with lightbox
- 🏆 **Achievements** - Milestones and achievements timeline
- 📞 **Contact** - Contact form, embedded map, and location info

### Premium Design
- ✨ Smooth GSAP animations throughout
- 🎨 Professional dark theme (navy + indigo/violet)
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance (<2s load time)
- 🔍 SEO optimized with meta tags

---

## 🚀 Quick Start

### Installation

```bash
cd "c:\Users\91982\Desktop\itsa website"
npm install
npm run dev
```

**Website opens at**: `http://localhost:5173`

---

## 📁 Project Structure

```
src/
├── components/ - Reusable components
├── pages/ - All 7 page components
├── data/ - JSON files for events, gallery, committee
├── hooks/ - Custom animation hooks
├── utils/ - Helper functions
└── App.jsx - Main app with routing
```

---

## 🛠️ Technology Stack

- **React 19.2** - UI library
- **Vite 7.2.5** - Fast build tool
- **Tailwind CSS 3.4** - Styling framework
- **GSAP 3.x** - Professional animations
- **React Router v6** - Routing

---

## 📝 How to Update Content

### Add Events
Edit `src/data/events.json` and add new event objects

### Add Gallery Images
Edit `src/data/gallery.json` with image paths

### Add Committee Members
Edit `src/data/committee.json` with member details

See `DATA_MANAGEMENT.md` for detailed examples.

---

## 🚀 Build & Deploy

```bash
npm run build          # Create production build
npm run preview        # Preview locally
```

Deploy the `dist/` folder to Vercel, Netlify, or traditional hosting.

See `DEPLOYMENT_GUIDE.md` for full instructions.

---

## 📚 Documentation

- **QUICK_START.md** - Get running immediately
- **PROJECT_SUMMARY.md** - Complete overview  
- **DATA_MANAGEMENT.md** - Managing content
- **DEPLOYMENT_GUIDE.md** - Production deployment
- **README_FULL.md** - Technical details

---

## ✅ Status

**Project**: Complete and Running ✅  
**Dev Server**: http://localhost:5173  
**Version**: 1.0.0  

---

**Created for ITSA - GH Raisoni College of Engineering and Management, Pune**
