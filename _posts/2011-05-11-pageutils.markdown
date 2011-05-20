---
layout: default
title: PageUtils
categories: api
---

First, let’s start with just about the simplest example possible. The below controller runs a SOQL query on Account and divides the results into pages of 15 records each via SObjectPaginator. The handlePageChange() method is called by the paginator as part of the setRecords() invocation as well as when the user clicks on the Next and Previous links.

Demo: http://rvdemo-developer-edition.na6.force.com/AccountPaginationDemo
<pre class="brush: java">
-- Controller --
global class AccountPaginationDemo implements SObjectPaginatorListener {
	global List<Account> accounts {get;private set;}
	global SObjectPaginator paginator {get;private set;}
	global AccountPaginationDemo(){
		accounts = new List<Account>();
		//15 is pageSize, this refers to this class which acts as listener to paginator
		paginator = new SObjectPaginator(5,this);
		paginator.setRecords([select id,name from Account limit 100]);
	}
	global void handlePageChange(List<SObject> newPage){
		accounts.clear();
		if(newPage != null){
			for(SObject acct : newPage){
				accounts.add((Account)acct);
			}
		}
	}
}
</pre>

(apologies in advance - modifying VF code to work here is ... interesting)
