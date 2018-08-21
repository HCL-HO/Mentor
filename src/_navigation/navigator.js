import { createSwitchNavigator } from "react-navigation";
import LoginScreen from "./screens/LoginScreen";
import Drawer from "./stacks/Drawer";
import PagesNames from "./PageConst";

const Navigator = createSwitchNavigator(
    {
        [PagesNames.LOGIN]: LoginScreen,
        [PagesNames.Drawer]: Drawer
    },
    {
        headerMode: "none"
    }
);

export default Navigator;
