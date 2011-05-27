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

* Open a terminal window and grab the fork (the following command will download the repo to your local drive)

<pre class="terminal">
$ git clone git@github.com:<em>username</em>/apex-commons.github.com.git
$ cd apex-commons.github.com
</pre>

* Install the [jekyll](https://github.com/mojombo/jekyll/wiki/Install) ruby gem (obviously requires ruby be installed beforehand) and then start jekyll as a web server.

<pre class="terminal">
$ sudo gem install jekyll
$ jekyll --server
</pre>

* Go to [http://localhost:4000](http://localhost:4000) and hopefully you see something that looks remotely like this site.

* Make some changes!  A basic understanding of jekyll is required but don't worry, its easier than you're probably thinking.  See the jekyll [usage guide](https://github.com/mojombo/jekyll/wiki/Usage).

* Commit and push your changes back to github

<pre class="terminal">
$ git add .
$ git commit -m 'my first commit to apex-commons!'
$ git push origin master
</pre>

* One more step.  Submit a pull request ([guide to pull requests](http://help.github.com/pull-requests/)) and this will notify folks with commit rights to the apex-commons github organization that changes are now available.

Steps to contribute to the code
--------------------------

* [Create a new developer edition salesforce org](http://developer.force.com) and [clear out the existing code in that org](/remove-code-from-fresh-salesforce-org).

* Open Force.com IDE and when prompted to select a workspace, select the apex-commons folder you created (i.e. the /some/path/apex-commons folder).

<span class="intro">The following steps use the base repo.  The same steps apply to all other repositories as well.</span>

* Fork one of the following repos (for this example, we'll be using [`base`](https://github.com/apex-commons/base)).

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[`base`](https://github.com/apex-commons/base)
[`chatter`](https://github.com/apex-commons/chatter)
[`environment`](https://github.com/apex-commons/environment)
[`math`](https://github.com/apex-commons/math)
[`query`](https://github.com/apex-commons/query)
[`sort`](https://github.com/apex-commons/sort)
[`visualforce`](https://github.com/apex-commons/visualforce)

* Create a new project with the exact same name as the repo (**important!**).  In this example, name it base.

* Enter your credentials and press Next.

<img src="/images/CreateProject1.jpg" />

<br/>
<br/>

* Choose None and press Finish

<img src="/images/CreateProject2.jpg" />

<br/>
<br/>

* Open a terminal window and go to your apex-commons local folder.

<pre class="terminal">
$ cd /some/path/apex-commons
</pre>

* Add the code to your Force.com IDE project folder

<pre class="terminal">
$ cd base
$ git init
$ git remote add base git@github.com:<em>username</em>/base.git
$ git pull base master
$ cd base
</pre>

* Refresh your Force.com project (Upon refresh, the code will be saved to your salesforce org).

<img src="/images/RefreshProject.jpg" />

<br/>
<br/>

* Make some changes!

* Commit and push

<pre class="terminal">
$ git add .
$ git commit -m 'my first commit to apex-commons!'
$ git push base master
</pre>

* Submit pull request ([guide to pull requests](http://help.github.com/pull-requests/))

