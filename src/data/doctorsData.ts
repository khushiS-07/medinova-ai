export type DoctorFull = {
  id: string;
  name: string;
  role: string;
  department: string;
  qualification: string;
  experience: number;
  languages: string[];
  rating: number;
  reviews: number;
  photo: string;
  available: boolean;
  hospital: string;
  fee: number;
  bio: string;
  education: { degree: string; institution: string; year: string }[];
  experienceList: { role: string; hospital: string; period: string }[];
  expertise: string[];
  certifications: string[];
  availability: { day: string; slots: string[] }[];
  patientReviews: { name: string; rating: number; date: string; text: string }[];
};

const photo = (seed: number) =>
  [
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
  ][seed % 10];

const baseAvailability = [
  { day: "Monday", slots: ["09:00 AM", "10:30 AM", "12:00 PM", "3:30 PM", "5:00 PM"] },
  { day: "Tuesday", slots: ["09:30 AM", "11:00 AM", "2:00 PM", "4:00 PM"] },
  { day: "Wednesday", slots: ["10:00 AM", "12:30 PM", "3:00 PM", "5:30 PM"] },
  { day: "Thursday", slots: ["09:00 AM", "11:30 AM", "2:30 PM", "4:30 PM"] },
  { day: "Friday", slots: ["09:30 AM", "11:00 AM", "1:00 PM", "3:30 PM", "5:00 PM"] },
  { day: "Saturday", slots: ["10:00 AM", "12:00 PM", "2:00 PM"] },
];

const reviewsPool = [
  { name: "Ananya R.", rating: 5, date: "May 12, 2026", text: "Extremely patient and thorough. Explained the diagnosis clearly and made me feel at ease throughout the visit." },
  { name: "Rohan M.", rating: 5, date: "Apr 28, 2026", text: "One of the most compassionate doctors I've met. The treatment plan worked exactly as promised." },
  { name: "Sophia L.", rating: 4, date: "Apr 03, 2026", text: "Very knowledgeable and calm. Wait time was slightly longer than expected but the consultation was worth it." },
  { name: "Karan P.", rating: 5, date: "Mar 18, 2026", text: "Follow-up care was excellent. Received digital reports quickly and clear next steps." },
  { name: "Meera S.", rating: 5, date: "Mar 02, 2026", text: "Answered every one of my questions without rushing. Truly a five-star experience." },
  { name: "David K.", rating: 5, date: "Feb 11, 2026", text: "Modern facility, kind staff, and a doctor who genuinely listens. Highly recommend." },
  { name: "Priya N.", rating: 4, date: "Jan 25, 2026", text: "Professional and precise. My recovery has been smooth thanks to the personalized plan." },
];

type Seed = {
  name: string; role: string; department: string; qualification: string;
  experience: number; languages: string[]; rating: number; reviews: number;
  available: boolean; hospital: string; fee: number;
  expertise: string[];
};

