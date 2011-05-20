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

<pre class="brush: java">
&lt;!-- Page: page --&gt;
&lt;!-- Page: page --&gt;
&lt;apex:page showHeader="false" sidebar="false" standardStylesheets="true" controller="AccountPaginationDemo"&gt;
	&lt;apex:composition template="DemoTemplate"&gt;
		&lt;apex:define name="body"&gt;
			&lt;apex:form &gt;
			    &lt;apex:pageBlock title="Accounts" id="accounts"&gt;
			        &lt;apex:pageBlockTable value="{!accounts}" var="account"&gt;
						&lt;apex:column &gt;
							&lt;apex:facet name="header"&gt;Name&lt;/apex:facet&gt;
							&lt;apex:outputPanel &gt;{!account.name}&lt;/apex:outputPanel&gt;
						&lt;/apex:column&gt;
						&lt;apex:facet name="footer"&gt;
							&lt;apex:outputPanel &gt;
								&lt;apex:outputText value="Page {!paginator.pageNumberDisplayFriendly} of {!paginator.pageCount} in {!paginator.recordCount} Results"/&gt;
								&lt;apex:outputPanel &gt;    &lt;/apex:outputPanel&gt;
								&lt;apex:commandLink value="Previous" action="{!paginator.previous}"
									rendered="{!IF(paginator.hasPrevious,'true','false')}"/&gt;
								&lt;apex:outputText value="Previous" rendered="{!IF(NOT(paginator.hasPrevious),'true','false')}"/&gt;
								&lt;apex:outputPanel &gt; | &lt;/apex:outputPanel&gt;
								&lt;apex:commandLink value="Next" action="{!paginator.next}"
									rendered="{!IF(paginator.hasNext,'true','false')}"/&gt;
								&lt;apex:outputText value="Next" rendered="{!IF(NOT(paginator.hasNext),'true','false')}"/&gt;
							&lt;/apex:outputPanel&gt;
						&lt;/apex:facet&gt;
			        &lt;/apex:pageBlockTable&gt;
			    &lt;/apex:pageBlock&gt;
			&lt;/apex:form&gt;
		&lt;/apex:define&gt;
	&lt;/apex:composition&gt;
&lt;/apex:page&gt;
</pre>