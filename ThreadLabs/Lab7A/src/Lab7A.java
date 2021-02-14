
public class Lab7A extends Thread {
	int[] nums; 
	int start, end;
	int total = 0; 
	
	public Lab7A(int[] nums, int start, int end) {
		this.nums = nums; 
		this.start = start; 
		this.end = end; 
	}
	
	@Override 
	public void run() {
		for (int i = start; i < end;i++) {
			total += nums[i];
		} 
	}
	
	public int getNum() { 
		return total;
	}
}
