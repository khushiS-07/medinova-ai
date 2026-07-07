import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Star, Languages, MapPin, Calendar, Phone, Award, GraduationCap,
  Briefcase, ShieldCheck, Sparkles, MessageSquare, Clock, ChevronLeft, ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { FloatingActions } from "@/components/site/FloatingActions";
import { DoctorCard } from "@/components/site/DoctorCard";
import { doctorsFull, type DoctorFull } from "@/data/doctorsData";
import { openBookingModal } from "@/components/site/BookAppointmentModal";

export const Route = createFileRoute("/doctors/$id")({
  head: ({ params }) => {
    const doc = doctorsFull.find((d) => d.id === params.id);
    const title = doc ? `${doc.name} — ${doc.role} | MediNova AI` : "Doctor Profile | MediNova AI";
    const desc = doc
      ? `${doc.name}, ${doc.role} at ${doc.hospital}. ${doc.experience}+ years experience, ${doc.rating}★ rating. Book an appointment online.`
      : "View doctor profile at MediNova AI.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(doc ? [{ property: "og:image", content: doc.photo }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const doc = doctorsFull.find((d) => d.id === params.id);
    if (!doc) throw notFound();
    return doc;
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-muted-foreground">Doctor not found.</p>
        <Link to="/doctors" className="mt-4 inline-block text-primary font-semibold">Back to doctors</Link>
      </div>
    </div>
  ),
  component: DoctorDetail,
});

const tabs = ["Overview", "Experience", "Education", "Certifications", "Specializations", "Reviews", "Availability"] as const;
type Tab = typeof tabs[number];

