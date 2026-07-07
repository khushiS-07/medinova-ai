import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { FloatingActions } from "@/components/site/FloatingActions";
import { PageHero } from "@/components/site/PageHero";
import { DoctorCard } from "@/components/site/DoctorCard";
import { doctorsFull, departmentsList, languagesList } from "@/data/doctorsData";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — Find the Right Specialist | MediNova AI" },
      { name: "description", content: "Browse 500+ board-certified doctors across cardiology, neurology, pediatrics and more. Filter by department, experience, availability and language." },
      { property: "og:title", content: "Our Doctors — Find the Right Specialist | MediNova AI" },
      { property: "og:description", content: "Find and book the right doctor for your care with MediNova AI." },
    ],
  }),
  component: DoctorsPage,
});

const PER_PAGE = 8;

function DoctorsPage() {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("All");
  const [exp, setExp] = useState("Any");
  const [avail, setAvail] = useState("Any");
  const [lang, setLang] = useState("Any");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return doctorsFull.filter((d) => {
      if (query && !`${d.name} ${d.role} ${d.department}`.toLowerCase().includes(query.toLowerCase())) return false;
      if (dept !== "All" && d.department !== dept) return false;
      if (exp === "0-5" && d.experience > 5) return false;
      if (exp === "6-10" && (d.experience < 6 || d.experience > 10)) return false;
      if (exp === "11-15" && (d.experience < 11 || d.experience > 15)) return false;
      if (exp === "16+" && d.experience < 16) return false;
      if (avail === "Available" && !d.available) return false;
      if (lang !== "Any" && !d.languages.includes(lang)) return false;
      return true;
    });
  }, [query, dept, exp, avail, lang]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const reset = (setter: (v: string) => void) => (v: string) => { setter(v); setPage(1); };

  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />

        <PageHero
          eyebrow="Our Doctors"
          title={<>Find the right doctor <span className="text-gradient">for your care</span>.</>}
          subtitle="500+ board-certified specialists across 40+ departments. Filter, compare and book — all in a few clicks."
        />

        {/* Filters */}
        <section className="relative -mt-6 pb-8">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="glass rounded-3xl p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="lg:col-span-2 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted-foreground" />
                  <input
                    aria-label="Search doctors"
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                    placeholder="Search by name, specialty or condition"
                    className="w-full rounded-full bg-white border border-border pl-11 pr-4 py-3 text-[14px] focus:outline-none focus:border-primary transition"
                  />
                </div>
                <FilterSelect label="Department" value={dept} onChange={reset(setDept)} options={["All", ...departmentsList]} />
                <FilterSelect label="Experience" value={exp} onChange={reset(setExp)} options={["Any", "0-5", "6-10", "11-15", "16+"]} />
                <div className="grid grid-cols-2 gap-3">
                  <FilterSelect label="Availability" value={avail} onChange={reset(setAvail)} options={["Any", "Available"]} />
                  <FilterSelect label="Language" value={lang} onChange={reset(setLang)} options={["Any", ...languagesList]} />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-[13px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Filter className="h-3.5 w-3.5" /> {filtered.length} doctors match your filters</span>
                <button
                  onClick={() => { setQuery(""); setDept("All"); setExp("Any"); setAvail("Any"); setLang("Any"); setPage(1); }}
                  className="text-primary font-semibold hover:underline"
                >
                  Reset filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="relative pb-16">
          <div className="mx-auto max-w-[1440px] px-6">
            {pageItems.length === 0 ? (
              <div className="glass rounded-3xl p-14 text-center">
                <p className="font-display text-[20px] font-semibold">No doctors match those filters.</p>
                <p className="mt-2 text-muted-foreground text-[14px]">Try broadening your search or resetting the filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {pageItems.map((d, i) => (
                  <DoctorCard key={d.id} doc={d} index={i} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  aria-label="Previous page"
                  disabled={currentPage === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary/60 disabled:opacity-40 transition"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {Array.from({ length: totalPages }).map((_, i) => {
                  const n = i + 1;
                  const active = n === currentPage;
                  return (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      aria-current={active ? "page" : undefined}
                      className={`h-10 min-w-10 rounded-full px-3 text-[14px] font-semibold transition ${
                        active
                          ? "bg-gradient-to-r from-primary to-accent text-white shadow-[0_10px_25px_-8px_rgb(0_200_150/0.6)]"
                          : "border border-border hover:bg-secondary/60"
                      }`}
                    >
                      {n}
                    </button>
                  );
                })}
                <button
                  aria-label="Next page"
                  disabled={currentPage === totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary/60 disabled:opacity-40 transition"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
      <FloatingActions />
    </>
  );
}

function FilterSelect({
  label, value, onChange, options,
}: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full bg-white border border-border px-4 py-3 text-[14px] font-medium focus:outline-none focus:border-primary transition"
      >
        {options.map((o) => (
          <option key={o} value={o}>{label}: {o}</option>
        ))}
      </select>
    </label>
  );
}
