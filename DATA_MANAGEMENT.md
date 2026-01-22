# 📝 Data Management Guide for ITSA Website

## How to Update Website Content

All content is managed through **JSON files** in `src/data/`. No coding knowledge needed!

---

## 📅 Events Data (`src/data/events.json`)

### Adding a New Event

1. **Open** `src/data/events.json`
2. **Find** the event year (e.g., "2024-25-term-1")
3. **Add** a new event object:

```json
{
  "id": 9,
  "title": "Your Event Title Here",
  "category": "Technical",
  "date": "2024-12-25",
  "description": "Detailed description of your event. What will students learn? What topics will be covered?",
  "coordinators": ["Faculty Name", "Student Name"],
  "image": "/images/events/your-event-image.jpg",
  "year": "2024–25 Term I"
}
```

### Event Categories (Choose one)
- `Technical` - Coding workshops, tech talks
- `Career & Placement` - Recruitment drives, career guidance
- `Competitions` - Coding contests, hackathons
- `Social & Cultural` - Festivals, team building
- `Industry Interaction` - Expert panels, company visits

### Example Events

```json
{
  "2024-25-term-1": [
    {
      "id": 1,
      "title": "Python Fundamentals Workshop",
      "category": "Technical",
      "date": "2024-09-10",
      "description": "Learn Python basics including variables, data types, loops, and functions. Perfect for beginners!",
      "coordinators": ["Dr. Rajesh Kumar", "Priya Sharma"],
      "image": "/images/events/python-workshop.jpg",
      "year": "2024–25 Term I"
    },
    {
      "id": 2,
      "title": "TCS Recruitment Drive",
      "category": "Career & Placement",
      "date": "2024-11-05",
      "description": "Meet TCS recruiters directly. Learn about job opportunities and interview process.",
      "coordinators": ["Ms. Anjali Singh", "Arjun Reddy"],
      "image": "/images/events/recruitment.jpg",
      "year": "2024–25 Term I"
    }
  ]
}
```

### Field Explanations

| Field | Example | Description |
|-------|---------|-------------|
| `id` | 9 | Unique number (must be different for each event) |
| `title` | "AI Workshop" | Event name (max 50 chars) |
| `category` | "Technical" | Choose from predefined categories |
| `date` | "2024-12-25" | Format: YYYY-MM-DD |
| `description` | "Learn AI..." | Event details (2-3 sentences) |
| `coordinators` | ["Name 1", "Name 2"] | Faculty and student leads |
| `image` | "/images/events/event.jpg" | Image path in public folder |
| `year` | "2024–25 Term I" | Academic year and term |

---

## 🖼️ Gallery Data (`src/data/gallery.json`)

### Adding Gallery Images

1. **Open** `src/data/gallery.json`
2. **Choose** year and category
3. **Add** image entry:

```json
{
  "id": 99,
  "src": "/images/gallery/2024-25/your-image.jpg",
  "alt": "Description of the image"
}
```

### Gallery Structure

```json
{
  "2024-25": {
    "Technical Events": [
      { "id": 1, "src": "/images/gallery/2024-25/tech-1.jpg", "alt": "Workshop in progress" },
      { "id": 2, "src": "/images/gallery/2024-25/tech-2.jpg", "alt": "Students working on project" }
    ],
    "Competitions": [
      { "id": 3, "src": "/images/gallery/2024-25/comp-1.jpg", "alt": "Coding competition" }
    ],
    "Social Activities": [
      { "id": 4, "src": "/images/gallery/2024-25/social-1.jpg", "alt": "Team outing" }
    ]
  },
  "2023-24": {
    "Technical Events": [
      { "id": 11, "src": "/images/gallery/2023-24/tech-1.jpg", "alt": "Previous year event" }
    ]
  }
}
```

### Categories Available

**For 2024-25:**
- Technical Events
- Competitions
- Social Activities

**For 2023-24:**
- Technical Events
- Competitions
- (Add more as needed)

### Tips for Images

- ✅ Use **JPG** or **PNG** format
- ✅ Size: **400x300px minimum**
- ✅ Compress images before uploading
- ✅ Use descriptive alt text
- ✅ Place in correct folder structure

---

## 👥 Committee Data (`src/data/committee.json`)

### Adding Committee Members

```json
{
  "committee": {
    "core_committee": [
      {
        "id": 8,
        "name": "Student Name",
        "role": "Web Master",
        "year": "2024–25",
        "image": "/images/committee/webmaster.jpg"
      }
    ]
  }
}
```

### Available Roles

**Authority Positions** (Faculty):
- Campus Director
- Head of Department
- Student Activity Coordinator

**Core Committee Roles** (Students):
- President
- Vice President
- Secretary
- Treasurer
- Event Coordinator
- Publicity Incharge
- Web Master

### Example Committee Entry

```json
{
  "id": 5,
  "name": "Rahul Kumar Sharma",
  "role": "Event Coordinator",
  "year": "2024–25",
  "image": "/images/committee/event-coordinator.jpg"
}
```

### Committee Structure

```
Authorities (3 people)
├── Campus Director
├── Head of Department
└── Student Activity Coordinator

Core Committee (7 people)
├── President
├── Vice President
├── Secretary
├── Treasurer
├── Event Coordinator
├── Publicity Incharge
└── Web Master
```

---

## 📁 Image Directory Structure

Create this structure in `public/` folder:

