/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import RText from "../atoms/RText";
import Image from "next/image";
import { BoxStyled, colors } from "@/public/css/global.module";

export interface Props {
  value: number;
  unit: string;
  tag: string;
}

export default function StatusGraphBox({ value, unit, tag }: Props) {
  return (
    <Container>
      <ValueWrap>
        <RText h1 bold color={colors.green} alignLeft>
          {value}
          {unit}
        </RText>
        <Image
          src={"/images/chart-up.svg"}
          width={35}
          height={24}
          alt="chart_up"
          css={GraphStyled}
        />
      </ValueWrap>

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
  gap: 17px;
  padding: 20px;
  padding-bottom: 30px;
`;

const ValueWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const GraphStyled = css`
  position: relative;
  left: 5px;
  top: 4px;
`;
