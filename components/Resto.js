import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Resto = ({ items }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Resto", { ...items })}
      >
        <View className="flex flex-col  rounded-lg mb-4">
          <Image source={items.image} className="h-36 w-full rounded-lg" />
          <View className="flex flex-row pr-2">
            <Text className="font-bold text-xl text-gray-700 pt-2">
              {items.name}
            </Text>
            <Text className="text-lg pl-4 pt-2 text-gray-700">
              .{items.adresse}
            </Text>
          </View>
          <Text className="font-semibold text-lg text-gray-700">
            {items.category}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Resto;
