import { ImageSourcePropType } from "react-native";

export interface Stock {
  id: number;
  logo: ImageSourcePropType; // string → ImageSourcePropType 변경
  name: string;
  quantity: string;
  value: string;
  profit: string;
  profitRate: number;
}
