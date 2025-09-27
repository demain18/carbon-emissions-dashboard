/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { BoxStyled } from "@/public/css/global.module";
import RText from "../atoms/RText";
import EmmisonsLineChartRender from "../molecules/EmmisonsLineChartRender";
import { lineChartData } from "@/lib/mockupData";

export interface Props {}

export default function EmmisonsLineChart({}: Props) {
  return (
    <Container>
      <RText>Emissions Per Months</RText>
      <ChartWrap>
        <EmmisonsLineChartRender data={lineChartData} />
      </ChartWrap>
    </Container>
  );
}

const Container = styled.div`
  ${BoxStyled}
  width: 100%;
  height: 100%;
  padding: 13px;
  box-sizing: border-box;
  /* padding-bottom: 40px; */
`;

const ChartWrap = styled.div`
  /* padding-top: 24px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
