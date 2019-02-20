// node server
const http = require('http');

// NOTE: fs module required for "Async with CallBack funct" ex below
//const fs = require('fs');

// NOTE: promise module required for "Async with Promise" ex below
// npm install promise --save
const Promise = require("promise");

const mountains = require('./mountains');

const host = '127.0.0.1';
const port = 3000;

var server = http.createServer((req, res) => {
    // If you get a CORS error, add the following line:
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'GET') {
        // GET http://localhost:3000/mountains
        if (req.url === '/mountains') {
            /*
            // Async with CallBack funct
            fs.readFile('data/data.json', 'utf8', (readFileErr, data) => {
                            if (readFileErr) {
                                            res.statusCode = 500;
                                            res.end();
                            }
                            let mountainsResp = [];
                            let mountainData = JSON.parse(data).mountains;

                            mountainData.forEach((mountain) => {
                                            mountainsResp.push({
                                                                    "name": mountain.name,
                                                                    "elevation" : mountain.elevation,
                                                                    "effort": mountain.effort,
                                                                    "img": mountain.img,
                                                                    "desc": mountain.desc,
                                                                    "coords": {
                                                                        "lat": mountain.lat,
                                                                        "lng": mountain.lng
                                                                    }
                                                                });
                            });
                            res.statusCode = 200;
                            res.end(JSON.stringify({"mountains": mountainsResp}));
            }); // End CallBack
            */

            // Async with Promise
            let promise = mountains.getAllMountains();
            promise.then((data) => {
                let mountainsResp = [];
                let mountainData = JSON.parse(data).mountains;
                    mountainData.forEach((mountain) => {
                        mountainsResp.push({
                                            "name": mountain.name,
                                            "elevation" : mountain.elevation,
                                            "effort": mountain.effort,
                                            "img": mountain.img,
                                            "desc": mountain.desc,
                                            "coords": {
                                                "lat": mountain.lat,
                                                "lng": mountain.lng
                                            }
                                        });
                });
                res.statusCode = 200;
                res.end(JSON.stringify({ "mountains": mountainsResp }));
            })
                .catch((error) => {
                    res.statusCode = 500;
                    res.end();
                }); // End Promise

        } else {
            // not /mountains endpoint
            res.statusCode = 404;
            res.end();
        }
    } else if (req.method === 'POST') {
        // POST http://localhost:3000/mountain
        if (req.url === '/mountain') {
            let body = [];

            // CallBack
            /*
            req.on('data', (chunk) => {
                            body.push(chunk);
            }).on('end', () => {
                            body = Buffer.concat(body).toString();
                            res.statusCode = 200;
                            res.end(body);
            }).on('error', (err) => {
                            res.statusCode = 500;
                            res.end();
            });
            */

            // Promise
            req.on('data', (data) => {
                let parsedData = JSON.parse(data);
                //console.log(parsedData);

                let promise = mountains.insertMountain(
                                                        parsedData.mtnName, 
                                                        parsedData.mtnElevation, 
                                                        parsedData.mtnEffort, 
                                                        parsedData.mtnImage,
                                                        parsedData.mtnDesc,
                                                        parsedData.mtnLat,
                                                        parsedData.mtnLng
                                                    );

                promise.then((data) => {
                    res.statusCode = 200;
                })
                    .catch((error) => {
                        // Mountain already exists
                        res.statusCode = 403;
                        res.end();
                    }); // End Promise
            }).on('end', () => {
                res.end();
            }).on('error', (err) => {
                res.statusCode = 500;
                res.end();
            });
        } else {
            // not /mountain endpoint
            res.statusCode = 404;
            res.end();
        }
    } else {
        // not GET or POST
        res.statusCode = 404;
        res.end();
    }
});

server.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
});
