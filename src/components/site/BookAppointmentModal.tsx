import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, CheckCircle2 } from "lucide-react";
import { departmentsList, doctorsFull } from "@/data/doctorsData";

// ---------- global mini store ----------
let isOpen = false;
const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => { listeners.add(cb); return () => { listeners.delete(cb); }; };
const emit = () => listeners.forEach((l) => l());
export const openBookingModal = () => { isOpen = true; emit(); };
export const closeBookingModal = () => { isOpen = false; emit(); };
const getSnapshot = () => isOpen;
const getServerSnapshot = () => false;

export function BookAppointmentModal() {
  const open = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", department: "", doctor: "",
    date: "", time: "", message: "",
  });

  useEffect(() => {
    if (!open) {
      setSuccess(false);
      setSubmitting(false);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeBookingModal(); };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const filteredDoctors = form.department
    ? doctorsFull.filter((d) => d.department === form.department)
    : doctorsFull;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        closeBookingModal();
        setForm({ name: "", email: "", phone: "", department: "", doctor: "", date: "", time: "", message: "" });
      }, 2200);
    }, 900);
  };

  const input = "w-full rounded-2xl bg-white border border-border px-4 py-3 text-[14px] focus:outline-none focus:border-primary transition";
  const label = "block text-[12px] font-semibold uppercase tracking-[0.14em] text-foreground/70 mb-1.5";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => closeBookingModal()} />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[720px] max-h-[90vh] overflow-y-auto rounded-[28px] bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.35)]"
          >
            {success ? (
              <div className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_15px_40px_-10px_rgb(0_200_150/0.7)]"
                >
                  <CheckCircle2 className="h-10 w-10 text-white" strokeWidth={2.4} />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                  className="mt-6 font-display text-[26px] font-bold tracking-tight"
                >
                  Appointment Request Submitted Successfully
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                  className="mt-2 text-[14px] text-muted-foreground"
                >
                  No backend required.
                </motion.p>
              </div>
            ) : (
              <>
                <div className="sticky top-0 z-10 flex items-center justify-between px-7 py-5 border-b border-border bg-white/95 backdrop-blur rounded-t-[28px]">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-white" strokeWidth={2.4} />
                    </span>
                    <div>
                      <h3 className="font-display text-[19px] font-bold tracking-tight">Book an Appointment</h3>
                      <p className="text-[12px] text-muted-foreground">Reserve your slot in under a minute.</p>
                    </div>
                  </div>
                  <button
                    aria-label="Close"
                    onClick={() => closeBookingModal()}
                    className="h-9 w-9 rounded-full hover:bg-secondary/60 flex items-center justify-center transition"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-7 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={label}>Full Name</label>
                      <input required maxLength={100} className={input} placeholder="Jane Doe"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className={label}>Email</label>
                      <input required type="email" maxLength={255} className={input} placeholder="jane@email.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                      <label className={label}>Phone Number</label>
                      <input required type="tel" maxLength={20} className={input} placeholder="+1 555 000 1234"
                        value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div>
                      <label className={label}>Department</label>
                      <select required className={input}
                        value={form.department}
                        onChange={(e) => setForm({ ...form, department: e.target.value, doctor: "" })}>
                        <option value="">Select department</option>
                        {departmentsList.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={label}>Preferred Doctor</label>
                      <select className={input}
                        value={form.doctor}
                        onChange={(e) => setForm({ ...form, doctor: e.target.value })}>
                        <option value="">Any available doctor</option>
                        {filteredDoctors.map((d) => <option key={d.id} value={d.name}>{d.name} — {d.role}</option>)}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={label}>Date</label>
                        <input required type="date" className={input}
                          value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                      </div>
                      <div>
                        <label className={label}>Time</label>
                        <input required type="time" className={input}
                          value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className={label}>Message</label>
                    <textarea rows={3} maxLength={1000} className={input + " resize-none"}
                      placeholder="Briefly describe your concern (optional)"
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>

                  <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-2">
                    <button type="button" onClick={() => closeBookingModal()}
                      className="w-full sm:w-auto rounded-full px-6 py-3 text-[14px] font-semibold border border-border hover:bg-secondary/60 transition">
                      Cancel
                    </button>
                    <motion.button
                      type="submit" disabled={submitting}
                      whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-[14px] font-semibold text-white shadow-[0_12px_30px_-10px_rgb(0_200_150/0.7)] disabled:opacity-70"
                    >
                      {submitting ? "Submitting…" : "Confirm Appointment"}
                    </motion.button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
