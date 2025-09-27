/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import RText from "../atoms/RText";
import { colors } from "@/public/css/global.module";
import useModalStore from "@/lib/basicStore";
import ModalHeader from "../molecules/ModalHeader";
import ModalDatetime from "../molecules/ModalDatetime";
import { PostData } from "@/lib/mockupData";

export interface Props {}

export default function Modal({}: Props) {
  const { modalOpened, postSelected, toggleModal } = useModalStore();

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const data = PostData[postSelected];

  return (
    <Backdrop onClick={toggleModal}>
      <ModalContainer onClick={handleModalClick}>
        <ModalHeader uploader="Unknown" company={data.resourceUid || ""} />
        <RText nonSelectDisabled>{data.content || ""}</RText>
        <ModalDatetime datetime={data.dateTime || ""} />
      </ModalContainer>
    </Backdrop>
  );
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 520px;
  background-color: ${colors.cardNavy};
  border: 1px solid ${colors.borderGray};
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
  z-index: 8;

  display: flex;
  flex-direction: column;
  gap: 17px;
`;
