import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ background: "linear-gradient(160deg, #FFFDF7 0%, #FFF8E7 60%, #FEF3C7 100%)" }}
    >
      <div className="text-8xl mb-6">🥭</div>
      <h1 className="font-display text-4xl font-bold text-stone-900 mb-4">
        Page Not Found
      </h1>
      <p className="text-stone-500 text-lg mb-8 max-w-sm">
        Looks like this mango fell off the tree. Let&rsquo;s get you back to the orchard.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 text-white
                   font-semibold shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:bg-amber-600
                   transition-all duration-200"
      >
        🏠 Back to Home
      </Link>
    </div>
  );
}
