import React, { Component } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Box, Toolbar, Typography, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Pessoa from "./Pessoa";

class ListaPessoas extends Component {
    render() {
        return (
            <div>
                <Box color="#ffffff" bgcolor="primary.light" className="canto-arredondado-cima">
                    <Toolbar variant="dense">
                        <Typography variant="h5">
                            Pessoas
                        </Typography>

                        <div className="espacador" />

                        <Fab size="small">
                            <AddIcon />
                        </Fab>
                    </Toolbar>
                </Box>

                
                
{/* <form className={classes.root} noValidate autoComplete="off">
<TextField id="standard-basic" label="Standard" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="outlined-basic" label="Outlined" variant="outlined" />
</form> */}

                <TableContainer component={Paper} className="tabela tabela-scroll">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left"><b>Nome</b></TableCell>
                                <TableCell align="right"><b>Gasto&nbsp;(R$)</b></TableCell>
                                <TableCell align="right"><b>Calculado&nbsp;(R$)</b></TableCell>
                                <TableCell align="right"><b>Saldo&nbsp;(R$)</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           <Pessoa 
                                nome = "Marco"
                                gasto = "50.00"   
                                calculado = "35.00"   
                                saldo = "15.00"   
                            />
                            <Pessoa 
                                nome = "Anna"
                                gasto = "50.00"   
                                calculado = "35.00"   
                                saldo = "15.00"   
                            />
                            <Pessoa 
                                nome = "Cleiton"
                                gasto = "50.00"   
                                calculado = "35.00"   
                                saldo = "15.00"   
                            />
                            <Pessoa 
                                nome = "Tailan"
                                gasto = "50.00"   
                                calculado = "35.00"   
                                saldo = "15.00"   
                            />
                        </TableBody>
                    </Table>
                </TableContainer>



            </div>
            );
    }
}

export default ListaPessoas;