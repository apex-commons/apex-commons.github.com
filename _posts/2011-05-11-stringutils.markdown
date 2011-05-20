---
layout: default
title: StringUtils
categories: api
---


{% highlight static String 	abbreviate(String str, int maxWidth) %}
        Abbreviates a String using ellipses.


static String 	abbreviate(String str, int offset, int maxWidth)
          Abbreviates a String using ellipses.
static String 	abbreviateMiddle(String str, String middle, int length)
          Abbreviates a String to the length passed, replacing the middle characters with the supplied replacement String.
static String 	capitalise(String str)
          Deprecated. Use the standardly named capitalize(String). Method will be removed in Commons Lang 3.0.
static String 	capitaliseAllWords(String str)
          Deprecated. Use the relocated WordUtils.capitalize(String). Method will be removed in Commons Lang 3.0.
static String 	capitalize(String str)
          Capitalizes a String changing the first letter to title case as per Character.toTitleCase(char).
static String 	center(String str, int size)
          Centers a String in a larger String of size size using the space character (' ').
static String 	center(String str, int size, char padChar)
          Centers a String in a larger String of size size.
static String 	center(String str, int size, String padStr)
          Centers a String in a larger String of size size.
static String 	chomp(String str)
          Removes one newline from end of a String if it's there, otherwise leave it alone.
static String 	chomp(String str, String separator)
          Removes separator from the end of str if it's there, otherwise leave it alone.
static String 	chompLast(String str)
          Deprecated. Use chomp(String) instead. Method will be removed in Commons Lang 3.0.
static String 	chompLast(String str, String sep)
          Deprecated. Use chomp(String,String) instead. Method will be removed in Commons Lang 3.0.
static String 	chop(String str)
          Remove the last character from a String.
static String 	chopNewline(String str)
          Deprecated. Use chomp(String) instead. Method will be removed in Commons Lang 3.0.
static String 	clean(String str)
          Deprecated. Use the clearer named trimToEmpty(String). Method will be removed in Commons Lang 3.0.
static String 	concatenate(Object[] array)
          Deprecated. Use the better named join(Object[]) instead. Method will be removed in Commons Lang 3.0.
static boolean 	contains(String str, char searchChar)
          Checks if String contains a search character, handling null.
static boolean 	contains(String str, String searchStr)
          Checks if String contains a search String, handling null.
static boolean 	containsAny(String str, char[] searchChars)
          Checks if the String contains any character in the given set of characters.
static boolean 	containsAny(String str, String searchChars)
           Checks if the String contains any character in the given set of characters.
static boolean 	containsIgnoreCase(String str, String searchStr)
          Checks if String contains a search String irrespective of case, handling null.
static boolean 	containsNone(String str, char[] invalidChars)
          Checks that the String does not contain certain characters.
static boolean 	containsNone(String str, String invalidChars)
          Checks that the String does not contain certain characters.
static boolean 	containsOnly(String str, char[] valid)
          Checks if the String contains only certain characters.
static boolean 	containsOnly(String str, String validChars)
          Checks if the String contains only certain characters.
static int 	countMatches(String str, String sub)
          Counts how many times the substring appears in the larger String.
static String 	defaultIfEmpty(String str, String defaultStr)
          Returns either the passed in String, or if the String is empty or null, the value of defaultStr.
static String 	defaultString(String str)
          Returns either the passed in String, or if the String is null, an empty String ("").
static String 	defaultString(String str, String defaultStr)
          Returns either the passed in String, or if the String is null, the value of defaultStr.
static String 	deleteSpaces(String str)
          Deprecated. Use the better localized deleteWhitespace(String). Method will be removed in Commons Lang 3.0.
static String 	deleteWhitespace(String str)
          Deletes all whitespaces from a String as defined by Character.isWhitespace(char).
static String 	difference(String str1, String str2)
          Compares two Strings, and returns the portion where they differ.
static boolean 	endsWith(String str, String suffix)
          Check if a String ends with a specified suffix.
static boolean 	endsWithIgnoreCase(String str, String suffix)
          Case insensitive check if a String ends with a specified suffix.
static boolean 	equals(String str1, String str2)
          Compares two Strings, returning true if they are equal.
static boolean 	equalsIgnoreCase(String str1, String str2)
          Compares two Strings, returning true if they are equal ignoring the case.
static String 	escape(String str)
          Deprecated. Use StringEscapeUtils.escapeJava(String) This method will be removed in Commons Lang 3.0
