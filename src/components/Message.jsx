import React, {Component} from 'react';
import mui from 'material-ui';

const {ListItem, Avatar} = mui;

export default class Message extends Component {
  constructor(props){
    super(props);
  }
  render(){
      return(
        <ListItem
          leftAvatar={<Avatar src={this.props.message.profilePic} />}
        >{this.props.message.message}</ListItem>
      );
  }
}
