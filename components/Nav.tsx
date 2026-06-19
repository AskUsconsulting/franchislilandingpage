"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ClipboardList,
  ClipboardCheck,
  MessageSquare,
  FileText,
  GraduationCap,
  BarChart2,
  Building2,
  Map,
  Car,
  ShieldCheck,
  BookOpen,
  LayoutDashboard,
} from "lucide-react";

/* ── Dropdown data ─────────────────────────────────────────────────────────── */

const PLATFORM = [
  {
    icon: ClipboardList,
    label: "Operations & Checklists",
    desc: "Daily opening and closing checklists, shift handover notes, and task management for consistent execution.",
  },
  {
    icon: ClipboardCheck,
    label: "Audits & Inspections",
    desc: "Schedule or surprise-audit any location, score findings by section, and track corrective actions to close.",
  },
  {
    icon: MessageSquare,
    label: "Communications",
    desc: "HQ announcements, direct two-way location messaging, and a shared bulletin board for the whole network.",
  },
  {
    icon: FileText,
    label: "Documents & SOPs",
    desc: "A searchable SOP library, brand standards, and policy acknowledgment tracking across every location.",
  },
  {
    icon: GraduationCap,
    label: "Training & Compliance",
    desc: "Track module completion and compliance rates across every employee and location in a single matrix.",
  },
  {
    icon: BarChart2,
    label: "Reporting & Analytics",
    desc: "Location performance rankings, training completion reports, and exportable CSV and PDF data.",
  },
];

const SOLUTIONS = [
  {
    icon: Building2,
    label: "For Franchise Owners",
    desc: "Full network visibility from a single dashboard — audits, compliance, and communications in one place.",
  },
  {
    icon: LayoutDashboard,
    label: "For Location Managers",
    desc: "Clear daily priorities, direct access to SOPs, and a direct line to HQ without the noise.",
  },
  {
    icon: Car,
    label: "For Carwash Owners",
    desc: "Keep every wash site on standard — site checklists, equipment audits, and team accountability in one place.",
  },
  {
    icon: Map,
    label: "For Multi-unit Operators",
    desc: "Scale your network without scaling your team. Regional grouping and cross-location reporting built in.",
  },
];

const RESOURCES = [
  {
    icon: BookOpen,
    label: "Documentation",
    desc: "Setup guides, integration references, and feature walkthroughs.",
  },
  {
    icon: ShieldCheck,
    label: "Compliance Hub",
    desc: "Best practices for food safety, HR compliance, and franchise audit readiness.",
  },
];

type MenuId = "platform" | "solutions" | "resources";

interface MenuItem {
  id: MenuId;
  label: string;
  items: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; desc: string }[];
  cols: number;
  width: string;
}

const MENU_ITEMS: MenuItem[] = [
  { id: "platform",  label: "Platform",   items: PLATFORM,  cols: 2, width: "w-[640px]" },
  { id: "solutions", label: "Solutions",  items: SOLUTIONS, cols: 2, width: "w-[600px]" },
  { id: "resources", label: "Resources",  items: RESOURCES, cols: 1, width: "w-[320px]" },
];

/* ── Component ─────────────────────────────────────────────────────────────── */

export default function Nav() {
  const [activeMenu, setActiveMenu] = useState<MenuId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open  = (id: MenuId) => { if (timerRef.current) clearTimeout(timerRef.current); setActiveMenu(id); };
  const close = ()           => { timerRef.current = setTimeout(() => setActiveMenu(null), 120); };
  const keep  = ()           => { if (timerRef.current) clearTimeout(timerRef.current); };

  return (
    <nav
      className={`sticky top-0 z-50 h-16 flex items-center justify-between px-[6%]
        bg-white/90 backdrop-blur-md border-b border-slate-200 transition-shadow duration-300
        ${scrolled ? "shadow-sm" : ""}`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 font-display font-black text-xl tracking-tight text-brand">
        <span className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white text-[15px] font-black">
          O
        </span>
        Opereva
      </Link>

      {/* Center nav */}
      <ul className="hidden md:flex items-center gap-1">
        {MENU_ITEMS.map((item) => (
          <li key={item.id} className="relative" onMouseEnter={() => open(item.id)} onMouseLeave={close}>
            <button
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-slate-600
                         hover:text-brand hover:bg-brand-50 transition-colors duration-150"
            >
              {item.label}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${activeMenu === item.id ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown panel */}
            <div
              className={`dropdown-panel ${activeMenu === item.id ? "open" : ""} ${item.width}`}
              onMouseEnter={keep}
              onMouseLeave={close}
            >
              <div className="dropdown-arrow" />
              <div className="bg-white rounded-xl border border-slate-200 shadow-xl shadow-slate-200/60 p-3">
                <div className={`grid gap-1 ${item.cols === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {item.items.map((fi) => {
                    const Icon = fi.icon;
                    return (
                      <a
                        key={fi.label}
                        href="#features"
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-brand-50 transition-colors duration-150 group"
                        onClick={() => setActiveMenu(null)}
                      >
                        <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-brand-50
                                         group-hover:bg-brand-100 transition-colors flex-shrink-0 mt-0.5">
                          <Icon size={17} className="text-brand" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-slate-900 leading-snug mb-0.5">
                            {fi.label}
                          </span>
                          <span className="block text-xs text-slate-500 leading-relaxed">
                            {fi.desc}
                          </span>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </li>
        ))}

        <li>
          <a
            href="#waitlist"
            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-brand hover:bg-brand-50 transition-colors duration-150"
          >
            Pricing
          </a>
        </li>
      </ul>

      {/* Right CTAs */}
      <div className="flex items-center gap-2">
        <a href={process.env.NEXT_PUBLIC_APP_URL ? `${process.env.NEXT_PUBLIC_APP_URL}/login` : "https://franchisli-web.vercel.app/login"} className="hidden sm:block text-sm font-semibold text-slate-500 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors">
          Login
        </a>
        <a
          href="#waitlist"
          className="font-display text-sm font-bold bg-brand text-white px-5 py-2.5 rounded-lg
                     hover:bg-brand-dark transition-all duration-200 shadow-sm hover:shadow-md
                     hover:-translate-y-0.5 active:translate-y-0"
        >
          Request Demo
        </a>
      </div>
    </nav>
  );
}
