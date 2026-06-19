import Nav from "@/components/Nav";
import CTAForm from "@/components/CTAForm";
import {
  ClipboardList,
  ClipboardCheck,
  MessageSquare,
  FileText,
  GraduationCap,
  BarChart2,
  Building2,
  Map,
  Zap,
  Smartphone,
  Lock,
  Download,
  ShieldCheck,
  Bell,
  ArrowRight,
  CheckCircle2,
  Star,
  Car,
  UtensilsCrossed,
  ShoppingBag,
  Store,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Data                                                                        */
/* ─────────────────────────────────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: ClipboardList,
    title: "Operations & Checklists",
    desc: "Daily opening and closing checklists, shift handover notes, and task management — so every shift runs to the same standard, every time.",
    pills: ["Opening & Closing", "Shift Handovers", "Task Tracking"],
  },
  {
    icon: ClipboardCheck,
    title: "Audits & Inspections",
    desc: "Schedule or surprise-audit any location. Score, grade, and track findings in real time — then assign corrective actions and close the loop fast.",
    pills: ["Scheduled & Surprise", "Findings Tracking", "Score Trends"],
  },
  {
    icon: MessageSquare,
    title: "Communications",
    desc: "Broadcast urgent announcements to the whole network or message a single location directly. Read receipts keep everyone accountable.",
    pills: ["HQ Announcements", "Direct Messaging", "Bulletin Board"],
  },
  {
    icon: FileText,
    title: "Documents & SOPs",
    desc: "A searchable library for all your SOPs, brand standards, and policies. Track who has acknowledged what — and flag who hasn't.",
    pills: ["SOP Library", "Brand Standards", "Policy Acknowledgments"],
  },
  {
    icon: GraduationCap,
    title: "Training & Compliance",
    desc: "Track completion rates across every module, every employee, and every location. Know instantly who's certified and who's at risk.",
    pills: ["Training Modules", "Completion Rates", "Compliance Dashboards"],
  },
  {
    icon: BarChart2,
    title: "Reporting & Analytics",
    desc: "Location rankings, training matrices, and exportable CSV and PDF reports. The data you need to decide, not to wrangle spreadsheets.",
    pills: ["Location Rankings", "CSV & PDF Export", "Training Matrix"],
  },
];

const BUILT_FOR = [
  { icon: Building2, title: "Multi-location",     desc: "Manage any number of locations from one hub"               },
  { icon: Map,        title: "Region Groups",      desc: "Organize locations into regions for targeted oversight"    },
  { icon: Zap,        title: "Real-time Data",     desc: "Live updates across all locations — no stale reports"     },
  { icon: Smartphone, title: "Mobile-ready",       desc: "Works on any device for on-the-floor teams and managers"  },
  { icon: Lock,       title: "Role-based Access",  desc: "HQ, franchisee, and manager permission levels built in"   },
  { icon: Download,   title: "Exportable Reports", desc: "Download any report as CSV or PDF, whenever you need it"  },
  { icon: ShieldCheck,title: "Compliance Tracking",desc: "Policy acknowledgments and training records in one place" },
  { icon: Bell,       title: "Smart Alerts",       desc: "Instant notifications for critical findings and deadlines" },
];

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Section helpers                                                             */
/* ─────────────────────────────────────────────────────────────────────────── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-[0.12em] uppercase text-brand mb-3">
      {children}
    </p>
  );
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-display font-black tracking-tight text-slate-900 ${className}`}>
      {children}
    </h2>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[15px] text-slate-700 leading-snug">
      <span className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0 mt-0.5">
        <CheckCircle2 size={12} className="text-brand" />
      </span>
      {children}
    </li>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Hero dashboard mockup                                                       */
/* ─────────────────────────────────────────────────────────────────────────── */

function DashboardMockup() {
  const sidebarIcons = [
    { Icon: ClipboardList, active: true  },
    { Icon: ClipboardCheck              },
    { Icon: MessageSquare               },
    { Icon: FileText                    },
    { Icon: GraduationCap               },
    { Icon: BarChart2                   },
    { Icon: Map                         },
  ];

  const scores = [
    { name: "Downtown ATL", pct: 97, color: "#2c4fa3", grade: "A", gClass: "bg-green-100 text-green-700"  },
    { name: "Marietta",     pct: 95, color: "#2c4fa3", grade: "A", gClass: "bg-green-100 text-green-700"  },
    { name: "Buckhead",     pct: 91, color: "#2c4fa3", grade: "A", gClass: "bg-green-100 text-green-700"  },
    { name: "Midtown",      pct: 88, color: "#f59e0b", grade: "B", gClass: "bg-yellow-100 text-yellow-700"},
    { name: "Decatur",      pct: 74, color: "#dc2626", grade: "C", gClass: "bg-red-100 text-red-700"      },
  ];

  const findings = [
    { level: "crit", loc: "Decatur",  text: "Food temp log not maintained"   },
    { level: "crit", loc: "Decatur",  text: "Handwashing station unstocked"  },
    { level: "maj",  loc: "Decatur",  text: "Grease buildup under fryers"    },
    { level: "min",  loc: "Buckhead", text: "Exterior signage lighting out"  },
    { level: "min",  loc: "Midtown",  text: "Menu board not updated"         },
  ];

  const dotColor = { crit: "bg-red-500", maj: "bg-amber-400", min: "bg-brand-400" } as const;

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* glow */}
      <div className="absolute -inset-x-10 -top-6 -bottom-10 bg-brand-400/20 rounded-[40px] blur-3xl pointer-events-none" />

      <div className="relative bg-white rounded-2xl border border-white/10
                      shadow-[0_40px_100px_rgba(0,0,0,.5)] overflow-hidden ring-1 ring-white/10">
        {/* Browser chrome */}
        <div className="bg-brand px-5 py-2.5 flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="bg-white/15 rounded-md px-4 py-1 text-[11px] text-white/75 font-mono tracking-tight">
            app.opereva.com/dashboard
          </div>
          <div className="w-14" />
        </div>

        {/* Body */}
        <div className="flex h-[400px] sm:h-[420px]">
          {/* Sidebar */}
          <div className="w-12 bg-brand-dark flex flex-col items-center py-3 gap-1 flex-shrink-0">
            {sidebarIcons.map(({ Icon, active }, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors
                  ${active ? "bg-white/20" : "hover:bg-white/10"}`}
              >
                <Icon size={14} className="text-white/70" />
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 bg-slate-50 p-4 overflow-hidden min-w-0">
            {/* Header row */}
            <div className="flex items-center justify-between mb-3">
              <p className="font-display font-bold text-[15px] text-slate-900">Network Overview</p>
              <p className="text-[11px] text-slate-400">May 28, 2026</p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              {[
                { label: "Avg Audit Score",  val: "89%",  cls: "text-slate-900" },
                { label: "Active Locations", val: "6",    cls: "text-slate-900" },
                { label: "Training Rate",    val: "78%",  cls: "text-green-600" },
                { label: "Open Findings",    val: "7",    cls: "text-accent"    },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-slate-100 rounded-lg p-2.5">
                  <p className="text-[9px] text-slate-400 font-medium mb-1">{s.label}</p>
                  <p className={`font-display font-black text-xl leading-none ${s.cls}`}>{s.val}</p>
                </div>
              ))}
            </div>

            {/* Two columns */}
            <div className="grid grid-cols-2 gap-2">
              {/* Scores */}
              <div className="bg-white border border-slate-100 rounded-lg p-3">
                <p className="text-[10px] font-bold text-slate-900 mb-2">Location Scores</p>
                {scores.map((s) => (
                  <div key={s.name} className="flex items-center gap-1.5 mb-1.5">
                    <p className="text-[9.5px] text-slate-400 w-[72px] flex-shrink-0 truncate">{s.name}</p>
                    <div className="flex-1 h-[5px] bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                    </div>
                    <p className="text-[9.5px] font-bold text-slate-700 w-6 text-right">{s.pct}%</p>
                    <span className={`text-[8px] font-black px-1.5 py-0.5 rounded ${s.gClass}`}>{s.grade}</span>
                  </div>
                ))}
              </div>

              {/* Findings */}
              <div className="bg-white border border-slate-100 rounded-lg p-3">
                <p className="text-[10px] font-bold text-slate-900 mb-2">Recent Findings</p>
                {findings.map((f, i) => (
                  <div key={i} className="flex items-start gap-1.5 mb-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${dotColor[f.level as keyof typeof dotColor]}`} />
                    <p className="text-[10px] text-slate-500 leading-tight">
                      <span className="font-semibold text-slate-700">{f.loc}</span> — {f.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Spotlight mockups                                                           */
/* ─────────────────────────────────────────────────────────────────────────── */

function MockupShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-[0_16px_48px_rgba(15,23,42,.10)] overflow-hidden">
      <div className="bg-brand px-4 py-2.5 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-white/30" />
        <p className="font-display font-bold text-[12.5px] text-white ml-1">{title}</p>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function AuditMockup() {
  const rows = [
    { name: "Downtown Atlanta", date: "May 21, 2026 · Scheduled", pct: 97, grade: "A", bad: false },
    { name: "Marietta",         date: "May 8, 2026 · Scheduled",  pct: 95, grade: "A", bad: false },
    { name: "Decatur",          date: "May 15, 2026 · Surprise",  pct: 74, grade: "C", bad: true  },
  ];
  return (
    <MockupShell title="Audits — Location Scores">
      <div className="space-y-2.5">
        {rows.map((r) => (
          <div
            key={r.name}
            className={`rounded-xl p-3 border ${r.bad ? "bg-red-50 border-red-100" : "bg-slate-50 border-slate-100"}`}
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-[13px] font-bold text-slate-900">{r.name}</p>
              <p className="text-[11px] text-slate-400">{r.date}</p>
            </div>
            <div className="flex items-center gap-2.5">
              <p className={`font-display font-black text-2xl leading-none ${r.bad ? "text-red-600" : "text-brand"}`}>
                {r.pct}%
              </p>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${r.bad ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                {r.grade}
              </span>
              <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${r.pct}%`, background: r.bad ? "#dc2626" : "#2c4fa3" }}
                />
              </div>
            </div>
            {r.bad && (
              <div className="mt-2 inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-orange-700 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                <ShieldCheck size={11} />
                2 Critical Findings — Action Required
              </div>
            )}
          </div>
        ))}
      </div>
    </MockupShell>
  );
}

function CommsMockup() {
  return (
    <MockupShell title="Messages">
      <div className="space-y-1 mb-3 pb-3 border-b border-slate-100">
        {[
          { initial: "D", label: "Decatur",  subject: "Critical Findings — Decatur",    preview: "Please schedule a deep clean...", active: true,  color: "bg-orange-100 text-orange-600" },
          { initial: "B", label: "Buckhead", subject: "Summer Menu Prep Questions",      preview: "Peach syrup is backordered...",    active: false, color: "bg-brand-100 text-brand"      },
          { initial: "M", label: "Marietta", subject: "Equipment Maintenance — Fryer",   preview: "Tech arriving Thursday 9am",      active: false, color: "bg-green-100 text-green-700"   },
        ].map((t) => (
          <div key={t.label} className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg ${t.active ? "bg-brand-50" : ""}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 ${t.color}`}>
              {t.initial}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-slate-900 truncate">{t.subject}</p>
              <p className="text-[11px] text-slate-400 truncate">{t.preview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="ml-auto max-w-[82%] bg-brand text-white text-[11px] leading-relaxed px-3 py-2 rounded-xl rounded-br-sm">
          <p className="text-white/60 text-[10px] font-bold mb-1">HQ</p>
          Please also schedule a deep clean for all kitchen equipment by end of week.
        </div>
        <div className="max-w-[82%] bg-slate-50 border border-slate-100 text-slate-800 text-[11px] leading-relaxed px-3 py-2 rounded-xl rounded-bl-sm">
          <p className="text-slate-400 text-[10px] font-bold mb-1">Decatur Manager</p>
          Understood. We&apos;ve restocked the handwashing stations and ordered new temp log sheets.
        </div>
      </div>
    </MockupShell>
  );
}

function TrainingMockup() {
  const modules = [
    "Food Safety",
    "Brand Standards",
    "Opening & Closing",
    "Customer Service",
    "Emergency Response",
  ];
  const locations = ["DT", "BH", "MT", "DC", "MR", "SM"];
  const grid = [
    [true,  true,  true,  false, true,  true ],
    [true,  true,  true,  true,  true,  true ],
    [true,  true,  true,  true,  true,  true ],
    [true,  true,  false, false, true,  false],
    [true,  false, true,  false, true,  false],
  ];
  const pills = [
    { label: "Downtown 100%", cls: "bg-green-100 text-green-700" },
    { label: "Marietta 100%", cls: "bg-green-100 text-green-700" },
    { label: "Buckhead 80%",  cls: "bg-yellow-100 text-yellow-700" },
    { label: "Midtown 60%",   cls: "bg-yellow-100 text-yellow-700" },
    { label: "Decatur 40%",   cls: "bg-red-100 text-red-700" },
  ];

  return (
    <MockupShell title="Training Completion Matrix">
      <div className="overflow-x-auto">
        <table className="w-full text-[11px] border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="text-left px-2.5 py-2 text-[10px] font-bold text-slate-500">Module</th>
              {locations.map((l) => (
                <th key={l} className="text-center px-2 py-2 text-[10px] font-bold text-slate-500">{l}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {modules.map((mod, mi) => (
              <tr key={mod} className="border-b border-slate-50">
                <td className="px-2.5 py-2 font-semibold text-slate-800">{mod}</td>
                {grid[mi].map((done, li) => (
                  <td key={li} className="text-center px-2 py-2">
                    {done
                      ? <span className="text-green-600 font-bold text-[13px]">&#10003;</span>
                      : <span className="text-red-500 font-bold text-[13px]">&#10007;</span>
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {pills.map((p) => (
          <span key={p.label} className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${p.cls}`}>
            {p.label}
          </span>
        ))}
      </div>
    </MockupShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Page                                                                        */
/* ─────────────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── Hero (dark) ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden hero-dark px-[6%] pt-20 pb-24 text-center">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        <div className="relative">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur
                       text-white/90 text-[13px] font-semibold px-4 py-1.5 rounded-full mb-8
                       hover:bg-white/15 transition-colors animate-float-up"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Now in early access — reserve your spot
            <ArrowRight size={13} />
          </a>

          <h1 className="font-display font-black tracking-tight text-white text-5xl sm:text-6xl lg:text-[80px] leading-[1.02] max-w-[920px] mx-auto mb-7 animate-float-up">
            Every location,{" "}
            <span className="bg-gradient-to-r from-[#7ea2e8] to-[#a9c2f4] bg-clip-text text-transparent">
              run like your best one.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/65 max-w-[600px] mx-auto mb-10 leading-relaxed animate-float-up">
            The operations platform for car washes, restaurants, and franchises —
            audits, checklists, training, and team comms in one clean dashboard.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap mb-8 animate-float-up">
            <a
              href="#waitlist"
              className="font-display font-bold text-base bg-white text-[#0d1a3a] px-7 py-4 rounded-xl
                         shadow-[0_8px_30px_rgba(0,0,0,.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,0,0,.3)]
                         transition-all duration-200 flex items-center gap-2"
            >
              Request a Demo <ArrowRight size={16} />
            </a>
            <a
              href="#features"
              className="font-semibold text-base text-white bg-white/5 border border-white/20
                         px-7 py-4 rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              See how it works
            </a>
          </div>

          {/* Rating / trust badge */}
          <div className="flex items-center justify-center gap-2.5 mb-16 animate-float-up">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm text-white/55">
              <span className="font-bold text-white/85">4.9/5</span> from multi-unit operators
            </p>
          </div>

          <DashboardMockup />
        </div>
      </section>

      {/* ── Industries strip ──────────────────────────────────────────── */}
      <section className="border-b border-slate-200 py-12 px-[6%] text-center bg-white">
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-400 mb-7">
          One platform for every kind of multi-location business
        </p>
        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap max-w-[820px] mx-auto">
          {[
            { icon: Car,              label: "Car Washes" },
            { icon: UtensilsCrossed,  label: "Restaurants" },
            { icon: Store,            label: "Franchises" },
            { icon: ShoppingBag,      label: "Retail Chains" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-full px-5 py-2.5
                         hover:border-brand-200 hover:bg-brand-50/40 transition-colors"
            >
              <Icon size={17} className="text-brand" />
              <span className="font-display font-bold text-[14px] text-slate-700">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Problem ───────────────────────────────────────────────────── */}
      <section className="py-28 px-[6%] text-center bg-white">
        <Eyebrow>The Problem</Eyebrow>
        <SectionTitle className="text-[clamp(28px,4vw,46px)] mb-4">
          Running multiple locations<br className="hidden sm:block" /> shouldn&apos;t feel like this.
        </SectionTitle>
        <p className="text-[17px] text-slate-500 max-w-[560px] mx-auto mb-14 leading-relaxed">
          Scattered spreadsheets, disconnected tools, and zero visibility across
          sites. Your team spends more time coordinating than executing.
        </p>

        <div className="grid sm:grid-cols-3 gap-5 max-w-[1040px] mx-auto">
          {[
            {
              title: "Disconnected tools, everywhere",
              desc:  "Email for updates, spreadsheets for compliance, texting for handovers. More coordination than execution.",
            },
            {
              title: "No visibility until something breaks",
              desc:  "You find out about compliance failures after the fact — when a customer complains or a fine is issued.",
            },
            {
              title: "Inconsistent standards across locations",
              desc:  "Every location runs a little differently. Staff turnover makes it worse. Without a single source of truth, brand consistency suffers.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-left hover:shadow-md transition-shadow"
            >
              <h3 className="font-display font-bold text-[17px] text-slate-900 mb-3">{c.title}</h3>
              <p className="text-[14.5px] text-slate-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features grid ─────────────────────────────────────────────── */}
      <section id="features" className="py-28 px-[6%] bg-slate-50">
        <div className="text-center mb-14">
          <Eyebrow>The Platform</Eyebrow>
          <SectionTitle className="text-[clamp(28px,4vw,46px)] mb-4">
            Everything your team needs,<br className="hidden sm:block" /> in one place.
          </SectionTitle>
          <p className="text-[17px] text-slate-500 max-w-[560px] mx-auto leading-relaxed">
            Six purpose-built modules that keep every location operating at the
            same high standard — without the tool sprawl.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group bg-white border border-slate-200 rounded-2xl p-7 transition-all duration-200
                           hover:border-brand-100 hover:shadow-[0_8px_28px_rgba(44,79,163,.09)] hover:-translate-y-0.5
                           relative overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand to-brand-400
                               scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                  <Icon size={22} className="text-brand" />
                </div>

                <h3 className="font-display font-bold text-[16.5px] text-slate-900 mb-2.5">{f.title}</h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed mb-4">{f.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {f.pills.map((p) => (
                    <span key={p} className="bg-brand-50 text-brand text-[11.5px] font-semibold px-2.5 py-0.5 rounded-full">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Spotlight 1: Audits ───────────────────────────────────────── */}
      <section className="py-28 px-[6%] bg-white">
        <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <Eyebrow>Audits & Inspections</Eyebrow>
            <SectionTitle className="text-[clamp(24px,3vw,40px)] mb-5">
              Know exactly how every location is performing.
            </SectionTitle>
            <p className="text-[15.5px] text-slate-500 leading-[1.8] mb-6">
              Run scheduled or surprise audits from anywhere. Every checklist item is
              scored, every finding is tracked, and every corrective action is assigned
              — with a full audit trail behind it.
            </p>
            <ul className="space-y-3 mb-8">
              <CheckItem>Score and grade every location automatically by section</CheckItem>
              <CheckItem>Flag critical, major, and minor findings in real time</CheckItem>
              <CheckItem>Assign corrective actions and track resolution to close</CheckItem>
              <CheckItem>View score trends and compare locations side by side</CheckItem>
            </ul>
            <a href="#waitlist" className="inline-flex items-center gap-2 text-[14px] font-bold text-brand bg-brand-50 border border-brand-100 px-5 py-3 rounded-xl hover:bg-brand-100 transition-colors">
              See Audits in action <ArrowRight size={14} />
            </a>
          </div>
          <AuditMockup />
        </div>
      </section>

      {/* ── Spotlight 2: Communications ───────────────────────────────── */}
      <section className="py-28 px-[6%] bg-slate-50">
        <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* Mockup first on desktop (reversed) */}
          <div className="order-2 lg:order-1">
            <CommsMockup />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Communications</Eyebrow>
            <SectionTitle className="text-[clamp(24px,3vw,40px)] mb-5">
              HQ and your locations, always in sync.
            </SectionTitle>
            <p className="text-[15.5px] text-slate-500 leading-[1.8] mb-6">
              Broadcast urgent announcements to every location or open a direct
              message thread with any store. Read receipts mean you always know
              who&apos;s seen what — no more chasing managers over email.
            </p>
            <ul className="space-y-3 mb-8">
              <CheckItem>Urgent and standard announcements to the whole network</CheckItem>
              <CheckItem>Direct two-way messaging between HQ and any location</CheckItem>
              <CheckItem>Read receipts so you know who has seen every message</CheckItem>
              <CheckItem>Bulletin board for news, alerts, and team celebrations</CheckItem>
            </ul>
            <a href="#waitlist" className="inline-flex items-center gap-2 text-[14px] font-bold text-brand bg-brand-50 border border-brand-100 px-5 py-3 rounded-xl hover:bg-brand-100 transition-colors">
              See Communications <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Spotlight 3: Training ─────────────────────────────────────── */}
      <section className="py-28 px-[6%] bg-white">
        <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <Eyebrow>Training & Compliance</Eyebrow>
            <SectionTitle className="text-[clamp(24px,3vw,40px)] mb-5">
              Know who&apos;s trained and who needs attention.
            </SectionTitle>
            <p className="text-[15.5px] text-slate-500 leading-[1.8] mb-6">
              Track completion rates across every training module and every location
              in a single matrix. Spot gaps before they become compliance issues —
              and before the auditor does.
            </p>
            <ul className="space-y-3 mb-8">
              <CheckItem>Module-by-location completion matrix at a glance</CheckItem>
              <CheckItem>Quiz scores and completion dates per employee</CheckItem>
              <CheckItem>Required vs. optional module tracking</CheckItem>
              <CheckItem>Exportable training and compliance reports</CheckItem>
            </ul>
            <a href="#waitlist" className="inline-flex items-center gap-2 text-[14px] font-bold text-brand bg-brand-50 border border-brand-100 px-5 py-3 rounded-xl hover:bg-brand-100 transition-colors">
              See Training <ArrowRight size={14} />
            </a>
          </div>
          <TrainingMockup />
        </div>
      </section>

      {/* ── Built-for band ────────────────────────────────────────────── */}
      <section className="py-28 px-[6%] bg-brand text-center">
        <Eyebrow>
          <span className="text-white/50">Purpose-Built</span>
        </Eyebrow>
        <SectionTitle className="text-[clamp(28px,4vw,46px)] text-white mb-4">
          Built for how multi-location teams actually operate.
        </SectionTitle>
        <p className="text-[17px] text-white/60 max-w-[540px] mx-auto mb-14 leading-relaxed">
          Every feature was designed around the real workflows of operators
          running car washes, restaurants, and franchise networks — not bolted on
          as an afterthought.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[1020px] mx-auto">
          {BUILT_FOR.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="bg-white/10 border border-white/15 rounded-2xl p-5 text-left
                           hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center mb-3">
                  <Icon size={17} className="text-white" />
                </div>
                <h4 className="font-display font-bold text-[14px] text-white mb-1">{b.title}</h4>
                <p className="text-[12.5px] text-white/55 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Testimonial ───────────────────────────────────────────────── */}
      <section className="py-28 px-[6%] bg-white">
        <div className="max-w-[760px] mx-auto text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <blockquote className="font-display font-bold text-slate-900 text-[clamp(22px,2.6vw,32px)] leading-snug tracking-tight mb-8">
            &ldquo;Before Opereva, every location ran a little differently and we
            found out about problems too late. Now I can see exactly how every site
            is performing from my phone — and my managers actually know what&apos;s
            expected.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-11 h-11 rounded-full bg-brand flex items-center justify-center text-white font-display font-black text-sm">
              MR
            </div>
            <div className="text-left">
              <p className="font-bold text-slate-900 text-[15px] leading-tight">Marcus Reed</p>
              <p className="text-[13px] text-slate-500">Multi-unit Operator · 9 locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA (dark) ────────────────────────────────────────────────── */}
      <section id="waitlist" className="relative overflow-hidden hero-dark py-28 px-[6%] text-center">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <div className="relative max-w-[680px] mx-auto">
          <h2 className="font-display font-black tracking-tight text-[clamp(28px,4vw,52px)] text-white mb-5 leading-[1.05]">
            Bring every location{" "}
            <span className="bg-gradient-to-r from-[#7ea2e8] to-[#a9c2f4] bg-clip-text text-transparent">
              into one place.
            </span>
          </h2>
          <p className="text-[17px] text-white/65 leading-relaxed mb-9 max-w-[520px] mx-auto">
            Join the early access list and be among the first operators to run on
            Opereva. We&apos;ll reach out to set up a personalized demo.
          </p>
          <div className="bg-white/5 border border-white/15 backdrop-blur rounded-2xl p-8 max-w-[540px] mx-auto">
            <CTAForm />
          </div>
          <p className="text-[12.5px] text-white/45 mt-5">
            No commitment required. We&apos;ll be in touch within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="bg-[#080f1e] text-white px-[6%] pt-16 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-14">
          {/* Brand col */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5 font-display font-black text-[19px] tracking-tight mb-4">
              <span className="w-8 h-8 rounded-lg bg-white/12 flex items-center justify-center text-[14px] font-black">O</span>
              Opereva
            </div>
            <p className="text-[13.5px] text-white/40 leading-relaxed max-w-[240px]">
              The franchise management platform that keeps every location aligned —
              operations, audits, training, and communications in one place.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/30 mb-4">Platform</h4>
            <ul className="space-y-2.5 text-[13.5px] text-white/55">
              {["Operations", "Audits & Inspections", "Communications", "Documents & SOPs", "Training", "Reporting"].map((l) => (
                <li key={l}><a href="#features" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/30 mb-4">Company</h4>
            <ul className="space-y-2.5 text-[13.5px] text-white/55">
              {["About", "Blog", "Careers", "Contact"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/30 mb-4">Legal</h4>
            <ul className="space-y-2.5 text-[13.5px] text-white/55">
              {["Privacy Policy", "Terms of Service", "Security"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12.5px] text-white/25">© 2026 Opereva. All rights reserved.</p>
          <div className="flex gap-6 text-[12.5px] text-white/25">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/60 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
