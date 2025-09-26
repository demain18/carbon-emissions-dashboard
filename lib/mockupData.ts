export const postHeader = [
  { key: "id", label: "ID" },
  { key: "title", label: "Title" },
  { key: "resourceUid", label: "Resource ID" },
  { key: "dateTime", label: "Date/Time" },
  { key: "content", label: "Content" },
];

export const postsData = [
  // Initial 4 items (Content Enhanced)
  {
    id: "p001",
    title: "Q4 Innovation Technology Review",
    resourceUid: "compA",
    dateTime: "2024-12",
    content:
      "Final analysis report on key R&D investment outcomes and market introduction strategy. Successfully secured a significant technological edge over competitors.",
  },
  {
    id: "p002",
    title: "Monthly Key Performance Indicator Analysis",
    resourceUid: "compB",
    dateTime: "2024-11",
    content:
      "Comprehensive review of November's performance metrics and market trends across core business units. Noteworthy growth observed in new customer acquisition channels.",
  },
  {
    id: "p003",
    title: "Customer Experience Improvement Project Draft",
    resourceUid: "compA",
    dateTime: "2024-10",
    content:
      "Initial roadmap and UI/UX enhancement proposals based on aggregated customer feedback. Includes detailed solutions derived from recent usability testing.",
  },
  {
    id: "p004",
    title: "Hiring Strategy for H1 2025",
    resourceUid: "compC",
    dateTime: "2024-09",
    content:
      "Talent acquisition strategy and budget plan to support upcoming business expansion. Priority focus is on securing AI developers and Data Scientists.",
  },

  // Newly Added 4 Items (Doubling the Data)
  {
    id: "p005",
    title: "Market Share Expansion Campaign Results",
    resourceUid: "compC",
    dateTime: "2024-08",
    content:
      "Final performance report for the marketing campaign launched to enter new markets. Successfully established a presence, exceeding the target by 15%.",
  },
  {
    id: "p006",
    title: "Cloud Infrastructure Migration Plan",
    resourceUid: "compD",
    dateTime: "2024-07",
    content:
      "Technical and cost analysis report for migrating current on-premise servers to a cloud-based solution. Expecting significant long-term operational efficiency gains.",
  },
  {
    id: "p007",
    title: "New Product 'Acron' Post-Launch Review",
    resourceUid: "compB",
    dateTime: "2024-06",
    content:
      "Analysis of initial sales data and customer reception for the successfully launched 'Acron' product. While feedback is overwhelmingly positive, minor improvements have been identified.",
  },
  {
    id: "p008",
    title: "Proposal for Global Partnership Expansion",
    resourceUid: "compA",
    dateTime: "2024-05",
    content:
      "Document proposing strategic partnerships with influential firms in the European and North American regions. Outlines specific collaboration strategies focusing on potential synergy.",
  },
];

export const emmisionsData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

export interface emmisionsDataType {
  name: string;
  value: number;
  // 🌟 이 라인이 Recharts와의 타입 충돌을 해결합니다.
  [key: string]: any;
}

export const lineChartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export interface lineChartDataType {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}
