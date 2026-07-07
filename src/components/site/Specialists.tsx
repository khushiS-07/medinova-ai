import { motion } from "framer-motion";
import { Star, Languages, Award, Calendar } from "lucide-react";
import { doctors } from "@/data/sections";

export function Specialists() {
  return (
    <section id="doctors" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="text-center mb-14">
          <p className="inline-block text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Our Specialists</p>
          <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-bold tracking-tight leading-[1.1] max-w-[720px] mx-auto">
            Meet the doctors <span className="text-gradient">shaping better outcomes</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, i) => (
            <motion.article
              key={doc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl p-1 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 shadow-[0_10px_40px_-20px_rgb(15_118_110/0.2)] hover:shadow-[0_30px_60px_-20px_rgb(0_200_150/0.4)] transition-shadow"
            >
              <div className="relative rounded-[22px] bg-white overflow-hidden h-full">
                <div className="relative h-[280px] overflow-hidden bg-gradient-to-br from-secondary to-white">
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  {/* Experience badge */}
                  <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-primary" />
                    <span className="text-[11px] font-semibold">{doc.experience}y experience</span>
                  </div>
                  {doc.available && (
                    <div className="absolute top-4 right-4 rounded-full bg-primary text-white text-[11px] font-semibold px-3 py-1.5 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      Available today
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-display text-[17px] font-semibold leading-tight">{doc.name}</h3>
                  <p className="text-[13px] text-primary font-medium mt-0.5">{doc.role}</p>
                  <p className="text-[12px] text-muted-foreground mt-1">{doc.qualification}</p>

                  <div className="mt-4 flex items-center justify-between text-[12px]">
                    <div className="flex items-center gap-1 text-primary">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="num font-semibold text-foreground">{doc.rating}</span>
                      <span className="text-muted-foreground">({doc.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Languages className="h-3.5 w-3.5" />
                      <span>{doc.languages.length} lang</span>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <button className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-white text-[12.5px] font-semibold py-2.5 shadow-[0_10px_25px_-8px_rgb(0_200_150/0.6)] hover:-translate-y-0.5 transition">
                      <Calendar className="h-3.5 w-3.5" /> Book
                    </button>
                    <button className="inline-flex items-center justify-center rounded-full border border-border text-[12.5px] font-semibold py-2.5 hover:bg-secondary/60 transition">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
