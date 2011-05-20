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

You might also want to check to see whether your page has accumulated any errors(perhaps in a Unit Test); PageUtils() has methods for that
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

You might very much want to know what those messages are, perhaps to write to the system log for reference
<pre class="brush: java">
    global static String messagesToString(){
        return messagesToString(ApexPages.getMessages());
    }
    
    global static String messagesToString(){
        return messagesToString(ApexPages.getMessages());
    }
    
    global static String messagesToString(ApexPages.Message[] messages){
        if(messages == null){
            return 'null';
        }
        if( messages.size() &lt;= 0){
            return '{empty}';
        }
        String returnString = '';
        for(Integer i = 0; i &lt; messages.size(); i++){
            if(i != 0){ returnString += '; '; }
            returnString += 'ApexPages.Message[';
            returnString += i;
            returnString += ']: (summary=';
            returnString += messages[i].getSummary(); 
            returnString += ',componentLabel=';
            returnString += messages[i].getComponentLabel(); 
            returnString += ',severity=';
            returnString += messages[i].getSeverity(); 
            returnString += ',detail=';
            returnString += messages[i].getDetail(); 
            returnString += ')';
        }
        return '{' + returnString + '}';
    }
</pre>

If you only want to determine the level of a particular message, isMessageAtLevelOrHigher(message, level) does that as well
<pre class="brush: java">
    
    global static Boolean isMessageAtLevelOrHigher(ApexPages.Message message, ApexPages.Severity level){
        if(level == null || message == null){
            return false;
        }
        ApexPages.Severity msgLevel = message.getSeverity();
        while(true){
            if(level == msgLevel){
                return true;    
            }
            if(msgLevel == ApexPages.Severity.CONFIRM){msgLevel = ApexPages.Severity.WARNING;}
            else if(msgLevel == ApexPages.Severity.INFO){msgLevel = ApexPages.Severity.WARNING;}
            else if(msgLevel == ApexPages.Severity.WARNING){msgLevel = ApexPages.Severity.ERROR;}
            else if(msgLevel == ApexPages.Severity.ERROR){msgLevel = ApexPages.Severity.FATAL;}
            else { break; }
        }
        return false;
    }
</pre>
(This ^ looks like it would be *really* useful for Unit Tests...)