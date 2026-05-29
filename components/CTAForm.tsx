"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { joinWaitlist } from "@/app/actions/waitlist";

type Status = "idle" | "loading" | "success" | "error" | "duplicate";

export default function CTAForm() {
  const [status,  setStatus]  = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [email,   setEmail]   = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const result = await joinWaitlist(email);

    if (result.success) {
      setStatus("success");
      setEmail("");
    } else {
      const isDuplicate = result.message.includes("already");
      setStatus(isDuplicate ? "duplicate" : "error");
      setMessage(result.message);
    }

    // Reset after a few seconds so the form is usable again
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  }

  const isLoading = status === "loading";

  return (
    <div className="space-y-3">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading || status === "success"}
          placeholder="you@yourfranchise.com"
          className="flex-1 border-[1.5px] border-slate-200 rounded-xl px-5 py-3.5 text-[15px]
                     text-slate-900 placeholder:text-slate-400 outline-none bg-white
                     focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all
                     disabled:opacity-60 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={isLoading || status === "success"}
          className={`font-display font-bold text-[15px] px-7 py-3.5 rounded-xl whitespace-nowrap
                      flex items-center justify-center gap-2 transition-all duration-200
                      disabled:cursor-not-allowed
                      ${status === "success"
                        ? "bg-green-600 text-white"
                        : "bg-brand text-white hover:bg-brand-dark hover:-translate-y-0.5 shadow-sm hover:shadow-md disabled:opacity-70 disabled:translate-y-0"
                      }`}
        >
          {isLoading && <Loader2 size={15} className="animate-spin" />}
          {status === "success" && <CheckCircle2 size={15} />}
          {status === "success"
            ? "You're on the list!"
            : isLoading
            ? "Submitting..."
            : <> Request Access <ArrowRight size={15} /></>
          }
        </button>
      </form>

      {/* Inline feedback */}
      {(status === "error" || status === "duplicate") && (
        <p className="flex items-center justify-center gap-1.5 text-[13px] font-medium
                      text-center text-amber-700">
          <AlertCircle size={13} />
          {message}
        </p>
      )}
    </div>
  );
}
