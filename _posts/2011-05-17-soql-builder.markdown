---
layout: default
title: SOQL Builder
categories: query
---

Description
----------------

A developer friendly tool for creating SOQL queries as strings.  Use whenever you use Database.query() as opposed to &#91;select ...&#93;.

Code that builds a SOQL query via string concatenation is error prone.  Many times you'll forget a comma, misplace an AND, mis-format a date string, or worst of all, forgot to escape user input.  These types of mistakes are silly because they happen to everyone and they seem to happen over and over again.  SOQL Builder's value lay in mitigating these mistakes.  

Main class is [SoqlBuilder](https://github.com/apex-commons/query/blob/master/src/classes/SoqlBuilder.cls).

#### Apex Classes

[`AndCondition`](https://github.com/apex-commons/query/blob/master/src/classes/AndCondition.cls)
[`Condition`](https://github.com/apex-commons/query/blob/master/src/classes/Condition.cls)
[`ConditionGroup`](https://github.com/apex-commons/query/blob/master/src/classes/ConditionGroup.cls)
[`DateFormula`](https://github.com/apex-commons/query/blob/master/src/classes/DateFormula.cls)
[`Field`](https://github.com/apex-commons/query/blob/master/src/classes/Field.cls)
[`FieldCondition`](https://github.com/apex-commons/query/blob/master/src/classes/FieldCondition.cls)
[`NestableCondition`](https://github.com/apex-commons/query/blob/master/src/classes/NestableCondition.cls)
[`NotCondition`](https://github.com/apex-commons/query/blob/master/src/classes/NotCondition.cls)
[`Operator`](https://github.com/apex-commons/query/blob/master/src/classes/Operator.cls)
[`OrCondition`](https://github.com/apex-commons/query/blob/master/src/classes/OrCondition.cls)
[`OrderBy`](https://github.com/apex-commons/query/blob/master/src/classes/OrderBy.cls)
[`SetCondition`](https://github.com/apex-commons/query/blob/master/src/classes/SetCondition.cls)
[`Soqlable`](https://github.com/apex-commons/query/blob/master/src/classes/Soqlable.cls)
[`SoqlBuilder`](https://github.com/apex-commons/query/blob/master/src/classes/SoqlBuilder.cls)
[`SoqlOptions`](https://github.com/apex-commons/query/blob/master/src/classes/SoqlOptions.cls)
[`SoqlUtils`](https://github.com/apex-commons/query/blob/master/src/classes/SoqlUtils.cls)
[`UnitOfTime`](https://github.com/apex-commons/query/blob/master/src/classes/UnitOfTime.cls)

Basic Example
================

Given this SOQL query:

<pre class="brush: sql">
SELECT name FROM account WHERE employees &lt; 10
</pre>

Here is the corresponding code to create the query string via a SoqlBuilder:

<pre class="brush: java">
new SoqlBuilder()
 .selectx('name')
 .fromx('account')
 .wherex(new FieldCondition('employees').lessThan(10))
 .toSoql();
</pre>

*NOTE: You probably noticed the x’s at the end of some of the methods.  Unfortunately, "select", "from", and "where" are all reserved words in apex and cannot be used as method identifiers.  In order to get around this, x has been appended to the end of the method name (this convention is followed throughout other classes as well).  Another thing you might have noticed is the methods are "chained".  That helps make this code less verbose and feel more like a SOQL statement.*

Benefits
================

Here's a list of benefits to building SOQL queries using SoqlBuilder:

1. Reduces the risk of a silly SOQL grammar error
2. More readable / less verbose code
3. Automatic literal conversion
4. String escaping by default
5. Easy wild-carding

The first benefit is the reduced risk of misplacing an element.   All String concatenation with SoqlBuilder takes place inside the super intelligent toSoql() method.

While it might not be true for simple cases (like the example above), using a SoqlBuilder will make your code less verbose and as a result, more readable.  The construction of most real-world soql queries is an ugly, un-readable mess of String concatenation.  Perhaps you've written or seen code like the following:

<pre class="brush: java">
final Datetime aDatetime = DateTime.newInstance(2010,1,1,1,1,1);
final String aName = 'O\'Neal';
final List&lt;String&gt; aList = new List&lt;String&gt;{'Apparel','Auto'};
String soql = 'SELECT id,name,ispartner,industry';
soql += ' FROM account';
soql += ' WHERE CreatedDate &lt; ';
soql += aDatetime.format('yyyy-MM-dd') + 'T' + aDatetime.format('hh:mm:ss') + 'Z';
soql += ' AND Name like \'%';
soql += String.escapeSingleQuotes(aName);
soql += '%\' AND industry INCLUDES (';
Boolean isFirst = true;
for(String anItem : aList){
 if(isFirst){
 isFirst = false;
 } else {
 soql += ',';
 }
 soql += '\'';
 soql += anItem;
 soql += '\'';
}
soql += ')';
System.debug(soql);
</pre>

There's no other way to put it:  dude, that's ugly code!

Here's how the same query can be constructed using SoqlBuilder:

<pre class="brush: java">
final Datetime aDatetime = DateTime.newInstance(2010,1,1,1,1,1);
final String aName = 'acme';
final List&lt;String&gt; aList = new List&lt;String&gt;{'Apparel','Auto'};
String soql = new SoqlBuilder()
  .selectx(new Set&lt;Object&gt;{'id','name','ispartner','industry'})
  .fromx('account')
  .wherex(new AndCondition()
    .add(new FieldCondition('CreatedDate').lessThan(aDatetime))
    .add(new FieldCondition('Name').likex(aName))
    .add(new SetCondition('industry').includes(aList))
  )
  .toSoql(new SoqlOptions().wildcardStringsInLikeOperators());
System.debug(soql);
</pre>

The third benefit is automatic conversion of literals.  From the example above (the SoqlBuilder portion), notice how the aDatetime variable is simply passed to the lessThan() method?  The FieldCondition handles converting the date time to the appropriate format.  *Just in case you're curious where that code is, see the toLiteral() method in the SoqlUtils class.*

Another benefit which can be seen in the previous example is automatic escaping of single quotes.  Notice that the aName variable is simply passed to the likex() method.  When toSoql() is executed, all single quotes in all Strings will be automatically escaped!  Imagine how much the AppExchange Security Review Team will like that!

Also, the previous example also shows how easily all Strings in LIKE operators can be wild-carded.  By default, the "wildcardStringsInLikeOperators" property is set to FALSE.  However, if you call the wildcardStringsInLikeOperators() method on a new SoqlOptions object, then it will do just that:  all strings will be wild-carded on both sides.

Reference
=========

For all examples below, the **new SoqlBuilder()** and **.toSoql()** portions are omitted.  If you'd like to run one of the examples - using anonymous execute for example - then use the following snippet:

<pre class="brush: java">
System.debug('\n\n'
+ new SoqlBuilder()
//insert example from below here
.toSoql()
+ '\n\n');
</pre>

SELECT
-------

###Selecting Fields

<pre class="brush: java">
.selectx('ID')
.selectx('Name')
.fromx('Account')
//-&gt; SELECT Name,ID FROM Account
</pre>

<pre class="brush: java">
.selectx(new Set&lt;String&gt;{'ID','Name'})
 .fromx('Account')
 //-&gt; SELECT Name,ID FROM Account
</pre>

<pre class="brush: java">
.selectx(new List&lt;String&gt;{'ID','Name'})
.fromx('Account')
//-&gt; SELECT Name,ID FROM Account
</pre>

<pre class="brush: java">
.fromx('Account')
//-&gt; SELECT ID FROM Account
</pre>

###count()

<pre class="brush: java">
.selectCount()
.fromx('Account')
//-&gt; SELECT count() FROM Account
</pre>

###toLabel

<pre class="brush: java">
.selectx(new Field('Rating').toLabelx())
.fromx('Account')
//-&gt; SELECT toLabel(Rating) FROM Account
</pre>

###Relationship Queries

<pre class="brush: java">
.selectx('id')
.selectx(
  new SoqlBuilder()
  .selectx('id')
  .fromx('OpportunityLineItems'))
.fromx('Opportunity')
//-&gt; SELECT id,(SELECT id FROM OpportunityLineItems) FROM Opportunity
</pre>


FROM
----

<pre class="brush: java">
.fromx('account')
//-&gt; SELECT id FROM account
</pre>

<pre class="brush: java">
.fromx('Contact c, c.Account a')
//-&gt; SELECT id FROM Contact c, c.Account a
</pre>


WHERE
-----

###Field Condition

<pre class="brush: java">
/*
You can create a field condition using any of the following formats:
new FieldCondition().field(fieldName).operator(value)
new FieldCondition(fieldName).operator(value)
new FieldCondition(fieldName,Operator,value)
*/
//the following four examples are equivalent:
.fromx('account').wherex(new FieldCondition().field('name').equals('acme'))
.fromx('account').wherex(new FieldCondition('name').equals('acme'))
.fromx('account').wherex(new FieldCondition('name',Operator.EQUALS,'acme'))
.fromx('account').wherex(new FieldCondition('name','acme'))  //special case only valid for equals
//-&gt; SELECT id FROM account WHERE name = 'acme'
</pre>

###Field Operators (using Operator as constructor argument)

<pre class="brush: java">
/*
+--------------------------+----------+
| enum value               | operator |
+--------------------------+----------+
| EQUALS                   | =        |
| NOT_EQUALS               | !=       |
| LESS_THAN                | &lt;        |
| LESS_THAN_OR_EQUAL_TO    | &lt;=       |
| GREATER_THAN             | &gt;        |
| GREATER_THAN_OR_EQUAL_TO | &gt;=       |
| LIKEX                    | like     |
+--------------------------+----------+
*/
.fromx('account').wherex(new FieldCondition('employees',Operator.EQUALS,1))
//-&gt; SELECT id FROM account WHERE employees = 1
.fromx('account').wherex(new FieldCondition('employees',Operator.NOT_EQUALS,1))
//-&gt; SELECT id FROM account WHERE employees != 1
.fromx('account').wherex(new FieldCondition('employees',Operator.LESS_THAN,1))
//-&gt; SELECT id FROM account WHERE employees &lt; 1
.fromx('account').wherex(new FieldCondition('employees',Operator.LESS_THAN_OR_EQUAL_TO,1))
//-&gt; SELECT id FROM account WHERE employees &lt;= 1
.fromx('account').wherex(new FieldCondition('employees',Operator.GREATER_THAN,1))
//-&gt; SELECT id FROM account WHERE employees &gt; 1
.fromx('account').wherex(new FieldCondition('employees',Operator.GREATER_THAN_OR_EQUAL_TO,1))
//-&gt; SELECT id FROM account WHERE employees &gt;= 1
.fromx('account').wherex(new FieldCondition('name',Operator.LIKEX,'acme'))
//-&gt; SELECT id FROM account WHERE name like 'acme'
</pre>

###Field Operators (operator as method identifier)

<pre class="brush: java">
/*
+----------------------+----------+
| method identifier    | operator |
+----------------------+----------+
| equals               | =        |
| notEquals            | !=       |
| lessThan             | &lt;        |
| lessThanOrEqualTo    | &lt;=       |
| greaterThan          | &gt;        |
| greaterThanOrEqualTo | &gt;=       |
| likex                | like     |
+----------------------+----------+
*/
.fromx('account').wherex(new FieldCondition('employees').equals(1))
//-&gt; SELECT id FROM account WHERE employees = 1
.fromx('account').wherex(new FieldCondition('employees').notEquals(1))
//-&gt; SELECT id FROM account WHERE employees != 1
.fromx('account').wherex(new FieldCondition('employees').lessThan(1))
//-&gt; SELECT id FROM account WHERE employees &lt; 1
.fromx('account').wherex(new FieldCondition('employees').lessThanOrEqualTo(1))
//-&gt; SELECT id FROM account WHERE employees &lt;= 1
.fromx('account').wherex(new FieldCondition('employees'.greaterThan(1))
//-&gt; SELECT id FROM account WHERE employees &gt; 1
.fromx('account').wherex(new FieldCondition('employees').greaterThanOrEqualTo(1))
//-&gt; SELECT id FROM account WHERE employees &gt;= 1
.fromx('account').wherex(new FieldCondition('name').likex('acme'))
//-&gt; SELECT id FROM account WHERE name like 'acme'
</pre>

###Set Conditions

<pre class="brush: java">
/*
You can create a set condition using any of the following formats:
new SetCondition().field(fieldName).operator(values)
new SetCondition(fieldName).operator(values)
new SetCondition(fieldName,Operator,values)
*/
//the following three examples are equivalent:
.fromx('account').wherex(new SetCondition().field('x').includes(new List&lt;Object&gt;{1,2}))
.fromx('account').wherex(new SetCondition('x').includes(new List&lt;Object&gt;{1,2}))
.fromx('account').wherex(new SetCondition('x',Operator.INCLUDES,new List&lt;Object&gt;{1,2}))
//-&gt; SELECT id FROM account WHERE x INCLUDES (1,2)
</pre>

###Set Operators (using Operator as constructor argument)

<pre class="brush: java">
/*
+------------+----------+
| enum value | operator |
+------------+----------+
| INCLUDES   | includes |
| EXCLUDES   | excludes |
| INX        | in       |
| NOT_IN     | not in   |
+------------+----------+
*/
.fromx('account').wherex(new SetCondition('x',Operator.INCLUDES,new List&lt;Object&gt;{1,2}))
//-&gt; SELECT id FROM account WHERE x INCLUDES (1,2)
.fromx('account').wherex(new SetCondition('x',Operator.EXCLUDES,new List&lt;Object&gt;{1,2}))
//-&gt; SELECT id FROM account WHERE x EXCLUDES (1,2)
.fromx('account').wherex(new SetCondition('x',Operator.INX,new List&lt;Object&gt;{1,2}))
//-&gt; SELECT id FROM account WHERE x IN (1,2)
.fromx('account').wherex(new SetCondition('x',Operator.NOT_IN,new List&lt;Object&gt;{1,2}))
//-&gt; SELECT id FROM account WHERE x NOT IN (1,2)
</pre>

###Set Operators (operator as method identifier)

<pre class="brush: java">
/*
+-------------------+----------+
| method identifier | operator |
+-------------------+----------+
| includes          | includes |
| excludes          | excludes |
| inx               | in       |
| notin             | not in   |
+-------------------+----------+
*/
.fromx('account').wherex(new SetCondition('x').includes(new List&lt;Object&gt;{1,2}))
//-&gt; SELECT id FROM account WHERE x INCLUDES (1,2)
.fromx('account').wherex(new SetCondition('x').excludes(new List&lt;Object&gt;{1,2}))
//-&gt; SELECT id FROM account WHERE x EXCLUDES (1,2)
.fromx('account').wherex(new SetCondition('x').inx(new List&lt;Object&gt;{1,2}))
//-&gt; SELECT id FROM account WHERE x IN (1,2)
.fromx('account').wherex(new SetCondition('x').notIn(new List&lt;Object&gt;{1,2}))
//-&gt; SELECT id FROM account WHERE x NOT IN (1,2)
</pre>

###Primitives to String literals

<pre class="brush: java">
//null
.fromx('account').wherex(new FieldCondition('x').equals(null))
//-&gt;SELECT id FROM account WHERE x = null
//Boolean
.fromx('account').wherex(new FieldCondition('x').equals(true))
//-&gt;SELECT id FROM account WHERE x = true
//String
.fromx('account').wherex(new FieldCondition('x').equals('acme'))
//-&gt;SELECT id FROM account WHERE x = 'acme'
//Integer
.fromx('account').wherex(new FieldCondition('x').equals(1))
//-&gt;SELECT id FROM account WHERE x = 1
//Long
.fromx('account').wherex(new FieldCondition('x').equals(1L))
//-&gt;SELECT id FROM account WHERE x = 1
//Double
.fromx('account').wherex(new FieldCondition('x').equals(1.1))
//-&gt;SELECT id FROM account WHERE x = 1.1
//Date
.fromx('account').wherex(new FieldCondition('x').equals(Date.newinstance(2010,1,1)))
//-&gt;SELECT id FROM account WHERE x = 2010-01-01
//Datetime
.fromx('account').wherex(new FieldCondition('x').equals(Datetime.newinstance(2010,1,1,1,1,1)))
//-&gt;SELECT id FROM account WHERE x = 2010-01-01T01:01:01Z
</pre>

###Date Formulas

<pre class="brush: java">
//=========================
// Hard-coded day methods
//=========================
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().todayx()))
//-&gt;SELECT id FROM account WHERE CreatedDate = TODAY
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().yesterdayx()))
//-&gt;SELECT id FROM account WHERE CreatedDate = YESTERDAY
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().tomorrowx()))
//-&gt;SELECT id FROM account WHERE CreatedDate = TOMORROW
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().last90Days()))
//-&gt;SELECT id FROM account WHERE CreatedDate = LAST_90_DAYS
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().next90Days()))
//-&gt;SELECT id FROM account WHERE CreatedDate = NEXT_90_DAYS
//=========================
// By Units
//=========================
/*
+-----------------------+-----------------+
| UnitOfTime enum value | SOQL equivalent |
+-----------------------+-----------------+
| Day                   | DAY             |
| Week                  | WEEK            |
| Month                 | MONTH           |
| Quarter               | QUARTER         |
| Year                  | FISCAL_QUARTER  |
| FiscalQuarter         | YEAR            |
| FiscalYear            | FISCAL_YEAR     |
+-----------------------+-----------------+
*/
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().last(UnitOfTime.Day)))
//-&gt;SELECT id FROM account WHERE CreatedDate = LAST_N_DAYS:1
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().last(UnitOfTime.Week)))
//-&gt;SELECT id FROM account WHERE CreatedDate = LAST_WEEK
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().last(UnitOfTime.Month)))
//-&gt;SELECT id FROM account WHERE CreatedDate = LAST_MONTH
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().last(UnitOfTime.Quarter)))
//-&gt;SELECT id FROM account WHERE CreatedDate = LAST_QUARTER
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().last(UnitOfTime.Year)))
//-&gt;SELECT id FROM account WHERE CreatedDate = LAST_YEAR
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().last(UnitOfTime.FiscalQuarter)))
//-&gt;SELECT id FROM account WHERE CreatedDate = LAST_FISCAL_QUARTER
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().last(UnitOfTime.FiscalYear)))
//-&gt;SELECT id FROM account WHERE CreatedDate = LAST_FISCAL_YEAR
//=========================
// By Interval
//=========================
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().next(UnitOfTime.Day)))
//-&gt;SELECT id FROM account WHERE CreatedDate = NEXT_N_DAYS:1
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().last(UnitOfTime.Day)))
//-&gt;SELECT id FROM account WHERE CreatedDate = LAST_N_DAYS:1
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().next(7,UnitOfTime.Day)))
//-&gt;SELECT id FROM account WHERE CreatedDate = NEXT_N_DAYS:7
.fromx('account').wherex(new FieldCondition('CreatedDate',new DateFormula().last(7,UnitOfTime.Day)))
//-&gt;SELECT id FROM account WHERE CreatedDate = LAST_N_DAYS:7
</pre>

