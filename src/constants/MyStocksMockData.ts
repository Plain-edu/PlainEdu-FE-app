import { Stock } from "../types/stock";

export const STOCKS: Stock[] = [
  {
    id: 1,
    logo: require("../../assets/images/example-deoksan.png"),
    name: "덕산네오룩스",
    quantity: "144주",
    value: "540,245원",
    profit: "545,041원",
    profitRate: 100.45,
  },
  {
    id: 2,
    logo: require("../../assets/images/example-tesla.png"),
    name: "테슬라",
    quantity: "14주",
    value: "6,641,250원",
    profit: "545,041원",
    profitRate: 9.45,
  },
  {
    id: 3,
    logo: require("../../assets/images/example-hmm.png"),
    name: "HMM",
    quantity: "1400주",
    value: "39,200,000원",
    profit: "-1,050,523원",
    profitRate: -1.45,
  },
  {
    id: 4,
    logo: require("../../assets/images/example-supermicr.png"),
    name: "슈퍼마이크로컴퓨터",
    quantity: "270주",
    value: "15,497,326원",
    profit: "-168,787원",
    profitRate: -1.05,
  },
];
