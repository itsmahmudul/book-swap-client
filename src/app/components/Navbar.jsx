"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.init";
import { ThemeToggle } from "@/components/ThemeSwitcher";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const linkCls =
    "hover:text-brand dark:hover:text-brand transition-colors";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/70 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-950/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-zinc-950/60 text-zinc-700 dark:text-zinc-300">
      {/* Top utility bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
          {/* Left: quick links */}
          <nav className="hidden md:flex items-center gap-4">
            <a href="#" className={linkCls}>Stores & Events</a>
            <a href="#" className={linkCls}>Membership</a>
            <a href="#" className={linkCls}>Blog</a>
            <a href="#" className={linkCls}>Podcast</a>
            <a href="#" className={linkCls}>Sweepstakes</a>
            <a href="#" className={linkCls}>Gift Cards</a>
          </nav>

          {/* Right: account, wishlist, theme, mobile menu */}
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              {user ? (
                <button
                  className="flex items-center gap-1 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                  onClick={handleLogout}
                >
                  <User size={16} /> Logout
                </button>
              ) : (
                <a href="/login" className={`flex items-center gap-1 ${linkCls}`}>
                  <User size={16} /> Sign in
                </a>
              )}

              <a href="#" className={`flex items-center gap-1 ${linkCls}`}>
                <Heart size={16} /> Wishlist
              </a>

              <ThemeToggle />
            </div>
          </div>
          
        </div>
         <div>
              {/* Mobile menu toggle */}
              <button
                className="md:hidden p-2 duration-300 fixed top-3 right-4 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
      </div>

      {/* Middle section (desktop) */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
          <div className="flex items-center justify-center gap-6">
            {/* Brand */}
            <a href="/" className="select-none">
              <span className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Swap<span className="text-brand">Hub</span>
              </span>
            </a>

            {/* Search */}
            <div>
              <SearchBar />
            </div>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-zinc-100 dark:hover:bg-zinc-900"
              aria-label="Open cart"
            >
              <ShoppingCart size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300">
          <div className="mx-auto max-w-7xl px-4 py-4">
            {/* Brand */}
            <div className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Swap<span className="text-brand">Hub</span>
            </div>

            {/* Search */}
            <div className="mt-3">
              <SearchBar />
            </div>

            {/* Links */}
            <nav className="mt-4 flex flex-col gap-3 text-sm font-medium">
              {[
                "Books",
                "Fiction",
                "Nonfiction",
                "eBooks",
                "Audiobooks",
                "Teens & YA",
                "Kids",
                "Toys & Games",
                "Stationery",
                "Music & Movies",
              ].map((label) => (
                <a key={label} href="#" className={linkCls}>
                  {label}
                </a>
              ))}
            </nav>

            {/* Cart */}
            <div className="mt-5">
              <Button
                variant="outline"
                className="w-full border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                <ShoppingCart size={18} /> Cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}




