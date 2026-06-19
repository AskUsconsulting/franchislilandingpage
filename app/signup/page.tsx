import Link from "next/link";
import { signUp, signInWithGoogle } from "@/app/actions/auth";

interface Props {
  searchParams: Promise<{ error?: string }>;
}

export default async function SignupPage({ searchParams }: Props) {
  const { error } = await searchParams;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-brand-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 font-display font-black text-2xl tracking-tight text-brand">
            <span className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center text-white text-lg font-black">
              O
            </span>
            Opereva
          </Link>
          <p className="mt-3 text-slate-500 text-sm">Create your account</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8">
          {/* Error */}
          {error && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm">
              {decodeURIComponent(error)}
            </div>
          )}

          {/* Google OAuth */}
          <form action={signInWithGoogle}>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl
                         border-[1.5px] border-slate-200 text-slate-700 font-semibold text-sm
                         hover:bg-slate-50 hover:border-slate-300 transition-all duration-150"
            >
              <GoogleIcon />
              Continue with Google
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-xs text-slate-400 font-medium">or sign up with email</span>
            </div>
          </div>

          {/* Sign up form */}
          <form action={signUp} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                Full Name
              </label>
              <input
                name="full_name"
                type="text"
                required
                autoComplete="name"
                placeholder="Jane Smith"
                className="w-full border-[1.5px] border-slate-200 rounded-xl px-4 py-3 text-[15px]
                           text-slate-900 placeholder:text-slate-400 outline-none
                           focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@yourfranchise.com"
                className="w-full border-[1.5px] border-slate-200 rounded-xl px-4 py-3 text-[15px]
                           text-slate-900 placeholder:text-slate-400 outline-none
                           focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                autoComplete="new-password"
                minLength={8}
                placeholder="At least 8 characters"
                className="w-full border-[1.5px] border-slate-200 rounded-xl px-4 py-3 text-[15px]
                           text-slate-900 placeholder:text-slate-400 outline-none
                           focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full font-display font-bold text-[15px] px-7 py-3.5 rounded-xl
                         bg-brand text-white hover:bg-brand-dark transition-all duration-200
                         shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 mt-2"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 mt-4">
            By signing up you agree to our{" "}
            <a href="#" className="underline hover:text-slate-600">Terms</a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-slate-600">Privacy Policy</a>.
          </p>

          <p className="text-center text-sm text-slate-500 mt-5">
            Already have an account?{" "}
            <Link href="/login" className="text-brand font-semibold hover:text-brand-dark transition-colors">
              Sign in
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          <Link href="/" className="hover:text-slate-600 transition-colors">← Back to homepage</Link>
        </p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z" fill="#4285F4"/>
      <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z" fill="#34A853"/>
      <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
      <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
    </svg>
  );
}
