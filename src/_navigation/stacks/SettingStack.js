import React from "react";
import { createStackNavigator } from "react-navigation";
import DetailsScreen from "../screens/DetailsScreen";
import SettingsScreen from "../screens/SettingsScreen";

export default createStackNavigator(
    {
        Settings: SettingsScreen,
        Details: DetailsScreen
    },
    {
        headerMode: "none"
    }
);
