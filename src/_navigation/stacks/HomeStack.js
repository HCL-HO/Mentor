import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ChatScreen from "../screens/ChatTest/ChatScreen";
import PageNames from "../PageConst";
// import LoginScreen from "../screens/LoginScreen";

const HomeStack = createStackNavigator(
    {
        // Login: LoginScreen,
        [PageNames.HOME]: HomeScreen,
        [PageNames.DETAILS]: DetailsScreen,
        [PageNames.CHAT]: ChatScreen
    },
    {
        headerMode: "none"
    }
);

// LoginScreen.navigationOptions = ({ navigation }) => {
//     let tabBarVisible = true;
//     if (navigation.state.index > 0) {
//         tabBarVisible = false;
//     }
//     return {
//         tabBarVisible
//     };
// };

export default HomeStack;
