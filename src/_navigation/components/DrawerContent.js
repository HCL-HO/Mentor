import React, { Component } from "react";
import { DrawerItems, SafeAreaView } from "react-navigation";
import { ScrollView, View, Text, Image } from "react-native";

export default class DrawerExample extends Component {
    render() {
        return (
            <ScrollView>
                <SafeAreaView
                    // style={styles.container}
                    forceInset={{ top: "always", horizontal: "never" }}
                >
                    <View>
                        <Text>Testing</Text>
                        <Image source={require("_image/shadow.png")} />
                    </View>
                    <DrawerItems {...this.props} />
                </SafeAreaView>
            </ScrollView>
        );
    }
}
