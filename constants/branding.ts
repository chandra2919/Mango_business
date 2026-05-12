export const BRAND = {
  name: "MangoRoots",
  tagline: "Authentic Indian Mangoes, Delivered Fresh in the USA",
  description:
    "Premium handpicked Indian mango varieties — sourced directly from orchards in Andhra Pradesh, Maharashtra & Gujarat — delivered fresh to your doorstep across the USA.",
  phone: "+1 (555) 000-MANGO",
  whatsapp: "+15550006264",
  email: "hello@mangoroots.com",
  social: {
    instagram: "https://instagram.com/mangoroots",
    facebook: "https://facebook.com/mangoroots",
    youtube: "https://youtube.com/@mangoroots",
  },
  deliveryStates: [
    "California",
    "Texas",
    "New York",
    "New Jersey",
    "Illinois",
    "Georgia",
    "Florida",
    "Virginia",
    "Maryland",
    "Pennsylvania",
  ],
  weekendStock: { min: 600, max: 800 },
  weekdayStock: { min: 400, max: 500 },
  season: "May – August",
  whatsappMessage:
    "Hi MangoRoots! I'd like to order some fresh Indian mangoes. Please share the available varieties and pricing.",
} as const;
