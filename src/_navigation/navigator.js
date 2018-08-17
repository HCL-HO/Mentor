import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Version can be specified in package.json
import {
    createBottomTabNavigator,
    createSwitchNavigator
} from "react-navigation";
import HomeStack from "./stacks/HomeStack";
import SettingsStack from "./stacks/SettingStack";
import LoginScreen from "./screens/LoginScreen";

const BottomTab = createBottomTabNavigator(
    {
        Home: HomeStack,
        Settings: SettingsStack
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === "Home") {
                    iconName = `ios-information-circle${
                        focused ? "" : "-outline"
                    }`;
                } else if (routeName === "Settings") {
                    iconName = `ios-options${focused ? "" : "-outline"}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            }
        })
        /* Other configuration remains unchanged */
    }
);

const Navigator = createSwitchNavigator(
    {
        Login: LoginScreen,
        Main: BottomTab
    },
    {
        headerMode: "none"
    }
);

export default Navigator;
