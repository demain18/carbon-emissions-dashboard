/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import RText from "@/components/atoms/RText";
import RBox from "@/components/atoms/RBox";
import { colors } from "@/assets/css/global.module";
import React from "react";

export interface Props {}

export default function Page({ ...rest }: Props) {
  return (
    <Container>
      <Navigator
        css={css`
          /* Navigator Element Size Pinned */
        `}
      >
        <RText>Navigator</RText>
      </Navigator>
      <MainScreen>
        <LogoWrap>
          <RText>Logo</RText>
        </LogoWrap>
        <Dashboard>
          <Board>
            <RText>Board</RText>
          </Board>
          <Chart>
            <RText>Chart</RText>
          </Chart>
        </Dashboard>
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
  border: 1px solid #ffffff30;
  box-sizing: border-box;
`;

const Navigator = styled.div`
  ${Split}
  width: 100px;
  /* min-width: 100px;
  max-width: 100px; */
  height: 100%;
  flex-shrink: 0;
`;

const MainScreen = styled.div`
  ${Split}
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LogoWrap = styled.div`
  ${Split}
  width: 100%;
  height: 120px;
`;

const Dashboard = styled.div`
  ${Split}
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const Board = styled.div`
  ${Split}
  flex: 1;
`;

const Chart = styled.div`
  ${Split}
  flex: 1;
`;
