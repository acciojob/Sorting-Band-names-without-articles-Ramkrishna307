let bandNames = ['The Beatles', 'Led Zeppelin', 'The Who', 'Pink Floyd', 'Queen', 'The Rolling Stones', 'The Doors', 'The Jimi Hendrix Experience'];

// Define a function to remove articles from a string
function removeArticle(name) {
  let regex = /^(The|A|An)\s/i;
  return name.replace(regex, '');
}

// Sort the band names without articles
let sortedBandNames = bandNames.map(removeArticle).sort();

// Display the sorted band names in an unordered list
let ul = document.createElement('ul');
ul.setAttribute('id', 'bands');

sortedBandNames.forEach(function(bandName) {
  let li = document.createElement('li');
  li.textContent = bandName;
  ul.appendChild(li);
});

document.body.appendChild(ul);

