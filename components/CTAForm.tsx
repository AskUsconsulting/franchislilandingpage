"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, X } from "lucide-react";
import { joinWaitlist } from "@/app/actions/waitlist";

type Status = "idle" | "loading" | "success" | "error" | "duplicate";

const LOCATION_OPTIONS = ["1", "2–5", "6–10", "11–25", "26–50", "51+"];

export default function CTAForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    business_name: "",
    locations_count: "",
    email: "",
    phone: "",
  });

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.locations_count) {
      setStatus("error");
      setMessage("Please select number of locations.");
      return;
    }
    setStatus("loading");

    const locMap: Record<string, number> = {
      "1": 1, "2–5": 3, "6–10": 8, "11–25": 18, "26–50": 38, "51+": 60,
    };

    const result = await joinWaitlist({
      full_name: form.full_name,
      business_name: form.business_name,
      locations_count: locMap[form.locations_count] ?? 1,
      email: form.email,
      phone: form.phone || undefined,
    });

    if (result.success) {
      setStatus("success");
    } else {
      const isDuplicate = result.message.includes("already");
      setStatus(isDuplicate ? "duplicate" : "error");
      setMessage(result.message);
    }
  }

  const isLoading = status === "loading";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 size={24} className="text-green-600" />
        </div>
        <p className="text-lg font-semibold text-slate-900">You&apos;re on the list!</p>
        <p className="text-sm text-slate-500 text-center max-w-xs">
          We&apos;ll be in touch soon to schedule your demo. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setShowModal(true)}
        className="font-display font-bold text-[15px] px-8 py-3.5 rounded-xl
                   bg-brand text-white hover:bg-brand-dark hover:-translate-y-0.5
                   shadow-sm hover:shadow-md transition-all duration-200 active:translate-y-0
                   flex items-center gap-2 mx-auto"
      >
        Request a Demo <ArrowRight size={15} />
      </button>

      {/* Modal overlay */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900">Request a Demo</h2>
              <p className="text-sm text-slate-500 mt-1">
                Tell us about your franchise and we&apos;ll be in touch within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full name */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                  Full Name <span className="text-brand">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={form.full_name}
                  onChange={(e) => set("full_name", e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full border-[1.5px] border-slate-200 rounded-xl px-4 py-3 text-[15px]
                             text-slate-900 placeholder:text-slate-400 outline-none
                             focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                />
              </div>

              {/* Business name */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                  Business / Franchise Name <span className="text-brand">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={form.business_name}
                  onChange={(e) => set("business_name", e.target.value)}
                  placeholder="Sunrise Franchise Group"
                  className="w-full border-[1.5px] border-slate-200 rounded-xl px-4 py-3 text-[15px]
                             text-slate-900 placeholder:text-slate-400 outline-none
                             focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                />
              </div>

              {/* # of locations */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                  Number of Locations <span className="text-brand">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {LOCATION_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => set("locations_count", opt)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold border-[1.5px] transition-all duration-150
                        ${form.locations_count === opt
                          ? "bg-brand text-white border-brand"
                          : "bg-white text-slate-600 border-slate-200 hover:border-brand hover:text-brand"
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                  Work Email <span className="text-brand">*</span>
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="jane@yourfranchise.com"
                  className="w-full border-[1.5px] border-slate-200 rounded-xl px-4 py-3 text-[15px]
                             text-slate-900 placeholder:text-slate-400 outline-none
                             focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                />
              </div>

              {/* Phone (optional) */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                  Phone <span className="text-slate-400 font-normal normal-case">(optional)</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full border-[1.5px] border-slate-200 rounded-xl px-4 py-3 text-[15px]
                             text-slate-900 placeholder:text-slate-400 outline-none
                             focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                />
              </div>

              {/* Error */}
              {(status === "error" || status === "duplicate") && (
                <p className="flex items-center gap-1.5 text-[13px] font-medium text-amber-700">
                  <AlertCircle size={13} />
                  {message}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full font-display font-bold text-[15px] px-7 py-3.5 rounded-xl
                           bg-brand text-white hover:bg-brand-dark transition-all duration-200
                           shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0
                           disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0
                           flex items-center justify-center gap-2 mt-2"
              >
                {isLoading ? (
                  <><Loader2 size={15} className="animate-spin" /> Submitting...</>
                ) : (
                  <>Request Demo <ArrowRight size={15} /></>
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                No spam. We&apos;ll only reach out to schedule your demo.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
