/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, Transition } from "@/public/css/global.module";

export interface Props {
  children: React.ReactNode;
  padding?: [number, number];
  active?: boolean;
}

export default function RButton({
  children,
  padding = [10, 12],
  active,
}: Props) {
  return (
    <Container
      css={[
        css`
          padding: ${padding[0]}px ${padding[1]}px;
        `,
        active && ButtonAcitve,
      ]}
    >
      {children}
    </Container>
  );
}

const Container = styled.div`
  ${Transition}
  border-radius: 8px;

  :hover {
    background-color: ${colors.activeCardNavy};
    cursor: pointer;
  }
`;

const ButtonAcitve = css`
  background-color: ${colors.activeCardNavy};
`;
