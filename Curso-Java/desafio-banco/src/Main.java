
public class Main {

	public static void main(String[] args) {
		Cliente gabriel = new Cliente();
		gabriel.setNome("Gabriel");
		Cliente machado = new Cliente();
		machado.setNome("Machado");
		
		
		Conta cc = new ContaCorrente(gabriel);
		Conta poupanca = new ContaPoupanca(machado);
		Conta cc2 = new ContaCorrente(gabriel);
		Conta poupanca2 = new ContaPoupanca(machado);
		
		cc.depositar(2000);
		cc.transferir(1000, poupanca);
		
		cc.transferir(500, cc2);
		poupanca.transferir(500, poupanca2);
		
		cc.imprimirExtrato();
		poupanca.imprimirExtrato();
		cc2.imprimirExtrato();
		poupanca2.imprimirExtrato();	
		


	}

}
