---
layout: post
title: "Aliens and iPhones"
description: "Show how to test mobile with Arquillian"
categories: [mobile, testing]
tags: [Arquillian, JBoss]
published: false
---
{% include JB/setup %}

## Intro

For some, testing has become an important part of the development lifecycle.  There are a bunch of popular testing frameworks out there for both client and server.  JBoss is pushing Arquillian, which takes testing to the next level by allowing you to test in a container, thus effectively testing how your code would work on the server it will eventually run on.  Lets call these tests integration tests.

Now, there are numerous articles on [Arquillian.org](Arquillian.org) that show how to get started and what the goals of the project are, so I won't go into all that here.   What i'm really interested in, is how the project relates to a mobile environment.  That great that we can server-side code in our container, for instance JBoss AS 7,  but what about client side?

## Task

There are client libraries that do unit testing, such as qunit,  but what about actual integration tests where we can control the browser.  Some people use [Selenium](http://seleniumhq.org/), which has a suite of different products to help control the browser.  There seems to be a lot of setup and how can i integrate this into the tests i already have in my maven build.

You may remember that i mentioned Arquillian, you should it was 1 paragraph ago.  Well Arquillain has a project called Drone, that basically wraps all the selenium stuff up and is managed by the Arquillian framework.  This should allow me to run these new client integration tests along side my server-side tests.

## Setup

I'll be assuming that this pre reqs have already been met:

    java sdk 6.0+
    maven 3.0+
    IDE of choice, I use IntelliJ
    Git
    JBoss AS 7.1
    Time

*Note:  Some of this stuff we are going to be trying is in Alpha, so expect it to change.  Also there seems to be a decent amount of setup, maven stuff, for Arquillian,  so just be patient*

The project that we will be modifying will be the HTML5 Kitchensink example from AeroGear found [here](https://github.com/aerogear/as-quickstarts) .  Also, I must give credit to [Karel Piwko](https://github.com/kpiwko)  for his awesome presentation at [JavaOne](http://www.myexpospace.com/JavaOne2012/SessionFiles/TUT5039_mp4_5039_001.mp4).  I'll be borrowing some code from him.  Check out his repo [here](https://github.com/kpiwko/html5-demoapp)


First things first,  Lets create a new branch, called drone, to work with so we don't pollute the master branch:

    $ git checkout -b drone

Since this is a maven project, we can easily import this into my IDE.

Just to make sure everything runs ok in the IDE, lets run the provided test with the arq-jbossas-remote maven profile.  *Make sure you have AS 7 running before running it*

It should pass since we haven't modified anything yet.

This would be a good spot to stop and get something to drink, eat, go to the bathroom or whatever.  The next steps could take a while.  I can wait..............


Ok....Now it's time to dive in.





