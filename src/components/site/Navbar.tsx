import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";
import { Search, Moon, Sun, Menu, X, Activity } from "lucide-react";
import { openBookingModal } from "./BookAppointmentModal";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Doctors", to: "/doctors" as const },
  { label: "Departments", to: "/departments" as const },
  { label: "Treatments", to: "/treatments" as const },
  { label: "Telemedicine", to: "/telemedicine" as const },
  { label: "Packages", to: "/packages" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-[1440px] px-6">
        <div className={`flex h-[72px] items-center justify-between rounded-full px-5 md:px-7 transition-all duration-500 ${scrolled ? "glass" : "bg-transparent"}`}>
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-[0_10px_25px_-8px_rgb(0_200_150/0.6)]">
              <Activity className="h-4.5 w-4.5 text-white" strokeWidth={2.6} />
              <span className="absolute inset-0 rounded-2xl bg-primary/40 blur-md -z-10 group-hover:blur-lg transition-all" />
            </span>
            <span className="font-display text-[17px] font-bold tracking-tight">
              MEDINOVA<span className="text-primary"> AI</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-3.5 py-2 text-[14px] font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {l.label}
                {isActive(l.to) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-primary to-accent"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button aria-label="Search" className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full hover:bg-secondary/60 transition">
              <Search className="h-4.5 w-4.5" />
            </button>
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((v) => !v)}
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full hover:bg-secondary/60 transition"
            >
              {dark ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
            <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.98 }} className="hidden md:inline-flex">
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_12px_30px_-10px_rgb(0_200_150/0.7)] hover:shadow-[0_18px_40px_-10px_rgb(0_200_150/0.9)] transition-shadow"
              >
                Book Appointment
              </button>
            </motion.div>
            <button aria-label="Menu" onClick={() => setOpen((o) => !o)} className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full hover:bg-secondary/60">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden mt-3 glass rounded-3xl p-4">
            <div className="flex flex-col">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="px-4 py-3 text-[15px] font-medium hover:bg-secondary/50 rounded-2xl">
                  {l.label}
                </Link>
              ))}
              <button type="button" onClick={() => openBookingModal()} className="mt-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-center text-[14px] font-semibold text-white">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
