import { LV1_HTS_MTS } from "./10_hts_mts";
import { LV1_ORDERBOOK } from "./11_orderbook";
import { LV1_ORDER_TYPES } from "./12_order_types";
import { LV1_MARKET_TIME } from "./13_market_time";
import { LV1_DIVIDEND } from "./14_divided";
import { LV1_DIVIDEND_RULES } from "./15_divided_rules";
import { LV1_COMMON_PREFERRED } from "./16_common_preferred";
import { LV1_STOCK_INTRO } from "./1_stock_intro";
import { LV1_MARKET_CAP } from "./2_market_cap";
import { LV1_MARKET_INDEX } from "./3_market_index";
import { LV1_MARKET_INDEX_PART1 } from "./4_market_index_part1";
import { LV1_MARKET_INDEX_PART2 } from "./5_market_index_part2";
import { LV1_BOND_INTRO } from "./6_bond_intro";
import { LV1_INVEST_DANGER } from "./7_invest_danger";
import { LV1_SECURITIES_CHOICE } from "./8_securities_choice";
import { LV1_ACCOUNT_OPENING } from "./9_account_opening";

export const LV1_QUIZZES = [
  ...LV1_STOCK_INTRO,
  ...LV1_MARKET_CAP,
  ...LV1_MARKET_INDEX,
  ...LV1_MARKET_INDEX_PART1,
  ...LV1_MARKET_INDEX_PART2,
  ...LV1_BOND_INTRO,
  ...LV1_INVEST_DANGER,
  ...LV1_SECURITIES_CHOICE,
  ...LV1_ACCOUNT_OPENING,
  ...LV1_HTS_MTS,
  ...LV1_ORDERBOOK,
  ...LV1_ORDER_TYPES,
  ...LV1_MARKET_TIME,
  ...LV1_DIVIDEND,
  ...LV1_DIVIDEND_RULES,
  ...LV1_COMMON_PREFERRED,
];
