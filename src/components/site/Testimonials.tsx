import { motion } from "framer-motion";
import { Star, Play, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/sections";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl animate-blob" />
      </div>
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center mb-14">
          <p className="inline-block text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Patient Stories</p>
          <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-bold tracking-tight leading-[1.1] max-w-[720px] mx-auto">
            Real people, <span className="text-gradient">real recoveries</span>.
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${i * 100}%` }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex"
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full shrink-0 px-2">
                  <div className="grid lg:grid-cols-[420px_1fr] gap-8 items-stretch">
                    {/* Media */}
                    <div className="relative rounded-[32px] overflow-hidden min-h-[340px] group cursor-pointer">
                      <img src={t.photo} alt={t.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="h-6 w-6 text-primary fill-primary ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <p className="font-display text-[18px] font-semibold">{t.name}</p>
                        <p className="text-[12px] opacity-80">{t.treatment}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="glass rounded-[32px] p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        <Quote className="h-10 w-10 text-primary/40" />
                        <p className="mt-5 font-display text-[22px] md:text-[26px] leading-[1.35] tracking-tight">
                          "{t.review}"
                        </p>
                      </div>
                      <div className="mt-8 flex items-center justify-between">
                        <div className="flex text-primary">
                          {[...Array(t.rating)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                        </div>
                        <span className="text-[12px] text-muted-foreground uppercase tracking-widest">Verified Patient</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
              className="h-10 w-10 rounded-full glass flex items-center justify-center hover:-translate-y-0.5 transition"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-1.5 bg-border"}`}
                  aria-label={`Slide ${k + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((v) => (v + 1) % testimonials.length)}
              className="h-10 w-10 rounded-full glass flex items-center justify-center hover:-translate-y-0.5 transition"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
