let request = new XMLHttpRequest;
request.open('GET', 'https://thatsthespir.it/api');

request.onload = function(){
    if (this.status === 200){
        
        //Get JSON object from external website
        let quote= JSON.parse(this.responseText);

        //places on our website where quote and author will be shown
        let quoteContainer = document.getElementById("quote");
        let authorContainer = document.getElementById("author");
        let photo = document.getElementById("photo");

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

       //add img tag with src in photo div to display photo
        if (quote.photo !== null) {
            photo.innerHTML = '<img src="'+quote.photo+'" id="photosize">';
        }
        
        console.log(quote);
    }
    else {
        alert("ERROR!");
    }
};

request.send();