###AND, OR &#038; NOT

<pre class="brush: java">
//simple AND condition
.fromx('account')
.wherex(
  new AndCondition()
   .add(new FieldCondition('name','acme'))
   .add(new FieldCondition('ispartner',true))
  )
//-&gt;SELECT id FROM account WHERE (name = 'acme' AND ispartner = true)
</pre>

<pre class="brush: java">
//simple OR condition
.fromx('account')
.wherex(
  new OrCondition()
   .add(new FieldCondition('name','acme'))
   .add(new FieldCondition('ispartner',true))
  )
//-&gt;SELECT id FROM account WHERE (name = 'acme' OR ispartner = true)
</pre>

<pre class="brush: java">
//simple NOT condition
.fromx('account')
.wherex(
  new NotCondition(new AndCondition()
   .add(new FieldCondition('name','acme'))
   .add(new FieldCondition('ispartner',true)))
  )
//-&gt;SELECT id FROM account WHERE NOT((name = 'acme' AND ispartner = true))
</pre>

<pre class="brush: java">
//nested ANDs and ORs
.fromx('account')
.wherex(
    new NotCondition(
        new AndCondition()
        .add(
            new OrCondition()
            .add(new FieldCondition('name','acme'))
            .add(
                new AndCondition()
                .add(new FieldCondition('ispartner',true))
                .add(new FieldCondition('NumberOfEmployees').lessThan(10))
            )
        )
        .add(
            new OrCondition()
            .add(new FieldCondition('createddate').lessThan(new DateFormula().yesterdayx()))
            .add(new FieldCondition('Rating','Hot'))
        )
    )
)
//-&gt;SELECT id FROM account WHERE NOT(((name = 'acme' OR (ispartner = true AND NumberOfEmployees &lt; 10)) AND (createddate &lt; YESTERDAY OR Rating = 'Hot')))
</pre>

