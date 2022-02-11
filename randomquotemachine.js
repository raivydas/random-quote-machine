const quotes = ["Be yourself; everyone else is already taken.", "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "So many books, so little time.", "A room without books is like a body without a soul."];
const authors = ["Oscar Wilde", "Marilyn Monroe", "Albert Einstein", "Frank Zappa", "Marcus Tullius Cicero"];

$(document).ready(function () {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    $('#text').text(quotes[randomIndex]);
    $('#author').text(authors[randomIndex]);
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quotes[randomIndex] + ' ' + authors[randomIndex]));

    $('#new-quote').click(function displayRandomText() {
        randomIndex = Math.floor(Math.random() * quotes.length);
        console.log('randomIndex ' + randomIndex);
        $('#text').text(quotes[randomIndex]);
        $('#author').text(authors[randomIndex]);
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quotes[randomIndex] + ' ' + authors[randomIndex]));
    });
});