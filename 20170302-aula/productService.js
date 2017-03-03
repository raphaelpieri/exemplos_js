function ServicoDeProduto(){
	this.listaDeProdutos = [],
		self = this;

	this.adicionarProduto = function(codigo, nome, preco){
		var novoProduto = new Produto(codigo, nome, preco);
		self.listaDeProdutos.push(novoProduto);
	}	
	this.buscarProduto = function(codigo){
		return self.listaDeProdutos.find(function(element, index, array){
			var produto = element;
			if(produto.codigo == codigo){
				return produto;
			}
		});
	}
	this.adcionarAoEstoque = function(produto, quantidade){
		produto.aumentarEstoque(quantidade);
	}

}