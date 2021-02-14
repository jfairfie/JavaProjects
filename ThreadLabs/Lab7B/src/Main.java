import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

//Program Written By Joshua Fairfield
public class Main {
	public static void main(String[] args) {
		try {
			//Arraylist stores all of the strings 
			FileReader reader = new FileReader("alice.txt");
			ArrayList list = new ArrayList(); 
			
			//Reading the file
			int i;
			try {
				i = reader.read();
				String str = ""; 
				while (i != -1) { 
					if (i == 32 || i == 34 || i == 59 || i == 58) {
						list.add(str); 
						str = ""; 
					}
					str += String.valueOf((char)i); 
					 
					i = reader.read(); 
				}
				reader.close(); 
			} catch (IOException e1) {
				e1.printStackTrace();
			} 
			
			//Creating the objects and the threads 
			Lab7B l1 = new Lab7B(0, list.size()/3,list); 
			Lab7B l2 = new Lab7B(list.size()/3,list.size()/2,list); 
			Lab7B l3 = new Lab7B(list.size()/2,list.size(),list); 
			Thread t1 = new Thread(l1); 
			Thread t2 = new Thread(l2); 
			Thread t3 = new Thread(l3); 
			
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
			t3.start();
				try { 
					t3.join();
				} catch(Exception e) {
					System.out.println("Error");
				}
			
			//Prints out the result 
			int result = l1.getCount() + l2.getCount() + l3.getCount(); 
			System.out.println(result);
			
		} catch (FileNotFoundException e) {
			System.out.println("Error, file not found...");
		}
	}
}
