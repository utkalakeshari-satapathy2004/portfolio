"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChatbubbleEllipses, IoClose, IoSend } from "react-icons/io5";

const knowledge = [
  {
    keywords: ["hello", "hi", "hey", "sup", "hii"],
    answer:
      "Hey there! 👋 I'm UtkalaKeshari's portfolio bot. Ask me anything about him — his skills, projects, experience, or how to get in touch!",
  },
  {
    keywords: ["who", "about", "yourself", "introduce", "tell me"],
    answer:
      "I'm UtkalaKeshari Satapathy — a passionate Frontend Developer. I build modern, high-performance web apps with clean architecture and great UX. I'm currently available for freelance work! 🚀",
  },
  {
    keywords: ["name"],
    answer: "His name is UtkalaKeshari Satapathy.",
  },
  {
    keywords: ["skill", "tech", "stack", "technology", "know", "use", "tools"],
    answer:
      "🛠️ Tech stack:\n• HTML, CSS, JavaScript\n• React, Next.js\n• Tailwind CSS, shadcn/ui\n• MongoDB\n• Git & GitHub\n• VS Code",
  },
  {
    keywords: ["project", "work", "built", "made", "portfolio"],
    answer:
      "📁 Projects:\n1. Portfolio Website — Next.js, Tailwind, Framer Motion\n2. Study Platform — Full-stack app with auth, admin dashboard, cloud uploads & email notifications\n3. E-Commerce Platform — Full-stack shop with cart, checkout, Stripe payments & admin panel",
  },
  {
    keywords: ["experience", "background", "journey", "history"],
    answer:
      "📅 Experience:\n• Frontend Developer @ Freelance (2024 – Present)\n• React Developer @ Personal Projects (2023 – 2024)\n• Web Dev Learner @ Self Learning (2022 – 2023)",
  },
  {
    keywords: ["contact", "hire", "reach", "email", "freelance", "available"],
    answer:
      "💼 UtkalaKeshari is available for freelance! You can reach out through the Contact section on this page. He'd love to work with you!",
  },
  {
    keywords: ["react", "next", "nextjs"],
    answer:
      "React and Next.js are his core specialties. He builds scalable, performant apps with clean component architecture and modern patterns.",
  },
  {
    keywords: ["tailwind", "css", "style", "design", "ui"],
    answer:
      "He uses Tailwind CSS and shadcn/ui to craft clean, responsive interfaces. Attention to design details and UX is a big part of his workflow.",
  },
  {
    keywords: ["mongodb", "database", "backend"],
    answer:
      "He works with MongoDB for database needs and has built full-stack apps with Node.js + Express backends paired with Next.js frontends.",
  },
];

const suggestions = ["Who is he?", "Skills", "Projects", "Experience", "Hire him?"];

function getReply(input) {
  const lower = input.toLowerCase();
  for (const item of knowledge) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return item.answer;
    }
  }
  return "Hmm, I'm not sure about that. Try asking about his skills, projects, experience, or how to contact him! 😊";
}

const BotMessage = ({ text }) => (
  <div className="flex items-start gap-2">
    <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
      U
    </div>
    <div className="bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 text-sm rounded-2xl rounded-tl-none px-4 py-2 max-w-[85%] whitespace-pre-line">
      {text}
    </div>
  </div>
);

const UserMessage = ({ text }) => (
  <div className="flex justify-end">
    <div className="bg-blue-500 text-white text-sm rounded-2xl rounded-tr-none px-4 py-2 max-w-[85%]">
      {text}
    </div>
  </div>
);

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-chatbot", handler);
    return () => window.removeEventListener("open-chatbot", handler);
  }, []);

  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! 👋 Ask me anything about UtkalaKeshari — his skills, projects, or experience!" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const reply = getReply(trimmed);
    setMessages((prev) => [
      ...prev,
      { type: "user", text: trimmed },
      { type: "bot", text: reply },
    ]);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(input);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-85 h-120 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a1128] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-linear-to-r from-blue-600 to-purple-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                  U
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-none">UtkalaKeshari</p>
                  <p className="text-white/70 text-xs">Frontend Developer</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition">
                <IoClose size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-hide">
              {messages.map((msg, i) =>
                msg.type === "bot" ? (
                  <BotMessage key={i} text={msg.text} />
                ) : (
                  <UserMessage key={i} text={msg.text} />
                )
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            <div className="px-4 pb-2 flex gap-2 flex-wrap">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs px-3 py-1 rounded-full border border-blue-400/40 text-blue-500 dark:text-blue-400 hover:bg-blue-500/10 transition"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="px-4 pb-4 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-white placeholder-gray-400 px-4 py-2 outline-none focus:border-blue-500 transition"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-xl bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition shrink-0"
              >
                <IoSend size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/40 flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <IoClose size={24} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <IoChatbubbleEllipses size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
