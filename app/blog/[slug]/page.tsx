import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Satish Yadav`,
    description: post.description,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-brand hover:underline mb-8 inline-block">
          ← Back to blog
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{post.description}</p>
          <div className="flex items-center gap-4 text-gray-500">
            <time dateTime={post.date}>{post.date}</time>
            {post.readingTime && <span>{post.readingTime}</span>}
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.rawContent || "" }} />
        </div>
      </div>
    </article>
  );
}
