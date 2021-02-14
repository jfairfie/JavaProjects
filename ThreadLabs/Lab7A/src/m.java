
public class m {
	public static void main(String[] args) {
		final int SIZE = 10000; 

		int[] nums = new int[SIZE];
		

		for (int i = 0; i < SIZE; i++) {
			nums[i] = 1; 
		}
		
		Lab7A a1 = new Lab7A(nums,0,nums.length/2);
		Lab7A a2 = new Lab7A(nums,nums.length/2,SIZE);
		Thread t1 = new Thread(a1); 
		Thread t2 = new Thread(a2);
		
		t1.start();
			try {
				t1.join();
			} catch (Exception e) {
				System.out.println("Error");
			}
		t2.start(); 
			try {
				t2.join();
			} catch (Exception e) {
				System.out.println("Error");
			}
		System.out.print(a2.getNum() + a1.getNum());
	}
}
