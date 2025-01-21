const QuotesFetcher = require('./quotes.js');

async function showQuote() {
  const quotesFetcher = new QuotesFetcher();
  const quote = await quotesFetcher.getRandomQuote();
  console.log(quote);
}

showQuote();