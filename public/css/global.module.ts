import { css } from "@emotion/react";

export const colors = {
  backgroundColor: "#011625",
  borderGray: "#36434E",
  cardNavy: "#001D31",
  green: "#1EBD7C",
  white: "#ffffff",
};

export const BoxStyled = css`
  background-color: ${colors.cardNavy};
  border: 1px solid ${colors.borderGray};
  border-radius: 8px;
`;
