"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowRight,
  Bot,
  CircleAlert,
  CircleCheck,
  Code2,
  Database,
  Download,
  ExternalLink,
  LoaderCircle,
  Mail,
  Send,
  Smartphone,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import {
  SiCss,
  SiDotnet,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiSharp,
  SiTailwindcss,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import {
  BootstrapIcon,
  CSharpIcon,
  CssIcon,
  DartIcon,
  DockerIcon,
  DotnetIcon,
  FlutterIcon,
  GitIcon,
  GithubBrandIcon,
  HtmlIcon,
  JsIcon,
  JqueryIcon,
  MakeIcon,
  MuiIcon,
  N8nIcon,
  NextIcon,
  PythonIcon,
  ReactIcon,
  ReactNativeIcon,
  SassIcon,
  SqlServerIcon,
  TailwindIcon,
  TsIcon,
  VsCodeIcon,
  ZapierIcon,
} from "@/components/SkillIcons";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const HERO_ROLES = [
  "Frontend Developer",
  "Next.js Specialist",
  "AI Automation Builder",
  "UI/UX & Modern Web",
];

function useTypewriter(
  words,
  {
    typeSpeed = 70,
    deleteSpeed = 35,
    pause = 1500,
    emptyPause = 500,
    loop = true,
  } = {}
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    const atFullWord = !isDeleting && text === word;
    const atEmpty = isDeleting && text === "";
    const delay = atFullWord
      ? pause
      : atEmpty
        ? emptyPause
        : isDeleting
          ? deleteSpeed
          : typeSpeed;

    if (!loop && atFullWord) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      if (atFullWord) {
        setIsDeleting(true);
      } else if (atEmpty) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        const nextLength = text.length + (isDeleting ? -1 : 1);
        setText(word.slice(0, nextLength));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    pause,
    emptyPause,
    loop,
  ]);

  return text;
}

function TypewriterText({ words, textClassName = "", options }) {
  const text = useTypewriter(words, options);

  return (
    <span className="inline">
      <span aria-live="polite" className={textClassName}>
        {text}
      </span>
      <span className="ml-px inline-block animate-pulse font-light text-cyan-400" aria-hidden="true">
        |
      </span>
    </span>
  );
}

const skillCategories = [
  {
    id: "frontend",
    short: "Frontend",
    title: "Frontend & UI Engineering",
    description: "Responsive interfaces, design systems, and polished interactions.",
    accent: "#A855F7",
    Icon: Code2,
    skills: [
      { name: "React.js", color: "#61DAFB", Icon: ReactIcon },
      { name: "Next.js", color: "#FFFFFF", Icon: NextIcon },
      { name: "TypeScript", color: "#3178C6", Icon: TsIcon },
      { name: "JavaScript", color: "#F7DF1E", Icon: JsIcon },
      { name: "HTML5", color: "#E34F26", Icon: HtmlIcon },
      { name: "CSS3", color: "#663399", Icon: CssIcon },
      { name: "Tailwind CSS", color: "#38BDF8", Icon: TailwindIcon },
      { name: "Material UI", color: "#007FFF", Icon: MuiIcon },
      { name: "Bootstrap", color: "#7952B3", Icon: BootstrapIcon },
      { name: "Sass", color: "#CC6699", Icon: SassIcon },
      { name: "jQuery", color: "#0769AD", Icon: JqueryIcon },
    ],
  },
  {
    id: "mobile",
    short: "Mobile",
    title: "Mobile App Development",
    description: "Cross-platform apps with native-grade user experience.",
    accent: "#22D3EE",
    Icon: Smartphone,
    skills: [
      { name: "Flutter", color: "#02569B", Icon: FlutterIcon },
      { name: "Dart", color: "#0175C2", Icon: DartIcon },
      { name: "React Native", color: "#61DAFB", Icon: ReactNativeIcon },
    ],
  },
  {
    id: "ai",
    short: "AI & Automation",
    title: "AI & Automation",
    description: "Intelligent workflows and no-code automation pipelines.",
    accent: "#F97316",
    Icon: Bot,
    skills: [
      { name: "AI", color: "#A855F7", secondary: "#34D399", glow: true, Icon: Bot },
      { name: "n8n", color: "#EA4B71", glow: true, Icon: N8nIcon },
      { name: "Make.com", color: "#6D00CC", glow: true, Icon: MakeIcon },
      { name: "Zapier", color: "#FF4F00", glow: true, Icon: ZapierIcon },
    ],
  },
  {
    id: "backend",
    short: "Backend",
    title: "Backend & Database",
    description: "Reliable server-side logic and data modeling.",
    accent: "#34D399",
    Icon: Database,
    skills: [
      { name: "Python", color: "#3776AB", secondary: "#FFD43B", Icon: PythonIcon },
      { name: "C#", color: "#512BD4", Icon: CSharpIcon },
      { name: ".NET", color: "#512BD4", Icon: DotnetIcon },
      { name: "Microsoft SQL Server", color: "#CC2927", Icon: SqlServerIcon },
    ],
  },
  {
    id: "devops",
    short: "DevOps & Tools",
    title: "DevOps & Developer Tools",
    description: "Workflow, collaboration, containers, and code quality.",
    accent: "#0EA5E9",
    Icon: Wrench,
    skills: [
      { name: "Docker", color: "#2496ED", Icon: DockerIcon },
      { name: "Git", color: "#F05032", Icon: GitIcon },
      { name: "GitHub", color: "#FFFFFF", Icon: GithubBrandIcon },
      { name: "VS Code", color: "#007ACC", Icon: VsCodeIcon },
    ],
  },
];

