import axios from 'axios';


export class ProdutoService {

    constructor () {
        this.apiAddress = "http://localhost:8080";
    }

    cadastrarProduto (produtoDto) {
        const body = {
            nome: produtoDto.nome,
            valor: produtoDto.valor
        };
        
        axios.post(
            this.apiAddress + "/produtos", 
            body
        ).then(
            (response) => {
                console.log(response.status, response.statusText, response.data);
            }
        );
    }

}
export default ProdutoService;