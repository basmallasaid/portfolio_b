"use client";

import { motion } from "motion/react";
import { Download } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function ResumePage() {
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
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Resume</h1>
        <p className="mt-2 text-neutral-600">Front-End Developer passionate about creating scalable, user-friendly, and interactive web applications.</p>
        <div className="mt-6">
          <a
            href="/assets/pdf/BasmalaSaid_FrontEndCV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={1}
          className="space-y-8"
        >
          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Summary</h2>
            <div className="mt-4 rounded-2xl border border-neutral-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-neutral-900">Basmala Said Mustafa</h3>
              <p className="mt-2 text-neutral-600">
                Recent graduate in Computer Science, specializing in Front-End Development with React, skilled in UI/UX design and building scalable applications.
              </p>
              <ul className="mt-4 space-y-1 text-sm text-neutral-700">
                <li>Al Qalyubiyah, Egypt</li>
                <li>+20 10 1844 7538</li>
                <li>basmala30311@gmail.com</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Education</h2>
            <div className="mt-4 rounded-2xl border border-neutral-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-neutral-900">Bachelor&apos;s Degree, Computer Science</h3>
              <p className="mt-1 text-sm text-neutral-500">2021 - 2025</p>
              <p className="mt-2 text-neutral-600">Faculty of Computers and Artificial Intelligence, Benha University</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Professional Training</h2>
            <div className="mt-4 rounded-2xl border border-neutral-100 p-6 shadow-sm">
              <ul className="space-y-2 text-neutral-700">
                <li>NTI - Web Development</li>
                <li>ITI - Frontend Development with React</li>
                <li>DEPI - Full Stack Development with .NET</li>
                <li>AUC - English</li>
                <li>Zewail University - AI</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Skills</h2>
            <div className="mt-4 rounded-2xl border border-neutral-100 p-6 shadow-sm space-y-2 text-neutral-700">
              <p><span className="font-medium text-neutral-900">Programming Languages:</span> HTML, CSS, JavaScript, Bootstrap, Python, C#, SQL, C++</p>
              <p><span className="font-medium text-neutral-900">Frameworks:</span> React, .NET</p>
              <p><span className="font-medium text-neutral-900">Other:</span> UX Design</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Languages</h2>
            <div className="mt-4 rounded-2xl border border-neutral-100 p-6 shadow-sm">
              <ul className="space-y-2 text-neutral-700">
                <li>English</li>
                <li>Arabic</li>
              </ul>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={2}
          className="space-y-8"
        >
          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Projects</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-neutral-100 p-6 shadow-sm">
                <h3 className="text-lg font-medium text-neutral-900">Rooted in the City (Graduation Project)</h3>
                <p className="mt-2 text-neutral-600">Virtual Farm Platform allowing users to manage real plants remotely. Built with React, Axios, Bootstrap, SweetAlert2.</p>
                <a href="https://github.com/basmallasaid/Graduation_Project" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-neutral-700 hover:text-neutral-900">GitHub &rarr;</a>
              </div>
              <div className="rounded-2xl border border-neutral-100 p-6 shadow-sm">
                <h3 className="text-lg font-medium text-neutral-900">HRMS Project</h3>
                <p className="mt-2 text-neutral-600">Human Resource Management System built with ASP.NET Core.</p>
                <a href="https://github.com/basmallasaid/HRMS_Project" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-neutral-700 hover:text-neutral-900">GitHub &rarr;</a>
              </div>
              <div className="rounded-2xl border border-neutral-100 p-6 shadow-sm">
                <h3 className="text-lg font-medium text-neutral-900">IKEA Web App</h3>
                <p className="mt-2 text-neutral-600">E-commerce website inspired by IKEA.</p>
                <a href="https://github.com/basmallasaid/Ikea_Website" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-neutral-700 hover:text-neutral-900">GitHub &rarr;</a>
              </div>
              <div className="rounded-2xl border border-neutral-100 p-6 shadow-sm">
                <h3 className="text-lg font-medium text-neutral-900">Examination System</h3>
                <p className="mt-2 text-neutral-600">Online examination platform built with ASP.NET Core & SQL Server.</p>
                <a href="https://github.com/basmallasaid/ProjectSQL" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-neutral-700 hover:text-neutral-900">GitHub &rarr;</a>
              </div>
              <div className="rounded-2xl border border-neutral-100 p-6 shadow-sm">
                <h3 className="text-lg font-medium text-neutral-900">Essence</h3>
                <p className="mt-2 text-neutral-600">Luxury perfumes & accessories website built with React.</p>
                <a href="https://github.com/basmallasaid/project-react" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-neutral-700 hover:text-neutral-900">GitHub &rarr;</a>
              </div>
              <div className="rounded-2xl border border-neutral-100 p-6 shadow-sm">
                <h3 className="text-lg font-medium text-neutral-900">Landing Page</h3>
                <p className="mt-2 text-neutral-600">Responsive landing page design using React.</p>
                <a href="https://github.com/basmallasaid/LandingPage" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-neutral-700 hover:text-neutral-900">GitHub &rarr;</a>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
