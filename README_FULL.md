# 🎯 ITSA - Information Technology Students Association Website

A modern, professional, and fully-animated website for the Information Technology Students Association at GH Raisoni College of Engineering and Management, Pune.

## 🌟 Features

### 🎨 Modern Design
- **Dark Theme**: Navy and slate background with indigo/violet accent colors
- **Smooth Animations**: GSAP-powered animations and scroll effects
- **Premium Look**: Professional design similar to Awwwards and Godly.website
- **Fully Responsive**: Mobile, tablet, and desktop optimized

### 📱 Key Sections

#### 🏠 Home Page
- **Hero Section**: Animated heading with scroll indicator
  - Large typography: "Information Technology Students Association"
  - Subtitle with gradient text
  - CTA buttons with smooth hover effects
  
- **Statistics Section**: Animated counters
  - 30+ Events
  - 2000+ Participants
  - 100+ Projects
  - 24/7 Support

- **Featured Events**: Card grid with hover animations
  - Event images with zoom effect
  - Category badges
  - Quick details

- **About Preview**: Introduction to ITSA with visual elements
  - Mission overview
  - Key features
  - Call-to-action

#### 📘 About ITSA Page
- About section with values and mission
- Vision and mission cards
- Core values display
- Leadership call-to-action

#### 👥 Committee Page
- **Faculty & Authorities**
  - Campus Director
  - Head of Department
  - Student Activity Coordinator

- **ITSA Core Committee (2024–25)**
  - President, Vice President, Secretary
  - Treasurer, Event Coordinator
  - Publicity Incharge, Web Master

#### 📅 Events Page
- **Category-based filtering**
  - Technical
  - Career & Placement
  - Competitions
  - Social & Cultural
  - Industry Interaction

- **Features**:
  - Animated event cards
  - Filter buttons with smooth transitions
  - Modal popup with full event details
  - Event descriptions and coordinators

#### 🖼️ Gallery Page
- **Year-wise organization**
  - 2024–25 events
  - 2023–24 archive

- **Category-based filtering**
  - Technical Events
  - Competitions
  - Social Activities

- **Features**:
  - Masonry layout
  - Image hover zoom effect
  - Lightbox popup viewer
  - Smooth transitions

#### 🏆 Achievements Page
- Notable achievements display
- Timeline of milestones
- Statistics showcase
- Success stories

#### 📞 Contact Page
- Contact information cards
- Contact form
- Embedded Google Maps
- Social media links
- Office hours and location

### 🛠️ Technical Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint

### 🚀 Installation & Setup

#### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

#### Installation Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd "c:\Users\91982\Desktop\itsa website"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### 📁 Project Structure

```
itsa-website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Fixed navbar with smooth scroll
│   │   ├── Footer.jsx              # Footer with links and contact
│   │   └── home/
│   │       ├── HeroSection.jsx     # Animated hero with scroll indicator
│   │       ├── StatsSection.jsx    # Animated statistics counters
│   │       ├── FeaturedEventsSection.jsx
│   │       └── AboutPreviewSection.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── CommitteePage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── AchievementsPage.jsx
│   │   └── ContactPage.jsx
│   ├── data/
│   │   ├── events.json             # Events database (JSON-driven)
│   │   ├── gallery.json            # Gallery images (JSON-driven)
│   │   └── committee.json          # Committee members data
│   ├── hooks/
│   │   └── useScrollAnimations.js  # GSAP animation hooks
│   ├── utils/
│   │   └── helpers.js              # Utility functions
│   ├── App.jsx                     # Main app with routing
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
└── README.md                       # This file
```

### 🎨 Design Features

