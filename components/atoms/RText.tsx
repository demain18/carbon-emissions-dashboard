/** @jsxImportSource @emotion/react */
"use client";

import { colors } from "@/assets/css/global.module";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

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
    <TextContainer
      css={[
        bold && TextBold,
        h1 && TextH1,
        h2 && TextH2,
        sm && TextSmall,
        xsm && TextExtraSmall,
        dark && TextDark,
      ]}
    >
      {children}
    </TextContainer>
  );
}

// Using 'styled.div' instead of 'CSS' means TextContainer was the mother element of this components.
const TextContainer = styled.div`
  margin: 0;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  color: ${colors.white};
`;

// All CSS values follow CamelCase naming rules to prevent confusion with React states.
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
