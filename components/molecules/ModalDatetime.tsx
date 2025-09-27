/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import RText from "../atoms/RText";
import { colors } from "@/public/css/global.module";

export interface Props {
  datetime: string;
}

export default function ModalDatetime({ datetime }: Props) {
  return (
    <Container>
      <RText color={colors.white50}>{datetime}</RText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
