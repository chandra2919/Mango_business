import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{
        background: "linear-gradient(160deg, #FFFDF7 0%, #FFF8EC 50%, #EAF6EC 100%)",
      }}
    >
      {/* Large decorative 404 */}
      <p
        style={{
          fontFamily: "var(--font-cormorant)",
          fontStyle: "italic",
          fontSize: "clamp(5rem, 18vw, 10rem)",
          fontWeight: 700,
          color: "#F4A300",
          opacity: 0.18,
          lineHeight: 1,
          marginBottom: "-1.5rem",
          userSelect: "none",
        }}
      >
        404
      </p>

      {/* Gold diamond ornament */}
      <span
        style={{
          display: "inline-block",
          width: 12,
          height: 12,
          background: "linear-gradient(135deg, #F4A300, #C9973E)",
          borderRadius: 3,
          transform: "rotate(45deg)",
          marginBottom: "1.5rem",
        }}
      />

      <h1
        style={{
          fontFamily: "var(--font-poppins)",
          fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
          fontWeight: 800,
          color: "#1A1A1A",
          letterSpacing: "-0.02em",
          marginBottom: "0.75rem",
        }}
      >
        Page Not Found
      </h1>

      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "1rem",
          color: "#7A7A7A",
          maxWidth: "360px",
          lineHeight: 1.7,
          marginBottom: "2rem",
        }}
      >
        Looks like this mango rolled off the tree. Let&rsquo;s get you back to the orchard.
      </p>

      <Link
        href="/"
        className="btn btn-green inline-flex items-center gap-2 px-7 py-3"
      >
        Back to Home
      </Link>
    </div>
  );
}
