const Quote = () => {
  const quotes = [
    '"But in my opinion, all things in nature occur mathematically." - Rene Decartes',
    '"Do not worry about your difficulties in mathematics. I can assure you mine are still greater." - Albert Einstein',
    '"The study of mathematics, like the Nile, begins in minuteness but ends in magnificence." - Charles Caleb Colton',
    '"Mathematics is the music of reason." -  James Joseph Sylvester',
    '"Arithmetic is being able to count up to twenty without taking off your shoes." - Mickey Mouse',
  ];

  const getQuote = () => {
    const index = Math.floor(Math.random() * (quotes.length - 0)) + 0;
    return quotes[index];
  };

  return (
    <div className="quote">
      <h2>{getQuote}</h2>
    </div>
  );
};

export default Quote;
