import javax.swing.JPanel;
import javax.swing.Box;
import javax.swing.Icon;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JLabel; 
import javax.swing.JTextArea; 
import java.awt.Dimension;
import javax.swing.JTextField;
import javax.swing.border.TitledBorder;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.Image;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener; 

public class orderMenu extends JPanel {
	final int count = 2; 
	int orderNum = 1; 
	private int total = 0; 
	JPanel MainMenu = new JPanel(); 
	JLabel foodLabel = new JLabel("Food"); 
	JLabel priceLabel = new JLabel("Price"); 
	JButton[] addToCart = new JButton[count]; 
	JButton checkOut = new JButton(); 
	JComboBox deliveryOption = new JComboBox(); 
	JTextField[] foodList = new JTextField[count]; 
	JTextField[] costList = new JTextField[count]; 
	JTextArea display = new JTextArea(); 
	Icon image = new ImageIcon("restIcon.png"); 
	Icon checkImage = new ImageIcon("checkoutIcon.png"); 
	JLabel logoLabel = new JLabel(); 
	
	public orderMenu() {
		setBorder(new TitledBorder("Restraunt Order")); 
		
		//Resizing Image Icon
		Image img = ((ImageIcon) image).getImage(); 
		img = img.getScaledInstance(80, 80, Image.SCALE_SMOOTH); 
		image = new ImageIcon(img); 
		logoLabel.setIcon(image);
		
		//Resizing Checkout icon 
		Image img2 = ((ImageIcon) checkImage).getImage(); 
		img2 = img2.getScaledInstance(120,100, Image.SCALE_SMOOTH); 
		checkImage = new ImageIcon(img2); 
		checkOut.setIcon(checkImage);
		
		Font headingFont = new Font("Verdana", Font.BOLD, 24); 
		Font paragraphFont = new Font("Verdana", Font.PLAIN, 18); 
		
		GridLayout grd = new GridLayout(0,3); 
		MainMenu.setLayout(grd);
		grd.setHgap(20);
		grd.setVgap(15);
	
		//Row 1
		MainMenu.add(Box.createRigidArea(new Dimension(40,0))); 
		MainMenu.add(logoLabel);
		MainMenu.add(Box.createRigidArea(new Dimension(40,0))); 
		
		//Row 2 
		MainMenu.add(foodLabel);
		foodLabel.setFont(headingFont);
		MainMenu.add(priceLabel);
		priceLabel.setFont(headingFont);
		MainMenu.add(Box.createRigidArea(new Dimension(80, 0))); 
		
		//Row 3
		foodList[0] = new JTextField("Shrimp"); 
		MainMenu.add(foodList[0]);
		foodList[0].setFont(paragraphFont);
		foodList[0].setEditable(false);
		costList[0] = new JTextField("20$"); 
		MainMenu.add(costList[0]); 
		costList[0].setFont(paragraphFont); 
		costList[0].setEditable(false);
		addToCart[0] = new JButton("Add To Cart"); 
		MainMenu.add(addToCart[0]);
		
		//Row 3 
		foodList[1] = new JTextField("Grits"); 
		MainMenu.add(foodList[1]); 
		foodList[1].setFont(paragraphFont);
		foodList[1].setEditable(false);
		costList[1] = new JTextField("10$");
		MainMenu.add(costList[1]); 
		costList[1].setFont(paragraphFont);
		costList[1].setEditable(false); 
		addToCart[1] = new JButton("Add To Cart"); 
		MainMenu.add(addToCart[1]); 
		
		EventListener eventListen = new EventListener(); 
		addToCart[0].addActionListener(eventListen);
		addToCart[1].addActionListener(eventListen);
		checkOut.addActionListener(eventListen); 
		
		//Row 4 
		deliveryOption.addItem("Pickup");
		deliveryOption.addItem("Delivery");
		deliveryOption.setToolTipText("Choose method to recieve food");
		MainMenu.add(deliveryOption); 
		display.setEditable(false);
		MainMenu.add(display); 
		display.setText("OrderNumber  Food\n");
		MainMenu.add(checkOut); 
		checkOut.setToolTipText("Checkout");
		
		MainMenu.setVisible(true); 
		add(MainMenu); 
		setVisible(true); 
	}
	
	private class EventListener implements ActionListener {

		@Override
		public void actionPerformed(ActionEvent e) {
			if (e.getSource() == addToCart[0]) {
				total += 20; 
				display.setText(display.getText() + orderNum + "\t Shrimp\n");
				orderNum++; 
			} else if (e.getSource() == addToCart[1]) {
				total += 10;
				display.setText(display.getText() + orderNum + "\t Grits\n");
				orderNum++; 
			} else if (e.getSource() == checkOut) {
				display.setText("Cost of order is: $" + total + "\n"); 
				if(deliveryOption.getSelectedIndex() == 0) {
					display.setText(display.getText() + "The delivery cost is $0");
				} else {
					display.setText(display.getText() + "The delivery cost is $5");
				}
			}
		}
	}
	
}
