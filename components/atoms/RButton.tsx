/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, Transition } from "@/public/css/global.module";

export interface Props {
  children: React.ReactNode;
  padding?: [number, number];
  active?: boolean;
  onClick?: () => void;
}

export default function RButton({
  children,
  padding = [10, 12],
  active,
  onClick,
}: Props) {
  return (
    <Container
      css={[
        css`
          padding: ${padding[0]}px ${padding[1]}px;
        `,
        active && ButtonAcitve,
      ]}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}

const Container = styled.div`
  ${Transition}
  border-radius: 8px;
  /* display: inline-block; */

  :hover {
    background-color: ${colors.activeCardNavy};
    cursor: pointer;
  }
`;

const ButtonAcitve = css`
  background-color: ${colors.activeCardNavy};
`;
