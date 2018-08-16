import { GiftedChat } from 'react-native-gifted-chat';
import React from 'react';

export default class Example extends React.Component {
    state = {
        messages: [],
        receivedMsgId: 0,
    };

    componentWillMount() {
        const initMsg = this._getBotMsg('Hello Developer');
        this.setState({
            messages: [initMsg],
        });
    }

    _getBotMsg(msg) {
        const id = this.getReceivedId();
        return {
            _id: id,
            text: msg,
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
        };
    }

    getReceivedId() {
        const receivedMsgId = this.state.receivedMsgId;
        const currentId = receivedMsgId + 1;
        this.setState({ receivedMsgId: currentId });
        return currentId;
    }

    _autoReply(msg) {
        const result = this._getBotMsg(msg);
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, result),
        }));

    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));

        setTimeout(() => {
            console.log(this.state.messages);
            this._autoReply(messages[0].text);
        }, 1000);
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        );
    }
}