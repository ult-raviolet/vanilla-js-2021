const quotes = [
    {
        quote: "Love looks not with the eyes, but with the mind.",
        author: "William Shakespeare",
    },
    {
        quote: "We make a living by what we get, we make a life by what we give.",
        author: "Sir Winston Churchill",
    },
    {
        quote: "United we stand, divided we fall.",
        author: "Aesop",
    },
    {
        quote: "If we take care of the moments, the years will take care of themselves.",
        author: "Maria Edgeworth",
    },
    {
        quote: "To want to be what one can be is purpose in life.",
        author: "Cynthia Ozick",
    },
    {
        quote: "Never do things others can do and will do if there are things others cannot do or will not do.",
        author: "Amelia Earhart",
    },
    {
        quote: "You have to have confidence in your ability, and then be tough enough to follow through.",
        author: "Rosalynn Carter",
    },
    {
        quote: "There is no great genius without some touch of madness.",
        author: "Seneca",
    },
    {
        quote: "Success is like reaching an important birthday and finding you're exactly the same.",
        author: "Audrey Hepburn",
    },
    {
        quote: "Books...are like lobster shells, we surround ourselves with 'em, then we grow out of 'em and leave 'em behind, as evidence of our earlier stages of development.",
        author: "Dorothy L. Sayers",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;