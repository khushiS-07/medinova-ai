import { motion } from "framer-motion";
import { Bot, Send, Sparkles, Stethoscope, Calendar, Siren, HeartPulse } from "lucide-react";
import { useEffect, useState } from "react";
import { chatScript } from "@/data/sections";

const suggestions = [
  { icon: Stethoscope, label: "Find Specialist" },
  { icon: Calendar, label: "Book Appointment" },
  { icon: Siren, label: "Emergency Help" },
  { icon: HeartPulse, label: "View Health Tips" },
];

export function AIAssistant() {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (visible >= chatScript.length) return;
    const next = chatScript[visible];
    const delay = next.role === "ai" ? 900 : 500;
    if (next.role === "ai") setTyping(true);
    const t = setTimeout(() => {
      setTyping(false);
      setVisible((v) => v + 1);
    }, delay);
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    if (visible >= chatScript.length) {
      const t = setTimeout(() => setVisible(0), 4500);
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <section id="ai" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-[-10%] h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-[-5%] h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-[36px] p-8 md:p-14 grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-[12px] font-semibold text-primary uppercase tracking-widest">AI Health Assistant</span>
            </div>
            <h2 className="mt-5 font-display text-[34px] md:text-[46px] font-bold leading-[1.05] tracking-tight">
              Meet your <span className="text-gradient">AI Health Assistant</span>.
            </h2>
            <p className="mt-5 text-[16px] text-muted-foreground leading-relaxed max-w-[520px]">
              Get instant guidance for common health concerns, discover the right specialist, and prepare for your consultation using our AI-powered assistant.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {suggestions.map((s) => (
                <motion.button
                  key={s.label}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 rounded-2xl bg-white/80 border border-border px-4 py-3 text-left text-[14px] font-semibold hover:bg-white transition"
                >
                  <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center">
                    <s.icon className="h-4 w-4 text-primary" />
                  </span>
                  {s.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right chat window */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-primary/25 to-accent/25 blur-2xl" />
            <div className="relative rounded-[28px] bg-white border border-white shadow-[var(--shadow-glow)] overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-semibold">MediNova Assistant</p>
                  <p className="text-[11px] text-primary flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Online · replies instantly
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="h-[340px] overflow-hidden px-5 py-5 space-y-3 bg-gradient-to-b from-secondary/40 to-white">
                {chatScript.slice(0, visible).map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[13.5px] ${
                        m.role === "user"
                          ? "bg-gradient-to-br from-primary to-accent text-white rounded-br-md"
                          : "bg-white border border-border text-foreground rounded-bl-md shadow-sm"
                      }`}
                    >
                      {m.text}
                      {m.actions && (
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {m.actions.map((a) => (
                            <span key={a} className="text-[11px] font-semibold rounded-full bg-primary/10 text-primary px-2.5 py-1">
                              {a}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-border rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="border-t border-border px-4 py-3 flex items-center gap-2 bg-white">
                <input
                  disabled
                  placeholder="Ask any health question..."
                  className="flex-1 bg-secondary/50 rounded-full px-4 py-2.5 text-[13px] outline-none"
                />
                <button className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-[0_10px_20px_-6px_rgb(0_200_150/0.6)]">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
