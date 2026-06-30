import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Satish Yadav",
  description: "Read my thoughts on process engineering, design, and tech",
};

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-600 mb-12">
          Thoughts on process engineering, design, automation, and technology
        </p>

        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="border-b pb-8 hover:bg-gray-50 p-4 rounded transition cursor-pointer">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-grow">
                      <h2 className="text-2xl font-semibold mb-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-3">{post.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{post.date}</span>
                        {post.readingTime && <span>{post.readingTime}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              No posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
