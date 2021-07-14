
let launchAjaxRequest = document.getElementById("run");
let photo = document.getElementById("photo");
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let totalQuotes = document.getElementById("totalQuotes");
let quoteLeft = document.getElementById("quote-left");
let quoteRight = document.getElementById("quote-right");


// return xmlHttpRequest objet.
// Compatible method - all browser 
function getXMLHTTP(){
  var xhr = null;
  // if(window.XMLHttpRequest) // Firefox and other
  // xhr = new XMLHttpRequest();
  // else if(window.ActiveXObject){ // IE
  // try {
  // xhr = new ActiveXObject("Msxml2.XMLHTTP");
  // } catch (e) {
  // try {
  // xhr = new ActiveXObject("Microsoft.XMLHTTP");
  // } catch (e1) {
  // xhr = null;
  // }
  // }
  // }
  xhr = new XMLHttpRequest;
  if (!xhr) {
    alert("Your browser not support XMLHTTPRequest objects.");
  }
  return xhr;
}

updatePage = (data) => {
  //console.log(data);
  if (!data.photo) {
    let _src = "assets/img/" + `${data.gender}.png`
    photo.src = _src;
  } else { photo.src = data.photo; }
  quote.innerHTML = data.quote;
  author.innerHTML = data.author;
  totalQuotes.innerHTML = "(" + data.total_quotes + " quote-s" + ")";
  quoteLeft.setAttribute("class","fas fa-quote-left");
  quoteRight.setAttribute("class","fas fa-quote-right");
}

main = () => {
  var _xmlHttp = null; //object used to call a server
  var _url = "https://thatsthespir.it/api"; // url to query

  _xmlHttp = getXMLHTTP(); //instansiate XMLHttpRequest 

  if(_xmlHttp) {
    _xmlHttp.open("GET", _url, true); //query url
    //_xmlHttp.onreadystatechange = function() {
    _xmlHttp.onload = function() {
      //alert(_xmlHttp.readyState + " " + _xmlHttp.status);
      if(_xmlHttp.readyState === 4 && _xmlHttp.status === 200) {  // the request succeed
        //alert("if loaded");
        var xml = JSON.parse(this.responseText); 
        updatePage(xml);
        //console.log(xml);
      }
      else {
        alert ("Something went wrong. Server not respond."); //the request failed
      }
    };
    // send a query : _xmlHttp.open("GET", _url, true);
    _xmlHttp.send();
  }
}

launchAjaxRequest.addEventListener("click", () => { main() });
