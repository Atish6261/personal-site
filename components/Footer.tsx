export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/" className="hover:text-brand transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-brand transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-brand transition">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="https://linkedin.com/in/satish-yadav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/satish" // Update this
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:your-email@example.com"
                  className="hover:text-brand transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-gray-600 text-sm">
              Process Engineer at Lummus Technology. Interested in process
              design, automation, and building things.
            </p>
          </div>
        </div>

        <div className="border-t pt-8 flex justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Satish Yadav. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
