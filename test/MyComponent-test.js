import React from 'react';
import { mount, shallow } from 'enzyme';
import {MyComponent, Subcomponent} from '../src/MyComponent';
import { expect } from 'chai';

describe('<MyComponent />', () => {
  it('should find the old-style ref-ed component', () => {
    const wrapper = mount(<MyComponent />);
    expect(wrapper.ref('oldStyle').type()).to.equal(Subcomponent);
  });

  it('should find the new-style ref-ed component', () => {
    const wrapper = mount(<MyComponent />);
    expect(wrapper.ref('newStyle').type()).to.equal(Subcomponent);
  });
});
