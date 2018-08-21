import React, { Component } from "react";
import PropTypes from "prop-types";

import { Body, Thumbnail, Grid, Col, Text } from "native-base";

import styles from "./style";

export default class ItemBody extends Component {
    static propTypes = {
        iconActive: PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);

        this.isActive = false;
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.currentPage !== nextProps.currentPage) {
            const nextPageActive = this.props.id === nextProps.currentPage;
            if (this.isActive !== nextPageActive) {
                this.isActive = nextPageActive;
                return true;
            }
        }
        return false;
    }

    render() {
        return (
            <Body>
                <Grid>
                    <Col size={1}>
                        <Thumbnail
                            small
                            square
                            source={
                                this.props.id === this.props.currentPage
                                    ? this.props.iconActive
                                    : this.props.icon
                            }
                        />
                    </Col>
                    <Col size={4} style={styles.verticalCenter}>
                        <Text
                            style={[
                                styles.itemText,
                                this.props.id === this.props.currentPage &&
                                    styles.activeText
                            ]}
                        >
                            {this.props.title}
                        </Text>
                    </Col>
                    <Col
                        size={3}
                        style={[styles.verticalCenter, styles.alignRight]}
                    >
                        {this.props.tips && this.props.tips}
                    </Col>
                </Grid>
            </Body>
        );
    }
}
