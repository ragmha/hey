import alt from '../alt';
import Firebase from 'firebase';

class Actions {
  constructor(){
    this.generateActions(
      'channelsRecieved',
      'channelsFailed',
      'messagesRecieved',
      'messagesFailed',
      'channelOpened',
      'messagesLoading',
      'sendMessage',
      'messageSendSuccess',
      'messageSendError',
      'messageRecieved'
    );
  }

  login(router){
    return (dispatch) =>{
      var firebaseRef = new Firebase('https://rgbchat.firebaseio.com/');
      firebaseRef.authWithOAuthPopup("google",(error, user) =>{
        if(error){
          return;
        }
        dispatch(user);

        router.push('/chat');
      });
    }
  }

}


export default alt.createActions(Actions);
