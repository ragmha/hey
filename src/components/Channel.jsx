import React, {Component} from 'react';
import mui from 'material-ui';
import Actions from '../actions';

const {ListItem} = mui;

export default class Channel extends Component {
  constructor(props){
    super(props);
  }

  onClick(){
    Actions.channelOpened(this.props.channel);
  }

  render(){
    let style = {};

     if(this.props.channel.selected){
       style.backgroundColor = '#f0f0f0';
     }

      return(
        <ListItem
            href={'/#/chat/' + this.props.channel.key}
            key={this.props.channel.key}
            style={style}
            >{this.props.channel.name}</ListItem>
      );
  }
}
