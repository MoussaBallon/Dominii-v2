import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Menu = ({ item }) => {
  return (
    <ScrollView>
      <View className="flex-row items-center bg-white p-3 h-full rounded-3xl shadow-2xl mx2">
        <Image
          className="rounded-3xl"
          style={{ height: 100, width: 100 }}
          source={item.image}
        />
        <View className="flex flex-1 space-y-3">
          <View className="pl-3">
            <Text className="text-xl">{dish.name}</Text>
            <Text className="text-gray-700">{item.description}</Text>
          </View>
          <View className="flex-row justify-between pl-3 items-center">
            <Text className="text-gray-700 text-lg font-bold">
              {item.price} FCFA
            </Text>
            <View className="flex-row items-center">
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  onPress={Dininue}
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={"white"}
                />
              </TouchableOpacity>
              <Text className="px-3">{nbr}</Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Plus
                  onPress={Augmente}
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={"white"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Menu;
