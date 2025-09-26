/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import RText from "@/components/atoms/RText";
import { colors } from "@/public/css/global.module";
import React from "react";
import Logo from "@/components/molecules/Logo";
import StatusBox from "@/components/molecules/StatusBox";
import Status from "@/components/organisms/Status";
import Navigation from "@/components/organisms/Navigation";
import Board from "@/components/organisms/Board";
import EmmisonsPieChart from "@/components/organisms/EmmisonsPieChart";
import EmmisonsLineChart from "@/components/organisms/EmmisonsLineChart";

export interface Props {}

export default function Page({ ...rest }: Props) {
  return (
    <Container>
      <NavigationWrap>
        <Navigation />
      </NavigationWrap>
      <MainScreen>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        <DashboardWrap>
          <BoardWrap>
            <Status />
            <Board />
          </BoardWrap>
          <ChartWrap>
            <EmmisonsPieChart />
            <EmmisonsLineChart />
          </ChartWrap>
        </DashboardWrap>
      </MainScreen>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const Split = css`
  /* border: 1px solid #ececec25; */
  box-sizing: border-box;
`;

const NavigationWrap = styled.div`
  ${Split}
  width: 100px;
  height: 100vh;
  flex-shrink: 0;
`;

const MainScreen = styled.div`
  ${Split}
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const LogoWrap = styled.div`
  ${Split}
  width: 100%;
  padding: 38px;
`;

const DashboardWrap = styled.div`
  ${Split}
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0px 40px;
  gap: 40px;
`;

const BoardWrap = styled.div`
  ${Split}
  flex: 1;
`;

const ChartWrap = styled.div`
  ${Split}
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  gap: 40px;
  padding-bottom: 40px;
`;
