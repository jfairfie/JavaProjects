
public class Main {
	public static void main(String[] args) {
		BinaryTree tree = new BinaryTree(); 
		tree.add(10, tree.root, "A");
		tree.add(5, tree.root, "B");
		tree.add(7, tree.root, "C");
		tree.add(15, tree.root, "D");
		
		tree.inOrderTraverseTree(tree.root);
		//tree.inOrderTraverseTree(tree.root);
		tree.search(tree.root, 7);
	}
}