const seeds: Seed[] = [
  { name: "Dr. Sarah Johnson", role: "Senior Cardiologist", department: "Cardiology", qualification: "MBBS, MD Cardiology", experience: 18, languages: ["English", "Hindi"], rating: 4.9, reviews: 842, available: true, hospital: "MediNova Central", fee: 1200, expertise: ["Heart Failure", "Hypertension", "Angioplasty", "Preventive Cardiology"] },
  { name: "Dr. Arjun Mehta", role: "Neurologist", department: "Neurology", qualification: "MBBS, DM Neurology", experience: 15, languages: ["English", "Hindi", "Marathi"], rating: 4.8, reviews: 612, available: true, hospital: "MediNova Central", fee: 1500, expertise: ["Stroke Care", "Epilepsy", "Migraine", "Movement Disorders"] },
  { name: "Dr. Emily Chen", role: "Pediatrician", department: "Pediatrics", qualification: "MBBS, MD Pediatrics", experience: 12, languages: ["English", "Mandarin"], rating: 4.9, reviews: 903, available: true, hospital: "MediNova Family Care", fee: 900, expertise: ["Newborn Care", "Vaccinations", "Growth Monitoring", "Pediatric Allergies"] },
  { name: "Dr. Rajesh Kapoor", role: "Orthopedic Surgeon", department: "Orthopedics", qualification: "MBBS, MS Ortho", experience: 22, languages: ["English", "Hindi", "Punjabi"], rating: 4.7, reviews: 758, available: false, hospital: "MediNova Ortho Institute", fee: 1400, expertise: ["Joint Replacement", "Sports Injury", "Spine Surgery", "Arthroscopy"] },
  { name: "Dr. Priya Sharma", role: "Dermatologist", department: "Dermatology", qualification: "MBBS, MD Dermatology", experience: 10, languages: ["English", "Hindi"], rating: 4.9, reviews: 1120, available: true, hospital: "MediNova Skin & Aesthetics", fee: 1100, expertise: ["Acne Care", "Laser Treatment", "Hair Restoration", "Cosmetic Dermatology"] },
  { name: "Dr. Michael Roberts", role: "ENT Specialist", department: "ENT", qualification: "MBBS, MS ENT", experience: 14, languages: ["English"], rating: 4.8, reviews: 534, available: true, hospital: "MediNova Central", fee: 1000, expertise: ["Sinus Surgery", "Hearing Loss", "Vertigo", "Snoring & Sleep Apnea"] },
  { name: "Dr. Ananya Iyer", role: "Gynecologist", department: "Gynecology", qualification: "MBBS, MS OB-GYN", experience: 16, languages: ["English", "Hindi", "Tamil"], rating: 4.9, reviews: 987, available: true, hospital: "MediNova Women's Center", fee: 1300, expertise: ["High-risk Pregnancy", "Fertility", "PCOS Management", "Menopause Care"] },
  { name: "Dr. David Park", role: "Dental Surgeon", department: "Dentistry", qualification: "BDS, MDS", experience: 11, languages: ["English", "Korean"], rating: 4.8, reviews: 645, available: false, hospital: "MediNova Dental", fee: 800, expertise: ["Implants", "Orthodontics", "Root Canal", "Cosmetic Dentistry"] },
  { name: "Dr. Neha Verma", role: "Endocrinologist", department: "Endocrinology", qualification: "MBBS, DM Endocrinology", experience: 13, languages: ["English", "Hindi"], rating: 4.8, reviews: 421, available: true, hospital: "MediNova Central", fee: 1250, expertise: ["Diabetes", "Thyroid Disorders", "Obesity", "Hormonal Imbalance"] },
  { name: "Dr. Suresh Nair", role: "Gastroenterologist", department: "Gastroenterology", qualification: "MBBS, DM Gastro", experience: 20, languages: ["English", "Hindi", "Malayalam"], rating: 4.9, reviews: 812, available: true, hospital: "MediNova Digestive Institute", fee: 1400, expertise: ["Endoscopy", "Liver Disease", "IBS", "Colonoscopy"] },
  { name: "Dr. Fatima Rehman", role: "Oncologist", department: "Oncology", qualification: "MBBS, DM Medical Oncology", experience: 17, languages: ["English", "Hindi", "Urdu"], rating: 4.9, reviews: 559, available: true, hospital: "MediNova Cancer Center", fee: 1800, expertise: ["Breast Cancer", "Chemotherapy", "Immunotherapy", "Palliative Care"] },
  { name: "Dr. James Wilson", role: "Pulmonologist", department: "Pulmonology", qualification: "MBBS, MD Pulmonary Med", experience: 14, languages: ["English"], rating: 4.7, reviews: 384, available: false, hospital: "MediNova Central", fee: 1200, expertise: ["Asthma", "COPD", "Sleep Studies", "Interventional Pulmonology"] },
  { name: "Dr. Kavita Rao", role: "Psychiatrist", department: "Mental Wellness", qualification: "MBBS, MD Psychiatry", experience: 12, languages: ["English", "Hindi", "Kannada"], rating: 4.9, reviews: 702, available: true, hospital: "MediNova Mind Care", fee: 1500, expertise: ["Anxiety", "Depression", "CBT", "Adolescent Mental Health"] },
  { name: "Dr. Vikram Desai", role: "Urologist", department: "Urology", qualification: "MBBS, MCh Urology", experience: 19, languages: ["English", "Hindi", "Gujarati"], rating: 4.8, reviews: 476, available: true, hospital: "MediNova Central", fee: 1400, expertise: ["Kidney Stones", "Prostate Care", "Robotic Urology", "Male Infertility"] },
  { name: "Dr. Olivia Martinez", role: "Ophthalmologist", department: "Ophthalmology", qualification: "MBBS, MS Ophthalmology", experience: 11, languages: ["English", "Spanish"], rating: 4.9, reviews: 651, available: true, hospital: "MediNova Vision Center", fee: 1000, expertise: ["Cataract Surgery", "LASIK", "Retina Care", "Glaucoma"] },
  { name: "Dr. Aditya Singh", role: "General Physician", department: "General Medicine", qualification: "MBBS, MD Internal Med", experience: 9, languages: ["English", "Hindi"], rating: 4.7, reviews: 892, available: true, hospital: "MediNova Family Care", fee: 700, expertise: ["Preventive Care", "Chronic Disease", "Wellness Checks", "Vaccinations"] },
  { name: "Dr. Hana Kim", role: "Rheumatologist", department: "Rheumatology", qualification: "MBBS, DM Rheumatology", experience: 13, languages: ["English", "Korean"], rating: 4.8, reviews: 312, available: true, hospital: "MediNova Central", fee: 1300, expertise: ["Arthritis", "Autoimmune Disease", "Lupus", "Osteoporosis"] },
  { name: "Dr. Marcus Bell", role: "Nephrologist", department: "Nephrology", qualification: "MBBS, DM Nephrology", experience: 16, languages: ["English"], rating: 4.8, reviews: 289, available: false, hospital: "MediNova Kidney Institute", fee: 1500, expertise: ["Dialysis", "Kidney Transplant", "Hypertension", "CKD Management"] },
];

