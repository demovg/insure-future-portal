
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-primary">
            AutoLoan<span className="text-accent">.ca</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </a>
            <Button variant="outline" className="mr-2">
              Login
            </Button>
            <Button>Sign Up</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-down">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-primary transition-colors px-4 py-2"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-primary transition-colors px-4 py-2"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-primary transition-colors px-4 py-2"
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 px-4">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
                <Button className="w-full">Sign Up</Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
