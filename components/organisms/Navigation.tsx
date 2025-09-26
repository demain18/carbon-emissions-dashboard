/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "@/public/css/global.module";
import Image from "next/image";
import {
  House,
  User,
  FileText,
  Calendar,
  ChartNoAxesColumn,
  Cog,
} from "lucide-react";
import RButton from "../atoms/RButton";
import RText from "../atoms/RText";

export interface Props {}

export default function Navigation({}: Props) {
  return (
    <Container>
      <Image
        src={"/images/user-profile.svg"}
        width={44}
        height={44}
        alt="user_profile"
      />
      <Divider />
      <MenuWrap style={{ color: colors.buttonColor }}>
        <RText sm color={colors.white50}>
          Main
        </RText>
        <RButton active>
          <House size={24} />
        </RButton>
        <RButton>
          <User size={24} />
        </RButton>
        <RButton>
          <FileText size={24} />
        </RButton>
        <RButton>
          <Calendar size={24} />
        </RButton>
        <RButton>
          <ChartNoAxesColumn size={24} />
        </RButton>
      </MenuWrap>
      <Divider />
      <MenuWrap>
        <RText sm color={colors.white50}>
          Settings
        </RText>
        <RButton>
          <Cog style={{ color: colors.buttonColor }} size={24} />
        </RButton>
      </MenuWrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 1000%;
  background-color: ${colors.cardNavy};
  border-right: 1px solid ${colors.borderGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0px;
`;

const Divider = styled.div`
  width: 44px;
  height: 1px;
  border-top: 2px solid ${colors.borderGray};
  margin: 24px 0px;
`;

const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
