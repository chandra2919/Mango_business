"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle, ChevronDown } from "lucide-react";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl } from "@/lib/utils";

/* ── Types ───────────────────────────────────────────── */
interface Message {
  id: string;
  from: "bot" | "user";
  text: string;
  time: Date;
  chips?: string[];   // quick-reply chips shown below a bot message
  link?: { label: string; href: string; external?: boolean };
}

/* ── Knowledge base ──────────────────────────────────── */
const WHATSAPP_CTA = {
  label: "Chat on WhatsApp",
  href: getWhatsAppUrl(
    BRAND.whatsapp,
    "Hi MangoRoots! I have a question about your mangoes."
  ),
  external: true,
};

const CALL_CTA = {
  label: `Call ${BRAND.phone}`,
  href: `tel:${BRAND.phone}`,
  external: false,
};

type BotReply = {
  text: string;
  chips?: string[];
  link?: { label: string; href: string; external?: boolean };
};

function getBotReply(input: string): BotReply {
  const q = input.toLowerCase().trim();

  /* ── Greetings ── */
  if (/^(hi|hello|hey|good\s?(morning|evening|afternoon)|namaste|hola)/.test(q)) {
    return {
      text: "Hello! Welcome to MangoRoots 🌿\nHow can I help you today? Pick a topic below or type your question.",
      chips: ["How to order?", "Mango varieties", "Delivery info", "Season & pricing", "Bulk orders"],
    };
  }

  /* ── Order / how to buy ── */
  if (/(how|where|want|place|buy|order|purchase|get|shop)/.test(q) && /(order|buy|purchase|get|mango)/.test(q)) {
    return {
      text: "Ordering is easy!\n\n1️⃣ Message us on WhatsApp with the variety you want\n2️⃣ We confirm stock & share pricing\n3️⃣ Pay & we ship air-freight to your door\n\nNo minimum order — families & individuals welcome!",
      chips: ["Mango varieties", "Delivery info", "Pricing"],
      link: WHATSAPP_CTA,
    };
  }

  /* ── Varieties ── */
  if (/(variet|type|kind|which mango|available|alphonso|banginapalli|rasalu|kesar|himayat|mallika)/.test(q)) {
    return {
      text: "We carry 6 premium Indian varieties this season:\n\n• Banginapalli — sweet & fibrous, Andhra classic\n• Alphonso — king of mangoes, creamy richness\n• Rasalu — ultra-juicy, South Indian favourite\n• Kesar — saffron-hued, Gujarat's finest\n• Himayat — large & syrupy, rare Hyderabadi gem\n• Mallika — aromatic hybrid, melt-in-mouth texture\n\nAll handpicked at peak ripeness.",
      chips: ["How to order?", "Season dates", "Pricing"],
    };
  }

  /* ── Season / availability ── */
  if (/(season|when|avail|month|time|year|period|may|june|july|august|2025|expire|last|end)/.test(q)) {
    return {
      text: "Our season runs May – August 2025.\n\nFresh stock arrives every week from Indian orchards via air freight. Weekend batches of 600–800 mangoes sell out fast — pre-ordering early is strongly recommended!",
      chips: ["How to order?", "Mango varieties", "Delivery info"],
      link: WHATSAPP_CTA,
    };
  }

  /* ── Delivery ── */
  if (/(deliver|ship|shipping|days|fast|quick|arrive|arrival|how long|transit|fedex|ups|freight)/.test(q)) {
    return {
      text: "We ship via air freight — delivery in 2–4 business days after dispatch.\n\nCurrently delivering to:\nCA · TX · NY · NJ · IL · GA · FL · VA · MD · PA\n\nAll orders are packed with care to preserve freshness during transit.",
      chips: ["States we deliver to", "How to order?", "Pricing"],
    };
  }

  /* ── States ── */
  if (/(state|location|area|city|where|region|cover|service|zip)/.test(q)) {
    return {
      text: `We currently deliver to 10+ US states:\n\n${BRAND.deliveryStates.join(" · ")}\n\nNot on the list? Message us — we're expanding and may still be able to help!`,
      chips: ["How to order?", "Delivery info"],
      link: WHATSAPP_CTA,
    };
  }

  /* ── Price / cost ── */
  if (/(price|cost|how much|rate|charge|fee|dollar|\$|expensive|cheap|afford|pricing|pay)/.test(q)) {
    return {
      text: "Pricing varies by variety, quantity, and your delivery location.\n\nWe keep pricing transparent — message us on WhatsApp and we'll send you a detailed price list for this week's stock.",
      chips: ["How to order?", "Mango varieties"],
      link: WHATSAPP_CTA,
    };
  }

  /* ── Bulk / wholesale ── */
  if (/(bulk|wholesale|large|big|event|party|corporate|quantity|crate|box|many|lot)/.test(q)) {
    return {
      text: "Absolutely! We handle bulk orders for families, events, temples, and businesses.\n\nSpecial pricing is available for bulk quantities. Contact us on WhatsApp with your required quantity and we'll sort out the best deal for you.",
      link: {
        label: "Enquire about bulk orders",
        href: getWhatsAppUrl(
          BRAND.whatsapp,
          "Hi MangoRoots! I'm interested in a bulk order. Please share pricing and availability."
        ),
        external: true,
      },
      chips: ["How to order?", "Pricing"],
    };
  }

  /* ── USDA / organic / certified / natural ── */
  if (/(usda|certif|organic|natural|chemical|safe|pesticide|ripened|authentic|genuine|real|pure)/.test(q)) {
    return {
      text: "Yes — every mango we import is:\n\n✔ USDA inspected & certified\n✔ Naturally ripened — no artificial ripening agents\n✔ Handpicked Grade A only\n✔ Air-freighted to preserve natural freshness\n\nYour family gets the real thing, straight from Indian orchards.",
      chips: ["Mango varieties", "How to order?"],
    };
  }

  /* ── Payment ── */
  if (/(pay|payment|venmo|zelle|paypal|cash|card|credit|debit|method|transfer)/.test(q)) {
    return {
      text: "We accept multiple payment methods including Zelle, Venmo, PayPal, and bank transfers.\n\nMessage us on WhatsApp to place your order and we'll confirm payment details.",
      link: WHATSAPP_CTA,
      chips: ["How to order?"],
    };
  }

  /* ── Contact / call / phone ── */
  if (/(contact|call|phone|number|reach|speak|talk|email|support|help)/.test(q)) {
    return {
      text: "You can reach us in two easy ways:",
      chips: ["Mango varieties", "How to order?"],
      link: WHATSAPP_CTA,
    };
  }

  /* ── Freshness / quality ── */
  if (/(fresh|quality|ripe|taste|flavour|flavor|sweet|juicy|good|best|premium|grade)/.test(q)) {
    return {
      text: "Freshness is our #1 priority.\n\nMangoes are harvested at peak ripeness in India and air-freighted within 24–48 hours — reaching your door in 2–4 days. No sea freight. No chemical ripening. Just the real taste of Indian summer.",
      chips: ["Mango varieties", "How to order?", "Delivery info"],
    };
  }

  /* ── Thank you ── */
  if (/(thank|thanks|thx|great|awesome|perfect|nice|good|helpful)/.test(q)) {
    return {
      text: "You're welcome! Enjoy your mangoes 🙏\n\nFeel free to ask anything else, or place your order directly on WhatsApp!",
      chips: ["How to order?", "Mango varieties"],
      link: WHATSAPP_CTA,
    };
  }

  /* ── Fallback ── */
  return {
    text: "I'm not sure about that, but our team knows everything about mangoes!\n\nMessage us directly on WhatsApp or give us a call — we respond the same day.",
    chips: ["How to order?", "Mango varieties", "Delivery info"],
    link: WHATSAPP_CTA,
  };
}

