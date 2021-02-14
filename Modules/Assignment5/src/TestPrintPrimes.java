//Joshua Fairfield 
//Assignment 5 
//Software Testing Q/A 

import static org.junit.Assert.assertEquals;
import org.junit.Rule;  
import org.junit.contrib.java.lang.system.SystemOutRule; 
import org.junit.*; 

public class TestPrintPrimes {
	private PrintPrimes prime; 
	
	//Rule obtains the println output 
	@Rule
	public final SystemOutRule systemOutRule = new SystemOutRule().enableLog();
	
	@Before
	public void Initialize() {
		prime = new PrintPrimes();
	}
	
	//Tests skipping of while loop, ensuring it just prints Prime: 2
	@Test 
	public void Question2Test() {
		String Question2[] = {"1"}; 
		prime.main(Question2);
		//Removeall() removing all whitespace 
		String str = systemOutRule.getLog().replaceAll("\\s", "");
		assertEquals(str, "Prime:2");
	}
	
	//Test covers all the edges using inputs 2, and 3
	@Test 
	public void Question3Test() {
		String Question3[] = {"2"}; 
		prime.main(Question3);
		String str = systemOutRule.getLog().replaceAll("\\s", ""); 
		assertEquals(str, "Prime:2Prime:3"); 
		Question3[0] = "3"; 
		prime.main(Question3);
		str = systemOutRule.getLog().replaceAll("\\s", ""); 
		assertEquals(str, "Prime:2Prime:3Prime:2Prime:3Prime:5"); 
		
	}
}