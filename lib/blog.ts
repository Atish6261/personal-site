import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime?: string;
  content?: React.ReactNode;
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(postsDir)) {
    return [];
  }

  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const filePath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: file.replace(/\.(md|mdx)$/, ""),
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString().split("T")[0],
      readingTime: data.readingTime,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): (BlogPost & { rawContent?: string }) | null {
  let filePath = path.join(postsDir, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    filePath = path.join(postsDir, `${slug}.mdx`);
  }

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    date: data.date || new Date().toISOString().split("T")[0],
    readingTime: data.readingTime,
    rawContent: content,
  };
}
