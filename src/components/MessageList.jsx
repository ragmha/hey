import React, {Component} from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';

import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore.js';

const {Card, List, CircularProgress} = mui;

@connectToStores
export default class MessageList extends Component {

  constructor(props){
    super(props);
    this.state = {
      messages : {}
    };
  }

  static getStores(){
    return [ChatStore];
  }

  static getPropsFromStores(){
    return ChatStore.getState();
  }

  render(){
    var messageNodes = null;

    if(!this.props.messagesLoading){
      messageNodes = _.values(this.props.messages).map((message) => {
        return (
          <Message key={message.message} message={message}/>
        );
      });
    }else{
      messageNodes = <CircularProgress mode="indeterminate"
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          margin: '0 auto',
          display: 'block',
          width: '60px'
        }} />;
    }

    return (
      <Card style={{
          flexGrow :2,
          marginLeft: 40
        }}>
        <List>{messageNodes}</List>
      </Card>
    );

  }

}
