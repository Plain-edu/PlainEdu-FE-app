// 초급 (lv-1)
import { LV1_HTS_MTS } from "./lv1_basic/10_hts_mts";
import { LV1_ORDERBOOK } from "./lv1_basic/11_orderbook";
import { LV1_ORDER_TYPES } from "./lv1_basic/12_order_types";
import { LV1_MARKET_TIME } from "./lv1_basic/13_market_time";
import { LV1_DIVIDEND } from "./lv1_basic/14_divided";
import { LV1_DIVIDEND_RULES } from "./lv1_basic/15_divided_rules";
import { LV1_COMMON_PREFERRED } from "./lv1_basic/16_common_preferred";
import { LV1_STOCK_INTRO } from "./lv1_basic/1_stock_intro";
import { LV1_MARKET_CAP } from "./lv1_basic/2_market_cap";
import { LV1_MARKET_INDEX } from "./lv1_basic/3_market_index";
import { LV1_MARKET_INDEX_PART1 } from "./lv1_basic/4_market_index_part1";
import { LV1_MARKET_INDEX_PART2 } from "./lv1_basic/5_market_index_part2";
import { LV1_BOND_INTRO } from "./lv1_basic/6_bond_intro";
import { LV1_INVEST_DANGER } from "./lv1_basic/7_invest_danger";
import { LV1_SECURITIES_CHOICE } from "./lv1_basic/8_securities_choice";
import { LV1_ACCOUNT_OPENING } from "./lv1_basic/9_account_opening";


// 중급 (lv-2)
import { LV2_SHORT_SELLING } from "./lv2_intermediate/10_short_selling";
import { LV2_TREASURY_CANCELLATION } from "./lv2_intermediate/11_treasury_cancellation";
import { LV2_FOUR_WITCHES_DAY } from "./lv2_intermediate/12_four_witches_day";
import { LV2_DIVERSIFICATION } from "./lv2_intermediate/1_diversification";
import { LV2_LEVERAGE } from "./lv2_intermediate/2_leverage";
import { LV2_ECONOMIC_NEWS } from "./lv2_intermediate/3_economic_news";
import { LV2_ETF_INTRO } from "./lv2_intermediate/4_etf_intro";
import { LV2_EXCHANGE_RATE } from "./lv2_intermediate/5_exchange_rate";
import { LV2_INTEREST_RATE } from "./lv2_intermediate/6_interest_rate";
import { LV2_BASE_RATE } from "./lv2_intermediate/7_base_rate";
import { LV2_IPO } from "./lv2_intermediate/8_ipo";
import { LV2_INCREASE_DECREASE_CAPITAL } from "./lv2_intermediate/9_increase_decrease_capital";

// 고급 (lv-3)
import { LV3_VOLUME } from "./lv3_advanced/10_volume";
import { LV3_TECHNICAL } from "./lv3_advanced/11_technical";
import { LV3_SUPPORT_RESISTANCE } from "./lv3_advanced/12_support_resistance";
import { LV3_MOVING_AVERAGE } from "./lv3_advanced/13_moving_average";
import { LV3_GOLDEN_DEAD_CROSS } from "./lv3_advanced/14_golden_dead_cross";
import { LV3_STOCHASTIC } from "./lv3_advanced/15_stochastic";
import { LV3_RSI } from "./lv3_advanced/16_rsi";
import { LV3_BOLLINGER } from "./lv3_advanced/17_bollinger";
import { LV3_FINANCIAL_STATEMENTS } from "./lv3_advanced/1_financial_statements";
import { LV3_SALES_VS_PROFIT } from "./lv3_advanced/2_sales_vs_profit";
import { LV3_EARNINGS_SEASON } from "./lv3_advanced/3_earnings_season";
import { LV3_DEBT_RATIO } from "./lv3_advanced/4_debt_ratio";
import { LV3_UNDERVALUE_STOCK } from "./lv3_advanced/5_undervalue_stock";
import { LV3_BPS_PBR } from "./lv3_advanced/6_bps_pbr";
import { LV3_EPS_PER } from "./lv3_advanced/7_eps_per";
import { LV3_ROE } from "./lv3_advanced/8_roe";
import { LV3_EV_EBITDA } from "./lv3_advanced/9_ev_ebitda";

export const LV1_QUIZZES = [
  ...LV1_STOCK_INTRO,           // 주식이란?
  ...LV1_MARKET_CAP,            // 시가총액
  ...LV1_MARKET_INDEX,
  ...LV1_MARKET_INDEX_PART1,    // 지수의 종류 1편
  ...LV1_MARKET_INDEX_PART2,    // 지수의 종류 2편
  ...LV1_ACCOUNT_OPENING,
  ...LV1_BOND_INTRO,
  ...LV1_COMMON_PREFERRED,
  ...LV1_DIVIDEND,
  ...LV1_DIVIDEND_RULES,
  ...LV1_HTS_MTS,
  ...LV1_INVEST_DANGER,
  ...LV1_MARKET_TIME,
  ...LV1_ORDER_TYPES,
  ...LV1_ORDERBOOK,
  ...LV1_SECURITIES_CHOICE,
];

export const LV2_QUIZZES = [
  ...LV2_DIVERSIFICATION,       // 분산투자
  ...LV2_LEVERAGE,              // 대출 투자
  ...LV2_ECONOMIC_NEWS,         // 경제신문 활용법
  ...LV2_ETF_INTRO,             // ETF
  ...LV2_EXCHANGE_RATE,
  ...LV2_INTEREST_RATE,
  ...LV2_BASE_RATE,
  ...LV2_IPO,
  ...LV2_INCREASE_DECREASE_CAPITAL,
  ...LV2_SHORT_SELLING,
  ...LV2_TREASURY_CANCELLATION,
  ...LV2_FOUR_WITCHES_DAY,
];

export const LV3_QUIZZES = [
  ...LV3_FINANCIAL_STATEMENTS,  // 재무제표
  ...LV3_SALES_VS_PROFIT,       // 매출 vs 영업이익
  ...LV3_EARNINGS_SEASON,       // 어닝 시즌
  ...LV3_DEBT_RATIO,            // 부채비율
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

export const QUIZ_DATA = {
  "lv-1": LV1_QUIZZES,
  "lv-2": LV2_QUIZZES,
  "lv-3": LV3_QUIZZES,
};

