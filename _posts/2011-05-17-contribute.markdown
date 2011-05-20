---
layout: default
title: Contribute
categories: 
---

<span class="intro">You'd like to contribute, that's fantastic!  This guide will show you how to contribute to both the documentation and code.</span>

* First and foremost, [set up git and github](http://help.github.com/set-up-git-redirect)

* Create an apex-commons local folder.  This will serve as your eclipse workspace folder.

<pre class="terminal">
$ mkdir apex-commons
$ cd apex-commons
</pre>

Steps to contribute to the documentation
--------------------------

* Fork the [apex-commons.github.com](https://github.com/apex-commons/apex-commons.github.com) repo ([guide to forking](http://help.github.com/fork-a-repo/))

* Grab the fork (the following command will download the repo to your local drive)

<pre class="terminal">
$ git clone git@github.com:<em>username</em>/apex-commons.github.com.git
$ cd apex-commons.github.com
</pre>

* Install the [jekyll](https://github.com/mojombo/jekyll/wiki/Configuration) ruby gem (obviously requires ruby be installed beforehand) and then start jekyll as a web server.

<pre class="terminal">
$ gem install jekyll
$ jekyll --server
</pre>

* Go to [http://localhost:4000](http://localhost:4000) and hopefully you see something that looks remotely like this site.

* Make some changes!  A basic understanding of jekyll is required but don't worry, its easier than you're probably thinking.  See XXXXXXXXX

* Commit and push your changes back to github

<pre class="terminal">
$ git add .
$ git commit -m 'my first commit to apex-commons!'
$ git push origin master
</pre>

* One more step.  Submit a pull request ([guide to pull requests](http://help.github.com/pull-requests/)) and this will notify folks with commit rights to the apex-commons github organization that changes are now available.

Steps to contribute to the code
--------------------------

<span class="intro">The following steps use the base repo.  The same steps apply to all other repositories as well.</span>

* [Create a new developer edition salesforce org](http://developer.force.com) and [clear out the existing code in that org](/remove-code-from-fresh-salesforce-org).

* Fork one of the following repos (we'll be using base in following steps).

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`base`](https://github.com/apex-commons/base)
[`chatter`](https://github.com/apex-commons/chatter)
[`environment`](https://github.com/apex-commons/environment)
[`math`](https://github.com/apex-commons/math)
[`query`](https://github.com/apex-commons/query)
[`sort`](https://github.com/apex-commons/sort)
[`visualforce`](https://github.com/apex-commons/visualforce)

* Go to your apex-commons local folder.

<pre class="terminal">
$ cd /some/path/apex-commons
</pre>

* Grab the fork (the following command will download the repo to your local drive)

<pre class="terminal">
$ git clone git@github.com:<em>username</em>/base.git
$ cd base
</pre>

* Open Force.com IDE and select the apex-commons folder you created as your workspace.

* Create a new project with the exact same name as the repo (__important!__), in this example, name it base.

* Enter the credentials of the new developer edition org you created.  When prompted to select components, choose None.

* Make some changes!

* Commit and push

<pre class="terminal">
$ git add .
$ git commit -m 'my first commit to apex-commons!'
$ git push origin master
</pre>

* Submit pull request ([guide to pull requests](http://help.github.com/pull-requests/))

