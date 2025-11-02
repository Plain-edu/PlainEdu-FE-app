// 초급 (lv-1)
import { LV1_STOCK_INTRO } from "./lv1_basic/1_stock_intro";
import { LV1_MARKET_CAP } from "./lv1_basic/2_market_cap";
import { LV1_MARKET_INDEX } from "./lv1_basic/3_market_index";
import { LV1_MARKET_INDEX_PART1 } from "./lv1_basic/4_market_index_part1";
import { LV1_MARKET_INDEX_PART2 } from "./lv1_basic/5_market_index_part2";

// 중급 (lv-2)
import { LV2_DIVERSIFICATION } from "./lv2_intermediate/1_diversification";
import { LV2_LEVERAGE } from "./lv2_intermediate/2_leverage";
import { LV2_ECONOMIC_NEWS } from "./lv2_intermediate/3_economic_news";
import { LV2_ETF_INTRO } from "./lv2_intermediate/4_etf_intro";

// 고급 (lv-3)
import { LV3_FINANCIAL_STATEMENTS } from "./lv3_advanced/1_financial_statements";
import { LV3_SALES_VS_PROFIT } from "./lv3_advanced/2_sales_vs_profit";
import { LV3_EARNINGS_SEASON } from "./lv3_advanced/3_earnings_season";
import { LV3_DEBT_RATIO } from "./lv3_advanced/4_debt_ratio";

export const LV1_QUIZZES = [
  ...LV1_STOCK_INTRO,           // 주식이란?
  ...LV1_MARKET_CAP,            // 시가총액
  ...LV1_MARKET_INDEX,
  ...LV1_MARKET_INDEX_PART1,    // 지수의 종류 1편
  ...LV1_MARKET_INDEX_PART2,    // 지수의 종류 2편
];

export const LV2_QUIZZES = [
  ...LV2_DIVERSIFICATION,       // 분산투자
  ...LV2_LEVERAGE,              // 대출 투자
  ...LV2_ECONOMIC_NEWS,         // 경제신문 활용법
  ...LV2_ETF_INTRO,             // ETF
];

export const LV3_QUIZZES = [
  ...LV3_FINANCIAL_STATEMENTS,  // 재무제표
  ...LV3_SALES_VS_PROFIT,       // 매출 vs 영업이익
  ...LV3_EARNINGS_SEASON,       // 어닝 시즌
  ...LV3_DEBT_RATIO,            // 부채비율
];

export const QUIZ_DATA = {
  "lv-1": LV1_QUIZZES,
  "lv-2": LV2_QUIZZES,
  "lv-3": LV3_QUIZZES,
};

