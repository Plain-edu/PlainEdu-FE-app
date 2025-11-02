import { LV3_FINANCIAL_STATEMENTS } from "./1_financial_statements";
import { LV3_SALES_VS_PROFIT } from "./2_sales_vs_profit";
import { LV3_EARNINGS_SEASON } from "./3_earnings_season";
import { LV3_DEBT_RATIO } from "./4_debt_ratio";
import { LV3_UNDERVALUE_STOCK } from "./5_undervalue_stock";
import { LV3_BPS_PBR } from "./6_bps_pbr";

export const LV3_QUIZZES = [
  ...LV3_FINANCIAL_STATEMENTS,
  ...LV3_SALES_VS_PROFIT,
  ...LV3_EARNINGS_SEASON,
  ...LV3_DEBT_RATIO,
  ...LV3_UNDERVALUE_STOCK,
  ...LV3_BPS_PBR,
];
