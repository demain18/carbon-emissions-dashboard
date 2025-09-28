/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, mq } from "@/public/css/global.module";
import Logo from "@/components/molecules/Logo";
import Status from "@/components/organisms/Status";
import Navigation from "@/components/organisms/Navigation";
import Board from "@/components/organisms/Board";
import EmissionsPieChart from "@/components/organisms/EmissionsPieChart";
import EmissionsLineChart from "@/components/organisms/EmissionsLineChart";
import useModalStore from "@/lib/basicStore";
import Modal from "@/components/organisms/Modal";
import Popup from "@/components/organisms/Popup";
import RButton from "@/components/atoms/RButton";
import RText from "@/components/atoms/RText";
import WritePost from "@/components/molecules/WritePost";

export interface Props {}

export default function Page({ ...rest }: Props) {
  const { modalOpened, toggleModal, popupOpened } = useModalStore();

  return (
    <Container>
      {modalOpened && <Modal />}
      <Popup />
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
            <WritePost />
          </BoardWrap>
          <ChartWrap>
            <EmissionsPieChart />
            <EmissionsLineChart />
          </ChartWrap>
        </DashboardWrap>
      </MainScreen>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const Split = css`
  box-sizing: border-box;
`;

const NavigationWrap = styled.div`
  ${Split}
  width: 100px;
  height: 100%;
  flex-shrink: 0;
  display: none;

  ${mq[0]} {
    display: block;
  }
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
  display: flex;
  flex-direction: column;
  padding: 0px 40px;
  gap: 40px;
  padding-bottom: 40px;

  ${mq[0]} {
    flex-direction: row;
  }
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
  gap: 40px;
`;
