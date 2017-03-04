function ServicoDeProduto(){
	this.listaDeProdutos = [],
		self = this;

	this.adicionarProduto = function(codigo, nome, preco){
		var novoProduto = new Produto(codigo, nome, preco);
		self.listaDeProdutos.push(novoProduto);
	}	

	this.excluirProduto = function(codigo){
		var novaLista = this.listaDeProdutos.filter(function(el){
			return el.codigo !== codigo;
		});
		this.listaDeProdutos = novaLista;
	}
	this.buscarProduto = function(codigo){
		var produto = self.listaDeProdutos.find(function(element, index, array){
			var produto = element;
			if(produto.codigo === codigo){
				return produto;
			}
		});
		return produto === undefined ? null : produto;
	}
	this.adicionarAoEstoque = function(produto, quantidade){
		produto.aumentarEstoque(quantidade);
	}
	this.retirarDoEstoque = function(produto, quantidade){
		produto.tirarDoEstoque(quantidade);
	}
	this.listarProdutos = function(){
		var listagem = "Codigo|Nome|Preco|Estoque|\n";
		for(var i = 0; i < self.listaDeProdutos.length; i++){
			var produto = self.listaDeProdutos[i];
			listagem += produto.codigo +"|"+ produto.nome +"|"+ produto.preco +"|" + produto.estoque +"\n";
		}
		return listagem;
	}
	this.listarMovimentacao = function(codigo){
		var produto = this.buscarProduto(codigo);
		if(produto.historicoDoProduto.length > 0){
			var listagem = "Tipo|Quantidade|Estoque|\n";
			for(var i = 0; i < produto.historicoDoProduto.length; i++){
				var historico = produto.historicoDoProduto[i];
				listagem += historico.tipo +"|"+ historico.quantidade +"|"+ historico.estoque +"\n";
			}
			return listagem;	
		}			
		return "Produto não possui historico";
	}
}