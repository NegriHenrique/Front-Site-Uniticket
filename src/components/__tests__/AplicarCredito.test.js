import React from 'react';
import { shallow,  mount } from 'enzyme';
import AplicarCredito from '../../app/Routes/AplicarCredito';

describe('Testando aplicacao de credito', () => {

  it('render', () => {
    const wrapper = shallow(
      <AplicarCredito quantidadeTicket={2}/>
    )

    expect(wrapper).toMatchSnapshot();
  })

  it('diminuir a quantidade de ticket do usuario', () => {
    const wrapper = shallow (
      <AplicarCredito quantidadeTicket={3}/>
    )

    wrapper
      .find('[data-test="removeTicketButton"]')
      .simulate('click')
    
    expect (
      wrapper
        .find('[data-test="quantidadeAtualTickets"]')
        .text()
    ).toContain('2')
    
  })

  it('diminuir a quantidade de ticket do usuario quando ele nao possui nenhum ticket', () => {
    const wrapper = shallow (
      <AplicarCredito quantidadeTicket={0}/>
    )

    wrapper
      .find('[data-test="removeTicketButton"]')
      .simulate('click')
    
    expect (
      wrapper
        .find('[data-test="quantidadeAtualTickets"]')
        .text()
    ).toContain('0')
    
  })

})