import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Use the Book Appointment button in the top navigation to pick a specialty, doctor, and time slot. You'll receive an instant confirmation and reminders across email and SMS.",
  },
  {
    q: "Can I consult doctors online?",
    a: "Yes. Every MediNova AI specialist is available for secure video and chat consultations, with digital prescriptions delivered straight to your dashboard.",
  },
  {
    q: "Do you accept health insurance?",
    a: "We work with all major Indian and international insurance providers, including cashless network hospitals. Coverage details show up during booking.",
  },
  {
    q: "How can I access my medical reports?",
    a: "All lab results, imaging, and prescriptions live in your MediNova AI dashboard. Download them anytime or share them with a doctor in one tap.",
  },
  {
    q: "What specialties are available?",
    a: "40+ specialties, from cardiology and neurology to pediatrics, dermatology, orthopedics, gynecology, mental wellness, and preventive care.",
  },
  {
    q: "Is emergency care available 24×7?",
    a: "Yes. Our emergency response team is on standby 24×7 with an average response under 3 minutes, plus AI triage that routes you to the right specialist instantly.",
  },
  {
    q: "Can I reschedule appointments?",
    a: "You can reschedule or cancel up to 2 hours before your slot from the dashboard with no extra fees.",
  },
  {
    q: "How does the AI Health Assistant work?",
    a: "The AI Assistant understands your symptoms, medical history, and vitals to suggest next steps, book relevant specialists, and answer follow-up questions in plain language.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/30 via-background to-background" />
      <div className="absolute top-20 left-[-10%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl -z-10" />

      <div className="mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="mt-5 font-display font-bold text-[32px] md:text-[46px] leading-[1.05] tracking-[-0.02em]">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 text-[16px] md:text-[17px] text-muted-foreground">
            Everything you need to know before visiting MediNova AI.
          </p>
        </motion.div>

        <div className="mt-14 space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`glass rounded-3xl overflow-hidden transition-shadow duration-500 ${
                  isOpen ? "shadow-[0_30px_60px_-30px_rgb(0_200_150/0.35)]" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 px-6 md:px-8 py-6 text-left group"
                >
                  <span className="font-display font-semibold text-[16px] md:text-[18px] text-foreground group-hover:text-primary transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-500 ${
                      isOpen ? "rotate-45 bg-primary text-white" : ""
                    }`}
                  >
                    <Plus className="h-5 w-5" />
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 md:px-8 pb-7 text-[15px] leading-relaxed text-muted-foreground max-w-3xl">
                    {item.a}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
