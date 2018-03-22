
var backgrounds = ["396.png", "414.png", "667.png"];
var backgroundsBlur = ["396-blur.png", "414-blur.png", "667-blur.png"];
var index = 1;


// "Content-Type": "application/x-www-form-urlencoded"
function fetchQuote() {
  var response = $.get({headers: {
      "X-Mashape-Key": "iglMHuLdVYmshOnRc44L8KiwN9tBp1YXfzrjsn4w1N2Wz2H94M",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json"
    },
    url: "https://quotes.p.mashape.com/"
    // success: function() {
    //
    // }
  });
  return response;
}

function nextQuote() {
  var quoteobj = fetchQuote();
  $("q").animate({opacity: 0}, 250, function(){
    $(this).animate({opacity: 1}, 500);
    $("#quotation").text()
  });
}

function nextBackground() {

  $("#background").css("background-image", "url(img/" + backgrounds[index] + ")");

  $("#frame").css("background-image", "url(img/" + backgroundsBlur[index] + ")");
  // console.log(backgrounds[index]);
  // console.log(index);
  index = (index+1)%(backgrounds.length);
  // alert("HELP ME!!!!");
}


$(document).ready(function() {
  console.log(fetchQuote());
  // console.log(index);
  // console.log(backgrounds[index]);
  // $("#background").css("background-image", "url(img/" + backgrounds[0] + ")");
  // console.log(index);
  // console.log(backgroundsBlur[index]);
  // $("#frame").css("background-image", "url(img/" + backgroundsBlur[0] + ")");
  $("#next").on('click', nextBackground);
  // nextBackground(index);

});
