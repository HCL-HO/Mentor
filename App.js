import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Root } from "native-base";
import { Provider } from "react-redux";
import store from "_redux/store";
import Navigator from "_navigation/navigator";
import { Font, AppLoading } from "expo";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
    }

    render() {
        return (
            <Provider store={store}>
                <Root>
                    {this.state.loading ? <AppLoading /> : <Navigator />}
                </Root>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});

//TODO
/*
    1. setup login
    2. checkout firebase message
    3. layouts 
*/
