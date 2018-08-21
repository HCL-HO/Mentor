import React, { Component } from "react";
import { DrawerItems, SafeAreaView } from "react-navigation";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import Items from "./DrawerItems";

export default class DrawerExample extends Component {
    render() {
        return (
            <ScrollView style={style.container}>
                <SafeAreaView
                    forceInset={{ top: "always", horizontal: "never" }}
                >
                    <View style={style.header}>
                        <Text>Testing</Text>
                    </View>
                    <View style={style.topContainer}>
                        <Image
                            style={{
                                flex: 1,
                                alignSelf: "stretch",
                                width: undefined,
                                height: 300
                            }}
                            source={require("_image/shadow.png")}
                            resizeMethod="scale"
                            resizeMode="contain"
                        />
                    </View>
                    <Items {...this.props} />
                    {/* <DrawerItems {...this.props} /> */}
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "green",
        flex: 1
    },
    header: { alignItems: "center", height: 30 },
    topContainer: {
        flex: 1,
        backgroundColor: "yellow"
    }
});
