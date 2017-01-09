
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
	var $quote = $('.quote');
	var $author = $('.author')

	$quote.html(item.quoteText);
	$author.html(item.quoteAuthor);
}

$('.btn').click(function(e) {
	e.preventDefault();
	getQuote();
})

$(document).ready(function() {
	getQuote();
})
