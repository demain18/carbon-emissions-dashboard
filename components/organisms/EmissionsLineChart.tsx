/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { BoxStyled } from "@/public/css/global.module";
import RText from "../atoms/RText";
import EmissionsLineChartRender from "../molecules/EmissionsLineChartRender";
import {
  Companies,
  CompaniesLineChartDto,
  LineChartPreload,
} from "@/lib/mockupData";
import { useEffect, useState } from "react";
import { fetchCompanies } from "@/lib/api";

export interface Props {}

export default function EmissionsLineChart({}: Props) {
  const [companiesData, setCompaniesData] =
    useState<CompaniesLineChartDto[]>(LineChartPreload);

  useEffect(() => {
    const loadData = async () => {
      try {
        const companies = await (
          await fetchCompanies()
        )
          .flatMap((c) => c.emissions)
          .reduce((acc, curr) => {
            const month = curr.yearMonth;

            const existingIndex = acc.findIndex((i) => i.month === month);

            if (existingIndex !== -1) {
              const newValue = acc[existingIndex].value + curr.emissions;
              acc[existingIndex].value = parseFloat(newValue.toFixed(2));
            } else {
              acc.push({
                month: month,
                value: parseFloat(curr.emissions.toFixed(2)),
              } as CompaniesLineChartDto);
            }
            return acc;
          }, [] as CompaniesLineChartDto[])
          .toSorted((a, b) => a.month.localeCompare(b.month));

        setCompaniesData(companies);
      } catch (e) {
        console.error("Data Loaded Failure", e);
      }
    };
    loadData();
  }, []);

  return (
    <Container>
      <RText>Monthly Emission Volume (in Tonnes)</RText>
      <ChartWrap>
        <EmissionsLineChartRender data={companiesData} />
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
`;

const ChartWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
