"use client";

import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Heart } from "lucide-react";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl } from "@/lib/utils";

const footerLinks = {
  Explore: [
    { label: "Our Mangoes",    href: "#varieties" },
    { label: "Why MangoRoots", href: "#why-us" },
    { label: "Delivery Process", href: "#delivery" },
    { label: "Seasonal Stock",  href: "#seasonal" },
    { label: "FAQ",             href: "#faq" },
  ],
  Order: [
    { label: "Order via WhatsApp",   href: getWhatsAppUrl(BRAND.whatsapp, BRAND.whatsappMessage) },
    { label: "Call Us",              href: `tel:${BRAND.phone}` },
    { label: "Weekend Bulk Orders",  href: getWhatsAppUrl(BRAND.whatsapp, "Hi! I'd like a bulk weekend order.") },
    { label: "Mixed Variety Box",    href: getWhatsAppUrl(BRAND.whatsapp, "Hi! Tell me about your mixed variety box.") },
  ],
};

export function Footer() {
  return (
    /* Warm dark brown — softer than pure black */
    <footer id="contact" style={{ background: "#2A1F18", color: "#E8DDD0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #D4922A, #8B5218)" }}
              >
                <span className="text-xl">🥭</span>
              </div>
              <span className="font-display text-xl font-bold" style={{ color: "#F5EBD8" }}>
                Mango<span style={{ color: "#D4922A" }}>Roots</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#A89888" }}>
              Premium handpicked Indian mango varieties delivered fresh across the USA.
              Bringing authentic Indian summers to your door.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: BRAND.social.instagram, label: "Instagram" },
                { icon: Facebook,  href: BRAND.social.facebook,  label: "Facebook" },
                { icon: Youtube,   href: BRAND.social.youtube,   label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#B8732A")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold mb-5" style={{ color: "#F5EBD8" }}>{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#A89888" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#D4922A")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#A89888")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-5" style={{ color: "#F5EBD8" }}>Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#D4922A" }} />
                <div>
                  <a href={`tel:${BRAND.phone}`} className="text-sm transition-colors" style={{ color: "#C8B8A8" }}>
                    {BRAND.phone}
                  </a>
                  <p className="text-xs mt-0.5" style={{ color: "#7A6A60" }}>Mon–Sun, 8am–8pm EST</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#D4922A" }} />
                <a href={`mailto:${BRAND.email}`} className="text-sm transition-colors" style={{ color: "#C8B8A8" }}>
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#D4922A" }} />
                <div>
                  <p className="text-sm" style={{ color: "#C8B8A8" }}>Delivering to</p>
                  <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "#7A6A60" }}>
                    CA · TX · NY · NJ · IL · GA · FL · VA · MD · PA
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center sm:text-left" style={{ color: "#7A6A60" }}>
              © {new Date().getFullYear()} MangoRoots. All rights reserved.
            </p>
            <p className="text-sm flex items-center gap-1.5" style={{ color: "#7A6A60" }}>
              Made with <Heart className="w-3.5 h-3.5" style={{ fill: "#D4922A", color: "#D4922A" }} /> for the Indian community in USA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
