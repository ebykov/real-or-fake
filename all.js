var RoF =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Configuration
 */

var secure = window.location.protocol === 'https:';

module.exports = {
    name: 'likely',
    prefix: 'likely__',
    secure: secure,
    protocol: secure ? 'https:' : 'http:',
    storageKey: 'likelyServices',
    breakpoint: 680
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(0);

var div = document.createElement('div'),
    gid = 0;

var dom = module.exports = {
    /**
     * Wrap SVG coords from data object into SVG tag
     *
     * @param {String} coords
     */
    wrapSVG: function (coords) {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" ' + 'viewBox="0 0 16 16"><path d="M' + coords + 'z"/></svg>';
    },

    /**
     * Create node from HTML
     *
     * @param {String} html
     */
    createNode: function (html) {
        div.innerHTML = html;

        return div.children[0];
    },

    /**
     * Load script
     *
     * @param {String} url
     */
    getScript: function (url) {
        var script = document.createElement('script'),
            head   = document.head;

        script.type = 'text/javascript';
        script.src  = url;

        head.appendChild(script);
        head.removeChild(script);
    },

    /**
     * Get JSON
     *
     * @param {String} url
     * @param {Function} callback
     */
    getJSON: function (url, callback) {
        var name = encodeURIComponent('random_fun_' + (++gid));

        url = url.replace(
            /callback=(\?)/,
            'callback=' + name
        );

        window[name] = callback;

        dom.getScript(url);
    },

    /**
     * Find first node by selector
     *
     * @param {String} selector
     * @param {Node} node
     * @return {Node}
     */
    find: function (selector, node) {
        return (node || document).querySelector(selector);
    },

    /**
     * Find all nodes by selector
     *
     * @param {String} selector
     * @param {Node} node
     * @return {NodeList}
     */
    findAll: function (selector, node) {
        return (node || document).querySelectorAll(selector);
    },

    /**
     * Check mobile media query
     */
    isMobile: function() {
        return !window.matchMedia('(min-width: ' + config.breakpoint + 'px)').matches;
    },

    /**
     * Open the popup
     *
     * @param {String} url
     * @param {String} winId
     * @param {Number} width,
     * @param {Number} height
     */
    openPopup: function (url, winId, width, height) {
        var left = Math.round(screen.width / 2 - width / 2),
            top  = 0;

        if (screen.height > height) {
            top = Math.round(screen.height / 3 - height / 2);
        }

        var options = 'left='    + left +
                      ',top='    + top +
                      ',width='  + width +
                      ',height=' + height +
                      ',personalbar=0,toolbar=0,scrollbars=1,resizable=1';

        var win = window.open(url, winId, options);

        // if (!win) {
        //     location.href = url;
        //     return location.href;
        // }

        // win.focus();

        return win;
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var bool = {yes: true, no: false},
    rUrl = /(https?|ftp):\/\/[^\s\/$.?#].[^\s]*/gi;

/**
 * @internal
 */
var utils = {
    /**
     * Simple $.each, only for objects
     *
     * @param {Object} object
     * @param {Function} callback
     */
    each: function (object, callback) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                callback(object[key], key);
            }
        }
    },

    /**
     * Convert array-like object to array
     *
     * @param {Object} arrayLike
     * @return {Array}
     */
    toArray: function (arrayLike) {
        return Array.prototype.slice.call(arrayLike);
    },

    /**
     * Merge given dictionaries (objects) into one object
     *
     * @param {Object} ...objects
     * @return {Object}
     */
    merge: function () {
        var result = {};

        for (var i = 0; i < arguments.length; i ++) {
            var arg = arguments[i];

            if (arg) {
                for (var key in arg) {
                    result[key] = arg[key];
                }
            }
        }

        return result;
    },

    /**
     * Extend one (target) object by other (subject)
     *
     * @param {Object} target
     * @param {Object} subject
     */
    extend: function (target, subject) {
        for (var key in subject) {
            target[key] = subject[key];
        }
    },

    /**
     * Check new flexbox syntax support
     */
    flexboxSupport: function(element, name){
        var d = document, f = 'flex', fw = '-webkit-'+f, e = d.createElement('b'), c;

        try {
            e.style.display = fw;
            e.style.display = f;
            c = (e.style.display == f || e.style.display == fw) ? f : 'no-'+f;
        } catch(e) {
            c = 'no-'+f;
        }

        element.className += ' ' + name + '--' + c;
    },

    /**
     * Return node.dataset or plain object for IE 10without setters
     * based on https://gist.github.com/brettz9/4093766#file_html5_dataset.js
     *
     * @param {Node} node
     * @return {Object}
     */
    getDataset: function (node) {
        if (typeof node.dataset === 'object') {
            return node.dataset;
        }

        var i,
            dataset = {},
            attributes = node.attributes,
            attribute,
            attributeName;

        var toUpperCase = function (n0) {
            return n0.charAt(1).toUpperCase();
        };

        for (i = attributes.length - 1; i >= 0; i--) {
            attribute = attributes[i];
            if (attribute && attribute.name &&
                (/^data-\w[\w\-]*$/).test(attribute.name)) {
                    attributeName = attribute.name.substr(5).replace(/-./g, toUpperCase);
                    dataset[attributeName] = attribute.value;
                }
        }

        return dataset;
    },

    /**
     * Convert "yes" and "no" to true and false.
     *
     * @param {Node} node
     */
    bools: function (node) {
        var result = {},
            data   = utils.getDataset(node);

        for (var key in data) {
            var value = data[key];

            result[key] = bool[value] || value;
        }

        return result;
    },

    /**
     * Map object keys in string to its values
     *
     * @param {String} text
     * @param {Object} data
     * @return {String}
     */
    template: function (text, data) {
        return !text ? '' : text.replace(/\{([^\}]+)\}/g, function (value, key) {
            return key in data ? data[key] : value;
        });
    },

    /**
     * Map object keys in URL to its values
     *
     * @param {String} text
     * @param {Object} data
     * @return {String}
     */
    makeUrl: function (text, data) {
        for (var key in data) {
            data[key] = encodeURIComponent(data[key]);
        }

        return utils.template(text, data);
    },

    /**
     * Create query string out of data
     *
     * @param {Object} data
     * @return {String}
     */
    query: function (data) {
        var filter = encodeURIComponent,
            query  = [];

        for (var key in data) {
            if (typeof data[key] === 'object') continue;

            query.push(filter(key) + '=' + filter(data[key]));
        }

        return query.join('&');
    },

    /**
     * Set value in object using dot-notation
     *
     * @param {Object} object
     * @param {String} key
     * @param {Object} value
     */
    set: function (object, key, value) {
        var frags = key.split('.'),
            last  = null;

        frags.forEach(function (key, index) {
            if (typeof object[key] === 'undefined') {
                object[key] = {};
            }

            if (index !== frags.length - 1) {
                object = object[key];
            }

            last = key;
        });

        object[last] = value;
    }
};

module.exports = utils;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendPageView = exports.sendEvent = undefined;

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONSOLE_STYLE = 'color: #E87E04';

/**
 * Send analytics events via GTM
 * @param {String} label - event label
 * @param {String} action - event action ("Click" by default)
 */
var sendEvent = exports.sendEvent = function sendEvent(label) {
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Click';

    var value = _config2.default.analyticsCategory + ' \u2014 ' + label + ' \u2014 ' + action;

    if (false) {}

    if (window.dataLayer !== undefined && _config2.default.analyticsCategory) {
        window.dataLayer.push({
            event: 'data_event',
            data_description: value
        });
    }
};

/**
 * Send pageview event via GTM
 */
