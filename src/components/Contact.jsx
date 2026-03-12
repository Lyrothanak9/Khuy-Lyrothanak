import { useState } from "react";

export default function Contact() {
  const [focused, setFocused] = useState(null);
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.name && values.email) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <section className="scroll-m-24 px-4 sm:px-0" id="contact">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white whitespace-nowrap">
          Get In Touch
        </h2>
        <div className="h-px grow bg-black dark:bg-white"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Left: Info */}
        <div>
          <h3 className="text-xl sm:text-2xl text-black dark:text-white font-bold mb-4">
            Let's discuss your project
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-sm sm:text-base">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>

          <div className="space-y-6">
            {/* Email */}
            <a
              href="mailto:lyrothanak2005@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 group-hover:bg-primary/20 transition-all duration-200 flex-shrink-0">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-0.5">
                  Email Me
                </p>
                <p className="font-semibold text-black dark:text-white group-hover:text-primary transition-colors break-all">
                  lyrothanak2005@gmail.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-0.5">
                  Location
                </p>
                <p className="font-semibold text-black dark:text-white" data-location="Phnom Penh">
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-full px-4 py-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm text-green-700 dark:text-green-400 font-medium">
                Available for new projects
              </span>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-slate-100 dark:bg-slate-800/60 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-primary/10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={values.name}
                  onChange={e => setValues({ ...values, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-900 border text-black dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-all duration-200"
                  style={{
                    borderColor: focused === "name" ? "var(--color-primary, #6366f1)" : "",
                    boxShadow: focused === "name" ? "0 0 0 3px color-mix(in srgb, var(--color-primary, #6366f1) 15%, transparent)" : "",
                  }}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={values.email}
                  onChange={e => setValues({ ...values, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-900 border text-black dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-all duration-200"
                  style={{
                    borderColor: focused === "email" ? "var(--color-primary, #6366f1)" : "",
                    boxShadow: focused === "email" ? "0 0 0 3px color-mix(in srgb, var(--color-primary, #6366f1) 15%, transparent)" : "",
                  }}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Inquiry"
                value={values.subject}
                onChange={e => setValues({ ...values, subject: e.target.value })}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
                className="w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-900 border text-black dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-all duration-200"
                style={{
                  borderColor: focused === "subject" ? "var(--color-primary, #6366f1)" : "",
                  boxShadow: focused === "subject" ? "0 0 0 3px color-mix(in srgb, var(--color-primary, #6366f1) 15%, transparent)" : "",
                }}
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Message
                </label>
                <span className="text-xs text-slate-400 dark:text-slate-600 font-mono">
                  {values.message.length}/500
                </span>
              </div>
              <textarea
                rows={5}
                maxLength={500}
                placeholder="Tell me about your project..."
                value={values.message}
                onChange={e => setValues({ ...values, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-900 border text-black dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-all duration-200 resize-none"
                style={{
                  borderColor: focused === "message" ? "var(--color-primary, #6366f1)" : "",
                  boxShadow: focused === "message" ? "0 0 0 3px color-mix(in srgb, var(--color-primary, #6366f1) 15%, transparent)" : "",
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 sm:py-3.5 rounded-xl font-semibold text-sm tracking-wide hover:scale-105 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
            >
              {sent ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}