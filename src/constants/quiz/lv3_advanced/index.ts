import { LV3_VOLUME } from "./10_volume";
import { LV3_TECHNICAL } from "./11_technical";
import { LV3_SUPPORT_RESISTANCE } from "./12_support_resistance";
import { LV3_MOVING_AVERAGE } from "./13_moving_average";
import { LV3_GOLDEN_DEAD_CROSS } from "./14_golden_dead_cross";
import { LV3_STOCHASTIC } from "./15_stochastic";
import { LV3_RSI } from "./16_rsi";
import { LV3_BOLLINGER } from "./17_bollinger";
import { LV3_FINANCIAL_STATEMENTS } from "./1_financial_statements";
import { LV3_SALES_VS_PROFIT } from "./2_sales_vs_profit";
import { LV3_EARNINGS_SEASON } from "./3_earnings_season";
import { LV3_DEBT_RATIO } from "./4_debt_ratio";
import { LV3_UNDERVALUE_STOCK } from "./5_undervalue_stock";
import { LV3_BPS_PBR } from "./6_bps_pbr";
import { LV3_EPS_PER } from "./7_eps_per";
import { LV3_ROE } from "./8_roe";
import { LV3_EV_EBITDA } from "./9_ev_ebitda";

export const LV3_QUIZZES = [
  ...LV3_FINANCIAL_STATEMENTS,
  ...LV3_SALES_VS_PROFIT,
  ...LV3_EARNINGS_SEASON,
  ...LV3_DEBT_RATIO,
  ...LV3_UNDERVALUE_STOCK,
  ...LV3_BPS_PBR,
  ...LV3_EPS_PER,
  ...LV3_ROE,
  ...LV3_EV_EBITDA,
  ...LV3_VOLUME,
  ...LV3_TECHNICAL,
  ...LV3_SUPPORT_RESISTANCE,
  ...LV3_MOVING_AVERAGE,
  ...LV3_GOLDEN_DEAD_CROSS,
  ...LV3_STOCHASTIC,
  ...LV3_RSI,
  ...LV3_BOLLINGER,
];
