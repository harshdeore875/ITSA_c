# ITSA Website - Data-Driven Architecture Guide

## ✅ What's Updated

Your website is now **100% data-driven**! All content is stored in JSON files, and components read from these files. Simply update the JSON files to change the website content - **no code changes needed!**

---

## 📁 JSON Data Files Location

All JSON files are located in: `src/data/`

### 1. **home.json** - Homepage Content
**What it controls:**
- Hero section (title, subtitle, description, CTA button)
- 4 Statistics with animated counters
- 3 Featured events preview
- About section preview with bullet points

**File path:** `src/data/home.json`

**Update examples:**
```json
{
  "hero": {
    "title": "Your custom title",
    "subtitle": "Your custom subtitle",
    "description": "Your description",
    "cta": "Button text",
    "ctaLink": "/link-path"
  },
  "stats": [
    {
      "number": 500,
      "label": "Active Students",
      "suffix": "+"
    }
  ]
}
```

---

### 2. **about.json** - About Page Content
**What it controls:**
- Vision statement
- 3 Mission statements
- 4 Core values (title + description)
- History and description
- Department features
- Leadership profiles
- Statistics

**File path:** `src/data/about.json`

**Quick edit:** Update vision, mission array, or values array directly

---

### 3. **committee.json** - Committee Page
**What it controls:**
- 3 Faculty authorities (Dr. Kharadkar, Dr. Poonam Gupta, Ms. Poonam Dhamal)
- 7 Core committee members (President, VP, Secretary, etc.)

**File path:** `src/data/committee.json`

**Add new member:**
```json
{
  "id": 11,
  "name": "New Member Name",
  "role": "Position",
  "year": "2024-25"
}
```

---

### 4. **events.json** - Events Page
**What it controls:**
- 30 Technical events from ITSA Magazine
- Event categories (Technical, Competitions, Career & Placement, etc.)
- Event details (title, date, description, coordinators)

**File path:** `src/data/events.json`

**Structure:**
```json
{
  "2024-25": {
    "Term I": [
      {
        "id": 1,
        "title": "Event Name",
        "category": "Technical",
        "date": "2024-09-06",
        "description": "...",
        "coordinators": "..."
      }
    ]
  }
}
```

---

### 5. **gallery.json** - Gallery Page
**What it controls:**
- 15 Gallery images
- Organized by year (2024-25, 2023-24)
- Organized by category (Technical Events, Competitions, Social Activities)

**File path:** `src/data/gallery.json`

**Add new image:**
```json
{
  "id": 16,
  "title": "Event Title",
  "src": "https://image-url.jpg",
  "alt": "Description",
  "year": "2024-25",
  "category": "Technical Events",
  "description": "Image description"
}
```

---

### 6. **achievements.json** - Achievements Page
**What it controls:**
- 8 Major achievements (with titles, descriptions)
- 6 Timeline items (past accomplishments + future plans)

**File path:** `src/data/achievements.json`

---

### 7. **contact.json** - Contact Page
**What it controls:**
- Department information
- Complete address (street, city, state, pincode)
- Phone numbers (3 types)
- Email addresses (4 types)
- Office hours
- Location with coordinates
- Social media links
- Department wise info

**File path:** `src/data/contact.json`

---

## 🔄 Component-to-JSON Mapping

| Page/Component | JSON File | Status |
|---|---|---|
| Hero Section | `home.json` → `.hero` | ✅ Updated |
| Statistics | `home.json` → `.stats` | ✅ Updated |
| Featured Events | `home.json` → `.featuredEvents` | ✅ Updated |
| About Preview | `home.json` → `.aboutPreview` | ✅ Updated |
| About Page | `about.json` | ✅ Updated |
| Committee Page | `committee.json` | ✅ Updated |
| Events Page | `events.json` | ✅ Updated |
| Gallery Page | `gallery.json` | ✅ Updated |
| Achievements Page | `achievements.json` | ✅ Updated |
| Contact Page | `contact.json` | ✅ Updated |

---

## 🚀 How to Make Changes

### Example 1: Change Hero Title
1. Open `src/data/home.json`
2. Find the `"hero"` section
3. Change the `"title"` value
4. Save the file
5. Website updates automatically! ✨

### Example 2: Add New Event
1. Open `src/data/events.json`
2. Add a new event object to the appropriate term
3. Save the file
4. New event appears on Events page automatically!

### Example 3: Update Contact Info
1. Open `src/data/contact.json`
2. Update phone, email, address, etc.
3. Save the file
4. Contact page updates instantly!

---

## 📋 Quick Reference

**Home Page Changes:** Edit `src/data/home.json`
- Hero title/subtitle → `.hero.title` / `.hero.subtitle`
- Stats → `.stats` array
- Featured events → `.featuredEvents` array
- About preview → `.aboutPreview`

**About Page Changes:** Edit `src/data/about.json`
- Vision → `.vision`
- Mission → `.mission` (array)
- Values → `.values` (array)

**Committee Changes:** Edit `src/data/committee.json`
- Add/Edit authorities and core committee members

**Events Changes:** Edit `src/data/events.json`
- Add new events under appropriate term and category

**Gallery Changes:** Edit `src/data/gallery.json`
- Add new images with year and category

**Achievements Changes:** Edit `src/data/achievements.json`
- Update achievements and timeline

**Contact Changes:** Edit `src/data/contact.json`
- Update all contact details, phone, email, hours, etc.

---

## 🎯 Key Features

✅ **Zero Code Required** - Just edit JSON files
✅ **Live Updates** - Changes reflect immediately
✅ **Organized Data** - All content in one place
✅ **Easy to Manage** - Simple JSON structure
✅ **Scalable** - Easy to add new items
✅ **Maintainable** - No hardcoded content

---

## 💡 Development Server

Start the dev server with:
```bash
npm run dev
```

The website will be available at: `http://localhost:5174/`

Changes to JSON files will appear instantly with hot reload!

---

## 📝 Notes

- All JSON files support standard JSON format
- Images use URLs (absolute or relative paths)
- Dates should follow `YYYY-MM-DD` format
- All required fields must be present
- Comments are **not** supported in JSON (remove before saving)

---

**Happy updating! 🎉**

For any questions about the structure, refer to the JSON files directly - they contain the actual data being displayed on the website.
