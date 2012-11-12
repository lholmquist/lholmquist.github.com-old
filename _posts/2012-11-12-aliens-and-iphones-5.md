---
layout: post
title: "aliens and iphones 5"
description: ""
category: 
tags: []
published: false
---
{% include JB/setup %}


## Device Test

In order to do this, you need to be an iOS developer, so you can install things on your device.  Also, you need to be on the same Wifi network as you machine.

If you meet that requirement, then navigate to the selenium svn repo that you checked out.  Go to the iphone directory and open the iWebdriver xcode project in , ummm , Xcode.

Before we install this on the phone,  you can click run, with an iphone simulator selected and just test out that it will build correctly.

Now, attach you phone,  if you click the run now,  there should be errors.  we need to modify a couple things so it will run on the phone

First, we need to change the code sign values, screenshot:

![iWebdriverBuildSettings](/img/iWebdriverBuildSettings.png)

Then, we need to change the "Valid Architectures" from i386 to armv7, screenshot:

![iWebdriverArchSettings](/img/iWebdriverArchSettings.png)


Now when you run this, it should build and then install on your phone.


When it starts up, there will be a "http" address on the bottom of the app,  this is important.  We need to add this address to our arquillian.xml file