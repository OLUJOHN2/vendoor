import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X brand icon
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div className="space-y-4">
          <Link to="/" className="text-2xl font-bold text-indigo-500">
            Vendoor
          </Link>
          <p className="text-gray-400 text-sm">
            Vendoor is your one-stop platform for amazing deals and effortless
            shopping. Quality, convenience, and style—all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-100 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to="/shop" className="hover:text-indigo-500 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-indigo-500 transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-gray-100 font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to="/privacy" className="hover:text-indigo-500 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-indigo-500 transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-indigo-500 transition">
                Returns
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-indigo-500 transition">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-gray-100 font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-500 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <SiX size={20} />
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Vendoor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
