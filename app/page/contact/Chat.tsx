import React from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'

export default class Example extends React.Component {
  public state = {
    messages: []
  }

  public componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        }
      ]
    })
  }

  public onSend(messages = []) {
    this.setState((previousState: { messages: IMessage[] }) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages)
      }
    })
  }

  public render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages:never[]) => this.onSend(messages)}
        user={{
          _id: 1
        }}
      />
    )
  }
}