export const doctorsFull: DoctorFull[] = seeds.map((s, i) => ({
  id: s.name.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, ""),
  ...s,
  photo: photo(i),
  bio: `${s.name.replace("Dr. ", "Dr. ")} is a highly regarded ${s.role.toLowerCase()} with over ${s.experience} years of clinical experience across leading Indian and international hospitals. Known for a patient-first approach, ${s.name.split(" ").slice(-1)[0]} combines evidence-based medicine with the latest advances in ${s.department.toLowerCase()} to deliver outcomes patients can trust. Their practice focuses on empathetic communication, preventive care and long-term wellbeing.`,
  education: [
    { degree: "MBBS", institution: "All India Institute of Medical Sciences (AIIMS)", year: `${2001 + (i % 5)}` },
    { degree: s.qualification.split(", ")[1] ?? "MD", institution: "Postgraduate Institute of Medical Education & Research", year: `${2006 + (i % 5)}` },
    { degree: "Fellowship", institution: "Royal College of Physicians, UK", year: `${2010 + (i % 5)}` },
  ],
  experienceList: [
    { role: `Senior Consultant — ${s.department}`, hospital: "MediNova AI Hospitals", period: "2019 — Present" },
    { role: `Consultant — ${s.department}`, hospital: "Apollo Hospitals", period: "2013 — 2019" },
    { role: `Registrar — ${s.department}`, hospital: "Fortis Healthcare", period: "2009 — 2013" },
  ],
  expertise: s.expertise,
  certifications: ["NABH Certified Practitioner", "Indian Medical Council Registered", "Fellow — Royal College of Physicians", "Advanced Cardiac Life Support (ACLS)"],
  availability: baseAvailability,
  patientReviews: reviewsPool.slice(0, 6),
}));

export const departmentsList = Array.from(new Set(doctorsFull.map((d) => d.department)));
export const languagesList = Array.from(new Set(doctorsFull.flatMap((d) => d.languages)));
