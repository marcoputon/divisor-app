import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Box, Fab, TextField, Card, CardHeader, CardActions, CardContent, Divider, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import "./CadastroProduto.css";
import ProdutoService from "../../service/ProdutoService";
import ProdutoDto from "../../dto/ProdutoDto";


class CadastroProduto extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            open: props.open, 
        };

        this.produtoService = new ProdutoService(); // Deus me ajuda
    }
  
    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    teste = () => {
        this.produtoService.cadastrarProduto(new ProdutoDto("Vodka", 40));
    }

    render() {
        return (
            <div>
                <Fab size="small" onClick={() => this.setState({open: !this.state.open})}>
                    <AddIcon />
                </Fab>

                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <Card>
                        <CardHeader title="Cadastrar produto" />

                        <Divider variant="middle" />
                        
                        <CardContent>
                            <form className="formulario" noValidate autoComplete="off">
                                <Box display="flex" flexDirection="row" p={1} m={1}>
                                    <Box width="50%" marginRight="2px">
                                        <TextField className="texto-entrada" id="nome-produto" label="Produto" variant="outlined" />
                                    </Box>
                                    <Box width="50%" marginLeft="2px">
                                        <TextField className="texto-entrada" id="custo-produto" label="Custo" variant="outlined" />
                                    </Box>
                                </Box>   
                            </form>
                        </CardContent>

                        <Divider variant="middle" />
                        
                        <CardActions disableSpacing>
                            <div className="div-cancelar div-metade">
                                <Button className="botao-cancelar" variant="outlined" color="secondary">
                                    <CloseIcon /> Cancelar
                                </Button>
                            </div>
                            
                            <div className="div-salvar div-metade">
                                <Button 
                                    className="botao-salvar" 
                                    variant="outlined" 
                                    color="primary"
                                    onClick={this.teste}
                                >
                                    <AddIcon /> Salvar
                                </Button>
                            </div>
                        </CardActions>
                    </Card>
                </Dialog>
            </div>
        );
    }
  }

  export default CadastroProduto;