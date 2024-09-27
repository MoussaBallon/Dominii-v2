import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
// import * as Icon from "react-native-feather";
// import Icon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';


const TabBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.tabItem}>
          <Icon name="home" color="orange" size={30} />
          <Text style={styles.tabText}>Acceuil</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Resto")} style={styles.tabItem}>
        <Icon name="store" color="orange" size={30} />
          <Text style={styles.tabText}>Resto</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Panier")} style={styles.tabItem}>
          <Icon name="shopping-cart" color="orange" size={30} />
          <Text style={styles.tabText}>Panier</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Order")} style={styles.tabItem}>
        <Icon name="receipt-long" color="orange" size={30} />
          <Text style={styles.tabText}>reçus</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profil")} style={styles.tabItem}>
        <Icon name="person" color="orange" size={30} />
          <Text style={styles.tabText}>Profil</Text>
        </TouchableOpacity>
      </View>
    </View>


    // <View className="absolute top-96 w-full z-50 pt-96 -pb-10">
    //   <View
    //     style={{ backgroundColor: "gray" }}
    //     className="flex-row justify-between items-center mx-4 rounded-full p-4 py-3 shadow-lg"
    //   >
    //     <View>
    //       <TouchableOpacity onPress={() => navigation.navigate("Home")}>
    //         <Icon.Home color="orange" width="35" height="30" />
    //         <Text className="text-white">Home</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <View>
    //       <TouchableOpacity onPress={() => navigation.navigate("Resto")}>
    //         <Text className="text-white">Resto</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <View>
    //       <TouchableOpacity onPress={() => navigation.navigate("Panier")}>
    //         <Icon.ShoppingBag color="orange" width="35" height="30" />
    //         <Text className="text-white">Panier</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <View>
    //       <TouchableOpacity onPress={() => navigation.navigate("Order")}>
    //         <Text className="text-white">Order</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <View>
    //       <TouchableOpacity onPress={() => navigation.navigate("Profil")}>
    //         <Text className="text-white">Profil</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </View>
  );
};
const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    zIndex: 50,
  },
  tabBar: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
    borderRadius: 25,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // Android shadow
    opacity: 0.8,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
});

export default TabBar;

