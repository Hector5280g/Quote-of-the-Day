let quotes = [
    `You are not you when you are hungry.`,
    `No one owes you anything.`,
    `Life is like a box of chocolate, you never know what you are going to get.`,
    `Things happen for a reason.`,
    `Failing does not mean you failed, just means you learned a lesson.`,
    `Yesterday is history, Tomorrow is a mystery, but today is a gift. That is why it is called the present.`
  ];

  
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
  document.querySelector('#main-title').textContent = 'The Main Entente'
    // Part 2
  document.querySelector('body').style.backgroundColor = 'Grey'
  
    // Part 4
  document.querySelectorAll('.special-title').forEach((item) => {
    item.style.fontSize = '2rem'
  })

    // Part 8
  document.querySelector('#quote-title').addEventListener('click', (evt) => {
    randomQuote()
  })
  });
