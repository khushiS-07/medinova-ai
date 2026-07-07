import {
  Heart, Brain, Bone, Baby, Sparkles, Flower2, Ear, Smile,
  Siren, ShieldCheck, HeartPulse, Brain as BrainIcon, Scan, Activity,
  Search, UserCheck, CalendarCheck, Hospital, Stethoscope,
  Microscope, Radio, Bot, Server, FlaskConical, MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

export type Department = {
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
  specialists: number;
  waitTime: string;
};

export const departments: Department[] = [
  { name: "Cardiology", description: "Helping patients prevent and treat heart-related conditions with advanced cardiac care and minimally invasive procedures.", icon: Heart, image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=800&q=80", specialists: 24, waitTime: "15 min" },
  { name: "Neurology", description: "Diagnosis and treatment for brain, spine, and nervous system disorders using modern neurological technology.", icon: Brain, image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80", specialists: 18, waitTime: "20 min" },
  { name: "Orthopedics", description: "Comprehensive care for bones, joints, muscles and sports injuries with rehabilitation support.", icon: Bone, image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80", specialists: 22, waitTime: "18 min" },
  { name: "Pediatrics", description: "Compassionate healthcare for infants, children and adolescents in a child-friendly environment.", icon: Baby, image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80", specialists: 30, waitTime: "12 min" },
  { name: "Dermatology", description: "Advanced skin, hair and cosmetic treatments using the latest dermatological techniques.", icon: Sparkles, image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80", specialists: 16, waitTime: "10 min" },
  { name: "Gynecology", description: "Women's healthcare including maternity, fertility and preventive wellness.", icon: Flower2, image: "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=800&q=80", specialists: 20, waitTime: "15 min" },
  { name: "ENT", description: "Diagnosis and treatment of ear, nose and throat disorders using minimally invasive procedures.", icon: Ear, image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80", specialists: 14, waitTime: "12 min" },
  { name: "Dentistry", description: "General, cosmetic and restorative dental treatments for every age.", icon: Smile, image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80", specialists: 19, waitTime: "10 min" },
];

export type Doctor = {
  name: string;
  role: string;
  qualification: string;
  experience: number;
  languages: string[];
  rating: number;
  reviews: number;
  photo: string;
  available: boolean;
};

export const doctors: Doctor[] = [
  { name: "Dr. Sarah Johnson", role: "Senior Cardiologist", qualification: "MBBS, MD Cardiology", experience: 18, languages: ["English", "Hindi"], rating: 4.9, reviews: 842, photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80", available: true },
  { name: "Dr. Arjun Mehta", role: "Neurologist", qualification: "MBBS, DM Neurology", experience: 15, languages: ["English", "Hindi", "Marathi"], rating: 4.8, reviews: 612, photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80", available: true },
  { name: "Dr. Emily Chen", role: "Pediatrician", qualification: "MBBS, MD Pediatrics", experience: 12, languages: ["English", "Mandarin"], rating: 4.9, reviews: 903, photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80", available: true },
  { name: "Dr. Rajesh Kapoor", role: "Orthopedic Surgeon", qualification: "MBBS, MS Ortho", experience: 22, languages: ["English", "Hindi", "Punjabi"], rating: 4.7, reviews: 758, photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80", available: false },
  { name: "Dr. Priya Sharma", role: "Dermatologist", qualification: "MBBS, MD Dermatology", experience: 10, languages: ["English", "Hindi"], rating: 4.9, reviews: 1120, photo: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80", available: true },
  { name: "Dr. Michael Roberts", role: "ENT Specialist", qualification: "MBBS, MS ENT", experience: 14, languages: ["English"], rating: 4.8, reviews: 534, photo: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=600&q=80", available: true },
  { name: "Dr. Ananya Iyer", role: "Gynecologist", qualification: "MBBS, MS OB-GYN", experience: 16, languages: ["English", "Hindi", "Tamil"], rating: 4.9, reviews: 987, photo: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=600&q=80", available: true },
  { name: "Dr. David Park", role: "Dental Surgeon", qualification: "BDS, MDS", experience: 11, languages: ["English", "Korean"], rating: 4.8, reviews: 645, photo: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=600&q=80", available: false },
];

export type Service = {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  { title: "Emergency Care", description: "24×7 emergency response with rapid treatment and advanced trauma care from a dedicated critical response team.", benefits: ["Under 3-minute response", "Level-1 trauma unit", "On-call specialists"], image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80", icon: Siren },
  { title: "Preventive Health", description: "Annual health screenings and preventive checkups designed for early disease detection and lifelong wellbeing.", benefits: ["70+ diagnostic tests", "Personalized reports", "Wellness advisor call"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80", icon: ShieldCheck },
  { title: "Women's Health", description: "Specialized healthcare programs for women of every age — from maternity to menopause, delivered with empathy.", benefits: ["Prenatal & postnatal care", "Fertility programs", "Hormonal wellness"], image: "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&w=1200&q=80", icon: HeartPulse },
  { title: "Mental Wellness", description: "Professional counselling, therapy and emotional wellness support with licensed psychologists — online or in-person.", benefits: ["Confidential sessions", "CBT & mindfulness", "24×7 crisis line"], image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80", icon: BrainIcon },
  { title: "Diagnostic Imaging", description: "MRI, CT Scan, X-Ray and Ultrasound using modern imaging equipment operated by senior radiologists.", benefits: ["3T MRI machines", "Same-day reports", "AI-assisted reads"], image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80", icon: Scan },
  { title: "Physiotherapy", description: "Personalized rehabilitation programs to restore mobility, reduce pain and improve long-term quality of life.", benefits: ["Sports rehab", "Post-surgery recovery", "Home visit therapy"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80", icon: Activity },
];

export type Step = { title: string; description: string; icon: LucideIcon };
export const steps: Step[] = [
  { title: "Choose Department", description: "Browse specialties and pick the right care for your concern.", icon: Search },
  { title: "Select Doctor", description: "Explore verified doctor profiles, reviews and availability.", icon: UserCheck },
  { title: "Book Appointment", description: "Reserve your slot instantly with real-time confirmation.", icon: CalendarCheck },
  { title: "Visit or Consult Online", description: "Meet your doctor in person or via secure video call.", icon: Hospital },
  { title: "Treatment & Follow-up", description: "Receive digital reports, prescriptions and continued care.", icon: Stethoscope },
];

export type Package = {
  name: string;
  price: string;
  tests: number;
  duration: string;
  ideal: string;
  features: string[];
  popular?: boolean;
};
export const packages: Package[] = [
  { name: "Basic Health Checkup", price: "₹999", tests: 42, duration: "2 hours", ideal: "Adults 18–35", features: ["Complete blood count", "Lipid & sugar profile", "BMI & vitals", "Doctor consultation"] },
  { name: "Executive Health", price: "₹3,999", tests: 88, duration: "Half day", ideal: "Working professionals", features: ["Cardiac assessment", "Full body imaging", "Stress evaluation", "Nutrition plan"], popular: true },
  { name: "Women's Wellness", price: "₹2,999", tests: 65, duration: "3 hours", ideal: "Women 25+", features: ["Hormonal panel", "Pap smear", "Breast screening", "Bone density"] },
  { name: "Senior Citizen Care", price: "₹2,499", tests: 55, duration: "3 hours", ideal: "Ages 60+", features: ["Cardiac & renal", "Bone & joint scan", "Vision & hearing", "Home report delivery"] },
  { name: "Corporate Wellness", price: "Custom", tests: 100, duration: "On-site", ideal: "Teams 25+", features: ["On-site medical camp", "Employee dashboards", "Ergonomic assessment", "Annual reporting"] },
];

export type Tech = { title: string; description: string; features: string[]; image: string; icon: LucideIcon };
export const technology: Tech[] = [
  { title: "3T MRI", description: "High-field magnetic resonance imaging with cinematic clarity.", features: ["Silent scan", "AI reconstruction"], image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80", icon: Scan },
  { title: "CT Scan", description: "Low-dose spiral CT for rapid, precise diagnostic imaging.", features: ["Sub-second scans", "Cardiac CT"], image: "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?auto=format&fit=crop&w=900&q=80", icon: Radio },
  { title: "Digital X-Ray", description: "Instant digital radiography with reduced radiation exposure.", features: ["Zero film waste", "Instant sharing"], image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80", icon: Microscope },
  { title: "Robotic Surgery", description: "Minimally invasive robotic-assisted procedures for faster recovery.", features: ["1mm precision", "Faster recovery"], image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=900&q=80", icon: Bot },
  { title: "Modern ICU", description: "Multi-parameter critical care suites with 1:1 nursing.", features: ["24×7 monitoring", "Isolation pods"], image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80", icon: HeartPulse },
  { title: "Advanced Laboratory", description: "NABL-accredited lab delivering fast, accurate diagnostic results.", features: ["Same-day reports", "Molecular diagnostics"], image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80", icon: FlaskConical },
  { title: "Electronic Records", description: "Encrypted lifetime health records accessible from any device.", features: ["End-to-end encrypted", "Family sharing"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", icon: Server },
  { title: "Telemedicine", description: "Consult specialists over HD video from anywhere in the world.", features: ["Global specialists", "e-Prescriptions"], image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80", icon: MonitorSmartphone },
];

export type Testimonial = { name: string; treatment: string; rating: number; review: string; photo: string };
export const testimonials: Testimonial[] = [
  { name: "Ritika Sharma", treatment: "Cardiac Care", rating: 5, review: "The cardiology team explained every step with such patience. I felt safe, informed and genuinely cared for from start to finish.", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" },
  { name: "Michael Anderson", treatment: "Orthopedic Surgery", rating: 5, review: "Six weeks after knee surgery I was back running. The rehab plan and the surgeons at MediNova AI are world-class.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" },
  { name: "Aisha Khan", treatment: "Maternity Care", rating: 5, review: "From the first ultrasound to holding my baby, every visit felt personal. Truly a five-star maternity experience.", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" },
  { name: "Vikram Nair", treatment: "Preventive Health", rating: 5, review: "The executive health checkup caught an early issue no one else spotted. Their preventive program probably saved my life.", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" },
  { name: "Sofia Martinez", treatment: "Dermatology", rating: 5, review: "Beautiful clinic, gentle doctors, and results that actually work. My skin has never looked better in my life.", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" },
];

export type Post = { title: string; category: string; readTime: string; author: string; date: string; image: string };
export const posts: Post[] = [
  { title: "10 Early Signs of Heart Disease You Shouldn't Ignore", category: "Cardiology", readTime: "6 min read", author: "Dr. Sarah Johnson", date: "Jun 24, 2026", image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=900&q=80" },
  { title: "Healthy Eating Habits for Busy Professionals", category: "Nutrition", readTime: "5 min read", author: "Dr. Ananya Iyer", date: "Jun 18, 2026", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80" },
  { title: "How to Manage Diabetes Naturally: A Practical Guide", category: "Endocrinology", readTime: "8 min read", author: "Dr. Arjun Mehta", date: "Jun 11, 2026", image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=900&q=80" },
  { title: "Women's Preventive Healthcare Guide by Age", category: "Women's Health", readTime: "7 min read", author: "Dr. Priya Sharma", date: "Jun 04, 2026", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80" },
  { title: "Child Vaccination Schedule Every Parent Should Follow", category: "Pediatrics", readTime: "4 min read", author: "Dr. Emily Chen", date: "May 27, 2026", image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=80" },
  { title: "The Real Benefits of Annual Health Checkups", category: "Wellness", readTime: "5 min read", author: "Dr. Michael Roberts", date: "May 20, 2026", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80" },
];

export type ChatMsg = { role: "user" | "ai"; text: string; actions?: string[] };
export const chatScript: ChatMsg[] = [
  { role: "user", text: "I have a headache since morning." },
  { role: "ai", text: "I'm sorry to hear that. If it's mild, hydration and rest usually help. If it's severe, sudden or with vision changes, please seek immediate care.", actions: ["Find Specialist", "Book Appointment", "View Health Tips"] },
  { role: "user", text: "I need a dermatologist." },
  { role: "ai", text: "Great — Dr. Priya Sharma has an opening at 4:30 PM today. Want me to book it for you?", actions: ["Book Appointment", "View Profile"] },
];
