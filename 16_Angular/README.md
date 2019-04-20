# Angular
In this Section we'll install the Angluar CLI and generate a new Project.

## Install Angular CLI
```
npm install -g @angular/cli@latest
```

![Install](img/angular_cli.png?raw=true "Install")


## Create a new Angular App
```
$ ng new demo
  ? Would you like to add Angular routing? No
  ? Which stylesheet format would you like to use? CSS
  CREATE demo/README.md (1021 bytes)
  ...
  added 1153 packages from 1036 contributors and audited 42611 packages in 126.52s
  Project 'demo' successfully created.
$ 
```

## Run App
```
$ cd demo
$ ng serve
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
                                                                                                 
Date: 2019-04-20T14:46:33.350Z
Hash: fe2a83aed928ea21d070
Time: 12584ms
chunk {es2015-polyfills} es2015-polyfills.js, es2015-polyfills.js.map (es2015-polyfills) 284 kB [initial] [rendered]
chunk {main} main.js, main.js.map (main) 9.89 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 236 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 6.08 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 16.3 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 3.52 MB [initial] [rendered]
ℹ ｢wdm｣: Compiled successfully.
```

## Load App
[http://localhost:4200/](http://localhost:4200/)

![Launch](img/angular_app.png?raw=true "Launch")
