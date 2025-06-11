import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/SM.png"
                alt="Shahwaiz Mughal Logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">Shahwaiz Mughal</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering careers with AI-driven tools.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/shahwaiz-zahid/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/30  rounded-lg hover:bg-white/50 transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/ShahwaizZahid/CareerCraft"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/30  rounded-lg hover:bg-white/50 transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/resume"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Build Resume
              </Link>
              <Link
                href="//ai-cover-letter"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Cover Letter
              </Link>
              <Link
                href="//interview"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Interview Prep
              </Link>
            </nav>
          </div>

          {/* Additional Links or Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">
                Building innovative solutions for the modern workforce.
              </p>
              <p className="text-sm">
                Let&apos;s connect and collaborate on exciting projects.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Shahwaiz Mughal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
