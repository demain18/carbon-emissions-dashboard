/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import RText from "../atoms/RText";
import { colors } from "@/public/css/global.module";

export interface Props {
  year: number;
  month: string;
  day: number;
}

export default function ModalDatetime({ year, month, day }: Props) {
  return (
    <Container>
      <RText color={colors.white50}>
        {year}, {month}, {day}
      </RText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
