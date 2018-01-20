import 'react-native';
import React from 'react';
import TopSongs from '../screens/TopSongs';
import { shallow } from 'enzyme';

it('renders the TopSongs component correctly', async () => {
    const tree = shallow(<TopSongs />);

    expect(tree).toMatchSnapshot();
});
