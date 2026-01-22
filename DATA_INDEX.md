# 📋 ITSA Website - Complete Data Structure Index

## 🎯 Your Website is Now Data-Driven!

All content is stored in JSON files. To update your website, just edit these files:

---

## 🏠 HOMEPAGE (home.json)

### Hero Section
**File:** `src/data/home.json` → `.hero`
```
Title → "Information Technology Students Association"
Subtitle → "Empowering the Next Generation of Tech Leaders"
Description → "Excellence in Innovation..."
CTA Button → "Explore Now"
CTA Link → "/events"
```
**Update:** Change any value, save, refresh page

### Statistics (4 Items)
**File:** `src/data/home.json` → `.stats`
```
1. Active Students (500+)
2. Faculty Members (45+)
3. Placement Rate (100%)
4. Events Per Year (30+)
```
**Update:** Change numbers → counters animate to new values

### Featured Events (3 Items)
**File:** `src/data/home.json` → `.featuredEvents`
```
- Smart India Hackathon 2024
- AI & Machine Learning Workshop
- Industry Interaction Series
```
**Update:** Replace event details

### About Preview
**File:** `src/data/home.json` → `.aboutPreview`
```
- 17+ years of academic excellence
- 100% placement rate with avg CTC ₹8.5 LPA
- 50+ industry partnerships
- 2000+ successful alumni
- Research-focused curriculum
- Innovation support
```
**Update:** Edit bullet points

---

## 📖 ABOUT PAGE (about.json)

### Vision
**File:** `src/data/about.json` → `.vision`
```
"To be the leading technical association fostering excellence in IT education"
```

### Mission (3 Items)
**File:** `src/data/about.json` → `.mission`
```
1. Quality education and skill development
2. Foster innovation and leadership
3. Research and professional development
```

### Core Values (4 Items)
**File:** `src/data/about.json` → `.values`
```
1. Innovation
2. Collaboration
3. Excellence
4. Growth
```

### History
**File:** `src/data/about.json` → `.history`
```
Founded: 2007
Description + 5 milestones
```

### Features
**File:** `src/data/about.json` → `.features`
```
6 department features listed
```

### Leadership
**File:** `src/data/about.json` → `.leadership`
```
- Dr. Kharadkar
- Dr. Poonam Gupta
```

### Statistics
**File:** `src/data/about.json` → `.statistics`
```
- Years: 17+
- Faculty: 45+
- Students: 2000+
- Placements: 100%
- Alumni: 2000+
- Partners: 50+
```

---

## 👥 COMMITTEE PAGE (committee.json)

### Authorities (Faculty)
**File:** `src/data/committee.json` → `.committee.authorities`
```
1. Dr. Hari Chandrakant Kharadkar
2. Dr. Poonam Gupta
3. Ms. Poonam Dhamal
```

### Core Committee (7 Members)
**File:** `src/data/committee.json` → `.committee.core_committee`
```
1. President - Ananya Sharma
2. Vice President - Rohit Singh
3. Secretary - Priya Patel
4. Treasurer - Aditya Kumar
5. Event Coordinator - Sneha Desai
6. Publicity & Design - Arjun Verma
7. Webmaster - Vikram Malhotra
```

---

## 📅 EVENTS PAGE (events.json)

### Structure
**File:** `src/data/events.json`
```
2024-25
├── Term I (29 events)
└── Term II (planned)

2023-24
├── Past Events
```

### Categories
- Technical
- Competitions
- Career & Placement
- Social & Cultural
- Industry Interaction

### Each Event Contains
```
- Title
- Category
- Date (YYYY-MM-DD format)
- Description
- Coordinators
- Image URL
- Year
```

### Current Events: 30 from ITSA Magazine
Examples:
- Smart India Hackathon 2024
- AI & ML Workshop
- Code Competition
- Industry Interaction Series
- Placement Drives

---

## 🖼️ GALLERY PAGE (gallery.json)

### Structure by Year
**File:** `src/data/gallery.json`

```
2024-25
├── Technical Events (images)
├── Competitions (images)
└── Social Activities (images)

2023-24
├── Technical Events (images)
├── Competitions (images)
└── Social Activities (images)
```

### Total Images: 15
Each image has:
- Title
- URL (image link)
- Alt text
- Year
- Category
- Description

---

## 🏆 ACHIEVEMENTS PAGE (achievements.json)

### Achievements (8 Items)
**File:** `src/data/achievements.json` → `.achievements`
```
1. National Level Competitions
2. Industry Recognition
3. Publication & Research
4. 100% Placement
5. Internship Program
6. AI Summit Excellence
7. Innovation Awards
8. Patent Registrations
```

