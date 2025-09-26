/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { lineChartDataType } from "@/lib/mockupData";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { colors } from "@/public/css/global.module";

export interface Props {
  data: lineChartDataType[];
}

export default function EmmisonsLineChartRender({ data }: Props) {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke={colors.green}
              fill={colors.green}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ResponsiveContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 460px;
`;
