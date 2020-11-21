import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/App.jsx'
import Header from '../client/src/components/Header.jsx'

describe('<Header />', () => {
  it('Header exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});
