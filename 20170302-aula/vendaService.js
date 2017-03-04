function ServicoDeVenda(servicoDeProduto){
	this.servicoDeProduto = servicoDeProduto;
	this.vendasRealizadas = [];

	this.novaVenda = function(nomeCliente){
		var novaVenda = new Venda(nomeCliente);
		this.vendasRealizadas.push(novaVenda);
		return novaVenda;
	}

	this.adicionarProduto = function(venda, codigoDoProduto, quantidade){
		var produto = servicoDeProduto.buscarProduto(codigoDoProduto);
		if(produto !== null){
			venda.adicionarProduto(produto, quantidade);
			this.servicoDeProduto.retirarDoEstoque(produto, quantidade);
		}
	}
	this.listar = function(){
		var listagem = "Cliente|Total\n"
		for(var i = 0; i < this.vendasRealizadas.length; i++){
			var venda = this.vendasRealizadas[i];
			listagem += venda.cliente+"|"+venda.total +"\n";
			listagem += "Codigo|Nome|\n";
			for(var j = 0; j < venda.listaDeProdutos.length; j++){
				var produto = venda.listaDeProdutos[j];
				listagem += produto.codigo +"|"+ produto.nome +"\n";
			}
			listagem += "--------------------------------------\n\n";
		}
		return listagem;
	}
}