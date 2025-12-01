import { LV2_SHORT_SELLING } from "./10_short_selling";
import { LV2_TREASURY_CANCELLATION } from "./11_treasury_cancellation";
import { LV2_FOUR_WITCHES_DAY } from "./12_four_witches_day";
import { LV2_DIVERSIFICATION } from "./1_diversification";
import { LV2_LEVERAGE } from "./2_leverage";
import { LV2_ECONOMIC_NEWS } from "./3_economic_news";
import { LV2_ETF_INTRO } from "./4_etf_intro";
import { LV2_EXCHANGE_RATE } from "./5_exchange_rate";
import { LV2_INTEREST_RATE } from "./6_interest_rate";
import { LV2_BASE_RATE } from "./7_base_rate";
import { LV2_IPO } from "./8_ipo";
import { LV2_INCREASE_DECREASE_CAPITAL } from "./9_increase_decrease_capital";

export const LV2_QUIZZES = [
  ...LV2_DIVERSIFICATION,
  ...LV2_LEVERAGE,
  ...LV2_ECONOMIC_NEWS,
  ...LV2_ETF_INTRO,
  ...LV2_EXCHANGE_RATE,
  ...LV2_INTEREST_RATE,
  ...LV2_BASE_RATE,
  ...LV2_IPO,
  ...LV2_INCREASE_DECREASE_CAPITAL,
  ...LV2_SHORT_SELLING,
  ...LV2_TREASURY_CANCELLATION,
  ...LV2_FOUR_WITCHES_DAY
];
