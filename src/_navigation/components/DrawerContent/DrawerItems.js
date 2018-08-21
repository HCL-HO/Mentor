import React, { Component } from "react";

import PageNames from "_navigation/PageConst";

import { Button, List, Text } from "native-base";
import ActionItem from "./Item";

export default class extends Component {
    render() {
        return (
            <List>
                <ActionItem
                    id={PageNames.HOME}
                    title={"Home"}
                    // eslint-disable-next-line import/no-unresolved,import/no-extraneous-dependencies
                    icon={require("_image/shadow.png")}
                    // eslint-disable-next-line import/no-unresolved,import/no-extraneous-dependencies
                    iconActive={require("_image/shadow.png")}
                    disabled={false}
                    onPress={this.onNavigate}
                />
            </List>
        );
    }
}
