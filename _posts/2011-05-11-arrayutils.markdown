
---
layout: default
title: ArrayUtils
categories: api
---

## Static Method: objectToString()
* _Business Issue:_ You have a List collection numbers, booleans, objects or any valid data type that needs to be converted to a List of String type
* _Parameters:_  List&lt;Object&gt;
* _Returns:_ List&lt;String&gt;
* _Notes:_ Passing a Null List&lt;&gt; return a Null List&lt;&gt; back

## Static Method: reverse()
* _Business Issue:_ Reverses the order of any collection regardless of data type. For example, a collection of {1, 2, 3, 4} would be returned as {4, 3, 2, 1}
* _Parameters:_ Object[]
* _Returns:_ Object[]
* _Notes:_ Passing a Null returns a Null back

## Static Method: lowerCase()
* _Business Issue:_ A List&lt;&gt; of String type has elements with mixed case and needs to be converted entirely to lowercase
* _Parameters:_ List&lt;String&gt;
* _Returns:_ List&lt;String&gt;
* _Notes:_ Passing a Null List&lt;&gt; return a Null List&lt;&gt; back

## Static Method: upperCase()
* _Business Issue:_ A List&lt;&gt; of String type has elements with mixed case and needs to be converted entirely to uppercase
* _Parameters:_ List&lt;String&gt;
* _Returns:_ List&lt;String&gt;
* _Notes:_ Passing a Null List&lt;&gt; return a Null List&lt;&gt; back

## Static Method: trim()
* _Business Issue:_ A List&lt;&gt; of String type has elements with leading or trailing white space characters and needs to have all the elements trimmed to remove leading and trailing spaces, tabs, newline characters, and so on.
* _Parameters:_ List&lt;String&gt;
* _Returns:_ List&lt;String&gt;
* _Notes:_ Passing a Null List&lt;&gt; return a Null List&lt;&gt; back

## Static Method: mergex()
* _Business Issue:_ Two collection of any data type need to be combined into a single collection.
* _Parameter 1:_ Object[] OR SObject[]
* _Parameter 2:_ Object[] OR SObject[]
* _Returns:_ Object[]
* _Notes:_ Passing a Null List&lt;&gt; return a Null List&lt;&gt; back

