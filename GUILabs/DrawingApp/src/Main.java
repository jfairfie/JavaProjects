import javax.swing.JFrame;
import javax.swing.JSplitPane; 

public class Main {
	public static void main(String[] args) {
		JFrame frame = new JFrame("Module 1");
		SplitPane pane = new SplitPane(); 
		frame.setContentPane(pane);
		frame.setSize(1920,1080);
		frame.setDefaultCloseOperation(frame.EXIT_ON_CLOSE);
		frame.setVisible(true);	
	}
}