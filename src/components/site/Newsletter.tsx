import { motion } from "framer-motion";
import { Check, Mail, Send } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="relative overflow-hidden glass rounded-[36px] px-8 md:px-14 py-14 md:py-16 text-center">
          <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-primary"
          >
            <Mail className="h-3.5 w-3.5" /> Newsletter
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display font-bold text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.02em]"
          >
            Stay Updated With <span className="text-gradient">Health Tips</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-[15px] md:text-[16px] text-muted-foreground max-w-xl mx-auto"
          >
            Receive trusted healthcare insights, wellness tips and medical updates
            directly in your inbox.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={submit}
            className="mt-9 mx-auto max-w-xl flex flex-col sm:flex-row items-stretch gap-3 relative z-10"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <div className="flex-1 flex items-center gap-3 rounded-full glass px-5 h-14 focus-within:ring-2 focus-within:ring-primary/40 transition">
              <Mail className="h-4 w-4 text-primary" />
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none text-[15px] placeholder:text-muted-foreground"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 text-[15px] font-semibold text-white shadow-[0_18px_40px_-12px_rgb(0_200_150/0.7)] hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-12px_rgb(0_200_150/0.9)] transition-all"
            >
              Subscribe
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.form>

          {sent && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-[13px] font-medium text-primary"
              role="status"
            >
              <Check className="h-4 w-4" /> You're subscribed. Watch your inbox.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
