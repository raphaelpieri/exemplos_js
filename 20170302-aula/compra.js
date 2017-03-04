function Compra(nomeDoFornecedor){
	this.fornecedor = nomeDoFornecedor;
	this.listaDeProdutos = [];
	this.total = 0;

	this.adicionarProduto = function(produto, quantidade){
		this.listaDeProdutos.push(produto);
		this.total += produto.preco * quantidade;
	}

}