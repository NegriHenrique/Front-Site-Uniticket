import React, { Component } from 'react';
import Button from '../../../components/Button/Button';

// import { Container } from './styles';

export default class AplicarCredito extends Component {

  constructor(props) {
    super(props)
    this.state = {
      quantidadeTicket: this.props.quantidadeTicket
    }
    this.removeTicket = this.removeTicket.bind(this);
  }

  removeTicket () {
    if (this.state.quantidadeTicket > 0)
      this.setState({quantidadeTicket: this.state.quantidadeTicket - 1})
  }

  componentDidMount () {
    if (this.props.quantidadeTicket === undefined) {
      this.setState({ quantidadeTicket : 3 })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="numero">
          <h1 data-test="quantidadeAtualTickets">
            {this.state.quantidadeTicket}
          </h1>
        </div>
        <Button data-test="removeTicketButton" content="REMOVER" onClick={this.removeTicket}/>
      </div>
    );
  }
}
