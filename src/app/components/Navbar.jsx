"use client"

import { useState } from "react"
import { Button, } from "@/components/ui/button"
import { Heart, User, ShoppingCart, Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import SearchBar from "./SearchBar"
import { useSelector } from "react-redux"
import { signOut } from "firebase/auth"
import { auth } from "../../../firebase.init"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);


  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="w-full border-b">
      {/* Top utility bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2 text-xs sm:text-sm border-b">
        {/* Left side: main links */}
        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:flex">STORES & EVENTS</a>
          <a href="#" className="hidden md:flex">MEMBERSHIP</a>
          <a href="#" className="hidden md:flex">BLOG</a>
          <a href="#" className="hidden md:flex">PODCAST</a>
          <a href="#" className="hidden md:flex">SWEEPSTAKES</a>
          <a href="#" className="hidden md:flex">GIFT CARDS</a>
        </div>

        {/* Right side: account, wishlist, theme toggle, mobile menu */}
        <div className="flex items-center gap-4">
          {
            user ? (
              <button
                className="flex items-center gap-1 cursor-pointer"
                onClick={handleLogout}
              >
                <User size={16} /> Logout
              </button>
            ) : (
              <a href="/login" className="flex items-center gap-1">
                <User size={16} /> My Account
              </a>
            )
          }

          <a href="#" className="flex items-center gap-1">
            <Heart size={16} /> Wishlist
          </a>
          <ThemeToggle />
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>



      {/* Middle section (desktop only) */}
      <div className="hidden md:flex items-center justify-center gap-6 px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold">
          Swap Hub
        </div>

        {/* Search */}
        <div className="max-w-xl">
          <SearchBar />
        </div>

        {/* Cart */}
        <div>
          <Button variant="ghost" size="icon">
            <ShoppingCart size={20} />
          </Button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-4 py-4 flex flex-col gap-4">
          {/* Logo on mobile */}
          <div className="text-lg font-bold">
            BARNES <span className="text-yellow-600">&</span> NOBLE
          </div>

          {/* SearchBar inside dropdown */}
          <SearchBar />

          {/* Links */}
          <nav className="flex flex-col gap-3 text-sm font-medium mt-2">
            <a href="#">Books</a>
            <a href="#">Fiction</a>
            <a href="#">Nonfiction</a>
            <a href="#">eBooks</a>
            <a href="#">Audiobooks</a>
            <a href="#">Teens & YA</a>
            <a href="#">Kids</a>
            <a href="#">Toys & Games</a>
            <a href="#">Stationery</a>
            <a href="#">Music & Movies</a>
          </nav>

          {/* Cart */}
          <div className="mt-4">
            <Button variant="outline" className="w-full flex items-center gap-2">
              <ShoppingCart size={18} /> Cart
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

