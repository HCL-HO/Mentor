import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

export default createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
    },
    {
        headerMode: "none"
    }
);
