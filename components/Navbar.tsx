import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-brand">
          Satish
        </Link>
        <div className="flex gap-8 items-center">
          <Link href="/" className="hover:text-brand transition">
            Home
          </Link>
          <Link href="/blog" className="hover:text-brand transition">
            Blog
          </Link>
          <Link href="/portfolio" className="hover:text-brand transition">
            Portfolio
          </Link>
          <a
            href="https://linkedin.com/in/satish-yadav-048a80214" // Update this
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
