"use client";

import styled from "@emotion/styled";
import RText from "@/components/atoms/RText";
import RBox from "@/components/atoms/RBox";

export interface Props {}

export default function Page({ ...rest }: Props) {
  return (
    <Container>
      <RText>This is text Box</RText>
      <RText bold>This is text Box</RText>
      <RText h1>This is text Box</RText>
      <RText h2>This is text Box</RText>
      <RText h2 bold>
        This is text Box
      </RText>
      <RText sm>This is text Box</RText>
      <RText xsm>This is text Box</RText>
      <RBox padding={30}>
        <RText>This is RBox</RText>
      </RBox>
      <RBox paddingTop={15} paddingBottom={15}>
        <RText>This is RBox</RText>
      </RBox>
    </Container>
  );
}

const Container = styled.div``;