### Timeline (6 Items)
**File:** `src/data/achievements.json` → `.timeline`
```
Past Milestones:
- Code Championship Winner (2024)
- AI Summit Presentation (2024)
- Tech Innovation Award (2023)
- Industry Internship Program (2023)

Future Plans:
- Expansion plans listed
```

---

## 📞 CONTACT PAGE (contact.json)

### Department Info
**File:** `src/data/contact.json` → `.department`
```
Name: Department of Information Technology
College: GH Raisoni College of Engineering and Management
Abbreviation: IT
Established: 2007
Accreditation: NAAC, NBA
```

### Address
**File:** `src/data/contact.json` → `.address`
```
Street: [Address line]
City: Pune
State: Maharashtra
Pincode: [Pincode]
Country: India
```

### Phone Numbers (3)
**File:** `src/data/contact.json` → `.phone`
```
1. Department: +91-20-XXXX-XXXX
2. Admissions: +91-XXXX-XXXX
3. Placement: +91-XXXX-XXXX
```

### Email Addresses (4)
**File:** `src/data/contact.json` → `.email`
```
1. General: itsa@ghrcem.ac.in
2. Admissions: admissions@ghrcem.ac.in
3. Placements: placements@ghrcem.ac.in
4. Main: info@ghrcem.ac.in
```

### Website URLs
**File:** `src/data/contact.json` → `.website`
```
Main: www.ghrcem.ac.in
Portal: portal.ghrcem.ac.in
```

### Office Hours
**File:** `src/data/contact.json` → `.hours`
```
Weekdays: 9 AM - 6 PM
Saturday: 9 AM - 2 PM
Sunday: Closed
Holidays: As per college calendar
```

### Location
**File:** `src/data/contact.json` → `.location`
```
Latitude: 18.5912
Longitude: 73.8235
Google Maps: [Embed code]
```

### Social Media (5 Links)
**File:** `src/data/contact.json` → `.social`
```
1. Facebook
2. Twitter/X
3. LinkedIn
4. Instagram
5. YouTube
```

### Departments (4)
**File:** `src/data/contact.json` → `.departments`
```
1. Information Technology - Dr. Kharadkar
2. Computer Science - [HOD]
3. Artificial Intelligence - [HOD]
4. Data Science - [HOD]
```

---

## 🔄 Component-to-JSON Mapping

| Component | JSON File | Path |
|-----------|-----------|------|
| HeroSection | home.json | `.hero` |
| StatsSection | home.json | `.stats` |
| FeaturedEventsSection | home.json | `.featuredEvents` |
| AboutPreviewSection | home.json | `.aboutPreview` |
| AboutPage | about.json | root |
| CommitteePage | committee.json | root |
| EventsPage | events.json | root |
| GalleryPage | gallery.json | root |
| AchievementsPage | achievements.json | root |
| ContactPage | contact.json | root |

---

## 🎯 How to Find What You Want to Edit

1. **Want to change hero title?**
   - File: `src/data/home.json`
   - Find: `"hero"` section
   - Edit: `"title"` value

2. **Want to add new event?**
   - File: `src/data/events.json`
   - Find: Appropriate year and term
   - Add: New event object

3. **Want to update contact info?**
   - File: `src/data/contact.json`
   - Find: Phone, email, address sections
   - Edit: Values

4. **Want to add team member?**
   - File: `src/data/committee.json`
   - Find: `"core_committee"` array
   - Add: New member object

5. **Want to add gallery image?**
   - File: `src/data/gallery.json`
   - Find: Year and category
   - Add: New image object

6. **Want to add achievement?**
   - File: `src/data/achievements.json`
   - Find: `"achievements"` array
   - Add: New achievement object

---

## 📂 File Locations

All JSON files are in: `src/data/`

```
itsa website/
└── src/
    └── data/
        ├── home.json
        ├── about.json
        ├── committee.json
        ├── events.json
        ├── gallery.json
        ├── achievements.json
        └── contact.json
```

---

## ✨ Pro Tips

✅ Make a backup before major edits
✅ Use valid JSON format (check with JSONLint)
✅ Dates: Always use YYYY-MM-DD format
✅ Images: Use full URLs
✅ Save after editing
✅ Refresh website to see changes
✅ Check browser console for any errors

---

## 🚀 Quick Links

- **Full Documentation:** `DATA_GUIDE.md`
- **Migration Status:** `MIGRATION_COMPLETE.md`
- **Examples & How-To:** `EXAMPLES.md`
- **This Index:** `README_DATA_DRIVEN.md`

---

## 🎉 Summary

Your website now reads from these 7 JSON files:
1. home.json
2. about.json
3. committee.json
4. events.json
5. gallery.json
6. achievements.json
7. contact.json

**Just edit → save → website updates instantly!** ✨

---

**Last Updated:** 2024
**Status:** ✅ Complete & Ready
**Dev Server:** http://localhost:5174/