function DoctorDetail() {
  const doc = Route.useLoaderData() as DoctorFull;
  const [tab, setTab] = useState<Tab>("Overview");
  const [selectedDay, setSelectedDay] = useState(doc.availability[0].day);

  const related = doctorsFull.filter((d) => d.department === doc.department && d.id !== doc.id).slice(0, 6);
  const [carousel, setCarousel] = useState(0);
  const perView = 3;
  const maxIdx = Math.max(0, related.length - perView);

  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />

        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
          <div aria-hidden className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_80%_-10%,rgb(0_200_150/0.18),transparent_60%),radial-gradient(800px_500px_at_-10%_20%,rgb(232_255_247/0.9),transparent_60%)]" />
            <div className="absolute top-32 right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-float" />
          </div>

          <div className="mx-auto max-w-[1440px] px-6">
            <Link to="/doctors" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground hover:text-primary mb-6">
              <ChevronLeft className="h-4 w-4" /> Back to doctors
            </Link>

            <div className="grid lg:grid-cols-[360px_1fr] gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl overflow-hidden shadow-[0_30px_80px_-30px_rgb(15_118_110/0.35)] bg-white"
              >
                <div className="relative h-[380px]">
                  <img src={doc.photo} alt={doc.name} className="w-full h-full object-cover" />
                  {doc.available && (
                    <div className="absolute top-4 right-4 rounded-full bg-primary text-white text-[11px] font-semibold px-3 py-1.5 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> Available today
                    </div>
                  )}
                </div>
              </motion.div>

              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">{doc.department}</p>
                <h1 className="mt-2 font-display text-[36px] md:text-[52px] font-bold leading-[1.05] tracking-tight">
                  {doc.name}
                </h1>
                <p className="mt-2 text-[16px] text-muted-foreground">{doc.role} • {doc.qualification}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Chip icon={<Award className="h-3.5 w-3.5" />}>{doc.experience}+ years experience</Chip>
                  <Chip icon={<Star className="h-3.5 w-3.5 fill-primary text-primary" />}>
                    <span className="num font-semibold">{doc.rating}</span>&nbsp;({doc.reviews} reviews)
                  </Chip>
                  <Chip icon={<Languages className="h-3.5 w-3.5" />}>{doc.languages.join(", ")}</Chip>
                  <Chip icon={<MapPin className="h-3.5 w-3.5" />}>{doc.hospital}</Chip>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button type="button" onClick={() => openBookingModal()} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_30px_-10px_rgb(0_200_150/0.7)] hover:-translate-y-0.5 transition">
                    <Calendar className="h-4 w-4" /> Book Appointment
                  </button>
                  <a href="tel:+911800123456" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-[14px] font-semibold hover:bg-secondary/60 transition">
                    <Phone className="h-4 w-4" /> Call clinic
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT + SIDEBAR */}
        <section className="relative pb-24">
          <div className="mx-auto max-w-[1440px] px-6 grid lg:grid-cols-[1fr_360px] gap-8 items-start">
            <div>
              {/* Tabs */}
              <div className="glass rounded-full p-1.5 inline-flex flex-wrap gap-1 max-w-full">
                {tabs.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`px-4 py-2 text-[13px] font-semibold rounded-full transition ${
                      tab === t
                        ? "bg-gradient-to-r from-primary to-accent text-white shadow-[0_8px_20px_-6px_rgb(0_200_150/0.6)]"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mt-6 rounded-3xl bg-white border border-border/70 p-7 md:p-9 shadow-[0_10px_40px_-20px_rgb(15_118_110/0.15)]"
              >
                {tab === "Overview" && (
                  <div>
                    <h2 className="font-display text-[22px] font-bold">About {doc.name}</h2>
                    <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed">{doc.bio}</p>
                  </div>
                )}

                {tab === "Experience" && (
                  <div>
                    <h2 className="font-display text-[22px] font-bold">Professional Experience</h2>
                    <ol className="mt-6 relative border-l-2 border-primary/20 pl-6 space-y-6">
                      {doc.experienceList.map((e, i) => (
                        <li key={i} className="relative">
                          <span className="absolute -left-[30px] top-1.5 h-4 w-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_0_3px_rgb(232_255_247)]" />
                          <p className="font-display text-[16px] font-semibold flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-primary" /> {e.role}
                          </p>
                          <p className="text-[14px] text-muted-foreground">{e.hospital} • {e.period}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {tab === "Education" && (
                  <div>
                    <h2 className="font-display text-[22px] font-bold">Education</h2>
                    <div className="mt-6 grid sm:grid-cols-2 gap-4">
                      {doc.education.map((e, i) => (
                        <div key={i} className="rounded-2xl border border-border/70 p-5 hover:shadow-[0_20px_40px_-20px_rgb(0_200_150/0.3)] transition">
                          <div className="flex items-center gap-2 text-primary">
                            <GraduationCap className="h-5 w-5" />
                            <p className="font-display text-[16px] font-semibold text-foreground">{e.degree}</p>
                          </div>
                          <p className="mt-1 text-[14px] text-muted-foreground">{e.institution}</p>
                          <p className="mt-1 text-[13px] text-muted-foreground num">{e.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tab === "Certifications" && (
                  <div>
                    <h2 className="font-display text-[22px] font-bold">Certifications</h2>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                      {doc.certifications.map((c) => (
                        <li key={c} className="flex items-center gap-3 rounded-2xl border border-border/70 p-4">
                          <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-[14px] font-medium">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {tab === "Specializations" && (
                  <div>
                    <h2 className="font-display text-[22px] font-bold">Areas of Expertise</h2>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {doc.expertise.map((e) => (
                        <span key={e} className="inline-flex items-center gap-1.5 rounded-full bg-secondary text-secondary-foreground px-4 py-2 text-[13px] font-semibold">
                          <Sparkles className="h-3.5 w-3.5 text-primary" /> {e}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {tab === "Reviews" && (
                  <div>
                    <h2 className="font-display text-[22px] font-bold flex items-center gap-2">
                      Patient Reviews
                      <span className="inline-flex items-center gap-1 text-[14px] text-muted-foreground font-normal">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="num font-semibold text-foreground">{doc.rating}</span> ({doc.reviews})
                      </span>
                    </h2>
                    <div className="mt-6 space-y-4">
                      {doc.patientReviews.map((r, i) => (
                        <div key={i} className="rounded-2xl border border-border/70 p-5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-semibold">
                                {r.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-display text-[15px] font-semibold">{r.name}</p>
                                <p className="text-[12px] text-muted-foreground">{r.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-0.5 text-primary">
                              {Array.from({ length: r.rating }).map((_, j) => (
                                <Star key={j} className="h-3.5 w-3.5 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed flex gap-2">
                            <MessageSquare className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> {r.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tab === "Availability" && (
                  <div>
                    <h2 className="font-display text-[22px] font-bold">Availability</h2>
                    <p className="mt-2 text-[13px] text-muted-foreground">Select a day to see open time slots.</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {doc.availability.map((a) => (
                        <button
                          key={a.day}
                          onClick={() => setSelectedDay(a.day)}
                          className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition ${
                            selectedDay === a.day
                              ? "bg-gradient-to-r from-primary to-accent text-white border-transparent shadow-[0_10px_25px_-8px_rgb(0_200_150/0.6)]"
                              : "border-border hover:bg-secondary/60"
                          }`}
                        >
                          {a.day}
                        </button>
                      ))}
                    </div>
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {doc.availability.find((a) => a.day === selectedDay)?.slots.map((s) => (
                        <button
                          key={s}
                          className="inline-flex items-center justify-center gap-1.5 rounded-2xl border border-border py-3 text-[13px] font-semibold hover:border-primary hover:text-primary transition"
                        >
                          <Clock className="h-3.5 w-3.5" /> {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sticky sidebar */}
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-3xl p-1 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 shadow-[0_30px_60px_-30px_rgb(0_200_150/0.4)]">
                <div className="rounded-[22px] bg-white p-6">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-primary font-semibold">Book Appointment</p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-[32px] font-bold num">₹{doc.fee}</span>
                    <span className="text-[13px] text-muted-foreground">consultation</span>
                  </div>

                  <ul className="mt-5 space-y-3 text-[13.5px]">
                    <li className="flex items-start gap-2.5"><MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>{doc.hospital}</span></li>
                    <li className="flex items-start gap-2.5"><Languages className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>{doc.languages.join(", ")}</span></li>
                    <li className="flex items-start gap-2.5"><Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Emergency: +91 1800 123 456</span></li>
                  </ul>

                  <button type="button" onClick={() => openBookingModal()} className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_30px_-10px_rgb(0_200_150/0.7)] hover:-translate-y-0.5 transition">
                    <Calendar className="h-4 w-4" /> Quick Appointment
                  </button>
                  <button className="mt-2 w-full inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-[14px] font-semibold hover:bg-secondary/60 transition">
                    Message doctor
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Related doctors */}
        {related.length > 0 && (
          <section className="relative pb-24">
            <div className="mx-auto max-w-[1440px] px-6">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Related Specialists</p>
                  <h2 className="mt-2 font-display text-[28px] md:text-[36px] font-bold">
                    More doctors in {doc.department}
                  </h2>
                </div>
                <div className="hidden sm:flex gap-2">
                  <button
                    onClick={() => setCarousel((c) => Math.max(0, c - 1))}
                    disabled={carousel === 0}
                    className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary/60 disabled:opacity-40 transition"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setCarousel((c) => Math.min(maxIdx, c + 1))}
                    disabled={carousel >= maxIdx}
                    className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary/60 disabled:opacity-40 transition"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="overflow-hidden">
                <motion.div
                  animate={{ x: `calc(-${carousel} * (100% / ${perView}))` }}
                  transition={{ type: "spring", stiffness: 120, damping: 22 }}
                  className="flex gap-6"
                  style={{ width: `calc(${related.length} * (100% / ${perView}))` }}
                >
                  {related.map((d, i) => (
                    <div key={d.id} className="shrink-0" style={{ width: `calc(100% / ${related.length})` }}>
                      <DoctorCard doc={d} index={i} />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
      <FloatingActions />
    </>
  );
}

function Chip({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-1.5 text-[12.5px] font-medium">
      {icon}
      {children}
    </span>
  );
}
