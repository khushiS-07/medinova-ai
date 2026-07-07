import featureSpecialists from "@/assets/feature-specialists.jpg";
import featureTech from "@/assets/feature-tech.jpg";
import featureAppointment from "@/assets/feature-appointment.jpg";
import featureEmergency from "@/assets/feature-emergency.jpg";
import featureAi from "@/assets/feature-ai.jpg";
import featureRecords from "@/assets/feature-records.jpg";
import featureInsurance from "@/assets/feature-insurance.jpg";
import featureCare from "@/assets/feature-care.jpg";
import {
  Stethoscope, Cpu, CalendarClock, Siren, Bot, FileHeart, ShieldCheck, HeartHandshake,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export const features: Feature[] = [
  { title: "Expert Specialists", description: "Board-certified doctors with years of clinical experience across every specialty.", image: featureSpecialists, icon: Stethoscope },
  { title: "Advanced Medical Technology", description: "State-of-the-art diagnostic and treatment equipment for precise outcomes.", image: featureTech, icon: Cpu },
  { title: "Same Day Appointments", description: "Book appointments in seconds with minimal waiting and instant confirmations.", image: featureAppointment, icon: CalendarClock },
  { title: "24×7 Emergency Care", description: "Round-the-clock emergency support with rapid response under 3 minutes.", image: featureEmergency, icon: Siren },
  { title: "AI Health Assistant", description: "Instant, intelligent guidance from our AI trained on trusted medical data.", image: featureAi, icon: Bot },
  { title: "Digital Medical Records", description: "Access prescriptions, reports, and history securely from any device.", image: featureRecords, icon: FileHeart },
  { title: "Insurance Support", description: "Easy cashless treatment with leading insurance providers, no paperwork.", image: featureInsurance, icon: ShieldCheck },
  { title: "Patient-Centered Care", description: "Personalized treatment plans focused on your long-term wellness.", image: featureCare, icon: HeartHandshake },
];

export const stats = [
  { value: 250000, suffix: "+", title: "Patients Served", description: "Trusted by families across the country." },
  { value: 500, suffix: "+", title: "Doctors", description: "Board-certified specialists on-platform." },
  { value: 48, suffix: "+", title: "Medical Departments", description: "Comprehensive care under one roof." },
  { value: 30, suffix: "+", title: "Years of Excellence", description: "Decades of trusted clinical practice." },
  { value: 98, suffix: "%", title: "Patient Satisfaction", description: "Rated by verified patient reviews." },
];
