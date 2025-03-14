"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-gray-700 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-blue-800 text-xl font-bold">MediMart</h2>
            <p className="mt-2 text-sm">
              Your trusted online pharmacy, delivering quality medicines and
              healthcare products at your doorstep.
            </p>
            <div className="flex items-center mt-4">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              <span>123 Health St, Medical City, Dhaka</span>
            </div>
            <div className="flex items-center mt-2">
              <Phone className="w-5 h-5 text-blue-600 mr-2" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center mt-2">
              <Mail className="w-5 h-5 text-blue-600 mr-2" />
              <span>support@medicare.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-blue-800 text-lg font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/" className="hover:text-purple-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-purple-600 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-purple-600 transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-purple-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-blue-800 text-lg font-semibold">
              Customer Support
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/faq" className="hover:text-purple-600 transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/return-policy"
                  className="hover:text-purple-600 transition"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-info"
                  className="hover:text-purple-600 transition"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-purple-600 transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-blue-800 text-lg font-semibold">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm mt-2">
              Stay updated with the latest health tips and special offers.
            </p>
            <div className="flex items-center mt-3 space-x-2">
              <Input
                placeholder="Enter your email"
                className="bg-white text-gray-700 border-gray-300"
              />
              <Button
                variant="default"
                className="bg-purple-500 hover:bg-purple-600 text-white"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} MediCare. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
