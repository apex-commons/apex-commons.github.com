---
layout: default
title: GlobalVariable
categories: api
---

Overview
________

_Problem_:  You need global variables which persist across Apex instantiations.

_Solution_:  Create a [List Custom Setting](http://www.salesforce.com/us/developer/docs/apexcode/index.htm) object which accepts Name Value pairs.

Implementation
--------------

The implementation requires two resources.  The first is a List Custom Settings object called GlobalVariable__c