package one.digitalinnovation.gof.strategy;

public class TesteRobo {

	public static void main(String[] args) {
		
		Comportamento normal = new comportamentoNormal();
		Comportamento defesa = new comportamentoDefensivo();
		Comportamento agressivo = new comportamentoAgressivo();	
		
		Robo robo = new Robo();
		
		robo.setComportamento(normal);
		
		
		robo.mover();
		robo.mover();
		
		robo.setComportamento(defesa);
		
		
		robo.mover();

		
		robo.setComportamento(agressivo);
		robo.mover();
		robo.mover();
		robo.mover();
		robo.mover();
	}

}
