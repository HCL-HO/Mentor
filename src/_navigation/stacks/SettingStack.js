import React from "react";
import { createStackNavigator } from "react-navigation";
import DetailsScreen from "../screens/DetailsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import PageNames from "../PageConst";

export default createStackNavigator(
    {
        [PageNames.SETTINGS]: SettingsScreen,
        [PageNames.DETAILS]: DetailsScreen
    },
    {
        headerMode: "none"
    }
);
