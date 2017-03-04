(function(){
	var servicoDeProduto = new ServicoDeProduto();
	var servicoDeCompra = new ServicoDeCompra(servicoDeProduto);
	var servicoDeVenda = new ServicoDeVenda(servicoDeProduto);


	function inserirNovoProduto(){
		var codigo = parseInt(prompt("Informe o codigo:")),
			nome = prompt("Informe um nome:"),
			preco = parseFloat(prompt("Informe um preço: "));

		servicoDeProduto.adicionarProduto(codigo, nome, preco);
	}
	function excluirNovoProduto(){
		var codigo = parseInt(prompt("Informe o codigo:"));

		servicoDeProduto.excluirProduto(codigo);
	}
	function operacaoProduto(){
		do{
			var opcao = parseInt(prompt("1.Novo\n2.Excluir\n0.Sair\nOpcao: escolhida:"));
			if(opcao === 1)
				inserirNovoProduto();
			else if(opcao === 2)
				excluirNovoProduto();

		}while(opcao > 0 && opcao <= 2)
	}

	function comprarProduto(nomeParticipante){
		var compra = servicoDeCompra.novaCompra(nomeParticipante);
		do{
			var codigo = parseInt(prompt("Para Sair : 0\nInforme o codigo do produto: "));
			if(codigo > 0){
				var quantidade = parseFloat(prompt("Informe a quantidade comprada:"));
				servicoDeCompra.adicionarProduto(compra, codigo, quantidade);
			}
		}while(codigo > 0)
	}
	function venderProduto(nomeParticipante){
		var venda = servicoDeVenda.novaVenda(nomeParticipante);
		do{
			var codigo = parseInt(prompt("Para Sair : 0\nInforme o codigo do produto: "));
			if(codigo > 0){
				var quantidade = parseFloat(prompt("Informe a quantidade vendida:"));
				debugger;
				servicoDeVenda.adicionarProduto(venda, codigo, quantidade);
			}
		}while(codigo > 0)
	}
	function movimentacao(operacao){
		var nomeParticipante = prompt("Informe um participante: ");
		operacao(nomeParticipante);
	}	
	function listarProduto(){
		return servicoDeProduto.listarProdutos();
	}	
	function listarCompra(){
		debugger;
		return servicoDeCompra.listar();
	}	
	function listarVenda(){
		return servicoDeVenda.listar();
	}	
	function listarMovimentacao(){
		var produto = parseInt(prompt("Codigo do produto:"));
		return servicoDeProduto.listarMovimentacao(produto);
	}
	function relatorio(listagem){
		alert(listagem())
	}					
	function imprimirRelatorio(){
		do{
			debugger;
			var rel = parseInt(prompt("1.Listagem de produto\n2.Listagem de compra\n3.Listagem de vendas\n4.Movimentacao do produto\n0.Sair\nOpcao: escolhida:"));
			switch(rel){
				case 1:
					relatorio(listarProduto);
					break;
				case 2:
					relatorio(listarCompra);
					break;
				case 3:
					relatorio(listarVenda);
					break;
				case 4:
					relatorio(listarMovimentacao);
					break;															
			}
		}while(rel > 0 && rel <= 4)
	}
	function menuescolhido(opcao){
		switch(opcao){
			case 1:
				operacaoProduto();
				break;
			case 2:
				movimentacao(comprarProduto);
				break;
			case 3:
				movimentacao(venderProduto);
				break;
			case 4:
				imprimirRelatorio();	
				break;				
		}
	}
	function menu(){		
		do{
			var opcao = parseInt(prompt("Menu:\n1.Produto\n2.Compra\n3.Venda\n4.Relatorio\n0.Sair\nOpcao escolhida:"));
			menuescolhido(opcao);
		}while(opcao > 0 && opcao <=4)
	}
	menu();
}());