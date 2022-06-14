package Exception;

// Exception -> RuntimeException
// unchecked Exception 오류 확인을 강제 하지 않고 runtime에서 확인을 함
public class over_1000 extends RuntimeException {
	@Override
	public String getMessage() {
		return "값이 1000을 넘어갑니다";
	}
}
