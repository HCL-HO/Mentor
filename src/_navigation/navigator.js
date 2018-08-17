import { createSwitchNavigator } from "react-navigation";
import LoginScreen from "./screens/LoginScreen";
import Drawer from "./stacks/Drawer";

const Navigator = createSwitchNavigator(
    {
        Login: LoginScreen,
        MainStack: Drawer
    },
    {
        headerMode: "none"
    }
);

export default Navigator;
