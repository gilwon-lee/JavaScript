package Exception;

public class Calculator {
	
	public Calculator() {}

	public static int add(int x, int y) throws negetive_number {
		int result = x+y;
		if(result<0)
			throw new negetive_number();
		return result;	
	}

	public static int multi(int x, int y) throws negetive_number {
		int result = x*y;
		if(result<0)
			throw new negetive_number();
		return result;	
	}

	public static int sub(int x, int y) throws negetive_number {
		int result = x-y;
		if(result<0)
			throw new negetive_number();
		return result;	
	}

	public static int div(int x, int y) {
		return x/y;
	}
	

}
