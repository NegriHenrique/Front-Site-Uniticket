import React, { Component } from "react";
import {
  FaGreaterThan,
  FaLessThan,
  FaPencilAlt,
  FaTrash,
  FaPlus,
  FaSave
} from "react-icons/fa";
import { startOfWeek, format, addBusinessDays } from "date-fns";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

export default class Cardapio extends Component {
  constructor() {
    super();

    this.state = {
      request: null,
      comecoSemana: null,
      fimSemana: null,
      cardapio: [],
      columnDefs: [
        { headerName: "Dia", field: "day" },
        { headerName: "Salada", field: "salad" },
        { headerName: "Principal", field: "mainCourse" },
        { headerName: "Vegetariano", field: "vegetarian" },
        { headerName: "Acompanhamento 1", field: "firstSideDish" },
        { headerName: "Acompanhamento 2", field: "secondSideDish" },
        { headerName: "Sobremesa", field: "dessert" }
      ],
      rowData: [
        {
          day: "09-01-2020",
          salad: "Tomate",
          mainCourse: "Carne de Panela",
          vegetarian: "PTS",
          firstSideDish: "Arroz",
          secondSideDish: "Feijão Branco",
          dessert: "Maça"
        },
        {
          day: "10-01-2020",
          salad: "Alface",
          mainCourse: "Peixe Frito",
          vegetarian: "PTS",
          firstSideDish: "Arroz Integral",
          secondSideDish: "Feijão Preto",
          dessert: "Banana"
        }
      ]
    };
  }

  componentDidMount() {
    this.setState({
      comecoSemana: format(
        startOfWeek(new Date(), { weekStartsOn: 1 }),
        "dd/MM/yyyy"
      ),
      fimSemana: format(
        addBusinessDays(startOfWeek(new Date(), { weekStartsOn: 1 }), 4),
        "dd/MM/yyyy"
      )
    });
  }

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FaLessThan />
          <h3 className="px-3 mt-2">
            Cardápio de {`${this.state.comecoSemana} a ${this.state.fimSemana}`}
          </h3>
          <FaGreaterThan />
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="ag-theme-balham"
            style={{ height: "200px", width: "100%" }}
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
            ></AgGridReact>
          </div>
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
        <div>
          <hr />
          <form>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="salad">Salada</label>
                <select class="custom-select mr-sm-2" id="salad">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="mainCourse">Principal</label>
                <select class="custom-select mr-sm-2" id="mainCourse">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="vegeratian">Vegetariano</label>
                <select class="custom-select mr-sm-2" id="vegetarian">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="firstSideDish">Acompanhamento 1</label>
                <select class="custom-select mr-sm-2" id="firstSideDish">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="secondSideDish">Acompanhamento 2</label>
                <select class="custom-select mr-sm-2" id="secondSideDish">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="dessert">Sobremesa</label>
                <select class="custom-select mr-sm-2" id="dessert">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="day">Dia</label>
                <input
                  class="form-control"
                  type="date"
                  value="2011-08-19"
                  id="day"
                />
              </div>
            </div>
          </form>
          <div className="d-flex mt-2" style={{ justifyContent: "flex-end" }}>
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
