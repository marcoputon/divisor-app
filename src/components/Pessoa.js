import React, { Component } from 'react';
import { TableRow, TableCell } from '@material-ui/core';

class Pessoa extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            nome: props.nome,
            gasto: props.gasto,
            calculado: props.calculado,
            saldo: props.saldo, 
        };
    }

    render() {
        return (
            <TableRow key={this.state.nome} className="tr">
                <TableCell component="th" scope="row">
                    {this.state.nome}
                </TableCell>
                <TableCell align="right">{this.state.gasto}</TableCell>
                <TableCell align="right">{this.state.calculado}</TableCell>
                <TableCell align="right">{this.state.saldo}</TableCell>
            </TableRow>
        );
    }
}

export default Pessoa;