//your code here
// script.js
let bandNames = ['The Beatles', 'Led Zeppelin', 'The Who', 'Pink Floyd', 'Queen', 'The Rolling Stones', 'The Doors', 'The Jimi Hendrix Experience'];

// Define a function to remove articles from a string
function removeArticle(name) {
  let words = name.split(' ');
  if (words.length > 1 && (words[0].toLowerCase() === 'the' || words[0].toLowerCase() === 'a' || words[0].toLowerCase() === 'an')) {
    return words.slice(1).join(' ');
  } else {
    return name;
  }
}

// Sort the band names without articles
let sortedBandNames = bandNames.map(removeArticle).sort();

// Display the sorted band names in an unordered list
let ul = document.getElementById('bands');
for (let i = 0; i < sortedBandNames.length; i++) {
  let li = document.createElement('li');
  li.textContent = sortedBandNames[i];
  ul.appendChild(li);
}

