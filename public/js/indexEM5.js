(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* jshint esnext: true */
/* global NodeList, document, console */

'use strict';

NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]; // polifill for the for..of.. loop

function getData() {
  var data = document.querySelectorAll('#data div');
  var ids = [];
  var names = [];
  var imgs = [];
  var numbers = [];
  var playerData = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var parentNode = _step.value;

      //console.log(parentNode);
      //console.log(parentNode.childNodes);
      ids.push(parentNode.id);

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
            names.push(childNode.innerHTML);
          } else if (childNode.classList !== undefined && childNode.classList[0] === 'img') {
            imgs.push(childNode.innerHTML);
          } else if (childNode.classList !== undefined && childNode.classList[0] === 'number') {
            numbers.push(childNode.innerHTML);
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

  names.forEach(function (e, i) {
    playerData.push({ 'id': ids[i], 'name': names[i], 'img': imgs[i], 'number': numbers[i] });
  });

  console.log(playerData);
}

getData();

var canvas = document.querySelector('#startingEleven');
var context = canvas.getContext('2d');

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9Sb21hbm8uRmlydGVybWFpc3p0ZS9Eb2N1bWVudHMvR2l0SHViL2Fyc2VuYWwtc3RhcnRpbmctbGluZXVwL3B1YmxpYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDR0EsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRXZFLFNBQVMsT0FBTyxHQUFHO0FBQ2pCLE1BQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNsRCxNQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDYixNQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixNQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZCxNQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDakIsTUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDOzs7Ozs7O0FBRXBCLHlCQUFzQixJQUFJLDhIQUFFO1VBQXBCLFVBQVU7Ozs7QUFHaEIsU0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7O0FBRXhCLFVBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7Ozs7OztBQUN2Qyw4QkFBcUIsVUFBVSxtSUFBRTtjQUF6QixTQUFTOzs7Ozs7QUFLZixjQUFHLFNBQVMsQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxFQUFFO0FBQ3pFLGlCQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztXQUNqQyxNQUNJLElBQUcsU0FBUyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDN0UsZ0JBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1dBQ2hDLE1BQ0ksSUFBRyxTQUFTLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtBQUNoRixtQkFBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7V0FDbkM7U0FDRjs7Ozs7Ozs7Ozs7Ozs7O0tBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxPQUFLLENBQUMsT0FBTyxDQUFDLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUMzQixjQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7R0FDekYsQ0FBQyxDQUFDOztBQUVILFNBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Q0FFekI7O0FBRUQsT0FBTyxFQUFFLENBQUM7O0FBRVYsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZELElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xyXG4vKiBnbG9iYWwgTm9kZUxpc3QsIGRvY3VtZW50LCBjb25zb2xlICovXHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEFycmF5LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdOyAvLyBwb2xpZmlsbCBmb3IgdGhlIGZvci4ub2YuLiBsb29wXHJcblxyXG5mdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gIGxldCBkYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RhdGEgZGl2Jyk7XHJcbiAgbGV0IGlkcyA9IFtdO1xyXG4gIGxldCBuYW1lcyA9IFtdO1xyXG4gIGxldCBpbWdzID0gW107XHJcbiAgbGV0IG51bWJlcnMgPSBbXTtcclxuICBsZXQgcGxheWVyRGF0YSA9IFtdO1xyXG5cclxuICBmb3IobGV0IHBhcmVudE5vZGUgb2YgZGF0YSkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhwYXJlbnROb2RlKTtcclxuICAgIC8vY29uc29sZS5sb2cocGFyZW50Tm9kZS5jaGlsZE5vZGVzKTtcclxuICAgIGlkcy5wdXNoKHBhcmVudE5vZGUuaWQpO1xyXG5cclxuICAgIGxldCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xyXG4gICAgZm9yKGxldCBjaGlsZE5vZGUgb2YgY2hpbGROb2Rlcykge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGNoaWxkTm9kZSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coY2hpbGROb2RlLmNsYXNzTGlzdCk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coY2hpbGROb2RlLmlubmVySFRNTCk7XHJcblxyXG4gICAgICBpZihjaGlsZE5vZGUuY2xhc3NMaXN0ICE9PSB1bmRlZmluZWQgJiYgY2hpbGROb2RlLmNsYXNzTGlzdFswXSA9PT0gJ25hbWUnKSB7XHJcbiAgICAgICAgbmFtZXMucHVzaChjaGlsZE5vZGUuaW5uZXJIVE1MKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGNoaWxkTm9kZS5jbGFzc0xpc3QgIT09IHVuZGVmaW5lZCAmJiBjaGlsZE5vZGUuY2xhc3NMaXN0WzBdID09PSAnaW1nJykge1xyXG4gICAgICAgIGltZ3MucHVzaChjaGlsZE5vZGUuaW5uZXJIVE1MKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGNoaWxkTm9kZS5jbGFzc0xpc3QgIT09IHVuZGVmaW5lZCAmJiBjaGlsZE5vZGUuY2xhc3NMaXN0WzBdID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIG51bWJlcnMucHVzaChjaGlsZE5vZGUuaW5uZXJIVE1MKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihlLCBpKSB7XHJcbiAgICBwbGF5ZXJEYXRhLnB1c2goeydpZCc6IGlkc1tpXSwgJ25hbWUnOiBuYW1lc1tpXSwgJ2ltZyc6IGltZ3NbaV0sICdudW1iZXInOiBudW1iZXJzW2ldfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHBsYXllckRhdGEpO1xyXG5cclxufVxyXG5cclxuZ2V0RGF0YSgpO1xyXG5cclxudmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydGluZ0VsZXZlbicpO1xyXG52YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpOyJdfQ==
