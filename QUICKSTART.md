# Quick Start Guide (5 Minutes)

## 1. Install & Run (2 min)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` - your site is live! 🎉

## 2. Customize (2 min)

### Update Home Page (`app/page.tsx`)
```tsx
<h1>Hi, I'm Your Name</h1>  // Change this
<p>Your professional summary...</p>  // And this
```

### Update Navigation Links (`components/Navbar.tsx`)
```tsx
<a href="https://linkedin.com/in/your-profile">  // Add your links
  LinkedIn
</a>
```

### Add Your First Blog Post (`content/blog/my-first-post.md`)
```md
---
title: "My First Post"
description: "What this is about"
date: "2024-06-30"
readingTime: "3 min read"
---

# Hello World

Write your first post here!
```

## 3. Deploy (1 min)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Your site is now live on the internet! Share the URL.

---

## Common Changes

### Change Brand Color
Edit `tailwind.config.ts`:
```ts
colors: {
  brand: "#your-color-hex",  // e.g., #ff6600
}
```

### Add New Pages
Create files in `app/` folder. Next.js auto-routes them.

### Add Social Links
Edit `components/Footer.tsx` and add more links.

### Add Portfolio Projects
Edit `app/portfolio/page.tsx` and update the `projects` array.

---

## Next

- Read the full [README.md](./README.md) for detailed guidance
- Write more blog posts
- Add a custom domain (through Vercel)
- Add analytics or comments

That's it! You're all set. 🚀