const allSkills = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({
    ...skill,
    categoryId: category.id,
  }))
);

const projects = [

  {
    id: 1,
    title: "Redolapy",
    description:
      "An innovative virtual Try-On web platform developed during ITI, delivering interactive shopping and visualization tools.",
    image: "/assets/img/portfolio/redolapy.jpg",
      tech: ["React", "Material UI", "Tailwind CSS"],
    githubUrl: "https://github.com/basmallasaid/Tryon_website_ITI",
    liveUrl: "https://redolapy-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Redolapy",
    description:
      "Cross-platform mobile application companion for the Redolapy virtual try-on system, focusing on mobile UX and camera integration.",
    image: "/assets/img/portfolio/redolapyapp.jpg",
    tech: ["React Native", "JavaScript", "Mobile UI"],
    githubUrl: "https://github.com/basmallasaid/App_TryOn_ITI",
    liveUrl: null,
  },
    {
    id: 3,
    title: "Drapey",
    description:
      "A modern e-commerce web platform featuring intuitive product browsing, responsive layout, and seamless user experience.",
    image: "/assets/img/portfolio/drapey.jpg",
    tech: ["Next.js", "React", "Tailwind CSS", "MUI"],
    githubUrl: "https://github.com/basmallasaid/Drapey",
    liveUrl: "https://drapey.vercel.app/",
  },
  {
    id: 4,
    title: "Vinfur",
    description:
      "Sleek and minimalist furniture store web application with interactive catalogs, filter systems, and modern UI components.",
    image: "/assets/img/portfolio/vinfur.jpg",
    tech: ["React", "MUI", "Tailwind CSS"],
    githubUrl: "https://github.com/basmallasaid/FurnitureReactProject",
    liveUrl: "https://furniture-react-project.vercel.app/",
  },
  {
    id: 5,
    title: "TravelTour",
    description:
      "Dynamic travel booking and tourism discovery platform built with Next.js for high performance and smooth navigation.",
    image: "/assets/img/portfolio/traveltour.jpg",
    tech: ["Next.js", "React", "Tailwind CSS", "MUI"],
    githubUrl: "https://github.com/basmallasaid/TravelTourNextProject",
    liveUrl: "https://travel-tour-next-project.vercel.app/",
  },
  {
    id: 6,
    title: "IKEA Web App",
    description: "E-commerce website inspired by IKEA",
    image: "/assets/img/portfolio/ikea.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/basmallasaid/Ikea_Website",
    liveUrl: null,
  },
  {
    id: 7,
    title: "Essence",
    description: "Luxury perfumes & accessories website built with React",
    image: "/assets/img/portfolio/essence.jpg",
    tech: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/basmallasaid/project-react",
    liveUrl: null,
  },
  {
    id: 8,
    title: "City Root",
    description: "Urban-themed React-based e-commerce project",
    image: "/assets/img/portfolio/cityroot.jpg",
    tech: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/basmallasaid/Graduation_Project",
    liveUrl: null,
  },
  {
    id: 9,
    title: "Landing Page",
    description: "Responsive landing page design using React",
    image: "/assets/img/portfolio/landing.jpg",
    tech: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/basmallasaid/LandingPage",
    liveUrl: null,
  },
  {
    id: 10,
    title: "HRMS",
    description: "Human Resource Management System built with ASP.NET Core",
    image: "/assets/img/portfolio/hrms.jpg",
    tech: [".NET", "C#", "SQL Server"],
    githubUrl: "https://github.com/basmallasaid/HRMS_Project",
    liveUrl: null,
  },
  {
    id: 11,
    title: "Examination System",
    description: "Online examination platform built with ASP.NET Core & SQL Server",
    image: "/assets/img/portfolio/exam.jpg",
    tech: [".NET", "C#", "SQL Server"],
    githubUrl: "https://github.com/basmallasaid/ProjectSQL",
    liveUrl: null,
  },
];

