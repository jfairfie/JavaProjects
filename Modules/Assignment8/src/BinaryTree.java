
public class BinaryTree {
	Node root; 
	
	public BinaryTree() {
		root = null; 
	}

	public void add(int key, Node node, String name) {
		if (root == null) {
			root = new Node(key, name); 
			return; 
		}
		if (key < node.key) {
			if (node.left == null) {
				node.left = new Node(key,name); 
				return; 
			} else {
				add(key, node.left,name); 
			}
		}
		if (key > node.key) {
			if (node.right == null) {
				node.right = new Node(key,name); 
				return; 
			}  else {
				add(key, node.right,name); 
			}
		}
	}
	
	public void search(Node node, int key) {
		if (root == null || node == null) {
			return;
		}
		
		//Checks if the key is found 
		if (key == node.key) {
			System.out.println("found: " + node.name); 
			return; 
		}
		
		//Recursively goes through the list 
		if (key < node.key) {
			search(node.left, key); 
		} else if (key > node.key) {
			search(node.right,key);
		}
	}
	
	public void inOrderTraverseTree(Node focusNode) {
		if (focusNode != null) {
			inOrderTraverseTree(focusNode.left);
			System.out.println(focusNode);
			inOrderTraverseTree(focusNode.right); 
		}
	}
}
