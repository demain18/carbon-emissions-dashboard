import styled from "@emotion/styled";
import { css } from "@emotion/css";

export interface Props {
  children?: React.ReactNode;
}

export default function Page({ children, ...rest }: Props) {
  return <Container></Container>;
}

const Container = styled.div``;
