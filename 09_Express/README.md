# Express Server
In this Section we'll look at Express.


## Setup
Create a working dir and run ```npm init```


## Install Modules
```
$ npm install logger express hbs --save
```

## Create the App 

See demo dir cotents.

### Execute in Terminal
```
$ nodemon server.js
[nodemon] 1.14.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Express Server listening on http://localhost:3000
```

### Launch in Browser
+ [http://localhost:3000](http://localhost:3000)
+ [http://localhost:3000/user](http://localhost:3000/user)
+ [http://localhost:3000/data](http://localhost:3000/data)
+ [http://localhost:3000/contact](http://localhost:3000/contact)
+ [http://localhost:3000/about.html](http://localhost:3000/about.html)

### Execute in Terminal (after stopping server)

```
$ cat server.log 

info [Sun Mar 10 2019 09:58:32 GMT-0400 (Eastern Daylight Time)]  Sun Mar 10 2019 09:58:32 GMT-0400 (Eastern Daylight Time): GET /
info [Sun Mar 10 2019 09:58:34 GMT-0400 (Eastern Daylight Time)]  Sun Mar 10 2019 09:58:34 GMT-0400 (Eastern Daylight Time): GET /user
info [Sun Mar 10 2019 09:58:35 GMT-0400 (Eastern Daylight Time)]  Sun Mar 10 2019 09:58:35 GMT-0400 (Eastern Daylight Time): GET /data
info [Sun Mar 10 2019 09:58:36 GMT-0400 (Eastern Daylight Time)]  Sun Mar 10 2019 09:58:36 GMT-0400 (Eastern Daylight Time): GET /contact
```


## Useful links
* [Express](https://expressjs.com/)
