import React, { Component } from "react";
import { ImageBackground } from "react-native";
import {
    Container,
    Content,
    Item,
    Input,
    Button,
    Icon,
    View,
    Text
} from "native-base";
import { Field, reduxForm } from "redux-form";
// import { setUser } from "../../actions/user";
import styles from "./styles";

const background = require("./shadow.png");

const validate = values => {
    const error = {};
    return error;
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
        this.renderInput = this.renderInput.bind(this);
    }

    setUser(name) {
        this.props.setUser(name);
    }
    renderInput({
        input,
        label,
        type,
        meta: { touched, error, warning },
        inputProps
    }) {
        var hasError = false;
        if (error !== undefined) {
            hasError = true;
        }
        return (
            <Item error={hasError}>
                <Icon
                    active
                    name={input.name === "email" ? "person" : "unlock"}
                />
                <Input
                    placeholder={input.name === "email" ? "EMAIL" : "PASSWORD"}
                    {...input}
                />
                {hasError ? (
                    <Item style={{ borderColor: "transparent" }}>
                        <Icon
                            active
                            style={{ color: "red", marginTop: 5 }}
                            name="bug"
                        />
                        <Text style={{ fontSize: 15, color: "red" }}>
                            {error}
                        </Text>
                    </Item>
                ) : (
                    <Text />
                )}
            </Item>
        );
    }
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Content>
                        <ImageBackground
                            source={background}
                            style={styles.shadow}
                        >
                            <View style={styles.bg}>
                                <Field
                                    name="email"
                                    component={this.renderInput}
                                />
                                <Field
                                    name="password"
                                    component={this.renderInput}
                                />
                                <Button
                                    style={styles.btn}
                                    onPress={() =>
                                        this.props.navigation.navigate("Main")
                                    }
                                >
                                    <Text>Login</Text>
                                </Button>
                            </View>
                        </ImageBackground>
                    </Content>
                </View>
            </Container>
        );
    }
}
const LoginSwag = reduxForm(
    {
        form: "test",
        validate
    },
    function bindActions(dispatch) {
        return {
            setUser: name => dispatch(setUser(name))
        };
    }
)(Login);
LoginSwag.navigationOptions = {
    header: null
};
export default LoginSwag;
