import React, {Component, PropTypes} from 'react';
import mui from 'material-ui';
import Actions from '../actions';


var {
  Card,
  CardText,
  RaisedButton
} = mui;


export default class Login extends Component{

  onClick(){
    Actions.login(this.context.router);
  }

  static contextTypes = {
     router: PropTypes.object.isRequired
  };

  render(){
    return(
      <Card style={{
          'maxWidth': '800px',
          'margin': '30px auto',
          'padding': '50px'
        }}>
          <CardText style={{
            'textAlign': 'center'
          }}>
            To start chatting away, please log in with your Google account.
          </CardText>

          <RaisedButton style={{
            display: 'block',
          }} onClick={this.onClick.bind(this)}
          label="Log in with Google" primary={true} />
        </Card>
    );
  }
}
