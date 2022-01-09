function get_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
         let joke = JSON.parse(this.response);
	     // Access the result here
	    document.getElementById('joke').innerHTML = joke.contents.jokes[0].joke.text;
        document.getElementById('copyright').innerHTML = '<i>&copy; ' + joke.contents.copyright + '</i>';
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod?category=", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send();
}

get_joke_of_the_day()

function showJoke() {
    if (document.getElementById('yes').checked) {
        document.getElementById('jokeOfTheDay').style.display = 'inline-block';
        document.getElementById('question').style.display = 'none';
    }
    else if (document.getElementById('no').checked) {
        document.getElementById('noJoke').style.display = 'inline-block'
        document.getElementById('question').style.display = 'none';
    }
}