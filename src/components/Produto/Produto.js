import React, { Component } from 'react';
import "./Produto.css";
import { TableRow, TableCell } from '@material-ui/core';


class Produto extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            nome: props.nome,
            custo: props.custo,
        };
    }

    render() {
        return (
            <TableRow key={this.state.nome} className="tr">
                <TableCell component="th" scope="row">
                {this.state.nome}
                </TableCell>
                <TableCell align="right">{this.state.custo}</TableCell>
            </TableRow>
        );
    }
}

export default Produto;