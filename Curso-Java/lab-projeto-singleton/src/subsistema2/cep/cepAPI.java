package subsistema2.cep;

public class cepAPI {
	private static cepAPI instancia = new cepAPI();
	
	private cepAPI() {
		super();
	}
	
	public static cepAPI getInstancia() {
		return instancia;
	}
	
	public String recuperarCidade(String cep) {
		return "Brotas";
	}
	
	public String recuperarEstado(String cep) {
		return "SP";
	}
}
