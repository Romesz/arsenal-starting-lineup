/* jshint esnext: true */
/* global NodeList, document, console, Kinetic */

NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]; // polifill for the for..of.. loop
/**
* @class getData
* This class gets the data form backend
*/
class getData {
  data;
  ids;
  names;
  imgs;
  numbers;
  playerData;

  /**
  * @method constructor
  */
  constructor() {
    this.data = document.querySelectorAll('#data div');
    this.ids = [];
    this.names = [];
    this.imgs = [];
    this.numbers = [];
    this.playerData = [];
  }

  /**
  * @method collectData
  * collecting the data
  */
  collectData() {
    for(let parentNode of this.data) {
      //console.log(parentNode);
      //console.log(parentNode.childNodes);
      this.ids.push(parentNode.id);

      let childNodes = parentNode.childNodes;
      for(let childNode of childNodes) {
        //console.log(childNode);
        //console.log(childNode.classList);
        //console.log(childNode.innerHTML);

        if(childNode.classList !== undefined && childNode.classList[0] === 'name') {
          this.names.push(childNode.innerHTML);
        }
        else if(childNode.classList !== undefined && childNode.classList[0] === 'img') {
          this.imgs.push(childNode.innerHTML);
        }
        else if(childNode.classList !== undefined && childNode.classList[0] === 'number') {
          this.numbers.push(childNode.innerHTML);
        }
      }
    }  
  }
 
  /**
  * @method returnData
  * retunrning the data
  * @return that.playerData {Array}
  */
  returnData() {
    let that = this;
    this.names.forEach(function(e, i) {
      that.playerData.push({'id': that.ids[i], 'name': that.names[i], 'img': that.imgs[i], 'number': that.numbers[i]});
      // this interferes with the scope of the forEach
    });

    return that.playerData;
  }
}

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

var getDataClass = new getData();
getDataClass.collectData();
var data = getDataClass.returnData();

var viewClass = new prepareData(data);

var stage = new Kinetic.Stage({
  container: 'startingEleven',
  width: 1200,
  height: 600
});

var layer = new Kinetic.Layer();

var builtNames = viewClass.textIdView();
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