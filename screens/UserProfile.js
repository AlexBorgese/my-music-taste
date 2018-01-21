import React from 'react';
import { View } from 'react-native';
import { Header, Button } from 'react-native-elements';

import authorise from "../api/spotifyUserApi";

export default class UserProfile extends React.Component {
  static navigationOptions = {
    title: 'User Profile'
  };

  authoriseUser() {
    authorise();
  }

  render() {
    return (
      <View>
        <Header centerComponent={{ text: 'You', style: { color: '#fff' } }}/>
        <Button
          title='HIT ME'
          onPress={ this.authoriseUser } />
      </View>
  );
  }
}
