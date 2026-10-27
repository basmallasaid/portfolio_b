"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-6 z-50 w-[calc(100%-2rem)] -translate-x-1/2 sm:w-auto sm:min-w-[550px] sm:max-w-fit">
      <nav className="flex items-center justify-between gap-8 rounded-full border border-white/10 bg-zinc-900/60 px-6 py-2.5 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <Link
            href="/"
            className="group inline-flex items-center text-lg font-semibold tracking-tight"
            aria-label="Basmalla home"
          >
            <span className="font-mono text-zinc-500 transition-colors group-hover:text-cyan-400">
              &lt;
            </span>
            <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text font-bold text-transparent">
              Basmalla
            </span>
            <span className="font-mono text-zinc-500 transition-colors group-hover:text-indigo-400">
              {" />"}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-medium text-zinc-950 shadow-md transition-all hover:bg-zinc-200 active:scale-95"
            >
              Hire Me
            </Link>
          </div>

          <button
            className="md:hidden text-zinc-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 text-xs font-medium text-zinc-950 shadow-md transition-all hover:bg-zinc-200 active:scale-95"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
