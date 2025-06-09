import Image from "next/image";
import Codeimg from "./placeholder-code.jpeg";
import { FiArrowRight } from "react-icons/fi";

const BlogPage = () => {
  return (
    <main className="bg-[#0A0A0A] text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <section className="text-center flex flex-col items-center py-20 sm:py-24">
          <span className="flex items-center justify-center gap-2 w-20 bg-[#1F1F1F] text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full mb-4 ">
          <div className='bg-green-600 w-1.5 h-1.5 rounded-full animate-[pulse-green_2s_infinite]'></div>
          Blog
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-4">
            Developer Content & Tips
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Articles, tutorials, and tips to help you master the world of
            AI-powered development.
          </p>
        </section>

        <section className="py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Latest Articles
            </h2>
            <div className="flex items-center space-x-2">
              <button className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-lg">
                AI
              </button>
              <button className="bg-transparent text-gray-400 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                All
              </button>
            </div>
          </div>

          <div className="bg-[#1C1C1C] rounded-xl overflow-hidden flex flex-col md:flex-row cursor-pointer group newsletter-glow">
            <div className="relative md:w-1/2">
              <Image
                src={Codeimg} 
                alt="AI powered development"
                width={800}
                height={450}
                className="w-full h-64 md:h-full object-cover transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-black/50 text-white text-xs font-semibold py-1 px-3 rounded-full">
                AI
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center md:w-1/2">
              <p className="text-sm text-gray-400 mb-3">
                Mehmet canpoz · Jun 03, 2025 · 6 min read
              </p>
              <h3 className="text-2xl font-bold mb-2 text-gray-100">
                deneme
              </h3>
              <p className="text-gray-400 mb-6">deneme</p>
              <a
                href="#"
                className="font-semibold text-purple-400 flex items-center gap-2 group-hover:text-purple-300 transition-colors"
              >
                Read More
                <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        
        <section className="py-20 sm:py-24">
          <div className="w-full text-center flex flex-col items-center gap-y-8 md:flex-row justify-between md:gap-y-0 p-16 rounded-2xl " style={{ border: '1px solid rgba(255, 255, 255, 0.1)'}}>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                Don't Miss Blog Updates
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Join our email list for new articles and exclusive content.
              </p>
            </div>
            <form className="max-w-lg flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow w-full bg-[#2A2A2A] text-white placeholder-gray-500 px-5 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <FiArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BlogPage;
