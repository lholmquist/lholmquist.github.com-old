---
layout: post
title: "Story Creator - Part 1"
tagline: "The Idea"
description: "The story behind the story creator and where it's going"
categories: [Aerogear, JBoss, Ideas, Personal]
tags: [javascript, bootstrap, aerogear-js, java]
---
{% include JB/setup %}


## What is Story Creator?

That's a good question.  Let's start from the beginning and see where the idea came from.  One day while at work(MLMIC not Red Hat), 2 of my co-workers where in my cube trying to think of a cool idea for an app.  I had a couch and a big white board, so it was a good place to chill.  The app they were trying to come up with was basically a turn-based game.  After listening to them for a while i realized they were making the app to complicated.  Thats when a thought came into my head.  "I should go get some fritos from the vending machine".  After that thought i realized that a good concept for a turn based game would be where you would replace words from a story without knowing what the story was about.  And at the end you could read it and see how funny the story had become.

So yea, essentially Story Creator is my version of [Mad Libs](http://en.wikipedia.org/wiki/Mad_libs).


### The Essentials

I needed to define what the essential and most important parts of this app should be and what technologies i should use.  In no particular order:

#### Technology

* Java EE backend that would run on [openshift](https://openshift.redhat.com/app/)
	* REST endpoints
	* JPA?

* Javascript Frontend
	* Mobile Friendly(or just mobile?)
	* Backbone, Ember, something else for MVC?( I really wanted to learn something new.)

* Bootstrap

* MySql


#### Functionality

* Create Story

* Play Game
	* Play by yourself
	* Play with friends
		* Turn Based
		* Facebook Friends?

* Review Completed Games


* Connect to Facebook for sharing

	* Possible Facebook App?



With the thoughts written down i set out to create this app.

![Random LOL Cat](http://files.sharenator.com/funny_pictures_cat_dog_paper_bag_shrubbery_holy_grail_LOL_Cats-s500x329-79798-580.jpg)

