import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { createBottomTabNavigator } from 'react-navigation';
import HomeStack from './stacks/HomeStack';
import SettingsStack from './stacks/SettingStack';

const BottomTab = createBottomTabNavigator(
    {
        Home: HomeStack,
        Settings: SettingsStack,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${
                        focused ? '' : '-outline'
                        }`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        /* Other configuration remains unchanged */
    },
);
export default BottomTab;
