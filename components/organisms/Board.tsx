/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import RText from "../atoms/RText";
import { colors, Transition } from "@/public/css/global.module";
import {
  PostData,
  PostDataDto,
  PostDataPreload,
  PostHeader,
} from "@/lib/mockupData";
import Modal from "./Modal";
import useModalStore from "@/lib/basicStore";
import { fetchPosts } from "@/lib/api";
import { useEffect, useState } from "react";

export interface Props {}

export default function PostTable({}: Props) {
  const { modalOpened, toggleModal, selectPost } = useModalStore();
  const headers = [...PostHeader];

  const [data, setData] = useState<PostDataDto[]>(PostDataPreload);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const posts = await fetchPosts();
        setData(posts);
      } catch (e) {
        console.error("데이터 로드 실패", e);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const openModal = (id: number) => {
    if (isLoading === false) {
      toggleModal();
      selectPost(id);
    }
  };

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
            {data.map((post, x) => (
              <TableRow key={x} onClick={() => openModal(x)}>
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
                    {post.content === null
                      ? post.content
                      : post.content.substring(0, 30) + "..."}
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
  max-height: 900px;
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
