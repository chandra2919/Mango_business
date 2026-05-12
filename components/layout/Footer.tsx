import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Heart } from "lucide-react";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl } from "@/lib/utils";

const footerLinks = {
  Explore: [
    { label: "Our Mangoes", href: "#varieties" },
    { label: "Why MangoRoots", href: "#why-us" },
    { label: "Delivery Process", href: "#delivery" },
    { label: "Seasonal Stock", href: "#seasonal" },
    { label: "FAQ", href: "#faq" },
  ],
  Order: [
    { label: "Order via WhatsApp", href: getWhatsAppUrl(BRAND.whatsapp, BRAND.whatsappMessage) },
    { label: "Call Us", href: `tel:${BRAND.phone}` },
    { label: "Weekend Bulk Orders", href: getWhatsAppUrl(BRAND.whatsapp, "Hi! I'd like to place a bulk weekend order.") },
    { label: "Mixed Variety Box", href: getWhatsAppUrl(BRAND.whatsapp, "Hi! Tell me about your mixed variety box.") },
  ],
};

export function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-xl">🥭</span>
              </div>
              <span className="font-display text-xl font-bold">
                Mango<span className="text-amber-400">Roots</span>
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Premium handpicked Indian mango varieties delivered fresh across the USA. Bringing the authentic taste of Indian summers to your door.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: BRAND.social.instagram, label: "Instagram" },
                { icon: Facebook, href: BRAND.social.facebook, label: "Facebook" },
                { icon: Youtube, href: BRAND.social.youtube, label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-amber-500 flex items-center justify-center
                             transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-white mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-stone-400 hover:text-amber-400 text-sm transition-colors duration-200"
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
            <h4 className="font-display font-semibold text-white mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="text-stone-300 hover:text-amber-400 text-sm transition-colors"
                  >
                    {BRAND.phone}
                  </a>
                  <p className="text-stone-500 text-xs mt-0.5">Mon–Sun, 8am–8pm EST</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-stone-300 hover:text-amber-400 text-sm transition-colors"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-stone-300 text-sm">Delivering to</p>
                  <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">
                    CA · TX · NY · NJ · IL · GA · FL · VA · MD · PA
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-stone-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} MangoRoots. All rights reserved.
            </p>
            <p className="text-stone-500 text-sm flex items-center gap-1.5">
              Made with <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> for the Indian community in USA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
