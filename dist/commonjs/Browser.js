'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////////////////////////////////////////////////
// Browser Utils
//
/////////////////////////////////////////////////////////
var Browser = function () {
  function Browser() {
    (0, _classCallCheck3.default)(this, Browser);
  }

  (0, _createClass3.default)(Browser, null, [{
    key: 'isOpera',


    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
    value: function isOpera() {
      return !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    }

    // Firefox 1.0+

  }, {
    key: 'isFirefox',
    value: function isFirefox() {
      return typeof InstallTrigger !== 'undefined';
    }

    // Safari 3.0+

  }, {
    key: 'isSafari',
    value: function isSafari() {

      var hasPushNotif = function hasPushNotif(p) {
        return p.toString() === "[object SafariRemoteNotification]";
      };

      var htmlElement = Object.prototype.toString.call(window.HTMLElement);

      var push = !window['safari'] || safari.pushNotification;

      return htmlElement.indexOf('Constructor') > 0 || hasPushNotif(push);
    }

    // Internet Explorer 6-11

  }, {
    key: 'isIE',
    value: function isIE() {
      /*@cc_on!@*/
      return false || !!document.documentMode;
    }

    // Edge 20+

  }, {
    key: 'isEdge',
    value: function isEdge() {
      return !Browser.isIE() && !!window.StyleMedia;
    }

    // Chrome 1+

  }, {
    key: 'isChrome',
    value: function isChrome() {
      return !!window.chrome && !!window.chrome.webstore;
    }

    // Blink engine detection

  }, {
    key: 'isBlink',
    value: function isBlink() {
      return (Browser.isChrome() || Browser.isOpera()) && !!window.CSS;
    }
  }, {
    key: 'getUserAgent',
    value: function getUserAgent() {
      return navigator.userAgent;
    }
  }, {
    key: 'isAndroid',
    value: function isAndroid() {
      return Browser.getUserAgent().match(/Android/i);
    }
  }, {
    key: 'isBlackBerry',
    value: function isBlackBerry() {
      return Browser.getUserAgent().match(/BlackBerry/i);
    }
  }, {
    key: 'isIOS',
    value: function isIOS() {
      return Browser.getUserAgent().match(/iPhone|iPad|iPod/i);
    }
  }, {
    key: 'isOpera',
    value: function isOpera() {
      return Browser.getUserAgent().match(/Opera Mini/i);
    }
  }, {
    key: 'isWindows',
    value: function isWindows() {
      return Browser.isWindowsDesktop() || Browser.isWindowsMobile();
    }
  }, {
    key: 'isWindowsMobile',
    value: function isWindowsMobile() {
      return Browser.getUserAgent().match(/IEMobile/i);
    }
  }, {
    key: 'isWindowsDesktop',
    value: function isWindowsDesktop() {
      return Browser.getUserAgent().match(/WPDesktop/i);
    }
  }, {
    key: 'isMobile',
    value: function isMobile() {

      return Browser.isWindowsMobile() || Browser.isBlackBerry() || Browser.isAndroid() || Browser.isIOS();
    }
  }]);
  return Browser;
}();

exports.default = Browser;