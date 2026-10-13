# ResumeForge

An intelligent **ResumeForge** web app built with **MERN stack** and powered by **OpenAI APIs**, designed to **create, enhance, and update professional resumes** automatically.

---

## 🚀 Features

- 📝 **AI-Powered Resume Creation** — Generate complete resumes from minimal user input using OpenAI (Gemini / GPT-like) models.  
- ✨ **Resume Enhancement** — Improve tone, structure, and grammar for existing resumes.  
- 🔄 **Resume Updating** — Add new experiences or skills — the AI smartly merges them with the existing content.  
- 📂 **Multi-Section Layout** — Manage sections like About, Education, Skills, Experience, Projects, and Achievements.  
- ☁️ **Image & File Uploads** — Integrated with ImageKit for secure asset storage.  
- 🔒 **JWT Authentication** — Secure login & signup system.  
- 💾 **MongoDB Atlas** — Store user details and resume data in the cloud.  

---

## 🧩 Tech Stack

**Frontend:** React (Vite) + TailwindCSS  
**Backend:** Node.js + Express.js  
**Database:** MongoDB Atlas  
**AI Engine:** OpenAI API (Gemini Model)  
**Image Hosting:** ImageKit  
**Hosting:** Frontend → Vercel | Backend → Render / Railway  

---

## ⚙️ Environment Variables

| Key | Description |
|-----|--------------|
| `VITE_API_URL` | Backend API URL |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret for JWT tokens |
| `IMAGEKIT_PRIVATE_KEY` | ImageKit private key |
| `OPENAI_API_KEY` | Gemini / OpenAI API key |
| `OPENAI_BASE_URL` | OpenAI endpoint |
| `OPENAI_MODEL` | Model name (e.g., gemini-2.5-flash) |

> ⚠️ Never expose your API keys in client-side code or public repos.

---

## 🧰 Installation & Setup

```bash
# Setup backend
cd server
npm install
npm start

# Setup frontend
cd ../client
npm install
npm run dev
```
