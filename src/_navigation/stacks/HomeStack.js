import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ChatScreen from "../screens/ChatTest/ChatScreen";
// import LoginScreen from "../screens/LoginScreen";

const HomeStack = createStackNavigator(
    {
        // Login: LoginScreen,
        Home: HomeScreen,
        Details: DetailsScreen,
        Chat: ChatScreen
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
