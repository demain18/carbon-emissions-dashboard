import { css } from "@emotion/react";

export const colors = {
  backgroundColor: "#011625",
  borderGray: "#36434E",
  cardNavy: "#001D31",
  activeCardNavy: "#003458",
  green: "#1EBD7C",
  white: "#ffffff",
  white50: "#ffffff80",
  black: "#000000",
  buttonColor: "#506472",
  lightGray: "#4A5A6B",
  formBackground: "#001624",
  success: "#1ebd7c",
  failed: "#e04457",
};

export type colorKeys = keyof typeof colors;

export const CHART_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const BoxStyled = css`
  background-color: ${colors.cardNavy};
  border: 1px solid ${colors.borderGray};
  border-radius: 8px;
`;

export const Transition = css`
  transition-property: all;
  transition-duration: 0.105s;
  transition-timing-function: ease-in-out;
`;

const breakpoints = [1440, 992];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
