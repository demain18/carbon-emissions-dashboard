/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import RText from "../atoms/RText";
import { BoxStyled, colors } from "@/public/css/global.module";

export interface Props {
  value: number;
  unit: string;
  tag: string;
}

export default function StatusBox({ value, unit, tag }: Props) {
  return (
    <Container>
      <RText h1 bold>
        {`${value} ${unit}`}
      </RText>
      <RText>{tag}</RText>
    </Container>
  );
}

const Container = styled.div`
  ${BoxStyled}

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  gap: 17px;
  padding: 20px;
  padding-bottom: 30px;
`;
