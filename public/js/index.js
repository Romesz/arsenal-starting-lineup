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
  coordinates() {
    let cooArray = [];
    // creating the coordinates
    return cooArray;
  }
}

var getDataClass = new getData();
getDataClass.collectData();
var data = getDataClass.returnData();

var viewClass = new prepareData(data);

var stage = new Kinetic.Stage({
  container: 'startingEleven',
  width: 600,
  height: 500
});

var layer = new Kinetic.Layer();

var builtNames = viewClass.textIdView();
builtNames.forEach(function(value, i) {
  let nodeName = value;
  nodeName = new Kinetic.Text({
    x: 15 * i,
    y: 15 * i,
    text: nodeName,
    fontSize: 18,
    fontFamily: 'Calibri',
    fill: 'blue',
    draggable: true
  });

  layer.add(nodeName);
});

stage.add(layer);