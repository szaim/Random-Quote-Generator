
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
	var $author = $('.author');
	var colors = ["rgb(249, 150, 129)", "rgb(251, 144, 222)", "rgb(254, 162, 183)", "rgb(247, 255, 183)",
					"rgb(190, 247, 255)", "rgb(190, 200, 255)", "rgb(254, 91, 113)", "rgb(253, 86, 190)" ];

	var randomColors = colors[Math.floor(Math.random() * colors.length)];
	if(item.quoteAuthor === "") {
		item.quoteAuthor = "Unknown";
	}
	$quote.html(item.quoteText);
	$author.html(item.quoteAuthor);
	$('body').css('background', randomColors);
	$('.btn').css('background', randomColors);
	$quote.css('color', randomColors);
}

$('.btn').click(function(e) {
	e.preventDefault();
	getQuote();
})

$(document).ready(function() {
	getQuote();
})
