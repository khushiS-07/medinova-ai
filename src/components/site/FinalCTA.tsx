import { motion } from "framer-motion";
import { ArrowRight, Stethoscope } from "lucide-react";
import { openBookingModal } from "./BookAppointmentModal";

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="relative overflow-hidden rounded-[40px] md:rounded-[56px] px-8 md:px-16 py-16 md:py-24">
          {/* Gradient background */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.13 178) 0%, oklch(0.78 0.16 168) 50%, oklch(0.65 0.14 172) 100%)",
            }}
          />
          {/* Glass layer */}
          <div className="absolute inset-0 -z-10 bg-white/5 backdrop-blur-3xl" />

          {/* Floating shapes */}
          <div className="absolute -top-24 -left-24 h-[400px] w-[400px] rounded-full bg-white/10 blur-3xl animate-blob" />
          <div
            className="absolute -bottom-32 -right-16 h-[500px] w-[500px] rounded-full bg-white/15 blur-3xl animate-blob"
            style={{ animationDelay: "-6s" }}
          />
          <div className="absolute top-1/3 right-1/4 h-32 w-32 rounded-full bg-white/20 blur-2xl animate-float" />
          <div
            className="absolute bottom-1/4 left-1/3 h-24 w-24 rounded-3xl bg-white/10 blur-xl animate-float-alt"
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative text-center max-w-3xl mx-auto text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest border border-white/25"
            >
              <Stethoscope className="h-3.5 w-3.5" /> Premium Healthcare
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display font-bold text-[34px] md:text-[56px] leading-[1.05] tracking-[-0.02em]"
            >
              Your Health Deserves <br className="hidden md:block" />
              Exceptional Care.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-[16px] md:text-[18px] text-white/85 leading-relaxed max-w-xl mx-auto"
            >
              Join thousands of patients who trust MediNova AI for expert healthcare,
              digital convenience and compassionate treatment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4 justify-center"
            >
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 text-[15px] font-semibold text-primary shadow-[0_20px_45px_-15px_rgb(0_0_0/0.35)] hover:-translate-y-0.5 hover:shadow-[0_28px_55px_-15px_rgb(0_0_0/0.45)] transition-all"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#doctors"
                className="inline-flex h-14 items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur px-8 text-[15px] font-semibold text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all"
              >
                Find a Doctor
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
