
const body = document.getElementsByTagName("body")[0]
body.style.backgroundColor = "#c551ff"




const quotes = [
    "Live your life to the fullest. You only get one.",
    "Life has no limitations except the ones you make.",
    "Life’s like photography, you use the negatives to develop.",
    "No other animal knows the difference between Friday and Monday.",
    "The purpose of life is a life of purpose",
    "It’s not the length of life, but the depth of life.” -Ralph Waldo Emerson",
    "Knowledge, if wisely paired with action, builds an indestructible bridge to success."]

const usedIndexes = new Set()
const quoteTag = document.getElementById("quote")

function generateQuote() {

    if(usedIndexes.size >= quotes.length)
        usedIndexes.clear()

    while (true) {
        let rndmIndex = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(rndmIndex)) continue

        let quote = quotes[rndmIndex]
        quoteTag.innerHTML = quote
        usedIndexes.add(rndmIndex)
        break
    }
}