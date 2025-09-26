/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { BoxStyled, colors } from "@/public/css/global.module";
import RText from "../atoms/RText";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { emmisionsData } from "@/lib/mockupData";
import EmmisonsPieChartRender from "../molecules/EmmisonsPieChartRender";
import EmmisonsPieChartCompany from "../molecules/EmmisonsPieChartCompany";

export interface Props {}

export default function EmmisonsPieChart({}: Props) {
  return (
    <Container>
      <RText bold>Total Emmisions</RText>
      <FlexWrap>
        <ChartWrap>
          <EmmisonsPieChartRender data={emmisionsData} />
        </ChartWrap>
        <CompanyWrap>
          <CompanyContents>
            <RText bold>Companys</RText>
            <EmmisonsPieChartCompany data={emmisionsData} />
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
`;

const ChartWrap = styled.div`
  /* width: 100%; */
  height: 500px;
  flex: 5;
`;

const CompanyWrap = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -36px;
`;

const CompanyContents = styled.div`
  width: 100%;
`;
