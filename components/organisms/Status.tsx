/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import StatusBox from "../molecules/StatusBox";
import StatusGraphBox from "../molecules/StatusGraphBox";
import { mq } from "@/public/css/global.module";
import { useEffect, useState } from "react";
import { StatusDataDto, StatusDataPreload } from "@/lib/mockupData";
import { fetchStatus } from "@/lib/api";

export interface Props {}

export default function Status({}: Props) {
  const [data, setData] = useState<StatusDataDto>(StatusDataPreload);

  useEffect(() => {
    const loadData = async () => {
      try {
        const status = await fetchStatus();
        setData(status);
      } catch (e) {
        console.error("데이터 로드 실패", e);
      }
    };
    loadData();
  }, []);

  return (
    <Container>
      <StatusBox value={data.daily} unit="t" tag="Daily Emissions(tCO2e)" />
      <StatusBox value={data.monthly} unit="t" tag="Monthly Emissions(tCO2e)" />
      <StatusGraphBox
        value={data.increased}
        unit="%"
        tag="Weekly carbon emissions have increased."
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  gap: 20px;

  ${mq[0]} {
    gap: 40px;
  }
`;
