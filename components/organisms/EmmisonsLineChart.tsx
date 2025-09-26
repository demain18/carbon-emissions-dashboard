/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { BoxStyled } from "@/public/css/global.module";
import RText from "../atoms/RText";

export interface Props {}

export default function EmmisonsLineChart({}: Props) {
  return (
    <Container>
      <RText>Line Chart</RText>
    </Container>
  );
}

const Container = styled.div`
  ${BoxStyled}
  padding: 13px;
  width: 100%;
  height: 100%;
  flex: 1;
  box-sizing: border-box;
`;
