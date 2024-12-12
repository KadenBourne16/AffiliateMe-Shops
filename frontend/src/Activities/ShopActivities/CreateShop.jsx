import React, { useState, useEffect } from 'react';
import CreateShopForm from '../../Components/ShopComponents/CreateShopForm';

function CreateShop() {
  const [quote, setQuote] = useState({
    text: 'IS A JOURNEY',
    keyword: 'SUCCESS',
  });

  const quotes = [
    { text: 'IS A JOURNEY', keyword: 'SUCCESS' },
    { text: 'MAKES THE WORLD GO ROUND', keyword: 'MONEY' },
    { text: 'DON\'T MAKE A MAN RICH', keyword: 'RICHES' },
    { text: 'IS A MINDSET', keyword: 'WEALTH' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 3000); // change quote every 3 seconds
    return () => clearInterval(intervalId);
  }, [quotes]);

  return (
    <div className="p-4 flex justify-between h-screen bg-white">
      <div className="flex-1 flex justify-center items-center">
        <p className="text-gray-900 text-4xl font-bold">
          <span className="text-green-600 text-6xl">{quote.keyword}</span> {quote.text}
        </p>
      </div>
      <div className="w-1/4">
        <CreateShopForm />
      </div>
    </div>
  );
}

export default CreateShop;
