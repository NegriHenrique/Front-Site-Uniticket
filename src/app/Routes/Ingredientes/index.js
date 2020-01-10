import React, { Component } from "react";
import { FaPencilAlt, FaTrash, FaPlus, FaSave } from "react-icons/fa";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

export default class Ingredientes extends Component {
  constructor() {
    super();

    this.state = {
      request: null,
      comecoSemana: null,
      fimSemana: null
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     comecoSemana: format(
  //       startOfWeek(new Date(), { weekStartsOn: 1 }),
  //       "dd/MM/yyyy"
  //     ),
  //     fimSemana: format(
  //       addBusinessDays(startOfWeek(new Date(), { weekStartsOn: 1 }), 4),
  //       "dd/MM/yyyy"
  //     )
  //   });
  // }

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            "justify-content": "center",
            "align-items": "center"
          }}
        >
          <h2 className="px-3 mt-2">Ingredientes</h2>
        </div>
        <div>
          <hr />
          <div>
            <select class="custom-select">
              <optgroup label="Salada">
                <option>Alface</option>
              </optgroup>
              <optgroup label="Principal">
                <option>Carne de Panela</option>
              </optgroup>
              <optgroup label="Vegetariano">
                <option>PTS</option>
              </optgroup>
              <optgroup label="Acompanhamento">
                <option>Arroz Branco</option>
              </optgroup>
              <optgroup label="Sobremesa">
                <option>Maça</option>
              </optgroup>
            </select>
          </div>
          <div className="d-flex mt-2" style={{ justifyContent: "flex-end" }}>
            <button type="button" class="btn btn-primary btn-sm">
              Editar
              <FaPencilAlt className="fa-sm ml-1 mb-1" />
            </button>
            <button type="button" class="btn btn-danger btn-sm ml-2">
              Excluir
              <FaTrash className="fa-sm ml-1 mb-1" />
            </button>
          </div>
        </div>
        <div>
          <hr />
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="name">Nome</label>
                <input
                  class="form-control"
                  type="text"
                  value="Artisanal kale"
                  id="name"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="type">Tipo</label>
                <select class="custom-select mr-sm-2" id="type">
                  <option selected>Escolha...</option>
                  <option value="1">Salada</option>
                  <option value="2">Principal</option>
                  <option value="3">Vegetariano</option>
                  <option value="4">Acompanhamento</option>
                  <option value="5">Sobremesa</option>
                </select>
              </div>
            </div>
          </form>
          <div className="d-flex" style={{ justifyContent: "flex-end" }}>
            <button type="button" class="btn btn-primary btn-sm">
              Salvar
              <FaSave className="fa-sm ml-1 mb-1" />
            </button>
            <button type="button" class="btn btn-success btn-sm ml-2">
              Novo
              <FaPlus className="fa-sm ml-1 mb-1" />
            </button>
          </div>
        </div>
      </>
    );
  }
}
