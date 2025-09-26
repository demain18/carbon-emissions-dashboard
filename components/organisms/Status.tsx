/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import StatusBox from "../molecules/StatusBox";
import StatusGraphBox from "../molecules/StatusGraphBox";

export interface Props {}

export default function Status({}: Props) {
  return (
    <Container>
      <StatusBox value={47.31} unit="t" tag="Daily Emissions(tCO2e)" />
      <StatusBox value={1935.59} unit="t" tag="Monthly Emissions(tCO2e)" />
      <StatusGraphBox
        value={19.5}
        unit="%"
        tag="Weekly carbon emissions have increased."
      />
    </Container>
  );
}

const Container = styled.div`
  /* height: 90px; */
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-bottom: 30px;
`;
