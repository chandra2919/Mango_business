export const COLORS = {
  mango: {
    primary: "#F59E0B",
    light: "#FDE68A",
    dark: "#D97706",
    deep: "#B45309",
  },
  cream: {
    base: "#FFF8E7",
    light: "#FFFDF7",
    medium: "#FFF0C2",
  },
  gold: {
    primary: "#D4A017",
    light: "#F0C040",
    dark: "#B8860B",
  },
  leaf: {
    primary: "#16A34A",
    light: "#4ADE80",
  },
  text: {
    primary: "#1C1917",
    secondary: "#57534E",
    muted: "#A8A29E",
    light: "#D6D3D1",
  },
  white: "#FFFFFF",
} as const;

export const GRADIENTS = {
  hero: "linear-gradient(160deg, #FFFDF7 0%, #FFF8E7 40%, #FEF3C7 70%, #FDE68A 100%)",
  mango: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 50%, #FBBF24 100%)",
  card: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,248,231,0.8) 100%)",
  glow: "radial-gradient(ellipse at center, rgba(245,158,11,0.15) 0%, transparent 70%)",
} as const;
