import React, { View, Text, StyleSheet } from 'react-native';
import { mount, shallow } from 'enzyme';
import {MyComponent, Subcomponent} from '../src/MyComponent';
import { expect } from 'chai';

describe('<MyComponent />', () => {
  it('should deep render stuff', () => {
    const wrapper = mount(<MyComponent />);
    expect(wrapper.find(Subcomponent).length).to.be.equals(2);
    expect(wrapper.ref('last').prop('testProp')).to.be.true();
    //console.log('kikoo', wrapper.ref('last').props());
  });

  it('should shallow render stuff', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Subcomponent).length).to.be.equals(2);
    //console.log('kikoo', wrapper.ref('last').props());
  });
});
