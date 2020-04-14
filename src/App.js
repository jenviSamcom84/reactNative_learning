import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
//import {StackNavigator, TabNavigator} from 'react-navigation';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducer';
import RepoList from './RepoList';
import Profile from './Profile';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json',
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="RepoList">
              <Drawer.Screen name="RepoList" component={RepoList} />
              <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
