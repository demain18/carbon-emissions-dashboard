/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { BoxStyled } from "@/public/css/global.module";
import RText from "../atoms/RText";
import EmmisonsLineChartRender from "../molecules/EmmisonsLineChartRender";
import { Companies, CompaniesLineChartDto } from "@/lib/mockupData";

export interface Props {}

export default function EmmisonsLineChart({}: Props) {
  const LineChartData: CompaniesLineChartDto[] = Companies.flatMap(
    (c) => c.emissions
  )
    .reduce((acc, curr) => {
      const month = curr.yearMonth;

      const existingIndex = acc.findIndex((i) => i.month === month);

      if (existingIndex !== -1) {
        acc[existingIndex].value += curr.emissions;
      } else {
        acc.push({
          month: month,
          value: curr.emissions,
        });
      }
      return acc;
    }, [] as CompaniesLineChartDto[])
    .toSorted((a, b) => a.month.localeCompare(b.month));

  return (
    <Container>
      <RText>Monthly Emission Volume (in Tonnes)</RText>
      <ChartWrap>
        <EmmisonsLineChartRender data={LineChartData} />
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
