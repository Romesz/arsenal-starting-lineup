(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* jshint esnext: true */
/* global NodeList, document, console, Kinetic */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]; // polifill for the for..of.. loop

var getData = (function () {
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

var prepareData = (function () {
  function prepareData(data) {
    _classCallCheck(this, prepareData);

    this.data = data;
  }

  _createClass(prepareData, [{
    key: 'textIdView',
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
  }]);

  return prepareData;
})();

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
builtNames.forEach(function (value, i) {
  var nodeName = value;
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9yb21hbm8vRG9jdW1lbnRzL0dpdEh1Yi9hcnNlbmFsLXN0YXJ0aW5nLWxpbmV1cC9wdWJsaWMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUNHQSxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7SUFFakUsT0FBTztBQVFBLFdBUlAsT0FBTyxHQVFHOzBCQVJWLE9BQU87O0FBU1QsUUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDbkQsUUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDZCxRQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixRQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNmLFFBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLFFBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0dBQ3RCOztlQWZHLE9BQU87O1dBaUJBLHVCQUFHOzs7Ozs7QUFDWiw2QkFBc0IsSUFBSSxDQUFDLElBQUksOEhBQUU7Y0FBekIsVUFBVTs7OztBQUdoQixjQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7O0FBRTdCLGNBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7Ozs7OztBQUN2QyxrQ0FBcUIsVUFBVSxtSUFBRTtrQkFBekIsU0FBUzs7Ozs7O0FBS2Ysa0JBQUcsU0FBUyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLEVBQUU7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QUFDckIsUUFBSSxFQUFFLE1BQU07QUFDWixhQUFTLEVBQUUsSUFBSTtHQUNoQixDQUFDLENBQUM7O0FBRUgsT0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUNyQixDQUFDLENBQUM7O0FBRUgsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXHJcbi8qIGdsb2JhbCBOb2RlTGlzdCwgZG9jdW1lbnQsIGNvbnNvbGUsIEtpbmV0aWMgKi9cclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gQXJyYXkucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl07IC8vIHBvbGlmaWxsIGZvciB0aGUgZm9yLi5vZi4uIGxvb3BcclxuXHJcbmNsYXNzIGdldERhdGEge1xyXG4gIGRhdGE7XHJcbiAgaWRzO1xyXG4gIG5hbWVzO1xyXG4gIGltZ3M7XHJcbiAgbnVtYmVycztcclxuICBwbGF5ZXJEYXRhO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5kYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RhdGEgZGl2Jyk7XHJcbiAgICB0aGlzLmlkcyA9IFtdO1xyXG4gICAgdGhpcy5uYW1lcyA9IFtdO1xyXG4gICAgdGhpcy5pbWdzID0gW107XHJcbiAgICB0aGlzLm51bWJlcnMgPSBbXTtcclxuICAgIHRoaXMucGxheWVyRGF0YSA9IFtdO1xyXG4gIH1cclxuICBcclxuICBjb2xsZWN0RGF0YSgpIHtcclxuICAgIGZvcihsZXQgcGFyZW50Tm9kZSBvZiB0aGlzLmRhdGEpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhwYXJlbnROb2RlKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhwYXJlbnROb2RlLmNoaWxkTm9kZXMpO1xyXG4gICAgICB0aGlzLmlkcy5wdXNoKHBhcmVudE5vZGUuaWQpO1xyXG5cclxuICAgICAgbGV0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmNoaWxkTm9kZXM7XHJcbiAgICAgIGZvcihsZXQgY2hpbGROb2RlIG9mIGNoaWxkTm9kZXMpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNoaWxkTm9kZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjaGlsZE5vZGUuY2xhc3NMaXN0KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNoaWxkTm9kZS5pbm5lckhUTUwpO1xyXG5cclxuICAgICAgICBpZihjaGlsZE5vZGUuY2xhc3NMaXN0ICE9PSB1bmRlZmluZWQgJiYgY2hpbGROb2RlLmNsYXNzTGlzdFswXSA9PT0gJ25hbWUnKSB7XHJcbiAgICAgICAgICB0aGlzLm5hbWVzLnB1c2goY2hpbGROb2RlLmlubmVySFRNTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoY2hpbGROb2RlLmNsYXNzTGlzdCAhPT0gdW5kZWZpbmVkICYmIGNoaWxkTm9kZS5jbGFzc0xpc3RbMF0gPT09ICdpbWcnKSB7XHJcbiAgICAgICAgICB0aGlzLmltZ3MucHVzaChjaGlsZE5vZGUuaW5uZXJIVE1MKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjaGlsZE5vZGUuY2xhc3NMaXN0ICE9PSB1bmRlZmluZWQgJiYgY2hpbGROb2RlLmNsYXNzTGlzdFswXSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgIHRoaXMubnVtYmVycy5wdXNoKGNoaWxkTm9kZS5pbm5lckhUTUwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSAgXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybkRhdGEoKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICB0aGlzLm5hbWVzLmZvckVhY2goZnVuY3Rpb24oZSwgaSkge1xyXG4gICAgICB0aGF0LnBsYXllckRhdGEucHVzaCh7J2lkJzogdGhhdC5pZHNbaV0sICduYW1lJzogdGhhdC5uYW1lc1tpXSwgJ2ltZyc6IHRoYXQuaW1nc1tpXSwgJ251bWJlcic6IHRoYXQubnVtYmVyc1tpXX0pO1xyXG4gICAgICAvLyB0aGlzIGludGVyZmVyZXMgd2l0aCB0aGUgc2NvcGUgb2YgdGhlIGZvckVhY2hcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGF0LnBsYXllckRhdGE7ICBcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIHByZXBhcmVEYXRhIHtcclxuICBkYXRhO1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG4gIFxyXG4gIHRleHRJZFZpZXcoKSB7XHJcbiAgICBsZXQgdGV4dHNWYWx1ZSA9IFtdOyBcclxuICAgIGZvcihsZXQgdmFsdWUgb2YgdGhpcy5kYXRhKSB7XHJcbiAgICAgIHRleHRzVmFsdWUucHVzaCh2YWx1ZS5udW1iZXIgKyAnIDogJyArIHZhbHVlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0c1ZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxudmFyIGdldERhdGFDbGFzcyA9IG5ldyBnZXREYXRhKCk7XHJcbmdldERhdGFDbGFzcy5jb2xsZWN0RGF0YSgpO1xyXG52YXIgZGF0YSA9IGdldERhdGFDbGFzcy5yZXR1cm5EYXRhKCk7XHJcblxyXG52YXIgdmlld0NsYXNzID0gbmV3IHByZXBhcmVEYXRhKGRhdGEpO1xyXG5cclxudmFyIHN0YWdlID0gbmV3IEtpbmV0aWMuU3RhZ2Uoe1xyXG4gIGNvbnRhaW5lcjogJ3N0YXJ0aW5nRWxldmVuJyxcclxuICB3aWR0aDogNjAwLFxyXG4gIGhlaWdodDogNTAwXHJcbn0pO1xyXG5cclxudmFyIGxheWVyID0gbmV3IEtpbmV0aWMuTGF5ZXIoKTtcclxuXHJcbnZhciBidWlsdE5hbWVzID0gdmlld0NsYXNzLnRleHRJZFZpZXcoKTtcclxuYnVpbHROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBpKSB7XHJcbiAgbGV0IG5vZGVOYW1lID0gdmFsdWU7XHJcbiAgbm9kZU5hbWUgPSBuZXcgS2luZXRpYy5UZXh0KHtcclxuICAgIHg6IDE1ICogaSxcclxuICAgIHk6IDE1ICogaSxcclxuICAgIHRleHQ6IG5vZGVOYW1lLFxyXG4gICAgZm9udFNpemU6IDE4LFxyXG4gICAgZm9udEZhbWlseTogJ0NhbGlicmknLFxyXG4gICAgZmlsbDogJ2JsdWUnLFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlXHJcbiAgfSk7XHJcblxyXG4gIGxheWVyLmFkZChub2RlTmFtZSk7XHJcbn0pO1xyXG5cclxuc3RhZ2UuYWRkKGxheWVyKTsiXX0=
