
public class Node {
	int key; 
	Node right, left; 
	String name; 
	
	public Node(int key, String name) {
		this.key = key; 
		right = left = null; 
		this.name = name; 
	}
	
	public void displayANode() {
		System.out.println(key + " : " + name);
	}
	
	@Override
	public String toString() {
		return "Key: " + key; 
	}
}
