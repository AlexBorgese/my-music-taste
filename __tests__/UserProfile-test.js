import 'react-native';
import React from 'react';
import UserProfile from '../screens/UserProfile';
import { shallow } from 'enzyme';

it('renders the UserProfile component correctly', async () => {
    const tree = shallow(<UserProfile />);

    expect(tree).toMatchSnapshot();
});
