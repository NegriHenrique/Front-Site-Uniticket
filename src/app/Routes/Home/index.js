import React, { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import qrcode from "../../../img/qrcode.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantidadeTicket: this.props.quantidadeTicket
    };
    this.removeTicket = this.removeTicket.bind(this);
  }

  removeTicket() {
    if (this.state.quantidadeTicket > 0)
      this.setState({ quantidadeTicket: this.state.quantidadeTicket - 1 });
    else alert("você não possui créditos para usar");
  }

  componentDidMount() {
    if (this.props.quantidadeTicket === undefined) {
      this.setState({ quantidadeTicket: 3 });
    }
  }

  render() {
    const { quantidadeTicket } = this.state;

    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h3 className="px-3 mt-2">
            <span className="mr-3">Você possui:</span>
            {quantidadeTicket} crédito(s)
          </h3>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img
            alt="QRCode"
            className="mt-2"
            src={qrcode}
            width="300"
            height="300"
          />
        </div>
        <div>
          <hr />
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="quantity">Quantidade</label>
                <input
                  class="form-control"
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="50"
                ></input>
              </div>
              <div class="form-group col-md-6">
                <label for="type">Valor</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">R$</span>
                  </div>
                  <input type="text" class="form-control" />
                  <div class="input-group-append">
                    <span class="input-group-text">.00</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div
            className="d-flex"
            style={{ justifyContent: "flex-end", marginTop: "-15px" }}
          >
            <button type="button" class="btn btn-success btn-sm">
              Comprar
              <FaShoppingCart className="fa-sm ml-1 mb-1" />
            </button>
          </div>
        </div>
      </>
    );
  }
}
