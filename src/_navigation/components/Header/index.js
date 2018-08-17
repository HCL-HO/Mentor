import React, { Component } from "react";
import { Header, Title, Button, Left, Body, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons"; // Version can be specified in package.json
import { View, StyleSheet } from "react-native";

export default class SharedHeader extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <Header
            // style={{
            //     width: "100%",
            //     height: "100%",
            //     backgroundColor: "yellow"
            // }}
            // style={style.headerContainer}
            >
                <Ionicons
                    style={{ margin: 5 }}
                    name="ios-information-circle"
                    size={50}
                    color="green"
                />
            </Header>
        );
    }
}

const style = StyleSheet.create({
    headerContainer: {
        backgroundColor: "yellow",
        height: 50,
        width: "100%"
    }
});
