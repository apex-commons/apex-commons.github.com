---
layout: default
title: PageUtils
categories: api
---
Description
----------------

Class containing utilities that you don't have to write from scratch.  (But you knew that.)

Main class is [PageUtils](https://github.com/apex-commons/visualforce/PageUtils.cls).

Starting from the top, then, with redirect()
<pre class="brush: java">
global static PageReference redirect(String url){
        PageReference pageRef = new PageReference(url);
        pageRef.setRedirect(true);
        return pageRef;
}
</pre>

When you need to send someone to a new page dynamically, you need to get a PageReference and set their page to it.
Hence, redirect();

Posting messages - when someone clicks Submit() or does something that causes your page to do some work, you often need to give them information w/o necessarily redirecting them to a new page; addMessages() does that for you, and PageUtils has methods to set specific messages w/o (you guessed it) writing it from scratch:

<pre class="brush: java">

    global static void addConfirm(String message){
        ApexPages.addMessage(new ApexPages.message(ApexPages.severity.CONFIRM,message));
    }
    
    global static void addInfo(String message){
        ApexPages.addMessage(new ApexPages.message(ApexPages.severity.INFO,message));
    }
    
    global static void addWarning(String message){
        ApexPages.addMessage(new ApexPages.message(ApexPages.severity.WARNING,message));
    }
    
    global static void addError(String message){
        ApexPages.addMessage(new ApexPages.message(ApexPages.severity.ERROR,message));
    }
    
    global static void addFatal(String message){
        ApexPages.addMessage(new ApexPages.message(ApexPages.severity.FATAL,message));
    }
</pre>

You might also want to check to see which messages your page has accumulated (perhaps in a Unit Test); PageUtils() has methods for checking for specific types of messages
<pre class="brush: java">    
    global static ApexPages.Message[] getErrorMessages(){
        return PageUtils.getMessagesAtLevel(ApexPages.Severity.ERROR, true);
    }

    global static Boolean hasErrorMessages(){
        final ApexPages.Message[] errorMessages = getErrorMessages();
        return errorMessages != null && errorMessages.size() > 0;
    }
    
    global static ApexPages.Message[] getErrorMessagesOnly(){
        return PageUtils.getMessagesAtLevel(ApexPages.Severity.ERROR, false);
    }
    
    global static Boolean hasErrorMessagesOnly(){
    	final ApexPages.Message[] errorMessagesOnly = getErrorMessagesOnly();
        return errorMessagesOnly != null && errorMessagesOnly.size() > 0;
    }   
</pre>