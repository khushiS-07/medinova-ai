import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Calendar, Siren, Bot, FileText, Star, MousePointer2 } from "lucide-react";
import { useEffect } from "react";
import heroDoctor from "@/assets/hero-doctor.png";
import { openBookingModal } from "./BookAppointmentModal";

function FloatingCard({
  className, delay = 0, children,
}: { className?: string; delay?: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute glass rounded-3xl p-4 ${className}`}
    >
      <div className="animate-float">{children}</div>
    </motion.div>
  );
}

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const px = useTransform(sx, (v: number) => v * 20);
  const py = useTransform(sy, (v: number) => v * 20);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl animate-blob" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-accent/15 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
        <div className="absolute top-[40%] right-[30%] h-[280px] w-[280px] rounded-full bg-secondary/60 blur-3xl animate-blob" style={{ animationDelay: "-3s" }} />
      </div>

      {/* Animated ECG line */}
      <svg className="absolute bottom-8 left-0 right-0 w-full h-24 -z-10 opacity-40" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path
          d="M0 50 L200 50 L230 30 L260 70 L290 20 L320 80 L350 50 L600 50 L630 30 L660 70 L690 20 L720 80 L750 50 L1200 50"
          fill="none"
          stroke="url(#ecg-grad)"
          strokeWidth="2"
          className="animate-ecg"
        />
        <defs>
          <linearGradient id="ecg-grad" x1="0" x2="1">
            <stop offset="0%" stopColor="#00C896" stopOpacity="0" />
            <stop offset="50%" stopColor="#00C896" stopOpacity="1" />
            <stop offset="100%" stopColor="#0F766E" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mx-auto max-w-[1440px] px-6 grid lg:grid-cols-[45fr_55fr] gap-10 lg:gap-8 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-[13px] font-medium"
          >
            <span className="flex text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
            </span>
            <span className="text-foreground/80">Trusted by 250,000+ Patients</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-6 font-display font-bold leading-[1.02] tracking-[-0.03em] text-[34px] md:text-[44px] lg:text-[64px] max-w-[620px]"
          >
            Healthcare<br />
            That<br />
            <span className="text-gradient">Puts You</span><br />
            First.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-7 text-[17px] md:text-[18px] leading-relaxed text-muted-foreground max-w-[540px]"
          >
            Experience personalized healthcare powered by expert doctors, advanced
            medical technology, and digital-first patient care designed around
            your lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 text-[16px] font-semibold text-white shadow-[0_18px_40px_-12px_rgb(0_200_150/0.7)] hover:shadow-[0_24px_50px_-12px_rgb(0_200_150/0.9)] transition-all hover:-translate-y-0.5"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#services"
              className="inline-flex h-14 items-center gap-2 rounded-full border border-border bg-white/60 backdrop-blur px-7 text-[16px] font-semibold text-foreground hover:bg-white transition-all hover:-translate-y-0.5"
            >
              Explore Services
              <Sparkles className="h-4 w-4 text-primary" />
            </a>
          </motion.div>

          {/* Review */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex items-center gap-5"
          >
            <div className="flex -space-x-3">
              {["#c084fc", "#22d3ee", "#34d399", "#fb923c"].map((c, i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-white shadow-sm" style={{ background: `linear-gradient(135deg, ${c}, #ffffff44)` }} />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="flex text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </span>
                <span className="num text-[15px] font-semibold">4.9</span>
                <span className="text-[13px] text-muted-foreground">· 12,000+ reviews</span>
              </div>
              <p className="text-[13px] text-muted-foreground mt-0.5">Trusted by families across India.</p>
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          style={{ x: px, y: py }}
          className="relative h-[560px] md:h-[640px] lg:h-[720px]"
        >
          {/* Glow behind doctor */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[85%] w-[85%] rounded-full bg-gradient-to-br from-primary/40 via-secondary to-transparent blur-3xl" />
          </div>
          <div className="absolute inset-x-8 top-8 bottom-8 rounded-[48px] bg-gradient-to-br from-secondary to-white/50 border border-white/60 shadow-[var(--shadow-glow)] overflow-hidden">
            <img
              src={heroDoctor}
              alt="MediNova AI doctor providing premium personalized healthcare"
              width={1024}
              height={1280}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[110%] w-auto object-contain"
            />
          </div>

          {/* Floating Cards */}
          <FloatingCard delay={0.4} className="left-2 top-16 w-[220px]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-primary/15 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Today</p>
                <p className="text-[15px] font-semibold">09:30 AM</p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-[13px] text-muted-foreground">Dr. Sarah Johnson</p>
              <p className="text-[12px] text-primary font-medium">Cardiology · Room 204</p>
            </div>
          </FloatingCard>

          <FloatingCard delay={0.6} className="right-0 top-4 w-[210px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                </span>
                <p className="text-[13px] font-semibold text-red-600">Emergency</p>
              </div>
              <Siren className="h-4 w-4 text-red-500" />
            </div>
            <p className="mt-2 text-[12px] text-muted-foreground">24×7 Available</p>
            <p className="mt-2 text-[15px] font-semibold">Under 3 min</p>
            <p className="text-[11px] text-muted-foreground">Response time</p>
          </FloatingCard>

          <FloatingCard delay={0.8} className="left-0 bottom-24 w-[230px]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-accent/15 flex items-center justify-center">
                <Bot className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-semibold">AI Assistant</p>
                <p className="text-[11px] text-primary flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Online
                </p>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-muted-foreground">Ask any health question, get instant guidance.</p>
          </FloatingCard>

          <FloatingCard delay={1} className="right-4 bottom-8 w-[220px]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-primary/15 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-[14px] font-semibold">Medical Reports</p>
                <p className="text-[11px] text-muted-foreground">Available digitally</p>
              </div>
            </div>
            <button className="mt-3 w-full rounded-full bg-primary/10 text-primary text-[12px] font-semibold py-2 hover:bg-primary/15 transition">
              Download anytime
            </button>
          </FloatingCard>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-8 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <MousePointer2 className="h-4 w-4 rotate-180" />
          <div className="h-9 w-6 rounded-full border-2 border-border relative overflow-hidden">
            <span className="absolute left-1/2 top-1.5 -translate-x-1/2 h-1.5 w-1 rounded-full bg-primary animate-scroll-mouse" />
          </div>
          <span className="text-[11px] uppercase tracking-widest">Scroll</span>
        </div>
      </div>
    </section>
  );
}
