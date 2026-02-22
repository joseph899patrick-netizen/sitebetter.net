import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4e1baef34cda475296e1cbe44b780b8d%2F295da384711940e8b2ae76136eee41c1?format=webp&width=800&height=1200"
            alt="sitebetter"
            className="h-10 w-10 object-contain"
          />
          <span className="text-lg font-bold text-white hidden sm:inline">
            sitebetter
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary text-sm">
            Get Free Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-cyan-400"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-white/10 px-4 py-4 space-y-3 animate-in fade-in">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="block btn-primary text-center mt-4">
            Get Free Demo
          </a>
        </div>
      )}
    </header>
  );
}