static String 	getChomp(String str, String sep)
          Deprecated. Use substringAfterLast(String, String) instead (although this doesn't include the separator) Method will be removed in Commons Lang 3.0.
static String 	getCommonPrefix(String[] strs)
          Compares all Strings in an array and returns the initial sequence of characters that is common to all of them.
static int 	getLevenshteinDistance(String s, String t)
          Find the Levenshtein distance between two Strings.
static String 	getNestedString(String str, String tag)
          Deprecated. Use the better named substringBetween(String, String). Method will be removed in Commons Lang 3.0.
static String 	getNestedString(String str, String open, String close)
          Deprecated. Use the better named substringBetween(String, String, String). Method will be removed in Commons Lang 3.0.
static String 	getPrechomp(String str, String sep)
          Deprecated. Use substringBefore(String,String) instead (although this doesn't include the separator). Method will be removed in Commons Lang 3.0.
static int 	indexOf(String str, char searchChar)
          Finds the first index within a String, handling null.
static int 	indexOf(String str, char searchChar, int startPos)
          Finds the first index within a String from a start position, handling null.
static int 	indexOf(String str, String searchStr)
          Finds the first index within a String, handling null.
static int 	indexOf(String str, String searchStr, int startPos)
          Finds the first index within a String, handling null.
static int 	indexOfAny(String str, char[] searchChars)
          Search a String to find the first index of any character in the given set of characters.
static int 	indexOfAny(String str, String searchChars)
          Search a String to find the first index of any character in the given set of characters.
static int 	indexOfAny(String str, String[] searchStrs)
          Find the first index of any of a set of potential substrings.
static int 	indexOfAnyBut(String str, char[] searchChars)
          Search a String to find the first index of any character not in the given set of characters.
static int 	indexOfAnyBut(String str, String searchChars)
          Search a String to find the first index of any character not in the given set of characters.
static int 	indexOfDifference(String[] strs)
          Compares all Strings in an array and returns the index at which the Strings begin to differ.
static int 	indexOfDifference(String str1, String str2)
          Compares two Strings, and returns the index at which the Strings begin to differ.
static int 	indexOfIgnoreCase(String str, String searchStr)
          Case in-sensitive find of the first index within a String.
static int 	indexOfIgnoreCase(String str, String searchStr, int startPos)
          Case in-sensitive find of the first index within a String from the specified position.
static boolean 	isAllLowerCase(String str)
          Checks if the String contains only lowercase characters.
static boolean 	isAllUpperCase(String str)
          Checks if the String contains only uppercase characters.
static boolean 	isAlpha(String str)
          Checks if the String contains only unicode letters.
static boolean 	isAlphanumeric(String str)
          Checks if the String contains only unicode letters or digits.
static boolean 	isAlphanumericSpace(String str)
          Checks if the String contains only unicode letters, digits or space (' ').
static boolean 	isAlphaSpace(String str)
          Checks if the String contains only unicode letters and space (' ').
static boolean 	isAsciiPrintable(String str)
          Checks if the string contains only ASCII printable characters.
static boolean 	isBlank(String str)
          Checks if a String is whitespace, empty ("") or null.
static boolean 	isEmpty(String str)
          Checks if a String is empty ("") or null.
static boolean 	isNotBlank(String str)
          Checks if a String is not empty (""), not null and not whitespace only.
static boolean 	isNotEmpty(String str)
          Checks if a String is not empty ("") and not null.
static boolean 	isNumeric(String str)
          Checks if the String contains only unicode digits.
static boolean 	isNumericSpace(String str)
          Checks if the String contains only unicode digits or space (' ').
static boolean 	isWhitespace(String str)
          Checks if the String contains only whitespace.
static String 	join(Collection collection, char separator)
          Joins the elements of the provided Collection into a single String containing the provided elements.
static String 	join(Collection collection, String separator)
          Joins the elements of the provided Collection into a single String containing the provided elements.
static String 	join(Iterator iterator, char separator)
          Joins the elements of the provided Iterator into a single String containing the provided elements.
static String 	join(Iterator iterator, String separator)
          Joins the elements of the provided Iterator into a single String containing the provided elements.
static String 	join(Object[] array)
          Joins the elements of the provided array into a single String containing the provided list of elements.
static String 	join(Object[] array, char separator)
          Joins the elements of the provided array into a single String containing the provided list of elements.
static String 	join(Object[] array, char separator, int startIndex, int endIndex)
          Joins the elements of the provided array into a single String containing the provided list of elements.
static String 	join(Object[] array, String separator)
          Joins the elements of the provided array into a single String containing the provided list of elements.
static String 	join(Object[] array, String separator, int startIndex, int endIndex)
          Joins the elements of the provided array into a single String containing the provided list of elements.
static int 	lastIndexOf(String str, char searchChar)
          Finds the last index within a String, handling null.
static int 	lastIndexOf(String str, char searchChar, int startPos)
          Finds the last index within a String from a start position, handling null.
static int 	lastIndexOf(String str, String searchStr)
          Finds the last index within a String, handling null.
static int 	lastIndexOf(String str, String searchStr, int startPos)
          Finds the first index within a String, handling null.
static int 	lastIndexOfAny(String str, String[] searchStrs)
          Find the latest index of any of a set of potential substrings.
static int 	lastIndexOfIgnoreCase(String str, String searchStr)
          Case in-sensitive find of the last index within a String.
static int 	lastIndexOfIgnoreCase(String str, String searchStr, int startPos)
          Case in-sensitive find of the last index within a String from the specified position.
static int 	lastOrdinalIndexOf(String str, String searchStr, int ordinal)
          Finds the n-th last index within a String, handling null.
static String 	left(String str, int len)
          Gets the leftmost len characters of a String.
static String 	leftPad(String str, int size)
          Left pad a String with spaces (' ').
static String 	leftPad(String str, int size, char padChar)
          Left pad a String with a specified character.
static String 	leftPad(String str, int size, String padStr)
          Left pad a String with a specified String.
static int 	length(String str)
          Gets a String's length or 0 if the String is null.
static String 	lowerCase(String str)
          Converts a String to lower case as per String.toLowerCase().
static String 	lowerCase(String str, Locale locale)
          Converts a String to lower case as per String.toLowerCase(Locale).
static String 	mid(String str, int pos, int len)
          Gets len characters from the middle of a String.
static int 	ordinalIndexOf(String str, String searchStr, int ordinal)
          Finds the n-th index within a String, handling null.
static String 	overlay(String str, String overlay, int start, int end)
          Overlays part of a String with another String.
static String 	overlayString(String text, String overlay, int start, int end)
          Deprecated. Use better named overlay(String, String, int, int) instead. Method will be removed in Commons Lang 3.0.
static String 	prechomp(String str, String sep)
          Deprecated. Use substringAfter(String,String) instead. Method will be removed in Commons Lang 3.0.
static String 	remove(String str, char remove)
          Removes all occurrences of a character from within the source string.
static String 	remove(String str, String remove)
          Removes all occurrences of a substring from within the source string.
static String 	removeEnd(String str, String remove)
          Removes a substring only if it is at the end of a source string, otherwise returns the source string.
static String 	removeEndIgnoreCase(String str, String remove)
          Case insensitive removal of a substring if it is at the end of a source string, otherwise returns the source string.
static String 	removeStart(String str, String remove)
          Removes a substring only if it is at the begining of a source string, otherwise returns the source string.
static String 	removeStartIgnoreCase(String str, String remove)
          Case insensitive removal of a substring if it is at the begining of a source string, otherwise returns the source string.
static String 	repeat(String str, int repeat)
          Repeat a String repeat times to form a new String.
static String 	repeat(String str, String separator, int repeat)
          Repeat a String repeat times to form a new String, with a String separator injected each time.
static String 	replace(String text, String searchString, String replacement)
          Replaces all occurrences of a String within another String.
static String 	replace(String text, String searchString, String replacement, int max)
          Replaces a String with another String inside a larger String, for the first max values of the search String.
static String 	replaceChars(String str, char searchChar, char replaceChar)
          Replaces all occurrences of a character in a String with another.
static String 	replaceChars(String str, String searchChars, String replaceChars)
          Replaces multiple characters in a String in one go.
static String 	replaceEach(String text, String[] searchList, String[] replacementList)
           Replaces all occurrences of Strings within another String.
static String 	replaceEachRepeatedly(String text, String[] searchList, String[] replacementList)
           Replaces all occurrences of Strings within another String.
static String 	replaceOnce(String text, String searchString, String replacement)
          Replaces a String with another String inside a larger String, once.
static String 	reverse(String str)
          Reverses a String as per StringBuffer.reverse().
static String 	reverseDelimited(String str, char separatorChar)
          Reverses a String that is delimited by a specific character.
static String 	reverseDelimitedString(String str, String separatorChars)
          Deprecated. Use reverseDelimited(String, char) instead. This method is broken as the join doesn't know which char to use. Method will be removed in Commons Lang 3.0.
static String 	right(String str, int len)
          Gets the rightmost len characters of a String.
static String 	rightPad(String str, int size)
          Right pad a String with spaces (' ').
static String 	rightPad(String str, int size, char padChar)
          Right pad a String with a specified character.
static String 	rightPad(String str, int size, String padStr)
          Right pad a String with a specified String.
static String[] 	split(String str)
          Splits the provided text into an array, using whitespace as the separator.
static String[] 	split(String str, char separatorChar)
          Splits the provided text into an array, separator specified.
static String[] 	split(String str, String separatorChars)
          Splits the provided text into an array, separators specified.
static String[] 	split(String str, String separatorChars, int max)
          Splits the provided text into an array with a maximum length, separators specified.
static String[] 	splitByCharacterType(String str)
          Splits a String by Character type as returned by java.lang.Character.getType(char).
static String[] 	splitByCharacterTypeCamelCase(String str)
          Splits a String by Character type as returned by java.lang.Character.getType(char).
static String[] 	splitByWholeSeparator(String str, String separator)
          Splits the provided text into an array, separator string specified.
static String[] 	splitByWholeSeparator(String str, String separator, int max)
          Splits the provided text into an array, separator string specified.
static String[] 	splitByWholeSeparatorPreserveAllTokens(String str, String separator)
          Splits the provided text into an array, separator string specified.
static String[] 	splitByWholeSeparatorPreserveAllTokens(String str, String separator, int max)
          Splits the provided text into an array, separator string specified.
static String[] 	splitPreserveAllTokens(String str)
          Splits the provided text into an array, using whitespace as the separator, preserving all tokens, including empty tokens created by adjacent separators.
static String[] 	splitPreserveAllTokens(String str, char separatorChar)
          Splits the provided text into an array, separator specified, preserving all tokens, including empty tokens created by adjacent separators.
static String[] 	splitPreserveAllTokens(String str, String separatorChars)
          Splits the provided text into an array, separators specified, preserving all tokens, including empty tokens created by adjacent separators.
static String[] 	splitPreserveAllTokens(String str, String separatorChars, int max)
          Splits the provided text into an array with a maximum length, separators specified, preserving all tokens, including empty tokens created by adjacent separators.
static boolean 	startsWith(String str, String prefix)
          Check if a String starts with a specified prefix.
static boolean 	startsWithAny(String string, String[] searchStrings)
          Check if a String starts with any of an array of specified strings.
static boolean 	startsWithIgnoreCase(String str, String prefix)
          Case insensitive check if a String starts with a specified prefix.
static String 	strip(String str)
          Strips whitespace from the start and end of a String.
static String 	strip(String str, String stripChars)
          Strips any of a set of characters from the start and end of a String.
static String[] 	stripAll(String[] strs)
          Strips whitespace from the start and end of every String in an array.
static String[] 	stripAll(String[] strs, String stripChars)
          Strips any of a set of characters from the start and end of every String in an array.
static String 	stripEnd(String str, String stripChars)
          Strips any of a set of characters from the end of a String.
static String 	stripStart(String str, String stripChars)
          Strips any of a set of characters from the start of a String.
static String 	stripToEmpty(String str)
          Strips whitespace from the start and end of a String returning an empty String if null input.
static String 	stripToNull(String str)
          Strips whitespace from the start and end of a String returning null if the String is empty ("") after the strip.
static String 	substring(String str, int start)
          Gets a substring from the specified String avoiding exceptions.
static String 	substring(String str, int start, int end)
          Gets a substring from the specified String avoiding exceptions.
static String 	substringAfter(String str, String separator)
          Gets the substring after the first occurrence of a separator.
static String 	substringAfterLast(String str, String separator)
          Gets the substring after the last occurrence of a separator.
static String 	substringBefore(String str, String separator)
          Gets the substring before the first occurrence of a separator.
static String 	substringBeforeLast(String str, String separator)
          Gets the substring before the last occurrence of a separator.
static String 	substringBetween(String str, String tag)
          Gets the String that is nested in between two instances of the same String.
static String 	substringBetween(String str, String open, String close)
          Gets the String that is nested in between two Strings.
static String[] 	substringsBetween(String str, String open, String close)
          Searches a String for substrings delimited by a start and end tag, returning all matching substrings in an array.
static String 	swapCase(String str)
          Swaps the case of a String changing upper and title case to lower case, and lower case to upper case.
static String 	trim(String str)
          Removes control characters (char <= 32) from both ends of this String, handling null by returning null.
static String 	trimToEmpty(String str)
          Removes control characters (char <= 32) from both ends of this String returning an empty String ("") if the String is empty ("") after the trim or if it is null.
static String 	trimToNull(String str)
          Removes control characters (char <= 32) from both ends of this String returning null if the String is empty ("") after the trim or if it is null.
static String 	uncapitalise(String str)
          Deprecated. Use the standardly named uncapitalize(String). Method will be removed in Commons Lang 3.0.
static String 	uncapitalize(String str)
          Uncapitalizes a String changing the first letter to title case as per Character.toLowerCase(char).
static String 	upperCase(String str)
          Converts a String to upper case as per String.toUpperCase().
static String 	upperCase(String str, Locale locale)
          Converts a String to upper case as per String.toUpperCase(Locale).