const projectGradients = [
  "from-purple-500/30 via-fuchsia-500/10 to-cyan-500/30",
  "from-cyan-500/30 via-sky-500/10 to-emerald-500/25",
  "from-emerald-500/25 via-teal-500/10 to-cyan-500/30",
  "from-amber-500/20 via-rose-500/10 to-purple-500/30",
  "from-blue-500/30 via-indigo-500/10 to-purple-500/25",
];

const projectTechIcons = {
  React: { Icon: SiReact, color: "#61DAFB" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  "Material UI": { Icon: SiMui, color: "#007FFF" },
  MUI: { Icon: SiMui, color: "#007FFF" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#663399" },
  ".NET": { Icon: SiDotnet, color: "#512BD4" },
  "C#": { Icon: SiSharp, color: "#512BD4" },
  "SQL Server": { Icon: DiMsqlServer, color: "#CC2927" },
  "Mobile UI": { Icon: SiReact, color: "#61DAFB" },
};

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 220, damping: 24, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 220, damping: 24, mass: 0.6 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);
  const scale = useSpring(1, { stiffness: 260, damping: 24 });
  const glareOpacity = useSpring(0, { stiffness: 220, damping: 26 });
  const glareX = useTransform(springX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(springY, [-0.5, 0.5], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(360px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.12), transparent 60%)`;

  const initials = project.title
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  const isMobileApp = project.id === 2;

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
    scale.set(1);
    glareOpacity.set(0);
  };

  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse" || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerEnter = (event) => {
    if (event.pointerType !== "mouse") return;

    scale.set(1.02);
    glareOpacity.set(1);
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
      style={{
        rotateX,
        rotateY,
        scale,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/50 backdrop-blur-md transition-colors duration-300 will-change-transform hover:border-white/20"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20"
        style={{ background: glare, opacity: glareOpacity }}
      />

      <div className="p-3 pb-0">
        <div className="relative aspect-[2/1] overflow-hidden rounded-xl bg-zinc-950 ring-1 ring-white/[0.06]">
          {project.image ? (
            isMobileApp ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-cyan-500/10 to-transparent">
                <div className="relative h-[88%] aspect-[9/19] overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-900 shadow-2xl ring-1 ring-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="160px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            )
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${projectGradients[index % projectGradients.length]}`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="select-none font-mono text-6xl font-bold tracking-tighter text-white/15">
                  {initials}
                </span>
              </div>
            </div>
          )}

          {isMobileApp && (
            <span className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-300 backdrop-blur-md">
              Mobile App
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 pt-4">
        <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-zinc-100">
          {project.title}
        </h3>
        <p className="mt-2 min-h-[3rem] line-clamp-2 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tag) => {
            const { Icon: TechIcon, color } = projectTechIcons[tag] ?? {};

            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-medium text-zinc-200"
              >
                {TechIcon && (
                  <TechIcon size={12} style={{ color }} aria-hidden="true" />
                )}
                {tag}
              </span>
            );
          })}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          {project.liveUrl ? (
            <>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-950 shadow-sm transition-all duration-300 hover:bg-zinc-200"
              >
                Live Demo
                <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                <SiGithub className="mr-1 h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              <SiGithub className="mr-1 h-4 w-4" aria-hidden="true" />
              {isMobileApp ? "View Source Code on GitHub" : "View Source Code"}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function SkillCard({ skill }) {
  const { name, color, secondary, glow, Icon } = skill;
  const cardRef = useRef(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, {
    stiffness: 260,
    damping: 26,
    mass: 0.5,
  });
  const springY = useSpring(pointerY, {
    stiffness: 260,
    damping: 26,
    mass: 0.5,
  });
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);

  const ambientGlow = secondary
    ? `radial-gradient(circle at 50% 30%, ${secondary}20 0%, ${color}14 40%, transparent 70%)`
    : `radial-gradient(circle at 50% 30%, ${color}18 0%, transparent 70%)`;

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse" || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="w-[calc(50%_-_0.5rem)] shrink-0 sm:w-[calc(33.333%_-_0.667rem)] md:w-[calc(25%_-_0.75rem)] lg:w-[calc(16.666%_-_0.8333rem)]"
    >
      <motion.div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        onPointerCancel={resetTilt}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
        }}
        className="group relative flex h-full min-h-[118px] flex-col items-center justify-center gap-3 rounded-2xl p-4 text-center will-change-transform"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl border border-white/[0.08] bg-zinc-900/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-md transition-[background-color,border-color] duration-200 group-hover:border-white/20"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: ambientGlow }}
        />

        <span
          className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04]"
          style={{ transform: "translateZ(30px)" }}
        >
          <span
            className={`pointer-events-none absolute inset-0 rounded-full blur-xl transition-opacity duration-300 ${
              glow
                ? "opacity-20 group-hover:opacity-70"
                : "opacity-0 group-hover:opacity-50"
            }`}
            style={{
              background: secondary
                ? `radial-gradient(circle, ${secondary} 0%, ${color} 45%, transparent 72%)`
                : `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            }}
          />
          <Icon
            size={22}
            className="relative transition-transform duration-300 group-hover:scale-110"
            style={{
              color,
              filter: glow ? `drop-shadow(0 0 10px ${color})` : undefined,
            }}
          />
        </span>

        <span
          className="relative text-sm font-medium leading-tight text-zinc-300 transition-colors duration-300 group-hover:text-white"
          style={{ transform: "translateZ(18px)" }}
        >
          {name}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [avatarFailed, setAvatarFailed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const heroRef = useRef(null);
  const heroPointerX = useMotionValue(0);
  const heroPointerY = useMotionValue(0);
  const heroSpringX = useSpring(heroPointerX, {
    stiffness: 140,
    damping: 24,
    mass: 0.5,
  });
  const heroSpringY = useSpring(heroPointerY, {
    stiffness: 140,
    damping: 24,
    mass: 0.5,
  });
  const heroRotateX = useTransform(heroSpringY, [-0.5, 0.5], [8, -8]);
  const heroRotateY = useTransform(heroSpringX, [-0.5, 0.5], [-8, 8]);
  const badgeX = useTransform(heroSpringX, [-0.5, 0.5], [-16, 16]);
  const badgeY = useTransform(heroSpringY, [-0.5, 0.5], [-12, 12]);

  const tabs = [
    { id: "all", short: "All", count: allSkills.length },
    ...skillCategories.map((category) => ({
      id: category.id,
      short: category.short,
      count: category.skills.length,
    })),
  ];

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.categoryId === activeCategory);

  const resetHeroParallax = () => {
    heroPointerX.set(0);
    heroPointerY.set(0);
  };

  const handleHeroPointerMove = (event) => {
    if (event.pointerType !== "mouse" || !heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const nextX = (event.clientX - rect.left) / rect.width - 0.5;
    const nextY = (event.clientY - rect.top) / rect.height - 0.5;

    heroPointerX.set(Math.max(-0.5, Math.min(0.5, nextX)));
    heroPointerY.set(Math.max(-0.5, Math.min(0.5, nextY)));
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({ ...current, [name]: value }));

    if (status === "success" || status === "error") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    if (status === "loading") return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setFeedback("Please fill in all fields before sending.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setFeedback("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key:
            process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
            "YOUR_ACCESS_KEY_HERE",
          name,
          email,
          message,
          to: "basmala30311@gmail.com",
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send message.");
      }

      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px] bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,rgba(168,85,247,0.28),transparent)]" />
      <div className="pointer-events-none absolute right-0 top-[500px] -z-10 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(56,189,248,0.16),transparent_70%)]" />
      <div className="pointer-events-none absolute left-0 top-[1100px] -z-10 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(52,211,153,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />

      <section
        id="about"
        ref={heroRef}
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={resetHeroParallax}
        onPointerCancel={resetHeroParallax}
        className="relative mx-auto flex min-h-screen max-w-6xl items-center px-4 pt-36 pb-20 sm:px-6 lg:px-8 lg:pt-44"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="flex flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              custom={1}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for Work
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={2}
              className="tracking-tight text-white"
            >
              <span className="block text-balance text-4xl font-bold sm:text-5xl lg:text-6xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text font-extrabold text-transparent">
                  Basmalla
                </span>
              </span>

              <span className="mt-4 flex min-h-[1.4em] items-center justify-center text-lg font-medium sm:text-xl lg:justify-start lg:text-2xl">
                <TypewriterText
                  words={HERO_ROLES}
                  textClassName="bg-gradient-to-r from-cyan-300 via-teal-200 to-indigo-300 bg-clip-text text-transparent"
                  options={{
                    typeSpeed: 70,
                    deleteSpeed: 35,
                    pause: 1500,
                    emptyPause: 500,
                  }}
                />
              </span>

              <span className="mt-5 block max-w-xl text-base font-normal leading-relaxed text-zinc-300 sm:text-lg">
                I build fast, accessible interfaces with Next.js and wire up intelligent automations
                that save teams time.
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <Link
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:from-cyan-400 hover:to-blue-500"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                <span className="relative flex items-center gap-2">
                  View Projects
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                <Download
                  size={18}
                  className="transition-transform duration-300 group-hover:animate-bounce"
                />
                Download CV
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative mx-auto w-full max-w-sm lg:col-span-6 lg:max-w-md"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              style={{
                rotateX: heroRotateX,
                rotateY: heroRotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-emerald-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-2 shadow-[0_0_50px_-18px_rgba(56,189,248,0.35),0_25px_60px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/5 backdrop-blur-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-zinc-950">
                  {avatarFailed ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(168,85,247,0.18),transparent_60%)]">
                      <div className="relative h-40 w-40">
                        <div className="absolute left-1/2 top-2 h-20 w-20 -translate-x-1/2 rounded-full border border-white/10 bg-zinc-800/80" />
                        <div className="absolute bottom-0 left-1/2 h-24 w-36 -translate-x-1/2 rounded-t-full border border-white/10 bg-zinc-800/80" />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src="/assets/img/avatar1.jpg"
                      alt="Portrait of Basmalla"
                      fill
                      priority
                      sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 90vw"
                      className="object-cover"
                      onError={() => setAvatarFailed(true)}
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b]/70 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 shadow-[inset_0_0_60px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.15)]" />
                </div>
              </div>

              <motion.div
                style={{ x: badgeX, y: badgeY, z: 50 }}
                className="absolute -left-2 top-12 z-20 sm:-left-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, y: [-6, 6, -6], scale: 1 }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.55 },
                    scale: { duration: 0.5, delay: 0.55 },
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6,
                    },
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/80 shadow-lg shadow-black/40 backdrop-blur-md"
                  title="Next.js"
                >
                  <NextIcon size={20} style={{ color: "#FFFFFF" }} />
                  <span className="sr-only">Next.js</span>
                </motion.div>
              </motion.div>

              <motion.div
                style={{ x: badgeX, y: badgeY, z: 50 }}
                className="absolute -right-2 top-20 z-20 sm:-right-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, y: [-6, 6, -6], scale: 1 }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.7 },
                    scale: { duration: 0.5, delay: 0.7 },
                    y: {
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.75,
                    },
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/80 shadow-lg shadow-black/40 backdrop-blur-md"
                  title="React"
                >
                  <ReactIcon size={20} style={{ color: "#61DAFB" }} />
                  <span className="sr-only">React</span>
                </motion.div>
              </motion.div>

              <motion.div
                style={{ x: badgeX, y: badgeY, z: 50 }}
                className="absolute -right-2 bottom-24 z-20 sm:-right-7"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, y: [-6, 6, -6], scale: 1 }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.85 },
                    scale: { duration: 0.5, delay: 0.85 },
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.9,
                    },
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/30 bg-zinc-950/80 shadow-[0_0_30px_-8px_rgba(168,85,247,0.9)] backdrop-blur-md"
                  title="AI & Automation"
                >
                  <Bot
                    size={20}
                    style={{
                      color: "#A855F7",
                      filter: "drop-shadow(0 0 6px rgba(168,85,247,0.8))",
                    }}
                  />
                  <span className="sr-only">AI &amp; Automation</span>
                </motion.div>
              </motion.div>

            </motion.div>

            <div className="mt-5 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-zinc-900/40 px-2 py-3 text-center backdrop-blur-md">
              <div className="px-2">
                <p className="text-sm font-semibold text-white">5+</p>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">Live Projects</p>
              </div>
              <div className="px-2">
                <p className="text-sm font-semibold text-white">Next.js &amp; AI</p>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">Core Stack</p>
              </div>
              <div className="px-2">
                <p className="text-sm font-semibold text-white">Modern UX</p>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">Approach</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Skills &amp; Tech Stack
          </p>
          <h2 className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            Tools I work with
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            A curated set of technologies I use to build modern, performant web experiences.
          </p>
        </div>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-zinc-100 text-zinc-950 shadow-[0_0_30px_-6px_rgba(255,255,255,0.45)]"
                    : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-600 hover:text-zinc-100"
                }`}
              >
                {tab.short}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold transition-colors duration-300 ${
                    isActive
                      ? "bg-zinc-950/10 text-zinc-700"
                      : "bg-zinc-800/80 text-zinc-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="flex flex-wrap justify-center gap-4"
          style={{ perspective: "1000px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillCard
                key={`${skill.categoryId}-${skill.name}`}
                skill={skill}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Featured Projects
          </p>
          <h2 className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            Selected work
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            A glimpse of projects where I focus on clarity, performance, and polish.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Contact
          </p>
          <h2 className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            Let&apos;s build something together
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12 lg:grid-cols-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
          />
          <div className="relative lg:col-span-5">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Let&apos;s connect
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">
              Have a project in mind, a role to fill, or just want to say hello? My
              inbox is always open, and I&apos;ll get back to you personally.
            </p>

            <div className="mt-6 flex flex-col gap-2">
                <a
                  href="mailto:basmala30311@gmail.com"
                  className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:translate-x-1 hover:border-cyan-400/20 hover:bg-white/[0.05]"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] text-zinc-400 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white">Email</p>
                      <p className="truncate text-xs text-zinc-500">basmala30311@gmail.com</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="shrink-0 text-zinc-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-zinc-200"
                  />
                </a>

                <a
                  href="https://github.com/basmallasaid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:translate-x-1 hover:border-cyan-400/20 hover:bg-white/[0.05]"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] text-zinc-400 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300">
                      <GithubIcon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white">GitHub</p>
                      <p className="truncate text-xs text-zinc-500">@basmallasaid</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="shrink-0 text-zinc-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-zinc-200"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/basmala-said/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:translate-x-1 hover:border-cyan-400/20 hover:bg-white/[0.05]"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] text-zinc-400 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300">
                      <LinkedinIcon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white">LinkedIn</p>
                      <p className="truncate text-xs text-zinc-500">Basmala Said</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="shrink-0 text-zinc-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-zinc-200"
                  />
                </a>
            </div>

            <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-cyan-400/15 bg-cyan-400/[0.04] px-3.5 py-3">
              <Zap size={15} className="shrink-0 text-cyan-300" />
              <p className="text-xs font-medium text-zinc-300">
                Fast response{" "}
                <span className="text-zinc-500">(usually within 24 hours)</span>
              </p>
            </div>

            <div className="mt-2 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-2">
              <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              </span>
              <p className="text-xs font-medium text-emerald-300">
                Open for new opportunities
              </p>
            </div>
          </div>

          <form
            className="relative lg:col-span-7"
            onSubmit={handleContactSubmit}
            noValidate
          >
            <h3 className="text-lg font-semibold text-white">Send a message</h3>
            <p className="mt-1 text-sm text-zinc-500">
              A few details and I&apos;ll get back to you personally.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-medium uppercase tracking-wider text-zinc-500"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full rounded-xl border border-zinc-800/80 bg-zinc-950/70 px-4 py-3.5 text-sm text-zinc-100 transition-all placeholder:text-zinc-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-medium uppercase tracking-wider text-zinc-500"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full rounded-xl border border-zinc-800/80 bg-zinc-950/70 px-4 py-3.5 text-sm text-zinc-100 transition-all placeholder:text-zinc-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-medium uppercase tracking-wider text-zinc-500"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  className="min-h-[160px] w-full resize-none rounded-xl border border-zinc-800/80 bg-zinc-950/70 px-4 py-3.5 text-sm text-zinc-100 transition-all placeholder:text-zinc-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                aria-busy={status === "loading"}
                className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg transition-transform hover:bg-zinc-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-white disabled:active:scale-100"
              >
                {status === "loading" ? (
                  <>
                    <LoaderCircle
                      size={16}
                      className="animate-spin"
                      aria-hidden="true"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </>
                )}
              </button>

              {status === "success" && (
                <div
                  role="status"
                  className="mt-4 flex items-start justify-between gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-3"
                >
                  <div className="flex gap-2.5">
                    <CircleCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-emerald-300">
                      ✨ Message sent successfully! I will reply to you shortly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-emerald-400/70 transition-colors hover:text-emerald-300"
                    aria-label="Dismiss success message"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="mt-4 flex items-start justify-between gap-3 rounded-xl border border-rose-500/20 bg-rose-500/[0.06] px-4 py-3"
                >
                  <div className="flex gap-2.5">
                    <CircleAlert
                      size={17}
                      className="mt-0.5 shrink-0 text-rose-400"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-rose-300">
                      {feedback || (
                        <>
                          Something went wrong. Please try again or{" "}
                          <a
                            href="mailto:basmala30311@gmail.com"
                            className="underline decoration-rose-400/40 underline-offset-2 transition-colors hover:text-rose-200"
                          >
                            email directly
                          </a>
                          .
                        </>
                      )}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFeedback("");
                    }}
                    className="text-rose-400/70 transition-colors hover:text-rose-300"
                    aria-label="Dismiss error message"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
          </form>
        </motion.div>
      </section>
    </div>
  );
}
