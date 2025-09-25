/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import StatusBox from "../molecules/StatusBox";

export interface Props {}

export default function Status({}: Props) {
  return (
    <Container>
      <StatusBox value={47.31} unit="t" tag="Daily Emissions(tCO2e)" />
      <StatusBox value={1935.59} unit="t" tag="Monthly Emissions(tCO2e)" />
      <StatusBox
        value={19.5}
        unit="%"
        tag="Weekly carbon emissions have increased."
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 0px 40px;
`;
