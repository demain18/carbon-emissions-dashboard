import { css } from "@emotion/react";

// Color definitions
export const colors = {
  backgroundColor: "#011625", // Dark background
  borderGray: "#36434E", // Standard border color
  cardNavy: "#001D31", // Card background
  activeCardNavy: "#003458", // Active/hover state
  green: "#1EBD7C", // Primary accent color
  white: "#ffffff", // White text
  white50: "#ffffff80", // Transparent white
  black: "#000000", // Black
  buttonColor: "#506472", // Button color
  lightGray: "#4A5A6B", // Light gray text/elements
};

// Type for color keys
export type colorKeys = keyof typeof colors;

// Recharts colors
export const CHART_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// Global Style Snippets
// Standard card style
export const BoxStyled = css`
  background-color: ${colors.cardNavy};
  border: 1px solid ${colors.borderGray};
  border-radius: 8px;
`;

// Standard transition speed
export const Transition = css`
  transition-property: all;
  transition-duration: 0.105s;
  transition-timing-function: ease-in-out;
`;

// Media query breakpoints
const breakpoints = [1600, 992];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
