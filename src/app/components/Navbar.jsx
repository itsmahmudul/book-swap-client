"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.init";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="w-full border-b bg-white dark:bg-green-950 dark:text-white transition-colors duration-300">
      {/* Top utility bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2 text-xs sm:text-sm border-b dark:border-green-800">
        {/* Left side: main links */}
        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:flex hover:text-green-600 dark:hover:text-blue-400">
            STORES & EVENTS
          </a>
          <a href="#" className="hidden md:flex hover:text-green-600 dark:hover:text-green-400">
            MEMBERSHIP
          </a>
          <a href="#" className="hidden md:flex hover:text-green-600 dark:hover:text-green-400">
            BLOG
          </a>
          <a href="#" className="hidden md:flex hover:text-green-600 dark:hover:text-green-400">
            PODCAST
          </a>
          <a href="#" className="hidden md:flex hover:text-green-600 dark:hover:text-green-400">
            SWEEPSTAKES
          </a>
          <a href="#" className="hidden md:flex hover:text-green-600 dark:hover:text-green-400">
            GIFT CARDS
          </a>
        </div>

        {/* Right side: account, wishlist, theme toggle, mobile menu */}
        <div className="flex items-center gap-4">
          {user ? (
            <button
              className="flex items-center gap-1 cursor-pointer hover:text-red-600 dark:hover:text-red-400"
              onClick={handleLogout}
            >
              <User size={16} /> Logout
            </button>
          ) : (
            <a href="/login" className="flex items-center gap-1 hover:text-green-600 dark:hover:text-green-400">
              <User size={16} /> My Account
            </a>
          )}

          <a href="#" className="flex items-center gap-1 hover:text-pink-600 dark:hover:text-pink-400">
            <Heart size={16} /> Wishlist
          </a>


          {/* Mobile menu toggle */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Middle section (desktop only) */}
      <div className="hidden md:flex items-center justify-center gap-6 px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold">Swap Hub</div>

        {/* Search */}
        <div className="max-w-xl">
          <SearchBar />
        </div>

        {/* Cart */}
        <div>
          <Button variant="ghost" size="icon" className="hover:bg-gray-200 dark:hover:bg-green-800">
            <ShoppingCart size={20} />
          </Button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-4 py-4 flex flex-col gap-4 bg-white dark:bg-green-950 dark:text-white transition-colors duration-300">
          {/* Logo on mobile */}
          <div className="text-lg font-bold">
            BARNES <span className="text-yellow-600">&</span> NOBLE
          </div>

          {/* SearchBar inside dropdown */}
          <SearchBar />

          {/* Links */}
          <nav className="flex flex-col gap-3 text-sm font-medium mt-2">
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
              Books
            </a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
              Fiction
            </a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
              Nonfiction
            </a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
              eBooks
            </a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
              Audiobooks
            </a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
              Teens & YA
            </a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
              Kids
            </a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
              Toys & Games
            </a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
              Stationery
            </a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
              Music & Movies
            </a>
          </nav>

          {/* Cart */}
          <div className="mt-4">
            <Button
              variant="outline"
              className="w-full flex items-center gap-2 border-green-700 dark:border-green-400 hover:bg-gray-100 dark:hover:bg-green-800"
            >
              <ShoppingCart size={18} /> Cart
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

 

