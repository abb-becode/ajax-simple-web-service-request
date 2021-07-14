
let launchAjaxRequest = document.getElementById("run");
let photo = document.getElementById("photo");
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let totalQuotes = document.getElementById("totalQuotes");
let quoteLeft = document.getElementById("quote-left");
let quoteRight = document.getElementById("quote-right");


// retourne un objet xmlHttpRequest.
// méthode compatible entre tous les navigateurs (IE/Firefox/Opera)
function getXMLHTTP(){
  var xhr = null;
  // if(window.XMLHttpRequest) // Firefox et autres
  // xhr = new XMLHttpRequest();
  // else if(window.ActiveXObject){ // Internet Explorer
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
  //else { // XMLHttpRequest non supporté par le navigateur
    alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest...");
  }
  return xhr;
}

displayData = (data) => {
  console.log(data);
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
  var _xmlHttp = null; //l'objet xmlHttpRequest utilisé pour contacter le serveur
  var _url = "https://thatsthespir.it/api"; //l'adresse à interroger pour trouver les suggestions
  //function callSuggestions(valeur){
  /*if(_xmlHttp && _xmlHttp.readyState != 0){
  _xmlHttp.abort();
  }*/
  _xmlHttp = getXMLHTTP(); 
  if(_xmlHttp){
    //appel à l'url distante
    _xmlHttp.open("GET", _url, true);
    //_xmlHttp.onreadystatechange = function() {
    _xmlHttp.onload = function() {
      //alert(_xmlHttp.readyState + " " + _xmlHttp.status);
      if(_xmlHttp.readyState === 4 && _xmlHttp.status === 200) {
      //var liste = traiteXmlSuggestions(_xmlHttp.responseXML)
      //cacheResults(valeur,liste)
      //metsEnPlace(valeur,liste)
      //document.getElementById("quote").innerHTML = _xmlHttp.responseXML;
      //alert("if loaded");
        var xml = JSON.parse(this.responseText);
        displayData(xml);
        //console.log(xml);
      }
      else {
        alert ("server not respond");
      }
    };
    // envoi de la requête
    //_xmlHttp.open("GET", _url, true);
    _xmlHttp.send();
  }
  //}
}

launchAjaxRequest.addEventListener("click", () => { main() });

// var xhr = new XMLHttpRequest;

// xhr.open("GET", "https://thatsthespir.it/api", true)

// xhr.onload = function () {
//     if (this.status === 200) {
//         var QuoteBody = JSON.parse(this.responseText);
//         HTMLQuote.innerHTML = QuoteBody.quote;
//         author.innerHTML = QuoteBody.author;
//         quotes.innerHTML = QuoteBody.total_quotes + " quotes";
//         var imgcont = document.createElement("img");
//         imgcont.setAttribute("src", QuoteBody.photo);
//         imgcont.setAttribute("id", "imgcont");
//         imgcont.setAttribute("alt", "Author photo");
//         imgrep.appendChild(imgcont);
//     }
//     else {
//         console.log("Error");
//     }
// }

// xhr.send();




/* _xmlHttp = getXMLHTTP(); 
if(_xmlHttp){
//appel à l'url distante
_xmlHttp.open("GET", _url, true);
_xmlHttp.onreadystatechange = function() {
alert(_xmlHttp.readyState + " " + _xmlHttp.status);
if(_xmlHttp.readyState == 4 && _xmlHttp.status == 200) {
//var liste = traiteXmlSuggestions(_xmlHttp.responseXML)
//cacheResults(valeur,liste)
//metsEnPlace(valeur,liste)
//document.getElementById("quote").innerHTML = _xmlHttp.responseXML;
//alert("if loaded");
if (_xmlHttp.responseXML) { alert(_xmlHttp.responseText); }
//alert("if loaded");
}
// else {
// alert ("server not send response");
// }
};
// envoi de la requête
//_xmlHttp.open("GET", _url, true);
_xmlHttp.send(null)
}
//}
}

launchAjaxRequest.addEventListener("click", () => { main() });
}*/












/*
var quoteElt = document.getElementById("quote")
var authorElt = document.getElementById("author")
var picElt = document.getElementById("photo")

fetch('https://thatsthespir.it/api')
  .then(res => res.json())
  .then(data => {
      let author = data.author
      let photo = data.photo
      let quote = data.quote
      let gender = data.gender

      quoteElt.innerHTML = `
                              <span class="quote-icon">
                                <i class="fas fa-quote-left"></i>
                              </span> 
                              <span class="f6"> “</span>
                              ${quote}
                              <span class="f6"> “</span>
                            `
      authorElt.innerText = author;
 
      if (photo !== "") {
        picElt.style.backgroundImage = `url("${photo}")`
      } else {
        picElt.style.backgroundImage = `url("assets/img/${gender}.png")`
      }

      console.log(data)
  })
  .catch(error => {
      alert("An error occured")
      console.error(error)
})
*/