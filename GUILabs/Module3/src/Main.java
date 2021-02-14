import javax.swing.JFrame; 
import javax.swing.JPanel; 
import javax.swing.BoxLayout; 
import javax.swing.JButton; 

public class Main {
	public static void main(String[] args) {
		JFrame frame = new JFrame("Module 3"); 
		
		orderMenu order = new orderMenu(); 
		
		frame.setSize(800, 1080);
		frame.setContentPane(order);
		frame.setDefaultCloseOperation(frame.EXIT_ON_CLOSE);
		frame.setVisible(true);
	}
}
