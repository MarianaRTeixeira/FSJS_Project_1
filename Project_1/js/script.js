/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "It is a far, far better thing that I do, than I have ever done; it is a far, far better rest I go to than I have ever known.",
    source: "Charles Dickens",
    citation: "A Tale of Two Cities",
    year: 1959,
    tag: "@Novel"
  },
  {
    quote: "We are such stuff as dreams are made on, and our little life is rounded with a sleep.",
    source: "William Shakespeare",
    citation: "The Tempest",
    year: 1611,
    tag: "@Romance"
  },
  {
    quote: "We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories.",
    source: "Margaret Atwood",
    citation: "The Handmaid's Tale",
    year: 1985,
    tag: "@Fiction"
  },
  {
    quote: "It's much better to do good in a way that no one knows anything about it",
    source: "Leo Tolstoy",
    citation: "Anna Karenina",
    year: 1877,
    tag: "@Romance"
  },
  {
    quote: "Memories warm you up from the inside. But they also tear you apart.",
    source: "Haruki Murakami",
    citation: "Kafka On The Shore",
    year: 2002,
    tag: "@Romance"
  }
]
let postQuote;
/***
 * `getRandomQuote` function
***/

function getRandomQuote(array) {
  
  //define random variable
  let random =  Math.floor(Math.random() * array.length);
  let randomQuote = array[random];
  return randomQuote;
}


/***
 * `printQuote` function
***/

function printQuote() {
 
  const randomQuotes = getRandomQuote(quotes);

  let postQuote = `
  <p class="quote"> ${randomQuotes.quote}</p>
  <p class="source"> ${randomQuotes.source}`;
  

  if(randomQuotes.citation) {
    postQuote += `<span class="citation"> ${randomQuotes.citation}</span>`
  }

  if(randomQuotes.year) {
    postQuote += `<span class="citation"> ${randomQuotes.year}</span>`
  }
  if(randomQuotes.tag) {
    postQuote += `<span class="citation"> ${randomQuotes.tag}</span>`
  }
  postQuote += `</p>`

  document.getElementById('quote-box').innerHTML = postQuote;
}

// Color changes font: css-tricks
const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}

//Quotes automatically refresh at regular intervals and at the same time changes background

setInterval(printQuote, 10000);
setInterval(setBg, 10000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", setBg);