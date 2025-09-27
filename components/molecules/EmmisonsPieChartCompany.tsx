/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import RText from "../atoms/RText";
import { colors } from "@/public/css/global.module";
import { CompaniesPieChartDto } from "@/lib/mockupData";

export interface Props {
  data: CompaniesPieChartDto[];
}

export default function EmmisonsPieChartCompany({ data }: Props) {
  return (
    <Container>
      {data.map((data, x) => (
        <CompanyWrap key={x}>
          <CompanyColortag
            css={css`
              background-color: ${colors.white};
            `}
          />
          <RText sm bold>
            {data.name}
          </RText>
          <Value>{data.value.toFixed(2)} t</Value>
        </CompanyWrap>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  /* margin: auto; */
`;

const CompanyWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  /* border: 1px solid gray; */
`;

const CompanyColortag = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  margin-right: 16px;
`;

const Value = styled.div`
  /* width: 100%; */
  flex: 1;
  text-align: right;
  color: ${colors.white};
`;
