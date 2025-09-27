/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import RText from "../atoms/RText";
import { colors, Transition } from "@/public/css/global.module";
import { postsData, postHeader } from "@/lib/mockupData";
import Modal from "./Modal";
import useModalStore from "@/lib/basicStore";

export interface Props {}

export default function PostTable({}: Props) {
  const { modalOpened, toggleModal } = useModalStore();

  const headers = [...postHeader];
  const data = [...postsData];

  return (
    <Container>
      <TableContainer>
        <Table>
          <THead>
            <TableRow>
              {headers.map((header) => (
                <Th key={header.key}>
                  <RText bold color={colors.white}>
                    {header.label}
                  </RText>
                </Th>
              ))}
            </TableRow>
          </THead>
          <TBody>
            {data.map((post) => (
              <TableRow key={post.id} onClick={toggleModal}>
                <Td>
                  <RText color={colors.white}>{post.id}</RText>
                </Td>
                <Td>
                  <RText color={colors.white}>{post.title}</RText>
                </Td>
                <Td>
                  <RText color={colors.white50}>{post.resourceUid}</RText>
                </Td>
                <Td>
                  <RText color={colors.white50}>{post.dateTime}</RText>
                </Td>
                <Td>
                  <RText sm color={colors.white50}>
                    {post.content.substring(0, 30)}...
                  </RText>
                </Td>
              </TableRow>
            ))}
          </TBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
`;

const scrollbarStyled = css`
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

  scrollbar-width: thin;
  scrollbar-color: ${colors.buttonColor} ${colors.cardNavy};
`;

const TableContainer = styled.div`
  width: 100%;
  background-color: ${colors.backgroundColor};
  border-radius: 8px;
  max-height: 923px;
  overflow-y: auto;
  ${scrollbarStyled}
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const THead = styled.thead`
  background-color: ${colors.backgroundColor};
`;

const TBody = styled.tbody``;

const Th = styled.th`
  padding: 12px 16px;
  text-align: left;
  border: 1px solid ${colors.borderGray};
  border-bottom: 1px solid ${colors.white50};
  box-sizing: border-box;
`;

const Td = styled.td`
  ${Transition}
  padding: 10px 16px;
  background-color: ${colors.cardNavy};
  border: 1px solid ${colors.borderGray};
  box-sizing: border-box;
  cursor: pointer;

  :hover {
    background-color: ${colors.activeCardNavy};
  }
`;

const TableRow = styled.tr`
  height: 50px;
`;
