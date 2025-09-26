/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";
import RText from "../atoms/RText";

export interface Props {}

export default function Logo({}: Props) {
  return (
    <Container>
      <Image
        src={"/images/hanaloop-logo.svg"}
        width={90}
        height={50}
        alt="Logo"
        draggable="false"
      />
      <RText h2 bold inter stick>
        HanaLoop
        <br /> Carbon Emissions Tracking
      </RText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
