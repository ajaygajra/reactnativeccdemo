/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
    Component
} from 'react';


import {
    Platform,
    StyleSheet,
    Text,
    View,    
    Button,
    WebView
} from 'react-native';
import {
    EThree
} from '@virgilsecurity/e3kit';

import { CometChat } from '@cometchat-pro/chat';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
console.log({EThree});
EThree.initialize(()=>{
    return "ASfasfas";
}).then(data => {
    console.log({data})
},error=>{
    console.log(error);
});

export default class App extends Component {
    constructor(props) {
        super(props)
        this.myref = React.createRef();
        this.state = {
            uri: "http://www.google.com"
        }
    }

    componentDidMount() {
        console.log(this.myref,"yesdasfas");
    }
    render() {
        return (<View style={{flex:1}}><WebView style={{flex:1}} javaScriptEnabled={true} prop1={CometChat.startCall} source = {{uri: this.state.uri}} ref={r => this.webview = r}></WebView><Button title="clickMe" onPress={()=>{console.log(this.webview.props.injectedJavaScript,this.webview.props.prop1("","","",this))}}></Button></View>);
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
