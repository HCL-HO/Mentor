import React from "react";
import { createStackNavigator } from "react-navigation";
import BottomTab from "./BottomNavigator";
import { createDrawerNavigator } from "react-navigation";
import HomeStack from "./HomeStack";
import SettingsStack from "./SettingStack";

const MainStack = createStackNavigator(
    {
        // Login: LoginScreen,
        BottomTab: BottomTab
        // Drawer: Drawer
    },
    {
        headerMode: "none"
    }
);

const Drawer = createDrawerNavigator(
    {
        Home: MainStack,
        Settings: SettingsStack
        // BottomTab: MainStack
    },
    {}
);

export default Drawer;
