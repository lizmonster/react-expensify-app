import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render empty ExpensesSummary correctly', () => {
    const wrapper = shallow(<ExpensesSummary numberOfExpenses={0} totalExpenses={0} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render a single expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary numberOfExpenses={1} totalExpenses={115} />)
    expect(wrapper).toMatchSnapshot();
});

test('should render multiple expenses correctly', () => {
    const wrapper = shallow(<ExpensesSummary numberOfExpenses={5} totalExpenses={932} />)
    expect(wrapper).toMatchSnapshot();
});