var sendPageView = exports.sendPageView = function sendPageView() {
    if (false) {}

    if (window.dataLayer !== undefined) {
        window.dataLayer.push({
            event: 'Page — View',
            post_details: {},
            section: 'special',
            tags: [],
            title: document.title,
            url: window.location.pathname
        });
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Social network services
 */

var Service = __webpack_require__(18),
    utils   = __webpack_require__(2),
    svg     = __webpack_require__(19);

var services = {
    odnoklassniki: __webpack_require__(20),
    vkontakte:     __webpack_require__(21),
    facebook:      __webpack_require__(22),
    twitter:       __webpack_require__(23),
    gplus:         __webpack_require__(24),
    pocket:        __webpack_require__(25),
    telegram:      __webpack_require__(26),
    whatsapp:      __webpack_require__(27),
    viber:         __webpack_require__(28),
    email:         __webpack_require__(29),
    more:          __webpack_require__(30)
};

utils.each(services, function (service, key) {
    Service(service);

    service.svgi = svg[key];
    service.name = key;
});

module.exports = services;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'RoF', // уникальное имя спецпроекта. Оно же — название главного класса. Используется на странице, куда интегрируется спецпроект
  analyticsCategory: 'Real or Fake',
  sendPageView: false, // отключаем, если спецпроект не на отдельной странице
  listenedEvents: ['click'] // слушаем события (click, input, change, etc.). Обычно нужен только click
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Make html element
 * @param {String} tagName
 * @param {Array|String} classNames - array of classnames or string for single classname
 * @param {Object} attributes - object with html attributes
 */
var makeElement = exports.makeElement = function makeElement(tagName) {
    var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    tagName = tagName.toLowerCase();

    var element = document.createElement(tagName);

    if (classNames) {
        if ((typeof classNames === 'undefined' ? 'undefined' : _typeof(classNames)) === 'object') {
            classNames.forEach(function (cname) {
                element.classList.add(cname);
            });
        } else if (typeof classNames === 'string') {
            element.classList.add(classNames);
        }
    }

    for (var attr in attributes) {
        if (attr === 'data') {
            var dataAttributes = attributes[attr];

            for (var _attr in dataAttributes) {
                element.dataset[_attr] = dataAttributes[_attr];
            }
        } else {
            element[attr] = attributes[attr];
        }
    }

    return element;
};

/**
 * Cache elements with [data-view] attribute and put them in given object
 * @param {Object} obj - object
 */
var cacheElements = exports.cacheElements = function cacheElements(obj) {
    var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'view';

    var newObj = {},
        elements = document.querySelectorAll('[data-' + attr + ']');

    Array.prototype.forEach.call(elements, function (el) {
        var name = el.dataset[attr];
        newObj[name] = el;
    });

    Object.assign(obj, newObj);
};

/**
 * Get all siblings of specified element, excluding this element
 * @param {Element} element
 */
var getSiblings = exports.getSiblings = function getSiblings(element) {
    var siblings = [],
        sibling = element.parentNode.firstChild;

    for (; sibling; sibling = sibling.nextSibling) {
        if (sibling.nodeType !== 1 || sibling === element) continue;
        siblings.push(sibling);
    }

    return siblings;
};

/**
 * Remove all children from element
 * @param {Element} parent
 */
var removeChildren = exports.removeChildren = function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

/**
 * Remove specified element from its parent
 * @param {Element} element
 */
var removeElement = exports.removeElement = function removeElement(element) {
    if (element) {
        element.parentNode.removeChild(element);
    }
};

/**
 * Transform html string to node
 * @param {String} html
 */
var htmlStringToNode = exports.htmlStringToNode = function htmlStringToNode(html) {
    var el = document.createElement('div');

    el.innerHTML = html;

    return el.firstChild;
};

/**
 * Prepend source element before first child of target element
 * @param {Element} parent
 * @param {Element} el
 */
var prepend = exports.prepend = function prepend(parent, el) {
    parent.insertBefore(el, parent.firstChild);
};

/** Quick check if element is in DOM */
var isElementInDom = exports.isElementInDom = function isElementInDom(el) {
    return el.parentNode;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var isAvailable = function() {

    try {
        window.localStorage.setItem('isStorageAvailable', 1);
        window.localStorage.removeItem('isStorageAvailable');
        return true;
    } catch (e) {
        return false;
    }

};

var storage = {

    /**
     * Get item from localStorage
     * @param {String} key
     */
    getItem: function(key){

        if (isAvailable()) {

            var item = window.localStorage.getItem(key);

            try {
                JSON.parse(item);
            } catch (e) {
                return item;
            }

            return JSON.parse(item);

        }

    },

    /**
     * Save item in localStorage
     * @param {String} key
     * @param {String} value
     */
    setItem: function(key, value) {

        value = (typeof value === 'string') ? value : JSON.stringify(value);

        if (isAvailable()) {
            window.localStorage.setItem(key, value);
        }

    },

    /**
     * Remove item from localStorage
     * @param {String} key
     */
    removeItem: function(key) {

        if (isAvailable()) {
            window.localStorage.removeItem(key);
        }

    }

};

module.exports = storage;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _special = __webpack_require__(9);

var _special2 = _interopRequireDefault(_special);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.Special = _special2.default; // Тут используется CommonJS модуль, чтобы можно было использовать название класса как глобальную переменную
/**
 * Entry point
 */

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(10);

var _base = __webpack_require__(11);

var _base2 = _interopRequireDefault(_base);

var _data = __webpack_require__(12);

var _data2 = _interopRequireDefault(_data);

var _svg = __webpack_require__(13);

var _svg2 = _interopRequireDefault(_svg);

var _dom = __webpack_require__(6);

var _analytics = __webpack_require__(3);

var Analytics = _interopRequireWildcard(_analytics);

var _share = __webpack_require__(14);

var Share = _interopRequireWildcard(_share);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CSS = {
  main: 'rof'
};

var EL = {};

var Special = function (_BaseSpecial) {
  _inherits(Special, _BaseSpecial);

  function Special() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Special);

    var _this = _possibleConstructorReturn(this, (Special.__proto__ || Object.getPrototypeOf(Special)).call(this));

    Object.assign(_this.params, params);
    _this.saveParams();

    if (_data2.default && params.data) {
      Object.assign(_data2.default, params.data);
    }

    if (_this.params.css) {
      _this.loadStyles(_this.params.css).then(function () {
        return _this.init();
      });
    } else {
      _this.init();
    }
    return _this;
  }

  _createClass(Special, [{
    key: 'createElements',
    value: function createElements() {
      EL.main = (0, _dom.makeElement)('div', CSS.main);
      EL.mBg = (0, _dom.makeElement)('div', CSS.main + '__bg');
      EL.mInner = (0, _dom.makeElement)('div', CSS.main + '__inner');

      EL.main.appendChild(EL.mBg);
      EL.main.appendChild(EL.mInner);

      EL.enter = (0, _dom.makeElement)('div', CSS.main + '-enter');
      _data2.default.images.forEach(function (item, i) {
        var eImg = (0, _dom.makeElement)('img', [CSS.main + '-enter__img', CSS.main + '-enter__img--' + (i + 1)], {
          src: item
        });
        EL.enter.appendChild(eImg);
      });
      EL.eInner = (0, _dom.makeElement)('div', CSS.main + '-enter__inner');
      EL.eHeadline = (0, _dom.makeElement)('div', CSS.main + '-enter__headline', {
        textContent: 'тест'
      });
      if (this.params.isFeed) {
        EL.eTitle = (0, _dom.makeElement)('a', CSS.main + '-enter__title', {
          href: '/' + this.params.articleId,
          textContent: _data2.default.title
        });
      } else {
        EL.eTitle = (0, _dom.makeElement)('div', CSS.main + '-enter__title', {
          textContent: _data2.default.title
        });
      }
      EL.eText = (0, _dom.makeElement)('div', CSS.main + '-enter__text', {
        innerHTML: _data2.default.text
      });
      EL.eBtn = (0, _dom.makeElement)('button', CSS.main + '-enter__btn', {
        data: {
          click: 'start',
          caption: 'Обманите меня',
          hoverCaption: 'Обнимите меня'
        }
      });

      EL.eInner.appendChild(EL.eHeadline);
      EL.eInner.appendChild(EL.eTitle);
      EL.eInner.appendChild(EL.eText);
      EL.eInner.appendChild(EL.eBtn);

      EL.enter.appendChild(EL.eInner);

      EL.test = (0, _dom.makeElement)('div', CSS.main + '-test');

      EL.tHeader = (0, _dom.makeElement)('div', CSS.main + '-test__header');
      EL.tPages = (0, _dom.makeElement)('div', CSS.main + '-test__pages');
      EL.tTitle = (0, _dom.makeElement)('div', CSS.main + '-test__title', {
        textContent: 'Фэйк или правда?'
      });

      EL.tHeader.appendChild(EL.tPages);
      EL.tHeader.appendChild(EL.tTitle);

      EL.tBody = (0, _dom.makeElement)('div', CSS.main + '-test__body');
      EL.tQuestion = (0, _dom.makeElement)('div', CSS.main + '-test__question');
      EL.tOptions = (0, _dom.makeElement)('div', CSS.main + '-test__options');

      EL.tBody.appendChild(EL.tQuestion);
      EL.tBody.appendChild(EL.tOptions);

      EL.tAnswer = (0, _dom.makeElement)('div', CSS.main + '-test__answer');
      EL.tAnswerText = (0, _dom.makeElement)('div', CSS.main + '-test__answer-text');
      EL.tBtn = (0, _dom.makeElement)('button', CSS.main + '-test__btn', {
        textContent: 'Далее',
        data: {
          click: 'continue'
        }
      });

      EL.tAnswer.appendChild(EL.tAnswerText);
      EL.tAnswer.appendChild(EL.tBtn);

      EL.test.appendChild(EL.tHeader);
      EL.test.appendChild(EL.tBody);

      EL.result = (0, _dom.makeElement)('div', CSS.main + '-result');
      EL.rImg = (0, _dom.makeElement)('img', CSS.main + '-result__img');
      EL.rInner = (0, _dom.makeElement)('div', CSS.main + '-result__inner');
      EL.rResult = (0, _dom.makeElement)('div', CSS.main + '-result__result');
      EL.rTitle = (0, _dom.makeElement)('div', CSS.main + '-result__title');
      EL.rShare = (0, _dom.makeElement)('div', CSS.main + '-result__share');
      EL.rRestart = (0, _dom.makeElement)('div', CSS.main + '-result__restart', {
        innerHTML: '<span>\u041F\u0440\u043E\u0439\u0442\u0438 \u0435\u0449\u0435 \u0440\u0430\u0437</span>' + _svg2.default.refresh,
        data: {
          click: 'restart'
        }
      });

      EL.rInner.appendChild(EL.rResult);
      EL.rInner.appendChild(EL.rTitle);
      EL.rInner.appendChild(EL.rShare);
      EL.rInner.appendChild(EL.rRestart);

      EL.result.appendChild(EL.rImg);
      EL.result.appendChild(EL.rInner);

      EL.mInner.appendChild(EL.enter);
    }
  }, {
    key: 'start',
    value: function start() {
      Analytics.sendEvent('Start');

      EL.mInner.replaceChild(EL.test, EL.enter);

      this.makeNextQuestion();
    }
  }, {
    key: 'makeNextQuestion',
    value: function makeNextQuestion() {
      var q = _data2.default.questions[this.activeIndex];

      EL.tPages.textContent = this.activeIndex + 1 + '/' + _data2.default.questions.length;
      EL.tQuestion.innerHTML = q.text;
      Special.makeOptions(q.options);
    }
  }, {
    key: 'answer',
    value: function answer(el) {
      if (this.isAnswered) {
        return;
      }

      this.isAnswered = true;

      Analytics.sendEvent('Question ' + (this.activeIndex + 1) + ' - Option');

      var index = el.dataset.index;

      var q = _data2.default.questions[this.activeIndex];

      [].slice.call(EL.tOptions.childNodes).forEach(function (item) {
        if (el !== item) {
          EL.tOptions.removeChild(item);
        }
      });

      if (q.options[index].isCorrect) {
        this.correctAnswers += 1;
        EL.tAnswerText.textContent = q.answer.correct;
        el.classList.add('is-correct');
      } else {
        EL.tAnswerText.textContent = q.answer.incorrect;
        el.classList.add('is-incorrect');
      }

      if (this.activeIndex === _data2.default.questions.length - 1) {
        EL.tBtn.textContent = 'Результат';
        EL.tBtn.dataset.click = 'result';
      }

      EL.tBody.appendChild(EL.tAnswer);
    }
  }, {
    key: 'continue',
    value: function _continue() {
      this.isAnswered = false;

      Analytics.sendEvent('Question ' + (this.activeIndex + 1) + ' - Continue');

      this.activeIndex += 1;

      EL.tBody.removeChild(EL.tAnswer);

      this.makeNextQuestion();
    }
  }, {
    key: 'result',
    value: function result() {
      this.isAnswered = false;

      Analytics.sendEvent('Result');

      EL.tBody.removeChild(EL.tAnswer);

      var _Special$getResult = Special.getResult(this.correctAnswers),
          result = _Special$getResult.result,
          index = _Special$getResult.index;

      EL.mInner.replaceChild(EL.result, EL.test);

      EL.rImg.src = result.img;
      EL.rImg.srcset = result.img2x + ' 2x';
      EL.rImg.className = '';
      EL.rImg.classList.add(CSS.main + '-result__img');
      EL.rImg.classList.add(CSS.main + '-result__img--' + (index + 1));
      EL.rResult.textContent = this.correctAnswers + ' \u0438\u0437 ' + _data2.default.questions.length + ' \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432:';
      EL.rTitle.innerHTML = result.title;

      (0, _dom.removeChildren)(EL.rShare);
      Share.make(EL.rShare, {
        url: this.params.share.url + '/' + this.correctAnswers,
        title: this.params.share.title,
        twitter: this.params.share.title
      });
    }
  }, {
    key: 'restart',
    value: function restart() {
      this.setInitialParams();

      EL.tBtn.textContent = 'Далее';
      EL.tBtn.dataset.click = 'continue';

      EL.mInner.replaceChild(EL.test, EL.result);

      this.makeNextQuestion();
    }
  }, {
    key: 'setInitialParams',
    value: function setInitialParams() {
      this.activeIndex = 0;
      this.correctAnswers = 0;
    }
  }, {
    key: 'init',
    value: function init() {
      this.setInitialParams();

      this.createElements();

      this.container.appendChild(EL.main);

      if (this.params.isFeed) {
        EL.main.classList.add('is-feed');
      }

      Analytics.sendEvent('First screen', 'Show');
    }
  }], [{
    key: 'getResult',
    value: function getResult(score) {
      var result = '';
      var index = 0;
      _data2.default.results.some(function (item, i) {
        if (item.range[0] <= score && item.range[1] >= score) {
          result = item;
          index = i;
          return true;
        }

        return false;
      });

      return { result: result, index: index };
    }
  }, {
    key: 'makeOptions',
    value: function makeOptions(options) {
      (0, _dom.removeChildren)(EL.tOptions);

      options.forEach(function (item, i) {
        var option = (0, _dom.makeElement)('div', CSS.main + '-test__option', {
          textContent: item.text,
          data: {
            index: i,
            click: 'answer'
          }
        });

        EL.tOptions.appendChild(option);
      });
    }
  }]);

  return Special;
}(_base2.default);

exports.default = Special;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

var _analytics = __webpack_require__(3);

var Analytics = _interopRequireWildcard(_analytics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base special constructor with common methods
 */
var BaseSpecial = function () {
    function BaseSpecial() {
        _classCallCheck(this, BaseSpecial);

        this.keyCodes = {
            enter: 13
        };
        this.params = {
            container: document.body
        };

        if (_config2.default.sendPageView) {
            Analytics.sendPageView();
        }
    }

    /**
     * Save custom params
     * @param {Object} params - params object with custom values
     */


    _createClass(BaseSpecial, [{
        key: 'saveParams',
        value: function saveParams() {
            Object.assign(this.params, _config2.default);
            this.container = this.params.container;

            this.addEventListeners();
        }

        /**
         * Load css file
         * @param {String} path
         */

    }, {
        key: 'loadStyles',
        value: function loadStyles(path) {
            return new Promise(function (resolve, reject) {
                var link = document.createElement('link');

                link.rel = 'stylesheet';
                link.href = path;

                link.onload = function () {
                    return resolve();
                };
                link.onerror = function () {
                    return reject();
                };

                document.body.appendChild(link);
            });
        }

        /**
         * Add event listeners to document
         */

    }, {
        key: 'addEventListeners',
        value: function addEventListeners() {
            var _this = this;

            this.params.listenedEvents.forEach(function (eventName) {
                _this.container.addEventListener(eventName, function (event) {
                    return _this.defaultEventHandler(event, eventName);
                });
            });
        }

        /**
         * Default events handler
         * @param {Object} event
         * @param {String} eventName
         */

    }, {
        key: 'defaultEventHandler',
        value: function defaultEventHandler(event, eventName) {
            var target = event.target;
            var action = void 0;

            while (target.parentNode && target !== event.currentTarget) {
                action = target.dataset[eventName];

                /** Send all links clicks to analytics */
                if (eventName === 'click' && target.tagName.toLowerCase() === 'a') {
                    Analytics.sendEvent(target.href);
                }

                if (action) break;
                target = target.parentNode;
            }

            action = target.dataset[eventName];

            if (action && this[action]) {
                this[action](event.target, event);
            }
        }
    }]);

    return BaseSpecial;
}();

exports.default = BaseSpecial;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Реальность vs фейк: сможете отличить?',
  text: '<p>В 2018 году стало ещё сложнее понять, кому доверять, а кому — нет.</p><p>Пока СМИ и блогеры соревнуются, кто быстрей, проверка информации всё чаще перекладывается на плечи читателя. Давайте узнаем, насколько сложно вас обмануть.</p>',
  images: ['https://leonardo.osnova.io/c0b15f74-9fd1-60ae-ed83-a9af6e9c0d91/', 'https://leonardo.osnova.io/c1771779-70ec-1eac-26db-759c1371d25c/', 'https://leonardo.osnova.io/351b77b9-bccb-5411-6a22-4ee684616422/'],
  questions: [{
    text: '<span data-fz="44" data-bg="main">Начнём с простого.</span><br><span data-fz="32" data-bd="main">Что из этого было по-настоящему?</span>',
    answer: {
      correct: 'Всё верно, Путин действительно это пообещал: «Мы, жертвы агрессии, как мученики попадём в рай, а они [агрессоры] просто сдохнут».',
      incorrect: 'Увы, это фейк. А президент пообещал напрямую: «Мы, жертвы агрессии, как мученики попадём в рай, а они просто сдохнут».'
    },
    options: [{
      text: 'Роскомнадзор приостановил показ нового «Простоквашино» из-за нацистского прошлого Печкина'
    }, {
      text: 'Павел Дуров пообещал привязать криптовалюту Gram к швейцарскому франку ради безопасности пользователей'
    }, {
      text: 'Facebook начал штрафовать за цитирование книг Николая Старикова'
    }, {
      text: 'Путин заявил, что в случае ядерной войны россияне попадут в рай',
      isCorrect: true
    }]
  }, {
    text: '<span data-fz="40">Повысим сложность.</span><br><span data-fz="40" data-color="main" data-bg="black">Где тут правда?</span>',
    answer: {
      correct: 'Да, было дело. Правда, в IT-отрасли посоветовали этими прокси не пользоваться.',
      incorrect: 'Упс! Сомневайтесь, даже если новость очень похожа на правду.'
    },
    options: [{
      text: 'Илон Маск назвал бортовую систему Falcon 9 в честь певицы Граймс'
    }, {
      text: 'Стажёр YouTube нашёл в штаб-квартире дартс с лицом PewDiePie'
    }, {
      text: 'Mail.Ru Group поделилась бесплатными прокси для Telegram',
      isCorrect: true
    }, {
      text: 'Сборная России по футболу посетила церковь перед матчем с Испанией'
    }]
  }, {
    text: '<span data-fz="28">Три заголовка про российские <span data-color="white" data-bg="main">госорганы</span> — правда. Какой из них — это <span data-color="main" data-bd="main">враньё</span>?</span>',
    answer: {
      correct: 'Вы правы, это фейк. Чтобы всегда быть уверенным, проверяйте первоисточник.',
      incorrect: 'Так и было, честное слово! Чтобы быть уверенным, проверяйте первоисточник.'
    },
    options: [{
      text: 'МВД наказало офицера, который доказывал теорему во время дежурства',
      isCorrect: true
    }, {
      text: 'Жительница Кировской области не пошла к приставам, потому что земля «поднялась и перегородила ей дорогу»'
    }, {
      text: 'Прокуратура Екатеринбурга изъяла детские рисунки с выставки «Толерантный мир»'
    }, {
      text: 'Глава СК попытался обвинить Telegram в терактах, но перепутал его с Инстаграмом'
    }]
  }, {
    text: '<span data-color="white" data-bg="main">Кликбейт</span> — одна из форм обмана читателя. И в него умеют даже нейросети. Что из этого написал <span data-bd="black">живой человек</span>?',
    answer: {
      correct: 'Да, этот заголовок написал живой редактор «Ленты.ру». Речь шла о несостоявшемся действе на конференции в Лас-Вегасе.',
      incorrect: 'Увы, это текст, сгенерированный пользователем «Хабра» с помощью нейросетей на основе материалов «Ленты.ру». А вот про оргию написал настоящий сотрудник издания.'
    },
    options: [{
      text: 'Иркутск оставили без воздуха'
    }, {
      text: '«Cамая массовая оргия» провалилась',
      isCorrect: true
    }, {
      text: 'ЦБ выделит деньги на починку каменного пениса тролля'
    }, {
      text: 'США потребовали дать в морду Жиркову'
    }]
  }, {
    text: '<span data-bd="main">Новости на TJ порой кажутся невозможными</span>. <span data-fz="48px" data-color="white" data-bg="main">Что из этого неправда?</span>',
    answer: {
      correct: 'Вы правы, это полный фейк. Нечто похожее Якубович говорил про «Поле Чудес», но Первый канал обвинил журналистов в вырывании слов из контекста.',
      incorrect: 'Увы, так всё и было. Вариант про Диброва — фейк. Нечто похожее Якубович говорил про «Поле Чудес», но Первый канал обвинил журналистов в вырывании из контекста. '
    },
    options: [{
      text: 'РЕН ТВ проник в больницу, где лечат Скрипаля, но прервал репортаж из-за надписи «Осторожно, скользкий пол»'
    }, {
      text: 'В Бангладеш разошлось фото целующейся пары. Фотографа уволили и избили за «неприличный» снимок'
    }, {
      text: 'Дмитрий Дибров назвал программу «Кто хочет стать миллионером» бестолковой, а участников — глупыми',
      isCorrect: true
    }, {
      text: 'Глава ЦИК сделала пресс-секретарю Путина замечание за агитацию в его пользу'
    }]
  }, {
    text: '<span data-fz="26"><span data-color="white" data-bg="main">Давайте разберёмся.</span><br> Чьи заголовки <span data-bd="main">хотя бы иногда</span><br>оказываются правдой?</span>',
    answer: {
      correct: 'Да, ФАН — это официально зарегистрированное СМИ. Но его связывают с «фабрикой троллей», которая могла повлиять на выборы в США.',
      incorrect: 'Нет, все материалы в этом издании — фейк. Регистрация СМИ есть только у ФАН, но это издание считается связанным с «фабрикой троллей».'
    },
    options: [{
      text: '«Федеральное агентство новостей»',
      isCorrect: true
    }, {
      text: 'Агентство «Панорама»'
    }, {
      text: 'Агентство «Интерсакс»'
    }, {
      text: 'Издание Onion'
    }]
  }, {
    text: '<span data-fz="26"><span data-color="main" data-bd="main">Дмитрий Киселёв</span> в эфире «России 1» зачитал рэп на стихи русского поэта.<br><span data-color="white" data-bg="black">Что именно?</span></span>',
    answer: {
      correct: 'Раунд! Вы правы, таким специфичным образом телеведущий поддержал рэпера Хаски.',
      incorrect: 'Не лучший ваш раунд. Киселёв зачитал стихи Маяковского, чтобы поддержать Хаски.'
    },
    options: [{
      text: '«Чиновник и поэт» Александра Пушкина'
    }, {
      text: '«Хорошо» Владимира Маяковского',
      isCorrect: true
    }, {
      text: '«Ни страны, ни погоста» Иосифа Бродского'
    }, {
      text: '«Не везёт тебе, Алёша» Максима Горького'
    }]
  }, {
    text: 'Все эти люди живы и здоровы. Но <span data-color="white" data-bg="main">только один</span> из них не стал жертвой фейковой новости о смерти. <span data-color="main" data-bd="black">Кто это?</span>',
    answer: {
      correct: 'Вы правы, речь о Дебенедетти — авторе фейковых новостей о смертях известных персон. Так он проверяет, насколько журналисты доверчивы.',
      incorrect: 'Увы, в соцсетях ходили ложные слухи о смерти этой знаменитости. А речь всё-таки о Дебенедетти — авторе многих подобных фейковых новостей.'
    },
    options: [{
      text: 'Певица Алла Пугачёва'
    }, {
      text: 'Актёр Сильвестр Сталлоне'
    }, {
      text: 'Журналист Томасо Дебенедетти',
      isCorrect: true
    }, {
      text: 'Режиссёр Жан-Люк Годар'
    }]
  }, {
    text: '<span data-bd="main">СМИ часто пишут, как кто-то оправдывается.</span><br>В каком случае уместно написать, что человек <span data-color="white" data-bg="main">«опроверг»</span> некие сведения?',
    answer: {
      correct: 'Слово «опроверг» здесь уместно, потому что предоставлены доказательства. Иначе лучше было бы написать «отверг» или «отрицает». Жаль, что такой ситуации никогда не было. ',
      incorrect: 'Нет, слово «опроверг» подходит, если предоставлены доказательства точки зрения. На самом деле Песков «отрицал» или «отвергал» сведения, просто называя их вымыслом. '
    },
    options: [{
      text: 'Песков опроверг причастность России к отравлению Скрипалей'
    }, {
      text: 'Песков опроверг расследование Навального о друзьях Путина, предоставив документы в пользу версии Кремля',
      isCorrect: true
    }, {
      text: 'Песков опроверг сообщения о строительстве «Роснефтью» резиденции для Путина'
    }, {
      text: 'Песков опроверг существование «приватного фонда» Путина'
    }]
  }],
  results: [{
    range: [0, 2],
    title: 'Не результат,<br>а&nbsp;радиоактивный<br>пепел',
    img: 'https://leonardo.osnova.io/45f054c6-ac2c-033d-6105-5cf2c190c093/',
    img2x: 'https://leonardo.osnova.io/78c0c60c-6c08-89ae-192a-90a808f1048d/'
  }, {
    range: [3, 5],
    title: 'Результат<br>реальнее<br>робота Бориса',
    img: 'https://leonardo.osnova.io/a7deb526-b927-22d2-d851-48d7930c9da6/',
    img2x: 'https://leonardo.osnova.io/6912edb2-942f-2fa9-acff-3cee1b71a108/'
  }, {
    range: [6, 6],
    title: 'Пользователь сети<br>интернет прошёл тест.<br>Что? Да!',
    img: 'https://leonardo.osnova.io/47250f65-d8aa-a410-63ea-eda111bdf8a4/',
    img2x: 'https://leonardo.osnova.io/f5ea76b0-5d00-5cff-2034-a0c8c8a6c140/'
  }, {
    range: [7, 9],
    title: 'Шок! Такого вы ещё не<br>видели! Я прошёл тест и<br>доказал, что знаю правду!',
    img: 'https://leonardo.osnova.io/55078780-38cf-cebc-ce42-dcbcdefe0025/',
    img2x: 'https://leonardo.osnova.io/6062e636-165c-096d-c1b6-2e37b2df2c08/'
  }]
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  refresh: '<svg width="15" height="15"><path d="M14.62.674c-.268-.11-.495-.065-.684.136l-1.27 1.26A7.58 7.58 0 0 0 10.278.542 7.357 7.357 0 0 0 7.5 0a7.298 7.298 0 0 0-2.91.596 7.565 7.565 0 0 0-2.393 1.601A7.567 7.567 0 0 0 .596 4.59 7.298 7.298 0 0 0 0 7.5c0 1.015.199 1.986.596 2.91a7.567 7.567 0 0 0 1.601 2.393 7.57 7.57 0 0 0 2.393 1.601A7.298 7.298 0 0 0 7.5 15c1.12 0 2.185-.236 3.194-.708a7.333 7.333 0 0 0 2.578-1.997.32.32 0 0 0 .073-.22.27.27 0 0 0-.093-.2l-1.338-1.348a.376.376 0 0 0-.244-.087c-.104.013-.179.052-.224.117a4.904 4.904 0 0 1-1.748 1.436A4.925 4.925 0 0 1 7.5 12.5a4.87 4.87 0 0 1-1.938-.395 5.034 5.034 0 0 1-1.597-1.07A5.038 5.038 0 0 1 2.896 9.44 4.87 4.87 0 0 1 2.5 7.5c0-.677.132-1.323.396-1.938a5.036 5.036 0 0 1 1.07-1.597c.449-.45.98-.806 1.596-1.07A4.87 4.87 0 0 1 7.5 2.5c1.309 0 2.445.446 3.409 1.338L9.56 5.186c-.202.195-.248.42-.137.674.11.26.303.39.576.39h4.375a.6.6 0 0 0 .44-.185.6.6 0 0 0 .185-.44V1.25a.584.584 0 0 0-.38-.576z"/></svg>'
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.make = exports.init = undefined;

var _cmttLikely = __webpack_require__(15);

var _cmttLikely2 = _interopRequireDefault(_cmttLikely);

var _dom = __webpack_require__(6);

var _analytics = __webpack_require__(3);

var Analytics = _interopRequireWildcard(_analytics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS = {
    likely: 'likely',
    likelyCustom: 'likely--custom'
};

var init = exports.init = function init() {
    _cmttLikely2.default.initate();
};

/**
 * Make likely buttons and append to specified element
 * @param {Element} parentContainer - likely container will be placed here
 * @param {Object} set - object with optional params (title, url, twitter)
 */
var make = exports.make = function make(parentContainer) {
    var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var likelyContainer = (0, _dom.makeElement)('div', [CSS.likely, CSS.likelyCustom]);
    var socials = ['facebook', 'vkontakte', 'twitter'];

    socials.forEach(function (social) {
        var button = (0, _dom.makeElement)('div', social);

        if (social === 'facebook') button.innerHTML = 'Поделиться';

        button.addEventListener('click', function () {
            Analytics.sendEvent('Share ' + social);
        });

        likelyContainer.appendChild(button);
    });

    parentContainer.appendChild(likelyContainer);

    if (set.url) likelyContainer.dataset.url = set.url;
    if (set.twitter) likelyContainer.dataset.twitter = set.twitter;
    if (set.title) likelyContainer.dataset.title = set.title;

    init();
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 'use strict';

var Likely = __webpack_require__(16),
    config = __webpack_require__(0),
    utils = __webpack_require__(2),
    dom = __webpack_require__(1);

/**
 * @param {Node} node
 * @param {Object} options
 */
var likely = function (node, options) {
    options = options || {};

    var widget = node[config.name];

    if (widget) {
        widget.update(options);
    }
    else {
        node[config.name] = new Likely(node, utils.merge(
            {}, likely.defaults,
            options, utils.bools(node)
        ));
    }

    return widget;
};

/**
 * Initiate Likely buttons on load
 */
likely.initiate = likely.initate = function () {
    var widgets = dom.findAll('.' + config.name);

    utils.toArray(widgets).forEach(likely);
};

/**
 * Defaults options for likely
 */
likely.defaults = {
    counters: true,
    timeout:  1e3,
    zeroes:   false,
    title:    document.title,
    wait:     0.5e3,
    url:      window.location.href.replace(window.location.hash, '')
};

module.exports = likely;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var Button = __webpack_require__(17);

var services = __webpack_require__(4),
    config   = __webpack_require__(0),
    utils = __webpack_require__(2),
    dom = __webpack_require__(1),
    storage = __webpack_require__(7);

/**
 * Main widget view
 *
 * @param {Node} container
 * @param {Object} options
 */
function Likely(container, options) {
    this.isSmartOrder = container.dataset.smart !== undefined ? true : false;
    this.container = container;
    this.options   = options;

    this.countersLeft = 0;
    this.buttons      = [];
    this.number       = 0;

    this.init();
}

Likely.prototype = {

    /**
     * Change buttons order, if previous clicks were saved
     * @param {Array} children
     */
    reorder: function (children) {
        var savedServices = storage.getItem(config.storageKey);

        if (savedServices) {
            savedServices.reverse();

            savedServices.forEach(function (service) {

                var button = dom.find('.' + service);

                if (button) {
                    button.parentNode.insertBefore(button, button.parentNode.firstChild);
                }

            });
        }
    },

    /**
     * Initiate the social buttons widget
     */
    init: function () {

        var buttons = utils.toArray(this.container.children);

        if (dom.isMobile() && this.isSmartOrder) {
            this.reorder(buttons);
        }

        buttons.forEach(this.addButton.bind(this));

        if (this.options.counters) {
            this.timer   = setTimeout(this.appear.bind(this), this.options.wait);
            this.timeout = setTimeout(this.ready.bind(this),  this.options.timeout);
        }
        else {
            this.appear();
        }

        utils.flexboxSupport(this.container, config.name);
    },

    /**
     * Add a button
     *
     * @param {Node} node
     */
    addButton: function (node) {
        var button = new Button(node, this, this.options);

        this.buttons.push(button);

        if (button.options.counterUrl) {
            this.countersLeft++;
        }
    },

    /**
     * Update the timer with URL
     *
     * @param {Object} options
     */
    update: function (options) {
        if (
            options.forceUpdate ||
            options.url !== this.options.url
        ) {
            this.countersLeft = this.buttons.length;
            this.number = 0;

            this.buttons.forEach(function (button) {
                button.update(options);
            });
        }
    },

    /**
     * Update counter
     *
     * @param {String} service
     * @param {Number} counter
     */
    updateCounter: function (service, counter) {
        if (counter) {
            this.number += counter;
        }

        this.countersLeft--;

        if (this.countersLeft === 0) {
            this.appear();
            this.ready();
        }
    },

    /**
     * Show the buttons with smooth animation
     */
    appear: function () {
        this.container.classList.add(config.name + '--visible');
    },

    /**
     * Get. Set. Ready.
     */
    ready: function () {
        if (this.timeout) {
            clearTimeout(this.timeout);

            this.container.classList.add(config.name + '--ready');
        }
    }
};

module.exports = Likely;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var services = __webpack_require__(4),
    config = __webpack_require__(0),
    fetch = __webpack_require__(31),
    utils = __webpack_require__(2),
    dom = __webpack_require__(1),
    storage = __webpack_require__(7);

var htmlSpan = '<span class="{className}">{content}</span>';

/**
 * Separate social link widget
 *
 * @param {Node} widget
 * @param {Likely} likely
 * @param {Object} options
 */
function LikelyButton (widget, likely, options) {
    this.widget  = widget;
    this.likely  = likely;
    this.options = utils.merge(options);

    this.init();
}

LikelyButton.prototype = {
    /**
     * Initiate the button
     */
    init: function () {
        this.detectService();
        this.detectParams();

        if (this.service) {
            this.initHtml();

            setTimeout(this.initCounter.bind(this), 0);
        }
    },

    /**
     * Update the counter
     *
     * @param {Object} options
     */
    update: function (options) {
        var className = '.' + config.prefix + 'counter',
            counters  = dom.findAll(className, this.widget);

        utils.extend(this.options, utils.merge({forceUpdate: false}, options));
        utils.toArray(counters).forEach(function (node) {
            node.parentNode.removeChild(node);
        });

        this.initCounter();
    },

    /**
     * Get the config.name of service and its options
     */
    detectService: function () {
        var widget  = this.widget,
            service = utils.getDataset(widget).service;

        if (!service) {
            var classes = widget.className.split(' ');

            for (var i = 0; i < classes.length; i++) {
                if (classes[i] in services) break;
            }

            service = classes[i];
        }

        if (service) {
            this.service = service;

            utils.extend(this.options, services[service]);
        }
    },

    /**
     * Merge params from data-* attributes into options hash map
     */
    detectParams: function () {
        var options = this.options,
            data    = utils.getDataset(this.widget);

        if (data.counter) {
            var counter = parseInt(data.counter, 10);

            if (isNaN(counter)) {
                options.counterUrl = data.counter;
            }
            else {
                options.counterNumber = counter;
            }
        }

        options.title = data.title || options.title;
        options.url   = data.url   || options.url;
    },

    /**
     * Inititate button's HTML
     */
    initHtml: function () {
        var options = this.options,
            widget  = this.widget,
            text    = widget.innerHTML;

        widget.addEventListener('click', this.click.bind(this));
        widget.classList.remove(this.service);
        widget.className += (' ' + this.className('widget'));

        var button = utils.template(htmlSpan, {
            className: this.className('button'),
            content:   text
        });

        var icon = utils.template(htmlSpan, {
            className: this.className('icon'),
            content:   dom.wrapSVG(options.svgi)
        });

        widget.innerHTML = icon + button;
    },

    /**
     * Fetch or get cached counter value and update the counter
     */
    initCounter: function () {
        var options = this.options;

        if (options.counters && options.counterNumber) {
            this.updateCounter(options.counterNumber);
        }
        else if (options.counterUrl) {
            fetch(
                this.service,
                options.url,
                options
            )(this.updateCounter.bind(this));
        }
    },

    /**
     * @param {String} className
     * @return {String}
     */
    className: function (className) {
        var fullClass = config.prefix + className;

        return fullClass + ' ' + fullClass + '--' + this.service;
    },

    /**
     * Update counter
     *
     * @param {String} e
     */
    updateCounter: function (counter) {
        counter = parseInt(counter, 10) || 0;

        var counterElement = dom.find('.' + config.name + '__counter', this.widget);

        if (counterElement) {
            counterElement.parentNode.removeChild(counterElement);
        }

        var options = {
            className: this.className('counter'),
            content:   counter
        };

        if (!counter && !this.options.zeroes) {
            options.className += ' ' + config.prefix + 'counter--empty';
            options.content = '';
        }

        this.widget.appendChild(
            dom.createNode(utils.template(htmlSpan, options))
        );

        this.likely.updateCounter(this.service, counter);
    },

    /**
     * Click event listener
     */
    click: function () {
        var options = this.options;

        if ( this.service == 'more' ){

            this.widget.classList.toggle('active');
            this.widget.parentElement.classList.toggle(this.options.className);

        } else if (this.service == 'email'){

            var url = utils.makeUrl(options.popupUrl, {
                url: options.url,
                title: options.title
            });

            window.location = url;

            this.rememberClicked(this.service);

        } else {

            if (options.click.call(this)) {

                var twitterText = this.likely.container.dataset.twitter,
                    twitterUrl = this.likely.container.dataset.twitterUrl;

                var window_url = utils.makeUrl(options.popupUrl, {
                    url:   (this.service === 'twitter' && twitterUrl !== '' && twitterUrl !== undefined) ? twitterUrl : options.url,
                    title: (this.service === 'twitter' && twitterText !== '' && twitterText !== undefined) ? twitterText : options.title
                });

                dom.openPopup(
                    this.addAdditionalParamsToUrl(window_url),
                    config.prefix + this.service,
                    options.popupWidth,
                    options.popupHeight
                );

                this.rememberClicked(this.service);
            }

        }

        return false;
    },

    /**
     * Append service data to URL
     *
     * @param {String} url
     */
    addAdditionalParamsToUrl: function (url) {
        var parameters = utils.query(utils.merge(
                this.widget.dataset,
                this.options.data
            )),
            delimeter = url.indexOf('?') === -1 ? '?' : '&';

        return (parameters === '') ? url : (url + delimeter + parameters);
    },

    /**
     * Remember last clicked button and save to storage
     */
    rememberClicked: function (service) {
        var services = storage.getItem(config.storageKey) || [],
            serviceIndex = services.indexOf(service);

        if (serviceIndex !== -1) {
            services.splice(serviceIndex, 1);
        }

        services.splice(0, 0, service);

        storage.setItem(config.storageKey, services);
    }
};

module.exports = LikelyButton;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var dom = __webpack_require__(1);

/**
 * @param {String} url
 * @param {Function} factory
 */
var counter = function (url, factory) {
    var self = this;
    
    dom.getJSON(url, function (count) {
        try {
            if (typeof self.convertNumber === 'function') {
                count = self.convertNumber(count);
            } 
            
            factory(count);
        } 
        catch (e) {}
    });
};

/**
 * @param {Object} options
 */
module.exports = function (options) {
    options.counter = options.counter || counter;
    options.click   = options.click   || function () { return true; };
};

/***/ }),
/* 19 */
/***/ (function(module) {

module.exports = {"facebook":"5.9 16h3.3V8h2.2l.3-2.8H9.2V3.8c0-.7.1-1.1 1.1-1.1h1.4V0H9.5C6.9 0 5.9 1.3 5.9 3.6v1.7H4.3V8H6v8","twitter":"15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353","vkontakte":"15.4 12.8h-1.8c-.7 0-.9-.5-2.1-1.7-1-1-1.5-1.1-1.7-1.1-.4 0-.5.1-.5.6v1.6c0 .4-.1.7-1.3.7-1.9 0-3.9-1.1-5.3-3.2C.6 6.5 0 4.2 0 3.7c0-.3.1-.5.6-.5h1.8c.4 0 .6.2.8.7C4 6.4 5.4 8.6 6 8.6c.2 0 .3-.1.3-.7V5.4c0-1.2-.6-1.3-.6-1.7 0-.2.2-.4.4-.4h2.8c.4 0 .5.2.5.6v3.5c0 .4.2.5.3.5.2 0 .4-.1.8-.5 1.3-1.4 2.2-3.6 2.2-3.6.1-.3.3-.5.8-.5h1.8c.5 0 .6.3.5.6-.2 1-2.4 4-2.4 4-.2.3-.3.4 0 .8.2.3.8.8 1.2 1.3.8.8 1.3 1.6 1.5 2.1 0 .4-.2.7-.7.7","gplus":"8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8","odnoklassniki":"8 2.6c.9 0 1.7.7 1.7 1.7C9.7 5.2 9 6 8 6c-.9 0-1.7-.7-1.7-1.7S7.1 2.6 8 2.6zm0 5.7c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm1.6 3.2c.8-.2 1.6-.5 2.3-1 .5-.3.7-1.1.4-1.6-.3-.6-1.1-.7-1.6-.4-1.6 1-3.8 1-5.4 0-.6-.3-1.3-.1-1.6.4-.4.6-.2 1.3.3 1.7.7.5 1.5.8 2.3 1l-2.2 2.2c-.5.5-.5 1.2 0 1.7.2.2.5.3.8.3.3 0 .6-.1.8-.3L8 13.2l2.2 2.2c.5.5 1.2.5 1.7 0s.5-1.2 0-1.7l-2.3-2.2","pocket":"12.533 6.864L8.77 10.4c-.213.2-.486.3-.76.3-.273 0-.547-.1-.76-.3L3.488 6.865c-.437-.41-.45-1.09-.032-1.52.42-.428 1.114-.443 1.55-.032l3.006 2.823 3.004-2.823c.438-.41 1.132-.396 1.55.032.42.43.406 1.11-.03 1.52zm3.388-4.928c-.207-.56-.755-.936-1.363-.936H1.45C.854 1 .31 1.368.096 1.917.032 2.08 0 2.25 0 2.422v4.73l.055.94c.232 2.14 1.366 4.01 3.12 5.314.03.024.063.047.094.07l.02.013c.94.673 1.992 1.13 3.128 1.353.524.104 1.06.157 1.592.157.492 0 .986-.045 1.472-.133.058-.01.116-.022.175-.034.016-.003.033-.01.05-.018 1.088-.233 2.098-.677 3.003-1.326l.02-.015c.032-.022.064-.045.096-.07 1.753-1.303 2.887-3.173 3.12-5.312l.054-.94v-4.73c0-.165-.02-.327-.08-.487","telegram":"12.4 4.2L6.6 9.6c-.2.2-.3.4-.4.7L6 11.8c0 .2-.3.2-.3 0l-.8-2.6c-.1-.4.1-.7.3-.8l7-4.3c.2-.2.4 0 .2.1zm2.9-3L.5 6.9c-.4.1-.4.7 0 .8L4.1 9l1.4 4.5c.1.3.4.4.7.2l2-1.6c.2-.2.5-.2.7 0l3.6 2.6c.3.2.6 0 .7-.3l2.6-12.8c.1-.2-.2-.5-.5-.4","whatsapp":"15.8 7.8c0 4.2-3.4 7.6-7.6 7.6-1.3 0-2.6-.3-3.7-.9L.3 15.8l1.4-4.1C1 10.6.6 9.2.6 7.8.6 3.6 4 .2 8.2.2c4.2 0 7.6 3.4 7.6 7.6M8.1 1.4c-3.5 0-6.4 2.9-6.4 6.4 0 1.4.5 2.7 1.2 3.7l-.8 2.4 2.5-.8c1 .7 2.2 1.1 3.5 1.1 3.5 0 6.4-2.9 6.4-6.4.1-3.5-2.8-6.4-6.4-6.4M12 9.5c0-.1-.2-.1-.4-.2s-1.1-.5-1.3-.6c-.2-.1-.3-.1-.4.1-.1.2-.4.6-.6.7-.1.1-.2.1-.4 0-.1 0-.8-.2-1.5-.8-.6-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3 0-.2 0-.3-.1-.4 0-.1-.4-1-.6-1.4-.1-.3-.3-.2-.4-.2h-.4c-.1 0-.3 0-.5.2-.1.2-.6.6-.6 1.5s.7 1.8.8 1.9c.1.1 1.3 2.1 3.2 2.8 1.9.7 1.9.5 2.2.5.3 0 1.1-.4 1.3-.9.1-.4.1-.8.1-.9","viber":"13.7 6.7c0 .3.1.7-.3.8-.6.1-.5-.4-.5-.8-.4-2.3-1.2-3.2-3.5-3.7-.4-.1-.9 0-.8-.5.1-.5.5-.4.9-.3 2.3.3 4.2 2.3 4.2 4.5zM8.8 1.2c3.7.6 5.5 2.4 5.9 6.1 0 .3-.1.9.4.9s.4-.5.4-.9c0-3.6-3.1-6.8-6.7-7-.2.1-.8-.1-.8.5 0 .4.4.3.8.4zm5.7 10.2c-.5-.4-1-.7-1.5-1.1-1-.7-1.9-.7-2.6.4-.4.6-1 .6-1.6.4-1.7-.8-2.9-1.9-3.7-3.6-.3-.7-.3-1.4.5-1.9.4-.3.8-.6.8-1.2 0-.8-2-3.5-2.7-3.7-.3-.1-.6-.1-1 0C.9 1.2.2 2.7.9 4.4c2.1 5.2 5.8 8.8 11 11 .3.1.6.2.8.2 1.2 0 2.5-1.1 2.9-2.2.3-1-.5-1.5-1.1-2zM9.7 4c-.2 0-.5 0-.6.3-.1.4.2.5.5.5.9.2 1.4.7 1.5 1.7 0 .3.2.5.4.4.3 0 .4-.3.4-.6 0-1.1-1.2-2.3-2.2-2.3","email":"12.7 1c1 .5 1.8 1.2 2.3 2.2.5.9.8 1.9.8 3.1 0 .9-.1 1.8-.5 2.7-.3.9-.8 1.6-1.4 2.2-.6.6-1.4.9-2.3.9-.6 0-1.1-.2-1.5-.5-.4-.3-.6-.7-.7-1.2-.6 1.1-1.5 1.6-2.5 1.6-.8 0-1.5-.3-1.9-.8-.5-.6-.7-1.3-.7-2.2 0-.8.1-1.6.4-2.5S5.5 5 6.1 4.4c.7-.6 1.5-.8 2.6-.8.5 0 1 .1 1.4.2.5.1.9.3 1.3.6l-.7 4.9v.3c0 .2 0 .4.1.5.1.1.3.2.5.2.4 0 .8-.2 1.1-.7.3-.4.5-1 .7-1.6.1-.7.2-1.3.2-1.9 0-1.3-.4-2.3-1.1-3-.8-.7-1.9-1-3.4-1s-2.7.4-3.7 1.1c-.9.7-1.6 1.6-2 2.6S2.6 7.9 2.6 9c0 .9.2 1.8.6 2.5.4.7 1 1.3 1.7 1.7.7.4 1.7.6 2.7.6.5 0 1-.1 1.6-.2.6-.1 1.1-.3 1.5-.4l.4 1.9c-.6.2-1.2.4-1.8.5-.7.1-1.3.2-1.9.2-1.4 0-2.7-.3-3.8-.9s-1.9-1.4-2.5-2.4S.2 10.3.2 9c0-1.3.3-2.7 1-4 .6-1.4 1.6-2.5 3-3.4C5.5.7 7.2.2 9.2.2c1.3 0 2.5.3 3.5.8zm-4 8.4l.6-3.9c-.3-.1-.5-.2-.7-.2-.7 0-1.2.4-1.5 1.2-.3.8-.5 1.7-.5 2.6 0 .8.3 1.2.8 1.2s.9-.3 1.3-.9","more":"14.725 6.667H9.333V1.275C9.333.57 8.738 0 8 0S6.667.57 6.667 1.275v5.392H1.275C.57 6.667 0 7.262 0 8s.57 1.334 1.275 1.334h5.392v5.393C6.667 15.43 7.262 16 8 16s1.333-.57 1.333-1.273V9.334h5.392C15.43 9.334 16 8.738 16 8s-.57-1.333-1.275-1.333"};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Odnoklassniki service provider
 */

var config = __webpack_require__(0),
    utils  = __webpack_require__(2),
    dom    = __webpack_require__(1);

var odnoklassniki = {
    counterUrl: config.secure 
        ? undefined 
        : 'http://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}',
    counter: function (url, promise) {
        this.promises.push(promise);
        
        dom.getScript(utils.makeUrl(url, {
            index: this.promises.length - 1
        }));
    },
    promises: [],
    popupUrl: 'http://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}',
    popupWidth: 640,
    popupHeight: 400
};

utils.set(window, 'ODKL.updateCount', function (index, counter) {
    odnoklassniki.promises[index](counter);
});

module.exports = odnoklassniki;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Vkontakte service provider
 */

var config = __webpack_require__(0),
    utils  = __webpack_require__(2),
    dom    = __webpack_require__(1);

var vkontakte = {
    counterUrl: 'https://vk.com/share.php?act=count&url={url}&index={index}',
    counter: function (url, promise) {
        this.promises.push(promise);
        
        dom.getScript(utils.makeUrl(url, {
            index: this.promises.length - 1
        }));
    },
    promises: [],
    popupUrl: config.protocol + '//vk.com/share.php?url={url}&title={title}',
    popupWidth: 550,
    popupHeight: 330
};

utils.set(window, 'VK.Share.count', function (index, count) {
    vkontakte.promises[index](count);
});

module.exports = vkontakte;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * Facebook service provider
 */

module.exports = {
    counterUrl: 'https://graph.facebook.com/?fields=share,og_object{likes.limit(0).summary(true),comments.limit(0).summary(true)}&id={url}&callback=?',
    convertNumber: function (counter) {
        return counter.share.share_count;
    },
    popupUrl: 'https://www.facebook.com/sharer/sharer.php?u={url}',
    popupWidth: 600,
    popupHeight: 500
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Twitter service provider
 */

var config = __webpack_require__(0);

var twitter = {
    popupUrl: config.protocol + '//twitter.com/intent/tweet?url={url}&text={title}',
    popupWidth: 600,
    popupHeight: 450,
    click: function () {
        if (!/[\.\?:\-–—]\s*$/.test(this.options.title)) {
            this.options.title += ':';
        }

        return true;
    }
};

module.exports = twitter;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Google+ service provider
 */

var config = __webpack_require__(0),
    utils  = __webpack_require__(2),
    dom    = __webpack_require__(1);

var gplus = {
    gid: 0,
    promises: {},
    popupUrl: 'https://plus.google.com/share?url={url}',
    popupWidth: 700,
    popupHeight: 500
};

module.exports = gplus;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Pocket service provider
 */

var config = __webpack_require__(0);

var pocket = {
    popupUrl: config.protocol + '//getpocket.com/save?url={url}&format=json&callback=?',
    popupWidth: 600,
    popupHeight: 300
};

module.exports = pocket;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * Telegram service provider
 */

module.exports = {
    popupUrl: 'tg://msg?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * WhatsApp service provider
 */

module.exports = {
    popupUrl: 'whatsapp://send?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * Viber service provider
 */

module.exports = {
    popupUrl: 'viber://forward?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * E-mail service provider
 */

var config = __webpack_require__(0);

var email = {
    popupUrl: 'mailto:?subject={title}&body={url}',
    popupWidth: 0,
    popupHeight: 0
};

module.exports = email;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(0);

module.exports = {
	parent: config.name,
    className: config.name + '--expanded'
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var services = __webpack_require__(4),
    Factory  = __webpack_require__(32),
    utils    = __webpack_require__(2),
    dom      = __webpack_require__(1);

var factories = {};

/**
 * Fetch data
 *
 * @param {String} service
 * @param {String} url
 * @param {Object} options
 * @return {Promise}
 */
module.exports = function (service, url, options) {
    if (!factories[service]) {
        factories[service] = {};
    }

    var counters = factories[service],
        counter  = counters[url];

    if (!options.forceUpdate && counter) {
        return counter;
    }

    counter = Factory();

    var href = utils.makeUrl(options.counterUrl, {
        url: url
    });

    services[service].counter(href, counter, url);

    counters[url] = counter;

    return counters[url];
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * Factory function
 * 
 * This function returns function with following API:
 * 
 * - if passed argument is callback, then this callback would be callled
 *   if the value was changed
 * - if passed argument is anything but undefined or function, then this 
 *   function behaves like setter
 * - if argument isn't provided, then return value stored in closure
 * 
 * @param {Object} value
 * @return {Function}
 */
module.exports = function (value) {
    var listeners = [];
    
    return function (argument) {
        var type = typeof argument;
        
        if (type == 'undefined') {
            return value;
        }
        else if (type == 'function') {
            listeners.push(argument);
        }
        else {
            value = argument;
            
            listeners.forEach(function (listener) {
                listener(argument);
            });
        }
    };
};

/***/ })
/******/ ]);
//# sourceMappingURL=all.js.map