/* ── Quick reply topics shown on open ───────────────── */
const INITIAL_CHIPS = [
  "How to order?",
  "Mango varieties",
  "Delivery info",
  "Pricing",
  "Season dates",
  "Bulk orders",
];

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/* ── Component ───────────────────────────────────────── */
export function ChatWidget() {
  const [open,    setOpen]    = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input,   setInput]   = useState("");
  const [typing,  setTyping]  = useState(false);
  const [unread,  setUnread]  = useState(1);          // dot on fab before first open
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  /* Push initial bot greeting when widget first opens */
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{
        id: "init",
        from: "bot",
        text: `Hi there! 👋 I'm the MangoRoots assistant.\n\nAsk me anything about our mangoes, ordering, delivery, or the season — I'm here to help!`,
        time: new Date(),
        chips: INITIAL_CHIPS,
      }]);
      setUnread(0);
    }
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  /* Scroll to bottom on new messages */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      from: "user",
      text: text.trim(),
      time: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    /* Simulate bot "thinking" delay */
    setTimeout(() => {
      const reply = getBotReply(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        from: "bot",
        text: reply.text,
        time: new Date(),
        chips: reply.chips,
        link: reply.link,
      };
      setMessages(prev => [...prev, botMsg]);
      setTyping(false);
    }, 850 + Math.random() * 400);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleChip = (chip: string) => sendMessage(chip);

  const formatTime = (d: Date) =>
    d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });

  return (
    <>
      {/* ── Chat window ────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="fixed bottom-24 right-5 z-50 flex flex-col"
            style={{
              width: "clamp(320px, 90vw, 380px)",
              height: "clamp(460px, 70vh, 520px)",
              borderRadius: "22px",
              background: "#FFFDF7",
              border: "1.5px solid #F7C873",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.10), 0 6px 20px rgba(247,200,115,0.12)",
              overflow: "hidden",
            }}
          >
            {/* ── Header — warm ivory, matches site palette ── */}
            <div
              className="flex items-center justify-between px-5 py-4 flex-shrink-0"
              style={{
                background: "#FFFDF7",
                borderBottom: "1.5px solid #F7C873",
              }}
            >
              <div className="flex items-center gap-3">
                {/* Avatar — soft green circle */}
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "#E9F5EC",
                    border: "1.5px solid #B7DEC8",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 2C5 2 2 6 2 9c0 3.5 2.5 7 7 7s7-3.5 7-7C16 5.5 13.5 2 9 2z"
                      fill="#2D6A4F"
                    />
                    <line x1="9" y1="9" x2="9" y2="16" stroke="#E9F5EC" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div>
                  <p
                    className="font-bold leading-tight"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "0.88rem",
                      color: "#1A1A1A",
                    }}
                  >
                    MangoRoots Assistant
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#22C55E",
                        display: "inline-block",
                        boxShadow: "0 0 0 2.5px rgba(34,197,94,0.20)",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: "#7A7A7A",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      Online — typically replies instantly
                    </span>
                  </div>
                </div>
              </div>

              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex items-center justify-center rounded-full transition-all duration-200"
                style={{
                  width: 30,
                  height: 30,
                  background: "#F0EDE6",
                  border: "1px solid #E0D8CC",
                  color: "#4A4A4A",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#FFE8B6";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#F7C873";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#F0EDE6";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#E0D8CC";
                }}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* ── Messages ───────────────────────────── */}
            <div
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
              style={{ background: "#FFFDF7" }}
            >
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.from === "user" ? "items-end" : "items-start"}`}
                >
                  {/* Bubble */}
                  <div
                    className="max-w-[82%] px-3.5 py-2.5"
                    style={{
                      borderRadius:
                        msg.from === "user"
                          ? "18px 18px 4px 18px"
                          : "18px 18px 18px 4px",
                      /* User: fresh green (matches WhatsApp btn in site)
                         Bot: clean white with warm border             */
                      background: msg.from === "user" ? "#25D366" : "#FFFFFF",
                      border: msg.from === "user" ? "none" : "1px solid #F0EDE6",
                      boxShadow:
                        msg.from === "user"
                          ? "0 2px 12px rgba(37,211,102,0.22)"
                          : "0 1px 6px rgba(0,0,0,0.05)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.82rem",
                        lineHeight: 1.65,
                        color: msg.from === "user" ? "#FFFFFF" : "#2A2A2A",
                        whiteSpace: "pre-wrap",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {msg.text}
                    </p>

                    {/* CTA link — styled like site's btn-green (outline) */}
                    {msg.link && (
                      <a
                        href={msg.link.href}
                        target={msg.link.external ? "_blank" : "_self"}
                        rel={msg.link.external ? "noopener noreferrer" : undefined}
                        className="flex items-center justify-center gap-1.5 mt-2.5 font-semibold transition-all duration-200"
                        style={{
                          padding: "0.45rem 0.9rem",
                          borderRadius: "10px",
                          background: msg.from === "user"
                            ? "rgba(255,255,255,0.22)"
                            : "#2D6A4F",
                          color: "#FFFFFF",
                          fontSize: "0.74rem",
                          fontFamily: "var(--font-poppins)",
                          border: msg.from === "user"
                            ? "1px solid rgba(255,255,255,0.35)"
                            : "none",
                          boxShadow: msg.from === "bot"
                            ? "0 2px 8px rgba(45,106,79,0.22)"
                            : "none",
                          textDecoration: "none",
                        }}
                      >
                        <MessageCircle className="w-3 h-3" />
                        {msg.link.label}
                      </a>
                    )}
                  </div>

                  {/* Timestamp */}
                  <span
                    className="mt-1 px-1"
                    style={{ fontSize: "0.63rem", color: "#C0BAB2" }}
                  >
                    {formatTime(msg.time)}
                  </span>

                  {/* Quick-reply chips — warm gold outline, cream hover */}
                  {msg.chips && msg.chips.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-full">
                      {msg.chips.map(chip => (
                        <button
                          key={chip}
                          onClick={() => handleChip(chip)}
                          style={{
                            padding: "0.28rem 0.75rem",
                            borderRadius: "999px",
                            border: "1.5px solid #F7C873",
                            background: "#FFFFFF",
                            color: "#7A4E1D",
                            fontSize: "0.71rem",
                            fontWeight: 600,
                            fontFamily: "var(--font-poppins)",
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                            transition: "background 0.18s, border-color 0.18s",
                            boxShadow: "0 1px 4px rgba(247,200,115,0.18)",
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = "#FFF8EC";
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "#F4A300";
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = "#FFFFFF";
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "#F7C873";
                          }}
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start"
                  >
                    <div
                      className="flex items-center gap-1 px-4 py-3"
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #F0EDE6",
                        borderRadius: "18px 18px 18px 4px",
                        boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
                      }}
                    >
                      {[0, 1, 2].map(i => (
                        <motion.span
                          key={i}
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.7,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeInOut",
                          }}
                          style={{
                            display: "inline-block",
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#C9973E",
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* ── Input bar ──────────────────────────── */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
              style={{
                borderTop: "1px solid #F0EDE6",
                background: "#FFFDF7",
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 outline-none"
                style={{
                  fontSize: "0.83rem",
                  color: "#1A1A1A",
                  fontFamily: "var(--font-inter)",
                  padding: "0.55rem 1rem",
                  borderRadius: "999px",
                  border: "1.5px solid #F0EDE6",
                  background: "#FFFFFF",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={e => {
                  e.currentTarget.style.borderColor = "#F7C873";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(247,200,115,0.18)";
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = "#F0EDE6";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className="flex items-center justify-center flex-shrink-0 transition-all duration-200"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: input.trim() ? "#25D366" : "#E8E4DE",
                  border: "none",
                  cursor: input.trim() ? "pointer" : "default",
                  boxShadow: input.trim() ? "0 2px 10px rgba(37,211,102,0.30)" : "none",
                }}
              >
                <Send
                  className="w-4 h-4"
                  style={{ color: input.trim() ? "#FFFFFF" : "#AAAAAA" }}
                />
              </button>
            </form>

            {/* ── Footer note ────────────────────────── */}
            <div
              className="text-center py-2 flex-shrink-0"
              style={{
                fontSize: "0.62rem",
                color: "#C0BAB2",
                fontFamily: "var(--font-inter)",
                borderTop: "1px solid #F0EDE6",
                background: "#FFFDF7",
              }}
            >
              Powered by MangoRoots · For complex queries,{" "}
              <a
                href={getWhatsAppUrl(BRAND.whatsapp, "Hi! I need help with my order.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2D6A4F", fontWeight: 600 }}
              >
                WhatsApp us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Action Button ──────────────────────── */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: open
            ? "#1E4D38"
            : "linear-gradient(135deg, #2D6A4F 0%, #1E4D38 100%)",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 6px 28px rgba(45,106,79,0.38), 0 2px 8px rgba(0,0,0,0.12)",
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Unread dot */}
        <AnimatePresence>
          {unread > 0 && !open && (
            <motion.span
              key="unread"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#F4A300",
                border: "2px solid #FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.55rem",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              {unread}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
