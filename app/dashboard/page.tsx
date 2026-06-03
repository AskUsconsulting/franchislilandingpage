import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { signOut } from "@/app/actions/auth";
import { LayoutDashboard, LogOut } from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const name = user.user_metadata?.full_name ?? user.email?.split("@")[0] ?? "there";

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm">
        <div className="flex items-center gap-2.5 font-display font-black text-xl tracking-tight text-brand">
          <span className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white text-[15px] font-black">
            F
          </span>
          Franchisli
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-500 hidden sm:block">{user.email}</span>
          <form action={signOut}>
            <button
              type="submit"
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-500
                         hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <LogOut size={15} />
              Sign out
            </button>
          </form>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-6">
          <LayoutDashboard size={28} className="text-brand" />
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          Welcome back, {name} 👋
        </h1>
        <p className="text-slate-500 text-lg max-w-md mx-auto">
          Your Franchisli dashboard is coming soon. We&apos;re putting the finishing touches on your workspace.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { label: "Locations", value: "—" },
            { label: "Open Tasks", value: "—" },
            { label: "Audit Score", value: "—" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
            >
              <p className="text-3xl font-bold text-slate-300">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-slate-400">
          Questions? Email us at{" "}
          <a href="mailto:hello@franchisli.com" className="text-brand font-medium hover:underline">
            hello@franchisli.com
          </a>
        </p>
      </main>
    </div>
  );
}
