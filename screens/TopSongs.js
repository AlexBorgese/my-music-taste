import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

export default class TopSongs extends React.Component {
  static navigationOptions = {
    title: 'Top Songs'
  };

  render() {
    return <Header centerComponent={{ text: 'Top Songs', style: { color: '#fff' } }}/>;
  }
}
