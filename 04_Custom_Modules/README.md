# Custom Modules
In this Section we'll learn how to create, and require, custom modules.


## Setup

### Execute in Terminal
```
$ mkdir demo
$ cd demo
$ npm init
...
Is this ok? (yes) yes
```


## Install Modules

### Execute in Terminal
```
$ npm install logger --save
$ npm install yargs --save
```


## Create the App

In your working dir, create the following files
+ app.js
+ mountains.js

View the files in the demo dir for code.

### Execute in Terminal
```
$ node app.js --name="Mt. Washington" --elev="6,288"

$ node app.js insert  --elev="6,288"

$ node app.js delete --name="Mt. Washington" --elev="6,288"

$ node app.js insert --name="Mt. Washington" --elev="6,288"
Mountain Created: Mt. Washington 6,288!

$ node app.js insert --name="Mt. Washington" --elev="6,288"
Mountain not created: Duplicate mountain (Mt. Washington) found!

$ cat mountains.json 
[{"name":"Mt. Washington","elev":"6,288"}]

$ cat log.txt 
info [Thu Feb 14 2019 05:00:54 GMT-0500 (Eastern Standard Time)]  App accessed by rob: Failure - Command not found.
info [Thu Feb 14 2019 05:00:57 GMT-0500 (Eastern Standard Time)]  App accessed by rob: Failure - Missing Mountain Data param(s).
info [Thu Feb 14 2019 05:01:05 GMT-0500 (Eastern Standard Time)]  App accessed by rob: Failure - Command (delete) not able to be processed.
info [Thu Feb 14 2019 05:01:10 GMT-0500 (Eastern Standard Time)]  App accessed by rob: Success - Mt. Washington, 6,288.
info [Thu Feb 14 2019 05:01:16 GMT-0500 (Eastern Standard Time)]  App accessed by rob: Failure - Mountain not created: Duplicate mountain (Mt. Washington) found.

$ node app.js insert --name="Mt. Adams" --elev="5,799"
Mountain Created: Mt. Adams 5,799!

$ cat mountains.json 
[{"name":"Mt. Washington","elev":"6,288"},{"name":"Mt. Adams","elev":"5,799"}]
```

