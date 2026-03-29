"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiLocationPlus } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <section
            id="contact"
            className="w-full py-24 bg-gray-50 dark:bg-[#020716]"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <p className="text-3xl text-center text-blue-500 font-medium uppercase tracking-wider mb-16">
                    Contact Me
                </p>

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Left — info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Let's Work Together
                            </h2>
                            <p className="mt-3 text-gray-500 dark:text-gray-400 leading-relaxed">
                                Have a project in mind or just want to say hi? Fill out the form and I'll get back to you as soon as possible.
                            </p>
                        </div>

                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                   <MdEmail className="w-5 h-5 text-[#2b80ff]"/>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">utkala@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                    <BiLocationPlus className="w-5 h-5 text-[#2b80ff]"/>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Odisha, India</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                    <FaLinkedin className="w-5 h-5 text-[#2b80ff]"/>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">LinkedIn</p>
                                    <Link href="#" className="text-sm font-medium text-blue-500 hover:underline">linkedin.com/in/utkala</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — form */}
                    <div className="bg-white dark:bg-[#0a0f1e] border border-gray-200 dark:border-white/10 rounded-2xl p-8">
                        {sent ? (
                            <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                                <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                    <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Thanks for reaching out. I'll get back to you shortly.</p>
                                <button
                                    onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                                    className="mt-2 text-sm text-blue-500 hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project..."
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm tracking-wide transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
