import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ChatScreen from '../screens/ChatScreen';

export default createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        Chat: ChatScreen,
    },
    {
        headerMode: 'none',
    },
);
