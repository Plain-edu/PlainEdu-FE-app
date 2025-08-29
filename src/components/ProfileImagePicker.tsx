import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, Image, Pressable, View } from "react-native";

export default function ProfileImagePicker() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // 갤러리 접근
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("권한 필요", "갤러리 접근 권한이 필요합니다.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, // 자르기 허용
      aspect: [1, 1], // 정사각형
      quality: 0.8,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View className="self-center mb-[24px]">
      <View className="w-[150px] h-[150px] rounded-full bg-[#F0F2F5] items-center justify-center">
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : require("@/assets/images/profile-placeholder.png")
          }
          className="w-[144px] h-[144px] rounded-full"
          resizeMode="cover"
        />
        <Pressable onPress={pickImage} className="absolute bottom-2 right-2">
          <Image
            source={require("@/assets/images/profile-plus-icon.png")}
            className="w-[30px] h-[30px]"
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </View>
  );
}