import React, { forwardRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";

type CarrierBottomSheetProps = {
  onSelect: (carrier: string) => void;
};

const carriers = ["SKT", "KT", "LG U+", "SKT 알뜰폰", "KT 알뜰폰", "LG U+ 알뜰폰"];

export const CarrierBottomSheet = forwardRef<Modalize, CarrierBottomSheetProps>(
  ({ onSelect }, ref) => {
    return (
      <Modalize ref={ref} adjustToContentHeight>
        <View className="bg-white p-4 items-center">
          {carriers.map((c, index) => (
            <TouchableOpacity
              key={c}
              onPress={() => onSelect(c)}
              className="w-full items-center py-3"
              style={{
                borderTopWidth: index === 0 ? 1 : 0,
                borderBottomWidth: 1,
                borderColor: "#E7E7E7",
                borderRadius: 24,
                marginTop: index === 0 ? 0 : 8, // 버튼 간 간격
              }}
            >
              <Text
                className="text-center"
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: "500",
                  fontSize: 18,
                  lineHeight: 28,
                  color: "#3D4D5C",
                }}
              >
                {c}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modalize>
    );
  }
);
