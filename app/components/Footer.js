import React from "react";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
  FiCode,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-gray-800">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-start">
          <div className="flex items-center text-white text-3xl font-bold mb-4">
            <FiCode
              className="lucide lucide-code-2 mr-2 text-purple-500"
              size={36}
            />
            Coderia
          </div>
          <p className="mb-4 text-gray-400 text-base leading-relaxed max-w-sm">
            AI-powered code editor for the future of development. Create,
            collaborate, and innovate with cutting-edge technology.
          </p>
        </div>

        <div className="md:col-span-3 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    System Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Press Kit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Live Chat
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Feedback
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">
                Developers
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Open Source
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 text-sm">
        <div className="flex flex-col items-center md:items-start  gap-4 mb-4 md:mb-0">
          <button
            className="
            bg-[#1A1A1A]
            text-white
            font-medium
            py-2
            px-4
            rounded-full
            border
            border-transparent
            hover:border-purple-600
            transition-colors
            duration-300
            flex
            items-center
            gap-1
            whitespace-nowrap
          "
          >
            We <span className="text-red-500 text-lg mx-0.5">♥</span> Webze
          </button>
          <p className="mt-4 md:mt-0 text-gray-500">
            © 2024 Coderia. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-0 flex-col md:flex-row">
            <span className="text-gray-400 text-base">Follow Us</span>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-[#1A1A1A] rounded-md flex items-center justify-center hover:bg-purple-600 transition-colors duration-200 group"
              >
                <FiTwitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#1A1A1A] rounded-md flex items-center justify-center hover:bg-purple-600 transition-colors duration-200 group"
              >
                <FiGithub className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#1A1A1A] rounded-md flex items-center justify-center hover:bg-purple-600 transition-colors duration-200 group"
              >
                <FaDiscord className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#1A1A1A] rounded-md flex items-center justify-center hover:bg-purple-600 transition-colors duration-200 group"
              >
                <FiLinkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#1A1A1A] rounded-md flex items-center justify-center hover:bg-purple-600 transition-colors duration-200 group"
              >
                <FiYoutube className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#1A1A1A] rounded-md flex items-center justify-center hover:bg-purple-600 transition-colors duration-200 group"
              >
                <FaTelegram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
