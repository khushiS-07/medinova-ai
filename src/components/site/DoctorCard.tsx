import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Star, Languages, Award, Calendar, MapPin } from "lucide-react";
import type { DoctorFull } from "@/data/doctorsData";

export function DoctorCard({ doc, index = 0 }: { doc: DoctorFull; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl p-1 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 shadow-[0_10px_40px_-20px_rgb(15_118_110/0.2)] hover:shadow-[0_30px_60px_-20px_rgb(0_200_150/0.4)] transition-shadow"
    >
      <div className="relative rounded-[22px] bg-white overflow-hidden h-full flex flex-col">
        <div className="relative h-[240px] overflow-hidden bg-gradient-to-br from-secondary to-white">
          <img
            src={doc.photo}
            alt={doc.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 flex items-center gap-1.5">
            <Award className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] font-semibold">{doc.experience}y</span>
          </div>
          {doc.available ? (
            <div className="absolute top-4 right-4 rounded-full bg-primary text-white text-[11px] font-semibold px-3 py-1.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> Available
            </div>
          ) : (
            <div className="absolute top-4 right-4 rounded-full bg-muted text-muted-foreground text-[11px] font-semibold px-3 py-1.5">
              Booked
            </div>
          )}
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-display text-[17px] font-semibold leading-tight">{doc.name}</h3>
          <p className="text-[13px] text-primary font-medium mt-0.5">{doc.role}</p>
          <p className="text-[12px] text-muted-foreground mt-1">{doc.qualification}</p>

          <div className="mt-3 flex items-center gap-1.5 text-[12px] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span className="truncate">{doc.hospital}</span>
          </div>

          <div className="mt-3 flex items-center justify-between text-[12px]">
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

          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-[12px] text-muted-foreground">Consultation</span>
            <span className="font-display text-[16px] font-bold text-foreground num">₹{doc.fee}</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-white text-[12.5px] font-semibold py-2.5 shadow-[0_10px_25px_-8px_rgb(0_200_150/0.6)] hover:-translate-y-0.5 transition">
              <Calendar className="h-3.5 w-3.5" /> Book
            </button>
            <Link
              to="/doctors/$id"
              params={{ id: doc.id }}
              className="inline-flex items-center justify-center rounded-full border border-border text-[12.5px] font-semibold py-2.5 hover:bg-secondary/60 transition"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
