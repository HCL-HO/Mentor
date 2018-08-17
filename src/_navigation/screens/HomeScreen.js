import React from "react";
import { Button, Text } from "react-native";
import { View, Container, Content } from "native-base";
import { DrawerActions } from "react-navigation";
import Header from "../components/Header/index";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.navigation);
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    }

    render() {
        return (
            <Container>
                <Header />
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
                        onPress={() =>
                            this.props.navigation.navigate("Details")
                        }
                    />
                    <Button
                        title="Go to Chat"
                        onPress={() => this.props.navigation.navigate("Chat")}
                    />
                </View>
            </Container>
        );
    }
}
