/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import RText from "../atoms/RText";
import { colors } from "@/public/css/global.module";
import useModalStore from "@/lib/basicStore";
import { PostData, PostDataDto, PostDataPreload } from "@/lib/mockupData";
import RButton from "../atoms/RButton";
import { useEffect, useState } from "react";
import RForm from "../atoms/RForm";
import { createOrUpdatePost, fetchPosts } from "@/lib/api";

export interface Props {}

export default function Modal({}: Props) {
  const { modalOpened, postSelected, toggleModal, togglePopup } =
    useModalStore();
  const [modalEditable, setModalEditable] = useState(false);

  const [data, setData] = useState<PostDataDto>(PostDataPreload[0]);

  const [titleValue, setTitleValue] = useState(data.title);
  const [contentValue, setContentValue] = useState(data.content);

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitleValue(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentValue(e.target.value);
  };

  const EditClicked = () => {
    setModalEditable(!modalEditable);
  };

  const SubmitClicked = () => {
    const loadData = async () => {
      const updatedPost = {
        ...data,
        title: titleValue,
        content: contentValue,
      };
      try {
        await createOrUpdatePost(updatedPost);
        togglePopup(true);
        setModalEditable(!modalEditable);
        console.log("Update Success.");
      } catch (e) {
        togglePopup(false);
        console.log("Update Failed.");
      }
    };
    loadData();
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const postData = await fetchPosts();
        setData(postData[postSelected]);
        setTitleValue(postData[postSelected].title);
        setContentValue(postData[postSelected].content);
      } catch (e) {
        console.error("Data Loaded Failure", e);
      }
    };
    loadData();
  }, [modalEditable]);

  return (
    <Backdrop onClick={toggleModal}>
      <ModalContainer onClick={handleModalClick}>
        <InfoWrap>
          {modalEditable ? (
            <RForm onChange={handleTitleChange} value={titleValue || ""} />
          ) : (
            <RText bold>{data.title}</RText>
          )}
          <RText sm color={colors.white50}>
            {data.resourceUid}
          </RText>
        </InfoWrap>
        {modalEditable ? (
          <RForm onChange={handleContentChange} value={contentValue || ""} />
        ) : (
          <RText nonSelectDisabled>{data.content}</RText>
        )}
        <DatetimeWrap>
          <RText color={colors.white50}>{data.dateTime}</RText>
        </DatetimeWrap>
        {modalEditable ? (
          <RButton onClick={SubmitClicked}>
            <RText color={colors.white} alignCenter>
              Submit
            </RText>
          </RButton>
        ) : (
          <RButton onClick={EditClicked}>
            <RText color={colors.white} alignCenter>
              Edit
            </RText>
          </RButton>
        )}
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

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-content: center;
`;

const DatetimeWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
