# 🚀 ITSA Website - Quick Start Guide

## ✅ What's Been Built

A **professional, modern, fully-animated website** for the Information Technology Students Association (ITSA) at GH Raisoni College of Engineering and Management.

### 📦 What You Get

✨ **7 Complete Pages:**
1. **Home** - Hero with animations, statistics, featured events
2. **About ITSA** - Organization overview, vision, mission, values
3. **Committee** - Faculty authorities & core committee members
4. **Events** - Filterable event catalog with modal details
5. **Gallery** - Year-wise and category-wise photo gallery with lightbox
6. **Achievements** - Milestones and achievements timeline
7. **Contact** - Contact form, map, and location details

### 🎨 Premium Features

- 🎭 **GSAP Animations**: Smooth scroll-triggered animations
- 🌊 **Parallax Effects**: Dynamic scroll-based movements
- 🎪 **Hover Effects**: Lift, glow, and zoom animations
- 📱 **Fully Responsive**: Mobile, tablet, and desktop optimized
- 🎨 **Dark Theme**: Navy background with indigo/violet accents
- ⚡ **Fast Loading**: Optimized with Vite
- 🔍 **SEO Ready**: Meta tags and semantic HTML

---

## 🏃 How to Run

### Terminal Command
```bash
npm run dev
```

The website will open at: **http://localhost:5173**

### Or Manually

1. Open your terminal
2. Navigate to the project folder:
   ```bash
   cd "c:\Users\91982\Desktop\itsa website"
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

---

## 📋 What's Included

### Component Structure
```
✅ Navigation - Fixed header with smooth scroll
✅ Hero Section - Animated title with scroll indicator
✅ Statistics - Animated counters
✅ Event Cards - Filterable grid with modals
✅ Gallery - Masonry layout with lightbox
✅ Committee Grid - Professional member cards
✅ Contact Form - Functional form with validation
✅ Footer - Links and social media
```

### Technologies Used
- React 19 (Vite)
- Tailwind CSS v3
- GSAP (animations)
- React Router
- Lucide Icons

---

## 🎯 Navigation Menu

The website includes a smooth-scrolling navigation bar with links to:
- Home
- About ITSA
- Committee
- Events
- Gallery
- Achievements
- Contact

---

## 📝 Quick Customization

### Change College/Organization Name

**File:** `src/components/Navigation.jsx` and `src/App.jsx`

Find and replace "ITSA" with your organization name.

### Update Contact Information

**File:** `src/pages/ContactPage.jsx` and `src/components/Footer.jsx`

Update:
- Email: `itsa@ghrcem.ac.in`
- Phone: `+91 9999999999`
- Address: GH Raisoni College, Pune

### Add Events

**File:** `src/data/events.json`

Add a new event object:
```json
{
  "id": 9,
  "title": "Your Event Title",
  "category": "Technical",
  "date": "2024-12-25",
  "description": "Event description",
  "coordinators": ["Name 1", "Name 2"],
  "image": "/images/events/your-image.jpg",
  "year": "2024–25 Term I"
}
```

### Add Gallery Images

**File:** `src/data/gallery.json`

Add image entries:
```json
{
  "id": 50,
  "src": "/images/gallery/2024-25/your-image.jpg",
  "alt": "Image description"
}
```

### Update Team Members

**File:** `src/data/committee.json`

Add committee members to the core committee array.

---

## 🛠️ Build for Production

### Create Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The optimized files will be in the `dist/` folder, ready for deployment.

---

## 📂 Project Files Location

```
c:\Users\91982\Desktop\itsa website\
├── src/
│   ├── components/      → Reusable components
│   ├── pages/          → Page components
│   ├── data/           → JSON data files (events, gallery, committee)
│   ├── hooks/          → Animation hooks
│   ├── utils/          → Helper functions
│   ├── App.jsx         → Main app file with routing
│   ├── main.jsx        → Entry point
│   └── index.css       → Global styles
├── public/             → Static images and assets
├── index.html          → HTML template
├── tailwind.config.js  → Tailwind configuration
├── postcss.config.js   → PostCSS configuration
├── vite.config.js      → Vite configuration
└── package.json        → Dependencies
```

---

## 🖼️ Add Images

### Where to Place Images

1. Create folders in `public/` directory:
   ```
   public/
   ├── images/
   │   ├── events/
   │   ├── gallery/
   │   └── committee/
   ```

2. Add your images to these folders

3. Reference them in JSON files using paths like:
   - `/images/events/tech-workshop.jpg`
   - `/images/gallery/2024-25/event-1.jpg`
   - `/images/committee/president.jpg`

---

## ⚙️ Environment Details

- **Node.js**: v14+
- **npm**: Latest version
- **Browser**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Development Server**: Vite (Hot Module Replacement)

---

## 📊 Performance

- ⚡ **Fast Load Time**: Optimized with Vite
- 🎨 **Smooth Animations**: GSAP performance optimization
- 📱 **Mobile Optimized**: Touch-friendly interactions
- 🔄 **Hot Reload**: Instant updates during development

---

## 🔐 Security & Best Practices

- ✅ No hardcoded sensitive data
- ✅ Semantic HTML structure
- ✅ Proper error handling
- ✅ Clean code architecture
- ✅ Component reusability

---

## 🐛 Common Issues & Solutions

### Issue: Port 5173 already in use
**Solution:**
```bash
npm run dev -- --port 3000
```

### Issue: CSS not applying
**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Restart dev server
3. Check tailwind.config.js paths

### Issue: Images not showing
**Solution:**
1. Verify image path in JSON files
2. Check image file exists in `public/` folder
3. Use correct path format: `/images/folder/image.jpg`

---

## 📞 Support & Resources

### Official Docs
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP Docs](https://gsap.com)
- [Vite Guide](https://vitejs.dev)

### Project Documentation
See `README_FULL.md` for comprehensive documentation

---

## 🎉 You're Ready!

Your professional ITSA website is now running with:
- ✨ Modern animations
- 🎨 Professional design
- 📱 Full responsiveness
- 🚀 Production-ready code

### Next Steps

1. **Customize content** - Update organization details
2. **Add images** - Place your event and gallery photos
3. **Update data** - Modify events, gallery, and committee
4. **Deploy** - Build and deploy to hosting service

---

## 📄 License

Created for GH Raisoni College of Engineering and Management, Pune.

---

**Happy Building! 🚀**

For questions or support:
- 📧 Email: itsa@ghrcem.ac.in
- 📞 Phone: +91 9999999999
- 📍 Location: Pune, India
