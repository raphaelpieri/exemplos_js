function Venda(nomeDoCliente){
	this.cliente = nomeDoCliente;
	this.listaDeProdutos = [];
	this.total = 0;

	this.adicionarProduto = function(produto, quantidade){
		this.listaDeProdutos.push(produto);
		this.total += produto.preco * quantidade;
	}

}