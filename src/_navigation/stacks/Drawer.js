import React from "react";
import { createStackNavigator } from "react-navigation";
import BottomTab from "./BottomNavigator";
import { createDrawerNavigator } from "react-navigation";
import SettingsStack from "./SettingStack";
import DrawerComponent from "../components/DrawerContent/DrawerContent";

import PageNames from "../PageConst";

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
        [PageNames.MainStack]: MainStack,
        [PageNames.SettingsStack]: SettingsStack
        // BottomTab: MainStack
    },
    {
        contentComponent: DrawerComponent
    }
);

export default Drawer;
