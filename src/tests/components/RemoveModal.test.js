import React from 'react';
import { shallow } from 'enzyme';
import RemoveModal from '../../components/RemoveModal';

test('should render RemoveModal dialog correctly', () => {
    const wrapper = shallow(<RemoveModal />);
    expect(wrapper).toMatchSnapshot();
});