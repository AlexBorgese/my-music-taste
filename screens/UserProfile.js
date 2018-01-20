import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

export default class UserProfile extends React.Component {
  static navigationOptions = {
    title: 'User Profile'
  };

  render() {
    return <Header centerComponent={{ text: 'You', style: { color: '#fff' } }}/>;
  }
}
