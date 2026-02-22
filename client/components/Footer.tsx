import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4e1baef34cda475296e1cbe44b780b8d%2F295da384711940e8b2ae76136eee41c1?format=webp&width=800&height=1200"
                alt="sitebetter"
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-bold text-white">sitebetter</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses with intelligent AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-cyan-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Industries
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
            <p className="text-sm text-gray-400 mb-3">
              Have questions? We'd love to hear from you.
            </p>
            <a
              href="mailto:sitebetter.net@gmail.com"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              <Mail size={16} />
              sitebetter.net@gmail.com
            </a>
          </div>
        </div>

        {/* Social Links & Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} sitebetter. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/sitebetter.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="mailto:sitebetter.net@gmail.com"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
