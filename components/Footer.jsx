"use client";

import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/basmallasaid",
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/basmala-said/",
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:basmala30311@gmail.com",
    icon: Mail,
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] pt-12 pb-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[1px] w-96 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex flex-col items-center gap-3 md:items-start">
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
          <p className="max-w-xs text-center text-xs leading-5 text-zinc-500 md:max-w-[230px] md:text-left lg:max-w-xs">
            Frontend Engineer crafting modern web experiences &amp; intelligent
            automations.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 lg:gap-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socialLinks.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="rounded-xl border border-white/5 bg-white/5 p-2 text-zinc-400 transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:text-cyan-400"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/[0.05] px-6 pt-6 text-xs text-zinc-500 sm:flex-row">
        <p className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} Basmalla Said. Built with Next.js,
          Tailwind CSS &amp; Framer Motion.
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3.5 py-2 font-medium text-zinc-400 transition-all hover:border-cyan-400/20 hover:bg-white/10 hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40"
        >
          Back to Top
          <ArrowUp
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </button>
      </div>
    </footer>
  );
}
