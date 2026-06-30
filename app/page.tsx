import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export default function Home() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
<section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
      Hi, I'm Satish Yadav
    </h1>
    <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl">
      Process Engineer II at Lummus Technology • Passionate about chemical
      engineering, process design, and building things
    </p>
    <div className="flex gap-4 flex-wrap">
      <Link
        href="/blog"
        className="inline-block bg-brand text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Read My Blog
      </Link>
      <Link
        href="/portfolio"
        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        View Portfolio
      </Link>
    </div>
  </div>
</section>

{/* Featured Posts */}
<section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Latest Posts</h2>
    <div className="space-y-6">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <span className="text-brand hover:underline">Read →</span>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-gray-600 dark:text-gray-300">No posts yet. Check back soon!</p>
      )}
    </div>
  </div>
</section>
    </div>
  );
}
