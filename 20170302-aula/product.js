function Produto(codigo, nome, preco){
	this.codigo = codigo;
	this.nome = nome;
	this.preco = preco;
	this.estoque = 0;

	this.aumentarEstoque = function(quantidade){
		if(quantidade <= 0)
			console.log("Valor da quantidade informado errado");
		else
			this.estoque += quantidade;
	}
	this.tirarDoEstoque = function(quantidade){
		if(quantidade > self.estoque)
			console.log("Valor da quantidade informado errado");
		else
			this.estoque -= quantidade;
	}
};
