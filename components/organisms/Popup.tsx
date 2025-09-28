/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, Transition } from "@/public/css/global.module";
import RText from "../atoms/RText";
import useModalStore from "@/lib/basicStore";

export interface Props {}

export default function Popup({}: Props) {
  const { popupOpened, popupIsSuccessfulStyled } = useModalStore();

  return (
    <PopupContainer
      css={[
        popupOpened && PopupContainerDisplayed,
        popupIsSuccessfulStyled === false && PopupFailedStyled,
      ]}
    >
      {popupIsSuccessfulStyled ? (
        <RText stick bold>
          Submit Success.
        </RText>
      ) : (
        <RText stick bold>
          Submit has been Failed.
        </RText>
      )}
    </PopupContainer>
  );
}

const PopupContainer = styled.div`
  ${Transition}
  transition-duration: 0.35s;

  position: absolute;
  top: -10%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  border-radius: 8px;

  background-color: ${colors.success};
  border: 3px solid ${colors.success};
  box-shadow: 0 0 50px ${colors.success}80, 0 0 5px rgba(255, 255, 255, 0.7);

  z-index: 10;
`;

const PopupContainerDisplayed = css`
  top: 6%;
`;

const PopupFailedStyled = css`
  background-color: ${colors.failed};
  border: 3px solid ${colors.failed};
  box-shadow: 0 0 50px ${colors.failed}80, 0 0 5px rgba(255, 255, 255, 0.7);
`;
