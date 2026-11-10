import { GraduationCap, BookOpen, Trophy, Laptop } from "lucide-react";

// Shared by the homepage Programmes section and the /programmes page.
export const programmeStages = [
  {
    icon: GraduationCap,
    title: "Early Years & Primary",
    subtitle: "Ages 4–11",
    description:
      "Build strong foundations in literacy, numeracy, science and critical thinking through engaging live lessons.",
    subjects: ["English", "Mathematics", "Science", "Reading"],
    accent: "from-brand-yellow/20 to-brand-lightGreen/30",
    iconBg: "bg-brand-yellow/15",
  },
  {
    icon: BookOpen,
    title: "Secondary School",
    subtitle: "WAEC • NECO • GCSE • IGCSE",
    description:
      "Curriculum-aligned lessons designed to improve confidence, classroom performance and examination success.",
    subjects: ["Mathematics", "English", "Biology", "Chemistry", "Physics"],
    accent: "from-brand-lightGreen/40 to-brand-faintGreen",
    iconBg: "bg-brand-lightGreen",
  },
  {
    icon: Trophy,
    title: "Exam Preparation",
    subtitle: "Focused Revision",
    description:
      "Structured revision programmes that help students perform confidently in major national and international examinations.",
    subjects: ["11+", "SATs", "BECE", "WAEC", "GCSE"],
    accent: "from-brand-yellow/15 to-brand-faintGreen",
    iconBg: "bg-brand-yellow/15",
  },
  {
    icon: Laptop,
    title: "Future Skills",
    subtitle: "Beyond School",
    description:
      "Develop practical skills that prepare children for tomorrow's opportunities while building creativity and confidence.",
    subjects: ["Coding", "Public Speaking", "Creative Writing", "Digital Skills"],
    accent: "from-brand-lightGreen/30 to-brand-yellow/10",
    iconBg: "bg-brand-lightGreen",
  },
];
