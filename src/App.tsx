import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Phone, MapPin } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

type Status = "idle" | "sent" | "error";

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-sm md:text-base text-gray-700 hover:text-black transition-colors font-sans tracking-wide"
  >
    {children}
  </a>
);

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24 font-sans">
    <div className="mx-auto max-w-6xl px-4">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-gray-900"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-2 text-gray-600 italic"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    window.location.href = `mailto:hello@example.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
    setStatus("sent");
  };

  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 font-serif font-semibold tracking-tight">
            {/*
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md">
              <img src="/logo.png" alt="Logo" className="h-full w-full object-cover" />
            </div>
            */}
            <span className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">Aaryaview</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#work">My work</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
          <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-gray-100" />
          <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-gray-50" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight tracking-tight">
              Crafting stories through light.
            </h1>
            <p className="mt-4 text-lg text-gray-600 font-sans">
              I’m <strong>Revanth Reddy</strong>, a portrait and lifestyle photographer capturing honest moments for brands and people.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a className="rounded-full px-5 py-2 bg-black text-white text-sm font-sans" href="#work">
                View my work
              </a>
              <a
                href="#contact"
                className="px-5 py-2 rounded-full border border-gray-300 hover:border-gray-800 text-sm font-sans"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About me" subtitle="">
        <p className="text-gray-700 leading-relaxed max-w-3xl font-sans">
          I specialize in portrait, lifestyle, and editorial photography, with a deep passion for capturing the authentic essence of who people truly are through honest and intentional imagery. My approach is rooted in simplicity and authenticity: real people, real light, real moments—believing that the best photographs happen when subjects feel comfortable being themselves and genuine emotions are allowed to unfold organically. Over the last few years, I've had the privilege of working with emerging brands, creative individuals, and passionate storytellers to craft visuals that feel timeless, intentional, and deeply personal to their unique narrative. Every project is an opportunity to tell a story—whether it's a personal portrait session celebrating individuality, a lifestyle shoot capturing everyday beauty, or an editorial piece pushing creative boundaries and exploring new perspectives. My process is collaborative and thoughtful, taking time to understand your vision and brand, creating imagery that doesn't just look beautiful but resonates on a deeper level—images that stand the test of time and truly represent who you are.
          </p>
      </Section>

      {/* Work Section */}
      <Section id="work" title="My work" subtitle="Explore the stories">
        <div className="grid grid-cols-3 gap-4 overflow-hidden max-h-[32rem]">
          {[0, 1, 2].map((col) => (
            <motion.div
              key={col}
              className="flex flex-col items-center gap-4 animate-[scroll_15s_linear_infinite]"
              style={{ animationDelay: `${col * 5}s` }}
            >
              {images.map((src, i) => (
                <img
                  key={`${col}-${i}`}
                  src={src}
                  alt={`Photo ${i + 1}`}
                  className="object-cover w-full h-64 rounded-2xl shadow-sm mb-6"
                />
              ))}
            </motion.div>
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
        `}</style>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact me" subtitle="Let's collaborate on your next project.">
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg font-sans">
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
          <input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
          <textarea
            placeholder="Your message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
          <button type="submit" className="bg-black text-white px-4 py-2 rounded-md">
            Send message
          </button>
          {status === "sent" && <p className="text-green-600 text-sm">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-600 text-sm">Please fill in all fields.</p>}
        </form>
      </Section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500 font-sans">
        © {new Date().getFullYear()} Revanth Reddy. All rights reserved.
      </footer>
    </div>
  );
}