```
public/
├── images/
│   ├── events/
│   │   ├── ml-workshop.jpg
│   │   ├── web-dev.jpg
│   │   ├── code-comp.jpg
│   │   └── (add more event images)
│   │
│   ├── gallery/
│   │   ├── 2024-25/
│   │   │   ├── tech-1.jpg
│   │   │   ├── tech-2.jpg
│   │   │   ├── comp-1.jpg
│   │   │   └── social-1.jpg
│   │   │
│   │   └── 2023-24/
│   │       ├── tech-1.jpg
│   │       └── comp-1.jpg
│   │
│   └── committee/
│       ├── president.jpg
│       ├── vp.jpg
│       ├── secretary.jpg
│       └── (add more member photos)
```

---

## 🔄 How Content Gets Updated

### Data Flow
```
You edit JSON file
       ↓
Save file
       ↓
Website auto-updates (hot reload)
       ↓
New content appears immediately
```

### No Rebuilding Needed
- ✅ Edit JSON files
- ✅ Save
- ✅ Website updates automatically
- ✅ See changes in browser

---

## 📝 JSON Syntax Rules

### Important Rules

1. **Use double quotes** for strings
   ```json
   ✅ "title": "My Event"
   ✗ 'title': 'My Event'
   ```

2. **Comma between items** (except last)
   ```json
   ✅ { "id": 1 },
      { "id": 2 }
   
   ✗ { "id": 1 },
      { "id": 2 },    ← Extra comma causes error
   ```

3. **No trailing commas** in arrays
   ```json
   ✅ [1, 2, 3]
   
   ✗ [1, 2, 3,]     ← Will cause error
   ```

4. **Match all brackets**
   ```json
   { } [ ] " "
   ✅ Every opening has a closing
   ```

---

## ✅ JSON Validation

### Check JSON Online
- Use: [jsonlint.com](https://jsonlint.com)
- Paste your JSON
- Click "Validate"
- Fix any errors

### Common Errors

| Error | Problem | Fix |
|-------|---------|-----|
| `Unexpected token` | Missing comma | Add `,` between items |
| `Unexpected EOF` | Unclosed bracket | Add matching `}` or `]` |
| `SyntaxError` | Invalid JSON | Check quotes and commas |
| `Expected string` | Unquoted key | Add quotes around key |

---

## 🎯 Practical Examples

### Example 1: Add Workshop Event

```json
{
  "id": 15,
  "title": "Web Development with React",
  "category": "Technical",
  "date": "2025-01-15",
  "description": "Learn modern web development using React, Tailwind CSS, and JavaScript. Build a real-world project during the workshop.",
  "coordinators": ["Dr. Rajesh Kumar", "Aditya Patel", "Neha Singh"],
  "image": "/images/events/react-workshop.jpg",
  "year": "2024–25 Term II"
}
```

### Example 2: Add Competition Event

```json
{
  "id": 16,
  "title": "Hackathon 2025",
  "category": "Competitions",
  "date": "2025-02-20",
  "description": "24-hour hackathon where students build innovative projects. Teams compete for prizes worth ₹100,000!",
  "coordinators": ["Vikram Desai", "Isha Gupta", "Rahul Sharma"],
  "image": "/images/events/hackathon.jpg",
  "year": "2024–25 Term II"
}
```

### Example 3: Add Gallery Image

```json
{
  "id": 50,
  "src": "/images/gallery/2024-25/hackathon-1.jpg",
  "alt": "Teams presenting their hackathon projects"
}
```

### Example 4: Add Committee Member

```json
{
  "id": 8,
  "name": "Priya Sharma",
  "role": "Publicity Incharge",
  "year": "2024–25",
  "image": "/images/committee/publicity.jpg"
}
```

---

## 🚀 Best Practices

### Do's
- ✅ Use clear, descriptive titles
- ✅ Write helpful descriptions (2-3 sentences)
- ✅ Use proper date format (YYYY-MM-DD)
- ✅ Keep file organized
- ✅ Test on website after changes
- ✅ Backup JSON files

### Don'ts
- ❌ Use special characters in titles
- ❌ Write very long descriptions
- ❌ Use wrong date format
- ❌ Add invalid image paths
- ❌ Forget to save files
- ❌ Add duplicate IDs

---

## 🔐 Safety Tips

### Before Editing
1. **Backup** the file
   - Copy original file
   - Keep in safe location
   - Before making changes

2. **Validate** after editing
   - Use jsonlint.com
   - Check for errors
   - Fix before saving

3. **Test** on website
   - Refresh browser
   - Check if content appears
   - Verify formatting

---

## 📞 Quick Reference

### File Locations
```
Events:     src/data/events.json
Gallery:    src/data/gallery.json
Committee:  src/data/committee.json
Images:     public/images/
```

### Adding Checklist
- [ ] Opened correct JSON file
- [ ] Added new item with unique ID
- [ ] Used correct field names
- [ ] Filled all required fields
- [ ] Used proper date format
- [ ] Image path is correct
- [ ] JSON syntax is valid
- [ ] Saved the file
- [ ] Tested on website

---

## 🎓 Learn More

- **JSON Tutorial**: [w3schools.com/json](https://w3schools.com/json)
- **JSON Formatter**: [jsoncrack.com](https://jsoncrack.com)
- **Image Compression**: [tinypng.com](https://tinypng.com)

---

**Happy updating! 📝✨**

For questions, refer to the project documentation or contact ITSA.
