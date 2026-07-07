import { AnimatePresence, motion } from "framer-motion";
import { Activity } from "lucide-react";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            background:
              "radial-gradient(900px 600px at 50% 40%, oklch(0.98 0.03 165) 0%, #ffffff 60%)",
          }}
          aria-hidden
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_18px_40px_-12px_rgb(0_200_150/0.7)]">
                <Activity className="h-6 w-6 text-white" />
                <span className="absolute inset-0 rounded-2xl bg-primary/40 animate-ping" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                MediNova <span className="text-gradient">AI</span>
              </span>
            </motion.div>
            <div className="mt-6 h-1 w-52 overflow-hidden rounded-full bg-primary/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