#### Color Scheme
- **Primary Background**: Navy (#0f1a2e)
- **Secondary Background**: Slate (#1a2744)
- **Accent 1**: Indigo (#6366f1)
- **Accent 2**: Violet (#a855f7)

#### Typography
- Font Family: Inter (Google Fonts)
- Large, readable headings
- Proper line heights for accessibility

#### Animations
- **Fade-up**: Elements fade and slide up on scroll
- **Text Reveal**: Text slides up from bottom with stagger effect
- **Parallax**: Scroll-based parallax effects
- **Hover Effects**: Smooth lift and glow effects
- **Counter Animation**: Smooth number counting animations
- **Floating Elements**: Subtle floating animations

### 📊 JSON Data Structure

#### events.json
```json
{
  "2024-25-term-1": [
    {
      "id": 1,
      "title": "Event Title",
      "category": "Technical",
      "date": "YYYY-MM-DD",
      "description": "Event description",
      "coordinators": ["Name 1", "Name 2"],
      "image": "/path/to/image",
      "year": "2024–25 Term I"
    }
  ]
}
```

#### gallery.json
```json
{
  "2024-25": {
    "Technical Events": [
      {
        "id": 1,
        "src": "/path/to/image",
        "alt": "Image description"
      }
    ]
  }
}
```

#### committee.json
```json
{
  "committee": {
    "authorities": [
      {
        "id": 1,
        "name": "Name",
        "designation": "Title",
        "image": "/path/to/image"
      }
    ],
    "core_committee": [
      {
        "id": 1,
        "name": "Name",
        "role": "Position",
        "year": "2024–25",
        "image": "/path/to/image"
      }
    ]
  }
}
```

### 🎯 Key Components

#### Navigation
- Fixed header with transparency and blur effect
- Smooth scroll behavior
- Mobile-responsive menu
- Active link highlighting

#### Hero Section
- Large animated typography
- Scroll indicator with pulsing animation
- Gradient text effects
- Background decorative elements

#### Statistics Section
- Animated counter animations using GSAP
- Scroll-triggered animations
- Gradient backgrounds
- Hover effects

#### Event Cards
- Image hover zoom
- Category badges
- Smooth transitions
- Modal details view

#### Gallery
- Masonry layout using CSS columns
- Image hover effects
- Lightbox viewer
- Year and category filtering

### 🔧 Customization Guide

#### Adding New Events
1. Edit `src/data/events.json`
2. Add event object with required fields
3. Event will automatically appear in the Events page

#### Adding Gallery Images
1. Edit `src/data/gallery.json`
2. Add image entry with src and alt text
3. Images will automatically appear in the Gallery page

#### Changing Colors
1. Edit `tailwind.config.js`
2. Modify the color scheme in the `theme.extend.colors` section
3. Update CSS variables in `src/index.css` if needed

#### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Navigation.jsx`

### 📱 Responsive Design

- **Mobile** (320px+): Optimized layout with stacked columns
- **Tablet** (768px+): Two-column layouts
- **Desktop** (1024px+): Full three/four-column grids
- **Large Screens** (1280px+): Maximum width container

### ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Color contrast compliance
- Keyboard navigation support
- ARIA labels where applicable

### 🚀 Performance Optimization

- Lazy loading of images
- Optimized animations using GSAP
- Efficient component rendering
- Production build optimization with Vite
- Smooth scrolling performance

### 📈 SEO

- Meta tags for description and theme
- Semantic HTML
- Proper heading structure
- Image alt text
- Mobile-friendly design

### 🐛 Troubleshooting

#### Dev server not starting
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
npm run dev
```

#### CSS not applying
- Ensure Tailwind is properly configured
- Check `tailwind.config.js` includes proper paths
- Clear browser cache

#### Images not loading
- Check image paths in JSON data
- Use `/images/` path prefix for public images
- Verify image files exist in public directory

### 📚 Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^6.x.x",
  "gsap": "^3.x.x",
  "locomotive-scroll": "^4.x.x",
  "tailwindcss": "^3.x.x",
  "lucide-react": "^0.x.x"
}
```

### 📄 License

This project is created for GH Raisoni College of Engineering and Management, Pune.

### 👥 Contributors

- **Design & Development**: ITSA Web Development Team
- **Department**: Information Technology
- **Institution**: GH Raisoni College of Engineering and Management

### 📞 Support

For questions or issues:
- Email: itsa@ghrcem.ac.in
- Phone: +91 9999999999
- Location: GH Raisoni College, Pune

### 🌐 Live Website

Visit the live website at: [ITSA Website URL]

---

**Made with ❤️ for ITSA | Information Technology Students Association**
