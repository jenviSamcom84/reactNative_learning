/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import images from './image/image';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomHeader from './CustomHeader';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onClickListener = viewId => {
    this.props.navigation.navigate('Home');
  };
  static navigationOptions = ({navigation}) => ({
    title: 'Login',
    headerLeft: (
      <Icon
        name="ios-menu"
        style={{paddingLeft: 10}}
        onPress={() => navigation.navigate('DrawerOpen')}
      />
    ),
    drawerIcon: <Image source={images.icon} style={[styles.icon]} />,
  });
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.introText}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              textDecorationLine: 'underline',
            }}>
            CONFERENCE OF PRECIDENTS{'\n'}
          </Text>
          <Text style={{fontSize: 12, color: 'white'}}>
            of Major American Jewish Organizations
          </Text>
        </View>

        <View style={styles.introText2}>
          <Text style={{fontSize: 13, color: 'white'}}>
            National Israel Leadership Mission{'\n'}
          </Text>
          <Text style={{fontSize: 13, color: 'white', marginRight: 10}}>
            16-20 February 2020
          </Text>
        </View>

        <View style={styles.containerss}>
          <View style={styles.inputContainer}>
            <Icon
              style={styles.inputIcon}
              name="user"
              type="FontAwesome5"
              size={20}
              color="black"
            />
            <TextInput
              style={styles.inputs}
              placeholder="User Name"
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState({email})}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon
              style={styles.inputIcon}
              name="key"
              type="FontAwesome5"
              size={20}
              color="black"
            />
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({password})}
            />
          </View>

          <TouchableHighlight
            style={[styles.inputContainer, styles.loginButton]}
            onPress={() => this.onClickListener('Login')}>
            <Text>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008080',
  },
  containerss: {
    flex: 1,
    backgroundColor: '#008080',
    marginTop: 10,
    marginBottom: 150,
    alignItems: 'center',
  },
  inputIcon: {
    width: 65,
    height: 15,
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: 215,
    height: 30,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginRight: 30,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  loginButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    width: 215,
    height: 30,
    marginTop: 15,
  },
  introText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008080',
    marginTop: 60,
    marginBottom: 1,
  },
  introText2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008080',
    marginBottom: 20,
    marginTop: 0,
  },
});
