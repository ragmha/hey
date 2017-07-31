import React, {Component, PropTypes} from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import ChatStore from '../stores/ChatStore';


export default class Chat extends Component {
  render(){
    return (
      <div>
        <div style={{
            display: 'flex',
            flexFlow: 'row wrap',
            maxWidth: 1200,
            width: '100%',
            margin: '30px auto 30px'
          }}>
            <ChannelList {...this.props}/>
            <MessageList />
        </div>
          <MessageBox />
      </div>
    );
  }

  static reqAuth(nextState, transition){
    var state = ChatStore.getState();
    if(!state.user){
     transition.to('/login');
    }
  }

}
