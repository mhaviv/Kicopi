import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Authentication from '../components/Authentication.js';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Authentication />
      </View>
    );
  }
}

export default AuthScreen;
