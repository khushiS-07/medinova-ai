import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowRight, Search, Clock, User, Calendar, TrendingUp, Mail } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { FloatingActions } from "@/components/site/FloatingActions";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { posts } from "@/data/sections";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — MediNova AI" },
      { name: "description", content: "Insights, research and stories from MediNova AI's clinical experts on cardiology, nutrition, mental wellness and preventive care." },
      { property: "og:title", content: "Blog — MediNova AI" },
      { property: "og:description", content: "Health insights and stories from MediNova AI." },
    ],
  }),
  component: BlogPage,
});

const categories = ["All", "Cardiology", "Nutrition", "Endocrinology", "Women's Health", "Pediatrics", "Wellness"];

function BlogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesQuery = query ? (p.title + p.author + p.category).toLowerCase().includes(query.toLowerCase()) : true;
      const matchesCat = category === "All" || p.category === category;
      return matchesQuery && matchesCat;
    });
  }, [query, category]);

  const featured = posts[0];
  const popular = posts.slice(1, 4);

  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />

        <PageHero
          eyebrow="MediNova Journal"
          title={<>Health stories, <span className="text-gradient">clearly written</span>.</>}
          subtitle="Long-form articles from our doctors, researchers and care teams — practical health guidance you can trust."
        >
          <div className="max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, authors, categories..."
              className="w-full rounded-full bg-white border border-border pl-11 pr-5 py-3 text-[14px] focus:outline-none focus:border-primary transition"
            />
          </div>
        </PageHero>

        {/* Categories */}
        <section className="relative pb-8">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-5 py-2 text-[13px] font-semibold transition ${category === c ? "bg-gradient-to-r from-primary to-accent text-white shadow-[0_12px_30px_-10px_rgb(0_200_150/0.6)]" : "bg-secondary/60 hover:bg-secondary text-foreground/80"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="relative py-14">
          <div className="mx-auto max-w-[1440px] px-6">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-2 gap-8 rounded-[36px] overflow-hidden bg-white border border-border shadow-[0_30px_80px_-30px_rgb(15_118_110/0.35)]"
            >
              <div className="relative h-[300px] lg:h-auto overflow-hidden">
                <img src={featured.image} alt={featured.title} className="h-full w-full object-cover" />
                <span className="absolute top-5 left-5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">Featured</span>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[12px] font-semibold uppercase tracking-widest text-primary">{featured.category}</span>
                <h2 className="mt-3 font-display text-[26px] md:text-[36px] font-bold leading-[1.15]">{featured.title}</h2>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-[13px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {featured.author}</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
                </div>
                <button className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-foreground text-white px-6 py-3 text-[13.5px] font-semibold hover:-translate-y-0.5 transition">
                  Read article <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="relative py-16">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Latest Articles</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[36px] font-bold">Fresh from the team.</h2>
              </div>
              <p className="text-[13px] text-muted-foreground">{filtered.length} article{filtered.length === 1 ? "" : "s"}</p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">No articles found. Try a different search.</div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p, i) => (
                  <motion.article
                    key={p.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                    whileHover={{ y: -8 }}
                    className="group rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_-20px_rgb(15_118_110/0.15)] hover:shadow-[0_30px_60px_-20px_rgb(0_200_150/0.35)] transition-shadow"
                  >
                    <div className="relative h-[200px] overflow-hidden">
                      <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-primary">{p.category}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-[17px] font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">{p.title}</h3>
                      <div className="mt-4 flex items-center justify-between text-[12px] text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {p.author.replace("Dr. ", "")}</span>
                        <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {p.readTime}</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Popular */}
        <section className="relative py-16" style={{ backgroundColor: "var(--color-surface-alt)" }}>
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="font-display text-[24px] md:text-[30px] font-bold">Popular this week</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {popular.map((p, i) => (
                <div key={p.title} className="flex gap-4 rounded-3xl bg-white border border-border p-4 hover:shadow-[0_20px_50px_-20px_rgb(0_200_150/0.35)] transition">
                  <div className="num text-gradient font-display text-[32px] font-bold leading-none w-10 shrink-0">{i + 1}</div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">{p.category}</p>
                    <h3 className="mt-1 font-display text-[15px] font-semibold leading-snug line-clamp-2">{p.title}</h3>
                    <p className="mt-1 text-[12px] text-muted-foreground">{p.readTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="relative py-20">
          <div className="mx-auto max-w-[900px] px-6">
            <div className="rounded-[36px] p-10 md:p-14 text-center relative overflow-hidden bg-gradient-to-br from-primary to-accent text-white shadow-[0_30px_80px_-30px_rgb(0_200_150/0.6)]">
              <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
              <Mail className="h-8 w-8 mx-auto opacity-90" />
              <h3 className="mt-4 font-display text-[26px] md:text-[32px] font-bold">Never miss a health insight.</h3>
              <p className="mt-2 text-white/85">Weekly, expert-written and always practical. No spam.</p>
              {subscribed ? (
                <p className="mt-6 inline-block rounded-full bg-white/20 backdrop-blur px-5 py-2 text-[14px] font-semibold">Subscribed. Thank you!</p>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); if (email) { setSubscribed(true); setEmail(""); } }}
                  className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
                >
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className="flex-1 rounded-full bg-white/95 text-foreground px-5 py-3 text-[14px] focus:outline-none" />
                  <button className="rounded-full bg-white text-primary px-6 py-3 text-[14px] font-semibold hover:-translate-y-0.5 transition">Subscribe</button>
                </form>
              )}
            </div>
          </div>
        </section>

        <FinalCTA />
        <Footer />
      </main>
      <FloatingActions />
    </>
  );
}
