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


// this.DOMParser = require('xmldom').DOMParser;
this.document = new this.DOMParser().parseFromString("<?xml version='1.0'?>", 'text/xml');

this.strophe=require('/opt/lampp/htdocs/reacyt-native-demo/stropheexample/node_modules/strophe.js/dist/strophe.js').Strophe;

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

CometChat.init("1089f54cd9e81d").then(() => {  

  console.log("intialized");  
  this.document = new DOMParser().parseFromString("<?xml version='1.0'?>", 'text/xml');
  
  
  CometChat.login('jstestuser1', '2eec670353db7ec021b0bdf0ccc75c0a21b1774c').then(user=>{
    console.log("helloworld");
  },error=>{   
    console.log(JSON.stringify(error));
    console.log("ashfjkakskfgajksgjfka sfkgasjk gfjasj");
  })
});

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
