"use client";
"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiGlobe, FiDownload, FiChevronDown, FiCode } from "react-icons/fi";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
  ];

  const [langOpen, setLangOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  const langRef = useRef(null);
  const downloadRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
      if (downloadRef.current && !downloadRef.current.contains(event.target)) {
        setDownloadOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleLang = () => {
    setLangOpen(!langOpen);
    setDownloadOpen(false); 
  };

  const toggleDownload = () => {
    setDownloadOpen(!downloadOpen);
    setLangOpen(false); 
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between h-[90px] py-5 px-4 sm:px-6 lg:px-8 bg-[rgba(8,8,12,0.95)] backdrop-blur-[40px] border-b border-white/[0.03] transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] z-[1050]">
      <div className="flex items-center gap-10">
        <a
          href="/"
          className="header-link flex items-center gap-4 text-xl font-bold text-white hover:text-gray-200 transition-colors"
        >
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-1.5 rounded-xl logo-glow">
            <FiCode size={34} />
          </div>
          <span className="text-2xl tracking-[-1px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Coderia
          </span>
        </a>
      </div>
      <nav className="hidden md:flex items-center gap-8 mx-auto">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            className={
              `relative text-sm transition-colors py-2 pb-3 px-4 rounded-lg overflow-hidden group ` +
              (pathname === link.path
                ? 'text-white bg-[#111122]' 
                : 'text-gray-400 hover:text-white hover:bg-[#111122]') 
            }
          >
            {link.name}
            <div
              className={
                `absolute bottom-[8px] left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-600 rounded-[1px] transform -translate-x-1/2 origin-center transition-transform duration-300 ` +
                (pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100')
              }
            ></div>
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4">

        <div className="relative hidden sm:flex" ref={langRef}>
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 text-sm hover:text-white transition-colors text-gray-400"
            style={{ borderRadius: '12px', transition: 'all 0.3s ease', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '8px 12px' }}
          >
            <FiGlobe className="h-4 w-4" />
            EN
            <FiChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                langOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {langOpen && (
            <div className="absolute top-full right-0 mt-4 w-48 bg-[#1e1e1e] rounded-lg shadow-lg z-10 p-2 border border-white/10">
              <ul>
                <li className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2c2c2c] cursor-pointer text-white">
                  <img
                    src="https://flagcdn.com/w20/tr.png"
                    alt="Turkish Flag"
                    className="h-4"
                  />
                  <span>Türkçe</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-md bg-[#3e3e7a] text-white cursor-pointer">
                  <img
                    src="https://flagcdn.com/w20/us.png"
                    alt="US Flag"
                    className="h-4"
                  />
                  <span>English</span>
                </li>
              </ul>
            </div>
          )}
        </div>


        <a
          href="/login"
          className="hidden sm:block text-sm hover:text-white transition-colors text-gray-400"
          style={{ borderRadius: '12px', transition: 'all 0.3s ease', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '8px 12px' }}
        >
          Login
        </a>


        <div className="relative" ref={downloadRef}>
          <button
            onClick={toggleDownload}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg hover:opacity-90 transition-opacity duration-300"
          >
            <FiDownload className="h-4 w-4" />
            Download
            <FiChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                downloadOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {downloadOpen && (
            <div className="absolute top-full right-0 mt-2 w-60 bg-[#1e1e1e] rounded-lg shadow-lg z-10 p-2 text-gray-300 border border-white/10">
              <ul>
                <li className="flex items-center gap-3 p-3 rounded-md hover:bg-[#2c2c2c] cursor-pointer">
                  <FaWindows className="h-6 w-6 text-gray-200" />
                  <div>
                    <p className="font-semibold text-white">Windows</p>
                    <p className="text-xs">Windows 10/11</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-md hover:bg-[#2c2c2c] cursor-pointer">
                  <FaApple className="h-6 w-6 text-gray-200" />
                  <div>
                    <p className="font-semibold text-white">macOS</p>
                    <p className="text-xs">macOS 12+</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-md hover:bg-[#2c2c2c] cursor-pointer">
                  <FaLinux className="h-6 w-6 text-gray-200" />
                  <div>
                    <p className="font-semibold text-white">Linux</p>
                    <p className="text-xs">Ubuntu, Debian</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-md hover:bg-[#2c2c2c] cursor-pointer">
                  <FiGlobe className="h-6 w-6 text-gray-200" />
                  <div>
                    <p className="font-semibold text-white">Web Version</p>
                    <p className="text-xs">Use in browser</p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
