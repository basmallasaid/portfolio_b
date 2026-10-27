"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

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

const skills = [
  {
    title: "Front-End",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
  },
  {
    title: "Back-End",
    items: ["C#", "ASP.NET Core", "SQL"],
  },
  {
    title: "Tools & Design",
    items: ["Git & GitHub", "Figma", "Photoshop"],
  },
];

export default function AboutPage() {
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
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">About</h1>
        <p className="mt-2 text-neutral-600">Turning ideas into engaging interactive web experiences</p>
      </motion.div>

      <div className="grid items-center gap-10 lg:grid-cols-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={1}
          className="lg:col-span-4"
        >
          <div className="overflow-hidden rounded-2xl border border-neutral-100 shadow-sm">
            <Image
              src="/assets/img/profile-img.jpg"
              alt="Basmala Said"
              width={640}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={2}
          className="lg:col-span-8"
        >
          <h2 className="text-2xl font-semibold text-neutral-900">Front-End Developer</h2>
          <p className="mt-3 text-neutral-600">
            Passionate Front-End Developer specialized in React, building responsive and user-friendly web applications.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <ul className="space-y-2 text-sm text-neutral-700">
              <li><span className="font-medium text-neutral-900">College:</span> Faculty of Computers &amp; Artificial Intelligence</li>
              <li><span className="font-medium text-neutral-900">Degree:</span> Bachelor&apos;s in Computer Science</li>
              <li><span className="font-medium text-neutral-900">Phone:</span> +20 10 1844 7538</li>
              <li><span className="font-medium text-neutral-900">City:</span> Cairo, Egypt</li>
            </ul>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li><span className="font-medium text-neutral-900">Email:</span> basmala30311@gmail.com</li>
              <li>
                <span className="font-medium text-neutral-900">GitHub:</span>{" "}
                <a href="https://github.com/basmallasaid" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">
                  github.com/basmallasaid
                </a>
              </li>
              <li>
                <span className="font-medium text-neutral-900">LinkedIn:</span>{" "}
                <a href="https://www.linkedin.com/in/basmala-said/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">
                  linkedin.com/in/basmala-said
                </a>
              </li>
              <li><span className="font-medium text-neutral-900">Freelance:</span> Available</li>
            </ul>
          </div>

          <p className="mt-6 leading-relaxed text-neutral-600">
            I am a passionate Front-End Developer specialized in React and modern web technologies. I focus on building responsive, user-friendly, and interactive web applications with clean, efficient code. Always eager to learn and bring creative ideas to life through seamless digital experiences.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        custom={3}
        className="mt-16"
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Skills</h2>
          <p className="mt-2 text-neutral-600">A blend of front-end expertise, back-end knowledge, and design tools proficiency.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, idx) => (
            <motion.div
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={idx + 1}
              className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-neutral-900">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle2 size={16} className="text-neutral-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
