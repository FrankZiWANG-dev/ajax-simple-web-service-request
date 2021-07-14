let request = new XMLHttpRequest;
request.open('GET', 'https://thatsthespir.it/api');

request.onload = function(){
    if (this.status === 200){
        
        //Get JSON object from external website
        let quote= JSON.parse(this.responseText);

        //places on our website where infos will be shown
        let quoteContainer = document.getElementById("quote");
        let authorContainer = document.getElementById("author");
        let photo = document.getElementById("photo");
        let reference = document.getElementById("reference");

        //function to insert quote and author into our website
        function renderQuote() {
            quoteContainer.innerHTML = quote.quote;
        }
        function renderAuthor() {
            authorContainer.innerHTML = quote.author;
        }

        //Call functions
        renderQuote();
        renderAuthor();
        

       //add img tag with src in photo div to display photo from external website
        if (quote.photo !== null) {
            photo.innerHTML = '<img src="'+quote.photo+'" id="photosize">';
        }
        
        //add reference
        reference.innerHTML = '<i> <a href="' + quote.permalink + '"> Original quote on "thatsthespir.it" </a></i> ';

        console.log(quote);
    }
    else {
        alert("ERROR!");
    }
};

request.send();

document.getElementById("reload").addEventListener("click", ()=>{
    location.reload();
})

//add lightbulb royalty free image if no available picture
// if (document.getElementById("photo").innerHTML == null) {
//     document.getElementById("photo").innerHTML ='<img src="https://raw.githubusercontent.com/FrankZiWANG-dev/ajax-simple-web-service-request/main/assets/images/pexels-pixabay-355952.jpg" id="photosize">';
// }
