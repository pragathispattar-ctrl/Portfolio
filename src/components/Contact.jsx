import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Linkedin, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, NotionIcon } from './BrandIcons';

export default function Contact() {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required';
    if (!formData.message.trim()) {
      errs.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden bg-slate-50 dark:bg-[#030712] transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Direct Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            {contact.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-light">
            "{contact.subheading}"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Info & Social Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 rounded-3xl glass-panel border border-slate-200 dark:border-white/[0.1] flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest block mb-2 font-semibold">
                Connect Directly
              </span>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">
                Start a Conversation
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8">
                Whether you have an opening in business analysis, program management, operations, data analytics, or product ownership, I look forward to connecting.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/50 hover:bg-cyan-50/50 dark:hover:bg-cyan-950/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">EMAIL ADDRESS</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {contact.email}
                    </p>
                  </div>
                </a>

                {/* Phone Item */}
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/50 hover:bg-cyan-50/50 dark:hover:bg-cyan-950/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">CONTACT NUMBER</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {contact.phone}
                    </p>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">LOCATION</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {contact.location}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Profile */}
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-gradient-to-r dark:from-blue-950/40 dark:to-[#0b1329] border border-slate-200 dark:border-blue-500/30 hover:border-cyan-400 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    <div>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">LINKEDIN</p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                        Pragathi Pattar
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* GitHub Profile */}
                <a
                  href="https://github.com/pragathispattar-ctrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-slate-800 dark:text-slate-200" />
                    <div>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">GITHUB</p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                        pragathispattar-ctrl
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Notion Portfolio */}
                <a
                  href="https://app.notion.com/p/Portfolio-Pragathi-Pattar-37211e1a6cf78086be91f4eae086a65a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <NotionIcon className="w-5 h-5 text-slate-800 dark:text-slate-200" />
                    <div>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">NOTION PORTFOLIO</p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                        Pragathi Pattar Docs
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
              <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span>{contact.availability}</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form with Validation & Mailto Fallback */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-3xl glass-panel border border-slate-200 dark:border-white/[0.1] relative"
          >
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-light">
              Submit your inquiry below to trigger a pre-filled direct communication to Pragathi's email inbox.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-400/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                  Message Prepared!
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-light max-w-md mx-auto">
                  Your mail client has been opened with your inquiry pre-filled. If it did not open automatically, you can email directly at{' '}
                  <a href={`mailto:${contact.email}`} className="text-cyan-600 dark:text-cyan-300 underline font-semibold">
                    {contact.email}
                  </a>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/[0.15] text-slate-800 dark:text-white border border-slate-200 dark:border-white/[0.1] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 uppercase font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-white/[0.03] border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-white/[0.1] focus:border-cyan-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 uppercase font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. jane@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-white/[0.03] border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-white/[0.1] focus:border-cyan-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 uppercase font-medium">
                    Subject Line *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Business Analyst / Program Management / Product Owner Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-white/[0.03] border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                      errors.subject ? 'border-rose-500' : 'border-slate-200 dark:border-white/[0.1] focus:border-cyan-400'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 uppercase font-medium">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Discuss an opportunity, project, or role..."
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-white/[0.03] border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors resize-none ${
                      errors.message ? 'border-rose-500' : 'border-slate-200 dark:border-white/[0.1] focus:border-cyan-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm sm:text-base text-black bg-gradient-to-r from-cyan-400 to-sky-400 hover:shadow-cyan-glow transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {submitting ? (
                    <span className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
