import React from "react";
import { Button, Text, View } from "react-native";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {/* other code from before here */}
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate("Details")}
                />
                <Button
                    title="Go to Chat"
                    onPress={() => this.props.navigation.navigate("Chat")}
                />
            </View>
        );
    }
}
