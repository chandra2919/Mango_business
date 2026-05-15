"use client";

import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl } from "@/lib/utils";

const col1 = [
  { label: "Our Mangoes",     href: "#varieties" },
  { label: "Why MangoRoots",  href: "#why-us"    },
  { label: "How It Works",    href: "#delivery"  },
  { label: "FAQ",             href: "#faq"       },
];
const col2 = [
  { label: "Order via WhatsApp",   href: getWhatsAppUrl(BRAND.whatsapp, BRAND.whatsappMessage)                           },
  { label: "Call to Order",        href: `tel:${BRAND.phone}`                                                           },
  { label: "Bulk / Weekend Order", href: getWhatsAppUrl(BRAND.whatsapp, "Hi! I'd like to place a bulk weekend order.")   },
  { label: "Mixed Variety Box",    href: getWhatsAppUrl(BRAND.whatsapp, "Hi! Tell me about your mixed variety box.")     },
];

export function Footer() {
  return (
    <footer id="contact" style={{ background: "#FAFAF8", borderTop: "1px solid #E8C87A" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🥭</span>
              <span className="font-bold text-base" style={{ fontFamily: "var(--font-poppins)", color: "#111111" }}>
                Mango<span style={{ color: "#15562B" }}>Roots</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#666666" }}>
              Premium handpicked Indian mango varieties delivered fresh across the USA.
              Banginapalli, Alphonso, Rasalu, Kesar, Himayat &amp; Mallika.
            </p>
            <div className="flex items-center gap-2">
              {[
                { Icon: Instagram, href: BRAND.social.instagram },
                { Icon: Facebook,  href: BRAND.social.facebook  },
                { Icon: Youtube,   href: BRAND.social.youtube   },
              ].map(({ Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: "#FFFFFF", color: "#888888", border: "1px solid #EBEBEB" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#FBF3E0"; e.currentTarget.style.color = "#C9973E"; e.currentTarget.style.borderColor = "#E8C87A"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#FFFFFF"; e.currentTarget.style.color = "#888888"; e.currentTarget.style.borderColor = "#EBEBEB"; }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold mb-5" style={{ fontFamily: "var(--font-poppins)", color: "#111111" }}>
              Explore
            </h4>
            <ul className="space-y-3">
              {col1.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    style={{ color: "#666666" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#C9973E")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#666666")}>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" style={{ color: "#C9973E" }}>›</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Order */}
          <div>
            <h4 className="text-sm font-semibold mb-5" style={{ fontFamily: "var(--font-poppins)", color: "#111111" }}>
              Order
            </h4>
            <ul className="space-y-3">
              {col2.map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    style={{ color: "#666666" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#15562B")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#666666")}>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" style={{ color: "#15562B" }}>›</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-5" style={{ fontFamily: "var(--font-poppins)", color: "#111111" }}>
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "#C9973E" }} />
                <div>
                  <a href={`tel:${BRAND.phone}`} className="text-sm transition-colors"
                    style={{ color: "#333333" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#15562B")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#333333")}>
                    {BRAND.phone}
                  </a>
                  <p className="text-xs mt-0.5" style={{ color: "#999999" }}>Mon–Sun, 8am–8pm EST</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 shrink-0" style={{ color: "#C9973E" }} />
                <a href={`mailto:${BRAND.email}`} className="text-sm transition-colors"
                  style={{ color: "#333333" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#15562B")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#333333")}>
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "#C9973E" }} />
                <p className="text-xs leading-relaxed" style={{ color: "#666666" }}>
                  CA · TX · NY · NJ · IL<br />GA · FL · VA · MD · PA
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* Gold divider */}
        <div className="divider-gold my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#999999" }}>
            © {new Date().getFullYear()} MangoRoots. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#999999" }}>
            Made for the Indian community in the USA 🇮🇳 🇺🇸
          </p>
        </div>
      </div>
    </footer>
  );
}
