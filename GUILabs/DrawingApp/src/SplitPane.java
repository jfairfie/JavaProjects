import javax.swing.event.MouseInputAdapter;
import javax.swing.JPanel;
import javax.swing.JSplitPane;
import java.awt.event.MouseEvent;
import java.util.LinkedList;
import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JMenu; 
import javax.swing.JMenuBar;
import javax.swing.JMenuItem; 

public class SplitPane extends JSplitPane {
	private LinkedList<shapes> dShapes = new LinkedList<shapes>(); 
	private int startx, starty; 
	private JButton clear; 
	private JMenuBar menuBar; 
	private JMenu drawMenu, colorMenu, thicknessMenu; 
	private JMenuItem rectangle, oval, line, 
					  red, green, blue, black, yellow, 
					  thin, medium, thick; 
	private int width, height; 
	private int shape = 0; 
	private int thickness = 1; 
	private MouseListener mouseListener; 
	private Color clr = Color.RED; 
	
		
		//Program uses JSplitPane, adding JPanels to top and bottom 
		public SplitPane() {
			GUI gui = new GUI();
			drawPanel drawPanel = new drawPanel(); 
			setDividerLocation(35); 
			setOrientation(JSplitPane.VERTICAL_SPLIT);
			setTopComponent(gui); 
			setBottomComponent(drawPanel); 
			setVisible(true); 
		}
		
		//GUI
		private class GUI extends JPanel {
			
			public GUI() {
				//Creating JMenuBar and Adding Components
				menuBar = new JMenuBar(); 
				drawMenu = new JMenu("Draw"); 
				colorMenu = new JMenu("Color"); 
				thicknessMenu = new JMenu("Thickness");
				
				rectangle = new JMenuItem("Rectangle"); 
				oval = new JMenuItem("Oval"); 
				line = new JMenuItem("Line"); 
				
				red = new JMenuItem("Red"); 
				green = new JMenuItem("Green"); 
				blue = new JMenuItem("Blue"); 
				black = new JMenuItem("Black"); 
				yellow = new JMenuItem("Yellow");  
				
				thin = new JMenuItem("Thin"); 
				medium = new JMenuItem("Medium"); 
				thick = new JMenuItem("Thick"); 
		
				add(menuBar); 
				menuBar.add(drawMenu);
				drawMenu.add(rectangle); 
				drawMenu.add(oval);
				drawMenu.add(line); 
				
				menuBar.add(colorMenu); 
				colorMenu.add(red); 
				colorMenu.add(green); 
				colorMenu.add(blue); 
				colorMenu.add(black); 
				colorMenu.add(yellow);
				
				menuBar.add(thicknessMenu); 
				thicknessMenu.add(thin); 
				thicknessMenu.add(medium); 
				thicknessMenu.add(thick); 
		
				clear = new JButton("Clear"); 
				add(clear); 
				//Adding an event handler to menu and buttons 
				EventListener eventHandler = new EventListener(); 
				ClearListener clearHandler = new ClearListener(); 
				
				rectangle.addActionListener(eventHandler);
				oval.addActionListener(eventHandler); 
				line.addActionListener(eventHandler);
				
				red.addActionListener(eventHandler);
				green.addActionListener(eventHandler);
				blue.addActionListener(eventHandler);
				black.addActionListener(eventHandler);
				yellow.addActionListener(eventHandler);
				
				thin.addActionListener(eventHandler);
				medium.addActionListener(eventHandler);
				thick.addActionListener(eventHandler);
				
				clear.addActionListener(clearHandler);
				
				addMouseMotionListener(mouseListener); 
				setVisible(true); 
			}

			//Event listener determines which button is pressed and performs an action 
			private class EventListener implements ActionListener {
				
