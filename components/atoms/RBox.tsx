/** @jsxImportSource @emotion/react */
"use client";

import { colors } from "@/assets/css/global.module";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface Props {
  children: React.ReactNode;
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

export default function RBox({
  children,
  padding,
  paddingTop = 0,
  paddingBottom = 0,
  paddingLeft = 0,
  paddingRight = 0,
}: Props) {
  return (
    <div
      css={[
        container,
        css`
          padding: ${padding}px;
          ${!padding &&
          css`
            padding-top: ${paddingTop}px;
            padding-bottom: ${paddingBottom}px;
            padding-left: ${paddingLeft}px;
            padding-right: ${paddingRight}px;
          `}
        `,
      ]}
    >
      {children}
    </div>
  );
}

const container = css`
  background-color: ${colors.cardNavy};
  border: 1px solid ${colors.borderGray};
  border-radius: 8px;
`;
