---
layout: default
title: StringUtils
categories: api
---

         global static String 	abbreviate(String str, Integer maxWidth)
            Abbreviates a String using ellipses.

         global static String 	abbreviate(String str, Integer offset, Integer maxWidth)
      Abbreviates a String using ellipses.

         global static String 	capitalize(String str)
            Capitalizes a String changing the first letter to title case as per Character.toTitleCase(char).

         global static String 	center(String str, Integer size)
            Centers a String in a larger String of size size using the space character (' ').

         global static String 	center(String str, Integer size, String padStr)
            Centers a String in a larger String of size size.

         global static String 	charAt(String str, Integer index)
            Centers a String in a larger String of size size using the space character (' ').

         global static String 	chomp(String str)
            Removes one newline from end of a String if it's there, otherwise leave it alone.

         global static String 	chomp(String str, String separator)
            Removes separator from the end of str if it's there, otherwise leave it alone.

         global static String 	chop(String str)
            Remove the last character from a String.

         global static boolean 	contains(String str, String searchStr)
          Checks if String contains a search String, handling null.

         global static boolean 	containsAny(String str, String searchChars)
           Checks if the String contains any character in the given set of characters.

         global static boolean 	containsIgnoreCase(String str, String searchStr)
          Checks if String contains a search String irrespective of case, handling null.

         global static boolean 	containsNone(String str, String invalidChars)
          Checks that the String does not contain certain characters.

         global static boolean 	containsOnly(String str, String valid)
          Checks if the String contains only certain (valid) characters.

         global static Integer 	countMatches(String str, String sub)
          Counts how many times the substring appears in the larger String.

         global static String 	defaultIfEmpty(String str, String defaultStr)
          Returns either the passed in String, or if the String is empty or null, the value of defaultStr.

         global static String 	defaultString(String str)
          Returns either the passed in String, or if the String is null, an empty String ("").

         global static String 	defaultString(String str, String defaultStr)
          Returns either the passed in String, or if the String is null, the value of defaultStr.

         global static String 	deleteWhitespace(String str)
          Deletes all whitespaces from a String as defined by Character.isWhitespace(char).

         global static String 	difference(String str1, String str2)
     Compares two Strings, and returns the portion where they differ.

         global static Integer 	indexOfDifference(String[] strs)
	Compares all Strings in an array and returns the index at which the Strings begin to differ.
         global static Integer 	indexOfDifference(String str1, String str2)
	 Compares two Strings, and returns the index at which the Strings begin to differ.

         global static boolean 	equals(String str1, String str2)
     Compares two Strings, returning true if they are equal.
         global static boolean 	equalsIgnoreCase(String str1, String str2)
     Compares two Strings, returning true if they are equal ignoring the case.

         global static Integer 	indexOf(String str, String searchStr)
          Finds the first index within a String, handling null.

         global static Integer 	indexOf(String str, String searchStr, Integer startPos)
          Finds the first index within a String, handling null.

         global static String 	getCommonPrefix(String[] strs)
		 Compares all Strings in an array and returns the initial sequence of characters that is common to all of them.

         global static int 	getLevenshteinDistance(String s, String t)
 Find the Levenshtein distance between two Strings.


         global static Integer 	indexOfAnyBut(String str, String searchChars)
          Search a String to find the first index of any character not in the given set of characters.

         global static boolean 	endsWith(String str, String suffix)
	Check if a String ends with a specified suffix.

         global static boolean 	endsWithIgnoreCase(String str, String suffix)
		 Case insensitive check if a String ends with a specified suffix.

         global static Integer 	indexOfAny(String str, String searchChars)
	 Search a String to find the first index of any character in the given set of characters.
						
         global static Integer 	indexOfAny(String str, String[] searchStrs)
Find the first index of any of a set of potential substrings.

         global static boolean 	isAlpha(String str)
 Checks if the String contains only unicode letters.


         global static boolean 	isAlphaSpace(String str)
 Checks if the String contains only unicode letters and space (' ').
												
         global static boolean 	isAlphanumeric(String str)
 Checks if the String contains only unicode letters or digits.
														
         global static boolean 	isAlphanumericSpace(String str)
