package StringsNumbersMath;

import java.util.ArrayList; 

public class Runner {
	public static void main(String[] args) {
		System.out.println(countDuplicateCharacters("testing the duplicate function")); 
		System.out.println(findFirstNonRepeat("testing the nonrepeat function"));
		
		System.out.println();
		System.out.println(reverseLettersInWord("testing this string"));
		System.out.println(reverseLettersAndWords("testing this word"));
		
		System.out.println();
		System.out.println(onlyDigits("1123456789"));
		System.out.println(onlyDigits("a12 b"));
		
		System.out.println(); 
		System.out.println(countVowels("count the vOwEls")); 
		System.out.println(countVowels("n vWls"));
		
		System.out.println(); 
		System.out.println(countOccurences("Counting the number of occurences", 'o'));
		
		System.out.println();
		System.out.println(removeWhiteSpace("R e m ove w h i t e space"));
	
		System.out.println();
		String delimiterJoin[] = {"test", "string", "join"}; 
		System.out.println(joinByDelimiter(',', delimiterJoin)); 
		
	}
	
	//Write a Program that Counts Duplicate Characters from a Given String
	// Program does not count the first duplicate, so for instance tt is just 1 duplicate 
	private static int countDuplicateCharacters(String word) {
		ArrayList<Character> charList = new ArrayList<Character>(); 
		int ret = 0;
		for (int i = 0; i < word.length(); i++) {
			if (charList.indexOf(word.charAt(i)) == -1) {
				charList.add(word.charAt(i));
				for (int j = i+1; j < word.length(); j++) {
					if (word.charAt(i) == word.charAt(j)) {
						ret++; 
					}
				}
			}
		}
		
		return ret; 
	}
	
	//Finding the first non-repeated character 
	private static char findFirstNonRepeat(String word) {
		char ret; 
		ArrayList<Character> charList = new ArrayList<Character>(); 
		
		for (int i = 0; i < word.length(); i++) {
			if (charList.indexOf(word.charAt(i)) == -1) {
				int j = i+1; 
				while (j < word.length()) {
					if (word.charAt(i) == word.charAt(j)) {
						charList.add(word.charAt(i)); 
						break; 
					} 
					if (j == word.length() - 1) {
						return word.charAt(i); 
					}
					j++; 
				}
			}
		}
		
		return ' ';
	}
	
	//Reversing Letters and Words 
	// Write a program that reverses the letters of each word and a program that reverses the letters of each letter of each word and the words themselves 
	private static String reverseLettersInWord(String word) {
		int begin = 0; 
		String returnString = ""; 
		
		for (int i = 0; i < word.length(); i++) {
			if (word.charAt(i) == ' ' || i == word.length() - 1) {
				returnString += reverseLettersAndWords(word.substring(begin, i+1)); 					
				begin = i; 
			}
		}
		return returnString; 
	}
	
	private static String reverseLettersAndWords(String word) {
		String reversedString = ""; 
		for (int i = word.length()-1; i >= 0; i--) {
			reversedString += word.substring(i); 
			word = word.substring(0,i); 
		}
		return reversedString; 
	}

	//Checking Whether a String Contains Only Digits and Spaces  
	private static Boolean onlyDigits(String word) {
		for (int i = 0; i < word.length(); i++) {
			if (!Character.isDigit(word.charAt(i))) {
				return false; 
			}
		}
		return true; 
	}
	
	//Counting the number of vowels in a string 
	private static int countVowels(String word) {
		int ret = 0; 
		
		ArrayList<Character> vowels = new ArrayList<Character>(); 
		vowels.add('a');
		vowels.add('e');
		vowels.add('i'); 
		vowels.add('o'); 
		vowels.add('u'); 
		vowels.add('A');
		vowels.add('E');
		vowels.add('I');
		vowels.add('O');
		vowels.add('U');
		
		for (int i = 0; i < word.length(); i++) {
			if (vowels.contains(word.charAt(i))) {
				ret++; 
			}
		}
		
		return ret; 
	}
	
	//Counting number of occurences of a particular character
	private static int countOccurences(String word, char character) {
		int ret = 0; 
		
		for (int i = 0; i < word.length(); i++) {
			if (word.charAt(i) == character) {
				ret++; 
			}
		}
		
		return ret; 
	}

	//Removing whitespace from a string
	private static String removeWhiteSpace(String word) {
		for (int i = 0; i < word.length(); i++) {
			if (word.charAt(i) == ' ') {
				word = word.substring(0, i) + word.substring(i+1, word.length()); 
			}
		}
		return word; 
	}
	
	//Joining Multiple Strings with a delimeter 
	private static String joinByDelimiter(char delimiter, String words[]) {
		String retString = ""; 
		
		for (int i = 0; i < words.length; i++) {
			retString += words[i] + delimiter; 
		}
		return retString; 
	}
}
