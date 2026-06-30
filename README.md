# Personal Portfolio & Blog Site

A modern, fast personal portfolio and blog starter built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **MDX** for content.

Perfect for showcasing your professional work, writing blog posts, and even hosting vlogs in the future.

---

## Features

✅ **Portfolio Section** - Showcase your projects and experience  
✅ **Blog System** - Write posts in Markdown/MDX  
✅ **Mobile Responsive** - Looks great on all devices  
✅ **Fast & SEO-Ready** - Built on Next.js 14  
✅ **Easy to Customize** - Simple Tailwind CSS styling  
✅ **Free Hosting** - Deploy instantly to Vercel  

---

## Quick Start

### 1. Clone or Copy This Template

```bash
# Option A: Clone from GitHub (once you push it)
git clone https://github.com/yourusername/personal-site.git
cd personal-site

# Option B: Create from scratch using Create Next App
npx create-next-app@latest personal-site --typescript --tailwind
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── blog/
│   │   ├── page.tsx         # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx     # Individual post
│   └── portfolio/
│       └── page.tsx         # Portfolio page
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── content/
│   └── blog/
│       ├── pro-ii-cracker-guide.md
│       └── python-data-automation.md
├── lib/
│   └── blog.ts              # Blog utilities
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Customization Guide

### 1. Update Your Info

**Navbar** (`components/Navbar.tsx`):
```tsx
<Link href="/" className="text-2xl font-bold text-brand">
  Your Name  // Change this
</Link>
```

**Home Page** (`app/page.tsx`):
```tsx
<h1 className="text-5xl md:text-6xl font-bold mb-6">
  Hi, I'm Your Name  // Update
</h1>
```

**Footer** (`components/Footer.tsx`):
```tsx
<a href="https://linkedin.com/in/your-profile">  // Update links
  LinkedIn
</a>
```

### 2. Add Blog Posts

Create new `.md` or `.mdx` files in `content/blog/`:

```
---
title: "My First Post"
description: "A short description"
date: "2024-06-30"
readingTime: "5 min read"
---

# My First Post

Write your content in Markdown...
```

The site automatically picks up new posts!

### 3. Update Portfolio

Edit `app/portfolio/page.tsx` to add your projects:

```tsx
const projects = [
  {
    title: "Your Project",
    description: "What you built",
    tags: ["Next.js", "React"],
    year: "2024",
  },
  // Add more...
];
```

### 4. Change Colors

Edit `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      brand: "#1e40af",  // Change to your color
    },
  },
}
```

---

## Deployment to Vercel (Free)

### Option 1: GitHub + Vercel (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/personal-site.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy" (it detects Next.js automatically)

That's it! Your site is live.

### Option 2: Deploy from Local Machine

```bash
npm install -g vercel
vercel
```

Follow the prompts, and Vercel deploys your site instantly.

---

## Adding a Custom Domain

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In Vercel dashboard → Project Settings → Domains
3. Add your domain and follow DNS setup instructions
4. Update `next.config.js` with your domain:
   ```js
   const nextConfig = {
     // Optional domain config
   };
   ```

---

## Future Enhancements

### Add Video/Vlog Section
Create `app/vlogs/page.tsx` and embed YouTube videos:
```tsx
<iframe
  src={`https://www.youtube.com/embed/${videoId}`}
  allowFullScreen
/>
```

### Add Newsletter
Integrate ConvertKit, Substack, or Beehiiv.

### Add Comments
Use Giscus (GitHub-powered) or Disqus.

### Add Analytics
```tsx
// In app/layout.tsx
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## Writing Blog Posts Tips

### Structure
```md
---
title: "Clear, Searchable Title"
description: "One-line summary (~150 chars)"
date: "2024-06-30"
readingTime: "5 min read"
---

# Post Title

Lead paragraph - hook the reader.

## Section 1
Content...

## Section 2
Content...
```

### Best Practices
- Write for your audience (process engineers, developers, etc.)
- Use code blocks for technical content
- Add practical examples
- Keep paragraphs short
- Use headers to structure ideas

---

## Troubleshooting

**Blog posts not showing?**
- Ensure files are in `content/blog/`
- Check frontmatter is valid YAML
- Clear `.next/` folder and rebuild: `npm run build`

**Styling looks off?**
- Run `npm install tailwindcss` again
- Restart dev server: `npm run dev`

**Build errors?**
- Check TypeScript: `npx tsc --noEmit`
- Look at console output for specific errors

---

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Deployment](https://vercel.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)

---

## License

Free to use and modify for personal projects.

---

## Next Steps

1. ✅ Customize with your info
2. ✅ Write your first blog post
3. ✅ Deploy to Vercel
4. ✅ Add custom domain
5. ✅ Share with the world!

Happy building! 🚀
