function Produto(codigo, nome, preco){
	this.codigo = codigo;
	this.nome = nome;
	this.preco = preco;
	this.estoque = 0;
	this.historicoDoProduto = [];

	this.aumentarEstoque = function(quantidade){
		if(quantidade <= 0)
			console.log("Valor da quantidade informado errado");
		else{
			this.estoque += quantidade;
			this.incluirHistorico("Compra", quantidade)
		}

	}
	this.tirarDoEstoque = function(quantidade){
		if(quantidade > self.estoque)
			console.log("Valor da quantidade informado errado");
		else{
			this.estoque -= quantidade;
			this.incluirHistorico("Venda", quantidade)
		}		
	}
	this.incluirHistorico = function(tipo, quantidade){
		var novo = new HistoricoDoProduto(tipo, quantidade, this.estoque);
		this.historicoDoProduto.push(novo);
	}
};
