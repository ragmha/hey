import React, {Component} from 'react';
import _ from 'lodash';
import mui from 'material-ui';

import Channel from './Channel.jsx';

import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore.js';

const {Card, List, CircularProgress} = mui;

@connectToStores
export default class ChannelList extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.selectedChannel = this.props.params.channel;
    ChatStore.getChannels(this.selectedChannel);
  }

  componentWillReceiveProps(nextProps){
    if(this.selectedChannel != nextProps.params.channel){
      this.selectedChannel = nextProps.params.channel;
      ChatStore.getChannels(this.selectedChannel);
    }
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores(){
    return ChatStore.getState();
  }

  render(){
    if(!this.props.channels){
      return (
        <Card style={{
            flexGrow:1
          }}>
          <CircularProgress
            mode="indeterminate"
            style={{
              paddingTop: '20px',
              padingBottom: '20px',
              margin: '0 auto',
              display: 'block',
              width: '60px'
            }}
            />
        </Card>
      );
    }
    var channelNodes = _(this.props.channels)
        .keys()
        .map((k, i) => {
          let channel = this.props.channels[k];
          return (
            <Channel key={i} channel={channel}/>
          );
        })
        .value();

    return (
      <Card style={{
          flexGrow: 1
        }}>
        <List>{channelNodes}</List>
      </Card>
    );

  }

}
