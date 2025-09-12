import { ImageSourcePropType } from "react-native";

export interface StoreItem {
  id: number;
  image: ImageSourcePropType;
  brand: string;
  title: string;
  price: string;
}

export const STORE_ITEMS: StoreItem[] = [
  {
    id: 1,
    image: require("../../assets/images/example/twosome.png"),
    brand: "투썸플레이스",
    title: "떠먹는 스트로베리 초콜릿 생크림",
    price: "7,200원",
  },
  {
    id: 2,
    image: require("../../assets/images/example/baskinrobbins.png"),
    brand: "베스킨라빈스",
    title: "파인트 아이스크림",
    price: "9,800원",
  },
  {
    id: 3,
    image: require("../../assets/images/example/oliveyoung.png"),
    brand: "올리브영",
    title: "기프트카드 5천원권",
    price: "5,000원",
  },
  {
    id: 4,
    image: require("../../assets/images/example/bubble.png"),
    brand: "디어유 버블",
    title: "Lysn 1인권",
    price: "4,500원",
  },
  {
    id: 5,
    image: require("../../assets/images/example/baemin.png"),
    brand: "배달의민족",
    title: "배민상품권 5천원 교환권",
    price: "5,000원",
  },
  {
    id: 6,
    image: require("../../assets/images/example/webtoon.png"),
    brand: "네이버웹툰",
    title: "디지털 기프트 카드 1만원권",
    price: "10,000원",
  },
];
