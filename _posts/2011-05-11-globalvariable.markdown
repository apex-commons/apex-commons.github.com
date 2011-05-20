---
layout: default
title: GlobalVariable
categories: api
---

Overview
--------

_Problem_:  You need global variables which persist across Apex instantiations.

_Solution_:  Create a [List Custom Setting](http://www.salesforce.com/us/developer/docs/apexcode/index.htm) object which accepts Name Value pairs.

Implementation
--------------

The implementation requires two resources.  The first is a List Custom Settings object called [GlobalVariable__c](https://github.com/apex-commons/base/blob/master/src/objects/GlobalVariable__c.object) and a utility class [GlobalVariable](https://github.com/apex-commons/base/blob/master/src/classes/GlobalVariable.cls).  Test coverage is in the [GlobalVariableTest](https://github.com/apex-commons/base/blob/master/src/classes/GlobalVariableTest.cls) class.

Example Usage
-------------

<code>
GlobalVariable.put('MyKey','My Value');

System.debug('Here is the value: ' + GlobalVariable.get('MyKey'));
</code>
