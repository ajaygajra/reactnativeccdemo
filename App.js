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
  View
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
CometChat.init("6e13b23d7a3").then(() => {
  console.log("intialized");  
  // this.document = new DOMParser().parseFromString("<?xml version='1.0'?>", 'text/xml');  
});

this.DOMParser = require('xmldom').DOMParser;
this.document = new this.DOMParser().parseFromString("<?xml version='1.0'?>", 'text/xml');

CometChat.login('superhero1', '3de4f1672b44a43f1593ea03a27e3b3202a3869b').then(user => {
  console.log(CometChat.getLoggedinUser().then(user => {
    console.log("say hi I am logged in ", user);
    
  }));
}, error => {
  console.log(JSON.stringify(error));
  console.log("ashfjkakskfgajksgjfka sfkgasjk gfjasj");
})

CometChat.addMessageListener("ASfasfa",new CometChat.MessageListener({
  onTextMessageReceived: (message) => {
    CometChat.getLastDeliveredMessageId().then(id=>{
      console.log({"this is message id":id});
    })
    console.log("message received",message);
  }
}))

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>     
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
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