				//Sets the shape, color, and line thickness 
				public void actionPerformed(ActionEvent e) {
					if (e.getSource() == rectangle) {
						shape = 0; 
					} else if (e.getSource() == oval) {
						shape = 1; 
					} else if (e.getSource() == line) {
						shape = 2; 
					} else if (e.getSource() == red) {
						clr = Color.RED; 
					} else if (e.getSource() == green) {
						clr = Color.GREEN; 
					} else if (e.getSource() == black) {
						clr = Color.BLACK; 
					} else if (e.getSource() == blue) {
						clr = Color.BLUE; 
					} else if (e.getSource() == yellow) {
						clr = Color.YELLOW; 
					} else if (e.getSource() == thin) {
						thickness = 1; 
					} else if (e.getSource() == medium) {
						thickness = 5; 
					} else if (e.getSource() == thick) {
						thickness = 10; 
					}
				}
			
			}
		}
		
		//Creates the size of selected shape 
		private class MouseListener extends MouseInputAdapter {
			//dragging determines if the mouse is still being moved after the first click 
			//First mouse click determines x1 and y1 
			//The 2nd mouseclick determines the coordinates x2 and y2 
			boolean dragging = false; 
			
			public void mousePressed(MouseEvent e) {
				if (dragging == false) {
					startx = e.getX(); 
					starty = e.getY(); 
					dragging = true; 
				} else if (dragging == true) {
					if (shape == 0) {
						height = Math.abs(e.getY() - starty); 
						width = Math.abs(e.getX() - startx); 
						getInitial(e.getX(), e.getY()); 
						//Adds a new shape object to the linkedlist 
						dShapes.add(new shapes(startx, starty, width, height, clr, 0, thickness));
					} else if (shape == 1) {
						height = Math.abs(e.getY() - starty); 
						width = Math.abs(e.getX() - startx); 
						getInitial(e.getX(), e.getY()); 
						dShapes.add(new shapes(startx, starty, width, height, clr, 1, thickness));
					} else if (shape == 2) {
						dShapes.add(new shapes(startx, starty, e.getX(), e.getY(), clr, 2, thickness));
					}
					
					repaint(); 
					dragging = false; 
				}
			}
			
			//Determines starting point of the shape, so second coordinates allow shape to go in every direction 
			void getInitial(int endx, int endy) {
				if (startx < endx && starty < endy) {
					return; 
				} else if (startx < endx && starty > endy) {
					starty = starty - Math.abs(starty - endy); 
				} else if (startx > endx && starty > endy) {
					startx = startx - Math.abs(startx - endx);
					starty = starty - Math.abs(starty - endy); 
				} else if (startx > endx && starty < endy) {
					startx = startx - Math.abs(startx - endx); 
				}
			}
		}

	
	//Panel holds the shape graphics 
	private class drawPanel extends JPanel {
		public drawPanel() { 
			mouseListener = new MouseListener(); 
			addMouseListener(mouseListener); 
			setVisible(true); 
		}
		
		//Draws the shapes from the LinkedList 
		public void paint(Graphics g) {
			for (shapes s : dShapes) {
				s.draw(g);
			}
		}
	}
	
	private class ClearListener implements ActionListener {

		public void actionPerformed(ActionEvent e) {
			dShapes.clear(); 
			repaint(); 
		}
		
	}
	
	//The shape object stores the information about each shape 
	private class shapes {
		private int x, y, width, height, shape, thickness;  
		private Color color; 
		
		public shapes(int x, int y, int width, int height, Color color, int shape, int thickness) {
			this.x = x; 
			this.y = y; 
			this.width = width;
			this.height = height; 
			this.color = color; 
			this.shape = shape; 
			this.thickness = thickness; 
		}
		
		
		//Draws shapes 
		public void draw(Graphics g) {
			Graphics2D g2d = (Graphics2D)g;
			g2d.setStroke(new BasicStroke(thickness));
			if (shape == 0) {
				g2d.setColor(color);
				g2d.fillRect(x, y, width, height);
			} else if (shape == 1) {
				g2d.setColor(color);
				g2d.fillOval(x, y, width, height);
			} else if (shape == 2) {
				g2d.setStroke(new BasicStroke(thickness));
				g2d.setColor(color);
				g2d.drawLine(x, y, width, height);
			}
		}
	}
}