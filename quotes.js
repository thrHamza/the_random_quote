const fetch = require('node-fetch');

class QuotesFetcher {
  constructor(apiUrl = 'https://zenquotes.io/api/random') {
    this.apiUrl = apiUrl;
  }

  async getRandomQuote() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      if (data && data.length > 0) {
        const { q: quote, a: author } = data[0];
        return `${quote} - ${author}`;
      } else {
        throw new Error('No quote found');
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      return 'Could not fetch quote. Please try again later.';
    }
  }
}

module.exports = QuotesFetcher;