"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiGlobe, FiDownload, FiChevronDown, FiCode, FiX, FiMenu } from "react-icons/fi";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    // Mobil menü açıkken body scroll'u engelle
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'unset'; // Component unmount olduğunda scroll'u etkinleştir
    };
  }, [mobileMenuOpen]);

  const toggleLang = () => {
    setLangOpen(!langOpen);
    setDownloadOpen(false);
  };

  const toggleDownload = () => {
    setDownloadOpen(!downloadOpen);
    setLangOpen(false);
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8 mx-auto">
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

      {/* Desktop Action Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <div className="relative" ref={langRef}>
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 text-sm hover:text-white transition-colors text-gray-400"
            style={{ borderRadius: '12px', transition: 'all 0.3s ease', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '8px 12px' }}
          >
            <FiGlobe className="h-4 w-4" />
            EN
            <FiChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
            />
          </button>
          {langOpen && (
            <div className="absolute top-full right-0 mt-4 w-48 bg-[#1e1e1e] rounded-lg shadow-lg z-10 p-2 border border-white/10">
                {/* Language options... */}
            </div>
          )}
        </div>

        <a
          href="/login"
          className="text-sm hover:text-white transition-colors text-gray-400"
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
              className={`h-4 w-4 transition-transform duration-200 ${downloadOpen ? "rotate-180" : ""}`}
            />
          </button>
          {downloadOpen && (
            <div className="absolute top-full right-0 mt-2 w-60 bg-[#1e1e1e] rounded-lg shadow-lg z-10 p-2 text-gray-300 border border-white/10">
                {/* Download options... */}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={toggleMobileMenu} className="text-white">
          {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[90px] left-0 w-full h-[calc(100vh-90px)] bg-[#101018] lg:hidden flex flex-col p-6 gap-6">
            <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={
                          `relative text-lg py-4 px-4 rounded-lg group text-center ` +
                          (pathname === link.path
                            ? 'text-white bg-[#1a1a2e]'
                            : 'text-gray-300 hover:text-white hover:bg-[#1a1a2e]')
                        }
                    >
                        {link.name}
                        {pathname === link.path && (
                            <div className="absolute bottom-[10px] left-1/2 w-1/4 h-[3px] bg-gradient-to-r from-purple-500 to-indigo-600 rounded-[1px] transform -translate-x-1/2"></div>
                        )}
                    </a>
                ))}
            </nav>
            <div className="flex flex-col gap-4 mt-auto">
                <button
                    className="flex items-center justify-center gap-2 text-lg w-full py-3 hover:text-white transition-colors text-gray-300 border border-white/10 rounded-lg"
                >
                    <FiGlobe className="h-5 w-5" />
                    EN
                    <FiChevronDown className="h-5 w-5"/>
                </button>
                <a
                    href="/login"
                    className="text-lg w-full py-3 text-center hover:text-white transition-colors text-gray-300 border border-white/10 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Login
                </a>
                <button
                    className="flex items-center justify-center gap-2 w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg hover:opacity-90 transition-opacity"
                >
                    <FiDownload className="h-5 w-5" />
                    Download
                </button>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;