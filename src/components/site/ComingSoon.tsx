import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles, Activity } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { FloatingActions } from "@/components/site/FloatingActions";

export function ComingSoon({ title, description }: { title: string; description?: string }) {
  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
          <div aria-hidden className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgb(0_200_150/0.18),transparent_60%),radial-gradient(900px_500px_at_-10%_20%,rgb(232_255_247/0.9),transparent_60%)]" />
            <div className="absolute top-24 right-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl animate-float" />
            <div className="absolute top-40 left-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-float-alt" />
          </div>
          <div className="mx-auto max-w-[1440px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-2xl text-center"
            >
              <div className="mx-auto inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Coming Soon
              </div>
              <div className="relative mx-auto mt-8 flex h-28 w-28 items-center justify-center rounded-[28px] bg-gradient-to-br from-primary to-accent shadow-[0_25px_60px_-20px_rgb(0_200_150/0.7)]">
                <Activity className="h-12 w-12 text-white" strokeWidth={2.4} />
                <span className="absolute inset-0 rounded-[28px] bg-primary/40 blur-2xl -z-10" />
              </div>
              <h1 className="mt-8 font-display text-[42px] md:text-[60px] font-bold leading-[1.05] tracking-tight">
                {title}
              </h1>
              <p className="mt-5 text-[17px] text-muted-foreground leading-relaxed">
                {description ?? "This page is currently under development. We're crafting something premium — check back soon."}
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_30px_-10px_rgb(0_200_150/0.7)] hover:-translate-y-0.5 transition"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to Homepage
                </Link>
                <Link
                  to="/doctors"
                  className="inline-flex items-center rounded-full border border-border bg-white/60 px-6 py-3 text-[14px] font-semibold hover:bg-secondary/60 transition"
                >
                  Explore Doctors
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
      <FloatingActions />
    </>
  );
}