Checks if the String contains only unicode letters, digits or space (' ').
																
         global static boolean 	isAsciiPrintable(String str)
Checks if the string contains only ASCII printable characters.																

         global static boolean 	isNumeric(String str)
Checks if the String contains only unicode digits.
																						         global static boolean 	isNumericSpace(String str)
Checks if the String contains only unicode digits or space (' ').
																						         global static boolean 	isWhitespace(String str)
Checks if the String contains only whitespace.

         global static String joinArray(Object[] objectArray)
          Joins the elements of the provided array into a single String containing the provided list of elements.

         global static String joinArray(Object[] objectArray, String separator) 
          Joins the elements of the provided array into a single String containing the provided list of elements.
 StringUtils.join(["a", "b", "c"], ';')  = "a;b;c"

         global static String joinArray(Object[] objectArray, String separator, Integer startIndex, Integer endIndex) {
          Joins the elements of the provided array into a single String containing the provided list of elements.
		 StringUtils.join(["a", "b", "c"], ';')  = "a;b;c"

         global static String joinStrings(Set<String> strings, String separator)
    Joins the elements of the provided array into a single String containing the provided list of elements.


         global static String joinSet(Set<Blob> blobSet, String separator)
    Joins the elements of the provided Set into a single String containing the provided list of elements.
	
         global static String joinSet(Set<Boolean> booleanSet, String separator)
    Joins the elements of the provided Set into a single String containing the provided list of elements.

         global static String joinSet(Set<Date> dateSet, String separator
    Joins the elements of the provided Set into a single String containing the provided list of elements.
	
         global static String joinSet(Set<Datetime> datetimeSet, String separator)
    Joins the elements of the provided Set into a single String containing the provided list of elements.

         global static String joinSet(Set<Decimal> decimalSet, String separator)
    Joins the elements of the provided Set into a single String containing the provided list of elements.

	
         global static String joinSet(Set<Double> doubleSet, String separator)
    Joins the elements of the provided Set into a single String containing the provided list of elements.

																							
         global static String joinSet(Set<ID> idSet, String separator)
    Joins the elements of the provided Set into a single String containing the provided list of elements.

	
         global static String joinSet(Set<Integer> integerSet, String separator)
    Joins the elements of the provided Set into a single String containing the provided list of elements.

	
         global static String joinSet(Set<Long> longSet, String separator)
    Joins the elements of the provided Set into a single String containing the provided list of elements.

	
         global static String joinSet(Set<Time> timeSet, String separator)
    Joins the elements of the provided Set into a single String containing the provided list of elements.
	
         global static String joinSet(Set<String> stringSet, String separator)
    Joins the elements of the provided Set into a single String containing the provided list of elements.

         global static String joinSet(Set<Object> objectSet, String separator)
    Joins the elements of the provided Set into a single String containing the provided list of elements.

         global static String joinStrings(List<String> strings, String separator)
	Joins the elements of the provided array into a single String containing the provided list of elements.
   
         global static Integer lastIndexOf(String str, String searchStr)
	 Finds the last index within a String, handling null.																			

         global static int 	lastIndexOf(String str, char searchChar, int startPos)
 Finds the last index within a String from a start position, handling null.
			
         global static int 	lastIndexOfAny(String str, String[] searchStrs)
 Find the latest index of any of a set of potential substrings.
					
         global static String 	left(String str, int len)
Gets the leftmost len characters of a String.
							
         global static String 	mid(String str, int pos, int len)
Gets len characters from the middle of a String.
									
         global static String 	overlay(String str, String overlay, int start, int end)
Overlays part of a String with another String.
											
         global static String 	leftPad(String str, int size)
Left pad a String with spaces (' ').

         global static String 	leftPad(String str, int size, String padStr)
Left pad a String with a specified String.
															
         global static int 	length(String str)
Gets a String's length or 0 if the String is null.
																		         global static String 	lowerCase(String str)
Converts a String to lower case as per String.toLowerCase().
																					         global static String 	remove(String str, String remove)
Removes all occurrences of a substring from within the source string.
																					
         global static String 	removeStart(String str, String remove)
Removes a substring only if it is at the begining of a source string, otherwise returns the source string.

         global static String 	removeStartIgnoreCase(String str, String remove)
Case insensitive removal of a substring if it is at the begining of a source string, otherwise returns the source string.
																									
         global static String 	removeEnd(String str, String remove)
Removes a substring only if it is at the end of a source string, otherwise returns the source string.
																											
         global static String 	removeEndIgnoreCase(String str, String remove)
Case insensitive removal of a substring if it is at the end of a source string, otherwise returns the source string.
																															         global static String 	repeat(String str, int repeat)
Repeat a String repeat times to form a new String.
																															
         global static String replace(String text, String searchString, String replacement)																															          Replaces all occurrences of a String within another String.
																																			         
         global static String 	replaceOnce(String text, String searchString, String replacement)
Replaces a String with another String inside a larger String, once.																																

         global static String 	replace(String text, String searchString, String replacement, int max)																																		          Replaces a String with another String inside a larger String, for the first max values of the search String.

         global static String replaceEach(String text, String[] searchList, String[] replacementList)																																			           Replaces all occurrences of Strings within another String.

         global static String 	replaceEachRepeatedly(String text, String[] searchList, String[] replacementList)														Replaces all occurrences of Strings within another String.

         global static String replaceEach(String text, String[] searchList, String[] replacementList)																																								           Replaces all occurrences of Strings within another String.

         global static String reverse(String str)																																												Causes this character sequence to be replaced by the reverse of the sequence. If there are any surrogate pairs included in the sequence, these are treated as single characters for the reverse operation. Thus, the order of the high-low surrogates is never reversed. Let n be the character length of this character sequence (not the length in char values) just prior to execution of the reverse method. Then the character at index k in the new character sequence is equal to the character at index n-k-1 in the old character sequence.
See: http://download.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html?is-external=true#reverse%28%29

         global static String 	reverseDelimited(String str, String separatorChars)
Reverses a String that is delimited by a specific character.														
         global static String 	right(String str, int len)
Gets the rightmost len characters of a String.
															         global static String 	rightPad(String str, int size)
 Right pad a String with spaces (' ').

         global static String 	rightPad(String str, int size, String padStr)
 Right pad a String with a specified String.																
         global static String 	swapCase(String str)
Swaps the case of a String changing upper and title case to lower case, and lower case to upper case.
																																																																							

         global static boolean 	startsWithIgnoreCase(String str, String prefix)
Case insensitive check if a String starts with a specified prefix.

         global static boolean 	startsWith(String str, String prefix)
Check if a String starts with a specified prefix.
												
         global static boolean regionMatches(String str, Integer toffset, String other, Integer ooffset, Integer len)
Compares regions of two different strings. Returns true if they match.

         global static boolean regionMatchesIgnoreCase(String str, Integer toffset, String other, Integer ooffset, Integer len)
	Compares regions of two different strings. Returns true if they match.
														
         global static boolean regionMatches(String str, boolean ignoreCase,
Integer toffset, String other, Integer ooffset, Integer len)
	Compares regions of two different strings. Returns true if they match.
			
         global static String[] 	split(String str)
Splits the provided text into an array, using whitespace as the separator.

         global static String[] 	split(String str, String separatorChars)
Splits the provided text into an array, separators specified.
			
         global static String[] 	split(String str, String separatorChars, int max)
Splits the provided text into an array with a maximum length, separators specified.
	
         global static String[] 	splitPreserveAllTokens(String str)
Splits the provided text into an array, using whitespace as the separator, preserving all tokens, including empty tokens created by adjacent separators.				

         global static String[] 	splitPreserveAllTokens(String str, String separatorChars)
Splits the provided text into an array, separators specified, preserving all tokens, including empty tokens created by adjacent separators.

         global static String[] 	splitPreserveAllTokens(String str, String separatorChars, int max)
Splits the provided text into an array with a maximum length, separators specified, preserving all tokens, including empty tokens created by adjacent separators.

         global static String[] 	splitByWholeSeparator(String str, String separator)
Splits the provided text into an array, separator string specified.

         global static String[] 	splitByWholeSeparator(String str, String separator, int max)
Splits the provided text into an array, separator string specified.
																global static String[] 	splitByWholeSeparatorPreserveAllTokens(String str, String separator)
Splits the provided text into an array, separator string specified.
																	
																			         global static String[] 	splitByWholeSeparatorPreserveAllTokens(String str, String separator, int max)
Splits the provided text into an array, separator string specified.													

																					         global static String[] 	splitByCharacterType(String str)
Splits a String by Character type as returned by Character.getType.getType(charAt(str,pos)).

         global static String[] splitByCharacterTypeCamelCase(String str)
Splits a String by Character type as returned by Character.getType.getType(charAt(str,pos)).

         global static String 	strip(String str)
Strips whitespace from the start and end of a String.

         global static String 	stripToNull(String str)
Strips whitespace from the start and end of a String returning null if the String is empty ("") after the strip.

         global static String 	stripToEmpty(String str)
Strips whitespace from the start and end of a String returning an empty String if null input.
				
         global static String 	stripStart(String str, String stripChars)
Strips any of a set of characters from the start of a String.
						
         global static String 	stripEnd(String str, String stripChars)
Strips any of a set of characters from the end of a String.
								
         global static String[] 	stripAll(String[] strs)
Strips whitespace from the start and end of every String in an array.
										
         global static String 	substring(String str, int start)
Gets a substring from the specified String avoiding exceptions.

         global static String 	substring(String str, int start, int end)
Gets a substring from the specified String avoiding exceptions.								


         global static String 	substringBefore(String str, String separator)
Gets the substring before the first occurrence of a separator.																												

         global static String 	substringAfter(String str, String separator)
Gets the substring after the first occurrence of a separator.

	         global static String 	substringBeforeLast(String str, String separator)
Gets the substring before the last occurrence of a separator.																		

         global static String 	substringAfterLast(String str, String separator)
Gets the substring after the last occurrence of a separator.																					

         global static String 	substringBetween(String str, String tag)																								          Gets the String that is nested in between two instances of the same String.

         global static String 	substringBetween(String str, String open, String close)
Gets the String that is nested in between two Strings.

         global static String[] 	substringsBetween(String str, String open, String close)																										          Searches a String for substrings delimited by a start and end tag, returning all matching substrings in an array.

         global static String 	trim(String str)																														          Removes control characters (char <= 32) from both ends of this String, handling null by returning null.																														         global static List<String> trimAll(List<String> aList)
    Removes control characters (char <= 32) from all Strings in List, handling null by returning null.																											
         global static Set<String> trimAll(Set<String> aList)
    Removes control characters (char <= 32) from all Strings in Set, handling null by returning null.																											

         global static String 	trimToNull(String str)
    Removes control characters (char <= 32) from both ends of this String returning null if the String is empty ("") after the trim or if it is null.
	
         global static String 	trimToEmpty(String str)
    Removes control characters (char <= 32) from both ends of this String returning an empty String ("") if the String is empty ("") after the trim or if it is null.
				
         global static String 	uncapitalize(String str)
            Uncapitalizes a String changing the first letter to title case as per Character.toLowerCase(char).
					
         global static String 	upperCase(String str)
    Converts a String to upper case as per String.toUpperCase().
							
         global static String ensureStringStartsEndsWithChar(String str, String charc)
    Adds specified character to beginning and/or end of String if it does not start with or end with that character already. 

         global static String[] toCharArray(String str)
Turn string into array of characters (also Strings).

         global static String trimLower(String str)
Removes control characters (char <= 32) from both ends of this String, handling null by returning null, and returning Lowercase. 																							
         global static String stripMarkup(String str)
Remove all markup


	
         