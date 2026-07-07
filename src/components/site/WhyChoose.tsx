import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { features } from "@/data/features";

export function WhyChoose() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-[640px]">
            <p className="inline-block text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Why MediNova AI</p>
            <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-bold tracking-tight leading-[1.05]">
              Care so thoughtful, it feels <span className="text-gradient">personal</span>.
            </h2>
          </div>
          <p className="text-[16px] text-muted-foreground max-w-[420px]">
            Eight reasons families across India choose us for premium, digital-first healthcare designed around their life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="group relative rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_-20px_rgb(15_118_110/0.15)] hover:shadow-[0_30px_60px_-20px_rgb(0_200_150/0.35)] transition-shadow"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                {/* Floating icon */}
                <div className="absolute -bottom-6 left-6 h-12 w-12 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-border">
                  <f.icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
                </div>
              </div>

              <div className="p-6 pt-9">
                <h3 className="font-display text-[19px] font-semibold leading-snug">{f.title}</h3>
                <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{f.description}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Read more
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
