/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';


import {
  Platform,
  StyleSheet,
  Text,
  View, WebView, Button
} from 'react-native';

import {
  decode,
  encode
} from 'base-64'

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}
import {
  CometChat
} from '@cometchat-pro/chat';


// this.strophe=require('/opt/lampp/htdocs/reacyt-native-demo/stropheexample/node_modules/strophe.js/dist/strophe.js').Strophe;

// let connection = new strophe.Connection("ws://encke.cometchat-dev.com:80/ws/");
// connection.connect("[12573e6ce3866]uidd1@encke.cometchat-dev.com/asfasfa", "user", status => {
//   console.log(status);
// });

import DOMParser from 'react-native-dom-parser';




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
if(!CometChat.isInitialized())
CometChat.init("1089f54cd9e81d").then(() => {
  console.log("intialized");  
  // this.document = new DOMParser().parseFromString("<?xml version='1.0'?>", 'text/xml');  
});



  // const appId = "1089f54cd9e81d",
  //   invalidUid = 'jstestuser',
  //   invalidApiKey = '3de4f1672b44a43f1593ea03a27e3b3202a3869C',
  //   apiKey = "fe9d19181100853ce4aab9c096ea851716cd9554",
  //   authToken = "jstestuser1_01def4b6af98b28b7a9a00d55c57460eb1081b7f";

this.DOMParser = require('xmldom').DOMParser;
this.document = new this.DOMParser().parseFromString("<?xml version='1.0'?>", 'text/xml');

var listnerID = "UNIQUE_LISTENER_ID";
CometChat.addCallListener(
  "listnerID",
  new CometChat.CallListener({
    onIncomingCallReceived(call) {
      console.log("Incoming call:", JSON.stringify(call));
      // Handle incoming call
    },
    onOutgoingCallAccepted(call) {
      console.log("Outgoing call accepted:", JSON.stringify(call));
      // Outgoing Call Accepted
    },
    onOutgoingCallRejected(call) {
      console.log("Outgoing call rejected:", JSON.stringify(call));
      // Outgoing Call Rejected
    },
    onIncomingCallCancelled(call) {
      console.log("Incoming call calcelled:", call);
    }
  })
);
CometChat.addMessageListener("ASfasfa",new CometChat.MessageListener({
  onTextMessageReceived: (message) => {
    CometChat.getLastDeliveredMessageId().then(id=>{
      // console.log({"this is message id":id});
    })
    // console.log("message received", JSON.stringify(message));
  }
}))

export default class App extends Component {
  constructor(props){
    super(props)
      this.myref = React.createRef();           
      this.state={
        uri:"https://www.google.com"
      }
 
  }
  
  componentDidMount(){
      // this.myref.current.onLoadingStart = (event) => {
      //   console.log("here", event)
      // }
    // console.log("hellwoorlsaf", this.myref.current.source = {
    //   uri: "http://facebook.github.io/react-native/docs/0.9/webview#reload"
    // });
    // console.log(this.myref.current);
   
    // this.myref.source.html="<h1>THisi si akshfasasfj </h1>";
    // console.log("this is component",this.myref);
    
// CometChat.login('jstestuser1', 'fe9d19181100853ce4aab9c096ea851716cd9554').then(user => {
//   console.log(CometChat.getLoggedinUser().then(user => {
//     // console.log("say hi I am logged in ", user);

//     var receiverID = "jstestuser2";
//     var callType = CometChat.CALL_TYPE.VIDEO;
//     var receiverType = CometChat.RECEIVER_TYPE.USER;

//     var call = new CometChat.Call(receiverID, callType, receiverType);
//     CometChat.initiateCall(call).then(call => {
//       // console.log("initiated call", JSON.stringify(call));
//       // console.log("tyhisi aisf asf asf", CometChat.startCall(call.getSessionId(), this.myref, new CometChat.CallListener({


//       // })));
//     }, error => {
//       console.log("initiated call", {
//         error
//       });
//     });


//     var receiverID = "jstestuser2";
//     var messageText = "Hello world!";
//     var messageType = CometChat.MESSAGE_TYPE.TEXT;
//     var receiverType = CometChat.RECEIVER_TYPE.USER;

//     var textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);
//     try {
//       CometChat.sendMessage(textMessage).then(
//         message => {
//           console.log("Message sent successfully:", JSON.stringify(message));
//           // Text Message Sent Successfully
//         },
//         error => {
//           // console.log("Message sending failed with error:", error);
//         }
//       );

//       // CometChat.initiateCall(call);
//     } catch (e) {
//       console.log(e);
//     }
//   }));




// }, error => {
//   console.log(JSON.stringify(error));
//   console.log("ashfjkakskfgajksgjfka sfkgasjk gfjasj");
// })
//   }
  }
  render() {
    return (
      <View style={styles.container}>     
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>        
                < Button title = "Reload Me!"
                onPress = {                  
                  () => {
                    console.log("clicked",this.myref);
                    // this.myref.current.source={uri:"https://cometchat.com/admin"}
                    // console.log(this.myref.current.source);
                    // this.myref.current.reload();
                    this.setState(state=>{
                      return {
                        ...state,
                        uri: "https://cometchat.com/admin"
                      }
                    })                    
                  }
                }
                />



       <WebView ref={this.myref}          
       source = {
       {
        uri: this.state.uri
       }
       } 
       style = {
         {
           height: '100',           
           flex: 1
         }
       }
       injectedJavaScript = {
         `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=width, initial-scale=0.5, maximum-scale=0.5, user-scalable=2.0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `
       }
       scalesPageToFit = {
         false
       }
       onLoadEnd = {
         this._onLoadEnd
       }
       />        
</View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
