const QuotesFetcher = require('./index.js');

async function showQuote() {
  const quotesFetcher = new QuotesFetcher();
  const quote = await quotesFetcher.getRandomQuote();
  console.log(quote);
}

showQuote();