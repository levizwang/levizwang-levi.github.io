import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`absolute top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'fixed h-14' : 'h-20'
      }`}
    >
      <div
        className={`flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 transition-all duration-300 select-none lg:border-r lg:border-l lg:rounded-b-xl ${
          isScrolled
            ? 'border-neutral-300/50 bg-white/80 dark:border-neutral-600/40 dark:bg-neutral-900/60 backdrop-blur-2xl'
            : 'border-transparent'
        }`}
      >
        <Link
          to="/"
          className="relative z-30 flex items-center space-x-2 text-black dark:text-white"
        >
          <span className="text-nowrap">Hi, DIYgod</span>
        </Link>

        {isMenuOpen && (
          <div
            id="mobileMenuBackground"
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-20 w-screen h-screen duration-300 ease-out bg-white/90 dark:bg-neutral-950/90 sm:hidden"
          />
        )}

        <nav className="relative z-30 flex flex-row-reverse justify-start w-full text-sm sm:justify-end text-neutral-500 dark:text-neutral-400 sm:flex-row">
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-end justify-center w-6 h-6 ml-4 cursor-pointer sm:hidden"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-8 h-8" />}
          </div>

          <div
            id="menu"
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } ${
              isScrolled ? 'top-[56px]' : 'top-[75px]'
            } fixed ease-out duration-300 sm:top-0 w-full left-0 sm:py-0 pt-7 pb-4 z-40 flex-col items-end justify-start w-full h-auto text-sm sm:h-auto sm:relative sm:flex-row sm:flex sm:w-auto sm:pr-0 sm:pt-0`}
          >
            <div className="absolute inset-0 top-0 right-0 block w-full h-full px-3 sm:hidden">
              <div className="relative w-full h-full bg-white border border-dashed border-neutral-300 dark:border-neutral-700 backdrop-blur-sm rounded-xl dark:bg-neutral-950"></div>
            </div>

            <Link
              to="/"
              className="relative flex items-center justify-center w-full px-3 py-2 tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white"
            >
              首页
            </Link>
            <Link
              to="/posts"
              className="relative flex items-center justify-center w-full px-3 py-2 tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white"
            >
              文章
            </Link>
            <Link
              to="/projects"
              className="relative flex items-center justify-center w-full px-3 py-2 tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white"
            >
              项目
            </Link>
            <a
              href="#friends"
              className="relative flex items-center justify-center w-full px-3 py-2 tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white"
            >
              友邻
            </a>
            <Link
              to="/about"
              className="relative flex items-center justify-center w-full px-3 py-2 tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white"
            >
              关于
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
