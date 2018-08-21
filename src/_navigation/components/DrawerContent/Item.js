import React, { Component } from "react";

import { ListItem } from "native-base";
import Body from "./item-body";

import styles from "./style";

export default class ActionItem extends Component {
    constructor(props) {
        super(props);

        this.currentPage = null;
        this.isActive = false;
    }

    shouldComponentUpdate(nextProps) {
        // const nextPage = this.props._currentPage(nextProps.navigation);
        // if (this.currentPage !== nextPage) {
        //     this.currentPage = nextPage;
        //     const nextPageActive = this.props.id === nextPage;
        //     if (this.isActive !== nextPageActive) {
        //         this.isActive = nextPageActive;
        //         return true;
        //     }
        // }
        return this.props.disabled !== nextProps.disabled;
    }

    onItemPress = () => this.props.onPress(this.props.id);

    render() {
        return (
            <ListItem
                button
                style={[
                    styles.itemsContainer,
                    this.props.disabled && styles.disabled,
                    this.props.id === this.currentPage && styles.active
                ]}
                onPress={
                    !this.props.disabled && this.props.onPress
                        ? this.onItemPress
                        : null
                }
            >
                <Body {...this.props} currentPage={this.currentPage} />
            </ListItem>
        );
    }
}
