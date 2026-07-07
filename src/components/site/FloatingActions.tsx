import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, CalendarPlus, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { openBookingModal } from "./BookAppointmentModal";

export function FloatingActions() {
  const [visible, setVisible] = useState(true);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setShowTop(y > 400);
      setVisible(y < lastY || y < 200);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const btn =
    "group relative flex h-12 w-12 items-center justify-center rounded-full glass text-primary hover:text-white hover:bg-primary/90 transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgb(0_200_150/0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

  const tip =
    "pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-foreground text-background px-3 py-1.5 text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-opacity";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
        >
          <button type="button" onClick={() => openBookingModal()} className={btn} aria-label="Book appointment">
            <CalendarPlus className="h-5 w-5" />
            <span className={tip}>Book Appointment</span>
          </button>
          <a href="tel:+911800000000" className={btn} aria-label="Emergency call">
            <span className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" aria-hidden />
            <PhoneCall className="h-5 w-5 relative" />
            <span className={tip}>Emergency Call</span>
          </a>
          {showTop && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={btn}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
              <span className={tip}>Back to Top</span>
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
