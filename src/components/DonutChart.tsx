import React from "react";
import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface DonutChartProps {
  cash: number;
  etc: number;
  size?: number;
  strokeWidth?: number;
}

const DonutChart: React.FC<DonutChartProps> = ({
  cash,
  etc,
  size = 150,
  strokeWidth = 40,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = cash + etc;

  const cashRatio = cash / total;
  const etcRatio = etc / total;

  return (
    <View className="flex-row items-center justify-center mt-4 gap-5">
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#3B90FF"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference * cashRatio} ${circumference}`}
          strokeDashoffset={0} // 시작점
          rotation="-90"
          originX={size / 2}
          originY={size / 2}
          fill="transparent"
        />

        {/* 기타 (빨강) */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#FF3F3B"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference * etcRatio} ${circumference}`}
          strokeDashoffset={-circumference * cashRatio} // 현금 이후부터 시작
          rotation="-90"
          originX={size / 2}
          originY={size / 2}
          fill="transparent"
        />
      </Svg>

      {/* 범례 */}
      <View className="ml-6">
        <View className="flex-row items-center mb-2">
          <View
            className="w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: "#3B90FF" }}
          />
          <Text>현금</Text>
        </View>
        <View className="flex-row items-center">
          <View
            className="w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: "#FF3F3B" }}
          />
          <Text>기타</Text>
        </View>
      </View>
    </View>
  );
};

export default DonutChart;
