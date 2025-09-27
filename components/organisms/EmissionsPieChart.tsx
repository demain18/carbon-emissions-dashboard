/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { BoxStyled, colors } from "@/public/css/global.module";
import RText from "../atoms/RText";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import {
  Companies,
  CompaniesDto,
  CompaniesPieChartDto,
  PieChartPreload,
} from "@/lib/mockupData";
import EmissionsPieChartRender from "../molecules/EmissionsPieChartRender";
import EmissionsPieChartCompany from "../molecules/EmissionsPieChartCompany";
import { useEffect, useState } from "react";
import { fetchCompanies } from "@/lib/api";

export interface Props {}

export default function EmmisonsPieChart({}: Props) {
  const [companiesData, setCompaniesData] =
    useState<CompaniesPieChartDto[]>(PieChartPreload);

  useEffect(() => {
    const loadData = async () => {
      try {
        const companies = await fetchCompanies();

        const PieChartData = companies.map((i, x) => {
          return {
            name: i.name,
            value: i.emissions.reduce((acc, item) => acc + item.emissions, 0),
          };
        });
        setCompaniesData(PieChartData);
      } catch (e) {
        console.error("Data Loaded Failure", e);
      }
    };
    loadData();
  }, []);

  return (
    <Container>
      <RText bold>Total Emmisions</RText>
      <FlexWrap>
        <ChartWrap>
          <EmissionsPieChartRender data={companiesData} />
        </ChartWrap>
        <CompanyWrap>
          <CompanyContents>
            <RText bold>Companys</RText>
            <EmissionsPieChartCompany data={companiesData} />
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
