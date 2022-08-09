package one.digitalinnovation.gof.singleton;

/**
 * Singleton "apressado".
 * @author DevMachado
 *
 */

public class SingletonLazyHolder {
	
	private static class InstanceHolder {
	
		public static SingletonLazyHolder instancia  = new SingletonLazyHolder();
		
}
	private SingletonLazyHolder() {
		super();
	}
	
	public static SingletonLazyHolder getInstancia() {
		return InstanceHolder.instancia;
	}

}
