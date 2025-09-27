/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { BoxStyled, colors } from "@/public/css/global.module";
import RText from "../atoms/RText";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { emmisionsData, Companies } from "@/lib/mockupData";
import EmmisonsPieChartRender from "../molecules/EmmisonsPieChartRender";
import EmmisonsPieChartCompany from "../molecules/EmmisonsPieChartCompany";

export interface Props {}

export default function EmmisonsPieChart({}: Props) {
  const PieChartData = Companies.map((i, x) => {
    return {
      name: i.name,
      value: i.emissions.reduce((acc, item) => acc + item.emissions, 0),
    };
  });

  // console.log(PieChartData);

  return (
    <Container>
      <RText bold>Total Emmisions</RText>
      <FlexWrap>
        <ChartWrap>
          <EmmisonsPieChartRender data={PieChartData} />
        </ChartWrap>
        <CompanyWrap>
          <CompanyContents>
            <RText bold>Companys</RText>
            <EmmisonsPieChartCompany data={PieChartData} />
          </CompanyContents>
        </CompanyWrap>
      </FlexWrap>
    </Container>
  );
}

const Container = styled.div`
  ${BoxStyled}
  padding: 13px;
  width: 100%;
  height: 500px;
  flex: 1;
  box-sizing: border-box;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 10px; */
`;

const ChartWrap = styled.div`
  /* width: 100%; */
  height: 500px;
  flex: 5;
`;

const CompanyWrap = styled.div`
  flex: 3;
  width: 100%;
  /* display: flex; */
`;

const CompanyContents = styled.div`
  width: 100%;
`;
