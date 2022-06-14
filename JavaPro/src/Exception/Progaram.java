package Exception;

public class Progaram {

//	메인 함수에서 throws 예외 처리를 하게 되면 코드가 실행되지 않고 바로 예외 처리로 넘어가기 떄문에
//	try catch 문으로 예외 처리를 많이 사용함
	public static void main(String[] args){

		//Calculator calc = new Calculator();
		int result =0;
//		try {} : 실행 할 코드를 넣어 놓는다 
//		catch(예외){} : 예외 처리가 발생할 경우 실행 할 코드는 넣음 
//		finally{} : 예외가 발생 시 모든 예외에서 마지막에 실행할 코드를 넣어 놓음
		
		try {
		result = Calculator.add(3,2);
		System.out.printf("add: %d\n",result);
		result = Calculator.sub(1000,4);
		System.out.printf("sub: %d\n",result);
		result = Calculator.multi(3,4);
		System.out.printf("multi: %d\n",result);
		result = Calculator.div(3,0);
		System.out.printf("div: %d\n",result);
		}catch(Exception e) {
		}finally {
			System.out.println("오류가 발생하였습니다.");
		}

	}

}
