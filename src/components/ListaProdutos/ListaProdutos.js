import React, { Component } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, Toolbar, Typography, Box } from '@material-ui/core';
import Produto from '../Produto/Produto';
import "./ListaProdutos.css";
import CadastroProduto from '../CadastroProduto/CadastroProduto';


class ListaProdutos extends Component {

    render() {
        return (
            <div>
                <Box color="#ffffff" bgcolor="primary.light" className="canto-arredondado-cima">
                    <Toolbar variant="dense">
                        <Typography variant="h5">
                            Produtos
                        </Typography>

                        <div className="espacador" />

                        <CadastroProduto open={false} />
                    </Toolbar>
                </Box>

                <TableContainer component={Paper} className="tabela tabela-scroll">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Produto</b></TableCell>
                                <TableCell align="right"><b>Custo&nbsp;(R$)</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Produto 
                                nome = "Cerveja"
                                custo = "30.00"   
                            />
                            <Produto 
                                nome = "Hamburguer"
                                custo = "25.00"   
                            />
                            <Produto 
                                nome = "Carvão"
                                custo = "13.00"   
                            />
                            <Produto 
                                nome = "Pão"
                                custo = "10.00"   
                            />
                            <Produto 
                                nome = "Queijo"
                                custo = "8.00"   
                            />
                            <Produto 
                                nome = "Queijo1"
                                custo = "8.00"   
                            />
                            <Produto 
                                nome = "Queijo2"
                                custo = "8.00"   
                            />
                            <Produto 
                                nome = "Queijo3"
                                custo = "8.00"   
                            />
                            <Produto 
                                nome = "Queijo4"
                                custo = "8.00"   
                            />
                            <Produto 
                                nome = "Queijo5"
                                custo = "8.00"   
                            />
                            <Produto 
                                nome = "Queijo6"
                                custo = "8.00"   
                            />
                            <Produto 
                                nome = "Queijo7"
                                custo = "8.00"   
                            />
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default ListaProdutos;