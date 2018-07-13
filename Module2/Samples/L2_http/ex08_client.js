var http = require('http');
var cheerio = require('cheerio');

var url = 
	"http://people.bu.edu/kalathur" + 
	"/current_courses.html";

var req = http.get(url, function (response){
	var data = '';

	response.on('data', function(chunk){
		data += chunk;
	});

	response.on('end', function(){
		var $ = cheerio.load(data);
		var linkURLs = [];
  	$('a').map(function(index, elem) {
  		var href = $(elem).attr('href');
  		var text = $(elem).html().trim();
  		if (href.indexOf('http:') == 0) {
  			linkURLs.push({'link': href, 
    								 'data': text});
  		}	
  	});
  	console.log(linkURLs);
	});
});

req.on('error', function (err){
	console.log(err);
})
