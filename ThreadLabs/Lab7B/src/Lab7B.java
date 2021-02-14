import java.util.ArrayList;

public class Lab7B extends Thread {
	int count = 0; 
	int start, end; 
	ArrayList<String> list; 
	
	Lab7B(int start, int end, ArrayList list) {
		this.start = start; 
		this.end = end; 
		this.list = list; 
	}
	
	@Override 
	public void run() {
		String str; 
		for (int i = start; i < end; i++) {
			str = list.get(i).toLowerCase();
			if (str.equals(" the")) {
				count++; 
			}
		}
	}
	
	public int getCount() {
		return count; 
	}
}