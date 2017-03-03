(function(){
	var servicoDeProduto = new ServicoDeProduto();
	function inserirNovoProduto(){
		var codigo = parseInt(prompt("Informe o codigo:")),
			nome = prompt("Informe um nome:"),
			preco = parseFloat(prompt("Informe um preço: "));

		servicoDeProduto.adicionarProduto(codigo, nome, preco);

	}
	function buscarProduto(){
		var codigoDoProduto = parseInt(prompt("Informe o codigo do produto"));
		return servicoDeProduto.buscarProduto(codigoDoProduto);
	}
	function comprarProduto(){
		var produto = buscarProduto()
		if( produto !== undefined){
			var quantidade = parseFloat(prompt("Informe a quantidade comprada"));
			servicoDeProduto.adcionarAoEstoque(produto, quantidade);
		}
	}
	function vendarProduto(){
		var produto = buscarProduto()
		if( produto !== undefined){
			var quantidade = parseFloat(prompt("Informe a quantidade comprada"));
			servicoDeProduto.retirarAoEstoque(produto, quantidade);
		}
	}	
	function menuescolhido(opcao){
		switch(opcao){
			case 1:
				inserirNovoProduto();
				break;
			case 2:
				comprarProduto();
				break;
			case 3:
				vendarProduto();
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