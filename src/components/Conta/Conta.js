import React, { Component } from 'react';
import ListaPessoas from '../ListaPessoas';
import ListaProdutos from '../ListaProdutos/ListaProdutos';
import ContaCabecalho from '../ContaCabecalho/ContaCabecalho';
import "./Conta.css"
import { Box, Paper } from '@material-ui/core';


class Conta extends Component {
    render() {
        return (
            <div className="conta">
                <ContaCabecalho />
                <Box display="flex" flexDirection="row" maxHeight="100%">
                    <Paper className="lista-pessoas margem tabela-scroll">
                        <ListaPessoas />
                    </Paper>

                    <Paper className="lista-produtos margem">
                        <ListaProdutos />
                    </Paper>
                </Box>
            </div>
        );
    }
}

export default Conta;