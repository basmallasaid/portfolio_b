"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Your message has been sent. Thank you!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Failed to send message." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Contact</h1>
        <p className="mt-2 text-neutral-600">Let&apos;s connect! Feel free to reach out for collaborations, opportunities, or just to say hello.</p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={1}
          className="lg:col-span-5"
        >
          <div className="space-y-6 rounded-2xl border border-neutral-100 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 text-neutral-700">
                <MapPin size={18} />
              </div>
              <div>
                <h2 className="font-medium text-neutral-900">Address</h2>
                <p className="text-neutral-600">Cairo, Egypt</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 text-neutral-700">
                <Phone size={18} />
              </div>
              <div>
                <h2 className="font-medium text-neutral-900">Call Me</h2>
                <p className="text-neutral-600">+20 10 1844 7538</p>
              </div>
            </div>
            <a
              href="mailto:basmala30311@gmail.com"
              className="group flex items-start gap-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 text-neutral-700">
                <Mail size={18} />
              </div>
              <div>
                <h2 className="font-medium text-neutral-900">Email Me</h2>
                <p className="text-neutral-600 transition-colors group-hover:text-neutral-900">
                  basmala30311@gmail.com
                </p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={2}
          className="lg:col-span-7"
        >
          <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-neutral-100 p-6 shadow-sm">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-100"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-neutral-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={8}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-100"
              />
            </div>

            {status.message && (
              <div
                className={`rounded-lg px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
