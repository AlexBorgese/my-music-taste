import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

export default class TopArtist extends React.Component {
	static navigationOptions = {
		title: 'Top Artists'
	};

	render() {
		return (
     			<Header centerComponent={{ text: 'Top Artists', style: { color: '#fff' } }}/>
		);
	}
}
