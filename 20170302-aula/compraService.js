function ServicoDeCompra(servicoDeProduto){
	this.servicoDeProduto = servicoDeProduto;
	this.comprasRealizadas = [];

	this.novaCompra = function(nomeFornecedor){
		var novaCompra = new Compra(nomeFornecedor);
		this.comprasRealizadas.push(novaCompra);
		return novaCompra;
	}

	this.adicionarProduto = function(compra, codigoDoProduto, quantidade){
		var produto = servicoDeProduto.buscarProduto(codigoDoProduto);
		if(produto !== null){
			compra.adicionarProduto(produto, quantidade);
			this.servicoDeProduto.adicionarAoEstoque(produto, quantidade);
		}
	}

	this.listar = function(){
		var listagem = "Fornecedor|Total\n"
		for(var i = 0; i < this.comprasRealizadas.length; i++){
			var compra = this.comprasRealizadas[i];
			listagem += compra.fornecedor +"|"+compra.total +"\n";
			listagem += "Codigo|Nome|\n";
			for(var j = 0; j < compra.listaDeProdutos.length; j++){
				var produto = compra.listaDeProdutos[j];
				listagem += produto.codigo +"|"+ produto.nome +"\n";
			}
			listagem += "--------------------------------------\n\n";
		}
		return listagem;
	}
}