ORDER BY
--------

###Single Order By

<pre class="brush: java">
/*
You can create an OrderBy using the following formats:
new OrderBy(fieldName).[ascending|descending|nullsFirst|nullsLast]*()
*/
.fromx('account').orderByx(new OrderBy('name'))
//-&gt;SELECT id FROM account ORDER BY name
.fromx('account').orderByx(new OrderBy('name').ascending().nullsFirst())
//-&gt;SELECT id FROM account ORDER BY name ASC NULLS FIRST
.fromx('account').orderByx(new OrderBy('name').ascending().nullsLast())
//-&gt;SELECT id FROM account ORDER BY name ASC NULLS FIRST
.fromx('account').orderByx(new OrderBy('name').descending().nullsFirst())
//-&gt;SELECT id FROM account ORDER BY name DESC NULLS FIRST
.fromx('account').orderByx(new OrderBy('name').descending().nullsLast())
//-&gt;SELECT id FROM account ORDER BY name DESC NULLS FIRST
</pre>

###Multiple Order By

<pre class="brush: java">
.fromx('account').orderByx(new List&lt;OrderBy&gt;{
  new OrderBy('name').ascending().nullsFirst()
  ,new OrderBy('rating').descending().nullsLast()
})
//-&gt;SELECT id FROM account ORDER BY name ASC NULLS FIRST, rating DESC NULLS LAST
</pre>

