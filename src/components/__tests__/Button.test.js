import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../Button/Button';

describe('testando botao', () => {
  it('render', () => {
    const wrapper = shallow(
      <Button content="test"/>
    )

    expect(wrapper).toMatchSnapshot()
  });

  it('onClick', () => {
    const onClick = jest.fn();

    const wrapper = mount(
      <Button onClick={onClick}/>
    )

    wrapper.simulate('click');

    expect(wrapper)

  })
})
