/* jshint esnext: true */
/* global NodeList, document, console, Kinetic, window, async, await, fetch */

NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]; // polifill for the for..of.. loop

/**
* @class prepareData
* This class prepares the view for canvas
*/
class prepareData {
  data;
  /**
  * @method constructor
  * @param data {Array}
  */
  constructor(data) {
    this.data = data;
  }

  /**
  * @method textIdView
  * Createing the view based on the number and name
  * @return textValue {Array}
  */
  textIdView() {
    let textsValue = [];
    for(let value of this.data) {
      textsValue.push(value.number + ' : ' + value.name);
    }

    return textsValue;
  }

  /**
  * @method coordinates
  * Createing the coordinates for the view
  * @return cooArray {Array}
  */
  coordinates(i, height) {
    let x, y;
    switch(i) {
      case 0:
        x = 15;
        y = height / 2 - 50;
        break;
      case 1:
        x = 200;
        y = 100;
        break;
      case 2:
        x = 180;
        y = height / 2 - 100;
        break;
      case 3:
        x = 180;
        y = height / 2;
        break;
      case 4:
        x = 200;
        y = height - 200;
        break;
      case 5:
        x = 400;
        y = 100;
        break;
      case 6:
        x = 380;
        y = height / 2 - 100;
        break;
      case 7:
        x = 380;
        y = height / 2;
        break;
      case 8:
        x = 400;
        y = height - 200;
        break;
      case 9:
        x = 550;
        y = height / 2;
        break;
      case 10:
        x = 550;
        y = height / 2 - 100;
        break;
      default:
        x = 900;
        y = 1;
    }
    return {'x': x, 'y': y};
  }
}

(async function() {
  let data;
  await fetch('/data').then(function(response) {
    return response.json();
  }).then(function(toJson) {
    data = toJson.playerData;
  });
    let viewClass = new prepareData(data);

    let stage = new Kinetic.Stage({
      container: 'startingEleven',
      width: 1200,
      height: 600
    });

    let layer = new Kinetic.Layer();

    let builtNames = viewClass.textIdView();
    builtNames.forEach(function(value, i) {
      let nodeName = value;
      let x = viewClass.coordinates(i, stage.height()).x;
      let y = viewClass.coordinates(i, stage.height()).y;

      if(i > 10) {
        y = (i - 9) * 15;
      }

      nodeName = new Kinetic.Text({
        x: x,
        y: y,
        text: nodeName,
        fontSize: 14,
        fontFamily: 'Calibri',
        fill: 'blue',
        draggable: true
      });

      layer.add(nodeName);
    });

    stage.add(layer);
}());