LIMIT
-----

<pre class="brush: java">
.fromx('account').limitx(50)
//-&gt;SELECT id FROM account LIMIT 50
</pre>

###SOQL Options for toSoql() method

###Wildcards
Enabled by default: No

<pre class="brush: java">
//default
.fromx('account')
.wherex(
  new OrCondition()
  .add(new FieldCondition('name').likex('acme'))
  .add(new FieldCondition('name').likex('test'))
).toSoql()
//-&gt;SELECT id FROM account WHERE (name like 'acme' OR name like 'test')
</pre>

<pre class="brush: java">
.fromx('account')
.wherex(
  new OrCondition()
  .add(new FieldCondition('name').likex('acme'))
  .add(new FieldCondition('name').likex('test'))
).toSoql(new SoqlOptions().wildcardStringsInLikeOperators())
//-&gt;SELECT id FROM account WHERE (name like '%acme%' OR name like '%test%')
</pre>

<pre class="brush: java">
.fromx('account')
.wherex(
  new OrCondition()
  .add(new FieldCondition('name').likex('acme'))
  .add(new FieldCondition('name').likex('test'))
).toSoql(new SoqlOptions().doNotWildcardStringsInLikeOperators())
//-&gt;SELECT id FROM account WHERE (name like 'acme' OR name like 'test')
</pre>

###String Escaping
Enabled by default: Yes

<pre class="brush: java">
//GOOD (default)
.fromx('account')
.wherex(new FieldCondition('name').likex('O\'Neal'))
.toSoql()
//-&gt;SELECT id FROM account WHERE name like 'O\'Neal'
</pre>

<pre class="brush: java">
//BAD!  The generated query below is invalid and will throw an error.
//Why even allow it as an option?  Because you never know when it might be needed - invalid or not.
.fromx('account')
.wherex(new FieldCondition('name').likex('O\'Neal'))
.toSoql(new SoqlOptions().doNotEscapeSingleQuotes())
//-&gt;SELECT id FROM account WHERE name like 'O'Neal'
</pre>

<pre class="brush: java">
.fromx('account')
.wherex(new FieldCondition('name').likex('O\'Neal'))
.toSoql(new SoqlOptions().escapeSingleQuotes())
//-&gt;SELECT id FROM account WHERE name like 'O\'Neal'
</pre>
