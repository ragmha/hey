import React, {Component} from 'react';
import { Router} from 'react-router';


import ThemeManager from 'material-ui/lib/styles/theme-manager';
import AppBar from 'material-ui/lib/app-bar';
import MyTheme from './Theme.jsx';


export default class App extends Component {
  constructor(){
    super();
  }

  static childContextTypes = {
   muiTheme: React.PropTypes.object
 }



 getChildContext(){
   return {
     muiTheme: ThemeManager.getMuiTheme(MyTheme)
   };
 }

  render(){
    return(
      <div>
        <AppBar title="Awesome Chat"/>
       {this.props.children}
      </div>
    );
  }
}
