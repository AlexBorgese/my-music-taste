import 'react-native';
import React from 'react';
import TopArtists from '../screens/TopArtists';
import { shallow } from 'enzyme';

it('renders the TopArtist component correctly', async () => {
    const tree = shallow(<TopArtists />);
    expect(tree).toMatchSnapshot();
});
