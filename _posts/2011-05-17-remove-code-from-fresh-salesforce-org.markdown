---
layout: default
title: Steps to clear fresh developer edition org
categories: 
---

<span class="intro">Why would you want to do this?  A better question is why does salesforce clutter a new developer org with custom components you didn't create?</span>

1.  Go to Setup | Administration Setup | Manage Users | Profiles | System Administrator

1.  Click Edit

1.  Under "Custom App Settings", change the "Default" to something other than Force.com

1.  Click Save

1.  Go to Setup | App Setup | Create | Apps

1.  Delete Force.com

1.  Go to Setup | App Setup | Create | Tabs

1.  Delete "Start Here"

1.  Go to Setup | App Setup | Develop | Pages

1.  Delete "Start Here"

1.  Go to Setup | App Setup | Develop | Classes

1.  Delete startHereController and XMLDom.