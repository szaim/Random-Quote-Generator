
// var link = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";

// function getQuote(data) {
// 	console.log(data);
// }

// $(document).ready(function() {
// 	$.getJSON(link, getQuote, 'jsonp');
// })

function getQuote(){
	var link = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
  $.getJSON(link, function (data) {
		console.log(data);
		generateQuote(data);

    
    });
};

var generateQuote = function(item) {
	var $app = $('.app');

	$app.append('<p>' + item.quoteText + '</p>');
}


$(document).ready(function() {
	getQuote();
})
