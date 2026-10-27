"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "IKEA Web App",
    description: "E-commerce website inspired by IKEA",
    image: "/assets/img/portfolio/ikea.jpg",
    category: "webapps",
    link: "https://github.com/basmallasaid/Ikea_Website",
  },
  {
    title: "Essence",
    description: "Luxury perfumes & accessories website built with React",
    image: "/assets/img/portfolio/essence.jpg",
    category: "react",
    link: "https://github.com/basmallasaid/project-react",
  },
  {
    title: "City Root",
    description: "Urban-themed React-based e-commerce project",
    image: "/assets/img/portfolio/cityroot.jpg",
    category: "react",
    link: "https://github.com/basmallasaid/Graduation_Project",
  },
  {
    title: "Landing Page",
    description: "Responsive landing page design using React",
    image: "/assets/img/portfolio/landing.jpg",
    category: "react",
    link: "https://github.com/basmallasaid/LandingPage",
  },
  {
    title: "HRMS",
    description: "Human Resource Management System built with ASP.NET Core",
    image: "/assets/img/portfolio/hrms.jpg",
    category: "dotnet",
    link: "https://github.com/basmallasaid/HRMS_Project",
  },
  {
    title: "Examination System",
    description: "Online examination platform built with ASP.NET Core & SQL Server",
    image: "/assets/img/portfolio/exam.jpg",
    category: "dotnet",
    link: "https://github.com/basmallasaid/ProjectSQL",
  },
];

const filters = [
  { label: "All", value: "*" },
  { label: "Web Apps", value: "webapps" },
  { label: "React", value: "react" },
  { label: ".NET", value: "dotnet" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("*");

  const filteredProjects =
    activeFilter === "*"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        custom={0}
        className="mb-10 text-center"
      >
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Portfolio</h1>
        <p className="mt-2 text-neutral-600">Here are some of my featured projects showcasing Web Apps, React, and .NET development.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        custom={1}
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`rounded-full px-4 py-1.5 text-sm transition-all ${
              activeFilter === filter.value
                ? "bg-neutral-900 text-white"
                : "border border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:text-neutral-900"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </motion.div>

      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project, idx) => (
          <motion.article
            key={project.title}
            layout
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={idx + 1}
            className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold text-neutral-900">{project.title}</h2>
              <p className="mt-1 text-sm text-neutral-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm text-neutral-700 transition-colors hover:text-neutral-900"
              >
                View on GitHub
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
