const QuotesList = [
    {
        quote: 'The Best Way To Get Started Is To Quit Talking And Begin Doing.',
        author: '– Walt Disney' 
    },
    {
        quote: 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
        author: '– Winston Churchill'
    },
    {
        quote: 'Don’t Let Yesterday Take Up Too Much Of Today.',
        author: '– Will Rogers'
    },
    {
        quote: 'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.',
        author: '– Unknown'
    },
    {
        quote: 'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.',
        author: '- Vince Lombardi'
    },
    {
        quote: 'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.',
        author: '– Steve Jobs'
    },
    {
        quote: 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.',
        author: '– Rob Siltanen'
    },
    {
        quote: 'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.',
        author: '– Og Mandino'
    },
    {
        quote: 'Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.',
        author: '– Mohnish Pabrai'
    },
    {
        quote: 'We May Encounter Many Defeats But We Must Not Be Defeated.',
        author: '– Maya Angelou'
    }
]

const quote = document.querySelector('.quote');
const quoteBtn = document.getElementById('quote-btn');
const author = document.querySelector('.author');

quoteBtn.addEventListener('click', newQuote);

function newQuote() {
    const randomQuote = QuotesList[Math.floor(Math.random() * QuotesList.length)];
    quote.innerHTML = randomQuote.quote;
    author.innerHTML = randomQuote.author;
}