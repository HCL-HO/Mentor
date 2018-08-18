import React, { Component } from "react";
import { Header, Title, Button, Left, Body, Icon, Right } from "native-base";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";

export default class SharedHeader extends Component {
    static propTypes = {
        leftIcon: PropTypes.string,
        leftIconAction: PropTypes.func
    };

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <Header>
                <Left>
                    {this.props.leftIcon &&
                        this.props.leftIconAction && (
                            <Button
                                transparent
                                onPress={this.props.leftIconAction}
                            >
                                <Icon name={this.props.leftIcon} />
                            </Button>
                        )}
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name="search" />
                    </Button>
                    <Button transparent>
                        <Icon name="heart" />
                    </Button>
                    <Button transparent>
                        <Icon name="more" />
                    </Button>
                </Right>
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
