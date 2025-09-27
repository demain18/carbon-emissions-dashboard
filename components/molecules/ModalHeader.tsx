/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";
import RText from "../atoms/RText";
import { colors } from "@/public/css/global.module";

export interface Props {
  uploader: string;
  company: string;
}

export default function ModalHeader({ uploader, company }: Props) {
  return (
    <Container>
      {/* <Image
        src={"/images/user-profile.svg"}
        width={46}
        height={46}
        alt="writer_profile"
      /> */}
      <InfoWrap>
        <RText bold>{uploader}</RText>
        <RText sm color={colors.white50}>
          {company}
        </RText>
      </InfoWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-content: center;
`;
