/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import RButton from "../atoms/RButton";
import RText from "../atoms/RText";
import useModalStore from "@/lib/basicStore";

export interface Props {}

export default function WritePost({}: Props) {
  const { toggleModal, selectPost } = useModalStore();

  const openModal = () => {
    toggleModal();
    selectPost(-1);
  };

  return (
    <Container>
      <RButton onClick={openModal}>
        <RText alignCenter>Click here to write new report</RText>
      </RButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding-top: 10px;
`;
