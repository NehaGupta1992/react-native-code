import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/config/store';
import LoginAction from './src/actions/LoginAction';

export default class App extends Component {
  constructor(props){
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <LoginAction />
            </Provider>
        );
    }
}
