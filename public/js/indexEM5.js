(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* jshint esnext: true */
/* global NodeList, document, console, Kinetic */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]; // polifill for the for..of.. loop
/**
* @class getData
* This class gets the data form backend
*/

var getData = (function () {

  /**
  * @method constructor
  */

  function getData() {
    _classCallCheck(this, getData);

    this.data = document.querySelectorAll('#data div');
    this.ids = [];
    this.names = [];
    this.imgs = [];
    this.numbers = [];
    this.playerData = [];
  }

  _createClass(getData, [{
    key: 'collectData',

    /**
    * @method collectData
    * collecting the data
    */
    value: function collectData() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var parentNode = _step.value;

          //console.log(parentNode);
          //console.log(parentNode.childNodes);
          this.ids.push(parentNode.id);

          var childNodes = parentNode.childNodes;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = childNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var childNode = _step2.value;

              //console.log(childNode);
              //console.log(childNode.classList);
              //console.log(childNode.innerHTML);

              if (childNode.classList !== undefined && childNode.classList[0] === 'name') {
                this.names.push(childNode.innerHTML);
              } else if (childNode.classList !== undefined && childNode.classList[0] === 'img') {
                this.imgs.push(childNode.innerHTML);
              } else if (childNode.classList !== undefined && childNode.classList[0] === 'number') {
                this.numbers.push(childNode.innerHTML);
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                _iterator2['return']();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'returnData',

    /**
    * @method returnData
    * retunrning the data
    * @return that.playerData {Array}
    */
    value: function returnData() {
      var that = this;
      this.names.forEach(function (e, i) {
        that.playerData.push({ 'id': that.ids[i], 'name': that.names[i], 'img': that.imgs[i], 'number': that.numbers[i] });
        // this interferes with the scope of the forEach
      });

      return that.playerData;
    }
  }]);

  return getData;
})();

/**
* @class prepareData
* This class prepares the view for canvas
*/

var prepareData = (function () {
  /**
  * @method constructor
  * @param data {Array}
  */

  function prepareData(data) {
    _classCallCheck(this, prepareData);

    this.data = data;
  }

  _createClass(prepareData, [{
    key: 'textIdView',

    /**
    * @method textIdView
    * Createing the view based on the number and name
    * @return textValue {Array}
    */
    value: function textIdView() {
      var textsValue = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var value = _step3.value;

          textsValue.push(value.number + ' : ' + value.name);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3['return']) {
            _iterator3['return']();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return textsValue;
    }
  }, {
    key: 'coordinates',

    /**
    * @method coordinates
    * Createing the coordinates for the view
    * @return cooArray {Array}
    */
    value: function coordinates(i, height) {
      var x = undefined,
          y = undefined;
      switch (i) {
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
      return { 'x': x, 'y': y };
    }
  }]);

  return prepareData;
})();

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
builtNames.forEach(function (value, i) {
  var nodeName = value;
  var x = viewClass.coordinates(i, stage.height()).x;
  var y = viewClass.coordinates(i, stage.height()).y;

  if (i > 10) {
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9Sb21hbm8uRmlydGVybWFpc3p0ZS9Eb2N1bWVudHMvR2l0SHViL2Fyc2VuYWwtc3RhcnRpbmctbGluZXVwL3B1YmxpYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQ0dBLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7SUFLakUsT0FBTzs7Ozs7O0FBV0EsV0FYUCxPQUFPLEdBV0c7MEJBWFYsT0FBTzs7QUFZVCxRQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuRCxRQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNkLFFBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFFBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2YsUUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDbEIsUUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7R0FDdEI7O2VBbEJHLE9BQU87Ozs7Ozs7V0F3QkEsdUJBQUc7Ozs7OztBQUNaLDZCQUFzQixJQUFJLENBQUMsSUFBSSw4SEFBRTtjQUF6QixVQUFVOzs7O0FBR2hCLGNBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7QUFFN0IsY0FBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQzs7Ozs7O0FBQ3ZDLGtDQUFxQixVQUFVLG1JQUFFO2tCQUF6QixTQUFTOzs7Ozs7QUFLZixrQkFBRyxTQUFTLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxD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Z0JBQWdCO0FBQzNCLE9BQUssRUFBRSxJQUFJO0FBQ1gsUUFBTSxFQUFFLEdBQUc7Q0FDWixDQUFDLENBQUM7O0FBRUgsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7O0FBRWhDLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN4QyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVMsS0FBSyxFQUFFLENBQUMsRUFBRTtBQUNwQyxNQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDckIsTUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25ELE1BQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFbkQsTUFBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO0FBQ1QsS0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQSxHQUFJLEVBQUUsQ0FBQztHQUNsQjs7QUFFRCxVQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQzFCLEtBQUMsRUFBRSxDQUFDO0FBQ0osS0FBQyxFQUFFLENBQUM7QUFDSixRQUFJLEVBQUUsUUFBUTtBQUNkLFlBQVEsRUFBRSxFQUFFO0FBQ1osY0FBVSxFQUFFLFNBQVM7QUFDckIsUUFBSSxFQUFFLE1BQU07QUFDWixhQUFTLEVBQUUsSUFBSTtHQUNoQixDQUFDLENBQUM7O0FBRUgsT0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUNyQixDQUFDLENBQUM7O0FBRUgsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXHJcbi8qIGdsb2JhbCBOb2RlTGlzdCwgZG9jdW1lbnQsIGNvbnNvbGUsIEtpbmV0aWMgKi9cclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gQXJyYXkucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl07IC8vIHBvbGlmaWxsIGZvciB0aGUgZm9yLi5vZi4uIGxvb3BcclxuLyoqXHJcbiogQGNsYXNzIGdldERhdGFcclxuKiBUaGlzIGNsYXNzIGdldHMgdGhlIGRhdGEgZm9ybSBiYWNrZW5kXHJcbiovXHJcbmNsYXNzIGdldERhdGEge1xyXG4gIGRhdGE7XHJcbiAgaWRzO1xyXG4gIG5hbWVzO1xyXG4gIGltZ3M7XHJcbiAgbnVtYmVycztcclxuICBwbGF5ZXJEYXRhO1xyXG5cclxuICAvKipcclxuICAqIEBtZXRob2QgY29uc3RydWN0b3JcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5kYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RhdGEgZGl2Jyk7XHJcbiAgICB0aGlzLmlkcyA9IFtdO1xyXG4gICAgdGhpcy5uYW1lcyA9IFtdO1xyXG4gICAgdGhpcy5pbWdzID0gW107XHJcbiAgICB0aGlzLm51bWJlcnMgPSBbXTtcclxuICAgIHRoaXMucGxheWVyRGF0YSA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBAbWV0aG9kIGNvbGxlY3REYXRhXHJcbiAgKiBjb2xsZWN0aW5nIHRoZSBkYXRhXHJcbiAgKi9cclxuICBjb2xsZWN0RGF0YSgpIHtcclxuICAgIGZvcihsZXQgcGFyZW50Tm9kZSBvZiB0aGlzLmRhdGEpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhwYXJlbnROb2RlKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhwYXJlbnROb2RlLmNoaWxkTm9kZXMpO1xyXG4gICAgICB0aGlzLmlkcy5wdXNoKHBhcmVudE5vZGUuaWQpO1xyXG5cclxuICAgICAgbGV0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmNoaWxkTm9kZXM7XHJcbiAgICAgIGZvcihsZXQgY2hpbGROb2RlIG9mIGNoaWxkTm9kZXMpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNoaWxkTm9kZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjaGlsZE5vZGUuY2xhc3NMaXN0KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNoaWxkTm9kZS5pbm5lckhUTUwpO1xyXG5cclxuICAgICAgICBpZihjaGlsZE5vZGUuY2xhc3NMaXN0ICE9PSB1bmRlZmluZWQgJiYgY2hpbGROb2RlLmNsYXNzTGlzdFswXSA9PT0gJ25hbWUnKSB7XHJcbiAgICAgICAgICB0aGlzLm5hbWVzLnB1c2goY2hpbGROb2RlLmlubmVySFRNTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoY2hpbGROb2RlLmNsYXNzTGlzdCAhPT0gdW5kZWZpbmVkICYmIGNoaWxkTm9kZS5jbGFzc0xpc3RbMF0gPT09ICdpbWcnKSB7XHJcbiAgICAgICAgICB0aGlzLmltZ3MucHVzaChjaGlsZE5vZGUuaW5uZXJIVE1MKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjaGlsZE5vZGUuY2xhc3NMaXN0ICE9PSB1bmRlZmluZWQgJiYgY2hpbGROb2RlLmNsYXNzTGlzdFswXSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgIHRoaXMubnVtYmVycy5wdXNoKGNoaWxkTm9kZS5pbm5lckhUTUwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSAgXHJcbiAgfVxyXG4gXHJcbiAgLyoqXHJcbiAgKiBAbWV0aG9kIHJldHVybkRhdGFcclxuICAqIHJldHVucm5pbmcgdGhlIGRhdGFcclxuICAqIEByZXR1cm4gdGhhdC5wbGF5ZXJEYXRhIHtBcnJheX1cclxuICAqL1xyXG4gIHJldHVybkRhdGEoKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICB0aGlzLm5hbWVzLmZvckVhY2goZnVuY3Rpb24oZSwgaSkge1xyXG4gICAgICB0aGF0LnBsYXllckRhdGEucHVzaCh7J2lkJzogdGhhdC5pZHNbaV0sICduYW1lJzogdGhhdC5uYW1lc1tpXSwgJ2ltZyc6IHRoYXQuaW1nc1tpXSwgJ251bWJlcic6IHRoYXQubnVtYmVyc1tpXX0pO1xyXG4gICAgICAvLyB0aGlzIGludGVyZmVyZXMgd2l0aCB0aGUgc2NvcGUgb2YgdGhlIGZvckVhY2hcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGF0LnBsYXllckRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuKiBAY2xhc3MgcHJlcGFyZURhdGFcclxuKiBUaGlzIGNsYXNzIHByZXBhcmVzIHRoZSB2aWV3IGZvciBjYW52YXNcclxuKi9cclxuY2xhc3MgcHJlcGFyZURhdGEge1xyXG4gIGRhdGE7XHJcbiAgLyoqXHJcbiAgKiBAbWV0aG9kIGNvbnN0cnVjdG9yXHJcbiAgKiBAcGFyYW0gZGF0YSB7QXJyYXl9XHJcbiAgKi9cclxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBAbWV0aG9kIHRleHRJZFZpZXdcclxuICAqIENyZWF0ZWluZyB0aGUgdmlldyBiYXNlZCBvbiB0aGUgbnVtYmVyIGFuZCBuYW1lXHJcbiAgKiBAcmV0dXJuIHRleHRWYWx1ZSB7QXJyYXl9XHJcbiAgKi9cclxuICB0ZXh0SWRWaWV3KCkge1xyXG4gICAgbGV0IHRleHRzVmFsdWUgPSBbXTtcclxuICAgIGZvcihsZXQgdmFsdWUgb2YgdGhpcy5kYXRhKSB7XHJcbiAgICAgIHRleHRzVmFsdWUucHVzaCh2YWx1ZS5udW1iZXIgKyAnIDogJyArIHZhbHVlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0c1ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBAbWV0aG9kIGNvb3JkaW5hdGVzXHJcbiAgKiBDcmVhdGVpbmcgdGhlIGNvb3JkaW5hdGVzIGZvciB0aGUgdmlld1xyXG4gICogQHJldHVybiBjb29BcnJheSB7QXJyYXl9XHJcbiAgKi9cclxuICBjb29yZGluYXRlcyhpLCBoZWlnaHQpIHtcclxuICAgIGxldCB4LCB5O1xyXG4gICAgc3dpdGNoKGkpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHggPSAxNTtcclxuICAgICAgICB5ID0gaGVpZ2h0IC8gMiAtIDUwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgeCA9IDIwMDtcclxuICAgICAgICB5ID0gMTAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgeCA9IDE4MDtcclxuICAgICAgICB5ID0gaGVpZ2h0IC8gMiAtIDEwMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHggPSAxODA7XHJcbiAgICAgICAgeSA9IGhlaWdodCAvIDI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICB4ID0gMjAwO1xyXG4gICAgICAgIHkgPSBoZWlnaHQgLSAyMDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNTpcclxuICAgICAgICB4ID0gNDAwO1xyXG4gICAgICAgIHkgPSAxMDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNjpcclxuICAgICAgICB4ID0gMzgwO1xyXG4gICAgICAgIHkgPSBoZWlnaHQgLyAyIC0gMTAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDc6XHJcbiAgICAgICAgeCA9IDM4MDtcclxuICAgICAgICB5ID0gaGVpZ2h0IC8gMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA4OlxyXG4gICAgICAgIHggPSA0MDA7XHJcbiAgICAgICAgeSA9IGhlaWdodCAtIDIwMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA5OlxyXG4gICAgICAgIHggPSA1NTA7XHJcbiAgICAgICAgeSA9IGhlaWdodCAvIDI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgeCA9IDU1MDtcclxuICAgICAgICB5ID0gaGVpZ2h0IC8gMiAtIDEwMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB4ID0gOTAwO1xyXG4gICAgICAgIHkgPSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsneCc6IHgsICd5JzogeX07XHJcbiAgfVxyXG59XHJcblxyXG52YXIgZ2V0RGF0YUNsYXNzID0gbmV3IGdldERhdGEoKTtcclxuZ2V0RGF0YUNsYXNzLmNvbGxlY3REYXRhKCk7XHJcbnZhciBkYXRhID0gZ2V0RGF0YUNsYXNzLnJldHVybkRhdGEoKTtcclxuXHJcbnZhciB2aWV3Q2xhc3MgPSBuZXcgcHJlcGFyZURhdGEoZGF0YSk7XHJcblxyXG52YXIgc3RhZ2UgPSBuZXcgS2luZXRpYy5TdGFnZSh7XHJcbiAgY29udGFpbmVyOiAnc3RhcnRpbmdFbGV2ZW4nLFxyXG4gIHdpZHRoOiAxMjAwLFxyXG4gIGhlaWdodDogNjAwXHJcbn0pO1xyXG5cclxudmFyIGxheWVyID0gbmV3IEtpbmV0aWMuTGF5ZXIoKTtcclxuXHJcbnZhciBidWlsdE5hbWVzID0gdmlld0NsYXNzLnRleHRJZFZpZXcoKTtcclxuYnVpbHROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBpKSB7XHJcbiAgbGV0IG5vZGVOYW1lID0gdmFsdWU7XHJcbiAgbGV0IHggPSB2aWV3Q2xhc3MuY29vcmRpbmF0ZXMoaSwgc3RhZ2UuaGVpZ2h0KCkpLng7XHJcbiAgbGV0IHkgPSB2aWV3Q2xhc3MuY29vcmRpbmF0ZXMoaSwgc3RhZ2UuaGVpZ2h0KCkpLnk7XHJcblxyXG4gIGlmKGkgPiAxMCkge1xyXG4gICAgeSA9IChpIC0gOSkgKiAxNTtcclxuICB9XHJcblxyXG4gIG5vZGVOYW1lID0gbmV3IEtpbmV0aWMuVGV4dCh7XHJcbiAgICB4OiB4LFxyXG4gICAgeTogeSxcclxuICAgIHRleHQ6IG5vZGVOYW1lLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgZm9udEZhbWlseTogJ0NhbGlicmknLFxyXG4gICAgZmlsbDogJ2JsdWUnLFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlXHJcbiAgfSk7XHJcblxyXG4gIGxheWVyLmFkZChub2RlTmFtZSk7XHJcbn0pO1xyXG5cclxuc3RhZ2UuYWRkKGxheWVyKTsiXX0=
