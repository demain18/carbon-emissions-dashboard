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

export interface Props {}

export default function Page({ ...rest }: Props) {
  return (
    <Container>
      <Navigator>
        <RText>Navigator</RText>
      </Navigator>
      <MainScreen>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        <Dashboard>
          <Board>
            <Status />
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
  /* border: 1px solid #ffffff25; */
  box-sizing: border-box;
`;

const Navigator = styled.div`
  ${Split}
  width: 100px;
  height: 100%;
  flex-shrink: 0;
  background-color: ${colors.cardNavy};
  border-right: 1px solid ${colors.borderGray};
`;

const MainScreen = styled.div`
  ${Split}
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LogoWrap = styled.div`
  /* ${Split} */
  width: 100%;
  padding: 38px;
`;

const Dashboard = styled.div`
  /* ${Split} */
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const Board = styled.div`
  /* ${Split} */
  flex: 1;
`;

const Chart = styled.div`
  /* ${Split} */
  flex: 1;
`;
