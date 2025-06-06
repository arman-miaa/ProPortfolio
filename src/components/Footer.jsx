import { Github, Linkedin, Twitter, Globe } from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    [
      "Home",
      "Competitive Programming",
      "Projects",
      "Skills",
      "Education Qualification",
    ],
    ["Extra Curriculum & Courses", "Contact"],
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-6 mb-16">
          {navigationLinks.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-4">
              {row.map((link, linkIndex) => (
                <button
                  key={linkIndex}
                  className="btn btn-outline border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500 rounded-full px-6"
                >
                  {link}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          {/* Brand Section */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-orange-400 mb-2">anCoder</h2>
            <p className="text-slate-400 text-lg">
              Competitive Programmer | Software Engineer
            </p>
            <p className="text-slate-400">Python Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="Website"
            >
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="text-center space-y-2">
            <p className="text-slate-400 text-sm">
              © 2025 AN Mamun. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Built with{" "}
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Software Project
              </a>{" "}
              and Love.{" "}
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Portfolio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
