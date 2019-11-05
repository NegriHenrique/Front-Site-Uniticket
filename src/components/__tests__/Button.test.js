import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button/Button';

describe('testando botao', () => {
  it('render', () => {
    const wrapper = shallow(
      <Button content="test"/>
    )

    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ content: "outro teste" })
    expect(wrapper).toMatchSnapshot()
  });
})
