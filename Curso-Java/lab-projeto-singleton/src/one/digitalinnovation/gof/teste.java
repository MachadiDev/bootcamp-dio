package one.digitalinnovation.gof;

import one.digitalinnovation.gof.singleton.SingletonEager;
import one.digitalinnovation.gof.singleton.SingletonLazy;
import one.digitalinnovation.gof.singleton.SingletonLazyHolder;

public class teste {

	public static void main(String[] args) {
		SingletonLazy lazy = SingletonLazy.getInstancia();
		
		System.out.println(lazy);
		
		lazy = SingletonLazy.getInstancia();
		System.out.println(lazy);
		
		SingletonEager eager = SingletonEager.getInstancia();
		System.out.println(eager);
		
		eager = SingletonEager.getInstancia();
		System.out.println(eager);
		
		
		SingletonLazyHolder LazyH = SingletonLazyHolder.getInstancia();
		System.out.println(LazyH);
		
		LazyH = SingletonLazyHolder.getInstancia();
		System.out.println(LazyH);
		

	}

}
