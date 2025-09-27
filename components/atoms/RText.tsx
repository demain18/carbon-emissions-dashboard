/** @jsxImportSource @emotion/react */
/** @jsxRuntime automatic */
"use client";

import { colors } from "@/public/css/global.module";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export interface Props {
  children?: React.ReactNode | null;
  bold?: boolean;
  h1?: boolean;
  h2?: boolean;
  sm?: boolean;
  xsm?: boolean;
  color?: string;
  inter?: boolean;
  stick?: boolean;
  alignLeft?: boolean;
  alignRight?: boolean;
  nonSelectDisabled?: boolean;
  block?: boolean;
}

export default function RText({
  children,
  bold,
  h1,
  h2,
  sm,
  xsm,
  color = colors.white,
  inter,
  stick,
  alignLeft = false,
  alignRight = false,
  nonSelectDisabled = false,
  block = false,
}: Props) {
  const isChildrenNull = children === null || children === undefined;

  return (
    <TextContainer
      css={[
        isChildrenNull && SkeletonStyle,
        bold && TextBold,
        h1 && TextH1,
        h2 && TextH2,
        sm && TextSmall,
        xsm && TextExtraSmall,
        css`
          color: ${color};
        `,
        inter && TextFamilyInter,
        stick && TextStick,
        alignLeft && TextAlignLeft,
        alignRight && TextAlignRight,
        nonSelectDisabled === false && NonSelect,
        block && TextBlock,
      ]}
    >
      {isChildrenNull ? (
        <span
          css={css`
            display: inline-block;
            width: 100%;
          `}
        >
          &nbsp;
        </span>
      ) : (
        children
      )}
    </TextContainer>
  );
}

const TextContainer = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.3;
  font-weight: 400;
  color: ${colors.white};
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonStyle = css`
  color: ${colors.borderGray} !important;
  min-height: 1.3em;
  width: 100%;
  display: block;
  background: linear-gradient(
    90deg,
    ${colors.borderGray} 0%,
    ${colors.lightGray} 50%,
    ${colors.borderGray} 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

const TextBold = css`
  font-weight: 500;
`;

const TextH1 = css`
  font-size: 36px;
`;

const TextH2 = css`
  font-size: 24px;
`;

const TextSmall = css`
  font-size: 12px;
`;

const TextExtraSmall = css`
  font-size: 10px;
`;

const TextFamilyInter = css`
  font-family: Inter;
`;

const TextStick = css`
  line-height: 1;
`;

const TextAlignLeft = css`
  text-align: left;
`;

const TextAlignRight = css`
  text-align: right;
`;

const TextBlock = css`
  width: 100%;
`;

const NonSelect = css`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
