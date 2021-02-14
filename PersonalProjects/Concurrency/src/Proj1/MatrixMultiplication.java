package Proj1; 
import java.util.Date; 
import java.util.Scanner;
public class MatrixMultiplication {
	public static void main(String[] args) {
		double matrix1[][] = MatrixGenerator.generate(1000, 1000);
		double matrix2[][] = MatrixGenerator.generate(1000, 1000);
		double result[][] = new double[matrix1.length][matrix2[0].length];
		Scanner scan = new Scanner(System.in); 
		
		Date start = new Date();
		
		System.out.println("1: SerialMultiplier\n2: ParallelMultiplier");
		
		int input = scan.nextInt();
		switch(input) {
			case 1:
				SerialMultiplier.multiply(matrix1, matrix2, result);
			case 2:
				ParallelIndividualMultiplier.multiply(matrix1, matrix2, result);
		}
		
		Date end = new Date();
		System.out.printf("Serial: %d%n", end.getTime() - start.getTime());
	}
}
