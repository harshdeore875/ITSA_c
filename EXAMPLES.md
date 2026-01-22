# 📝 Quick Examples - How to Update Your Website

## 🎯 Real-World Update Examples

Your website is now data-driven! Here are practical examples of how to make changes:

---

## 1️⃣ Change Homepage Hero Title

**File:** `src/data/home.json`

**Before:**
```json
"hero": {
  "title": "Information Technology Students Association",
  "subtitle": "Empowering the Next Generation of Tech Leaders",
  "description": "Excellence in Innovation, Expertise in Technology"
}
```

**After:** (Just change the title)
```json
"hero": {
  "title": "ITSA - Where Innovation Meets Excellence",
  "subtitle": "Empowering the Next Generation of Tech Leaders",
  "description": "Excellence in Innovation, Expertise in Technology"
}
```

**Result:** Homepage hero title updates instantly! ✨

---

## 2️⃣ Update Statistics on Homepage

**File:** `src/data/home.json`

**Current Stats:**
```json
"stats": [
  {
    "id": 1,
    "number": 500,
    "label": "Active Students",
    "suffix": "+"
  },
  {
    "id": 2,
    "number": 45,
    "label": "Faculty Members",
    "suffix": "+"
  }
]
```

**To change:** Just update the `"number"` value:
```json
{
  "id": 1,
  "number": 600,  // Changed from 500
  "label": "Active Students",
  "suffix": "+"
}
```

**Result:** Stats counter automatically animates to new value! 🎯

---

## 3️⃣ Add a New Event

**File:** `src/data/events.json`

**To add a new event:**

Find the appropriate term/category and add:
```json
{
  "id": 31,
  "title": "Cloud Computing Summit 2024",
  "category": "Technical",
  "date": "2024-10-15",
  "description": "Deep dive into AWS, Azure, and Google Cloud platforms",
  "coordinators": "Rohit Sharma, Priya Patel",
  "image": "https://example.com/cloud-summit.jpg",
  "year": "2024-25"
}
```

**Result:** New event appears on Events page automatically! 📅

---

## 4️⃣ Update Contact Information

**File:** `src/data/contact.json`

**Current:**
```json
"email": [
  {
    "type": "General Inquiry",
    "address": "itsa@ghrcem.ac.in"
  }
]
```

**Update to new email:**
```json
"email": [
  {
    "type": "General Inquiry",
    "address": "newemail@ghrcem.ac.in"  // Changed
  }
]
```

**Update phone numbers:**
```json
"phone": [
  {
    "type": "Department",
    "number": "+91-20-XXXX-XXXX"  // New number
  }
]
```

**Result:** Contact page updates with new information! 📞

---

## 5️⃣ Add Gallery Image

**File:** `src/data/gallery.json`

**Structure:**
```json
"2024-25": {
  "Technical Events": [
    {
      "id": 16,
      "title": "Web Development Workshop - 2024",
      "src": "https://example.com/workshop.jpg",
      "alt": "Students learning web development",
      "year": "2024-25",
      "category": "Technical Events",
      "description": "Hands-on workshop on modern web technologies"
    }
  ]
}
```

**To add:** Just add a new object to the appropriate category array!

**Result:** New image appears in gallery with filters! 🖼️

---

## 6️⃣ Add Team Member to Committee

**File:** `src/data/committee.json`

**Current structure:**
```json
"core_committee": [
  {
    "id": 1,
    "name": "Ananya Sharma",
    "role": "President",
    "year": "2024-25"
  }
]
```

**To add new member:**
```json
{
  "id": 8,
  "name": "Vikram Kumar",
  "role": "Event Coordinator",
  "year": "2024-25"
}
```

**Result:** New member appears on Committee page! 👥

---

## 7️⃣ Add Achievement

**File:** `src/data/achievements.json`

**To add new achievement:**
```json
"achievements": [
  {
    "id": 9,
    "title": "Google Cloud Certification",
    "description": "15+ ITSA members certified in Google Cloud Technologies",
    "date": "2024-09",
    "category": "Certifications",
    "award": "20+ Certified"
  }
]
```

**Result:** New achievement shows on Achievements page! 🏆

---

## 8️⃣ Update About Page Content

**File:** `src/data/about.json`

**Change vision:**
```json
"vision": "To become the leading tech community fostering innovation and excellence"
```

**Update mission:**
```json
"mission": [
  "Empower students through quality technical education",
  "Foster innovation and entrepreneurship",
  "Build industry-ready professionals"
]
```

**Add new value:**
```json
"values": [
  {
    "title": "Innovation",
    "description": "We encourage creative thinking and embrace new technologies"
  },
  {
    "title": "New Value",
    "description": "Description of new value"
  }
]
```

**Result:** About page updates with new vision, mission, and values! 🎯

---

## 9️⃣ Featured Events on Homepage

**File:** `src/data/home.json`

**Update featured events:**
```json
"featuredEvents": [
  {
    "id": 1,
    "title": "National Hackathon 2024",
    "category": "Competitions",
    "date": "2024-09-06",
    "description": "24-hour coding marathon with prizes",
    "image": "https://example.com/hackathon.jpg"
  }
]
```

**Result:** Featured events on homepage update instantly! 🚀

---

## 🔟 Statistics on About Page

**File:** `src/data/about.json`

**Current:**
```json
"statistics": [
  {
    "number": 17,
    "label": "Years of Excellence",
    "symbol": "+"
  }
]
```

**Update number:**
```json
{
  "number": 18,  // Changed from 17
  "label": "Years of Excellence",
  "symbol": "+"
}
```

**Result:** Statistics update automatically! 📊

---

## 💡 Pro Tips

✅ **Always use valid JSON format**
- Use double quotes for strings: `"value"`
- Use commas between items: `{ "a": 1, "b": 2 }`
- No trailing commas: `[1, 2, 3]` NOT `[1, 2, 3,]`

✅ **After editing JSON:**
1. Save the file (Ctrl+S)
2. Check website browser tab
3. Changes appear automatically (hot reload)

✅ **Dates format:** Always use `YYYY-MM-DD`
- Correct: `"2024-09-15"`
- Wrong: `"09/15/2024"` or `"15-09-2024"`

✅ **Images:** Use full URLs
- Correct: `"https://example.com/image.jpg"`
- Also works: `"/images/event.jpg"` (relative path)

✅ **Numbers:** Don't use quotes
- Correct: `"number": 500`
- Wrong: `"number": "500"`

---

## 🎓 File Organization

**Homepage (src/data/home.json):**
- `.hero` → Hero section
- `.stats` → Statistics
- `.featuredEvents` → Featured events
- `.aboutPreview` → About preview section

**Other Pages:**
- `about.json` → About page content
- `committee.json` → Team members
- `events.json` → All events
- `gallery.json` → Gallery images
- `achievements.json` → Achievements
- `contact.json` → Contact information

---

## 🚀 Workflow

1. **Identify what to change** (e.g., "Add new event")
2. **Find the right JSON file** (e.g., `events.json`)
3. **Find the right section** (e.g., "2024-25" → "Term I")
4. **Add/Edit the data** (copy structure, change values)
5. **Save the file** (Ctrl+S)
6. **Check the website** (changes appear instantly!)

---

## ✨ That's It!

No code knowledge needed! Just edit JSON, save, and watch your website update in real-time.

**Happy updating! 🎉**

For more details, see: `DATA_GUIDE.md`
