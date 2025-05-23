# 🔗 Hooks – Linklist Web App

A minimalist personal **link sharing app** powered by JSON metadata. Built with React, it dynamically renders your portfolio, socials, and more from a single configurable file. Just update the JSON — the UI updates instantly.

![Screenshot of the App](./public/Assets/Screenshot%20(1).png)

---

## 📌 Features

- ⚡ Copy-to-clipboard with toast feedback
- 🌐 Social media + personal links
- 🧠 Configurable via one JSON file
- 💡 Auto-close dropdown menus
- 💬 Toast notifications with success/error styles

---

## 🧠 Tech Stack

- **React** with functional components and hooks
- **SCSS** for custom styling
- **React Icons** for UI elements
- **JSON-based metadata** for easy content management
- **Portal-based toast system** (notifications rendered to `<body>`)

---

## 🗂 JSON Structure (`hook.metadata.json`)

```json
{
  "profile": {
    "name": "Your Name",
    "bio": "Wonderful bio of yours",
    "avatar": "imgbb or whatever you prefer which renders image directly"
  },
  "socials": [
    { "platform": "GitHub", "url": "https://github.com/yourusername" },
    { "platform": "bluesky", "url": "https://bsky.app/yourusername" },
    { "platform": "LinkedIn", "url": "https://linkedin.com/in/yourusername" },
    { "platform": "envelope", "url": "mailto:user@admin.com" }
  ],
  "links": [
    {
      "title": "Portfolio",
      "url": "https://yourportfolio.com",
      "icon": "https://yourwebsite.com/assets/portfolio-icon.svg"
    }
  ],
  "settings": {
    "bgPrefs": "servers, programming"
  }
}
