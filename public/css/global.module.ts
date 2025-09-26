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
};

export type colorKeys = keyof typeof colors;

export const BoxStyled = css`
  background-color: ${colors.cardNavy};
  border: 1px solid ${colors.borderGray};
  border-radius: 8px;
`;
