/** @jsxImportSource @emotion/react */
"use client";

import { colors } from "@/assets/css/global.module";
import { css } from "@emotion/react";

export interface Props {
  children: React.ReactNode;
  bold?: boolean;
  h1?: boolean;
  h2?: boolean;
  sm?: boolean;
  xsm?: boolean;
  dark?: boolean;
}

export default function RText({
  children,
  bold,
  h1,
  h2,
  sm,
  xsm,
  dark,
}: Props) {
  return (
    <p
      css={[
        TextContainer,
        bold && TextBold,
        h1 && TextH1,
        h2 && TextH2,
        sm && TextSmall,
        xsm && TextExtraSmall,
        dark && TextDark,
      ]}
    >
      {children}
    </p>
  );
}

const TextContainer = css`
  margin: 0;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  color: ${colors.white};
`;

const TextBold = css`
  font-weight: 600;
`;

const TextH1 = css`
  font-size: 36px;
  line-height: 36px;
`;

const TextH2 = css`
  font-size: 24px;
  line-height: 24px;
`;

const TextSmall = css`
  font-size: 12px;
  line-height: 12px;
`;

const TextExtraSmall = css`
  font-size: 10px;
  line-height: 10px;
`;

const TextDark = css`
  color: black;
`;
