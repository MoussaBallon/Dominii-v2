import { View, Text, TextInput, StatusBar, ScrollView, StyleSheet } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/Categories";
import Pub from "../components/Pub";
import Resto from "../components/Resto";
import { Restaurants } from "../constants";
import { useNavigation } from "@react-navigation/native";



const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="light-content" />
      {/* <TabBar /> */}
      <View className="px-4 pt-6">
        <Text className="text-lg font-semibold pb-2">Bienvenue</Text>
        <Text className="font-bold text-2xl">Abdoul. 👋</Text>
      </View>
      {/* search bar */}

      <View className="flex flex-row items-center space-x-2 px-4 pb-2 pt-6">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Cuisiniers, plats" className="ml-2 flex-1" />
        </View>
      </View>
      <Categories />
      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20 }}
      >
        <Pub />
        {/* featured */}
        <View className="mt-5">
          {Restaurants.map((resto, index) => {
            return <Resto items={resto} key={index} />;
          })}
        </View>
      </ScrollView> 
    </SafeAreaView>
  );
  
};

export default HomeScreen;
