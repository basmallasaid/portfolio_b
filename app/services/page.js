"use client";

import { motion } from "motion/react";
import { Layout, Code2, Palette } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Web Development",
    description: "Building responsive and functional websites using modern technologies like HTML, CSS, JavaScript, and React.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Creating interactive user interfaces with clean, efficient code and modern frameworks to ensure great user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing interfaces with a focus on usability, accessibility, and user-centered design.",
  },
];

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

export default function ServicesPage() {
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
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Services</h1>
        <p className="mt-2 text-neutral-600">What I can do for you</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={idx + 1}
              className="group rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-50 text-neutral-700">
                <Icon size={22} />
              </div>
              <h2 className="text-lg font-semibold text-neutral-900">{service.title}</h2>
              <p className="mt-2 leading-relaxed text-neutral-600">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
