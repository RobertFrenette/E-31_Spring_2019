# Client App
Although this course focuses on the MEAN Stack (using Angular on the fron-end), I'm providing an HTML front-end example here which makes an AJAX call to a Node server for data. 

We will cover Angular later in the semester.

## Note on Goole Maps API Keys
In the HTML pages in this demo, you will need to replace the ```YOUR_GMAPS_API_KEY_HERE``` text in the script tags (see example below) with your Google Maps API Key for GMaps to function properly.
```
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GMAPS_API_KEY_HERE&callback=initMap" async defer></script>
```

## Testing
+ Start Node server
```
$ cd server
$ node server
```

Note: If you fail to start the Node server before launching the Client App, you will get the following error on the Client.

## Error
![HTML_PHP](img/html_error.png?raw=true "Server Error")

## Client App
This App is built in standard HTML.

+ Simply open index.html in your browser

![Show Map](img/html_map.png?raw=true "Map")


![Gallery](img/html_gallery.png?raw=true "Gallery")


## Useful links
* [Google Maps API](https://developers.google.com/maps/)
