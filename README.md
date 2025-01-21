***QuotesFetcher
#A lightweight module to fetch random inspirational quotes from the ZenQuotes API.

**Installation
-Install the module via npm: 
(npm install quote_project)

**Usage
-Here’s a quick example of how to use QuotesFetcher in your project:

import QuotesFetcher from 'quote_project';

async function showQuote() {
  const quotesFetcher = new QuotesFetcher();
  const quote = await quotesFetcher.getRandomQuote();
  console.log(quote);
}

showQuote();


**Example Output
"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt

**API Reference
-QuotesFetcher: The main class to initialize and fetch quotes.
-getRandomQuote(): Returns a random quote in the format: quote - author.

**Requirements
-This module fetches data from the ZenQuotes API, so an internet connection is required for the getRandomQuote() method to work.

**License
-MIT License. Feel free to use, modify, and distribute as per the license terms.