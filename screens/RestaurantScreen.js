import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import Menu from "../components/Memu";
import index from "../constants/index";
import Resto from "../components/Resto";

const RestaurantScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  // console.log(params);
  let items = params?.Restaurants;
  if (!items || !items.image) {
    return <Text>Les données du restaurant sont manquantes</Text>;
  }
  return (
    <SafeAreaView>
      <View>
        <StatusBar style="light" />
        <ScrollView>
          <View className="relative">
            <Image className="w-full h-60" source={items.image}/>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="absolute z-10 rounded-full p-1 shadow top-5 left-2 bg-green-400"
            >
              <Icon.ArrowLeft strokeWidth={3} stroke="white" />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ScrollView>         
          {/* <View
            style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
            className="bg-white pt-3"
          >
            <View className="px-5">
              <Text className="text-3xl font-bold">{items.name}</Text>
              <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                  <Text className="text-xs">
                    <Text className="text-gray-700">
                      <Text className="font-semibold">{items.categories}</Text>
                    </Text>
                  </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                  <Icon.MapPin color="gray" width="20" height="20" />
                  <Text className="text-gray-700 text-xs">
                    A {items.adresse}
                  </Text>
                </View>
              </View>
              <Text className="text-gray-500 mt-2">{items.description}</Text>
            </View>
          </View> */}
              <View>
      <Text>{restaurant.name}</Text>
      <Image source={restaurant.image} style={{ width: 100, height: 100 }} />
      <Text>Adresse: {restaurant.adresse}</Text>

    </View>
          <View className="pb-36 bg-white">
            <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
            {/* Nourriture */}
            {index.nourriture.map((dish, index) => (
              <Menu item={{ ...dish }} key={index} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
