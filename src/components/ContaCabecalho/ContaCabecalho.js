import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import "./ContaCabecalho.css"

class ContaCabecalho extends Component {
    render() {
        return (
            <div className="conta-cabecalho">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4" className="titulo">
                            Divisor
                        </Typography>

                        <div className="espacador"/>
                        
                        <Typography variant="h6">
                            R$ 00.00
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default ContaCabecalho;