/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "@/public/css/global.module";
import { useEffect, useRef } from "react";

export interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function RForm({ value, onChange }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <FormContainer
      ref={textareaRef}
      rows={1}
      value={value}
      onChange={onChange}
    ></FormContainer>
  );
}

const ResetFormStyled = css`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
  background: transparent;
  box-shadow: none;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  width: 100%;
  box-sizing: border-box;

  resize: none;
  overflow-y: hidden; /* 스크롤바가 깜빡이는 것을 방지 */
  &:focus {
    border-color: ${colors.white};
    box-shadow: 0 0 0 1px ${colors.white};
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.buttonColor};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.cardNavy};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.borderGray};
  }
`;

const FormContainer = styled.textarea`
  margin: 0;
  font-size: 16px;
  line-height: 1.3;
  font-weight: 400;
  color: ${colors.white}!important;
  padding: 0;
  background-color: ${colors.formBackground}!important;
  ${ResetFormStyled};
`;
