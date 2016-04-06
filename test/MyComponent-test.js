// import React, { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { mount, shallow } from 'enzyme';
import {MyComponent, Subcomponent} from '../src/MyComponent';
import { expect } from 'chai';

describe('<MyComponent />', () => {
  it('should deep render stuff', () => {
    const wrapper = mount(<MyComponent />);
    expect(wrapper.find(Subcomponent).length).to.be.equals(2);

    // console.log('kakak', wrapper.ref('second').debug());
    expect(wrapper.ref('second').prop('testProp')).to.be.true;
    //console.log('kikoo', wrapper.ref('last').props());
  });

  it('should shallow render stuff', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Subcomponent).length).to.be.equals(2);
    //console.log('kikoo', wrapper.ref('last').props());
  });

  it('should return the instance', () => {
    const wrapper = mount(<MyComponent />);
    expect(wrapper.find(Subcomponent).first().type()).to.equal(Subcomponent);
    //console.log('kikoo', wrapper.ref('last').props());
  });
});
