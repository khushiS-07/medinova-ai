import { Activity } from "lucide-react";
import { Link } from "@tanstack/react-router";

const footerLinks: { title: string; items: { label: string; to: "/" | "/doctors" | "/departments" | "/treatments" | "/telemedicine" | "/packages" | "/blog" | "/about" | "/contact" }[] }[] = [
  { title: "Platform", items: [
    { label: "Doctors", to: "/doctors" },
    { label: "Departments", to: "/departments" },
    { label: "Treatments", to: "/treatments" },
    { label: "Telemedicine", to: "/telemedicine" },
  ]},
  { title: "Company", items: [
    { label: "About", to: "/about" },
    { label: "Blog", to: "/blog" },
    { label: "Packages", to: "/packages" },
    { label: "Contact", to: "/contact" },
  ]},
];



export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border" style={{ backgroundColor: "var(--color-surface-alt)" }}>
      <div className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
                <Activity className="h-4.5 w-4.5 text-white" strokeWidth={2.6} />
              </span>
              <span className="font-display text-[17px] font-bold tracking-tight">
                MEDINOVA<span className="text-primary"> AI</span>
              </span>
            </div>
            <p className="mt-5 text-[15px] text-muted-foreground max-w-[420px] leading-relaxed">
              Premium digital-first healthcare combining expert doctors, advanced medical technology, and personalized care.
            </p>
          </div>
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-[14px] font-semibold uppercase tracking-widest text-foreground/70">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((i) => (
                  <li key={i.to}>
                    <Link to={i.to} className="text-[15px] text-muted-foreground hover:text-primary transition">{i.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-[13px] text-muted-foreground">
          <p>© {new Date().getFullYear()} MediNova AI. All rights reserved.</p>
          <p>Made with care for a healthier tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
