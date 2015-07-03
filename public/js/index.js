/* jshint esnext: true */
/* global NodeList, document, console */

NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]; // polifill for the for..of.. loop

function getData() {
  let data = document.querySelectorAll('#data div');
  let ids = [];
  let names = [];
  let imgs = [];
  let numbers = [];
  let playerData = [];

  for(let parentNode of data) {
    //console.log(parentNode);
    //console.log(parentNode.childNodes);
    ids.push(parentNode.id);

    let childNodes = parentNode.childNodes;
    for(let childNode of childNodes) {
      //console.log(childNode);
      //console.log(childNode.classList);
      //console.log(childNode.innerHTML);

      if(childNode.classList !== undefined && childNode.classList[0] === 'name') {
        names.push(childNode.innerHTML);
      }
      else if(childNode.classList !== undefined && childNode.classList[0] === 'img') {
        imgs.push(childNode.innerHTML);
      }
      else if(childNode.classList !== undefined && childNode.classList[0] === 'number') {
        numbers.push(childNode.innerHTML);
      }
    }
  }

  names.forEach(function(e, i) {
    playerData.push({'id': ids[i], 'name': names[i], 'img': imgs[i], 'number': numbers[i]});
  });

  console.log(playerData);

}

getData();

var canvas = document.querySelector('#startingEleven');
var context = canvas.getContext('2d');