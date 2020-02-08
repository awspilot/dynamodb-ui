(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ractive"), require("aws-sdk"));
	else if(typeof define === 'function' && define.amd)
		define("@awspilot/ractive-dynamodb-ui", ["ractive", ], factory);
	else if(typeof exports === 'object')
		exports["@awspilot/ractive-dynamodb-ui"] = factory(require("ractive"), require("aws-sdk"));
	else
		root["@awspilot/ractive-dynamodb-ui"] = factory(root["Ractive"], root["AWS"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__5__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	isolated: true,
	template: '\n\t\t<div class=\'tabledata\' style=\'{{style}}\'>\n\t\t\t<div class=\'tabledatahead\'>\n\t\t\t\t{{#columns:i}}\n\t\t\t\t\t<div style=\'width: {{#if i === 0}}32px{{else}}{{100/columns.length}}%{{/if}} \'>{{.}}</div>\n\t\t\t\t{{/columns}}\n\t\t\t</div>\n\t\t\t<div class=\'tabledatacontent\'>\n\n\t\t\t\t{{#if rows.length === 0}}\n\t\t\t\t\t<br><small>Empty</small>\n\t\t\t\t{{/if}}\n\t\t\t\t{{#if rows === null }}\n\t\t\t\t\t<br><small>Loading...</small>\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#if err.errorMessage }}\n\t\t\t\t\t<br><small style="color:red">{{err.errorMessage}}</small>\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#rows:row}}\n\t\t\t\t<div class=\'tabledatarow {{#if .[0].selected}}selected{{/if}}\' on-click=\'selectrow\'>\n\t\t\t\t\t{{#each .:i}}\n\t\t\t\t\t<div class=\'tabledatacell\n\t\t\t\t\t\t{{#if .KEY}}t-K{{/if}}\n\t\t\t\t\t\t{{#if .HASH}}t-HASH{{/if}}\n\t\t\t\t\t\t{{#if .S}}t-S{{/if}}\n\t\t\t\t\t\t{{#if .N}}t-N{{/if}}\n\t\t\t\t\t\t{{#if .BOOL}}t-BOOL{{/if}}\n\t\t\t\t\t\t{{#if .NULL}}t-NULL{{/if}}\n\t\t\t\t\t\t{{#if .L}}t-L{{/if}}\n\t\t\t\t\t\t{{#if .M}}t-M{{/if}}\n\t\t\t\t\t\t{{#if .U}}t-U{{/if}}\n\t\t\t\t\t\t\' style=\'width: {{#if i === 0}}32px{{else}}{{100/columns.length}}%{{/if}} \'\n\t\t\t\t\t\t{{#if .HASH}}on-click=\'cellclick\'{{/if}}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t{{#if .KEY}}\n\t\t\t\t\t\t\t{{#if .selected}}\n\t\t\t\t\t\t\t\t<input class=\'input-checkbox\' type=\'checkbox\' checked>\n\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t<input class=\'input-checkbox\' type=\'checkbox\'>\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{#if .HASH}}<a>{{.HASH}}</a>{{/if}}\n\t\t\t\t\t\t{{#if .S}}{{.S}}{{/if}}\n\t\t\t\t\t\t{{#if .N}}{{.N}}{{else}}{{#if .N === 0}}0{{/if}}{{/if}}\n\t\t\t\t\t\t{{#if .BOOL}}{{.BOOL}}{{/if}}\n\t\t\t\t\t\t{{#if .NULL}}NULL{{/if}}\n\t\t\t\t\t\t{{#if .L}}[...]{{/if}}\n\t\t\t\t\t\t{{#if .M}}{...}{{/if}}\n\t\t\t\t\t</div>\n\t\t\t\t\t{{/each}}\n\t\t\t\t</div>\n\t\t\t\t{{/rows}}\n\t\t\t</div>\n\t\t</div>\n\t\t',

	data: function data() {
		return {};
	},
	oninit: function oninit() {
		this.on('cellclick', function (e) {
			var col = this.get(e.resolve());
			//console.log("cellclick", e.resolve(), " = ",this.get( e.resolve())  )
			//console.log( this.get(e.resolve().split('.').slice(0,-1).join('.')) )
			this.fire('colclick', undefined, col.item, col.raw);
		});
	}
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _hash_key_name = function _hash_key_name() {
	return (this.get('describeTable').KeySchema.filter(function (k) {
		return k.KeyType === 'HASH';
	})[0] || {}).AttributeName;
};

var _hash_key_type = function _hash_key_type() {
	var ractive = this;

	var ret;
	this.get('describeTable.AttributeDefinitions').map(function (at) {
		if (at.AttributeName === ractive._hash_key_name()) ret = at.AttributeType;
	});
	return ret;
};

var _hash_key_type_name = function _hash_key_type_name() {
	return { S: 'String', N: 'Number', 'B': 'Binary' }[this._hash_key_type()];
};

var _range_key_name = function _range_key_name() {
	return (this.get('describeTable').KeySchema.filter(function (k) {
		return k.KeyType === 'RANGE';
	})[0] || {}).AttributeName;
};

var _range_key_type = function _range_key_type() {
	var ractive = this;

	var ret;
	this.get('describeTable.AttributeDefinitions').map(function (at) {
		if (at.AttributeName === ractive._range_key_name()) ret = at.AttributeType;
	});
	return ret;
};

var _range_key_type_name = function _range_key_type_name() {
	return { S: 'String', N: 'Number', 'B': 'Binary' }[this._range_key_type()];
};

var _gsi_hash_key_name = function _gsi_hash_key_name(indexname) {

	var index = (this.get('describeTable.GlobalSecondaryIndexes') || []).filter(function (i) {
		return i.IndexName === indexname;
	})[0];
	if (!index) return;

	return (index.KeySchema.filter(function (k) {
		return k.KeyType === 'HASH';
	})[0] || {}).AttributeName;
};

var _gsi_hash_key_type = function _gsi_hash_key_type(indexname) {
	var ractive = this;

	var ret;
	this.get('describeTable.AttributeDefinitions').map(function (at) {
		if (at.AttributeName === ractive._gsi_hash_key_name(indexname)) ret = at.AttributeType;
	});
	return ret;
};

var _gsi_hash_key_type_name = function _gsi_hash_key_type_name(indexname) {
	return { S: 'String', N: 'Number', 'B': 'Binary' }[this._gsi_hash_key_type(indexname)];
};

var _gsi_range_key_name = function _gsi_range_key_name(indexname) {

	var index = (this.get('describeTable.GlobalSecondaryIndexes') || []).filter(function (i) {
		return i.IndexName === indexname;
	})[0];
	if (!index) return;

	return (index.KeySchema.filter(function (k) {
		return k.KeyType === 'RANGE';
	})[0] || {}).AttributeName;
};

var _gsi_range_key_type = function _gsi_range_key_type(indexname) {
	var ractive = this;

	var ret;
	this.get('describeTable.AttributeDefinitions').map(function (at) {
		if (at.AttributeName === ractive._gsi_range_key_name(indexname)) ret = at.AttributeType;
	});
	return ret;
};

var _gsi_range_key_type_name = function _gsi_range_key_type_name(indexname) {
	return { S: 'String', N: 'Number', 'B': 'Binary' }[this._gsi_range_key_type(indexname)];
};

var _lsi_hash_key_name = function _lsi_hash_key_name(indexname) {

	var index = (this.get('describeTable.LocalSecondaryIndexes') || []).filter(function (i) {
		return i.IndexName === indexname;
	})[0];
	if (!index) return;

	return (index.KeySchema.filter(function (k) {
		return k.KeyType === 'HASH';
	})[0] || {}).AttributeName;
};

var _lsi_hash_key_type = function _lsi_hash_key_type(indexname) {
	var ractive = this;

	var ret;
	this.get('describeTable.AttributeDefinitions').map(function (at) {
		if (at.AttributeName === ractive._lsi_hash_key_name(indexname)) ret = at.AttributeType;
	});
	return ret;
};

var _lsi_hash_key_type_name = function _lsi_hash_key_type_name(indexname) {
	return { S: 'String', N: 'Number', 'B': 'Binary' }[this._lsi_hash_key_type(indexname)];
};

var _lsi_range_key_name = function _lsi_range_key_name(indexname) {

	var index = (this.get('describeTable.LocalSecondaryIndexes') || []).filter(function (i) {
		return i.IndexName === indexname;
	})[0];
	if (!index) return;

	return (index.KeySchema.filter(function (k) {
		return k.KeyType === 'RANGE';
	})[0] || {}).AttributeName;
};

var _lsi_range_key_type = function _lsi_range_key_type(indexname) {
	var ractive = this;

	var ret;
	this.get('describeTable.AttributeDefinitions').map(function (at) {
		if (at.AttributeName === ractive._lsi_range_key_name(indexname)) ret = at.AttributeType;
	});
	return ret;
};

var _lsi_range_key_type_name = function _lsi_range_key_type_name(indexname) {
	return { S: 'String', N: 'Number', 'B': 'Binary' }[this._lsi_range_key_type(indexname)];
};

var _clone_deep = function _clone_deep(o) {

	if (typeof o === "string" || typeof o === "number" || typeof o === "boolean" || o === null) return JSON.parse(JSON.stringify(o));

	if (o instanceof Uint8Array) {
		var clone = new Uint8Array(o.length);
		for (var i = 0; i < o.length; i++) {
			clone[i] = o[i];
		}return clone;
	}

	if ((typeof o === 'undefined' ? 'undefined' : _typeof(o)) === "object") {
		if (Array.isArray(o)) {
			// array
			var clone = [];
			o.map(function (v, k, arr) {
				clone[k] = _clone_deep(v);
			});
			return clone;
		} else if (o instanceof Set) {
			var clone = new Set();
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = o[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var i = _step.value;
					clone.add(_clone_deep(i));
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return clone;
		} else {
			// object
			var clone = {};
			Object.keys(o).map(function (k) {
				clone[k] = _clone_deep(o[k]);
			});
			return clone;
		}
	}
};

exports.default = {
	_hash_key_name: _hash_key_name,
	_hash_key_type: _hash_key_type,
	_hash_key_type_name: _hash_key_type_name,

	_range_key_name: _range_key_name,
	_range_key_type: _range_key_type,
	_range_key_type_name: _range_key_type_name,

	_gsi_hash_key_name: _gsi_hash_key_name,
	_gsi_hash_key_type: _gsi_hash_key_type,
	_gsi_hash_key_type_name: _gsi_hash_key_type_name,

	_gsi_range_key_name: _gsi_range_key_name,
	_gsi_range_key_type: _gsi_range_key_type,
	_gsi_range_key_type_name: _gsi_range_key_type_name,

	_lsi_hash_key_name: _lsi_hash_key_name,
	_lsi_hash_key_type: _lsi_hash_key_type,
	_lsi_hash_key_type_name: _lsi_hash_key_type_name,

	_lsi_range_key_name: _lsi_range_key_name,
	_lsi_range_key_type: _lsi_range_key_type,
	_lsi_range_key_type_name: _lsi_range_key_type_name,

	_clone_deep: _clone_deep
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(2)):undefined}(window,function(n){return(l={},s.m=o=[function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.IconTrash=Ractive.extend({template:'\n\t\t<svg class=\'icon icon-trash\' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 405.429C128 428.846 147.198 448 170.667 448h170.667C364.802 448 384 428.846 384 405.429V160H128v245.429zM416 96h-80l-26.785-32H202.786L176 96H96v32h320V96z"/></svg>\n\t'}),e.IconRight=Ractive.extend({template:'\n\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 128l128 128-128 128z"/></svg>\n\t'}),e.IconDown=Ractive.extend({template:'\n\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 192l128 128 128-128z"/></svg>\n\t'})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.default=Ractive.extend({components:{"icon-trash":o.IconTrash},template:"\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}} </div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\x3c!-- <td class='jsoneditor-datatype'>String</td> --\x3e\n\t\t\t\t\t\t\t<td class='jsoneditor-separator'>:</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree' style='width: 100%;'>\n\t\t\t\t\t\t\t\t{{#if editing}}\n\t\t\t\t\t\t\t\t\t<textarea class='jsoneditor-input jsoneditor-string' style='height: {{textarea_height}}px;line-height: {{line_height}}px' on-focus='focus' on-blur='blur' on-keyup='keyup' value='{{value}}'></textarea>\n\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t<input class='jsoneditor-input jsoneditor-string' value='{{ JSON.stringify(value) }}' readonly='true' on-click='startEditing' />\n\t\t\t\t\t\t\t\t\t\x3c!--<div class='jsoneditor-value jsoneditor-string' style='cursor: pointer;height: {{line_height}}px;line-height: {{line_height}}px;overflow: hidden;' on-click='startEditing'>{{ JSON.stringify(value) }}</div>--\x3e\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t\t<icon-trash />\n\t\t\t\t</button>\n\t\t\t</td>\n\t\t</tr>\n\t\t",data:function(){return{line_height:22,textarea_height:22}},on:{startEditing:function(t){var e=t.node.parentNode;this.set("editing",!0),e.getElementsByTagName("textarea").length&&e.getElementsByTagName("textarea")[0].focus()},focus:function(){var t=this.get("value").split("\n").length;this.set("textarea_height",t*this.get("line_height"))},blur:function(){this.set("editing",!1)},keyup:function(){var t=this.get("value").split("\n").length;this.set("textarea_height",t*this.get("line_height"))},delete:function(){this.parent.delete_key(this.get("key"))}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.default=Ractive.extend({components:{"icon-trash":o.IconTrash},template:"\n\t<tr>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\x3c!--<td class='jsoneditor-datatype'>Number</td>--\x3e\n\t\t\t\t\t\t<td class='jsoneditor-separator'>:</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree' style='width: 100%;'>\n\t\t\t\t\t\t\t<input type='number' value='{{mirror_value}}' class='jsoneditor-input jsoneditor-number'  />\n\t\t\t\t\t\t\t\x3c!--\n\t\t\t\t\t\t\t<div contenteditable='true' spellcheck='false' class='jsoneditor-value jsoneditor-number' >{{ value }}</div>\n\t\t\t\t\t\t\t--\x3e\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\t",data:function(){return{mirror_value:""}},on:{delete:function(){this.parent.delete_key(this.get("key"))},init:function(){var t=this.get("value");this.set("mirror_value",t),this.observe("mirror_value",function(t,e,n){this.set({value:parseFloat(t)?t.toString():""})})}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.default=Ractive.extend({components:{"icon-trash":o.IconTrash},template:"\n\t<tr>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-datatype'>Binary</td>\n\t\t\t\t\t\t<td class='jsoneditor-separator'>:</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree' style='width: 100%;'>\n\t\t\t\t\t\t\t<input value='{{updated_value}}' class='jsoneditor-input jsoneditor-binary {{#if valid === false}}error{{/if}}' on-keyup='validate' on-blur='validate' />\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\t",data:function(){return{updated_value:""}},on:{init:function(){var s=this.get("value");"string"==typeof s&&(this.set({updated_value:JSON.parse(JSON.stringify(s))}),s=Uint8Array.from(atob(s),function(t){return t.charCodeAt(0)}),this.set({value:s})),s instanceof Uint8Array&&this.set({updated_value:btoa(String.fromCharCode.apply(null,s))}),this.observe("updated_value",function(t,e,n){if(console.log("changed",t,e),"string"==typeof s)return this.set("value",t);try{var o=Uint8Array.from(atob(t),function(t){return t.charCodeAt(0)});this.set({value:o}),console.log(o)}catch(t){}})},validate:function(){var t=!1;try{Uint8Array.from(atob(this.get("updated_value")),function(t){return t.charCodeAt(0)});t=!0}catch(t){}this.set("valid",t)},delete:function(){this.parent.delete_key(this.get("key"))}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.default=Ractive.extend({components:{"icon-trash":o.IconTrash},template:"\n\t<tr>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\x3c!--<td class='jsoneditor-datatype'>Boolean</td> --\x3e\n\t\t\t\t\t\t<td class='jsoneditor-separator'>:</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree' style='width: 100%;'>\n\t\t\t\t\t\t\t<input value='{{value}}' class='jsoneditor-input jsoneditor-boolean {{#if (value !== true ) && (value !== false) }}error{{/if}}' on-keyup='validate' on-blur='validate' />\n\t\t\t\t\t\t\t\x3c!--\n\t\t\t\t\t\t\t<div contenteditable='true' spellcheck='false' class='jsoneditor-value jsoneditor-boolean' >{{ value ? true : false }}</div>\n\t\t\t\t\t\t\t--\x3e\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\t",on:{init:function(){},validate:function(){"true"===this.get("value")&&this.set("value",!0),"false"===this.get("value")&&this.set("value",!1)},delete:function(){this.parent.delete_key(this.get("key"))}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.default=Ractive.extend({components:{"icon-trash":o.IconTrash},template:"\n\t<tr>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\x3c!--<td class='jsoneditor-datatype'>Null</td>--\x3e\n\t\t\t\t\t\t<td class='jsoneditor-separator'>:</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div class='jsoneditor-input jsoneditor-null' >null</div>\n\t\t\t\t\t\t\t\x3c!--<div class='jsoneditor-value jsoneditor-null' >null</div>--\x3e\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\t",on:{delete:function(){this.parent.delete_key(this.get("key"))}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),l=(o=s)&&o.__esModule?o:{default:o},i=n(0);e.default=Ractive.extend({components:{S:l.default,"icon-trash":i.IconTrash},template:"\n\n\t<tr class=' jsoneditor-expandable'>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-datatype'>StringSet[{{ value.length }}]</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'></td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div class='jsoneditor-value jsoneditor-array'></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\n\t{{#if open}}\n\t<tr class='jsoneditor-appender'>\n\t\t<td></td><td></td><td>\n\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='prepend'></div>\n\t\t</td><td></td>\n\t</tr>\n\t{{#value}}\n\t\t<S key={{@index}} value={{ . }} level='{{ level + 1 }}' />\n\t\t<tr class='jsoneditor-appender'>\n\t\t\t<td></td><td></td><td>\n\t\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='elementinsert'></div>\n\t\t\t</td><td></td>\n\t\t</tr>\n\t{{/value}}\n\t{{/if}}\n\n\t<tr class='jsoneditor-append'></tr>\n\n\t",delete_key:function(o){var t=this.get("value");t=t.filter(function(t,e,n){return e!==o}),this.set({value:t})},data:function(){return{open:!1}},on:{delete:function(){this.parent.delete_key(this.get("key"))},prepend:function(){var t=this.get("value");t=[""].concat(t),this.set({value:t})},elementinsert:function(t){var e=this.get("value"),n=parseInt(t.resolve().split(".").pop());e.splice(n+1,0,""),this.set({value:e})}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(2),l=(o=s)&&o.__esModule?o:{default:o},i=n(0);e.default=Ractive.extend({components:{N:l.default,"icon-trash":i.IconTrash},template:"\n\n\t<tr class=' jsoneditor-expandable'>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-datatype'>NumberSet[{{ value.length }}]</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'></td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div class='jsoneditor-value jsoneditor-array'></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\n\t{{#if open}}\n\t<tr class='jsoneditor-appender'>\n\t\t<td></td><td></td><td>\n\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='prepend'></div>\n\t\t</td><td></td>\n\t</tr>\n\t{{#value}}\n\t\t{{#if !hide}}\n\t\t<N key={{@index}} value={{ . }} level='{{ level + 1 }}' />\n\t\t<tr class='jsoneditor-appender'>\n\t\t\t<td></td><td></td><td>\n\t\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='elementinsert'></div>\n\t\t\t</td><td></td>\n\t\t</tr>\n\t\t{{/if}}\n\t{{/value}}\n\t{{/if}}\n\n\t<tr class='jsoneditor-append'></tr>\n\n\t",delete_key:function(o){var t=this.get("value");t=t.filter(function(t,e,n){return e!==o}),this.set({value:t})},data:function(){return{open:!1,hide:!1}},on:{delete:function(){this.parent.delete_key(this.get("key"))},prepend:function(){var t=this.get("value");t=[""].concat(t),this.set({value:t}),this.set("hide",!0),this.set("hide",!1)},elementinsert:function(t){var e=this.get("value"),n=parseInt(t.resolve().split(".").pop());e.splice(n+1,0,""),this.set({value:e}),this.set("hide",!0),this.set("hide",!1)}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(3),l=(o=s)&&o.__esModule?o:{default:o},i=n(0);e.default=Ractive.extend({components:{B:l.default,"icon-trash":i.IconTrash},template:"\n\n\t<tr class=' jsoneditor-expandable'>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-datatype'>BinarySet[{{ value.length }}]</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'></td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div class='jsoneditor-value jsoneditor-array'></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\n\t{{#if open}}\n\t\t<tr class='jsoneditor-appender'>\n\t\t\t<td></td><td></td><td>\n\t\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;'  on-click='prepend'></div>\n\t\t\t</td><td></td>\n\t\t</tr>\n\t{{#value}}\n\t\t{{#if !hide}}\n\t\t<B key={{@index}} value={{ . }} level='{{ level + 1 }}' />\n\t\t<tr class='jsoneditor-appender'>\n\t\t\t<td></td><td></td><td>\n\t\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='elementinsert'></div>\n\t\t\t</td><td></td>\n\t\t</tr>\n\t\t{{/if}}\n\t{{/value}}\n\t{{/if}}\n\n\t<tr class='jsoneditor-append'></tr>\n\n\t",delete_key:function(o){var t=this.get("value");t=t.filter(function(t,e,n){return e!==o}),this.set({value:t})},data:function(){return{open:!1,hide:!1}},on:{delete:function(){this.parent.delete_key(this.get("key"))},prepend:function(){var t=this.get("value");t=[Uint8Array.from(atob("InsertBase64Here"),function(t){return t.charCodeAt(0)})].concat(t),this.set({value:t}),this.set("hide",!0),this.set("hide",!1)},elementinsert:function(t){var e=this.get("value"),n=parseInt(t.resolve().split(".").pop());e.splice(n+1,0,Uint8Array.from(atob("InsertBase64Here"),function(t){return t.charCodeAt(0)})),this.set({value:e}),this.set("hide",!0),this.set("hide",!1)}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=f(n(1)),s=f(n(2)),l=f(n(4)),i=f(n(5)),d=f(n(3)),a=f(n(6)),r=f(n(7)),u=f(n(8)),c=f(n(10)),p=f(n(15)),v=n(0);function f(t){return t&&t.__esModule?t:{default:t}}var b=Ractive.extend({components:{S:o.default,N:s.default,BOOL:l.default,NULL:i.default,B:d.default,SS:a.default,NS:r.default,BS:u.default,M:c.default,appender:p.default,"icon-trash":v.IconTrash},onconfig:function(){this.components.L=b},template:"\n\n\t<tr class=' jsoneditor-expandable'>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-datatype'>List[{{ value.length }}]</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'></td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div class='jsoneditor-value jsoneditor-array'></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\n\t{{#if open}}\n\t\t<appender level={{level}} index={{null}}/>\n\t{{#value}}\n\t\t{{#if .hasOwnProperty('S')}}\n\t\t\t<S key={{@index}} value={{ .S }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('N')}}\n\t\t\t<N key={{@index}} value={{ .N }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('BOOL')}}\n\t\t\t<BOOL key={{@index}} value={{ .BOOL }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('NULL')}}\n\t\t\t<NULL key={{@index}} level='1' level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('B')}}\n\t\t\t<B key={{@index}} value={{ .B }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('L')}}\n\t\t\t<L key={{@index}} value={{ .L }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('M')}}\n\t\t\t<M key={{@index}} value={{ .M }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('SS')}}\n\t\t\t<SS key={{@index}} value={{ .SS }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('NS')}}\n\t\t\t<NS key={{@index}} value={{ .NS }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('BS')}}\n\t\t\t<BS key={{@index}} value={{ .BS }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t<appender level={{level}} index={{@index}}/>\n\n\t{{/value}}\n\t{{/if}}\n\n\t<tr class='jsoneditor-append'></tr>\n\n\t",delete_key:function(o){var t=this.get("value");t=t.filter(function(t,e,n){return e!==o}),this.set({value:t})},data:function(){return{open:!1}},prepend_attribute:function(t,e){var n,o=this.get("value");"S"===t&&(n={S:""}),"N"===t&&(n={N:""}),"BOOL"===t&&(n={BOOL:""}),"NULL"===t&&(n={NULL:!0}),"B"===t&&(n={B:Uint8Array.from(atob("InsertBase64Here"),function(t){return t.charCodeAt(0)})}),"SS"===t&&(n={SS:[]}),"NS"===t&&(n={NS:[]}),"BS"===t&&(n={BS:[]}),"L"===t&&(n={L:[]}),"M"===t&&(n={M:{}}),null===e?o=[n].concat(o):o.splice(e+1,0,n),this.set({value:o})},on:{delete:function(){this.parent.delete_key(this.get("key"))}}});e.default=b},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=f(n(1)),s=f(n(2)),l=f(n(4)),i=f(n(5)),d=f(n(3)),a=f(n(6)),r=f(n(7)),u=f(n(8)),c=f(n(9)),p=f(n(11)),v=n(0);function f(t){return t&&t.__esModule?t:{default:t}}var b=Ractive.extend({components:{S:o.default,N:s.default,BOOL:l.default,NULL:i.default,B:d.default,SS:a.default,NS:r.default,BS:u.default,L:c.default,appender:p.default,"icon-trash":v.IconTrash},onconfig:function(){this.components.M=b,this.components.L=c.default},template:"\n\n\t\t<tr class=' jsoneditor-expandable'>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-datatype'>Map{{ '{' + Object.keys(value).length + '}' }}</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'></td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<div class='jsoneditor-value jsoneditor-object'></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t\t<icon-trash />\n\t\t\t\t</button>\n\t\t\t</td>\n\t\t</tr>\n\n\t\t{{#if open}}\n\t\t\t<appender level={{level}} index={{null}}/>\n\t\t{{#each value }}\n\t\t\t{{#if .hasOwnProperty('S')}}\n\t\t\t\t<S key={{@key}} value={{ .S }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('N')}}\n\t\t\t\t<N key={{@key}} value={{ .N }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('BOOL')}}\n\t\t\t\t<BOOL key={{@key}} value={{ .BOOL }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('NULL')}}\n\t\t\t\t<NULL key={{@key}} level='1' level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('B')}}\n\t\t\t\t<B key={{@key}} value={{ .B }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('L')}}\n\t\t\t\t<L key={{@key}} value={{ .L }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('M')}}\n\t\t\t\t<M key={{@key}} value={{ .M }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('SS')}}\n\t\t\t\t<SS key={{@key}} value={{ .SS }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('NS')}}\n\t\t\t\t<NS key={{@key}} value={{ .NS }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('BS')}}\n\t\t\t\t<BS key={{@key}} value={{ .BS }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\t\t\t<appender level={{level}} index={{@key}}/>\n\n\t\t{{/each}}\n\t\t{{/if}}\n\n\n\t\t<tr class='jsoneditor-append'></tr>\n\n\t",delete_key:function(t){var e=this.get("value");delete e[t],this.set({value:e})},data:function(){return{open:!1}},prepend_attribute:function(t,e,n){console.log("prepend",t,e,n);var o,s=this.get("value");"S"===t&&(o={S:""}),"N"===t&&(o={N:""}),"BOOL"===t&&(o={BOOL:""}),"NULL"===t&&(o={NULL:!0}),"B"===t&&(o={B:Uint8Array.from(atob("InsertBase64Here"),function(t){return t.charCodeAt(0)})}),"SS"===t&&(o={SS:[]}),"NS"===t&&(o={NS:[]}),"BS"===t&&(o={BS:[]}),"L"===t&&(o={L:[]}),"M"===t&&(o={M:{}});var l={};null===e?(l[n]=o,Object.keys(s).map(function(t){l[t]=s[t]})):Object.keys(s).map(function(t){l[t]=s[t],t===e&&(l[n]=o)}),this.set({value:{}}),this.set({value:l})},on:{delete:function(){this.parent.delete_key(this.get("key"))}}});e.default=b},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.default=Ractive.extend({components:{"icon-trash":o.IconTrash},template:"\n\t{{#if type === null}}\n\t<tr class='jsoneditor-appender'>\n\t\t<td></td><td></td><td>\n\t\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='pickatype'></div>\n\t\t</td><td></td>\n\t</tr>\n\t{{/if}}\n\n\t{{#if type !== null }}\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ (level+1) * 24 }}px;'>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<input value={{field_name}} placeholder='Attribute Name' style='margin-top: 3px;' />\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-separator'>:</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree' style='width: 100%;'>\n\t\t\t\t\t\t\t\t<select value={{type}} on-change='typepicked' style='margin-top: 3px;' disabled={{type_disabled}}>\n\t\t\t\t\t\t\t\t\t<option value=''>Select Data Type</option>\n\t\t\t\t\t\t\t\t\t<option value='S'>String</option>\n\t\t\t\t\t\t\t\t\t<option value='N'>Number</option>\n\t\t\t\t\t\t\t\t\t<option value='BOOL'>Boolean</option>\n\t\t\t\t\t\t\t\t\t<option value='NULL'>Null</option>\n\t\t\t\t\t\t\t\t\t<option value='B'>Binary</option>\n\t\t\t\t\t\t\t\t\t<option value='SS'>StringSet</option>\n\t\t\t\t\t\t\t\t\t<option value='NS'>NumberSet</option>\n\t\t\t\t\t\t\t\t\t<option value='BS'>BinarySet</option>\n\t\t\t\t\t\t\t\t\t<option value='L'>List</option>\n\t\t\t\t\t\t\t\t\t<option value='M'>Map</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t\t<icon-trash />\n\t\t\t\t</button>\n\t\t\t</td>\n\t\t</tr>\n\t{{/if}}\n\t",data:function(){return{type:null,field_name:"",type_disabled:!0}},on:{init:function(){this.observe("field_name",function(t,e,n){t.trim()?this.set({type_disabled:!1}):this.set({type_disabled:!0})})},delete:function(){this.set({type:null})},pickatype:function(){this.set({type:""})},typepicked:function(){this.get("type")&&this.get("field_name").trim()&&(this.parent.prepend_attribute(this.get("type"),this.get("index"),this.get("field_name")),this.set({type:null}))}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(13);var o=b(n(14)),s=b(n(1)),l=b(n(2)),i=b(n(4)),d=b(n(5)),a=b(n(3)),r=b(n(6)),u=b(n(7)),c=b(n(8)),p=b(n(9)),v=b(n(10)),f=b(n(11));function b(t){return t&&t.__esModule?t:{default:t}}e.default=o.default.extend({template:'\n\n\t\t<div class="awspilot-dynamodb-json-editor jsoneditor theme-{{theme}}" style="{{style}}">\n\t\t\t<div class="jsoneditor-menu {{.[\'menu-class\']}}" style="{{.[\'menu-style\']}}">\n\t\t\t\t<select value=\'{{mode}}\' style="height: 20px;margin: 6px;">\n\t\t\t\t\t<option value=\'tree\'>Tree</option>\n\t\t\t\t\t<option value=\'code\'>Code</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t{{#if ((mode === \'tree\') && (navigationBar === true)) }}\n\t\t\t\t<div class="jsoneditor-navbar {{navbar-class}}" style={{.[\'navbar-style\']}}></div>\n\t\t\t{{/if}}\n\n\t\t\t<div class="jsoneditor-outer has-main-menu-bar {{#if ((mode === \'tree\') && (navigationBar === true)) }}has-nav-bar{{/if}}">\n\t\t\t\t{{#if mode === \'code\'}}\n\t\t\t\t\t<textarea style="width: 100%;height: 100%;border: 0px;margin: 0px;padding: 0px;">{{ JSON.stringify(item, null, "\\t") }}</textarea>\n\t\t\t\t{{else}}\n\t\t\t\t<div class="jsoneditor-tree">\n\t\t\t\t\t<div class="jsoneditor-tree-inner">\n\n\t\t\t\t\t\t<table border=0 class="jsoneditor-tree">\n\t\t\t\t\t\t\t<colgroup><col width="24px"><col width="24px"><col></colgroup>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr class=" jsoneditor-expandable">\n\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<td><button type="button" class="jsoneditor-button jsoneditor-contextmenu"></button></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<table class="jsoneditor-values" style="border-collapse: collapse; margin-left: 0px;">\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="jsoneditor-tree"><button type="button" class="jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}" on-click=\'@this.toggle(\'open\')\' ></button></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="jsoneditor-tree">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div contenteditable="false" class="jsoneditor-readonly">Item</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="jsoneditor-tree"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="jsoneditor-tree">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="jsoneditor-value jsoneditor-object">{ {{ Object.keys(item).length }} }</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t{{#if open}}\n\t\t\t\t\t\t\t\t\t<appender level={{0}} index={{null}}/>\n\t\t\t\t\t\t\t\t{{#each item }}\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'S\')}}\n\t\t\t\t\t\t\t\t\t\t<S key={{@key}} value={{ .S }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'N\')}}\n\t\t\t\t\t\t\t\t\t\t<N key={{@key}} value={{ .N }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'BOOL\')}}\n\t\t\t\t\t\t\t\t\t\t<BOOL key={{@key}} value={{ .BOOL }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'NULL\')}}\n\t\t\t\t\t\t\t\t\t\t<NULL key={{@key}} level="1" level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'B\')}}\n\t\t\t\t\t\t\t\t\t\t<B key={{@key}} value={{ .B }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'L\')}}\n\t\t\t\t\t\t\t\t\t\t<L key={{@key}} value={{ .L }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'M\')}}\n\t\t\t\t\t\t\t\t\t\t<M key={{@key}} value={{ .M }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'SS\')}}\n\t\t\t\t\t\t\t\t\t\t<SS key={{@key}} value={{ .SS }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'NS\')}}\n\t\t\t\t\t\t\t\t\t\t<NS key={{@key}} value={{ .NS }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'BS\')}}\n\t\t\t\t\t\t\t\t\t\t<BS key={{@key}} value={{ .BS }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t<appender level={{0}} index={{@key}}/>\n\t\t\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t',components:{S:s.default,N:l.default,BOOL:i.default,NULL:d.default,B:a.default,SS:r.default,NS:u.default,BS:c.default,L:p.default,M:v.default,appender:f.default},data:function(){return{open:!0,mode:"tree",mainMenuBar:!0,navigationBar:!0,statusBar:!0}},prepend_attribute:function(t,e,n){console.log("prepend",t,e,n);var o,s=this.get("item");"S"===t&&(o={S:""}),"N"===t&&(o={N:""}),"BOOL"===t&&(o={BOOL:""}),"NULL"===t&&(o={NULL:!0}),"B"===t&&(o={B:Uint8Array.from(atob("InsertBase64Here"),function(t){return t.charCodeAt(0)})}),"SS"===t&&(o={SS:[]}),"NS"===t&&(o={NS:[]}),"BS"===t&&(o={BS:[]}),"L"===t&&(o={L:[]}),"M"===t&&(o={M:{}});var l={};null===e?(l[n]=o,Object.keys(s).map(function(t){l[t]=s[t]})):Object.keys(s).map(function(t){l[t]=s[t],t===e&&(l[n]=o)}),this.set({item:{}}),this.set({item:l})},delegate:!1,elToFocus:null,delete_key:function(t){var e=this.get("item");delete e[t],this.set({item:e})},on:{}})},function(t,e,n){},function(t,e){t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.default=Ractive.extend({components:{"icon-trash":o.IconTrash},template:"\n\t{{#if type === null}}\n\t<tr class='jsoneditor-appender'>\n\t\t<td></td><td></td><td>\n\t\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='pickatype'></div>\n\t\t</td><td></td>\n\t</tr>\n\t{{/if}}\n\n\t{{#if type !== null }}\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ (level+1) * 24 }}px;'>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>*</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-separator'>:</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree' style='width: 100%;'>\n\t\t\t\t\t\t\t\t<select value={{type}} on-change='typepicked' style='margin-top: 3px;'>\n\t\t\t\t\t\t\t\t\t<option value=''>Select Data Type</option>\n\t\t\t\t\t\t\t\t\t<option value='S'>String</option>\n\t\t\t\t\t\t\t\t\t<option value='N'>Number</option>\n\t\t\t\t\t\t\t\t\t<option value='BOOL'>Boolean</option>\n\t\t\t\t\t\t\t\t\t<option value='NULL'>Null</option>\n\t\t\t\t\t\t\t\t\t<option value='B'>Binary</option>\n\t\t\t\t\t\t\t\t\t<option value='SS'>StringSet</option>\n\t\t\t\t\t\t\t\t\t<option value='NS'>NumberSet</option>\n\t\t\t\t\t\t\t\t\t<option value='BS'>BinarySet</option>\n\t\t\t\t\t\t\t\t\t<option value='L'>List</option>\n\t\t\t\t\t\t\t\t\t<option value='M'>Map</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t\t<icon-trash />\n\t\t\t\t</button>\n\t\t\t</td>\n\t\t</tr>\n\t{{/if}}\n\t",data:function(){return{type:null}},on:{delete:function(){this.set({type:null})},pickatype:function(){this.set({type:""})},typepicked:function(){this.get("type")&&(this.parent.prepend_attribute(this.get("type"),this.get("index")),this.set({type:null}))}}})}],s.c=l,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=12)).default;function s(t){if(l[t])return l[t].exports;var e=l[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}var o,l});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ractiveDynamodbJsonEditor = __webpack_require__(3);

var _ractiveDynamodbJsonEditor2 = _interopRequireDefault(_ractiveDynamodbJsonEditor);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var jsoneditor = require('@awspilot/ractive-dynamodb-json-editor');
exports.default = Ractive.extend({
	isolated: true,
	components: {
		jsoneditor: _ractiveDynamodbJsonEditor2.default
	},
	template: '\n\t\t<jsoneditor\n\t\t\ttheme={{theme}}\n\t\t\titem={{itemtoedit}}\n\t\t\tnavigationBar={{false}}\n\t\t\tstyle="position: absolute;top: -1px;left: -1px;right: -1px;bottom: 50px;width: auto;height: auto;"\n\t\t\tmenu-style=""\n\t\t/>\n\t\t<div style="position: absolute;left: 10px;right:10px;bottom:10px;height: 30px;box-sizing: border-box;">\n\t\t\t<span style="color: red;line-height: 30px;">{{errorMessage}}</span>\n\t\t\t<a class="btn btn-sm btn-primary pull-right" style="color: #fff;background-color: #337ab7;border-color: #2e6da4;float: right;padding: 5px 10px; font-size: 12px; line-height: 1.5;border-radius: 3px;font-family: sans-serif;"  on-click="update-item">Save</a>\n\t\t</div>\n\t\t',
	data: function data() {
		return {
			itemtoedit: {}
		};
	},
	_hash_key_name: function _hash_key_name() {
		return (this.get('describeTable').KeySchema.filter(function (k) {
			return k.KeyType === 'HASH';
		})[0] || {}).AttributeName;
	},
	_range_key_name: function _range_key_name() {
		return (this.get('describeTable').KeySchema.filter(function (k) {
			return k.KeyType === 'RANGE';
		})[0] || {}).AttributeName;
	},
	oninit: function oninit() {
		var ractive = this;

		// we do not really need to clone new item
		this.set({ itemtoedit: this.get('rawitem') });

		this.observe('itemtoedit', function (n, o, kp) {
			this.set({ errorMessage: '' });
		});

		//var rawitem = this.get('rawitem')
		//this.set({itemtoedit: { ...rawitem }  })

		//var debug = this.get('itemtoedit');

		this.on('update-item', function () {
			//console.log("table=","HASH=", this._hash_key_name(), " RANGE=", this._range_key_name() )

			var originalitem = this.get('rawitem');
			var updateditem = _utils2.default._clone_deep(this.get('itemtoedit'));

			var updateItemCall = {
				TableName: this.get('describeTable.TableName'),
				Key: {},
				AttributeUpdates: {}
			};

			if (!updateditem.hasOwnProperty(this._hash_key_name())) return alert('Missing PARTITION_KEY ' + this._hash_key_name());

			if (this._range_key_name() && !updateditem.hasOwnProperty(this._range_key_name())) return alert('Missing SORT_KEY ' + this._range_key_name());

			updateItemCall.Key[this._hash_key_name()] = updateditem[this._hash_key_name()];
			delete updateditem[this._hash_key_name()];

			if (this._range_key_name()) {
				updateItemCall.Key[this._range_key_name()] = updateditem[this._range_key_name()];
				delete updateditem[this._range_key_name()];
			}

			Object.keys(updateditem).map(function (k) {
				updateItemCall.AttributeUpdates[k] = {
					Action: 'PUT', //
					Value: updateditem[k]
				};
			});

			DynamoDB.client.updateItem(updateItemCall, function (err, data) {
				if (err) return ractive.set('errorMessage', err.message);

				ractive.get('window').close();
			});
		});
	}

});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

__webpack_require__(7);

var _ractive = __webpack_require__(2);

var _ractive2 = _interopRequireDefault(_ractive);

var _minitablelist = __webpack_require__(8);

var _minitablelist2 = _interopRequireDefault(_minitablelist);

var _ractiveWindow = __webpack_require__(10);

var _ractiveWindow2 = _interopRequireDefault(_ractiveWindow);

var _tabs = __webpack_require__(11);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ddb;
//import RactiveWindow from './ractive-window.min.js'

var DynamodbFactory = __webpack_require__(28);

var AWS = __webpack_require__(5);
AWS.config.update({ maxRetries: 1 });

var hsplit = _ractive2.default.extend({
	isolated: false,
	data: {
		direction: 'horizontal'
	},
	template: '<div class="hsplit {{class}} " style="{{style}}">{{yield}}</div>'
});

exports.default = _ractive2.default.extend({
	template: '\n\t\t\t<div class=\'ractive-dynamodb-ui theme-{{theme}}\'>\n\t\t\t\t<WindowContainer theme={{theme}} />\n\t\t\t</div>\n\t\t\t<hsplit style=\'\' class=\'ractive-dynamodb-ui theme-{{theme}}\'>\n\t\t\t\t<left>\n\t\t\t\t\t<minitablelist />\n\t\t\t\t</left>\n\t\t\t\t<split />\n\t\t\t\t<content>\n\t\t\t\t\t<tabs\n\t\t\t\t\t\tactive_id=\'tables\'\n\t\t\t\t\t\ttheme={{theme}}\n\t\t\t\t\t/>\n\t\t\t\t</content>\n\t\t\t</hsplit>\n\t\t',
	components: {
		hsplit: hsplit,
		minitablelist: _minitablelist2.default,
		tabs: _tabs2.default,
		Window: _ractiveWindow2.default.Window,
		WindowContainer: _ractiveWindow2.default.Container
	},

	data: function data() {
		return {};
	},
	delegate: false,
	elToFocus: null,
	on: {
		init: function init() {
			var ractive = this;
			this.on('open-table', function (e, table) {
				this.findComponent('tabs').newtab('tabletab', table);
			});

			// if (this.get('account.endpoint')) {
			// 	credentials.endpoint = this.get('account.endpoint')
			// 	if (this.get('account.endpoint').indexOf( location.protocol + '//' + location.host ) === 0) {
			// 		// dynamodb is proxied via same host, force version signature 3 so Authorization header is not used
			// 		credentials.signatureVersion = 'v3'
			// 		// httpOptions: { xhrWithCredentials: true },
			// 	}
			// }

			ddb = new AWS.DynamoDB({
				endpoint: this.get('endpoint'),
				region: this.get('region'),
				credentials: {
					accessKeyId: this.get('accessKeyId'),
					secretAccessKey: this.get('secretAccessKey')
				}
			});

			DynamoDB = new DynamodbFactory(ddb);

			cloudwatch = new AWS.CloudWatch({
				endpoint: this.get('cwendpoint'),
				region: this.get('region'),
				credentials: {
					accessKeyId: this.get('accessKeyId'),
					secretAccessKey: this.get('secretAccessKey')
				}
			});

			this.observe('theme', function () {

				this.findAllComponents('WindowContainer')[0].findAllComponents('Window').map(function (w) {
					console.log("window", w.get('_editor').set({ theme: ractive.get('theme') }));
				});
			});
		}
	}
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _svgicons = __webpack_require__(9);

var _svgicons2 = _interopRequireDefault(_svgicons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	//isolated: true,
	template: '\n\t\t<miniheader>\n\t\t\tTables\n\t\t\t<div class=\'pull-right\' style=\'margin-right: 2px;\'>\n\t\t\t\t<a class=\'btn btn-xs btn-default\' on-click=\'create\'>\n\t\t\t\t\t<icon-plus />\n\t\t\t\t</a>\n\t\t\t\t<a class=\'btn btn-xs btn-default\' on-click=\'@this.refresh_tables()\'>\n\t\t\t\t\t<icon-refresh />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</miniheader>\n\t\t<scrollarea class=\'scrollarea miniheaderbody\' style=\'position: absolute;\'>\n\t\t<tables>\n\t\t\t{{#tables}}\n\t\t\t<div on-click=\'@this.fire( "open-table",.)\'> {{.}} </div>\n\t\t\t{{/tables}}\n\t\t</tables>\n\t\t</scrollarea>\n\t\t',
	data: function data() {
		return {};
	},
	refresh_tables: function refresh_tables() {
		var ractive = this;

		ractive.set('tables');

		DynamoDB.query('SHOW TABLES', function (err, data) {

			if (err) return ractive.set('err', err);

			ractive.set('err');
			ractive.set('tables', data);
		});
	},
	oninit: function oninit() {
		this.refresh_tables();
		var ractive = this;
		ractive.on('open-table', function (e, table) {
			ractive.parent.fire('open-table', table);
		});
		ractive.on('create', function () {
			ractive.root.findComponent('tabs').newtab('tablecreate', 'Create Table');
		});
	}
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Ractive.components['icon-plus'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.444 31.444" xml:space="preserve">\n\t\t\t<path d="M1.119,16.841c-0.619,0-1.111-0.508-1.111-1.127c0-0.619,0.492-1.111,1.111-1.111h13.475V1.127\n\t\t\t\tC14.595,0.508,15.103,0,15.722,0c0.619,0,1.111,0.508,1.111,1.127v13.476h13.475c0.619,0,1.127,0.492,1.127,1.111\n\t\t\t\tc0,0.619-0.508,1.127-1.127,1.127H16.833v13.476c0,0.619-0.492,1.127-1.111,1.127c-0.619,0-1.127-0.508-1.127-1.127V16.841H1.119z"\n\t\t\t\t/>\n\t\t</svg>\n\n\t'
});

Ractive.components['icon-refresh'] = Ractive.extend({
	template: '\n\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t viewBox="0 0 477.867 477.867" xml:space="preserve">\n\t<g>\n\t\t<g>\n\t\t\t<path d="M409.6,0c-9.426,0-17.067,7.641-17.067,17.067v62.344C304.667-5.656,164.478-3.386,79.411,84.479\n\t\t\t\tc-40.09,41.409-62.455,96.818-62.344,154.454c0,9.426,7.641,17.067,17.067,17.067S51.2,248.359,51.2,238.933\n\t\t\t\tc0.021-103.682,84.088-187.717,187.771-187.696c52.657,0.01,102.888,22.135,138.442,60.976l-75.605,25.207\n\t\t\t\tc-8.954,2.979-13.799,12.652-10.82,21.606s12.652,13.799,21.606,10.82l102.4-34.133c6.99-2.328,11.697-8.88,11.674-16.247v-102.4\n\t\t\t\tC426.667,7.641,419.026,0,409.6,0z"/>\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<path d="M443.733,221.867c-9.426,0-17.067,7.641-17.067,17.067c-0.021,103.682-84.088,187.717-187.771,187.696\n\t\t\t\tc-52.657-0.01-102.888-22.135-138.442-60.976l75.605-25.207c8.954-2.979,13.799-12.652,10.82-21.606\n\t\t\t\tc-2.979-8.954-12.652-13.799-21.606-10.82l-102.4,34.133c-6.99,2.328-11.697,8.88-11.674,16.247v102.4\n\t\t\t\tc0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067v-62.345c87.866,85.067,228.056,82.798,313.122-5.068\n\t\t\t\tc40.09-41.409,62.455-96.818,62.344-154.454C460.8,229.508,453.159,221.867,443.733,221.867z"/>\n\t\t</g>\n\t</g>\n\t</svg>\n\t'
});

Ractive.components['icon-trash'] = Ractive.extend({
	template: '\n\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="459px" height="459px" viewBox="0 0 459 459" xml:space="preserve">\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5\n\t\t\t\t\tH51v51h357V25.5z"/>\n\t\t\t</g>\n\t\t</g>\n\t</svg>\n'
});

Ractive.components['icon-database'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} height="512pt" viewBox="0 -52 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">\n\t\t\t<path d="m0 0h113.292969v113.292969h-113.292969zm0 0"/>\n\t\t\t<path d="m149.296875 0h362.703125v113.292969h-362.703125zm0 0"/>\n\t\t\t<path d="m0 147.007812h113.292969v113.292969h-113.292969zm0 0"/>\n\t\t\t<path d="m149.296875 147.007812h362.703125v113.292969h-362.703125zm0 0"/>\n\t\t\t<path d="m0 294.011719h113.292969v113.296875h-113.292969zm0 0"/>\n\t\t\t<path d="m149.296875 294.011719h362.703125v113.296875h-362.703125zm0 0"/>\n\t\t</svg>\n'
});

Ractive.components['icon-x'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t\t viewBox="0 0 512.001 512.001" xml:space="preserve">\n\n\t\t\t<g>\n\t\t\t\t<path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892\n\t\t\t\t\tL46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999\n\t\t\t\t\tc-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998\n\t\t\t\t\tc10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>\n\t\t\t</g>\n\n\t\t</svg>\n'
});

Ractive.components['icon-play'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t\t viewBox="0 0 41.999 41.999" xml:space="preserve">\n\t\t\t<path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40\n\t\t\tc0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20\n\t\t\tc0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"/>\n\t\t</svg>\n\t'
});

Ractive.components['icon-prev'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t\t viewBox="0 0 477.175 477.175" xml:space="preserve">\n\t\t<g>\n\t\t\t<path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n\t\t\t\tc2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>\n\t\t</g>\n\t\t</svg>\n\t'
});

Ractive.components['icon-next'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t\t viewBox="0 0 477.175 477.175" xml:space="preserve">\n\t\t<g>\n\t\t\t<path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5\n\t\t\t\tc-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z\n\t\t\t\t"/>\n\t\t</g>\n\t\t</svg>\n\t'
});
Ractive.components['icon-caret-down'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t\t width="292.362px" height="292.362px" viewBox="0 0 292.362 292.362"\n\t\t\t xml:space="preserve">\n\t\t<g>\n\t\t\t<path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424\n\t\t\t\tC1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428\n\t\t\t\ts9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>\n\t\t</g>\n\t\t</svg>\n\t'
});
Ractive.components['icon-filter'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} height="393pt" viewBox="-4 0 393 393.99003" width="393pt" xmlns="http://www.w3.org/2000/svg" >\n\t\t\t<path d="m368.3125 0h-351.261719c-6.195312-.0117188-11.875 3.449219-14.707031 8.960938-2.871094 5.585937-2.3671875 12.3125 1.300781 17.414062l128.6875 181.28125c.042969.0625.089844.121094.132813.183594 4.675781 6.3125 7.203125 13.957031 7.21875 21.816406v147.796875c-.027344 4.378906 1.691406 8.582031 4.777344 11.6875 3.085937 3.105469 7.28125 4.847656 11.65625 4.847656 2.226562 0 4.425781-.445312 6.480468-1.296875l72.3125-27.574218c6.480469-1.976563 10.78125-8.089844 10.78125-15.453126v-120.007812c.011719-7.855469 2.542969-15.503906 7.214844-21.816406.042969-.0625.089844-.121094.132812-.183594l128.683594-181.289062c3.667969-5.097657 4.171875-11.820313 1.300782-17.40625-2.832032-5.511719-8.511719-8.9726568-14.710938-8.960938zm-131.53125 195.992188c-7.1875 9.753906-11.074219 21.546874-11.097656 33.664062v117.578125l-66 25.164063v-142.742188c-.023438-12.117188-3.910156-23.910156-11.101563-33.664062l-124.933593-175.992188h338.070312zm0 0"/>\n\t\t</svg>\n\t'
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=n(3),s=(i=o)&&i.__esModule?i:{default:i};var r=Ractive.extend({components:{"icon-x":s.default.x,"icon-minimize":s.default.minimize,"icon-maximize":s.default.maximize},template:"\n\t\t\t{{#_wnd_rendered}}\n\t\t\t\t<div\n\t\t\t\t\tid='ractive-window-{{.id}}'\n\t\t\t\t\tclass='theme-{{theme}} ractive-window{{#(.buttons.length > 0)}} with-buttons{{/}}{{#.resizable}} resizable{{else}} fixed{{/}}{{#.geometry.state === 2}} maximized{{/}}{{#.class.window}} {{.class.window}}{{/}}{{#.active}} active{{/}}'\n\t\t\t\t\ton-click='_raise'\n\t\t\t\t\tstyle='{{#.hidden}}display: none;{{/}}top: {{.geometry.top}}px; left: {{.geometry.left}}px; {{#(.resizable || .geometry.state === 2)}}width: {{.geometry.width}}{{.geometry.dwunit}}; height: {{.geometry.height}}{{.geometry.dhunit}}; {{/}}z-index: {{.geometry.index}};{{#.style.window}} {{.style.window}}{{/}}'\n\t\t\t\t>\n\t\t\t\t\t<div class='rw-modal' on-mousedown='_moveStart' style='{{^.blocked}}display: none;{{/}}'></div>\n\t\t\t\t\t<div class='rw-interior'>\n\t\t\t\t\t\t<div class='rw-controls'>{{>controls}}</div>\n\t\t\t\t\t\t<div class='rw-title' on-touchstart-mousedown='_moveStart' on-dblclick='_restore'>{{>title}}</div>\n\t\t\t\t\t\t{{#if dialog}}<div class='rw-dialog-cover'></div><div class='rw-dialog' style='width: {{dialog.width}}px; {{#if dialog.height}}height: {{dialog.height}}px; {{/if}}'>{{> ~/makePartial('sharedialog', dialog.raw) }}</div>{{/if}}\n\t\t\t\t\t\t<div class='rw-body{{#.class.body}} {{.class.body}}{{/}}' {{#.style.body}}style='{{.style.body}}'{{/}}>{{>body}}</div>\n\t\t\t\t\t\t{{#(.buttons.length > 0)}}<div class='rw-buttons'>{{>buttons}}</div>{{/}}\n\t\t\t\t\t\t<div class='rw-resize-handle' on-touchstart-mousedown='_resizeStart'></div>\n\t\t\t\t\t\t<div class='rw-foot'>{{>foot}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t{{/}}\n\t\t",prompt:function(t,e){this.dialog({content:t,raw:"{{dialog.content}}<br><input class='form-control' value='{{dialog.reply}}' /> <div style='position: absolute;bottom: 10px;right: 10px;'><button class='btn btn-xs btn-default' on-click='@this.set(\"dialog\", false )'>Cancel</button> <button class='btn btn-xs btn-primary' on-click='dialog.callback.prompt'>OK</button></div>",width:300,cb:e})},confirm:function(t,e){this.dialog({content:t,raw:"{{dialog.content}} <div style='position: absolute;bottom: 10px;right: 10px;'><button class='btn btn-xs btn-default' on-click='@this.set(\"dialog\", false )'>Cancel</button> <button class='btn btn-xs btn-primary' on-click='dialog.callback.ok'>OK</button></div>",width:300,cb:e})},dialog:function(t){this.set("dialog",{content:t.content,params:t.params,raw:t.raw,width:t.width,height:t.height,cb:t.cb})},onconstruct:function(t){var e,n,i,o,s=this;i=function(t){var o,r;t.preventDefault(),t.type.indexOf("touch")>=0?(o=+t.changedTouches[0].clientX,r=+t.changedTouches[0].clientY):(o=+(t.x||t.clientX),r=+(t.y||t.clientY)),s.move(+s.get("geometry.left")+o-+e,+s.get("geometry.top")+r-+n),e=o,n=r,"mouseup"!==t.type&&"touchend"!==t.type||(document.removeEventListener("mousemove",i,!1),document.removeEventListener("mouseup",i,!1),document.removeEventListener("touchmove",i,!1),document.removeEventListener("touchend",i,!1))},s.on("_moveStart",(function(t){("mousedown"===t.original.type&&0===t.original.button||"touchstart"===t.original.type)&&(s.restore(),t.original.type.indexOf("touch")>=0?(e=+t.original.changedTouches[0].clientX,n=+t.original.changedTouches[0].clientY):(e=+(t.original.x||t.original.clientX),n=+(t.original.y||t.original.clientY)),document.addEventListener("mousemove",i),document.addEventListener("mouseup",i),document.addEventListener("touchmove",i),document.addEventListener("touchend",i),t.original.preventDefault()),s.element&&s.element.getElementsByTagName("iframe").length&&s.element.getElementsByTagName("iframe")[0].focus()})),o=function(t){var i,r;t.preventDefault(),t.type.indexOf("touch")>=0?(i=t.changedTouches[0].clientX,r=t.changedTouches[0].clientY):(i=+(t.x||t.clientX),r=+(t.y||t.clientY));var l=+s.get("geometry.width")+(i-+e),a=+s.get("geometry.height")+(r-+n);s.resize(l,a),e=i,n=r,"mouseup"!==t.type&&"touchend"!==t.type||(document.removeEventListener("mousemove",o,!1),document.removeEventListener("mouseup",o,!1),document.removeEventListener("touchmove",o,!1),document.removeEventListener("touchend",o,!1))},s.on("_resizeStart",(function(t){("mousedown"==t.original.type&&0===t.original.button||"touchstart"===t.original.type)&&(s.restore(),t.original.type.indexOf("touch")>=0?(e=t.original.changedTouches[0].clientX,n=t.original.changedTouches[0].clientY):(e=t.original.x||t.original.clientX,n=t.original.y||t.original.clientY),document.addEventListener("mousemove",o),document.addEventListener("mouseup",o),document.addEventListener("touchmove",o),document.addEventListener("touchend",o))}));var r=function(t,e){switch(t){case"min":s.minimize();break;case"max":s.maximize();break;case"normal":s.restore()}};s.on("dialog.callback.ok",(function(t){var e=this.get("dialog");this.set("dialog",!1);try{e.cb()}catch(t){}})),s.on("dialog.callback.prompt",(function(t){var e=this.get("dialog");try{e.cb(e.reply)}catch(t){}this.set("dialog",!1)})),s.on("_minimize",(function(t){r("min")})),s.on("_restore",(function(t){switch(s.get("geometry.state")){case 0:r("max");break;case 1:case 2:r("normal")}})),s.on("_raise",(function(t){s.raise()})),s.on("_close",(function(t){s.close()})),s.on("_dialog-button",(function(t){var e=t.context.action;e&&"function"==typeof e&&e.call(this)})),s.result=null,s.waitForClose=s.afterClose=new Promise((function(t,e){var n=function(t){return function(e){s.completeAfterClose=null,s.rejectAfterClose=null,t(e)}};s.completeAfterClose=n(t),s.rejectAfterClose=n(e)}))},onrender:function(){var t=this;!this.get("buttonClass")&&this.parent.get("buttonClass")&&this.set("buttonClass",this.parent.get("buttonClass")),this.watchers=this.observe({title:function(e,n){t.fire("retitle",e,t)},"geometry.state":function(e,n){switch(e){case 0:t.fire("restore",e,t);break;case 1:t.fire("minimize",e,t);break;case 2:t.fire("maximize",e,t)}}})},onunrender:function(){this.watchers&&"function"==typeof this.watchers.cancel&&this.watchers.cancel()},activated:function(){},data:function(){return{dialog:!1,_wnd_rendered:!1,blocked:!1,resizable:!0,geometry:{top:-9999,left:-9999,width:200,height:200,state:0,dwunit:"px",dhunit:"px",index:1e3,minimum:{x:0,y:0,width:70,height:50}},style:{},class:{},makePartial:function(t,e){return this._makePartial_templates||(this._makePartial_templates={}),this._makePartial_templates[t]!=e&&(this.resetPartial(t,e),this._makePartial_templates[t]=e),t}}},partials:{title:"{{> ~/makePartial('titleTpl', .title) }}",body:"",foot:"",buttons:"{{#.buttons:i}}<button on-click='_dialog-button' class='{{.position || ''}}{{#.buttonClass}} {{.buttonClass}}{{/}}{{#../../class.button}} {{../../class.button}}{{/}}' disabled='{{!.enabled}}'>{{> ~/makePartial('button' + i + 'Tpl', .label) }}</button>{{/}}",controls:"{{#controls:i}}\t{{#if .raw}}{{>  ~/makePartial('custom_control_template'+i, .raw) }}{{/if}}{{/controls}}{{#if minimizable === false}}{{else}}{{>minimizeControl}}{{/if}}{{>restoreControl}}{{>closeControl}}",minimizeControl:"<button on-click='_minimize' class='btn btn-sm rw-minimize'> <icon-minimize /> </button>",restoreControl:"<button on-click='_restore'  class='btn btn-sm rw-restore'> <icon-maximize /> </button>",closeControl:"<button on-click='_close'    class='btn btn-sm rw-close'> <icon-x /> </button>"},rerender:function(){return this.get("_wnd_rendered")?(this.set("_wnd_rendered",!1),this.set("_wnd_rendered",!0)):Promise.resolve("ok")},title:function(t){this.set("title",t)},move:function(t,e){if("string"==typeof t){switch(t){case"center":case"centerScreen":return this.set({"geometry.top":(this.parent.el.clientHeight-this.element.clientHeight)/2,"geometry.left":(this.parent.el.clientWidth-this.element.clientWidth)/2});case"cascade":return this.set({"geometry.top":this.parentNumber%10*20+10,"geometry.left":this.parentNumber%50*20+10})}return Promise.resolve(!1)}e=+e,t=+t;var n=this.get("geometry.minimum"),i=this.get("geometry.maximum"),o=+this.get("geometry.width"),s=+this.get("geometry.height");return i&&(t+o>+i.x&&(t=+i.x-t),e+s>+i.y&&(e=+i.y-e)),n&&(t<+n.x&&(t=+n.x),e<+n.y&&(e=+n.y)),this.set({"geometry.top":e,"geometry.left":t})},resize:function(t,e){t=a.call(this,"width",t),e=a.call(this,"height",e);var n=this.get("geometry.minimum"),i=this.get("geometry.maximum");i&&(t>i.width&&(t=i.width),t>i.height&&(t=i.height)),n&&(t<n.width&&(t=n.width),e<n.height&&(e=n.height)),this.set({"geometry.width":t,"geometry.height":e}),this.element&&this.element.getElementsByTagName("iframe").length&&this.element.getElementsByTagName("iframe")[0].focus()},resizable:function(t){this.set("resizable",t)},minimize:function(){1!==this.get("geometry.state")&&(this.set({hidden:!0,"geometry.state":1}),this.fire("minimized",{window:this}))},maximize:function(){2!==this.get("geometry.state")&&(this.normalGeometry={top:this.get("geometry.top"),left:this.get("geometry.left"),width:this.get("geometry.width"),height:this.get("geometry.height")},this.set({hidden:!1,"geometry.left":0,"geometry.top":0,"geometry.width":100,"geometry.height":100,"geometry.dwunit":"%","geometry.dhunit":"%","geometry.state":2}),this.fire("maximized",{window:this}))},restore:function(){switch(this.get("geometry.state")){case 1:this.set({hidden:!1,"geometry.state":0});break;case 2:var t=this.normalGeometry||{};this.normalGeometry=null,(t.top<0||t.left<0)&&(t.top=0,t.left=0),this.set({hidden:!1,"geometry.left":t.left,"geometry.top":t.top,"geometry.width":t.width,"geometry.height":t.height,"geometry.dwunit":"px","geometry.dhunit":"px","geometry.state":0})}this.raise()},raise:function(){this.parent&&this.parent.raiseWindow(this)},kill:function(){this.fire("close",this),this.parent?this.parent.killWindow(this):this.teardown(),this.completeAfterClose&&this.completeAfterClose(this.result)},content:function(t){return this.resetPartial("body",t)},buttons:function(){var t,e=[];if(this.set("buttons",e),1===arguments.length&&"number"==typeof arguments[0].length)e=arguments[0];else for(t=0;t<arguments.length;t++)e.push(arguments[t]);var n=[],i=[],o=[];for(t=0;t<e.length;t++){var s=e[t];s.position?"left"===s.position?n.push(s):"right"===s.position?i.push(s):"middle"===s.position?o.push(s):"center"===s.position?o.push(s):(i.push(s),s.position="right"):(i.push(s),s.position="right"),s.hasOwnProperty("enabled")||(s.enabled=!0)}for(e=[],t=0;t<n.length;t++)e.push(n[t]);for(t=i.length-1;t>=0;t--)e.push(i[t]);for(t=0;t<o.length;t++)e.push(o[t]);this.set("buttons",e)},button:function(t,e){var n,i,o=this.get("buttons");if("number"==typeof t)n=o[t],i=t;else for(i=0;i<o.length;i++)if(o[i].label===t){n=o[i];break}n&&(e(n),this.set("buttons."+i,n))},controls:function(){var t,e=[],n="";if(1===arguments.length&&"string"!=typeof arguments[0])e=arguments[0];else for(t=0;t<arguments.length;t++)e.push(arguments[t]);for(t=0;t<e.length;t++)n+="{{>"+e[t]+"Control}}";return this.partials.controls=n,this.rerender()},onClose:function(){this.kill()},close:function(t){if(t||(t=this.onClose),0===t.length)t.call(this);else{var e=this;t.call(this,(function(t){t&&e.kill()}))}}}),l=/([\d\.]+)(.*)/;function a(t,e){var n=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t)){for(var n,i=[],o=t[Symbol.iterator]();!(n=o.next()).done&&(i.push(n.value),!e||i.length!==e););return i}throw new TypeError("Invalid attempt to destructure non-iterable instance")}(l.exec(e.toString()),3),i=(n[0],n[1]),o=n[2];o=o||"px";var s="width"===t?"dwunit":"dhunit",r=this.find("div");if("px"===o)return i;if(r){var a={};a["geometry."+t]=i,a["geometry."+s]=o,this.set(a);var c=this.find("div")["client"+t[0].toUpperCase()+t.substring(1)];return a["geometry."+t]=c,a["geometry."+s]="px",this.set(a),c}}e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(2);var i=s(n(0)),o=s(n(4));function s(t){return t&&t.__esModule?t:{default:t}}e.default={Window:i.default,Container:o.default}},function(t,e,n){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Ractive.extend({template:'\n\t\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t\t viewBox="0 0 512.001 512.001" xml:space="preserve">\n\n\t\t\t<g>\n\t\t\t\t<path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892\n\t\t\t\t\tL46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999\n\t\t\t\t\tc-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998\n\t\t\t\t\tc10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>\n\t\t\t</g>\n\n\t\t</svg>\n'}),o=Ractive.extend({template:'\n\t\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t\t viewBox="0 0 489.3 489.3" xml:space="preserve">\n\n\t\t\t<g>\n\t\t\t\t<path d="M0.05,12.3v222.8c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3V24.5h440.2v440.2h-211.9c-6.8,0-12.3,5.5-12.3,12.3\n\t\t\t\t\ts5.5,12.3,12.3,12.3h224c6.8,0,12.3-5.5,12.3-12.3V12.3c0-6.8-5.5-12.3-12.3-12.3H12.35C5.55,0,0.05,5.5,0.05,12.3z"/>\n\t\t\t\t<path d="M0.05,476.9c0,6.8,5.5,12.3,12.3,12.3h170.3c6.8,0,12.3-5.5,12.3-12.3V306.6c0-6.8-5.5-12.3-12.3-12.3H12.35\n\t\t\t\t\tc-6.8,0-12.3,5.5-12.3,12.3C0.05,306.6,0.05,476.9,0.05,476.9z M24.55,318.8h145.9v145.9H24.55V318.8z"/>\n\t\t\t\t<path d="M231.55,135.9c-6.8,0-12.3,5.5-12.3,12.3v109.5c0,6.8,5.5,12.3,12.3,12.3h109.5c6.8,0,12.3-5.5,12.3-12.3\n\t\t\t\t\ts-5.5-12.3-12.3-12.3h-79.9l138.7-138.7c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0l-138.7,138.7v-79.9\n\t\t\t\t\tC243.85,141.4,238.35,135.9,231.55,135.9z"/>\n\t\t\t</g>\n\n\t\t</svg>\n'}),s=Ractive.extend({template:'\n\t\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t\t viewBox="0 0 53 53" xml:space="preserve">\n\n\t\t\t<path d="M52.923,0.618c-0.101-0.244-0.296-0.439-0.541-0.541C52.26,0.027,52.13,0,52,0H40c-0.552,0-1,0.448-1,1s0.448,1,1,1h9.586\n\t\t\t\tL33.293,18.293c-0.391,0.391-0.391,1.023,0,1.414C33.488,19.902,33.744,20,34,20s0.512-0.098,0.707-0.293L51,3.414V13\n\t\t\t\tc0,0.552,0.448,1,1,1s1-0.448,1-1V1C53,0.87,52.973,0.74,52.923,0.618z"/>\n\t\t\t<path d="M18.293,33.293L2,49.586V40c0-0.552-0.448-1-1-1s-1,0.448-1,1v12c0,0.13,0.027,0.26,0.077,0.382\n\t\t\t\tc0.101,0.244,0.296,0.439,0.541,0.541C0.74,52.973,0.87,53,1,53h12c0.552,0,1-0.448,1-1s-0.448-1-1-1H3.414l16.293-16.293\n\t\t\t\tc0.391-0.391,0.391-1.023,0-1.414S18.684,32.902,18.293,33.293z"/>\n\t\t\t<path d="M1,14c0.552,0,1-0.448,1-1V3.414l16.292,16.292c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293\n\t\t\t\tc0.391-0.391,0.391-1.023,0-1.414L3.414,2H13c0.552,0,1-0.448,1-1s-0.448-1-1-1H1C0.87,0,0.74,0.027,0.618,0.077\n\t\t\t\tC0.373,0.179,0.179,0.373,0.077,0.618C0.027,0.74,0,0.87,0,1v12C0,13.552,0.448,14,1,14z"/>\n\t\t\t<path d="M52,39c-0.552,0-1,0.448-1,1v9.586L34.707,33.292c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L49.586,51H40\n\t\t\t\tc-0.552,0-1,0.448-1,1s0.448,1,1,1h12c0.13,0,0.26-0.027,0.382-0.077c0.244-0.101,0.439-0.296,0.541-0.541\n\t\t\t\tC52.973,52.26,53,52.13,53,52V40C53,39.448,52.552,39,52,39z"/>\n\n\t\t</svg>\n'});e.default={x:i,minimize:o,maximize:s}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=n(0),s=(i=o)&&i.__esModule?i:{default:i};var r=0,l=Ractive.extend({isolated:!0,defaults:{control:{label:function(t,e){s.default.partials[t+"ControlLabel"]=e}},controls:function(){for(var t="",e=0;e<arguments.length;e++)t+="{{>"+arguments[e]+"Control}}";s.default.partials.controls=t}},components:{Window:s.default},data:function(){return{_windows_list:[],windows:{}}},template:"\n\t\t\t<div class='host-content'>{{yield}}</div>\n\t\t\t{{#_windows_list}}\n\t\t\t\t<Window theme={{theme}} />\n\t\t\t{{/_windows_list}}\n\t\t",newWindow:function(t,e){var n=r;r+=1;var i=this;return i.push("_windows_list",n).then((function(){var o,s=i.findAllComponents("Window"),r=s[s.length-1];i.set("windows."+n,r),r.parentNumber=n,r.set({"geometry.index":1e3+s.length,"geometry.left":-9999,"geometry.top":-9999,id:n});var l=function(){var t;return r.raise(),r.set("_wnd_rendered",!0).then((function(){r.element=r.find(".ractive-window");try{if((t=r.activated())&&"function"==typeof t.then)return t}catch(t){console.log(t)}}))},a=function(){return-9999===r.get("geometry.left")?r.move("cascade").then((function(){return r})):r};return o=(o=(o=function(){var n;if(e&&"function"==typeof e)try{if((n=e(r))&&"function"==typeof n.then)return n}catch(t){console.log(t)}else if("function"==typeof t)try{(n=t(r))&&"function"==typeof n.then&&(o=n)}catch(t){console.log(t)}}())?o.then(l):l())?o.then(a):a()}))},killWindow:function(t){var e,n,i=this.get("windows"),o=-1;if(i){for(var s in i)i[s]===t?delete i[s]:(n=i[s].get("geometry.index"))>o&&(o=n,e=i[s]);e&&!e.get("active")&&(e.set("active",!0),e.element&&e.element.getElementsByTagName("iframe").length&&e.element.getElementsByTagName("iframe")[0].focus())}var r=this.get("_windows_list");r&&this.splice("_windows_list",r.indexOf(t.parentNumber),1)},raiseWindow:function(t){var e,n=this.get("windows"),i=(this.get("_windows_list"),[]),o=[];for(var s in o.push(t),n)o.indexOf(n[s])<0&&i.push(n[s]);for(e in i.sort((function(t,e){var n=t.get("geometry.index"),i=e.get("geometry.index");return n<i?-1:n>i?1:0})),t&&(i=i.concat(o)),i)i[e].set("geometry.index",+e+1e3),i[e]!==t&&i[e].set("active",!1);t.get("active")||(t.set("active",!0),setTimeout((function(){t.element&&t.element.getElementsByTagName("iframe").length&&t.element.getElementsByTagName("iframe")[0].focus()}),300))}});e.default=l}]).default}));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tablelistfull = __webpack_require__(12);

var _tablelistfull2 = _interopRequireDefault(_tablelistfull);

var _create = __webpack_require__(13);

var _create2 = _interopRequireDefault(_create);

var _tabletab = __webpack_require__(14);

var _tabletab2 = _interopRequireDefault(_tabletab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	//isolated: true,
	components: {
		tablelistfull: _tablelistfull2.default,
		tablecreate: _create2.default,
		tabletab: _tabletab2.default
	},
	template: '\n\t\t<tabhead>\n\t\t\t<tab class=\'{{#if active_id === "tables" }}active{{/if}}\' on-click=\'@this.fire("activetab", "tables")\'>\n\t\t\t\t<icon-database style="width: 15px;height: 15px;" />\n\t\t\t</tab>\n\t\t{{#tabs}}\n\t\t\t{{#if .closed !== true}}\n\t\t\t<tab class=\'{{#if .id === active_id }}active{{/if}}\' on-click=\'@this.fire("activetab",.id)\'>\n\t\t\t\t{{.name}}\n\t\t\t\t<i class=\'\' on-click=\'closetab\'><icon-x style="width: 8px;height: 8px;line-height: 15px;" /></i>\n\t\t\t</tab>\n\t\t\t{{/if}}\n\t\t{{/tabs}}\n\t\t</tabhead>\n\t\t<tabcontent>\n\t\t\t{{#if active_id === "tables" }}\n\t\t\t\t<tablelistfull />\n\t\t\t{{else}}\n\t\t\t\t{{#tabs}}\n\t\t\t\t\t{{#if .closed === true}}\n\t\t\t\t\t\t<div class=\'closedtab\'></div>\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t{{#if .type === \'tablecreate\' }}\n\t\t\t\t\t\t\t<tablecreate active={{ .id === active_id  }} id={{id}} />\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{#if .type === \'tabletab\' }}\n\t\t\t\t\t\t\t<tabletab\n\t\t\t\t\t\t\t\ttable={{.}}\n\t\t\t\t\t\t\t\tactive={{ .id === active_id  }}\n\t\t\t\t\t\t\t\ttheme={{~/theme}}\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/tabs}}\n\t\t\t{{/if}}\n\t\t</tabcontent>\n\t\t',
	data: function data() {
		return {};
	},
	active_cache: [],
	activetabcontent: function activetabcontent() {
		var ractive = this;
		ractive.active_cache.push(ractive.get('active_id'));
		ractive.findAllComponents('tabletab').map(function (tableview_c) {
			tableview_c.set('active', tableview_c.get('table.id') === ractive.get('active_id'));
		});
	},
	newtab: function newtab(component_name, param1) {
		var id = Math.random().toString().split('.').join('');
		this.set('active_id', id);
		this.push('tabs', {
			id: id,

			name: param1,
			type: component_name,

			sql: "\nSCAN * FROM `" + param1 + "` LIMIT 100\n"
		});
		this.activetabcontent();
	},
	closetab: function closetab(id) {

		var tabidx = null;
		this.get('tabs').map(function (t, idx) {
			console.log("tab", t, idx);
			if (t.id === id) tabidx = idx;
		});
		if (tabidx === null) return alert('close: tab not found'); // not found

		this.set('tabs.' + tabidx + '.closed', true);
	},
	oninit: function oninit() {
		var ractive = this;

		this.observe('active_id', function (newvalue, oldvalue, keypath) {
			ractive.activetabcontent();
		});

		this.on('closetab', function (e) {

			console.log("close", e.resolve());
			var id = this.get(e.resolve() + '.id');

			this.set(e.resolve() + '.closed', true);

			this.active_cache = this.active_cache.filter(function (tid) {
				return tid !== id;
			});
			//this.set('tabs', this.get('tabs').filter(function(t) { return t.id !== id }) )

			if (this.get('active_id') === id) {
				// the current tab was closed
				this.set('active_id', this.active_cache.pop());
			}
			ractive.activetabcontent();
			return false;
		});
		this.on('activetab', function (e, id) {
			this.set('active_id', id);
			return false;
		});
	}
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tabledata = __webpack_require__(0);

var _tabledata2 = _interopRequireDefault(_tabledata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	//isolated: true,
	components: {
		tabledata: _tabledata2.default
	},
	template: '\n\t\t\t<div class=\'pull-right\' style=\'padding: 7px;\'>\n\t\t\t\t<a class=\'btn btn-xs btn-primary \' on-click=\'create\'> CREATE TABLE <i class=\'zmdi\'></i></a>\n\t\t\t\t<a class=\'btn btn-xs btn-default {{#if selection_length > 0}}{{else}}disabled{{/if}}\' on-click=\'delete\'> <icon-trash /> </a>\n\t\t\t\t<a class=\'btn btn-xs btn-default {{#if refresh_tables }}disabled{{/if}}\' on-click=\'@this.refresh_tables()\'> <icon-refresh /> </a>\n\t\t\t</div>\n\n\t\t<tabledata columns=\'{{columns}}\' rows=\'{{rows}}\' style=\'top: 38px;margin: 3px;\' />\n\t\t',
	data: function data() {
		return {
			selection_length: 0,
			refresh_tables: false
		};
	},
	refresh_tables: function refresh_tables() {
		var ractive = this;
		ractive.set('refresh_tables', true);
		ractive.set('tables');

		DynamoDB.query('SHOW TABLES', function (err, data) {

			ractive.set('refresh_tables', false);

			if (err) return ractive.set('err', err);

			ractive.set('err');

			ractive.set('columns', [null, 'Name', 'Status', 'Partition', 'Sort', 'Indexes', 'Read Capacity', 'Write Capacity']);
			ractive.set('rows', data.map(function (t) {
				return [{ KEY: true }, { S: t }, {}, {}, {}, {}, {}, {}];
			}));
			var waterfallz = data.map(function (t) {

				var f = function f(cb) {
					//console.log(t)
					DynamoDB.client.describeTable({ TableName: t }, function (err, data) {
						if (err) return cb();

						ractive.set('rows', ractive.get('rows').map(function (row) {
							if (row[1].S === t) {

								row[2].S = data.Table.TableStatus;
								row[3].S = ((data.Table.KeySchema || []).filter(function (ks) {
									return ks.KeyType === 'HASH';
								})[0] || {}).AttributeName || '-';
								row[4].S = ((data.Table.KeySchema || []).filter(function (ks) {
									return ks.KeyType === 'RANGE';
								})[0] || {}).AttributeName || '-';
								row[5].S = (data.Table.GlobalSecondaryIndexes || []).length.toString();
								row[6].S = [data.Table.ProvisionedThroughput.ReadCapacityUnits].concat((data.Table.GlobalSecondaryIndexes || []).map(function (tr) {
									return tr.ProvisionedThroughput.ReadCapacityUnits;
								})).reduce(function (a, b) {
									return a + b;
								}, 0);
								row[7].S = [data.Table.ProvisionedThroughput.WriteCapacityUnits].concat((data.Table.GlobalSecondaryIndexes || []).map(function (tr) {
									return tr.ProvisionedThroughput.WriteCapacityUnits;
								})).reduce(function (a, b) {
									return a + b;
								}, 0);

								if ((data.Table.BillingModeSummary || {}).BillingMode === 'PAY_PER_REQUEST') {
									row[6].S = 'On-Demand';
									row[7].S = 'On-Demand';
								}
							}
							return row;
						}));
						cb();
					});
				};
				return f;
			});

			async.parallel(waterfallz, function (err) {});
		});
		//ddb.listTables({}, function(err, data) {
		//})
	},
	oninit: function oninit() {
		this.refresh_tables();
		var ractive = this;
		//ractive.on('open-table', function(e, table ) {
		//	ractive.root.fire('open-table', table )
		//})
		ractive.on('tabledata.selectrow', function (context) {
			var keypath = context.resolve();
			ractive.set(keypath + '.0.selected', !ractive.get(keypath + '.0.selected'));

			ractive.set('selection_length', ractive.get('rows').filter(function (r) {
				return r[0].selected === true;
			}).length);
		});
		ractive.on('delete', function () {
			var selected = ractive.get('rows').filter(function (r) {
				return r[0].selected === true;
			});

			if (selected.length === 0) return alert('Please select a table to delete');

			if (selected.length > 1) return alert('Please select one table at a time');

			var tablename = selected[0][1].S;

			if (confirm('Are you sure you want to delete table ' + tablename)) {

				DynamoDB.client.deleteTable({ TableName: tablename }, function (err, data) {
					if (err) return alert(err.message);

					ractive.refresh_tables();

					// refresh leftside as well
					ractive.root.findComponent('minitablelist').refresh_tables();
				});
			}
		});
		ractive.on('create', function () {
			ractive.root.findComponent('tabs').newtab('tablecreate', 'Create Table');
		});
	}
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	//isolated: true,
	template: '\n\t\t<div class=\'tableview {{#if active}}active{{/if}}\'>\n\t\t<div style=\'position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;overflow-x: auto;\'>\n\t\t\t<div style=\'padding: 30px\'>\n\t\t\t\t<h3>Create DynamoDB table</h3>\n\t\t\t\t<br>\n\t\t\t\t<div style=\'color:red\'>{{ err }}</div>\n\t\t\t\t<hr>\n\t\t\t\tDynamoDB is a schema-less database that only requires a table name and primary key. The table\'s primary key is made up of one or two attributes that uniquely identify items, partition the data, and sort data within each partition.\n\n\t\t\t\t<br><br>\n\t\t\t\t<table style=\'border-collapse: separate;border-spacing: 10px;\'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Table name</td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{newtable.TableName}}\' on-focus=\'focus\'></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Partition key</td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{ newtable.AttributeDefinitions.0.AttributeName }}\'></td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select class="input-select" value=\'{{ newtable.AttributeDefinitions.0.AttributeType }}\' on-focus=\'focus\'>\n\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t<td><input class="input-checkbox" type=\'checkbox\' checked=\'{{newtable.sort_enabled}}\' />Add sort key</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{#if newtable.sort_enabled}}\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Sort key</td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{newtable.sort_key_name}}\' on-focus=\'focus\'></td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select class="input-select" class="input-select" value=\'{{ newtable.sort_key_type}}\' on-focus=\'focus\'>\n\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</table>\n\t\t\t\t<br><br>\n\t\t\t\t<h4>Secondary indexes</h4>\n\t\t\t\t<table style=\'border-collapse: separate;border-spacing: 10px;\'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Name</td>\n\t\t\t\t\t\t<td>Type</td>\n\t\t\t\t\t\t<td>Partition key</td>\n\t\t\t\t\t\t<td>Sort key</td>\n\t\t\t\t\t\t<td>Projection type</td>\n\t\t\t\t\t\t<td>Projected attributes</td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{#newtable.LocalSecondaryIndexes:i}}\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{.IndexName}}\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t<td>LSI</td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{ newtable.AttributeDefinitions.0.AttributeName }}\' disabled> (\n\t\t\t\t\t\t\t{{#if newtable.AttributeDefinitions.0.AttributeType === \'S\' }}String{{/if}}\n\t\t\t\t\t\t\t{{#if newtable.AttributeDefinitions.0.AttributeType === \'N\' }}Number{{/if}}\n\t\t\t\t\t\t\t{{#if newtable.AttributeDefinitions.0.AttributeType === \'B\' }}Binary{{/if}}\n\t\t\t\t\t\t)</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t{{#.KeySchema }}\n\t\t\t\t\t\t\t\t{{#if .KeyType === \'RANGE\'}}\n\t\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ .AttributeName }}\' />\n\t\t\t\t\t\t\t\t\t<select class="input-select" value=\'{{ .AttributeType }}\'>\n\t\t\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t{{/.KeySchema }}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select class="input-select" value=\'{{.Projection.ProjectionType}}\'>\n\t\t\t\t\t\t\t\t<option value=\'ALL\'>ALL</option>\n\t\t\t\t\t\t\t\t<option value=\'KEYS_ONLY\'>KEYS_ONLY</option>\n\t\t\t\t\t\t\t\t<option value=\'INCLUDE\'>INCLUDE</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t{{#if .Projection.ProjectionType === \'INCLUDE\'}}\n\n\t\t\t\t\t\t\t{{#.Projection.NonKeyAttributes}}\n\t\t\t\t\t\t\t\t<span class=\'badge badge-info\'>{{.}}</span><br>\n\t\t\t\t\t\t\t{{/.Projection.NonKeyAttributes}}\n\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/nonkeyattribute }}\' /><a class=\'btn btn-xs btn-primary\' on-click=\'add-nonkey-attribute\'> <icon-plus /> </a>\n\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\'btn btn-xs btn-danger\' on-click=\'lsi-delete\'> <icon-trash /> </a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{/newtable.LocalSecondaryIndexes}}\n\n\n\t\t\t\t\t{{#newtable.GlobalSecondaryIndexes:i}}\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{.IndexName}}\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t<td>GSI</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t{{#.KeySchema }}\n\t\t\t\t\t\t\t\t{{#if .KeyType === \'HASH\'}}\n\t\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ .AttributeName }}\' />\n\t\t\t\t\t\t\t\t\t<select class="input-select" value=\'{{ .AttributeType }}\'>\n\t\t\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t{{/.KeySchema }}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t{{#.KeySchema }}\n\t\t\t\t\t\t\t\t{{#if .KeyType === \'RANGE\'}}\n\t\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ .AttributeName }}\' />\n\t\t\t\t\t\t\t\t\t<select class="input-select" value=\'{{ .AttributeType }}\'>\n\t\t\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t{{/.KeySchema }}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select class="input-select" value=\'{{.Projection.ProjectionType}}\'>\n\t\t\t\t\t\t\t\t<option value=\'ALL\'>ALL</option>\n\t\t\t\t\t\t\t\t<option value=\'KEYS_ONLY\'>KEYS_ONLY</option>\n\t\t\t\t\t\t\t\t<option value=\'INCLUDE\'>INCLUDE</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t{{#if .Projection.ProjectionType === \'INCLUDE\'}}\n\n\t\t\t\t\t\t\t{{#.Projection.NonKeyAttributes}}\n\t\t\t\t\t\t\t\t<span class=\'badge badge-info\'>{{.}}</span><br>\n\t\t\t\t\t\t\t{{/.Projection.NonKeyAttributes}}\n\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/nonkeyattribute }}\' /><a class=\'btn btn-xs btn-primary\' on-click=\'add-nonkey-attribute\'> <icon-plus /> </a>\n\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\'btn btn-xs btn-danger\' on-click=\'gsi-delete\'> <icon-trash /> </a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{/newtable.GlobalSecondaryIndexes}}\n\n\t\t\t\t</table>\n\t\t\t\t<a class=\'btn btn-sm btn-default\' on-click=\'lsi-add\'>Add LSI</a>\n\t\t\t\t<a class=\'btn btn-sm btn-default\' on-click=\'gsi-add\'>Add GSI</a>\n\n\n\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<h4>Read/write capacity mode</h4>\n\t\t\t\t<div>\n\t\t\t\t\tSelect on-demand if you want to pay only for the read and writes you perform, with no capacity planning required. Select provisioned to save on throughput costs if you can reliably estimate your application\'s throughput requirements.\n\t\t\t\t\tSee the <a target=\'_blank\' href=\'http://aws.amazon.com/dynamodb/pricing\'>DynamoDB pricing page</a> and <a target=\'_blank\' href=\'http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ProvisionedThroughput.html\'>DynamoDB Developer Guide</a> to learn more.\n\t\t\t\t\t<br><br>Read/write capacity mode can be changed later.\n\t\t\t\t</div>\n\t\t\t\t<table style=\'border-collapse: separate;border-spacing: 10px;\'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t<td><input class="input-radio" type=\'radio\' name=\'{{newtable.BillingMode}}\' value=\'PROVISIONED\'> Provisioned</td>\n\t\t\t\t\t\t<td><input class="input-radio" type=\'radio\' name=\'{{newtable.BillingMode}}\' value=\'PAY_PER_REQUEST\'> On-demand</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<h4>Provisioned capacity</h4>\n\n\n\t\t\t\t{{#if newtable.BillingMode === \'PROVISIONED\'}}\n\t\t\t\t<table cellpadding=\'10\'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t<td>Read capacity</td>\n\t\t\t\t\t\t<td>Write capacity</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Table</td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{newtable.ProvisionedThroughput.ReadCapacityUnits}}\'  size=\'4\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{newtable.ProvisionedThroughput.WriteCapacityUnits}}\' size=\'4\' on-focus=\'focus\' /></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{#newtable.GlobalSecondaryIndexes:i}}\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>{{.IndexName}} ( GSI )</td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{.ProvisionedThroughput.ReadCapacityUnits}}\'  size=\'4\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{.ProvisionedThroughput.WriteCapacityUnits}}\' size=\'4\' on-focus=\'focus\' /></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{/newtable.GlobalSecondaryIndexes}}\n\t\t\t\t</table>\n\t\t\t\t{{/if}}\n\n\n\t\t\t\t{{#if newtable.BillingMode === \'PAY_PER_REQUEST\'}}\n\t\t\t\t\tNot applicable because read/write capacity mode is on-demand.\n\t\t\t\t{{/if}}\n\n\t\t\t\t<br>\n\t\t\t\t<hr>\n\t\t\t\t<div style=\'color:red\'>{{ errorMessage }}&nbsp;</div>\n\t\t\t\t<br>\n\t\t\t\t<a class=\'btn btn-sm btn-primary\' on-click=\'create\'>Create</a>\n\t\t\t\t<br>\n\t\t\t</div>\n\t\t</div>\n\t\t</div>\n\t',
	data: function data() {
		return {
			newtable: {
				BillingMode: 'PROVISIONED',
				ProvisionedThroughput: {
					ReadCapacityUnits: 1,
					WriteCapacityUnits: 1
				},

				AttributeDefinitions: [{
					AttributeName: '',
					AttributeType: 'S'
				}],
				LocalSecondaryIndexes: [],
				GlobalSecondaryIndexes: []
			}
		};
	},

	oninit: function oninit() {
		var ractive = this;
		ractive.on('lsi-add', function () {
			ractive.push('newtable.LocalSecondaryIndexes', {
				IndexName: '',
				KeySchema: [{
					AttributeName: ractive.get('newtable.AttributeDefinitions.0.AttributeName'),
					KeyType: 'HASH'
				}, {
					AttributeName: '',
					KeyType: 'RANGE'
				}],
				Projection: {
					ProjectionType: 'ALL',
					NonKeyAttributes: []
				}
			});
		});
		ractive.on('gsi-add', function () {
			ractive.push('newtable.GlobalSecondaryIndexes', {
				IndexName: '',
				KeySchema: [{
					AttributeName: '',
					KeyType: 'HASH'
				}, {
					AttributeName: '',
					KeyType: 'RANGE'
				}],
				Projection: {
					ProjectionType: 'ALL',
					NonKeyAttributes: []
				},
				ProvisionedThroughput: {
					ReadCapacityUnits: 1,
					WriteCapacityUnits: 1
				}
			});
		});
		ractive.on('add-nonkey-attribute', function (e) {
			var keypath = e.resolve() + '.Projection.NonKeyAttributes';
			ractive.push(keypath, ractive.get('nonkeyattribute'));
			ractive.set(keypath, ractive.get(keypath).filter(function (value, index, self) {
				return self.indexOf(value) === index;
			}));
			ractive.set('nonkeyattribute');
		});
		ractive.on('lsi-delete', function (e) {
			ractive.set('newtable.LocalSecondaryIndexes', ractive.get('newtable.LocalSecondaryIndexes').filter(function (val, key) {
				return e.resolve() !== 'newtable.LocalSecondaryIndexes.' + key;
			}));
		});
		ractive.on('gsi-delete', function (e) {
			ractive.set('newtable.GlobalSecondaryIndexes', ractive.get('newtable.GlobalSecondaryIndexes').filter(function (val, key) {
				return e.resolve() !== 'newtable.GlobalSecondaryIndexes.' + key;
			}));
		});

		ractive.observe('newtable.AttributeDefinitions.0.AttributeName', function () {
			ractive.set('newtable.LocalSecondaryIndexes', ractive.get('newtable.LocalSecondaryIndexes').map(function (lsi) {
				lsi.KeySchema[0].AttributeName = ractive.get('newtable.AttributeDefinitions.0.AttributeName');
				return lsi;
			}));
		});

		ractive.on('focus', function () {
			ractive.set('errorMessage');
		});
		ractive.on('create', function () {
			ractive.set('errorMessage');

			var newtable = JSON.parse(JSON.stringify(ractive.get('newtable')));
			console.log('newtable', newtable);

			var payload = {
				TableName: newtable.TableName,
				BillingMode: newtable.BillingMode,
				AttributeDefinitions: newtable.AttributeDefinitions,
				KeySchema: [{
					AttributeName: newtable.AttributeDefinitions[0].AttributeName,
					KeyType: "HASH"
				}],
				ProvisionedThroughput: {
					ReadCapacityUnits: newtable.ProvisionedThroughput.ReadCapacityUnits,
					WriteCapacityUnits: newtable.ProvisionedThroughput.WriteCapacityUnits
				},
				GlobalSecondaryIndexes: newtable.GlobalSecondaryIndexes,
				LocalSecondaryIndexes: newtable.LocalSecondaryIndexes
			};

			if (ractive.get('newtable.sort_enabled')) {
				payload.KeySchema.push({
					AttributeName: newtable.sort_key_name,
					KeyType: "RANGE"
				});
				payload.AttributeDefinitions.push({
					AttributeName: newtable.sort_key_name,
					AttributeType: newtable.sort_key_type
				});
			}

			payload.LocalSecondaryIndexes = payload.LocalSecondaryIndexes.map(function (lsi) {
				if (lsi.Projection.ProjectionType !== 'INCLUDE') delete lsi.Projection.NonKeyAttributes;

				if (payload.AttributeDefinitions.map(function (atd) {
					return atd.AttributeName + '.' + atd.AttributeType;
				}).indexOf(lsi.KeySchema[1].AttributeName + '.' + lsi.KeySchema[1].AttributeType) === -1) payload.AttributeDefinitions.push({
					AttributeName: lsi.KeySchema[1].AttributeName,
					AttributeType: lsi.KeySchema[1].AttributeType
				});
				delete lsi.KeySchema[1].AttributeType;

				return lsi;
			});

			payload.GlobalSecondaryIndexes = payload.GlobalSecondaryIndexes.map(function (gsi) {
				if (gsi.Projection.ProjectionType !== 'INCLUDE') delete gsi.Projection.NonKeyAttributes;

				// add attribute, if not exists
				if (payload.AttributeDefinitions.map(function (atd) {
					return atd.AttributeName + '.' + atd.AttributeType;
				}).indexOf(gsi.KeySchema[0].AttributeName + '.' + gsi.KeySchema[0].AttributeType) === -1) payload.AttributeDefinitions.push({
					AttributeName: gsi.KeySchema[0].AttributeName,
					AttributeType: gsi.KeySchema[0].AttributeType
				});
				delete gsi.KeySchema[0].AttributeType;

				if (gsi.KeySchema[1].AttributeName.trim().length) {
					if (payload.AttributeDefinitions.map(function (atd) {
						return atd.AttributeName + '.' + atd.AttributeType;
					}).indexOf(gsi.KeySchema[1].AttributeName + '.' + gsi.KeySchema[1].AttributeType) === -1) payload.AttributeDefinitions.push({
						AttributeName: gsi.KeySchema[1].AttributeName,
						AttributeType: gsi.KeySchema[1].AttributeType
					});
					delete gsi.KeySchema[1].AttributeType;
				} else {
					gsi.KeySchema = [gsi.KeySchema[0]];
				}

				return gsi;
			});

			if (!payload.LocalSecondaryIndexes.length) delete payload.LocalSecondaryIndexes;

			if (!payload.GlobalSecondaryIndexes.length) delete payload.GlobalSecondaryIndexes;

			DynamoDB.client.createTable(payload, function (err, data) {
				if (err) {
					ractive.set('errorMessage', err.message);
					return;
				}
				ractive.root.findComponent('minitablelist').refresh_tables();

				// open this new table
				//ractive.parent = tabs
				ractive.parent.newtab('tabletab', ractive.get('newtable.TableName'));

				// close the current tab
				ractive.parent.closetab(ractive.get('id'));
			});
		});
	}
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _info = __webpack_require__(15);

var _info2 = _interopRequireDefault(_info);

var _alarms = __webpack_require__(16);

var _alarms2 = _interopRequireDefault(_alarms);

var _capacity = __webpack_require__(17);

var _capacity2 = _interopRequireDefault(_capacity);

var _indexes = __webpack_require__(18);

var _indexes2 = _interopRequireDefault(_indexes);

var _tableglobal = __webpack_require__(19);

var _tableglobal2 = _interopRequireDefault(_tableglobal);

var _backup = __webpack_require__(20);

var _backup2 = _interopRequireDefault(_backup);

var _tabletriggers = __webpack_require__(21);

var _tabletriggers2 = _interopRequireDefault(_tabletriggers);

var _metrics = __webpack_require__(22);

var _metrics2 = _interopRequireDefault(_metrics);

var _items = __webpack_require__(23);

var _items2 = _interopRequireDefault(_items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	isolated: true,
	components: {
		tableinfo: _info2.default,
		tablealarms: _alarms2.default,
		tablecapacity: _capacity2.default,
		tableindexes: _indexes2.default,
		tableglobal: _tableglobal2.default,
		tablebackup: _backup2.default,
		tabletriggers: _tabletriggers2.default,
		tablemetrics: _metrics2.default,
		tableitems: _items2.default
	},
	template: '\n\t\t<div class=\'tableview {{#if active}}active{{/if}}\'>\n\t\t\t<div class=\'tableview-table-tabs noselect\'>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'info\'}}active{{/if}}\'         on-click=\'@this.set(\'tab\',\'info\')\'><!-- <i class=\'zmdi zmdi-info\'></i>--> Overview </a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'data\'}}active{{/if}}\'         on-click=\'@this.set(\'tab\',\'data\')\'><!--<i class=\'zmdi zmdi-format-list-bulleted\'></i>--> Items</a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'metrics\'}}active{{/if}}\'      on-click=\'@this.set(\'tab\',\'metrics\')\'><!--<i class=\'zmdi zmdi-chart\'></i>--> Metrics</a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'alarms\'}}active{{/if}}\'       on-click=\'@this.set(\'tab\',\'alarms\')\'><!--<i class=\'zmdi zmdi-notifications\'></i>--> Alarms</a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'capacity\'}}active{{/if}}\'     on-click=\'@this.set(\'tab\',\'capacity\')\'><!--<i class=\'zmdi zmdi-memory\'></i>--> Capacity</a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'indexes\'}}active{{/if}}\'      on-click=\'@this.set(\'tab\',\'indexes\')\'><!--<i class=\'zmdi zmdi-format-line-spacing\'></i>--> Indexes</a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'globaltables\'}}active{{/if}}\' on-click=\'@this.set(\'tab\',\'globaltables\')\'><!--<i class=\'zmdi zmdi-globe\'></i>--> Global Tables</a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'backups\'}}active{{/if}}\'      on-click=\'@this.set(\'tab\',\'backups\')\'><!--<i class=\'zmdi zmdi-card-sd\'></i>--> Backups</a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'triggers\'}}active{{/if}}\'     on-click=\'@this.set(\'tab\',\'triggers\')\'><!--<i class=\'zmdi zmdi-portable-wifi\'></i>--> Triggers</a>\n\t\t\t</div>\n\t\t\t<div style=\'position: absolute;top: 40px;left: 30px;right: 30px;bottom: 2px;\'>\n\t\t\t\t{{#if err}}\n\t\t\t\t\t<br> {{ err.errorMessage || err.message }}\n\t\t\t\t{{else}}\n\t\t\t\t\t{{#if describeTable === null }}\n\t\t\t\t\t\t<br>Loading...\n\t\t\t\t\t{{else}}\n\n\t\t\t\t\t\t{{#if tab === \'info\'}}\n\t\t\t\t\t\t\t<tableinfo table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'data\'}}\n\t\t\t\t\t\t\t<tableitems\n\t\t\t\t\t\t\t\ttable={{.table}}\n\t\t\t\t\t\t\t\tdescribeTable={{describeTable}}\n\t\t\t\t\t\t\t\ttype={{.type}}\n\t\t\t\t\t\t\t\tscan={{.scan}}\n\t\t\t\t\t\t\t\tquery={{.query}}\n\t\t\t\t\t\t\t\tsql={{.sql}}\n\t\t\t\t\t\t\t\ttheme={{~/theme}}\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'metrics\'}}\n\t\t\t\t\t\t\t<tablemetrics table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'alarms\'}}\n\t\t\t\t\t\t\t<tablealarms table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'capacity\'}}\n\t\t\t\t\t\t\t<tablecapacity table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'indexes\'}}\n\t\t\t\t\t\t\t<tableindexes table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'globaltables\'}}\n\t\t\t\t\t\t\t<tableglobal table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'backups\'}}\n\t\t\t\t\t\t\t<tablebackup table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'triggers\'}}\n\t\t\t\t\t\t\t<tabletriggers table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/if}}\n\n\t\t\t</div>\n\t\t</div>\n\t',
	data: function data() {
		return {
			tab: 'info',
			describeTable: null
		};
	},

	describe_table: function describe_table(cb) {
		var ractive = this;
		DynamoDB.client.describeTable({ TableName: ractive.get('table.name') }, function (err, data) {
			if (err) return ractive.set('err', err);

			ractive.set('err');
			ractive.set('describeTable', data.Table);
			if (typeof cb === "function") cb();
		});
	},

	oninit: function oninit() {

		var ractive = this;
		//ractive.observe('tab', function( tab ) {
		//})
		ractive.describe_table();
	}
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	template: '\n\t\t<div class=\'tableinfo\' style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;overflow: auto;font-size: 14px;">\n\t\t\t\t<div style=\'padding: 30px\'>\n\t\t\t\t\t<h3>\n\t\t\t\t\t\tStream details\n\t\t\t\t\t</h3>\n\t\t\t\t\t<hr>\n\n\t\t\t\t\t{{#if StreamEditing}}\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'><b>View type</b></td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<input class="input-radio" type=\'radio\' name=\'{{NewStreamViewType}}\' value=\'KEYS_ONLY\'>\tKeys only - only the key attributes of the modified item<br>\n\t\t\t\t\t\t\t\t\t<input class="input-radio" type=\'radio\' name=\'{{NewStreamViewType}}\' value=\'NEW_IMAGE\'>\tNew image - the entire item, as it appears after it was modified<br>\n\t\t\t\t\t\t\t\t\t<input class="input-radio" type=\'radio\' name=\'{{NewStreamViewType}}\' value=\'OLD_IMAGE\'>\tOld image - the entire item, as it appeared before it was modified<br>\n\t\t\t\t\t\t\t\t\t<input class="input-radio" type=\'radio\' name=\'{{NewStreamViewType}}\' value=\'NEW_AND_OLD_IMAGES\'> New and old images - both the new and the old images of the item<br>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'></td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<a class=\'btn btn-sm btn-primary\' on-click=\'update-stream\'>Enable</a>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t<table style=\'border-collapse: separate;border-spacing: 10px;\'>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'><b>Stream enabled</b></td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{{#if !selfDescribeTable.StreamSpecification}}\n\t\t\t\t\t\t\t\t\t\tno\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t{{#if selfDescribeTable.StreamSpecification.StreamEnabled === true }}\n\t\t\t\t\t\t\t\t\t\tyes\n\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\tno\n\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'><b>View type\t</b></td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{{#if !selfDescribeTable.StreamSpecification}}\n\t\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t{{selfDescribeTable.StreamSpecification.StreamViewType}}\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'><b>Latest stream ARN</b></td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{{#if !selfDescribeTable.LatestStreamArn}}\n\t\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t{{selfDescribeTable.LatestStreamArn}}\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'>\n\t\t\t\t\t\t\t\t\t{{#if selfDescribeTable.StreamSpecification.StreamEnabled === true}}\n\t\t\t\t\t\t\t\t\t\t<a class=\'btn btn-xs btn-default\' on-click=\'disable-stream\'>Disable Stream</a>\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t<a class=\'btn btn-xs btn-default\' on-click=\'manage-stream\'>Manage Stream</a>\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t{{/if}}\n\n\n\t\t\t\t\t<h3>\n\t\t\t\t\t\tTable details\n\t\t\t\t\t\t<a class=\'btn btn-sm btn-default pull-right\' on-click=\'refresh-table\'><icon-refresh /></a>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<div style=\'color:red\'>{{ err }}</div>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<table style=\'border-collapse: separate;border-spacing: 10px;\'>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'><b>Table ID</b></td>\n\t\t\t\t\t\t\t<td> {{ selfDescribeTable.TableId }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'><b>Table name</b></td>\n\t\t\t\t\t\t\t<td> {{ selfDescribeTable.TableName }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Primary partition key</b></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{#selfDescribeTable.KeySchema:i}}\n\t\t\t\t\t\t\t\t\t{{#if .KeyType === \'HASH\'}}\n\t\t\t\t\t\t\t\t\t\t{{.AttributeName}}\n\t\t\t\t\t\t\t\t\t\t{{# ~/selfDescribeTable.AttributeDefinitions }}\n\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeName === ~/.selfDescribeTable.KeySchema[i].AttributeName }}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeType === \'S\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t( String )\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeType === \'N\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t( Number )\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeType === \'B\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t( Binary )\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t{{/}}\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{/selfDescribeTable.KeySchema}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Primary sort key</b></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{#selfDescribeTable.KeySchema:i}}\n\t\t\t\t\t\t\t\t\t{{#if .KeyType === \'RANGE\'}}\n\t\t\t\t\t\t\t\t\t\t{{.AttributeName}}\n\t\t\t\t\t\t\t\t\t\t{{# ~/selfDescribeTable.AttributeDefinitions }}\n\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeName === ~/.selfDescribeTable.KeySchema[i].AttributeName }}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeType === \'S\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t( String )\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeType === \'N\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t( Number )\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeType === \'B\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t( Binary )\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t{{/}}\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{/selfDescribeTable.KeySchema}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Point-in-time recovery</b></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Encryption</b></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Time to live attribute</b></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{#if TimeToLiveDescription}}\n\t\t\t\t\t\t\t\t\t{{#if TimeToLiveDescriptionEditing}}\n\t\t\t\t\t\t\t\t\t\tTTL attribute <input class="input-text" type=\'text\' value=\'{{TimeToLiveDescriptionNewField}}\'> <a class=\'btn btn-xs btn-primary\' on-click=\'update-ttl\'>Save</a>\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t{{#if TimeToLiveDescriptionErr}}\n\t\t\t\t\t\t\t\t\t\t\tError {{TimeToLiveDescriptionErr.errorMessage}}\n\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t{{#if TimeToLiveDescription.TimeToLiveStatus === \'ENABLED\'}}\n\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{TimeToLiveDescription.TimeToLiveStatus}}\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t\t\t{{TimeToLiveDescription.AttributeName}}\n\n\t\t\t\t\t\t\t\t\t\t\t{{#if TimeToLiveDescription.TimeToLiveStatus === \'DISABLED\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\'javascript:void(0)\' on-click=\'manage-ttl\' >Manage TTL</a>\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t\t\t{{#if TimeToLiveDescription.TimeToLiveStatus === \'ENABLED\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\'javascript:void(0)\' on-click=\'disable-ttl\' >Disable TTL</a>\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\tLoading...\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Table status</b></td>\n\t\t\t\t\t\t\t<td>{{selfDescribeTable.TableStatus}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Creation date</b></td>\n\t\t\t\t\t\t\t<td>{{selfDescribeTable.CreationDateTime}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Read/write capacity mode</b></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{#if selfDescribeTable.BillingModeSummary.BillingMode === \'PROVISIONED\'}}Provisioned{{/if}}\n\t\t\t\t\t\t\t\t{{#if selfDescribeTable.BillingModeSummary.BillingMode === \'PAY_PER_REQUEST\'}}On-Demand{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Provisioned read capacity units</b></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{#if selfDescribeTable.BillingModeSummary.BillingMode === \'PROVISIONED\'}}\n\t\t\t\t\t\t\t\t\t{{selfDescribeTable.ProvisionedThroughput.ReadCapacityUnits}}\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{#if selfDescribeTable.BillingModeSummary.BillingMode === \'PAY_PER_REQUEST\'}}-{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Provisioned write capacity units</b></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{#if selfDescribeTable.BillingModeSummary.BillingMode === \'PROVISIONED\'}}\n\t\t\t\t\t\t\t\t\t{{selfDescribeTable.ProvisionedThroughput.WriteCapacityUnits}}\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{#if selfDescribeTable.BillingModeSummary.BillingMode === \'PAY_PER_REQUEST\'}}-{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Last decrease time</b></td>\n\t\t\t\t\t\t\t<td>{{selfDescribeTable.ProvisionedThroughput.LastDecreaseDateTime || \'-\' }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Last increase time</b></td>\n\t\t\t\t\t\t\t<td>{{selfDescribeTable.ProvisionedThroughput.LastIncreaseDateTime || \'-\'}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Storage size (in bytes)</b></td>\n\t\t\t\t\t\t\t<td>{{selfDescribeTable.TableSizeBytes }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Item count</b></td>\n\t\t\t\t\t\t\t<td>{{ selfDescribeTable.ItemCount }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Region</b></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Amazon Resource Name (ARN)</b></td>\n\t\t\t\t\t\t\t<td> {{selfDescribeTable.TableArn}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<small>Storage size and item count are not updated in real-time. They are updated periodically, roughly every six hours.</small>\n\t\t\t\t</div>\n\t\t</div>\n\t',

	refresh_table: function refresh_table() {
		var ractive = this;

		ractive.set('selfDescribeTable');
		ractive.set('TimeToLiveDescriptionEditing');
		ractive.set('TimeToLiveDescription');
		ractive.set('TimeToLiveDescriptionErr');
		ractive.set('TimeToLiveDescriptionNewField', '');
		ractive.set('StreamEditing');

		async.waterfall([function (cb) {

			DynamoDB.client.describeTable({ TableName: ractive.get('table.name') }, function (err, data) {
				if (err) return cb(err);

				ractive.set('selfDescribeTable', data.Table);
				cb();
			});
		}, function (cb) {
			DynamoDB.client.describeTimeToLive({ TableName: ractive.get('table.name') }, function (err, data) {
				if (err) return ractive.set('TimeToLiveDescriptionErr', err);

				ractive.set('TimeToLiveDescription', data.TimeToLiveDescription);
				cb();
			});
		}], function (err) {
			if (err) ractive.set('err', err.errorMessage);
		});
	},
	data: function data() {
		return {
			selfDescribeTable: null
		};
	},
	oninit: function oninit() {
		var ractive = this;

		ractive.set('selfDescribeTable', ractive.get('describeTable'));

		ractive.on('manage-ttl', function () {
			ractive.set('TimeToLiveDescriptionEditing', true);
			return false;
		});

		ractive.on('update-ttl', function () {
			var newfield = ractive.get('TimeToLiveDescriptionNewField').trim();
			if (!newfield) return alert('invalid field name');

			var params = {
				TableName: ractive.get('table.name'),
				TimeToLiveSpecification: {
					AttributeName: newfield,
					Enabled: true
				}
			};
			DynamoDB.client.updateTimeToLive(params, function (err, data) {
				if (err) return alert('failed ' + err.errorMessage);

				ractive.refresh_table();
			});
		});
		ractive.on('disable-ttl', function () {
			if (confirm('Are you sure you want to disable TTL ?')) {
				var params = {
					TableName: ractive.get('table.name'),
					TimeToLiveSpecification: {
						AttributeName: ractive.get('TimeToLiveDescription.AttributeName'),
						Enabled: false
					}
				};
				DynamoDB.client.updateTimeToLive(params, function (err, data) {
					if (err) return alert('failed ' + err.errorMessage);

					ractive.refresh_table();
				});
			}
		});

		ractive.on('manage-stream', function () {
			ractive.set('StreamEditing', true);
		});
		ractive.on('update-stream', function () {
			var type = ractive.get('NewStreamViewType');
			DynamoDB.client.updateTable({
				TableName: ractive.get('table.name'),
				StreamSpecification: {
					StreamEnabled: true,
					StreamViewType: type
				}
			}, function (err, data) {
				if (err) return alert('Failed ' + err.errorMessage);

				ractive.refresh_table();
				cb();
			});
		});
		ractive.on('disable-stream', function () {
			if (confirm('Disable stream ?')) {
				DynamoDB.client.updateTable({
					TableName: ractive.get('table.name'),
					StreamSpecification: {
						StreamEnabled: false
					}
				}, function (err, data) {
					if (err) return alert('Failed ' + err.errorMessage);

					ractive.refresh_table();
					cb();
				});
			}
		});

		ractive.on('refresh-table', function () {
			ractive.refresh_table();
		});
		ractive.refresh_table();
	}
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	template: "\n\t\t<div style='padding: 30px'>\n\t\t\t<h3>Alarms</h3>\n\t\t</div>\n\t"
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	template: '\n\n\t\t\t<div style=\'padding: 30px\'>\n\n\n\n\t\t\t\t<h3 style="font-size: 16px;">Read/write capacity mode</h3>\n\t\t\t\t<hr/>\n\t\t\t\t<p style="font-size: 13px;">\n\t\t\t\t\tSelect on-demand if you want to pay only for the read and writes you perform, with no capacity planning required. Select provisioned to save on throughput costs if you can reliably estimate your application\'s throughput requirements. See the\n\t\t\t\t\t\t<a href="http://aws.amazon.com/dynamodb/pricing">DynamoDB pricing page</a> and\n\t\t\t\t\t\t<a href="DynamoDB Developer Guide">DynamoDB Developer Guide</a> to learn more.\n\t\t\t\t</p>\n\t\t\t\tRead/write capacity mode can be changed later.<br>\n\t\t\t\t<input class="input-radio" type="radio" name={{localDescribeTable.BillingModeSummary.BillingMode}} value="PROVISIONED"> Provisioned (free-tier eligible)<br>\n\t\t\t\t<input class="input-radio" type="radio" name={{localDescribeTable.BillingModeSummary.BillingMode}} value="PAY_PER_REQUEST">On-demand<br>\n\n\t\t\t\t<h3>\n\t\t\t\t\tProvisioned capacity\n\t\t\t\t\t<a class=\'btn btn-sm btn-default pull-right\' on-click=\'refresh-table\'><icon-refresh /></a>\n\t\t\t\t</h3>\n\t\t\t\t<hr>\n\n\t\t\t\t\t{{#if localDescribeTable === false}}\n\t\t\t\t\t\tLoading...\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t{{#if localDescribeTable.BillingModeSummary.BillingMode === \'PAY_PER_REQUEST\'}}\n\t\t\t\t\t\t\tNot applicable because read/write capacity mode is on-demand.<br>\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width=\'160\' align=\'right\'></td>\n\t\t\t\t\t\t\t\t\t<td width=\'160\'>Read capacity units</td>\n\t\t\t\t\t\t\t\t\t<td width=\'160\'>Write capacity units</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>Table</td>\n\t\t\t\t\t\t\t\t\t<td><input class="input-text" type=\'text\' size=\'4\' value=\'{{localDescribeTable.ProvisionedThroughput.ReadCapacityUnits}}\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t\t\t\t<td><input class="input-text" type=\'text\' size=\'4\' value=\'{{localDescribeTable.ProvisionedThroughput.WriteCapacityUnits}}\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t{{#localDescribeTable.GlobalSecondaryIndexes}}\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>{{ .IndexName }}</td>\n\t\t\t\t\t\t\t\t\t<td><input class="input-text" type=\'text\' size=\'4\' value=\'{{.ProvisionedThroughput.ReadCapacityUnits}}\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t\t\t\t<td><input class="input-text" type=\'text\' size=\'4\' value=\'{{.ProvisionedThroughput.WriteCapacityUnits}}\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t{{/localDescribeTable.GlobalSecondaryIndexes}}\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/if}}\n\t\t\t\t<h3>Auto Scaling</h3>\n\t\t\t\t<hr/>\n\t\t\t\t\t<small>Auto Scaling not supported by this UI</small>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div style=\'color:red\'>{{ err }}&nbsp;</div>\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td width=\'160\'>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<a class=\'btn btn-sm btn-primary\' on-click=\'save\'>Save</a>\n\t\t\t\t\t\t\t\t<a class=\'btn btn-sm btn-default\' on-click=\'cancel\'>Cancel</a>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t</div>\n\n\t',
	oninit: function oninit() {
		var ractive = this;
		var refresh_table = function refresh_table() {
			ractive.set('localDescribeTable', false);
			DynamoDB.client.describeTable({ TableName: ractive.get('table.name') }, function (err, data) {
				if (err) return ractive.set('err', err.message);

				console.log(data.Table);
				ractive.set('localDescribeTable', data.Table);
				ractive.set('originalDescribeTable', JSON.parse(JSON.stringify(data.Table))); // this wont change
			});
		};
		ractive.on('cancel', function () {
			refresh_table();
		});
		ractive.on('focus', function () {
			ractive.set('err');
		});

		ractive.on('save', function () {

			var payload = {
				TableName: ractive.get('describeTable.TableName')
			};

			// if main table provisioned troughput changed but BillingMode remain the same
			if ((ractive.get('localDescribeTable.ProvisionedThroughput.ReadCapacityUnits') !== ractive.get('originalDescribeTable.ProvisionedThroughput.ReadCapacityUnits') || ractive.get('localDescribeTable.ProvisionedThroughput.WriteCapacityUnits') !== ractive.get('originalDescribeTable.ProvisionedThroughput.WriteCapacityUnits')) && ractive.get('localDescribeTable.BillingModeSummary.BillingMode') === ractive.get('originalDescribeTable.BillingModeSummary.BillingMode')) {
				payload.ProvisionedThroughput = {
					ReadCapacityUnits: ractive.get('localDescribeTable.ProvisionedThroughput.ReadCapacityUnits'),
					WriteCapacityUnits: ractive.get('localDescribeTable.ProvisionedThroughput.WriteCapacityUnits')
				};
			} else {}
			// if no changes, do not add obj at all
			//payload.ProvisionedThroughput = { ... }


			// each index
			if ((ractive.get('localDescribeTable.GlobalSecondaryIndexes') || []).length) {
				payload.GlobalSecondaryIndexUpdates = [];
				ractive.get('localDescribeTable.GlobalSecondaryIndexes').map(function (gsi, i) {
					var original_gsi = ractive.get('originalDescribeTable.GlobalSecondaryIndexes.' + i);

					// if index provisioned troughput changed but BillingMode remain the same
					if ((gsi.ProvisionedThroughput.ReadCapacityUnits !== ractive.get('originalDescribeTable.GlobalSecondaryIndexes.' + i + '.ProvisionedThroughput.ReadCapacityUnits') || gsi.ProvisionedThroughput.WriteCapacityUnits !== ractive.get('originalDescribeTable.GlobalSecondaryIndexes.' + i + '.ProvisionedThroughput.WriteCapacityUnits')) && ractive.get('localDescribeTable.BillingModeSummary.BillingMode') === ractive.get('originalDescribeTable.BillingModeSummary.BillingMode')) {
						payload.GlobalSecondaryIndexUpdates.push({
							Update: {
								IndexName: gsi.IndexName,
								ProvisionedThroughput: {
									ReadCapacityUnits: gsi.ProvisionedThroughput.ReadCapacityUnits,
									WriteCapacityUnits: gsi.ProvisionedThroughput.WriteCapacityUnits
								}
							}
						});
					}
				});
			}

			if ((payload.GlobalSecondaryIndexUpdates || []).length === 0) delete payload.GlobalSecondaryIndexUpdates;

			// if BillingMode has changed
			if (ractive.get('localDescribeTable.BillingModeSummary.BillingMode') !== ractive.get('originalDescribeTable.BillingModeSummary.BillingMode')) {
				if (ractive.get('localDescribeTable.BillingModeSummary.BillingMode') === 'PAY_PER_REQUEST') {
					payload.BillingMode = 'PAY_PER_REQUEST';
				}

				if (ractive.get('localDescribeTable.BillingModeSummary.BillingMode') === 'PROVISIONED') {
					payload.BillingMode = 'PROVISIONED';
					payload.ProvisionedThroughput = {
						ReadCapacityUnits: ractive.get('localDescribeTable.ProvisionedThroughput.ReadCapacityUnits') || 1,
						WriteCapacityUnits: ractive.get('localDescribeTable.ProvisionedThroughput.WriteCapacityUnits') || 1
						// each index
					};if ((ractive.get('localDescribeTable.GlobalSecondaryIndexes') || []).length) {
						payload.GlobalSecondaryIndexUpdates = [];
						ractive.get('localDescribeTable.GlobalSecondaryIndexes').map(function (gsi, i) {

							payload.GlobalSecondaryIndexUpdates.push({
								Update: {
									IndexName: gsi.IndexName,
									ProvisionedThroughput: {
										ReadCapacityUnits: gsi.ProvisionedThroughput.ReadCapacityUnits || 1,
										WriteCapacityUnits: gsi.ProvisionedThroughput.WriteCapacityUnits || 1
									}
								}
							});
						});
					}
				}
			}

			//console.log('payload', payload )

			DynamoDB.client.updateTable(payload, function (err, data) {
				if (err) return ractive.set('err', err.message);

				setTimeout(refresh_table, 1000);
				//console.log( err, data )
			});
		});
		ractive.on('refresh-table', function () {
			refresh_table();
		});
		refresh_table();
	}
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tabledata = __webpack_require__(0);

var _tabledata2 = _interopRequireDefault(_tabledata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	components: {
		tabledata: _tabledata2.default
	},
	template: '\n\t\t<div style=\'padding: 30px\'>\n\t\t\t{{#if tab === \'create\'}}\n\t\t\t\t<h3>Create Global Secondary Index</h3>\n\t\t\t\t<table cellpadding=\'10\' border=\'0\'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Name</td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{newindex.IndexName}}\' on-focus=\'focus\' /></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Type</td>\n\t\t\t\t\t\t<td>GSI</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Partition key</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ newindex.KeySchema.0.AttributeName }}\' on-focus=\'focus\' />\n\t\t\t\t\t\t\t<select class="input-select" value=\'{{ newindex.KeySchema.0.AttributeType }}\'>\n\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Sort key</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ newindex.KeySchema.1.AttributeName }}\' on-focus=\'focus\' />\n\t\t\t\t\t\t\t<select class="input-select" value=\'{{ newindex.KeySchema.1.AttributeType }}\'>\n\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Projection type</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select class="input-select" value=\'{{ newindex.Projection.ProjectionType}}\'>\n\t\t\t\t\t\t\t\t<option value=\'ALL\'>ALL</option>\n\t\t\t\t\t\t\t\t<option value=\'KEYS_ONLY\'>KEYS_ONLY</option>\n\t\t\t\t\t\t\t\t<option value=\'INCLUDE\'>INCLUDE</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{#if newindex.Projection.ProjectionType === \'INCLUDE\' }}\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Projected attributes</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t{{#if newindex.Projection.ProjectionType === \'INCLUDE\'}}\n\n\t\t\t\t\t\t\t{{#newindex.Projection.NonKeyAttributes}}\n\t\t\t\t\t\t\t\t<span class=\'badge badge-info\'>{{.}}</span><br>\n\t\t\t\t\t\t\t{{/newindex.Projection.NonKeyAttributes}}\n\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/nonkeyattribute }}\' on-focus=\'focus\' /><a class=\'btn btn-xs btn-primary\' on-click=\'add-nonkey-attribute\'> <icon-plus /></a>\n\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{/if}}\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Read capacity</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ newindex.ProvisionedThroughput.ReadCapacityUnits }}\'  size=\'4\' on-focus=\'focus\' />\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Write capacity</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ newindex.ProvisionedThroughput.WriteCapacityUnits}}\' size=\'4\' on-focus=\'focus\' />\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t</table>\n\t\t\t\t<br>\n\t\t\t\t<div style=\'color:red\'>{{ err }}&nbsp;</div>\n\t\t\t\t<br>\n\t\t\t\t<a class=\'btn btn-sm btn-primary\' on-click=\'create-gsi\'>Create</a>\n\t\t\t\t<a class=\'btn btn-sm btn-default\' on-click=\'cancel-gsi\'>Cancel</a>\n\t\t\t\t<br>\n\t\t\t{{else}}\n\t\t\t\t<h3>Indexes</h3>\n\t\t\t\t<div>\n\t\t\t\t\t<a class=\'btn btn-sm btn-primary\' on-click=\'create\'>Create index</a>\n\t\t\t\t\t<a class=\'btn btn-sm btn-default\' on-click=\'delete\'>Delete index</a>\n\n\t\t\t\t\t<a class=\'btn btn-sm btn-default pull-right\' on-click=\'refresh-table\'> <icon-refresh /> </a>\n\t\t\t\t</div>\n\t\t\t\t<tabledata columns=\'{{columns}}\' rows=\'{{rows}}\' style=\'top: 128px\'/>\n\t\t\t{{/if}}\n\t\t</div>\n\t',

	refresh_table_indexes: function refresh_table_indexes() {
		var ractive = this;

		ractive.set('rows', (ractive.get('describeTable').LocalSecondaryIndexes || []).map(function (index) {
			var partition_key_name = ((index.KeySchema || []).filter(function (ks) {
				return ks.KeyType === 'HASH';
			})[0] || {}).AttributeName;
			var partition_key_type = { S: 'String', N: 'Number', B: 'Binary' }[ractive.get('describeTable').AttributeDefinitions.filter(function (at) {
				return at.AttributeName === ((index.KeySchema || []).filter(function (ks) {
					return ks.KeyType === 'HASH';
				})[0] || {}).AttributeName;
			})[0].AttributeType];
			var sort_key_name = ((index.KeySchema || []).filter(function (ks) {
				return ks.KeyType === 'RANGE';
			})[0] || {}).AttributeName || '';
			var sort_key_type = { S: 'String', N: 'Number', B: 'Binary' }[(ractive.get('describeTable').AttributeDefinitions.filter(function (at) {
				return at.AttributeName === ((index.KeySchema || []).filter(function (ks) {
					return ks.KeyType === 'RANGE';
				})[0] || {}).AttributeName;
			})[0] || {}).AttributeType] || '';

			return [{ KEY: true }, { S: index.IndexName }, { S: 'N/A' }, { S: 'LSI' }, { S: partition_key_name + ' (' + partition_key_type + ' )' }, { S: sort_key_name + (sort_key_type ? ' ( ' + sort_key_type + ' )' : '') }, { S: index.Projection.ProjectionType + ' ' + (index.Projection.ProjectionType === 'INCLUDE' ? index.Projection.NonKeyAttributes.join(', ') : '') }, { N: index.IndexSizeBytes.toString() }, { N: index.ItemCount.toString() }];
		}).concat((ractive.get('describeTable').GlobalSecondaryIndexes || []).map(function (index) {
			var partition_key_name;
			var partition_key_type;
			var sort_key_name;
			var sort_key_type;
			var projection = '';
			try {
				partition_key_name = ((index.KeySchema || []).filter(function (ks) {
					return ks.KeyType === 'HASH';
				})[0] || {}).AttributeName;
				partition_key_type = { S: 'String', N: 'Number', B: 'Binary' }[ractive.get('describeTable').AttributeDefinitions.filter(function (at) {
					return at.AttributeName === ((index.KeySchema || []).filter(function (ks) {
						return ks.KeyType === 'HASH';
					})[0] || {}).AttributeName;
				})[0].AttributeType];
				sort_key_name = ((index.KeySchema || []).filter(function (ks) {
					return ks.KeyType === 'RANGE';
				})[0] || {}).AttributeName || '';
				sort_key_type = { S: 'String', N: 'Number', B: 'Binary' }[(ractive.get('describeTable').AttributeDefinitions.filter(function (at) {
					return at.AttributeName === ((index.KeySchema || []).filter(function (ks) {
						return ks.KeyType === 'RANGE';
					})[0] || {}).AttributeName;
				})[0] || {}).AttributeType] || '';
				projection = index.Projection.ProjectionType + ' ' + (index.Projection.ProjectionType === 'INCLUDE' ? index.Projection.NonKeyAttributes.join(', ') : '');
			} catch (e) {}

			return [{ KEY: true }, { S: index.IndexName }, { S: index.IndexStatus }, { S: 'GSI' }, { S: partition_key_name + ' (' + partition_key_type + ' )' }, { S: sort_key_name + (sort_key_type ? ' ( ' + sort_key_type + ' )' : '') }, { S: projection }, { N: index.hasOwnProperty('IndexSizeBytes') ? index.IndexSizeBytes.toString() : 0 }, { N: index.hasOwnProperty('ItemCount') ? index.ItemCount.toString() : 0 }];
		})));
	},

	oninit: function oninit() {
		var ractive = this;
		ractive.on('tabledata.selectrow', function (context) {
			var keypath = context.resolve();
			ractive.set(keypath + '.0.selected', !ractive.get(keypath + '.0.selected'));
		});
		ractive.on('focus', function () {
			ractive.set('err');
		});
		ractive.on('create', function () {
			ractive.set('tab', 'create');
			ractive.set('newindex', {
				IndexName: '',
				KeySchema: [{
					AttributeName: '',
					AttributeType: 'S',
					KeyType: 'HASH'
				}, {
					AttributeName: '',
					AttributeType: 'S',
					KeyType: 'RANGE'
				}],
				Projection: {
					ProjectionType: 'ALL',
					NonKeyAttributes: []
				},
				ProvisionedThroughput: {
					ReadCapacityUnits: 1,
					WriteCapacityUnits: 1
				}
			});
		});
		ractive.on('cancel-gsi', function () {
			ractive.set('tab');
			ractive.set('newindex');
		});

		ractive.on('add-nonkey-attribute', function (e) {
			var keypath = 'newindex.Projection.NonKeyAttributes';
			ractive.push(keypath, ractive.get('nonkeyattribute'));
			ractive.set(keypath, ractive.get(keypath).filter(function (value, index, self) {
				return self.indexOf(value) === index;
			}));
			ractive.set('nonkeyattribute');
		});
		ractive.on('create-gsi', function () {
			var newindex = JSON.parse(JSON.stringify(ractive.get('newindex')));
			var AttributeDefinitions = [];

			newindex.KeySchema.map(function (ks) {
				if (ks.KeyType === 'HASH') {
					AttributeDefinitions.push({
						AttributeName: ks.AttributeName,
						AttributeType: ks.AttributeType
					});
					delete ks.AttributeType;
				}
				if (ks.KeyType === 'RANGE') {
					if (ks.AttributeName.trim() === '') {
						newindex.KeySchema = [newindex.KeySchema[0]];
					} else {
						AttributeDefinitions.push({
							AttributeName: ks.AttributeName,
							AttributeType: ks.AttributeType
						});
						delete ks.AttributeType;
					}
				}
			});
			if (newindex.Projection.ProjectionType !== 'INCLUDE') delete newindex.Projection.NonKeyAttributes;

			var payload = {
				TableName: ractive.get('describeTable.TableName'),
				AttributeDefinitions: AttributeDefinitions,
				GlobalSecondaryIndexUpdates: []
			};

			payload.GlobalSecondaryIndexUpdates.push({
				Create: newindex
			});

			DynamoDB.client.updateTable(payload, function (err, data) {

				if (err) return ractive.set('err', err.message || err.errorMessage);

				ractive.set('tab');
				ractive.set('newindex');

				ractive.set('rows', null);
				setTimeout(function () {
					ractive.parent.describe_table(function () {
						ractive.refresh_table_indexes();
					});
				}, 500);
			});
		});

		ractive.on('delete', function () {
			var selected = ractive.get('rows').filter(function (r) {
				return r[0].selected === true;
			});

			if (selected.length === 0) return alert('Please select an index to delete');

			if (selected.length > 1) return alert('Please select one index at a time');

			var tablename = ractive.get('describeTable.TableName');
			var indexname = selected[0][1].S;

			if (confirm('Are you sure you want to delete index ' + indexname + ' from table ' + tablename)) {

				var payload = {
					TableName: ractive.get('describeTable.TableName'),
					GlobalSecondaryIndexUpdates: []
				};

				payload.GlobalSecondaryIndexUpdates.push({
					Delete: {
						IndexName: indexname
					}
				});

				DynamoDB.client.updateTable(payload, function (err, data) {

					if (err) return alert(err.message);

					ractive.set('rows', null);
					setTimeout(function () {
						ractive.parent.describe_table(function () {
							ractive.refresh_table_indexes();
						});
					}, 500);
				});
			}
		});

		ractive.on('refresh-table', function () {
			ractive.set('rows', null);
			ractive.parent.describe_table(function () {
				ractive.refresh_table_indexes();
			});
		});

		ractive.refresh_table_indexes();
	},
	data: function data() {
		return {
			columns: [null, 'Name', 'Status', 'Type', 'Partition key', 'Sort key', 'Attributes', 'Size', 'Item count'],
			rows: null
			//newindex:
		};
	}
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	template: "\
		<div style='padding: 30px'>\
			<h3>Global Tables</h3>\
		</div>\
	"
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tabledata = __webpack_require__(0);

var _tabledata2 = _interopRequireDefault(_tabledata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	components: {
		tabledata: _tabledata2.default
	},
	template: '\n\t\t\t<div>\n\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<h4>On-Demand Backup and Restore</h4>\n\t\t\t\t<hr />\n\t\t\t\t<div>You can create and restore a complete backup of your DynamoDB table data and its settings at any time.\n\t\t\t\t<a target=\'_blank\' href=\'http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BackupRestore.html\'>Learn more</a>\n\t\t\t\t</div>\n\n\t\t\t\t<br>\n\t\t\t\t<div>\n\t\t\t\t\t<a class=\'btn btn-sm btn-primary \' on-click=\'create-window\'>Create backup</a>\n\t\t\t\t\t<a class=\'btn btn-sm btn-default disabled\' on-click=\'restore\'>Restore backup</a>\n\t\t\t\t\t<a class=\'btn btn-sm btn-default {{#if selection_size !== 1}}disabled{{/if}}\' on-click=\'delete\'>Delete backup</a>\n\n\t\t\t\t\t<a class=\'btn btn-sm btn-default pull-right\' on-click=\'refresh\'><icon-refresh /></a>\n\t\t\t\t</div>\n\n\t\t\t\t<tabledata columns=\'{{columns}}\' rows=\'{{rows}}\' style=\'top: 180px\' err={{err}} />\n\n\n\n\t\t\t</div>\n\n\t',
	list_backups: function list_backups() {
		var ractive = this;
		ractive.set('rows', null);
		ractive.set('err', null);

		DynamoDB.client.listBackups({ TableName: this.get('describeTable.TableName') }, function (err, data) {
			if (err) return ractive.set({ rows: false, err: { errorMessage: 'Failed getting backup list' } });

			ractive.set('rows', data.BackupSummaries.map(function (b) {
				return [{ KEY: true, item: b }, { S: b.BackupName }, { S: b.BackupStatus }, { S: b.BackupCreationDateTime.toISOString().split('T').join(' ') }, { S: Math.ceil(b.BackupSizeBytes / 1024) + 'K' }, { S: b.BackupType }, { S: '' }, { S: b.BackupArn }];
			}
			// { N: index.IndexSizeBytes.toString() },
			// { N: index.ItemCount.toString() },

			));
		});
	},
	oninit: function oninit() {
		var ractive = this;

		ractive.on('tabledata.selectrow', function (context) {
			var keypath = context.resolve();
			ractive.set(keypath + '.0.selected', !ractive.get(keypath + '.0.selected'));
			ractive.set('selection_size', ractive.get('rows').filter(function (r) {
				return r[0].selected === true;
			}).length);
		});

		ractive.on('delete', function () {
			var selected = ractive.get('rows').filter(function (r) {
				return r[0].selected === true;
			});

			if (selected.length === 0) return alert('Please select a backup to delete');

			if (selected.length > 1) return alert('Please select one backup at a time');

			var backup = ractive.get('rows').filter(function (r) {
				return r[0].selected === true;
			})[0];
			var tablename = ractive.get('describeTable.TableName');

			var backupname = backup[0].item.BackupName;

			if (confirm('Are you sure you want to delete backup ' + backupname + ' of table ' + tablename)) {

				var params = {
					BackupArn: backup[0].item.BackupArn
				};

				DynamoDB.client.deleteBackup(params, function (err, data) {
					if (err) return alert(err.message);

					ractive.list_backups();
				});
			}
		});

		ractive.on('create-window', function () {
			ractive.root.findComponent('WindowContainer').newWindow(function ($window) {
				$window.set({
					title: 'Create Backup',
					'geometry.width': window.innerWidth * .4,
					'geometry.height': 250,
					'geometry.left': window.innerWidth * .3,
					'geometry.top': window.innerHeight * .2
				});

				var vid = "window" + (Math.random() * 0xFFFFFF << 0).toString(16);
				$window.content('<div id="' + vid + '"/>').then(function () {
					new Ractive({
						components: {},
						el: vid,
						template: '\n\t\t\t\t\t\t\t<table cellspacing="10" style="width: 100%">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td colspan=2 style="height: 40px;">\n\t\t\t\t\t\t\t\t\t\t{{#if errorMessage}}\n\t\t\t\t\t\t\t\t\t\t\t<span style="color:red">{{errorMessage}}</span>\n\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t<span>&nbsp;</span>\n\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width=150>Table</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<select class="input-select" style="width: 100%">\n\t\t\t\t\t\t\t\t\t\t\t<option>{{describeTable.TableName}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width=150>Backup Name</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<input type="text" class="input-text" style="width: 100%" value={{backup_name}} placeholder=" a-z, A-Z, 0-9, \'.\', \'_\', and \'-\' " on-keydown="resetform"/>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width=150></td>\n\t\t\t\t\t\t\t\t\t<td align="right">\n\t\t\t\t\t\t\t\t\t\t<a class="btn btn-sm btn-primary" on-click="create" >Create</a>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t',
						data: {
							backup_name: '',
							describeTable: ractive.get('describeTable')
						},
						on: {
							resetform: function resetform() {
								this.set('errorMessage');
							},
							create: function create() {
								var r = this;
								r.set('errorMessage');
								var params = {
									BackupName: this.get('backup_name'),
									TableName: this.get('describeTable.TableName')
								};
								DynamoDB.client.createBackup(params, function (err, data) {
									if (err) {
										r.set('errorMessage', err.errorMessage || err.message || 'Create Failed');
										return;
									}

									ractive.list_backups();
									$window.close();
								});
							}
						}
					});
				});
			});
		});

		this.on('refresh', function () {
			ractive.list_backups();
		});

		ractive.list_backups();
	},
	data: function data() {
		return {
			columns: [null, 'Backup name', 'Status', 'Creation time', 'Size', 'Backup type', 'Expiration date', 'Backup ARN'],
			rows: null,
			err: null
			//newindex:
		};
	}
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	template: "\
		<div style='padding: 30px'>\
			<h3>Triggers</h3>\
		</div>\
	"
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

;

var DynamoMetrics = Ractive.extend({
	template: "<chart style='width: 100%;height: 216px;' series='{{metrics.table.read.series}}' debug='{{debug}}' />",
	load_graph_data: function load_graph_data() {
		var ractive = this;

		var period = 60;
		var interval = ractive.get('interval');
		switch (interval) {
			case '1':
				period = 60; // 60 per minute
				break;
			case '3':
				period = 300; // 20 per minute, 60 per total
				break;
			case '6':
				period = 300; // should be at 5 min ?
				break;
			case '12':
				period = 60 * 60; // one per minute, 12 per total
				break;
			case '24':
				period = 60 * 60; // one per minute, 24 per total
				break;
			case '72':
				period = 60 * 60; //
				break;
			case '168':
				period = 60 * 60; // shoul be daily
				break;
			case '336':
				period = 60 * 60; // should be daily
				break;
		}

		cloudwatch.getMetricStatistics({
			StartTime: new Date(new Date().getTime() - 1000 * 60 * 60 * interval),
			EndTime: new Date(),
			Namespace: 'AWS/DynamoDB',
			MetricName: ractive.get('metric'),
			Period: period,
			Statistics: ['Sum'],
			Dimensions: [{
				Name: 'TableName',
				Value: ractive.get('table')
			}]
		}, function (err, data) {
			if (err) return ractive.set('disabled', 'Failed');

			var series = [{ data: data.Datapoints.map(function (dp) {
					return ['', dp.Sum];
				}) }];
			ractive.set('metrics.table.read.series', series);
			console.log('series', series);
			console.log('series', ractive.get('series'));

			ractive.set('disabled');
		});
	},
	oninit: function oninit() {
		var ractive = this;

		ractive.load_graph_data();

		ractive.observe('interval', function () {
			ractive.load_graph_data();
		});
	},
	data: function data() {

		return {
			debug: true,
			metrics: {
				table: {
					read: {
						series: [{
							//name
							data: []
						}]
					}
				}
			}
		};
	}
});

exports.default = Ractive.extend({
	components: {
		DynamoMetrics: DynamoMetrics
	},
	template: '\n\t\t<div style=\'padding: 30px\'>\n\t\t\t<h3>\n\t\t\t\tMetrics\n\n\t\t\t\t<div style=\'float:right\'>\n\t\t\t\t\t<select class="input-select" value=\'{{interval}}\'>\n\t\t\t\t\t\t<option value=\'1\'>Last hour</option>\n\t\t\t\t\t\t<option value=\'3\'>Last 3 hours</option>\n\t\t\t\t\t\t<option value=\'6\'>Last 6 hours</option>\n\t\t\t\t\t\t<option value=\'12\'>Last 12 hours</option>\n\t\t\t\t\t\t<option value=\'24\'>Last 24 hours</option>\n\n\t\t\t\t\t\t<option value=\'72\'>Last 3 days</option>\n\t\t\t\t\t\t<option value=\'168\'>Last 1 week</option>\n\t\t\t\t\t\t<option value=\'336\'>Last 2 weeks</option>\n\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</h3>\n\t\t\t<hr>\n\n\t\t\t<h4>Capacity: table</h4>\n\t\t\t<hr>\n\n\t\t\t<div style=\'float: left;width: 30%;min-width: 300px;max-width: 380px;margin-right: 20px;\'>\n\t\t\t\t<div><b>Read capacity</b> Units/Minute</div>\n\t\t\t\t<DynamoMetrics table=\'{{ describeTable.TableName }}\' disabled=\'Loading...\' metric=\'ConsumedReadCapacityUnits\' interval=\'{{interval}}\' period=\'{{period}}\' color=\'#f7a35c\' namespace=\'AWS/DynamoDB\' />\n\t\t\t</div>\n\n\t\t\t<div style=\'float: left;width: 30%;min-width: 300px;max-width: 380px;margin-right: 20px;\'>\n\t\t\t\t<div><b>Throttled read requests</b> Count</div>\n\t\t\t\t<chart style=\'width: 100%;height: 216px;\' disabled=\'Not Tracked\' />\n\t\t\t</div>\n\n\t\t\t<div style=\'float: left;width: 30%;min-width: 300px;max-width: 380px;margin-right: 20px;\'>\n\t\t\t\t<div><b>Throttled read events</b> Count</div>\n\t\t\t\t<chart style=\'width: 100%;height: 216px;\' disabled=\'Not Tracked\' />\n\t\t\t</div>\n\n\t\t\t<div style=\'clear:both;padding: 20px;\'></div>\n\n\t\t\t<div style=\'float: left;width: 30%;min-width: 300px;max-width: 380px;margin-right: 20px;\'>\n\t\t\t\t<div><b>Write capacity</b> Units/Second</div>\n\t\t\t\t<DynamoMetrics table=\'{{ describeTable.TableName }}\' disabled=\'Loading...\' metric=\'ConsumedWriteCapacityUnits\' interval=\'{{interval}}\' period=\'{{period}}\' color=\'#f7a35c\' namespace=\'AWS/DynamoDB\' />\n\t\t\t</div>\n\n\t\t\t<div style=\'float: left;width: 30%;min-width: 300px;max-width: 380px;margin-right: 20px;\'>\n\t\t\t\t<div><b>Throttled write requests</b> Count</div>\n\t\t\t\t<chart style=\'width: 100%;height: 216px;\' disabled=\'Not Tracked\' />\n\t\t\t</div>\n\n\t\t\t<div style=\'float: left;width: 30%;min-width: 300px;max-width: 380px;margin-right: 20px;\'>\n\t\t\t\t<div><b>Throttled write events</b> Count</div>\n\t\t\t\t<chart style=\'width: 100%;height: 216px;\' disabled=\'Not Tracked\' />\n\t\t\t</div>\n\n\t\t</div>\n\t',
	oninit: function oninit() {
		var ractive = this;
		console.log('init metrics with', ractive.get());
	},
	data: function data() {
		return {
			interval: 1
		};
	}

});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _open_item2 = __webpack_require__(24);

var _open_item3 = _interopRequireDefault(_open_item2);

var _create_item2 = __webpack_require__(26);

var _create_item3 = _interopRequireDefault(_create_item2);

var _duplicate_item2 = __webpack_require__(27);

var _duplicate_item3 = _interopRequireDefault(_duplicate_item2);

var _tabledata = __webpack_require__(0);

var _tabledata2 = _interopRequireDefault(_tabledata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	components: {
		tabledata: _tabledata2.default
	},
	isolated: true,
	template: '\n\t<div class=\'tablebrowse\'>\n\t\t{{#if !describeTable }}\n\t\t\t<br>reading table schema...\n\t\t{{else}}\n\t\t<div class=\'tablequery\'>\n\t\t\t<table width=\'100%\' style=\'border-collapse: separate;border-spacing: 5px;\'>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<select class="input-select" value=\'{{ .type }}\'>\n\t\t\t\t\t\t\t<option value=\'scan\'>SCAN</option>\n\t\t\t\t\t\t\t<option value=\'query\'>QUERY</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td colspan=\'4\'>\n\t\t\t\t\t\t{{#if .type === \'scan\' }}\n\t\t\t\t\t\t<select class="input-select" value=\'{{ .scan.table }}\'>\n\t\t\t\t\t\t\t<option value=\'\'>\n\t\t\t\t\t\t\t\t[ Table ] {{ describeTable.TableName }}: {{ @this._hash_key_name() }} ( {{ @this._hash_key_type_name() }} )\n\t\t\t\t\t\t\t\t{{#if describeTable.KeySchema.length === 2}}\n\t\t\t\t\t\t\t\t\t, {{ @this._range_key_name() }} ( {{ @this._range_key_type_name() }} )\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</option>\n\n\t\t\t\t\t\t\t{{#describeTable.LocalSecondaryIndexes:j}}\n\t\t\t\t\t\t\t<option value=\'lsi:{{ .IndexName }}\'>\n\t\t\t\t\t\t\t\t[ LSI ] {{ .IndexName }}: {{ @this._lsi_hash_key_name( .IndexName ) }} ( {{ @this._lsi_hash_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{#if .KeySchema.length === 2}}\n\t\t\t\t\t\t\t\t\t, {{ @this._lsi_range_key_name( .IndexName ) }} (  {{ @this._lsi_range_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t{{/describeTable.LocalSecondaryIndexes}}\n\n\t\t\t\t\t\t\t{{#describeTable.GlobalSecondaryIndexes:j}}\n\t\t\t\t\t\t\t<option value=\'gsi:{{ .IndexName }}\'>\n\t\t\t\t\t\t\t\t[ GSI ] {{ .IndexName }}: {{ @this._gsi_hash_key_name( .IndexName ) }} ( {{ @this._gsi_hash_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{#if .KeySchema.length === 2}}\n\t\t\t\t\t\t\t\t\t, {{ @this._gsi_range_key_name( .IndexName ) }} (  {{ @this._gsi_range_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t{{/describeTable.GlobalSecondaryIndexes}}\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if .type === \'query\' }}\n\t\t\t\t\t\t<select class="input-select" value=\'{{ .query.table }}\'>\n\t\t\t\t\t\t\t<option value=\'\'>\n\t\t\t\t\t\t\t\t[ Table ] {{ describeTable.TableName }}: {{ @this._hash_key_name() }} ( {{ @this._hash_key_type_name() }} )\n\t\t\t\t\t\t\t\t{{#if describeTable.KeySchema.length === 2}}\n\t\t\t\t\t\t\t\t\t, {{ @this._range_key_name() }} ( {{ @this._range_key_type_name() }} )\n\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t</option>\n\n\t\t\t\t\t\t\t{{#describeTable.LocalSecondaryIndexes:j}}\n\t\t\t\t\t\t\t<option value=\'lsi:{{ .IndexName }}\'>\n\t\t\t\t\t\t\t\t[ LSI ] {{ .IndexName }}: {{ @this._lsi_hash_key_name( .IndexName ) }} ( {{ @this._lsi_hash_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{#if .KeySchema.length === 2}}\n\t\t\t\t\t\t\t\t\t, {{ @this._lsi_range_key_name( .IndexName ) }} (  {{ @this._lsi_range_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t{{/describeTable.LocalSecondaryIndexes}}\n\n\t\t\t\t\t\t\t{{#describeTable.GlobalSecondaryIndexes:j}}\n\t\t\t\t\t\t\t<option value=\'gsi:{{ .IndexName }}\'>\n\t\t\t\t\t\t\t\t[ GSI ] {{ .IndexName }}: {{ @this._gsi_hash_key_name( .IndexName ) }} ( {{ @this._gsi_hash_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{#if .KeySchema.length === 2}}\n\t\t\t\t\t\t\t\t\t, {{ @this._gsi_range_key_name( .IndexName ) }} (  {{ @this._gsi_range_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t{{/describeTable.GlobalSecondaryIndexes}}\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t{{#if .type === \'query\' }}\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Partition</td>\n\t\t\t\t\t{{#if .query.table === \'\'  }}\n\t\t\t\t\t\t<td>{{ _hash_key_name() }}</td>\n\t\t\t\t\t\t<td><select class="input-select"><option>{{ @this._hash_key_type_name() }}</option></select></td>\n\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{#describeTable.LocalSecondaryIndexes:j}}\n\t\t\t\t\t\t{{#if ~/.query.table === (\'lsi:\' +  .IndexName)  }}\n\t\t\t\t\t\t\t<td>{{ @this._lsi_hash_key_name( .IndexName ) }}</td>\n\t\t\t\t\t\t\t<td><select class="input-select"><option>{{ @this._lsi_hash_key_type_name( .IndexName ) }}</option></select></td>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/describeTable.LocalSecondaryIndexes}}\n\t\t\t\t\t{{#describeTable.GlobalSecondaryIndexes:j}}\n\t\t\t\t\t\t{{#if ~/.query.table === (\'gsi:\' +  .IndexName)  }}\n\t\t\t\t\t\t\t<td>{{ @this._gsi_hash_key_name( .IndexName ) }}</td>\n\t\t\t\t\t\t\t<td><select class="input-select"><option>{{ @this._gsi_hash_key_type_name( .IndexName ) }}</option></select></td>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/describeTable.GlobalSecondaryIndexes}}\n\t\t\t\t\t<td><select class="input-select"><option>=</option></select></td>\n\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{.query.partition.value}}\'></td>\n\t\t\t\t</tr>\n\t\t\t\t{{#if .query.table === \'\'  }}\n\t\t\t\t\t{{#if describeTable.KeySchema.length === 2}}\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Sort</td>\n\t\t\t\t\t\t<td>{{ @this._range_key_name() }}</td>\n\t\t\t\t\t\t<td><select class="input-select"><option>{{ @this._range_key_type_name( ) }}</option></select></td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select class="input-select" value=\'{{ ~/query.sort.op }}\'>\n\t\t\t\t\t\t\t\t<option value=\'eq\'>=</option>\n\t\t\t\t\t\t\t\t<option value=\'gt\'>&gt;</option>\n\t\t\t\t\t\t\t\t<option value=\'ge\'>&gt;=</option>\n\t\t\t\t\t\t\t\t<option value=\'lt\'>&lt;</option>\n\t\t\t\t\t\t\t\t<option value=\'le\'>&lt;=</option>\n\t\t\t\t\t\t\t\t<option value=\'between\'>between</option>\n\t\t\t\t\t\t\t\t{{#if _range_key_type()  === \'S\' }}\n\t\t\t\t\t\t\t\t\t<option value=\'begins_with\'>begins with</option>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/query.sort.value }}\'>\n\t\t\t\t\t\t\t{{#if ~/query.sort.op === \'between\' }}\n\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/query.sort.value2 }}\'>\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/if}}\n\t\t\t\t{{#describeTable.GlobalSecondaryIndexes:j}}\n\t\t\t\t\t{{#if ~/.query.table === (\'gsi:\' +  .IndexName)  }}\n\t\t\t\t\t\t{{#if .KeySchema.length === 2}}\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Sort</td>\n\t\t\t\t\t\t\t<td>{{ @this._gsi_range_key_name( .IndexName ) }}</td>\n\t\t\t\t\t\t\t<td><select class="input-select"><option>{{ @this._gsi_range_key_type_name( .IndexName ) }}</option></select></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<select class="input-select" value=\'{{ ~/query.sort.op }}\'>\n\t\t\t\t\t\t\t\t\t<option value=\'eq\'>=</option>\n\t\t\t\t\t\t\t\t\t<option value=\'gt\'>&gt;</option>\n\t\t\t\t\t\t\t\t\t<option value=\'ge\'>&gt;=</option>\n\t\t\t\t\t\t\t\t\t<option value=\'lt\'>&lt;</option>\n\t\t\t\t\t\t\t\t\t<option value=\'le\'>&lt;=</option>\n\t\t\t\t\t\t\t\t\t<option value=\'between\'>between</option>\n\t\t\t\t\t\t\t\t\t{{#if @this._gsi_range_key_type( .IndexName )  === \'S\' }}\n\t\t\t\t\t\t\t\t\t\t<option value=\'begins_with\'>begins with</option>\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/query.sort.value }}\'>\n\t\t\t\t\t\t\t\t{{#if ~/query.sort.op === \'between\' }}\n\t\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/query.sort.value2 }}\'>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/describeTable.GlobalSecondaryIndexes}}\n\t\t\t\t{{#describeTable.LocalSecondaryIndexes:j}}\n\t\t\t\t\t{{#if ~/.query.table === (\'lsi:\' +  .IndexName)  }}\n\t\t\t\t\t\t{{#if .KeySchema.length === 2}}\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Sort</td>\n\t\t\t\t\t\t\t<td>{{ @this._lsi_range_key_name( .IndexName ) }}</td>\n\t\t\t\t\t\t\t<td><select class="input-select"><option>{{ @this._lsi_range_key_type_name( .IndexName ) }}</option></select></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<select class="input-select" value=\'{{ ~/query.sort.op }}\'>\n\t\t\t\t\t\t\t\t\t<option value=\'eq\'>=</option>\n\t\t\t\t\t\t\t\t\t<option value=\'gt\'>&gt;</option>\n\t\t\t\t\t\t\t\t\t<option value=\'ge\'>&gt;=</option>\n\t\t\t\t\t\t\t\t\t<option value=\'lt\'>&lt;</option>\n\t\t\t\t\t\t\t\t\t<option value=\'le\'>&lt;=</option>\n\t\t\t\t\t\t\t\t\t<option value=\'between\'>between</option>\n\t\t\t\t\t\t\t\t\t{{#if @this._lsi_range_key_type( .IndexName )  === \'S\' }}\n\t\t\t\t\t\t\t\t\t\t<option value=\'begins_with\'>begins with</option>\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/query.sort.value }}\'>\n\t\t\t\t\t\t\t\t{{#if ~/query.sort.op === \'between\' }}\n\t\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/query.sort.value2 }}\'>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/describeTable.LocalSecondaryIndexes}}\n\n\t\t\t\t{{/if}}\n\t\t\t</table>\n\n\t\t</div>\n\t\t<div class=\'tabledatacontrols\'>\n\t\t\t<div class=\'btn btn-xs btn-default {{#if oop_running}}disabled{{/if}}\' on-click=\'run-oop\' style=\'padding-right: 10px;\'> <icon-play /> RUN</div>\n\t\t\t<div class=\'btn btn-xs btn-default {{#if prev_running}}disabled{{/if}} {{#if start_reached }}disabled{{/if}}\' on-click=\'prev\'> <icon-prev /> </div>\n\t\t\t<div class=\'btn btn-xs btn-default {{#if next_running}}disabled{{/if}} {{#if end_reached   }}disabled{{/if}}\' on-click=\'next\'> <icon-next /> </div>\n\n\t\t\t<div class=\'pull-right\'>\n\t\t\t\t<a class=\'btn btn-xs btn-default\' on-click=\'refresh\'> <icon-refresh /> </a>\n\t\t\t\t<div class=\'btn-group\'>\n\t\t\t\t\t<button class=\'btn btn-default btn-xs\' type=\'button\'>\n\t\t\t\t\t\t<icon-filter />\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\'button\' class=\'btn btn-xs btn-default dropdown-toggle dropdown-toggle-split\' on-click=\'@this.toggle("drowndownfilteropen")\'>\n\t\t\t\t\t\t<icon-caret-down />\n\t\t\t\t\t</button>\n\t\t\t\t\t<div class=\'dropdown-menu pull-right {{#if drowndownfilteropen}}show{{/if}}\' style=\'max-height: 250px;overflow-y: auto;\'>\n\t\t\t\t\t\t{{#display_columns}}\n\t\t\t\t\t\t\t<li><a> <input class="input-checkbox" type=checkbox checked=\'{{.show}}\' />  {{.name}}</a>\n\t\t\t\t\t\t{{/display_columns}}\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<a class=\'btn btn-xs btn-primary\' on-click=\'create-item\'  > Create Item </a>\n\t\t\t\t<a class=\'btn btn-xs btn-default {{#if selection_length === 1}}{{else}}disabled{{/if}}\' on-click=\'duplicate-item\'  > Duplicate </a>\n\t\t\t\t<a class=\'btn btn-xs btn-danger {{#if selection_length > 0}}{{else}}disabled{{/if}}\'  on-click=\'delete-selected\' > <icon-trash /> </a>\n\t\t\t</div>\n\t\t</div>\n\t\t<tabledata columns=\'{{columns}}\' rows=\'{{rows}}\' on-colclick=\'open-item\' style=\'top: 148px\'/>\n\t\t{{/if}}\n\t</div>\n\t\t',

	_hash_key_name: _utils2.default._hash_key_name,
	_hash_key_type: _utils2.default._hash_key_type,
	_hash_key_type_name: _utils2.default._hash_key_type_name,

	_range_key_name: _utils2.default._range_key_name,
	_range_key_type: _utils2.default._range_key_type,
	_range_key_type_name: _utils2.default._range_key_type_name,

	_gsi_hash_key_name: _utils2.default._gsi_hash_key_name,
	_gsi_hash_key_type: _utils2.default._gsi_hash_key_type,
	_gsi_hash_key_type_name: _utils2.default._gsi_hash_key_type_name,

	_gsi_range_key_name: _utils2.default._gsi_range_key_name,
	_gsi_range_key_type: _utils2.default._gsi_range_key_type,
	_gsi_range_key_type_name: _utils2.default._gsi_range_key_type_name,

	_lsi_hash_key_name: _utils2.default._lsi_hash_key_name,
	_lsi_hash_key_type: _utils2.default._lsi_hash_key_type,
	_lsi_hash_key_type_name: _utils2.default._lsi_hash_key_type_name,

	_lsi_range_key_name: _utils2.default._lsi_range_key_name,
	_lsi_range_key_type: _utils2.default._lsi_range_key_type,
	_lsi_range_key_type_name: _utils2.default._lsi_range_key_type_name,

	display_data: function display_data() {
		var ractive = this;

		var dbrows_json = this.get('dbrows_json');
		var dbrows_raw = this.get('dbrows_raw');

		var columns = [null];
		var rows = [];
		var display_columns = {};
		this.get('display_columns').map(function (dc) {
			if (dc.show) columns.push(dc.name);
		});
		var rows = [];

		dbrows_json.map(function (row, idx) {
			var thisrow = [];

			columns.map(function (column_name) {
				if (column_name === null) {
					// checkbox
					var key = {};
					key[ractive._hash_key_name()] = row[ractive._hash_key_name()];
					if (ractive._range_key_name()) key[ractive._range_key_name()] = row[ractive._range_key_name()];
					thisrow.push({ KEY: key });
				} else {
					if (row.hasOwnProperty(column_name)) {
						if (column_name === ractive._hash_key_name()) {
							thisrow.push({
								HASH: row[column_name],
								item: row,
								raw: dbrows_raw[idx]
							});
						} else if (typeof row[column_name] === 'string') thisrow.push({ 'S': row[column_name] });else if (typeof row[column_name] === 'number') thisrow.push({ 'N': row[column_name] });else if (typeof row[column_name] === 'boolean') {
							thisrow.push({ 'BOOL': row[column_name].toString() });
						} else if (row[column_name] === null) {
							thisrow.push({ 'NULL': "NULL" });
						} else if (_typeof(row[column_name]) === 'object' && Array.isArray(row[column_name])) {
							thisrow.push({ 'L': true });
						} else if (_typeof(row[column_name]) === 'object' && !Array.isArray(row[column_name])) {
							thisrow.push({ 'M': true });
						} else thisrow.push({ 'U': true });
					} else {
						thisrow.push({ 'U': true });
					}
				}
			});
			rows.push(thisrow);
		});

		this.set('columns', columns);
		this.set('rows', rows);
	},

	refresh_data: function refresh_data(LastEvaluatedKey) {

		var ractive = this;
		this.set('columns', []);
		this.set('rows', []);

		var dbrows_json = null;
		var dbrows_raw = null;
		var hash_key = null;
		var range_key = null;
		var fields = {};
		var columns = [null];

		async.waterfall([

		// describeTable is set by parent

		function (cb) {
			if (ractive.get('type') !== 'scan') return cb();

			fields = {};

			hash_key = ractive._hash_key_name();
			range_key = ractive._range_key_name();

			columns.push(hash_key);
			ractive.add_display_column(hash_key, true);
			fields[hash_key] = 1;
			if (range_key) {
				columns.push(range_key);
				ractive.add_display_column(range_key, true);
				fields[range_key] = 1;
			}

			var scan_index = ractive.get('scan.table');
			if (scan_index === '') {} else {
				var scan_type = scan_index.split(':')[0];
				scan_index = scan_index.split(':')[1];
				if (scan_type === 'gsi') {
					var index = ractive.get('describeTable.GlobalSecondaryIndexes').filter(function (i) {
						return i.IndexName === scan_index;
					})[0];

					var index_hash_key = (index.KeySchema.filter(function (k) {
						return k.KeyType === 'HASH';
					})[0] || {}).AttributeName;
					var index_range_key = (index.KeySchema.filter(function (k) {
						return k.KeyType === 'RANGE';
					})[0] || {}).AttributeName;

					columns.push(index_hash_key);
					ractive.add_display_column(index_hash_key, true);
					fields[index_hash_key] = 1;

					if (index_range_key) {
						columns.push(index_range_key);
						ractive.add_display_column(index_range_key, true);
						fields[index_range_key] = 1;
					}
				}
			}

			var ddb = DynamoDB.table(ractive.get('table.name'));
			if (LastEvaluatedKey) ddb.resume(LastEvaluatedKey);
			ddb.limit(100);
			if (scan_index) ddb = ddb.index(scan_index);

			ddb.scan(function (err, data, raw) {
				if (err) return alert("scan error");

				dbrows_json = data;
				dbrows_raw = raw.Items;

				ractive.push('scan.LastEvaluatedKey', this.LastEvaluatedKey);
				ractive.set('end_reached', this.LastEvaluatedKey ? false : true);

				cb();
			});
		}, function (cb) {
			if (ractive.get('type') !== 'query') return cb();

			fields = {};
			var query_partition_name = '';
			var query_partition_type = 'S';
			var query_sort_name = '';
			var query_sort_type = 'S';

			hash_key = ractive._hash_key_name();
			range_key = ractive._range_key_name();

			columns.push(hash_key);
			ractive.add_display_column(hash_key, true);
			fields[hash_key] = 1;
			if (range_key) {
				columns.push(range_key);
				ractive.add_display_column(range_key, true);
				fields[range_key] = 1;
			}

			var query_index = ractive.get('query.table');
			if (query_index === '') {
				query_partition_name = hash_key;
				query_partition_type = ractive._hash_key_type();
				if (range_key) {
					query_sort_name = ractive._range_key_name();
					query_sort_type = ractive._range_key_type();
				}
			} else {
				var query_type = query_index.split(':')[0];
				query_index = query_index.split(':')[1];
				if (query_type === 'gsi') {

					var index = ractive.get('describeTable.GlobalSecondaryIndexes').filter(function (i) {
						return i.IndexName === query_index;
					})[0];
					var index_hash_key = ractive._gsi_hash_key_name(index.IndexName);
					var index_range_key = ractive._gsi_range_key_name(index.IndexName);
					query_partition_name = index_hash_key;
					query_partition_type = ractive._gsi_hash_key_type(index.IndexName);

					if (index_range_key) {
						query_sort_name = ractive._gsi_range_key_name(index.IndexName);
						query_sort_type = ractive._gsi_range_key_type(index.IndexName);
					}

					columns.push(index_hash_key);
					ractive.add_display_column(index_hash_key, true);
					fields[index_hash_key] = 1;

					if (index_range_key) {
						columns.push(index_range_key);
						ractive.add_display_column(index_range_key, true);
						fields[index_range_key] = 1;
					}
				}
				if (query_type === 'lsi') {

					var index = ractive.get('describeTable.LocalSecondaryIndexes').filter(function (i) {
						return i.IndexName === query_index;
					})[0];
					var index_hash_key = ractive._lsi_hash_key_name(index.IndexName);
					var index_range_key = ractive._lsi_range_key_name(index.IndexName);
					query_partition_name = index_hash_key;
					query_partition_type = ractive._lsi_hash_key_type(index.IndexName);

					if (index_range_key) {
						query_sort_name = ractive._lsi_range_key_name(index.IndexName);
						query_sort_type = ractive._lsi_range_key_type(index.IndexName);
					}

					columns.push(index_hash_key);
					ractive.add_display_column(index_hash_key, true);
					fields[index_hash_key] = 1;

					if (index_range_key) {
						columns.push(index_range_key);
						ractive.add_display_column(index_range_key, true);
						fields[index_range_key] = 1;
					}
				}
			}

			var ddb = DynamoDB.table(ractive.get('table.name'));
			if (LastEvaluatedKey) ddb.resume(LastEvaluatedKey);
			ddb.limit(100);
			if (query_index) ddb = ddb.index(query_index);

			if (query_partition_type === 'S') ddb = ddb.where(query_partition_name).eq(ractive.get('query.partition.value').toString());

			if (query_partition_type === 'N') ddb = ddb.where(query_partition_name).eq(parseFloat(ractive.get('query.partition.value')));

			if (ractive.get('query.sort.value').length) {
				// apply sort
				console.log("sort", query_sort_name, ractive.get('query.sort.op'), query_sort_type);
				if (query_sort_type === 'S') ddb = ddb.where(query_sort_name)[ractive.get('query.sort.op')](ractive.get('query.sort.value').toString(), ractive.get('query.sort.value2').toString());

				if (query_sort_type === 'N') ddb = ddb.where(query_sort_name)[ractive.get('query.sort.op')](parseFloat(ractive.get('query.sort.value')), parseFloat(ractive.get('query.sort.value2')));
			}

			console.log("query_partition_name=", query_partition_name);

			dbrows_json = [];
			ddb.query(function (err, data, raw) {
				if (err) {
					alert("query error");
					return cb(err);
				}
				console.log("query LastEvaluatedKey=", this.LastEvaluatedKey);
				dbrows_json = data;
				dbrows_raw = raw.Items;

				ractive.push('scan.LastEvaluatedKey', this.LastEvaluatedKey);

				ractive.set('end_reached', this.LastEvaluatedKey ? false : true);

				cb();
			});
		},

		// save raw data
		function (cb) {
			ractive.set('dbrows_json', dbrows_json);
			ractive.set('dbrows_raw', dbrows_raw);
			cb();
		}], function (err) {
			ractive.set('oop_running', false);
			ractive.set('prev_running', false);
			ractive.set('next_running', false);

			if (err) ractive.set('err', err.errorMessage);

			if (ractive.get('autocolumns')) {
				dbrows_json.map(function (row) {
					Object.keys(row).map(function (column_name) {
						if (!fields.hasOwnProperty(column_name)) {
							if (columns.length > 10) {
								ractive.add_display_column(column_name, false);
							} else {
								ractive.add_display_column(column_name, true);
								fields[column_name] = 1;
								columns.push(column_name);
							}
						}
					});
				});
				ractive.set('autocolumns', false);
			}
			ractive.display_data();
			/*
   var rows = []
   
   			dbrows_.map(function(row) {
   	var thisrow = []
   		columns.map(function(column_name) {
   		if (column_name === null) {
   			// checkbox
   			var key = {}
   			key[hash_key] = row[hash_key]
   			if (range_key) key[range_key] = row[range_key]
   			thisrow.push({KEY: key})
   		} else {
   			if (row.hasOwnProperty(column_name)) {
   				if (typeof row[column_name] === 'string')
   					thisrow.push({'S':row[column_name]})
   				else if (typeof row[column_name] === 'number')
   					thisrow.push({'N':row[column_name]})
   				else if (typeof row[column_name] === 'boolean') {
   					thisrow.push({'BOOL':row[column_name].toString()})
   				} else if (row[column_name] === null) {
   					thisrow.push({'NULL': "NULL"})
   				} else if ((typeof row[column_name] === 'object') &&  Array.isArray(row[column_name]) ) {
   					thisrow.push({'L': true })
   				} else if ((typeof row[column_name] === 'object') && !Array.isArray(row[column_name]) ) {
   					thisrow.push({'M': true })
   				} else
   					thisrow.push({'U': true })
   			} else {
   				thisrow.push({'U': true })
   			}
   		}
   	})
   	rows.push(thisrow)
   })
   ractive.set('columns', columns )
   ractive.set('rows', rows )
   */
		});
	},
	add_display_column: function add_display_column(cname, show) {
		var display_columns = this.get('display_columns');
		if (display_columns.filter(function (dc) {
			return dc.name === cname;
		}).length) return;

		display_columns.push({
			name: cname,
			show: show
		});
		this.set('display_columns', display_columns);
	},
	data: function data() {
		return {
			oop_running: false,
			prev_running: false,
			next_running: false,
			start_reached: true,
			end_reached: false,

			type: 'scan',
			display_columns: [
				// { name, type, show: true|false|null}
			],
			autocolumns: true,
			scan: {
				table: '',
				LastEvaluatedKey: [null]
			},
			query: {
				table: '',
				sort: {
					op: 'eq',
					value: '',
					value2: ''
				}
			}
		};
	},

	_duplicate_item: _duplicate_item3.default,

	on: {
		'open-item': _open_item3.default,
		'create-item': _create_item3.default,
		'duplicate-item': function duplicateItem() {

			var to_duplicate = this.findComponent('tabledata').get('rows').filter(function (r) {
				return r[0].selected;
			}).map(function (r) {
				return r[1];
			}); // r[0] = checkbox, r[1]=hash+raw

			if (!to_duplicate.length) return alert('No Items Selected');

			this._duplicate_item(to_duplicate[0].raw);
		},
		prev: function prev() {

			if (this.get('prev_running')) return;

			this.set('prev_running', true);

			if (this.get('scan.LastEvaluatedKey').length < 3) return;

			var next = this.pop('scan.LastEvaluatedKey');

			var current = this.pop('scan.LastEvaluatedKey');

			var LastEvaluatedKey = this.get('scan.LastEvaluatedKey').slice(-1)[0];

			this.refresh_data(LastEvaluatedKey);
		},
		next: function next() {

			if (this.get('next_running')) return;

			if (this.get('end_reached')) return;

			this.set('next_running', true);
			var LastEvaluatedKey = this.get('scan.LastEvaluatedKey').slice(-1)[0];

			this.refresh_data(LastEvaluatedKey);
		}
	},
	oninit: function oninit() {
		var ractive = this;

		//this.on('open-item', )

		this.on('run-oop', function () {
			if (this.get('oop_running')) return;

			this.set('oop_running', true);

			// reset scan.LastEvaluatedKey
			ractive.set('scan.LastEvaluatedKey', [null]);

			this.refresh_data(null);
		});
		this.on('prev');

		ractive.observe('scan.LastEvaluatedKey', function (n, o, keypath) {
			if (n.length > 2) ractive.set('start_reached', false);else ractive.set('start_reached', true);
		});
		ractive.observe('display_columns.*.show', function (n, o, keypath) {
			if (o === undefined) return;

			if (o == n) return;

			var col = ractive.get(keypath.slice(0, -5)).name;
			console.log(col, n, o);
			ractive.display_data();
		});

		ractive.on('tabledata.selectrow', function (context) {
			var keypath = context.resolve();
			ractive.set(keypath + '.0.selected', !ractive.get(keypath + '.0.selected'));

			ractive.set('selection_length', ractive.get('rows').filter(function (r) {
				return r[0].selected === true;
			}).length);
		});

		ractive.on('delete-selected', function (context) {
			//console.log(ractive.findComponent('tabledata').get('rows'))
			var to_delete = ractive.findComponent('tabledata').get('rows').map(function (r) {
				return r[0];
			}).filter(function (r) {
				return r.selected;
			}).map(function (r) {
				return r.KEY;
			});

			if (!to_delete.length) return alert('No Items Selected');

			var to_remove_from_list = [];

			async.each(to_delete, function (item, cb) {

				var Key = {};
				Object.keys(item).map(function (k) {
					if (typeof item[k] === "string") Key[k] = { "S": item[k] };

					if (typeof item[k] === "number") Key[k] = { "N": item[k].toString() };
				});

				var payload = {
					Key: Key,
					TableName: ractive.get('table.name')
				};

				DynamoDB.client.deleteItem(payload, function (err, data) {

					if (err) {
						alert("delete failed " + err.message);
						return cb(err);
					} else to_remove_from_list.push(item);

					cb();
				});
			}, function (err) {
				if (err) alert('some items failed to delete');

				ractive.set('rows', ractive.get('rows').filter(function (r) {

					var is_in_deleted_list = false;
					to_remove_from_list.map(function (deleted_item) {
						var isequal = true;
						Object.keys(deleted_item).map(function (k) {
							if (deleted_item[k] !== r[0].KEY[k]) isequal = false;
						});

						if (isequal) is_in_deleted_list = true;
					});
					return !is_in_deleted_list;
				}));
			});
		});

		ractive.refresh_data(null);
	}
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (e, col, item, rawitem) {
	var ractive = this;
	var describeTable = this.get('describeTable');
	var hash = this._hash_key_name();
	var range = this._range_key_name();
	//console.log("open-item", "table=",describeTable.TableName, "hash=",hash, "range=", range, "item=", item, rawitem  )
	ractive.root.findComponent('WindowContainer').newWindow(function ($window) {
		$window.set({
			title: 'Edit Item',
			'geometry.width': window.innerWidth * .6,
			'geometry.height': window.innerHeight * .6,
			'geometry.left': window.innerWidth * .2,
			'geometry.top': window.innerHeight * .2
		});

		var vid = "window" + (Math.random() * 0xFFFFFF << 0).toString(16);
		$window.content('<div id="' + vid + '"/>').then(function () {
			var r = new Ractive({
				components: {
					itemedit: _edit2.default
				},
				el: vid,
				template: '\n\t\t\t\t\t<itemedit\n\t\t\t\t\t\ttheme={{theme}}\n\t\t\t\t\t\tdescribeTable={{describeTable}}\n\t\t\t\t\t\titem={{item}}\n\t\t\t\t\t\trawitem={{rawitem}}\n\t\t\t\t\t\twindow={{window}}\n\t\t\t\t\t/>\n\t\t\t\t',
				data: {
					describeTable: describeTable,
					//item: item,
					rawitem: rawitem,
					window: $window,
					theme: $window.parent.get('theme')
				}
			});
			$window.set({
				_editor: r
			});
		});
	});
};

var _edit = __webpack_require__(25);

var _edit2 = _interopRequireDefault(_edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _ractiveDynamodbJsonEditor = __webpack_require__(3);

var _ractiveDynamodbJsonEditor2 = _interopRequireDefault(_ractiveDynamodbJsonEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uint8array_equals = function uint8array_equals(a, b) {

	if (a.length !== b.length) return false;

	for (var i = a.length; -1 < i; i -= 1) {
		if (a[i] !== b[i]) return false;
	}
	return true;
};

//var jsoneditor = require('@awspilot/ractive-dynamodb-json-editor');
exports.default = Ractive.extend({
	isolated: true,
	components: {
		jsoneditor: _ractiveDynamodbJsonEditor2.default
	},
	template: '\n\t\t<jsoneditor\n\t\t\ttheme={{theme}}\n\t\t\titem={{itemtoedit}}\n\t\t\tnavigationBar={{false}}\n\t\t\tstyle="position: absolute;top: -1px;left: -1px;right: -1px;bottom: 50px;width: auto;height: auto;"\n\t\t\tmenu-style=""\n\t\t/>\n\t\t<div style="position: absolute;left: 10px;right:10px;bottom:10px;height: 30px;box-sizing: border-box;">\n\t\t\t<span style="color: red;line-height: 30px;">{{errorMessage}}</span>\n\t\t\t<a class="btn btn-sm btn-primary pull-right" style="color: #fff;background-color: #337ab7;border-color: #2e6da4;float: right;padding: 5px 10px; font-size: 12px; line-height: 1.5;border-radius: 3px;font-family: sans-serif;" on-click="update-item">Save</a>\n\t\t</div>\n\t\t',
	data: function data() {
		return {
			itemtoedit: {}
		};
	},

	_hash_key_name: _utils2.default._hash_key_name,
	_hash_key_type: _utils2.default._hash_key_type,
	_hash_key_type_name: _utils2.default._hash_key_type_name,

	_range_key_name: _utils2.default._range_key_name,
	_range_key_type: _utils2.default._range_key_type,
	_range_key_type_name: _utils2.default._range_key_type_name,

	// _hash_key_name: function() {
	// 	return (this.get('describeTable').KeySchema.filter(function(k) { return k.KeyType === 'HASH'})[0] || {}).AttributeName
	// },
	// _range_key_name: function() {
	// 	return (this.get('describeTable').KeySchema.filter(function(k) { return k.KeyType === 'RANGE'})[0] || {}).AttributeName;
	// },
	oninit: function oninit() {
		var ractive = this;

		//this.set({itemtoedit: Object.assign({}, this.get('rawitem'))  })

		//this.set({itemtoedit: cloneDeep(this.get('rawitem'))  })
		this.set({ itemtoedit: _utils2.default._clone_deep(this.get('rawitem')) });

		this.observe('itemtoedit', function (n, o, kp) {
			this.set({ errorMessage: '' });
		});

		//var rawitem = this.get('rawitem')
		//this.set({itemtoedit: { ...rawitem }  })

		//var debug = this.get('itemtoedit');

		this.on('update-item', function () {
			//console.log("table=","HASH=", this._hash_key_name(), " RANGE=", this._range_key_name() )

			var originalitem = this.get('rawitem');
			//var updateditem = cloneDeep(this.get('itemtoedit'))
			var updateditem = _utils2.default._clone_deep(this.get('itemtoedit'));

			//console.log("originalitem", originalitem.binary, typeof originalitem.binary )


			var updateItemCall = {
				TableName: this.get('describeTable.TableName'),
				Key: {},
				AttributeUpdates: {}
			};

			if (!updateditem.hasOwnProperty(this._hash_key_name())) return alert('Missing PARTITION_KEY ' + this._hash_key_name());

			if (this._range_key_name() && !updateditem.hasOwnProperty(this._range_key_name())) return alert('Missing SORT_KEY ' + this._range_key_name());

			if (this._hash_key_type() === "B") {
				if (!uint8array_equals(updateditem[this._hash_key_name()].B, originalitem[this._hash_key_name()].B)) {
					return alert('PARTITION_KEY(' + this._hash_key_name() + ') changed value. Operation not permitted');
				}
			} else {
				if (JSON.stringify(updateditem[this._hash_key_name()]) !== JSON.stringify(originalitem[this._hash_key_name()])) {

					return alert('PARTITION_KEY(' + this._hash_key_name() + ') changed value. Operation not permitted');
				}
			}

			if (this._range_key_name() && JSON.stringify(updateditem[this._range_key_name()]) !== JSON.stringify(originalitem[this._range_key_name()])) return alert('SORT_KEY(' + this._range_key_name() + ') changed value. Operation not permitted');

			Object.keys(originalitem).map(function (k) {
				if (!updateditem.hasOwnProperty(k)) updateItemCall.AttributeUpdates[k] = {
					Action: 'DELETE'
				};
			});

			updateItemCall.Key[this._hash_key_name()] = updateditem[this._hash_key_name()];
			delete updateditem[this._hash_key_name()];

			if (this._range_key_name()) {
				updateItemCall.Key[this._range_key_name()] = updateditem[this._range_key_name()];
				delete updateditem[this._range_key_name()];
			}

			Object.keys(updateditem).map(function (k) {
				updateItemCall.AttributeUpdates[k] = {
					Action: 'PUT', //
					Value: updateditem[k]
				};
			});

			//console.log("should update item", this.get('item') )
			console.log("updateItem", updateItemCall);
			DynamoDB.client.updateItem(updateItemCall, function (err, data) {
				if (err) return ractive.set('errorMessage', err.message);

				ractive.get('window').close();
				//ractive.parent.fire('close-window')
			});
		});
	}

});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var ractive = this;

	var describeTable = this.get('describeTable');

	var rawitem = {};

	/* add partition */
	var htype = this._hash_key_type();

	var to_add = null;
	if (htype === "S") to_add = { S: "" };

	if (htype === "N") to_add = { N: "" };

	if (htype === "B") to_add = { B: Uint8Array.from(atob("InsertBase64Here"), function (c) {
			return c.charCodeAt(0);
		}) };

	rawitem[this._hash_key_name()] = to_add;

	/* add sort */
	if (this._range_key_name()) {
		var rtype = this._range_key_type();
		var to_add = null;
		if (rtype === "S") to_add = { S: "" };

		if (rtype === "N") to_add = { N: "" };

		if (rtype === "B") to_add = { B: Uint8Array.from(atob("InsertBase64Here"), function (c) {
				return c.charCodeAt(0);
			}) };

		rawitem[this._range_key_name()] = to_add;
	}

	//console.log(rawitem)


	ractive.root.findComponent('WindowContainer').newWindow(function ($window) {
		$window.set({
			title: 'Create Item',
			'geometry.width': window.innerWidth * .6,
			'geometry.height': window.innerHeight * .6,
			'geometry.left': window.innerWidth * .2,
			'geometry.top': window.innerHeight * .2
		});

		var vid = "window" + (Math.random() * 0xFFFFFF << 0).toString(16);
		$window.content('<div id="' + vid + '"/>').then(function () {
			var r = new Ractive({
				components: {
					itemadd: _add2.default
				},
				el: vid,
				template: '\n\t\t\t\t\t<itemadd\n\t\t\t\t\t\ttheme={{theme}}\n\t\t\t\t\t\tdescribeTable={{describeTable}}\n\t\t\t\t\t\titem={{item}}\n\t\t\t\t\t\trawitem={{rawitem}}\n\t\t\t\t\t\twindow={{window}}\n\t\t\t\t\t/>\n\t\t\t\t',
				data: {
					describeTable: describeTable,
					// item: {
					//
					// },
					rawitem: rawitem,
					window: $window,
					theme: $window.parent.get('theme')
				}
			});

			$window.set({
				_editor: r
			});
		});
	});
};

var _add = __webpack_require__(4);

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (raw) {
	var ractive = this;

	var describeTable = this.get('describeTable');

	var rawitem = raw;

	ractive.root.findComponent('WindowContainer').newWindow(function ($window) {
		$window.set({
			title: 'Duplicate Item',
			'geometry.width': window.innerWidth * .6,
			'geometry.height': window.innerHeight * .6,
			'geometry.left': window.innerWidth * .2,
			'geometry.top': window.innerHeight * .2
		});

		var vid = "window" + (Math.random() * 0xFFFFFF << 0).toString(16);
		$window.content('<div id="' + vid + '"/>').then(function () {
			var r = new Ractive({
				components: {
					itemadd: _add2.default
				},
				el: vid,
				template: '\n\t\t\t\t\t<itemadd\n\t\t\t\t\t\ttheme={{theme}}\n\t\t\t\t\t\tdescribeTable={{describeTable}}\n\t\t\t\t\t\titem={{item}}\n\t\t\t\t\t\trawitem={{rawitem}}\n\t\t\t\t\t\twindow={{window}}\n\t\t\t\t\t/>',
				data: {
					describeTable: describeTable,
					// item: {
					//
					// },
					rawitem: rawitem,
					window: $window,
					theme: $window.parent.get('theme')
				}
			});
			$window.set({
				_editor: r
				//_window:
			});
		});
	});
};

var _add = __webpack_require__(4);

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(5));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE__30__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var pna = __webpack_require__(7);
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = __webpack_require__(4);
util.inherits = __webpack_require__(5);
/*</replacement>*/

var Readable = __webpack_require__(13);
var Writable = __webpack_require__(11);

util.inherits(Duplex, Readable);

{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  pna.nextTick(cb, err);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(12);

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._h = 0;
  this._i = 0;
  this._j = null;
  this._k = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._l = null;
Promise._m = null;
Promise._n = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._i === 3) {
    self = self._j;
  }
  if (Promise._l) {
    Promise._l(self);
  }
  if (self._i === 0) {
    if (self._h === 0) {
      self._h = 1;
      self._k = deferred;
      return;
    }
    if (self._h === 1) {
      self._h = 2;
      self._k = [self._k, deferred];
      return;
    }
    self._k.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._i === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._i === 1) {
        resolve(deferred.promise, self._j);
      } else {
        reject(deferred.promise, self._j);
      }
      return;
    }
    var ret = tryCallOne(cb, self._j);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._i = 3;
      self._j = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._i = 1;
  self._j = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._i = 2;
  self._j = newValue;
  if (Promise._m) {
    Promise._m(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._h === 1) {
    handle(self, self._k);
    self._k = null;
  }
  if (self._h === 2) {
    for (var i = 0; i < self._k.length; i++) {
      handle(self, self._k[i]);
    }
    self._k = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

!function(r,e){ true?module.exports=e():undefined}(window,function(){return(n={},o.m=t=[function(r,e,t){"use strict";t.r(e);function i(){}i.config={stringset_parse_as_set:!1,numberset_parse_as_set:!1,binaryset_parse_as_set:!1,empty_string_replace_as:""};function s(r){var e=[];return r.forEach(function(r){e.push(r)}),e}i.Raw=function(r){this.data=r},i.anormalizeList=function(r){var e=[];for(var t in r)e.push(i.anormalizeItem(r[t]));return e},i.anormalizeItem=function(r){var e={};for(var t in r)r.hasOwnProperty(t)&&(e[t]=i.stringify(r[t]));return e},i.stringify=function(r){if("boolean"==typeof r)return{BOOL:r};if("number"==typeof r)return{N:r.toString()};if("string"==typeof r){if(0!==r.length)return{S:r};if(""===i.config.empty_string_replace_as)return{S:r};if(void 0===i.config.empty_string_replace_as)return;return i.stringify(i.config.empty_string_replace_as)}if(null===r)return{NULL:!0};if(r instanceof Uint8Array)return{B:r};if("object"==typeof r&&r instanceof i.Raw)return r.data;if("object"==typeof r){if(Array.isArray(r)){var e={L:[]};for(var t in r)r.hasOwnProperty(t)&&(e.L[t]=i.stringify(r[t]));return e}if(r instanceof Set){var n=!0,o=!0;return 0===r.size&&(o=n=!1),r.forEach(function(r){"string"==typeof r?o=!1:"number"==typeof r?n=!1:o=n=!1}),n?{SS:s(r)}:o?{NS:s(r).map(function(r){return r.toString()})}:{L:s(r).map(function(r){return i.stringify(r)})}}e={M:{}};for(var t in r)if(r.hasOwnProperty(t)){var a=i.stringify(r[t]);void 0!==a&&(e.M[t]=a)}return e}},i.anormalizeType=function(r){return"boolean"==typeof r?"BOOL":"number"==typeof r?"N":"string"==typeof r?"S":Array.isArray(r)?"L":null===r?"NULL":void 0},i.parse=function(r){if("object"!=typeof r)throw"expecting object";if(1!==Object.keys(r).length)throw"expecting only one property in object: S, N, BOOL, NULL, L, M, etc ";if(r.hasOwnProperty("S"))return r.S===i.config.empty_string_replace_as?"":r.S;if(r.hasOwnProperty("N"))return parseFloat(r.N);if(r.hasOwnProperty("BOOL"))return r.BOOL;if(r.hasOwnProperty("NULL"))return null;if(r.hasOwnProperty("B"))return r.B instanceof Uint8Array?r.B:Uint8Array.from(btoa(r.B),function(r){return r.charCodeAt(0)});if(r.hasOwnProperty("SS"))return i.config.stringset_parse_as_set?new Set(r.SS):r.SS;if(r.hasOwnProperty("NS"))return i.config.numberset_parse_as_set?new Set(r.NS.map(function(r){return parseFloat(r)})):r.NS.map(function(r){return parseFloat(r)});if(r.hasOwnProperty("BS"))return i.config.binaryset_parse_as_set?new Set(r.BS.map(function(r){return r})):r.BS.map(function(r){return r});if(r.hasOwnProperty("L")){var e=[];for(var t in r.L)r.L.hasOwnProperty(t)&&(e[t]=i.parse(r.L[t]));return e}if(r.hasOwnProperty("M")){e={};for(var t in r.M)r.M.hasOwnProperty(t)&&(e[t]=i.parse(r.M[t]));return e}},i.normalizeItem=function(r){var t={};for(var n in r)if(r.hasOwnProperty(n)){if(r[n].hasOwnProperty("S")&&(t[n]=r[n].S),r[n].hasOwnProperty("N")&&(t[n]=+r[n].N),r[n].hasOwnProperty("BOOL")&&(t[n]=r[n].BOOL),r[n].hasOwnProperty("NULL")&&(t[n]=null),r[n].hasOwnProperty("B")&&(t[n]=r[n].B),r[n].hasOwnProperty("SS")&&(t[n]=r[n].SS),r[n].hasOwnProperty("NS")&&(t[n]=[],r[n].NS.forEach(function(r,e){t[n].push(parseFloat(r))})),r[n].hasOwnProperty("L"))for(var e in t[n]=[],r[n].L)r[n].L.hasOwnProperty(e)&&(t[n][e]=i.normalizeItem({key:r[n].L[e]}).key);if(r[n].hasOwnProperty("M"))for(var e in t[n]={},r[n].M)r[n].M.hasOwnProperty(e)&&(t[n][e]=i.normalizeItem({key:r[n].M[e]}).key)}return t},i.buildExpected=function(r){var e={};for(var t in r)if(r.hasOwnProperty(t)){"object"==typeof r[t]&&r[t]instanceof i.Raw?e[t]=r[t].data:r[t].hasOwnProperty("value2")&&void 0!==r[t].value2?e[t]={ComparisonOperator:r[t].operator,AttributeValueList:[i.stringify(r[t].value),i.stringify(r[t].value2)]}:e[t]={ComparisonOperator:r[t].operator,AttributeValueList:[i.stringify(r[t].value)]}}return e},i.expression_name_split=function(r){for(var e=[],t="",n=!1,o=0;o<r.length;o++)n?'"'==r[o]?(n=!1,e.push(t),t=""):t+=r[o]:'"'==r[o]?n=!0:"."==r[o]?(e.push(t),t=""):t+=r[o];return e.push(t),e.filter(function(r){return""!==r.trim()})},i.clone=function(r){for(var e,t,n=Object({}),o=0;o<arguments.length;o++){for(var a in e=Object(arguments[o]))Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);if(Object.getOwnPropertySymbols){t=Object.getOwnPropertySymbols(e);for(var i=0;i<t.length;i++)Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}}return n},i.toSQLJSON=function(e,r){if(r)return"["+e.map(function(r){return r.hasOwnProperty("S")?JSON.stringify(r.S):r.hasOwnProperty("N")?r.N:r.hasOwnProperty("B")?"Buffer.from('"+r.B.toString("base64")+"', 'base64')":r.hasOwnProperty("BOOL")?r.BOOL:r.hasOwnProperty("NULL")?"null":r.hasOwnProperty("SS")?"new StringSet("+JSON.stringify(r.SS)+")":r.hasOwnProperty("NS")?"new NumberSet("+JSON.stringify(r.NS.map(function(r){return parseFloat(r)}))+")":r.hasOwnProperty("BS")?"new BinarySet(["+r.BS.map(function(r){return"Buffer.from('"+r.toString("base64")+"', 'base64')"}).join(",")+"])":r.hasOwnProperty("M")?i.toSQLJSON(r.M):r.hasOwnProperty("L")?i.toSQLJSON(r.L,!0):JSON.stringify(r)}).join(",")+"]";var t=[];return Object.keys(e).map(function(r){e[r].hasOwnProperty("S")&&t.push("'"+r+"':"+JSON.stringify(e[r].S)),e[r].hasOwnProperty("N")&&t.push("'"+r+"':"+e[r].N),e[r].hasOwnProperty("B")&&t.push("'"+r+"':Buffer.from('"+e[r].B.toString("base64")+"', 'base64')"),e[r].hasOwnProperty("BOOL")&&t.push("'"+r+"':"+e[r].BOOL),e[r].hasOwnProperty("NULL")&&t.push("'"+r+"':null"),e[r].hasOwnProperty("SS")&&t.push("'"+r+"':new StringSet("+JSON.stringify(e[r].SS)+")"),e[r].hasOwnProperty("NS")&&t.push("'"+r+"':new NumberSet("+JSON.stringify(e[r].NS.map(function(r){return parseFloat(r)}))+")"),e[r].hasOwnProperty("BS")&&t.push("'"+r+"':new BinarySet(["+e[r].BS.map(function(r){return"Buffer.from('"+r.toString("base64")+"', 'base64')"}).join(",")+"])"),e[r].hasOwnProperty("M")&&t.push("'"+r+"':"+i.toSQLJSON(e[r].M)),e[r].hasOwnProperty("L")&&t.push("'"+r+"':"+i.toSQLJSON(e[r].L,!0))}),"{"+t.join(",")+"}"},i.anormalizeValue=i.stringify,i.normalizeValue=i.parse,e.default=i}],o.c=n,o.d=function(r,e,t){o.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},o.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)o.d(t,n,function(r){return e[r]}.bind(null,n));return t},o.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(e,"a",e),e},o.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},o.p="",o(o.s=0)).default;function o(r){if(n[r])return n[r].exports;var e=n[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var t,n});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (typeof process === 'undefined' ||
    !process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = { nextTick: nextTick };
} else {
  module.exports = process
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(37)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13);
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(11);
exports.Duplex = __webpack_require__(1);
exports.Transform = __webpack_require__(18);
exports.PassThrough = __webpack_require__(46);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



/*<replacement>*/

var pna = __webpack_require__(7);
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = __webpack_require__(4);
util.inherits = __webpack_require__(5);
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__(45)
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(15);
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(8).Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

var destroyImpl = __webpack_require__(16);

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__(1);

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var writableHwm = options.writableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(1);

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  pna.nextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    pna.nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    pna.nextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    pna.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      pna.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3), __webpack_require__(43).setImmediate, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var pna = __webpack_require__(7);
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = __webpack_require__(14);
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__(9).EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(15);
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(8).Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__(4);
util.inherits = __webpack_require__(5);
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(40);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__(41);
var destroyImpl = __webpack_require__(16);
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__(1);

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var readableHwm = options.readableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(17).StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(1);

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(17).StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    pna.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        pna.nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    pna.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;

  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    pna.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(3)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9).EventEmitter;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*<replacement>*/

var pna = __webpack_require__(7);
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      pna.nextTick(emitErrorNT, this, err);
    }
    return this;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      pna.nextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });

  return this;
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__(8).Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__(1);

/*<replacement>*/
var util = __webpack_require__(4);
util.inherits = __webpack_require__(5);
/*</replacement>*/

util.inherits(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return this.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);

  cb(er);

  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function') {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this2 = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this2.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');

  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Batch = __webpack_require__(20);
var Transact = __webpack_require__(21);

var DynamodbFactory = function DynamodbFactory($config) {
	return new DynamoDB($config);
};
DynamodbFactory.util = __webpack_require__(6);

DynamodbFactory.config = function (o) {
	if (o.hasOwnProperty('empty_string_replace_as')) {
		//console.log("setting replace as to ", JSON.stringify(o.empty_string_replace_as) )
		DynamodbFactory.util.config.empty_string_replace_as = o.empty_string_replace_as;
	}

	if (o.hasOwnProperty('stringset_parse_as_set')) DynamodbFactory.util.config.stringset_parse_as_set = o.stringset_parse_as_set;

	if (o.hasOwnProperty('numberset_parse_as_set')) DynamodbFactory.util.config.numberset_parse_as_set = o.numberset_parse_as_set;

	if (o.hasOwnProperty('binaryset_parse_as_set')) DynamodbFactory.util.config.binaryset_parse_as_set = o.binaryset_parse_as_set;
};

var Promise = __webpack_require__(22);
var util = __webpack_require__(6);

///////////////
if (typeof window !== 'undefined') {
	var AWS = __webpack_require__(30);
}
/////////
/////////////////////////////////////////////////
///////////////////////////////
//////////


//////////////////////
//var sqlparser = require('./sqlparser.js');
var sqlparser = __webpack_require__(31);

sqlparser.parser.yy.extend = function (a, b) {
	if (typeof a == 'undefined') a = {};
	for (var key in b) {
		if (b.hasOwnProperty(key)) {
			a[key] = b[key];
		}
	}
	return a;
};
//////////

var filterOperators = {
	EQ: '=',
	NE: '<>',
	LT: '<',
	LE: '<=',
	GT: '>',
	GE: '>=',

	BETWEEN: 'BETWEEN',
	IN: 'IN',

	NOT_NULL: 'attribute_exists',
	NULL: 'attribute_not_exists',

	BEGINS_WITH: 'begins_with',
	CONTAINS: 'contains',
	NOT_CONTAINS: 'not_contains'

};

function DynamoDB($config) {
	this.events = {
		error: function error() {},
		beforeRequest: function beforeRequest() {}
	};
	this.describeTables = {};
	this.return_explain = false;

	// $config will not be an instance of DynamoDB becanse we have a different instance of AWS sdk loaded
	// aws had similar issues in the past: https://github.com/awslabs/dynamodb-document-js-sdk/issues/16

	// a way around to make sure it is an instance of AWS.DynamoDB
	if ((typeof $config === 'undefined' ? 'undefined' : _typeof($config)) === "object" && ($config.config || {}).hasOwnProperty('dynamoDbCrc32')) {
		//if ($config instanceof AWS.DynamoDB) {
		this.client = $config;
		return;
	}

	// delay implementation of amazon-dax-client,
	// if node-gyp is not available during npm install,
	// amazon-dax-client will throw error when require('@awspilot/dynamodb')


	//if (process.version.match(/^v(\d+)/)[1] !== '0') {
	//	// amazon-dax-client does not work on node 0.x atm
	//	var AmazonDaxClient = require('amazon-dax-client')
	//	if ($config instanceof AmazonDaxClient) {
	//		this.client = $config
	//		$config = null
	//		return
	//	}
	//}


	if ($config && $config.hasOwnProperty('accessKeyId')) {
		$config.credentials = {
			accessKeyId: $config.accessKeyId,
			secretAccessKey: $config.secretAccessKey || null
		};
		delete $config.accessKeyId;
		delete $config.secretAccessKey;
	}

	if ($config) this.client = new AWS.DynamoDB($config);else this.client = new AWS.DynamoDB();
}
DynamoDB.prototype.SS = function (data) {
	if (Array.isArray(data)) return new DynamodbFactory.util.Raw({ 'SS': data });
	throw new Error('SS: argument should be a array');
};
DynamoDB.prototype.stringSet = DynamoDB.prototype.SS;

DynamoDB.prototype.BS = function (data) {
	if (Array.isArray(data)) return new DynamodbFactory.util.Raw({ 'BS': data });
	throw new Error('BS: argument should be a array');
};
DynamoDB.prototype.binarySet = DynamoDB.prototype.BS;

DynamoDB.prototype.N = function (data) {
	if (typeof data === "number" || typeof data === "string") return new DynamodbFactory.util.Raw({ 'N': data.toString() });
	throw new Error('N: argument should be a number or string that converts to a number');
};
DynamoDB.prototype.number = DynamoDB.prototype.N;

DynamoDB.prototype.S = function (data) {
	if (typeof data === "string") return new DynamodbFactory.util.Raw({ 'S': data });

	throw new Error('S: argument should be a string');
};
DynamoDB.prototype.string = DynamoDB.prototype.S;

DynamoDB.prototype.NS = function (data) {
	if (Array.isArray(data)) {
		var $to_ret = [];
		return new DynamodbFactory.util.Raw({ 'NS': data.map(function (el, idx) {
				return el.toString();
			}) });
	}
	throw new Error('NS: argument should be an Array');
};
DynamoDB.prototype.numberSet = DynamoDB.prototype.NS;

DynamoDB.prototype.L = function (data) {
	if (Array.isArray(data)) {
		var $to_ret = [];
		for (var i in data) {
			$to_ret[i] = DynamodbFactory.util.stringify(data[i]);
		}
		return new DynamodbFactory.util.Raw({ 'L': $to_ret });
	}
	throw new Error('L: argument should be an Array');
};
DynamoDB.prototype.list = DynamoDB.prototype.L;

DynamoDB.prototype.add = function (data, datatype) {
	// if datatype is defined then force it
	if (typeof datatype == "string") {
		switch (datatype) {
			case 'N':
				return this.add(this.N(data));break;
			case 'NS':
				return this.add(this.NS(data));break;
			case 'SS':
				return this.add(this.SS(data));break;
			case 'L':
				return this.add(this.L(data));break;

			// unsupported by AWS
			case 'B':
			case 'BOOL':
			case 'NULL':
			case 'S':
				throw new Error('ADD action is not supported for the type: ' + datatype);
				break;

			// unsupported by aws-dynamodb
			case 'BS':
			case 'M':
			default:
				throw new Error('ADD action is not supported by aws-dynamodb for type: ' + datatype);
				break;
		}
		return;
	}

	// check if it is instance of Raw
	if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === "object" && data instanceof DynamodbFactory.util.Raw) {
		return new DynamoDB.Raw({
			Action: 'ADD',
			Value: data.data
		});
	}

	// autodetect

	// number or undefined: increment number, eg add(5), add()
	if (typeof data === "number" || typeof data === "undefined") return this.add(this.N(data || 1));

	if (Array.isArray(data)) return this.add(this.L(data));

	// add for M is not supported
	//if (typeof data === "object")
	//	return this.add(this.M(data))


	// further autodetection
	throw new Error('ADD action is not supported by aws-dynamodb for type: ' + (typeof data === 'undefined' ? 'undefined' : _typeof(data)));
};

DynamoDB.prototype.del = function (data, datatype) {
	// if datatype is defined then force it
	if (typeof datatype == "string") {
		switch (datatype) {
			case 'NS':
				return this.del(this.NS(data));break;
			case 'SS':
				return this.del(this.SS(data));break;

			// unsupported by AWS
			case 'S':
			case 'N':
			case 'L':
				throw new Error('DELETE action with value is not supported for the type: ' + datatype);
				break;

			// unsupported by aws-dynamodb
			case 'B':
			case 'BOOL':
			case 'NULL':
			case 'BS':
			case 'M':
			default:
				throw new Error('DELETE action is not supported by aws-dynamodb for type: ' + datatype);
				break;
		}
		return;
	}

	// check if it is instance of Raw
	if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === "object" && data instanceof DynamodbFactory.util.Raw) {
		return new DynamoDB.Raw({
			Action: 'DELETE',
			Value: data.data
		});
	}

	// autodetect

	if (!arguments.length) return new DynamoDB.Raw({ Action: 'DELETE' });

	throw new Error('DELETE action is not supported by aws-dynamodb for type: ' + (typeof data === 'undefined' ? 'undefined' : _typeof(data)));
};

DynamoDB.prototype.addTableSchema = function ($schema) {

	if ((typeof $schema === 'undefined' ? 'undefined' : _typeof($schema)) !== "object") throw new Error("[AWSPILOT] Invalid parameter, schema must be Array of Objects or Object");

	if (!$schema.hasOwnProperty('TableName')) throw new Error("[AWSPILOT] Invalid parameter, missing $schema.TableName");

	if (!$schema.hasOwnProperty('KeySchema')) throw new Error("[AWSPILOT] Invalid parameter, missing $schema.KeySchema");

	this.describeTables[$schema.TableName] = $schema;
};

DynamoDB.prototype.schema = function ($schemas) {
	var $this = this;
	if ((typeof $schemas === 'undefined' ? 'undefined' : _typeof($schemas)) !== "object") throw new Error("[AWSPILOT] Invalid parameter, schema must be Array or Object");

	if (Array.isArray($schemas)) $schemas.map(function (s) {
		$this.addTableSchema(s);
	});else this.addTableSchema($schemas);

	return this;
};

DynamoDB.prototype.explain = function () {
	this.return_explain = true;
	return this;
};

DynamoDB.prototype.table = function ($tableName) {
	var re = this.return_explain;this.return_explain = false;
	return new Request(this.client, { events: this.events, describeTables: this.describeTables, return_explain: re }).table($tableName);
};

//////////////////////
DynamoDB.prototype.query = function () {
	var re = this.return_explain;this.return_explain = false;
	var r = new Request(this.client, { events: this.events, describeTables: this.describeTables, return_explain: re });
	return r.sql(arguments[0], arguments[1]);
};
//////////

DynamoDB.prototype.batch = function () {
	var re = this.return_explain;this.return_explain = false;
	return new Batch(this.client, { events: this.events, describeTables: this.describeTables, return_explain: re });
};

DynamoDB.prototype.transact = function () {
	var re = this.return_explain;this.return_explain = false;
	return new Transact(this.client, { events: this.events, describeTables: this.describeTables, return_explain: re });
};

DynamoDB.prototype.getClient = function () {
	return this.client;
};

DynamoDB.prototype.on = function (event, handler) {
	this.events[event] = handler;
};

// select
DynamoDB.prototype.ALL = 1;
DynamoDB.prototype.ALL_ATTRIBUTES = 1;
DynamoDB.prototype.PROJECTED = 2;
DynamoDB.prototype.ALL_PROJECTED_ATTRIBUTES = 2;
DynamoDB.prototype.COUNT = 3;

// ReturnValues
DynamoDB.prototype.NONE = 'NONE';
DynamoDB.prototype.ALL_OLD = 'ALL_OLD';
DynamoDB.prototype.UPDATED_OLD = 'UPDATED_OLD';
DynamoDB.prototype.ALL_NEW = 'ALL_NEW';
DynamoDB.prototype.UPDATED_NEW = 'UPDATED_NEW';

// ReturnConsumedCapacity
//DynamoDB.prototype.NONE = 'NONE'
DynamoDB.prototype.TOTAL = 'TOTAL';
DynamoDB.prototype.INDEXES = 'INDEXES';

function Request($client, config) {

	this.events = config.events; // global events
	this.describeTables = config.describeTables;
	this.return_explain = config.return_explain;
	this.local_events = {};
	this.client = $client;

	this.reset();
}

Request.prototype.reset = function () {
	//console.log("reseting")

	this.Select = null;

	this.AttributesToGet = []; // deprecated in favor of ProjectionExpression
	this.ProjectionExpression = undefined;
	this.ExpressionAttributeNames = undefined;
	this.ExpressionAttributeValues = undefined;

	this.FilterExpression = undefined;

	this.pendingKey = null;
	this.pendingFilter = null;
	this.pendingIf = null;

	this.whereKey = {};
	this.KeyConditionExpression = undefined;

	this.whereOther = {};
	this.whereFilter = {};
	this.whereFilterExpression = []; // same as whereFilter, except we can support same attribute compared multiple times

	this.ifFilter = {};
	this.ifConditionExpression = []; // same as ifFilter, except we can support same attribute compared multiple times
	this.ConditionExpression = undefined;

	this.limit_value = null;
	this.IndexName = null;
	this.ScanIndexForward = true;
	this.LastEvaluatedKey = null;
	this.ExclusiveStartKey = null;
	this.ConsistentRead = false;
	this.ReturnConsumedCapacity = 'TOTAL';
	this.ReturnValues = DynamoDB.NONE;
	//this.ConsumedCapacity = null
};

Request.prototype.routeCall = function (method, params, reset, callback) {
	var $this = this;
	this.events.beforeRequest.apply(this, [method, params]);

	if (this.return_explain) {
		if (reset === true) $this.reset();

		switch (method) {
			case 'putItem':
			case 'updateItem':
			case 'deleteItem':
				var explain = {
					Attributes: DynamodbFactory.util.anormalizeItem({
						method: method,
						payload: params
					})
				};
				break;
			case 'getItem':
				var explain = {
					Item: DynamodbFactory.util.anormalizeItem({
						method: method,
						payload: params
					})
				};
				break;
			case 'query':
			case 'scan':
				var explain = {
					Explain: {
						method: method,
						payload: params
					}
				};
				break;
			case 'listTables':
				var explain = {
					TableNames: {
						method: method,
						payload: params
					}
				};
				break;
			case 'describeTable':
				var explain = {
					Table: {
						method: method,
						payload: params
					}
				};
				break;
		}

		callback.apply($this, [null, explain]);
		return;
	}

	this.client[method](params, function (err, data) {

		if (err) $this.events.error.apply($this, [method, err, params]);

		if ((data || {}).hasOwnProperty('ConsumedCapacity')) $this.ConsumedCapacity = data.ConsumedCapacity;

		if (reset === true) $this.reset();

		callback.apply($this, [err, data]);
	});
};
Request.prototype.describeTable = function (table, callback) {
	if (this.describeTables.hasOwnProperty(table)) {
		return callback.apply(this, [null, { Table: this.describeTables[table] }]);
	}

	this.routeCall('describeTable', { TableName: table }, false, function (err, data) {
		return callback.apply(this, [err, data]);
	});
};

Request.prototype.describe = function (callback) {
	this.routeCall('describeTable', { TableName: this.tableName }, true, function (err, raw) {
		if (err) return callback.apply(this, [err]);

		if (!raw.hasOwnProperty('Table')) return callback.apply(this, [{ errorMessage: "Invalid data. No Table Property in describeTable" }]);

		var info = raw.Table;
		delete info.TableStatus;
		delete info.TableArn;
		delete info.TableSizeBytes;
		delete info.ItemCount;
		delete info.CreationDateTime;
		delete info.ProvisionedThroughput.NumberOfDecreasesToday;
		delete info.ProvisionedThroughput.LastIncreaseDateTime;
		delete info.ProvisionedThroughput.LastDecreaseDateTime;
		if (info.hasOwnProperty('BillingModeSummary')) {
			info.BillingMode = info.BillingModeSummary.BillingMode;
			delete info.BillingModeSummary;
		}
		if (info.hasOwnProperty('GlobalSecondaryIndexes')) {
			for (var i in info.GlobalSecondaryIndexes) {
				delete info.GlobalSecondaryIndexes[i].IndexSizeBytes;
				delete info.GlobalSecondaryIndexes[i].IndexStatus;
				delete info.GlobalSecondaryIndexes[i].ItemCount;
				delete info.GlobalSecondaryIndexes[i].IndexArn;
				delete info.GlobalSecondaryIndexes[i].ProvisionedThroughput.NumberOfDecreasesToday;
			}
		}
		if (info.hasOwnProperty('LocalSecondaryIndexes')) {
			for (var i in info.LocalSecondaryIndexes) {
				delete info.LocalSecondaryIndexes[i].IndexSizeBytes;
				delete info.LocalSecondaryIndexes[i].ItemCount;
				delete info.LocalSecondaryIndexes[i].IndexArn;
			}
		}
		return callback.apply(this, [err, info, raw]);
	});
};

Request.prototype.table = function ($tableName) {
	this.tableName = $tableName;
	return this;
};
Request.prototype.on = function (eventName, callback) {
	this.local_events[eventName] = callback;
	return this;
};
Request.prototype.select = function () {

	if (arguments.length === 1 && arguments[0] === DynamoDB.prototype.ALL_ATTRIBUTES) {
		this.Select = 'ALL_ATTRIBUTES';
		return this;
	}

	if (arguments.length === 1 && arguments[0] === DynamoDB.prototype.ALL_PROJECTED_ATTRIBUTES) {
		this.Select = 'ALL_PROJECTED_ATTRIBUTES';
		return this;
	}

	if (arguments.length === 1 && arguments[0] === DynamoDB.prototype.COUNT) {
		this.Select = 'COUNT';
		return this;
	}

	this.AttributesToGet = [];

	if (arguments.length === 1 && arguments[0] instanceof Array) {
		this.AttributesToGet = arguments[0];
		return this;
	}

	for (var i = 0; i < arguments.length; i++) {
		this.AttributesToGet.push(arguments[i]);
	}return this;
};
Request.prototype.return = function (rv) {
	this.ReturnValues = rv;
	return this;
};
Request.prototype.addSelect = function ($field) {
	this.AttributesToGet.push($field);
	return this;
};

Request.prototype.consistentRead = function ($value) {
	if ($value === undefined) {
		this.ConsistentRead = true;
		return this;
	}

	if ($value) this.ConsistentRead = true;else this.ConsistentRead = false;

	return this;
};
Request.prototype.consistent_read = Request.prototype.consistentRead;

Request.prototype.return_consumed_capacity = function ($value) {
	this.ReturnConsumedCapacity = $value;return this;
};
Request.prototype.ReturnConsumedCapacity = Request.prototype.return_consumed_capacity;

Request.prototype.descending = function () {
	this.ScanIndexForward = false;
	return this;
};
Request.prototype.desc = Request.prototype.descending;
Request.prototype.index = function ($IndexName) {
	this.IndexName = $IndexName;
	return this;
};
Request.prototype.order_by = Request.prototype.index;

Request.prototype.where = function ($key, $value1, $value2) {
	if ($value1 === undefined) {
		this.pendingKey = $key;
		return this;
	}

	if ($value2 === undefined) {
		this.whereKey[$key] = { 'S': $value1 };

		if (typeof $value1 == "number") this.whereKey[$key] = { 'N': $value1.toString() };
	} else {
		this.whereOther[$key] = {
			type: 'S',
			value: $value2,
			operator: $value1
		};
	}

	return this;
};

Request.prototype.insert = function (item, callback) {
	var $this = this;

	if (typeof callback !== "function") {
		return new Promise(function (fullfill, reject) {
			$this.describeTable($this.tableName, function (err, data) {
				if (err) return reject(err);

				for (var i in data.Table.KeySchema) {
					$this.if(data.Table.KeySchema[i].AttributeName).not_exists();
				}

				var $thisQuery = {
					TableName: $this.tableName,
					Item: DynamodbFactory.util.anormalizeItem(item),
					Expected: DynamodbFactory.util.buildExpected($this.ifFilter),
					ReturnConsumedCapacity: $this.ReturnConsumedCapacity,
					ReturnValues: $this.ReturnValues
				};

				if (typeof $this.local_events['beforeRequest'] === "function") $this.local_events['beforeRequest']('putItem', $thisQuery);

				$this.routeCall('putItem', $thisQuery, true, function (err, data) {
					if (err) return reject(err);

					fullfill(DynamodbFactory.util.normalizeItem(data.Attributes || {}));
				});
			});
		});
	}

	this.describeTable(this.tableName, function (err, data) {
		if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

		for (var i in data.Table.KeySchema) {
			this.if(data.Table.KeySchema[i].AttributeName).not_exists();
		}

		var $thisQuery = {
			TableName: this.tableName,
			Item: DynamodbFactory.util.anormalizeItem(item),
			Expected: DynamodbFactory.util.buildExpected(this.ifFilter),
			ReturnConsumedCapacity: this.ReturnConsumedCapacity,
			ReturnValues: this.ReturnValues
		};

		if (typeof this.local_events['beforeRequest'] === "function") this.local_events['beforeRequest']('putItem', $thisQuery);

		this.routeCall('putItem', $thisQuery, true, function (err, data) {
			if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

			typeof callback !== "function" ? null : callback.apply(this, [err, DynamodbFactory.util.normalizeItem(data.Attributes || {}), data]);
		});
	});
};

// remember that replace should fail if item does not exist
Request.prototype.replace = function (item, callback) {
	var $this = this;
	if (typeof callback !== "function") {
		return new Promise(function (fullfill, reject) {
			$this.describeTable($this.tableName, function (err, data) {
				if (err) return reject(err);

				for (var i in data.Table.KeySchema) {
					$this.if(data.Table.KeySchema[i].AttributeName).eq(item[data.Table.KeySchema[i].AttributeName]);
				}

				var $thisQuery = {
					TableName: $this.tableName,
					Item: DynamodbFactory.util.anormalizeItem(item),
					Expected: DynamodbFactory.util.buildExpected($this.ifFilter),
					ReturnConsumedCapacity: $this.ReturnConsumedCapacity,
					ReturnValues: $this.ReturnValues
				};

				$this.routeCall('putItem', $thisQuery, true, function (err, data) {
					if (err) return reject(err);

					fullfill(DynamodbFactory.util.normalizeItem(data.Attributes || {}));
				});
			});
		});
	}

	this.describeTable(this.tableName, function (err, data) {
		if (err) return callback(err, false);

		for (var i in data.Table.KeySchema) {
			this.if(data.Table.KeySchema[i].AttributeName).eq(item[data.Table.KeySchema[i].AttributeName]);
		}

		var $thisQuery = {
			TableName: this.tableName,
			Item: DynamodbFactory.util.anormalizeItem(item),
			Expected: DynamodbFactory.util.buildExpected(this.ifFilter),
			ReturnConsumedCapacity: this.ReturnConsumedCapacity,
			ReturnValues: this.ReturnValues
		};

		this.routeCall('putItem', $thisQuery, true, function (err, data) {
			if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

			typeof callback !== "function" ? null : callback.apply(this, [err, DynamodbFactory.util.normalizeItem(data.Attributes || {}), data]);
		});
	});
};

Request.prototype.update = function ($attrz, callback, $action) {
	var $this = this;

	if (typeof callback !== "function") {
		return new Promise(function (fullfill, reject) {

			$this.describeTable($this.tableName, function (err, data) {
				if (err) return reject(err);

				for (var i in data.Table.KeySchema) {
					if (!$this.whereKey.hasOwnProperty(data.Table.KeySchema[i].AttributeName)) {
						// aws will throw: Uncaught ValidationException: The provided key element does not match the schema
						// we're throwing a more understandable error
						return reject({ message: "Uncaught ValidationException: Missing value for Attribute '" + data.Table.KeySchema[i].AttributeName + "' in .where()" });
					} else {
						$this.if(data.Table.KeySchema[i].AttributeName).eq(DynamodbFactory.util.normalizeItem({ key: $this.whereKey[data.Table.KeySchema[i].AttributeName] }).key);
					}
				}

				var $to_update = {};
				for (var $k in $attrz) {
					if ($attrz.hasOwnProperty($k)) {
						if ($attrz[$k] === undefined) {
							$to_update[$k] = {
								Action: $action ? $action : 'DELETE'
							};
						} else if ($attrz[$k] instanceof DynamoDB.Raw) {
							$to_update[$k] = $attrz[$k].getRawData();
						} else {
							$to_update[$k] = {
								Action: $action ? $action : 'PUT',
								Value: DynamodbFactory.util.stringify($attrz[$k])
							};
						}
					}
				}
				//this.buildConditionExpression()
				var $thisQuery = {
					TableName: $this.tableName,
					Key: $this.whereKey,

					Expected: DynamodbFactory.util.buildExpected($this.ifFilter),

					//ConditionExpression: $this.ConditionExpression,
					//ExpressionAttributeNames: $this.ExpressionAttributeNames,
					//ExpressionAttributeValues: $this.ExpressionAttributeValues,

					//UpdateExpression
					AttributeUpdates: $to_update,

					ReturnConsumedCapacity: $this.ReturnConsumedCapacity,
					ReturnValues: $this.ReturnValues

				};

				if (typeof $this.local_events['beforeRequest'] === "function") $this.local_events['beforeRequest']('updateItem', $thisQuery);

				$this.routeCall('updateItem', $thisQuery, true, function (err, data) {
					if (err) return reject(err);

					fullfill(DynamodbFactory.util.normalizeItem(data.Attributes || {}));
				});
			});
		});
	}

	this.describeTable(this.tableName, function (err, data) {
		if (err) return typeof callback !== "function" ? null : callback(err, false);

		for (var i in data.Table.KeySchema) {
			if (!this.whereKey.hasOwnProperty(data.Table.KeySchema[i].AttributeName)) {
				// aws will throw: Uncaught ValidationException: The provided key element does not match the schema
				// we're throwing a more understandable error
				typeof callback !== "function" ? null : callback.apply(this, [{ message: "Uncaught ValidationException: Missing value for Attribute '" + data.Table.KeySchema[i].AttributeName + "' in .where()" }]);
			} else {
				this.if(data.Table.KeySchema[i].AttributeName).eq(DynamodbFactory.util.normalizeItem({ key: this.whereKey[data.Table.KeySchema[i].AttributeName] }).key);
			}
		}

		var $to_update = {};
		for (var $k in $attrz) {
			if ($attrz.hasOwnProperty($k)) {
				if ($attrz[$k] === undefined) {
					$to_update[$k] = {
						Action: $action ? $action : 'DELETE'
					};
				} else if ($attrz[$k] instanceof DynamoDB.Raw) {
					$to_update[$k] = $attrz[$k].getRawData();
				} else {
					$to_update[$k] = {
						Action: $action ? $action : 'PUT',
						Value: DynamodbFactory.util.stringify($attrz[$k])
					};
				}
			}
		}
		//this.buildConditionExpression()
		var $thisQuery = {
			TableName: this.tableName,
			Key: this.whereKey,

			Expected: DynamodbFactory.util.buildExpected(this.ifFilter),

			//ConditionExpression: this.ConditionExpression,
			//ExpressionAttributeNames: this.ExpressionAttributeNames,
			//ExpressionAttributeValues: this.ExpressionAttributeValues,

			//UpdateExpression
			AttributeUpdates: $to_update,

			ReturnConsumedCapacity: this.ReturnConsumedCapacity,
			ReturnValues: this.ReturnValues

		};

		if (typeof this.local_events['beforeRequest'] === "function") this.local_events['beforeRequest']('updateItem', $thisQuery);

		this.routeCall('updateItem', $thisQuery, true, function (err, data) {
			if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

			typeof callback !== "function" ? null : callback.apply(this, [err, DynamodbFactory.util.normalizeItem(data.Attributes || {}), data]);
		});
	});
};

Request.prototype.insert_or_update = function (params, callback, $action) {
	var $this = this;
	var $attrz = DynamodbFactory.util.clone(params);

	if (typeof callback !== "function") {
		return new Promise(function (fullfill, reject) {

			$this.describeTable($this.tableName, function (err, data) {
				if (err) return reject(err);

				// extract the hash/range keys
				for (var i in data.Table.KeySchema) {
					$this.where(data.Table.KeySchema[i].AttributeName).eq($attrz[data.Table.KeySchema[i].AttributeName]);
					delete $attrz[data.Table.KeySchema[i].AttributeName];
				}
				var $to_update = {};
				for (var $k in $attrz) {
					if ($attrz.hasOwnProperty($k)) {
						if ($attrz[$k] === undefined) {
							$to_update[$k] = {
								Action: $action ? $action : 'DELETE'
							};
						} else if ($attrz[$k] instanceof DynamoDB.Raw) {
							$to_update[$k] = $attrz[$k].getRawData();
						} else {
							$to_update[$k] = {
								Action: $action ? $action : 'PUT',
								Value: DynamodbFactory.util.stringify($attrz[$k])
							};
						}
					}
				}
				var $thisQuery = {
					TableName: $this.tableName,
					Key: $this.whereKey,
					AttributeUpdates: $to_update,
					ReturnConsumedCapacity: $this.ReturnConsumedCapacity,
					ReturnValues: $this.ReturnValues
				};
				$this.routeCall('updateItem', $thisQuery, true, function (err, data) {
					if (err) return reject(err);

					fullfill(DynamodbFactory.util.normalizeItem(data.Attributes || {}));
				});
			});
		});
	}

	this.describeTable(this.tableName, function (err, data) {
		if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

		// extract the hash/range keys
		for (var i in data.Table.KeySchema) {
			this.where(data.Table.KeySchema[i].AttributeName).eq($attrz[data.Table.KeySchema[i].AttributeName]);
			delete $attrz[data.Table.KeySchema[i].AttributeName];
		}
		var $to_update = {};
		for (var $k in $attrz) {
			if ($attrz.hasOwnProperty($k)) {
				if ($attrz[$k] === undefined) {
					$to_update[$k] = {
						Action: $action ? $action : 'DELETE'
					};
				} else if ($attrz[$k] instanceof DynamoDB.Raw) {
					$to_update[$k] = $attrz[$k].getRawData();
				} else {
					$to_update[$k] = {
						Action: $action ? $action : 'PUT',
						Value: DynamodbFactory.util.stringify($attrz[$k])
					};
				}
			}
		}
		var $thisQuery = {
			TableName: this.tableName,
			Key: this.whereKey,
			AttributeUpdates: $to_update,
			ReturnConsumedCapacity: this.ReturnConsumedCapacity,
			ReturnValues: this.ReturnValues
		};
		this.routeCall('updateItem', $thisQuery, true, function (err, data) {
			if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

			typeof callback !== "function" ? null : callback.apply(this, [err, DynamodbFactory.util.normalizeItem(data.Attributes || {}), data]);
		});
	});
};

Request.prototype.insert_or_replace = function (item, callback) {
	var $this = this;

	var $thisQuery = {
		TableName: this.tableName,
		Item: DynamodbFactory.util.anormalizeItem(item),
		ReturnConsumedCapacity: this.ReturnConsumedCapacity,
		ReturnValues: this.ReturnValues
	};

	if (typeof this.local_events['beforeRequest'] === "function") this.local_events['beforeRequest']('putItem', $thisQuery);

	if (typeof callback !== "function") {
		return new Promise(function (fullfill, reject) {
			$this.routeCall('putItem', $thisQuery, true, function (err, data) {
				if (err) return reject(err);

				fullfill(DynamodbFactory.util.normalizeItem(data.Attributes || {}));
			});
		});
	}

	this.routeCall('putItem', $thisQuery, true, function (err, data) {
		if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

		typeof callback !== "function" ? null : callback.apply(this, [err, DynamodbFactory.util.normalizeItem(data.Attributes || {}), data]);
	});
};

Request.prototype.delete = function ($attrz, callback) {
	var $this = this;

	if (arguments.length === 0) {
		var $thisQuery = {
			TableName: this.tableName,
			Key: this.whereKey,
			ReturnConsumedCapacity: this.ReturnConsumedCapacity,
			ReturnValues: this.ReturnValues
		};
		return new Promise(function (fullfill, reject) {
			$this.routeCall('deleteItem', $thisQuery, true, function (err, data) {
				if (err) return reject(err);

				fullfill(DynamodbFactory.util.normalizeItem(data.Attributes || {}));
			});
		});
	} else if (typeof $attrz == 'function') {
		// delete entire item, $attrz is actually the callback

		var $thisQuery = {
			TableName: this.tableName,
			Key: this.whereKey,
			ReturnConsumedCapacity: this.ReturnConsumedCapacity,
			ReturnValues: this.ReturnValues
		};
		this.routeCall('deleteItem', $thisQuery, true, function (err, data) {
			if (err) return $attrz.apply(this, [err, false]);

			$attrz.apply(this, [err, DynamodbFactory.util.normalizeItem(data.Attributes || {}), data]);
		});
	} else {
		// delete attributes
		var $to_delete = {};
		for (var $i = 0; $i < $attrz.length; $i++) {
			$to_delete[$attrz[$i]] = {
				Action: 'DELETE'
			};
		}
		var $thisQuery = {
			TableName: this.tableName,
			Key: this.whereKey,
			AttributeUpdates: $to_delete,
			ReturnConsumedCapacity: this.ReturnConsumedCapacity,
			ReturnValues: this.ReturnValues
		};
		this.routeCall('updateItem', $thisQuery, true, function (err, data) {
			if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

			typeof callback !== "function" ? null : callback.apply(this, [err, DynamodbFactory.util.normalizeItem(data.Attributes || {}), data]);
		});
	}
};

Request.prototype.get = function (callback) {
	var $this = this;
	this.buildProjectionExpression(); // this will set ProjectionExpression and ExpressionAttributeNames
	var $thisQuery = {
		TableName: this.tableName,
		Key: this.whereKey,
		ConsistentRead: this.ConsistentRead,
		ReturnConsumedCapacity: this.ReturnConsumedCapacity,

		ProjectionExpression: this.ProjectionExpression,
		ExpressionAttributeNames: this.ExpressionAttributeNames
	};

	if (typeof callback !== "function") {
		return new Promise(function (fullfill, reject) {
			$this.routeCall('getItem', $thisQuery, true, function (err, data) {
				if (err) return reject(err);

				fullfill(DynamodbFactory.util.parse({ M: data.Item || {} }));
			});
		});
	}

	this.routeCall('getItem', $thisQuery, true, function (err, data) {
		if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

		typeof callback !== "function" ? null : callback.apply(this, [err, DynamodbFactory.util.parse({ M: data.Item || {} }), data]);
	});
};

Request.prototype.query = function (callback) {
	var $this = this;

	if (this.KeyConditionExpression === undefined) this.buildKeyConditionExpression(); // will set KeyConditionExpression, ExpressionAttributeNames, ExpressionAttributeValues

	if (this.ProjectionExpression === undefined) this.buildProjectionExpression(); // will set ProjectionExpression, ExpressionAttributeNames

	if (this.FilterExpression === undefined) this.buildFilterExpression(); // will set FilterExpression, ExpressionAttributeNames, ExpressionAttributeValues

	var $thisQuery = {
		TableName: this.tableName,

		KeyConditionExpression: this.KeyConditionExpression,

		ConsistentRead: this.ConsistentRead,
		ReturnConsumedCapacity: this.ReturnConsumedCapacity,

		"Select": this.Select !== null ? this.Select : undefined,
		//AttributesToGet: this.AttributesToGet.length ? this.AttributesToGet : undefined

		ProjectionExpression: this.ProjectionExpression,
		ExpressionAttributeNames: this.ExpressionAttributeNames,

		FilterExpression: this.FilterExpression,

		ExpressionAttributeValues: this.ExpressionAttributeValues
	};
	if (this.limit_value !== null) $thisQuery['Limit'] = this.limit_value;

	if (this.ScanIndexForward !== true) {
		$thisQuery['ScanIndexForward'] = false;
	}
	if (this.IndexName !== null) $thisQuery['IndexName'] = this.IndexName;

	if (this.ExclusiveStartKey !== null) $thisQuery['ExclusiveStartKey'] = this.ExclusiveStartKey;

	if (typeof this.local_events['beforeRequest'] === "function") this.local_events['beforeRequest']('updateItem', $thisQuery);

	if (typeof callback !== "function") {
		return new Promise(function (fullfill, reject) {
			$this.routeCall('query', $thisQuery, true, function (err, data) {
				if (err) return reject(err);

				fullfill(DynamodbFactory.util.parse({ L: (data.Items || []).map(function (item) {
						return { 'M': item };
					})
				}));
			});
		});
	}

	this.routeCall('query', $thisQuery, true, function (err, data) {
		if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

		this.LastEvaluatedKey = data.LastEvaluatedKey === undefined ? null : data.LastEvaluatedKey;

		typeof callback !== "function" ? null : callback.apply(this, [err, DynamodbFactory.util.parse({ L: (data.Items || []).map(function (item) {
				return { 'M': item };
			})
		}), data]);
	});

	return this;
};

Request.prototype.scan = function (callback) {
	var $this = this;

	if (this.ProjectionExpression === undefined) this.buildProjectionExpression(); // this will set ProjectionExpression and ExpressionAttributeNames

	this.buildFilterExpression();
	var $thisQuery = {
		TableName: this.tableName,
		"Select": this.Select !== null ? this.Select : undefined,

		ProjectionExpression: this.ProjectionExpression,
		ExpressionAttributeNames: this.ExpressionAttributeNames,

		FilterExpression: this.FilterExpression,

		ExpressionAttributeValues: this.ExpressionAttributeValues,

		ReturnConsumedCapacity: this.ReturnConsumedCapacity
	};

	if (this.limit_value !== null) $thisQuery['Limit'] = this.limit_value;

	if (this.ExclusiveStartKey !== null) $thisQuery['ExclusiveStartKey'] = this.ExclusiveStartKey;

	if (this.IndexName !== null) $thisQuery['IndexName'] = this.IndexName;

	if (typeof callback !== "function") {
		return new Promise(function (fullfill, reject) {
			$this.routeCall('scan', $thisQuery, true, function (err, data) {
				if (err) return reject(err);

				fullfill(DynamodbFactory.util.parse({ L: (data.Items || []).map(function (item) {
						return { 'M': item };
					})
				}));
			});
		});
	}

	this.routeCall('scan', $thisQuery, true, function (err, data) {
		if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

		this.LastEvaluatedKey = data.LastEvaluatedKey === undefined ? null : data.LastEvaluatedKey;

		typeof callback !== "function" ? null : callback.apply(this, [err, DynamodbFactory.util.parse({ L: (data.Items || []).map(function (item) {
				return { 'M': item };
			})
		}), data]);
	});
};

//////////////////////
Request.prototype.sql = function (sql, callback) {
	var $this = this;

	var sqp;
	try {
		sqp = sqlparser.parse(sql);
	} catch (err) {
		return callback(err);
	}

	if (sqp.length > 1) return callback({ errorCode: 'UNSUPPORTED_MULTIQUERY', errorMessage: '[AWSPILOT] Multiple queries not supported, yet!' });

	sqp = sqp[0];

	if (typeof callback !== "function") {
		return new Promise(function (fullfill, reject) {
			switch (sqp.statement) {

				case 'DESCRIBE_TABLE':

					if (typeof $this.local_events['beforeRequest'] === "function") $this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

					$this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
						if (err) return reject(err);

						fullfill(DynamodbFactory.util.normalizeItem(data.Table || {}));
					});

					break;

				case 'CREATE_TABLE':

					if (typeof $this.local_events['beforeRequest'] === "function") $this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

					$this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
						if (err) return reject(err);

						fullfill(data.TableDescription || []);
					});

					break;

				case 'SHOW_TABLES':

					if (typeof $this.local_events['beforeRequest'] === "function") $this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

					$this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
						if (err) return reject(err);

						fullfill(data.TableNames || []);
					});

					break;

				case 'BATCHINSERT':

					if (typeof $this.local_events['beforeRequest'] === "function") $this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

					$this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
						if (err) return reject(err);

						fullfill(data);
					});

					break;
				case 'INSERT':
					$this.describeTable(sqp.dynamodb.TableName, function (err, data) {
						if (err) return reject(err);

						for (var i in data.Table.KeySchema) {
							$this.if(data.Table.KeySchema[i].AttributeName).not_exists();
						}

						sqp.dynamodb.Expected = DynamodbFactory.util.buildExpected($this.ifFilter);

						if (typeof $this.local_events['beforeRequest'] === "function") $this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

						$this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
							if (err) return reject(err);

							fullfill(DynamodbFactory.util.normalizeItem(data.Attributes || {}));
						});
					});
					break;
				case 'UPDATE':
					$this.describeTable(sqp.dynamodb.TableName, function (err, data) {
						if (err) return reject(err);

						if (Object.keys(sqp.dynamodb.Expected).length !== Object.keys(data.Table.KeySchema).length) return reject({ errorCode: 'WHERE_SCHEMA_INVALID' });

						for (var i in data.Table.KeySchema) {
							if (!sqp.dynamodb.Expected.hasOwnProperty(data.Table.KeySchema[i].AttributeName)) return reject({ errorCode: 'WHERE_SCHEMA_INVALID' });
						}

						if (typeof $this.local_events['beforeRequest'] === "function") $this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

						$this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
							if (err) return reject(err);

							fullfill(DynamodbFactory.util.normalizeItem(data.Attributes || {}));
						});
					});
					break;
				case 'REPLACE':
				case 'DELETE':

					if (typeof $this.local_events['beforeRequest'] === "function") $this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

					$this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
						if (err) return reject(err);

						fullfill(DynamodbFactory.util.normalizeItem(data.Attributes || {}));
					});

					break;
				case 'SELECT':
				case 'SCAN':

					if (typeof $this.local_events['beforeRequest'] === "function") $this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

					$this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
						if (err) return reject(err);

						this.LastEvaluatedKey = data.LastEvaluatedKey === undefined ? null : data.LastEvaluatedKey;

						fullfill(DynamodbFactory.util.parse({ L: (data.Items || []).map(function (item) {
								return { 'M': item };
							})
						}));
					});
					break;
				case 'DROP_TABLE':
				case 'DROP_INDEX':

					if (typeof $this.local_events['beforeRequest'] === "function") $this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

					$this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
						if (err) return reject(err);

						fullfill(data.TableDescription || []);
					});
					break;
				default:
					reject({ errorCode: 'UNSUPPORTED_QUERY_TYPE' });
			}
		});
	}

	switch (sqp.statement) {
		case 'DESCRIBE_TABLE':
			if (typeof this.local_events['beforeRequest'] === "function") this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

			this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
				if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

				typeof callback !== "function" ? null : callback.apply(this, [err, data.Table, data]);
			});
			break;

		case 'SHOW_TABLES':
			if (typeof this.local_events['beforeRequest'] === "function") this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

			this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
				if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

				typeof callback !== "function" ? null : callback.apply(this, [err, data.TableNames, data]);
			});
			break;

		case 'CREATE_TABLE':
			if (typeof this.local_events['beforeRequest'] === "function") this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

			this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
				if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

				typeof callback !== "function" ? null : callback.apply(this, [err, data.TableDescription, data]);
			});
			break;

		case 'BATCHINSERT':
			if (typeof this.local_events['beforeRequest'] === "function") this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

			this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
				if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

				typeof callback !== "function" ? null : callback.apply(this, [err, data, data]);
			});
			break;
		case 'INSERT':

			this.describeTable(sqp.dynamodb.TableName, function (err, data) {
				if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

				for (var i in data.Table.KeySchema) {
					this.if(data.Table.KeySchema[i].AttributeName).not_exists();
				}

				sqp.dynamodb.Expected = DynamodbFactory.util.buildExpected(this.ifFilter);

				if (typeof this.local_events['beforeRequest'] === "function") this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

				this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
					if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

					typeof callback !== "function" ? null : callback.apply(this, [err, DynamodbFactory.util.normalizeItem(data.Attributes || {}), data]);
				});
			});

			break;
		case 'UPDATE':

			this.describeTable(sqp.dynamodb.TableName, function (err, data) {
				if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

				if (Object.keys(sqp.dynamodb.Expected).length !== Object.keys(data.Table.KeySchema).length) return callback({ errorCode: 'WHERE_SCHEMA_INVALID' });

				for (var i in data.Table.KeySchema) {
					if (!sqp.dynamodb.Expected.hasOwnProperty(data.Table.KeySchema[i].AttributeName)) return callback({ errorCode: 'WHERE_SCHEMA_INVALID' });
				}

				if (typeof this.local_events['beforeRequest'] === "function") this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

				this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
					if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

					typeof callback !== "function" ? null : callback.apply(this, [err, DynamodbFactory.util.normalizeItem(data.Attributes || {}), data]);
				});
			});
			break;
		case 'REPLACE':
		case 'DELETE':

			if (typeof this.local_events['beforeRequest'] === "function") this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

			this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
				if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

				typeof callback !== "function" ? null : callback.apply(this, [err, DynamodbFactory.util.normalizeItem(data.Attributes || {}), data]);
			});

			break;
		case 'SELECT':
		case 'SCAN':

			if (typeof this.local_events['beforeRequest'] === "function") this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

			this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
				if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

				this.LastEvaluatedKey = data.LastEvaluatedKey === undefined ? null : data.LastEvaluatedKey;

				typeof callback !== "function" ? null : callback.apply(this, [err, data.Explain ? data.Explain : DynamodbFactory.util.parse({ L: (data.Items || []).map(function (item) {
						return { 'M': item };
					})
				}), data]);
			});
			break;
		case 'DROP_TABLE':
		case 'DROP_INDEX':

			if (typeof $this.local_events['beforeRequest'] === "function") $this.local_events['beforeRequest'](sqp.operation, sqp.dynamodb);

			$this.routeCall(sqp.operation, sqp.dynamodb, true, function (err, data) {
				if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

				typeof callback !== "function" ? null : callback.apply(this, [err, data.TableDescription, data]);
			});
			break;
		case 'SCAN_DUMP_STREAM':

			var Readable = __webpack_require__(35).Readable;
			var inStream = new Readable({
				//objectMode: true,
				read: function read(size) {}
			});

			if (typeof callback === "function") {
				callback(null, inStream);
			} else {
				return inStream;
			}

			;(function recursive_call($lastKey) {
				sqp.dynamodb.ExclusiveStartKey = $lastKey;
				$this.routeCall('scan', sqp.dynamodb, true, function (err, data) {

					if (err) {
						inStream.emit('error', err);
						inStream.push(null);
						return;
					}

					data.Items.map(function (d) {
						inStream.push("INSERT INTO `" + sqp.dynamodb.TableName + "` VALUES (" + DynamodbFactory.util.toSQLJSON(d) + ")\n");
					});

					if (!data.LastEvaluatedKey) {
						// reached end
						inStream.push(null);
						return;
					}

					var $this = this;
					//setTimeout(function() {
					recursive_call(data.LastEvaluatedKey);
					//},100);
				});
			})(null);

			break;
		default:
			return callback({ errorCode: 'UNSUPPORTED_QUERY_TYPE' });
			break;
	}
};
//////////

Request.prototype.resume = function (from) {
	this.ExclusiveStartKey = from;
	return this;
};
Request.prototype.compare = function ($comparison, $value, $value2) {
	if (this.pendingFilter !== null) {
		this.whereFilter[this.pendingFilter] = {
			operator: $comparison,
			type: DynamodbFactory.util.anormalizeType($value),
			value: $value,
			value2: $value2
		};
		this.whereFilterExpression.push({
			attribute: this.pendingFilter,
			operator: $comparison,
			type: DynamodbFactory.util.anormalizeType($value),
			value: $value,
			value2: $value2
		});
		this.pendingFilter = null;
		return this;
	}

	if (this.pendingIf !== null) {
		if ($comparison == 'EQ') {
			this.ifFilter[this.pendingIf] = new DynamodbFactory.util.Raw({ Exists: true, Value: DynamodbFactory.util.stringify($value) });
		} else {
			this.ifFilter[this.pendingIf] = { operator: $comparison, type: DynamodbFactory.util.anormalizeType($value), value: $value, value2: $value2 };
		}

		this.ifConditionExpression.push({
			attribute: this.pendingIf,
			operator: $comparison,
			type: DynamodbFactory.util.anormalizeType($value),
			value: $value,
			value2: $value2
		});

		this.pendingIf = null;
		return this;
	}

	this.whereOther[this.pendingKey] = { operator: $comparison, type: DynamodbFactory.util.anormalizeType($value), value: $value, value2: $value2 };
	this.pendingKey = null;
	return this;
};

Request.prototype.filter = function ($key) {
	this.pendingFilter = $key;
	return this;
};
// alias
Request.prototype.having = Request.prototype.filter;

Request.prototype.if = function ($key) {
	this.pendingIf = $key;
	return this;
};

Request.prototype.limit = function ($limit) {
	this.limit_value = $limit;
	return this;
};

// comparison functions
Request.prototype.eq = function ($value) {
	if (this.pendingFilter !== null) return this.compare('EQ', $value);

	if (this.pendingIf !== null) return this.compare('EQ', $value);

	this.whereKey[this.pendingKey] = DynamodbFactory.util.stringify($value);

	this.pendingKey = null;

	return this;
};
Request.prototype.le = function ($value) {
	return this.compare('LE', $value);
};
Request.prototype.lt = function ($value) {
	return this.compare('LT', $value);
};
Request.prototype.ge = function ($value) {
	return this.compare('GE', $value);
};
Request.prototype.gt = function ($value) {
	return this.compare('GT', $value);
};
Request.prototype.begins_with = function ($value) {
	return this.compare('BEGINS_WITH', $value);
};
Request.prototype.between = function ($value1, $value2) {
	return this.compare('BETWEEN', $value1, $value2);
};

// QueryFilter only
Request.prototype.ne = function ($value) {
	return this.compare('NE', $value);
};
Request.prototype.not_null = function () {
	return this.compare('NOT_NULL');
};
Request.prototype.defined = Request.prototype.not_null;
Request.prototype.null = function ($value) {
	return this.compare('NULL');
};
Request.prototype.undefined = Request.prototype.null;
Request.prototype.contains = function ($value) {
	return this.compare('CONTAINS', $value);
};
Request.prototype.not_contains = function ($value) {
	return this.compare('NOT_CONTAINS', $value);
};
Request.prototype.in = function ($value) {
	return this.compare('IN', $value);
};

// Expected only
Request.prototype.exists = function () {
	if (this.pendingIf !== null) {
		this.ifFilter[this.pendingIf] = new DynamodbFactory.util.Raw({ Exists: true });

		this.pendingIf = null;
		return this;
	}
	return this;
};
Request.prototype.not_exists = function () {
	if (this.pendingIf !== null) {
		this.ifFilter[this.pendingIf] = new DynamodbFactory.util.Raw({ Exists: false });
		this.pendingIf = null;
		return this;
	}
	return this;
};

// helper functions ...

Request.prototype.registerExpressionAttributeName = function (item, ALLOW_DOT) {
	var $this = this;

	if ($this.ExpressionAttributeNames === undefined) $this.ExpressionAttributeNames = {};

	if (!ALLOW_DOT) return DynamodbFactory.util.expression_name_split(item).map(function (original_attName) {

		var attName = original_attName.split('-').join('_minus_').split('.').join('_dot_'); // "-","." not allowed
		var attSpecialName = '#' + attName;

		if (attName.indexOf('[') !== -1) {
			attSpecialName = attName.split('[').map(function (v) {
				if (v[v.length - 1] == ']') return v;

				$this.ExpressionAttributeNames['#' + v] = v;
				return '#' + v;
			}).join('[');
		} else {
			if (attSpecialName[0] === '#') $this.ExpressionAttributeNames[attSpecialName] = original_attName;
		}

		return attSpecialName;
	}).join('.');

	//if (ALLOW_DOT)
	var original_attName = item;
	var attName = original_attName.split('-').join('_minus_').split('.').join('_dot_'); // "-","." not allowed

	var attSpecialName = '#' + attName;

	if (attName.indexOf('[') !== -1) {
		attSpecialName = attName.split('[').map(function (v) {
			if (v[v.length - 1] == ']') return v;

			$this.ExpressionAttributeNames['#' + v] = v;
			return '#' + v;
		}).join('[');
	} else {
		if (attSpecialName[0] === '#') $this.ExpressionAttributeNames[attSpecialName] = original_attName;
	}

	return attSpecialName;
};
Request.prototype.registerExpressionAttributeValue = function (original_attName, value) {
	if (this.ExpressionAttributeValues === undefined) this.ExpressionAttributeValues = {};

	var attName = original_attName.split('-').join('_minus_').split('"').join("_quote_"); // "-" not allowed

	var attNameValue = ':' + attName.split('.').join('_').split('[').join('_idx_').split(']').join('');

	var attNameValueVersion = 1;
	while (this.ExpressionAttributeValues.hasOwnProperty(attNameValue + '_v' + attNameValueVersion)) {
		attNameValueVersion++;
	}this.ExpressionAttributeValues[attNameValue + '_v' + attNameValueVersion] = DynamodbFactory.util.stringify(value);

	return attNameValue + '_v' + attNameValueVersion;
};

Request.prototype.buildProjectionExpression = function () {
	if (!this.AttributesToGet.length) return;

	var $this = this;

	this.ProjectionExpression = this.AttributesToGet.map(function (item) {
		return $this.registerExpressionAttributeName(item);
	}).join(', ');
};

//
Request.prototype.buildKeyConditionExpression = function (idx) {
	var $this = this;
	var ret = [];
	this.KeyConditionExpression = Object.keys(this.whereKey).map(function (key) {
		return $this.registerExpressionAttributeName(key, true) + ' ' + '=' + ' ' + $this.registerExpressionAttributeValue(key, DynamodbFactory.util.normalizeItem({ value: $this.whereKey[key] }).value, true);
	}).concat(Object.keys(this.whereOther).map(function (key) {
		var whereFilter = $this.whereOther[key];

		switch (filterOperators[whereFilter.operator]) {
			case '=':
			case '<':
			case '<=':
			case '>':
			case '>=':
				return $this.registerExpressionAttributeName(key, true) + ' ' + filterOperators[whereFilter.operator] + ' ' + $this.registerExpressionAttributeValue(key, whereFilter.value, true);
				break;

			case 'BETWEEN':
				return $this.registerExpressionAttributeName(key, true) + ' BETWEEN ' + $this.registerExpressionAttributeValue(key + '_1', whereFilter.value, true) + ' AND ' + $this.registerExpressionAttributeValue(key + '_2', whereFilter.value2, true);
				break;

			case 'begins_with':
				return 'begins_with(' + $this.registerExpressionAttributeName(key, true) + ', ' + $this.registerExpressionAttributeValue(key, whereFilter.value, true) + ')';
				break;

		}
	})).map(function (v) {
		return '( ' + v + ' )';
	}).join(" AND \n");
};

Request.prototype.buildFilterExpression = function (idx) {
	var $this = this;

	if (!this.whereFilterExpression.length) return;

	var ret = [];
	this.FilterExpression = this.whereFilterExpression.map(function (whereFilter) {
		var key = whereFilter.attribute;

		switch (filterOperators[whereFilter.operator]) {
			case '=':
			case '<>':
			case '<':
			case '<=':
			case '>':
			case '>=':
				return $this.registerExpressionAttributeName(whereFilter.attribute) + ' ' + filterOperators[whereFilter.operator] + ' ' + $this.registerExpressionAttributeValue(whereFilter.attribute, whereFilter.value);
				break;

			case 'BETWEEN':
				return $this.registerExpressionAttributeName(whereFilter.attribute) + ' BETWEEN ' + $this.registerExpressionAttributeValue(whereFilter.attribute + '_1', whereFilter.value) + ' AND ' + $this.registerExpressionAttributeValue(whereFilter.attribute + '_2', whereFilter.value2);
				break;

			case 'IN':
				return $this.registerExpressionAttributeName(whereFilter.attribute) + ' IN (' + whereFilter.value.map(function (v, idx) {
					return $this.registerExpressionAttributeValue(whereFilter.attribute + '_' + idx, v);
				}).join(',') + ' )';
				break;

			case 'attribute_exists':
				return 'attribute_exists(' + $this.registerExpressionAttributeName(whereFilter.attribute) + ')';
				break;

			case 'attribute_not_exists':
				return 'attribute_not_exists(' + $this.registerExpressionAttributeName(whereFilter.attribute) + ')';
				break;

			case 'begins_with':
				return 'begins_with(' + $this.registerExpressionAttributeName(whereFilter.attribute) + ', ' + $this.registerExpressionAttributeValue(whereFilter.attribute, whereFilter.value) + ')';
				break;

			case 'contains':
				return 'contains(' + $this.registerExpressionAttributeName(whereFilter.attribute) + ', ' + $this.registerExpressionAttributeValue(whereFilter.attribute, whereFilter.value) + ')';
				break;

			case 'not_contains':
				return 'NOT contains(' + $this.registerExpressionAttributeName(whereFilter.attribute) + ', ' + $this.registerExpressionAttributeValue(whereFilter.attribute, whereFilter.value) + ')';
				break;
			//attribute_type (path, type)
			//size (path)
		}
	}).map(function (v) {
		return '( ' + v + ' )';
	}).join(" AND \n");
};

// RAW functions, used by dynamodb-sql
Request.prototype.RawIndexName = function (value) {
	this.IndexName = value;
	return this;
};
Request.prototype.RawScanIndexForward = function (value) {
	this.ScanIndexForward = value;
	return this;
};
Request.prototype.RawLimit = function (value) {
	this.limit_value = value;
	return this;
};
Request.prototype.RawConsistentRead = function (value) {
	this.ConsistentRead = value;
	return this;
};
Request.prototype.RawKeyConditionExpression = function (value) {
	this.KeyConditionExpression = value;
	return this;
};
Request.prototype.RawExpressionAttributeNames = function (value) {
	this.ExpressionAttributeNames = value;
	return this;
};
Request.prototype.RawExpressionAttributeValues = function (value) {
	this.ExpressionAttributeValues = value;
	return this;
};
Request.prototype.RawProjectionExpression = function (value) {
	this.ProjectionExpression = value;
	return this;
};
Request.prototype.RawFilterExpression = function (value) {
	this.FilterExpression = value;
	return this;
};

DynamoDB.Raw = function (data) {
	this.data = data;
};
DynamoDB.Raw.prototype.getRawData = function () {
	return this.data;
};
module.exports = DynamodbFactory;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var util = __webpack_require__(6);

//util.config.empty_string_replace_as = o.empty_string_replace_as;

util.config.stringset_parse_as_set = true;
util.config.numberset_parse_as_set = true;
util.config.binaryset_parse_as_set = true;

function Batch($client, config) {

	this.events = config.events; // global events
	this.describeTables = config.describeTables;
	this.return_explain = config.return_explain;
	this.local_events = {};
	this.client = $client;

	this.current_table = undefined;
	this.err = undefined;
	this.payload = {
		RequestItems: {}
	};
}

Batch.prototype.routeCall = function (method, params, reset, callback) {
	var $this = this;
	this.events.beforeRequest.apply(this, [method, params]);

	this.client[method](params, function (err, data) {

		if (err) $this.events.error.apply($this, [method, err, params]);

		// 	if ((data || {}).hasOwnProperty('ConsumedCapacity') )
		// 		$this.ConsumedCapacity = data.ConsumedCapacity

		// 	if ( reset === true )
		// 		$this.reset()

		callback.apply($this, [err, data]);
	});
};

Batch.prototype.resume = function () {};
Batch.prototype.table = function (tbl_name) {
	if (this.err) return this;

	this.current_table = tbl_name;
	return this;
};

Batch.prototype.item = function () {};

Batch.prototype.put = function (item) {
	if (this.err) return this;

	if (!this.current_table) {
		this.err = { code: 'INVALID_TABLE', message: 'use .table( tbl_name ) before .put()' };
		return this;
	}

	if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object') {
		this.err = { code: 'INVALID_ITEM', message: '.put( item ) - must pass in an Object' };
		return this;
	}

	if (!this.payload.RequestItems.hasOwnProperty(this.current_table)) this.payload.RequestItems[this.current_table] = [];

	this.payload.RequestItems[this.current_table].push({
		PutRequest: {
			Item: util.stringify(item).M
		}
	});

	return this;
};

Batch.prototype.delete = function (item) {
	if (this.err) return this;

	if (!this.current_table) {
		this.err = { code: 'INVALID_TABLE', message: 'use .table( tbl_name ) before .delete()' };
		return this;
	}

	if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object') {
		this.err = { code: 'INVALID_ITEM', message: '.del( item ) must pass in an Object' };
		return this;
	}

	if (!this.payload.RequestItems.hasOwnProperty(this.current_table)) this.payload.RequestItems[this.current_table] = [];

	this.payload.RequestItems[this.current_table].push({
		DeleteRequest: {
			Key: util.stringify(item).M
		}
	});

	return this;
};
Batch.prototype.del = Batch.prototype.delete;

Batch.prototype.get = function (item) {
	if (this.err) return this;

	if (!this.current_table) {
		this.err = { code: 'INVALID_TABLE', message: 'use .table( tbl_name ) before .get()' };
		return this;
	}

	if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object') {
		this.err = { code: 'INVALID_ITEM', message: '.get( item ) - must pass in an Object' };
		return this;
	}

	if (!this.payload.RequestItems.hasOwnProperty(this.current_table)) this.payload.RequestItems[this.current_table] = {
		Keys: [],
		// ExpressionAttributeNames
		// ProjectionExpression: ""
		// AttributesToGet: []
		ConsistentRead: false
	};

	this.payload.RequestItems[this.current_table].Keys.push(util.stringify(item).M);

	return this;
};

Batch.prototype.consistent_read = function ($value) {
	if (this.err) return this;

	if (!this.current_table) {
		this.err = { code: 'INVALID_TABLE', message: 'use .table( tbl_name ) before .consistent_read()' };
		return this;
	}

	if (value === undefined) {
		value = true;
	} else {
		var value = JSON.parse(JSON.stringify($value));
	}

	if (!this.payload.RequestItems.hasOwnProperty(this.current_table)) {
		this.payload.RequestItems[this.current_table] = {
			Keys: [],
			// ExpressionAttributeNames
			// ProjectionExpression: ""
			// AttributesToGet: []
			ConsistentRead: value
		};
	} else {
		this.payload.RequestItems[this.current_table].ConsistentRead = value;
	}

	return this;
};

Batch.prototype.read = function (cb) {
	if (this.err) return cb(this.err);

	var $this = this;

	var $thisQuery = this.payload;

	if (typeof this.local_events['beforeRequest'] === "function") this.local_events['beforeRequest']('batchWriteItem', $thisQuery);

	// @todo: implement promise

	this.routeCall('batchGetItem', $thisQuery, true, function (err, data) {
		if (err) return typeof cb !== "function" ? null : cb.apply(this, [err, false]);

		var ret = {};

		Object.keys(data.Responses).map(function (tbl_name) {
			if (!ret.hasOwnProperty(tbl_name)) ret[tbl_name] = [];

			ret[tbl_name] = util.parse({ L: (data.Responses[tbl_name] || []).map(function (item) {
					return { 'M': item };
				})
			});
		});

		this.rawUnprocessedKeys = data.UnprocessedKeys;

		typeof cb !== "function" ? null : cb.apply(this, [err, ret, data]);
	});
};
Batch.prototype.write = function (cb) {

	if (this.err) return cb(this.err);

	var $this = this;

	var $thisQuery = this.payload;

	if (typeof this.local_events['beforeRequest'] === "function") this.local_events['beforeRequest']('batchWriteItem', $thisQuery);

	// @todo: implement promise

	//console.log(JSON.stringify($thisQuery, null, "\t"))

	this.routeCall('batchWriteItem', $thisQuery, true, function (err, data) {
		if (err) return typeof cb !== "function" ? null : cb.apply(this, [err, false]);

		typeof cb !== "function" ? null : cb.apply(this, [err, data, data]);
	});
};

module.exports = Batch;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keywords = ["abort", "absolute", "action", "add", "after", "agent", "aggregate", "all", "allocate", "alter", "analyze", "and", "any", "archive", "are", "array", "as", "asc", "ascii", "asensitive", "assertion", "asymmetric", "at", "atomic", "attach", "attribute", "auth", "authorization", "authorize", "auto", "avg", "back", "backup", "base", "batch", "before", "begin", "between", "bigint", "binary", "bit", "blob", "block", "boolean", "both", "breadth", "bucket", "bulk", "by", "byte", "call", "called", "calling", "capacity", "cascade", "cascaded", "case", "cast", "catalog", "char", "character", "check", "class", "clob", "close", "cluster", "clustered", "clustering", "clusters", "coalesce", "collate", "collation", "collection", "column", "columns", "combine", "comment", "commit", "compact", "compile", "compress", "condition", "conflict", "connect", "connection", "consistency", "consistent", "constraint", "constraints", "constructor", "consumed", "continue", "convert", "copy", "corresponding", "count", "counter", "create", "cross", "cube", "current", "cursor", "cycle", "data", "database", "date", "datetime", "day", "deallocate", "dec", "decimal", "declare", "default", "deferrable", "deferred", "define", "defined", "definition", "delete", "delimited", "depth", "deref", "desc", "describe", "descriptor", "detach", "deterministic", "diagnostics", "directories", "disable", "disconnect", "distinct", "distribute", "do", "domain", "double", "drop", "dump", "duration", "dynamic", "each", "element", "else", "elseif", "empty", "enable", "end", "equal", "equals", "error", "escape", "escaped", "eval", "evaluate", "exceeded", "except", "exception", "exceptions", "exclusive", "exec", "execute", "exists", "exit", "explain", "explode", "export", "expression", "extended", "external", "extract", "fail", "false", "family", "fetch", "fields", "file", "filter", "filtering", "final", "finish", "first", "fixed", "flattern", "float", "for", "force", "foreign", "format", "forward", "found", "free", "from", "full", "function", "functions", "general", "generate", "get", "glob", "global", "go", "goto", "grant", "greater", "group", "grouping", "handler", "hash", "have", "having", "heap", "hidden", "hold", "hour", "identified", "identity", "if", "ignore", "immediate", "import", "in", "including", "inclusive", "increment", "incremental", "index", "indexed", "indexes", "indicator", "infinite", "initially", "inline", "inner", "innter", "inout", "input", "insensitive", "insert", "instead", "int", "integer", "intersect", "interval", "into", "invalidate", "is", "isolation", "item", "items", "iterate", "join", "key", "keys", "lag", "language", "large", "last", "lateral", "lead", "leading", "leave", "left", "length", "less", "level", "like", "limit", "limited", "lines", "list", "load", "local", "localtime", "localtimestamp", "location", "locator", "lock", "locks", "log", "loged", "long", "loop", "lower", "map", "match", "materialized", "max", "maxlen", "member", "merge", "method", "metrics", "min", "minus", "minute", "missing", "mod", "mode", "modifies", "modify", "module", "month", "multi", "multiset", "name", "names", "national", "natural", "nchar", "nclob", "new", "next", "no", "none", "not", "null", "nullif", "number", "numeric", "object", "of", "offline", "offset", "old", "on", "online", "only", "opaque", "open", "operator", "option", "or", "order", "ordinality", "other", "others", "out", "outer", "output", "over", "overlaps", "override", "owner", "pad", "parallel", "parameter", "parameters", "partial", "partition", "partitioned", "partitions", "path", "percent", "percentile", "permission", "permissions", "pipe", "pipelined", "plan", "pool", "position", "precision", "prepare", "preserve", "primary", "prior", "private", "privileges", "procedure", "processed", "project", "projection", "property", "provisioning", "public", "put", "query", "quit", "quorum", "raise", "random", "range", "rank", "raw", "read", "reads", "real", "rebuild", "record", "recursive", "reduce", "ref", "reference", "references", "referencing", "regexp", "region", "reindex", "relative", "release", "remainder", "rename", "repeat", "replace", "request", "reset", "resignal", "resource", "response", "restore", "restrict", "result", "return", "returning", "returns", "reverse", "revoke", "right", "role", "roles", "rollback", "rollup", "routine", "row", "rows", "rule", "rules", "sample", "satisfies", "save", "savepoint", "scan", "schema", "scope", "scroll", "search", "second", "section", "segment", "segments", "select", "self", "semi", "sensitive", "separate", "sequence", "serializable", "session", "set", "sets", "shard", "share", "shared", "short", "show", "signal", "similar", "size", "skewed", "smallint", "snapshot", "some", "source", "space", "spaces", "sparse", "specific", "specifictype", "split", "sql", "sqlcode", "sqlerror", "sqlexception", "sqlstate", "sqlwarning", "start", "state", "static", "status", "storage", "store", "stored", "stream", "string", "struct", "style", "sub", "submultiset", "subpartition", "substring", "subtype", "sum", "super", "symmetric", "synonym", "system", "table", "tablesample", "temp", "temporary", "terminated", "text", "than", "then", "throughput", "time", "timestamp", "timezone", "tinyint", "to", "token", "total", "touch", "trailing", "transaction", "transform", "translate", "translation", "treat", "trigger", "trim", "true", "truncate", "ttl", "tuple", "type", "under", "undo", "union", "unique", "unit", "unknown", "unlogged", "unnest", "unprocessed", "unsigned", "until", "update", "upper", "url", "usage", "use", "user", "users", "using", "uuid", "vacuum", "value", "valued", "values", "varchar", "variable", "variance", "varint", "varying", "view", "views", "virtual", "void", "wait", "when", "whenever", "where", "while", "window", "with", "within", "without", "work", "wrapped", "write", "year", "zone"];

var _expr_attribute = function _expr_attribute(attr) {
	return attr.split('.').join("_dot_").split('-').join("_minus_");
};

var util = __webpack_require__(6);

//util.config.empty_string_replace_as = o.empty_string_replace_as;

util.config.stringset_parse_as_set = true;
util.config.numberset_parse_as_set = true;
util.config.binaryset_parse_as_set = true;

function Transact($client, config) {

	this.err = null;
	this.reset();
	this.TransactItems = [];

	this.events = config.events; // global events
	this.describeTables = config.describeTables;
	this.return_explain = config.return_explain;
	this.local_events = {};
	this.client = $client;
}
Transact.prototype.reset = function () {
	this.pending = {
		if: null,
		ExpressionAttributeNames: {},
		ExpressionAttributeValues: {},
		ConditionExpression: []
	};
};
Transact.prototype.table = function ($tableName) {
	this.reset();
	this.pending.tableName = $tableName;
	return this;
};
Transact.prototype.debug = function () {
	console.log("pending=", JSON.stringify(this.pending, null, "\t"));
	return this;
};
Transact.prototype.where = function (key) {
	this.pending.where = key;
	return this;
};
Transact.prototype.eq = function (value) {
	if (this.pending.where) {
		if (!this.pending.hasOwnProperty('wheres')) this.pending.wheres = {};

		this.pending.wheres[this.pending.where] = value;
		delete this.pending.where;
	}

	if (this.pending.if !== null) {

		var _name = this._namefy(this.pending.if.attr, '#ifeq_');
		var _vname = this._valuefy(this.pending.if.attr, ':ifeq_', value);
		this.pending.ConditionExpression.push("( " + _name + " = " + _vname + " )");
		this.pending.if = null;
		return this;
	}

	return this;
};

Transact.prototype._namefy = function (name, prefix) {
	var $this = this;
	if (keywords.indexOf(name.toLowerCase()) === -1 && name.match(/^[a-zA-Z]+$/) !== null) return name;

	var _att_names = [];
	name.split('.').map(function (n, idx) {

		// if its an array path, remove it and add it later
		// for (const match of "hello[1][12][14]".matchAll(/([^\[]*)\[([0-9]+)\]/gs)) { console.log(match) }
		if (n.indexOf('[') === -1) {
			var _att_name = prefix + idx + _expr_attribute(n);
			$this.pending.ExpressionAttributeNames[_att_name] = n;
			_att_names.push(_att_name);
		} else {
			var _arr_path = n.slice(n.indexOf('['));
			n = n.slice(0, n.indexOf('['));
			var _att_name = prefix + idx + _expr_attribute(n);
			$this.pending.ExpressionAttributeNames[_att_name] = n;
			_att_names.push(_att_name + _arr_path);
		}
	});

	return _att_names.join('.');
};
Transact.prototype._valuefy = function (name, prefix, value) {
	var _att_name = prefix + name.split('-').join('_minus_').split('.').join("_dot_").split('[').join("_sqp1_").split(']').join("_sqp1_");

	this.pending.ExpressionAttributeValues[_att_name] = util.stringify(value);
	return _att_name;
};

Transact.prototype.if = function (attr) {
	this.pending.if = {
		attr: attr
	};
	return this;
};
Transact.prototype.not = function () {
	if (this.pending.if !== null) this.pending.if.not = true;

	return this;
};
Transact.prototype.exists = function (value) {
	if (this.pending.if !== null) {

		if (this.pending.if.not === true) {
			var _name = this._namefy(this.pending.if.attr, '#ifnotexists_');
			this.pending.ConditionExpression.push("attribute_not_exists( " + _name + " )");
		} else {
			var _name = this._namefy(this.pending.if.attr, '#ifexists_');
			this.pending.ConditionExpression.push("attribute_exists( " + _name + " )");
		}
		this.pending.if = null;

		return this;
	}
	return this;
};
Transact.prototype.ne = function (value) {
	if (this.pending.if !== null) {

		var _name = this._namefy(this.pending.if.attr, '#ifne_');
		var _vname = this._valuefy(this.pending.if.attr, ':ifne_', value);
		this.pending.ConditionExpression.push("( " + _name + " <>  " + _vname + " )");
		this.pending.if = null;
		return this;
	}
	return this;
};
Transact.prototype.ge = function (value) {
	if (this.pending.if !== null) {

		var _name = this._namefy(this.pending.if.attr, '#ifge_');
		var _vname = this._valuefy(this.pending.if.attr, ':ifge_', value);
		this.pending.ConditionExpression.push("( " + _name + " >= " + _vname + " )");
		this.pending.if = null;
		return this;
	}
	return this;
};
Transact.prototype.gt = function (value) {
	if (this.pending.if !== null) {

		var _name = this._namefy(this.pending.if.attr, '#ifgt_');
		var _vname = this._valuefy(this.pending.if.attr, ':ifgt_', value);
		this.pending.ConditionExpression.push("( " + _name + " > " + _vname + " )");
		this.pending.if = null;
		return this;
	}
	return this;
};
Transact.prototype.le = function (value) {
	if (this.pending.if !== null) {

		var _name = this._namefy(this.pending.if.attr, '#ifle_');
		var _vname = this._valuefy(this.pending.if.attr, ':ifle_', value);
		this.pending.ConditionExpression.push("( " + _name + " <= " + _vname + " )");
		this.pending.if = null;
		return this;
	}
	return this;
};
Transact.prototype.lt = function (value) {
	if (this.pending.if !== null) {

		var _name = this._namefy(this.pending.if.attr, '#iflt_');
		var _vname = this._valuefy(this.pending.if.attr, ':iflt_', value);
		this.pending.ConditionExpression.push("( " + _name + " < " + _vname + " )");
		this.pending.if = null;
		return this;
	}
	return this;
};
Transact.prototype.between = function (v1, v2) {
	if (this.pending.if !== null) {

		if (this.pending.if.not === true) {
			var _name = this._namefy(this.pending.if.attr, '#ifnotbtw_');
			var _v1 = this._valuefy(this.pending.if.attr, ':ifnotbtwlo_', v1);
			var _v2 = this._valuefy(this.pending.if.attr, ':ifnotbtwhi_', v2);
			this.pending.ConditionExpression.push("(NOT ( " + _name + " BETWEEN " + _v1 + " AND " + _v2 + " ))");
		} else {
			var _name = this._namefy(this.pending.if.attr, '#ifbtw_');
			var _v1 = this._valuefy(this.pending.if.attr, ':ifbtwlo_', v1);
			var _v2 = this._valuefy(this.pending.if.attr, ':ifbtwhi_', v2);
			this.pending.ConditionExpression.push("( " + _name + " BETWEEN " + _v1 + " AND " + _v2 + " )");
		}
		this.pending.if = null;

		return this;
	}
	return this;
};
Transact.prototype.in = function (value) {

	var $this = this;

	if (this.pending.if !== null) {

		if (this.pending.if.not === true) {
			var _name = this._namefy(this.pending.if.attr, '#ifnotin_');

			var ins = [];
			value.map(function (v, idx) {
				var _vname = $this._valuefy($this.pending.if.attr, ':ifnotin' + idx + '_', v);
				ins.push(_vname);
			});

			this.pending.ConditionExpression.push("(NOT ( " + _name + " IN (" + ins.join(' , ') + ") ))");
		} else {
			var _name = this._namefy(this.pending.if.attr, '#ifin_');

			var ins = [];
			value.map(function (v, idx) {
				var _vname = $this._valuefy($this.pending.if.attr, ':ifin' + idx + '_', v);
				ins.push(_vname);
			});

			this.pending.ConditionExpression.push("( " + _name + " IN (" + ins.join(' , ') + ") )");
		}

		this.pending.if = null;

		return this;
	}
	return this;
};

Transact.prototype.contains = function (value) {
	if (this.pending.if !== null) {

		if (this.pending.if.not === true) {
			var _name = this._namefy(this.pending.if.attr, '#ifnotcontains_');
			var _vname = this._valuefy(this.pending.if.attr, ':ifnotcontains_', value);
			this.pending.ConditionExpression.push("( NOT contains( " + _name + " , " + _vname + ") )");
		} else {
			var _name = this._namefy(this.pending.if.attr, '#ifcontains_');
			var _vname = this._valuefy(this.pending.if.attr, ':ifcontains_', value);
			this.pending.ConditionExpression.push("contains( " + _name + " , " + _vname + " )");
		}
		this.pending.if = null;

		return this;
	}
	return this;
};

Transact.prototype.begins_with = function (value) {
	if (this.pending.if !== null) {

		if (this.pending.if.not === true) {
			var _name = this._namefy(this.pending.if.attr, '#ifnotbw_');
			var _vname = this._valuefy(this.pending.if.attr, ':ifnotbw_', value);
			this.pending.ConditionExpression.push("(NOT begins_with( " + _name + " , " + _vname + " ))");
		} else {
			var _name = this._namefy(this.pending.if.attr, '#ifbw_');
			var _vname = this._valuefy(this.pending.if.attr, ':ifbw_', value);
			this.pending.ConditionExpression.push("begins_with( " + _name + " , " + _vname + " )");
		}
		this.pending.if = null;

		return this;
	}
	return this;
};

Transact.prototype.insert = function (item) {
	if (this.err) return this;

	var $this = this;

	if (!this.describeTables.hasOwnProperty(this.pending.tableName)) {
		this.err = { errorMessage: "transact() needs to know table schema, please use .schema() to define it" };
		return this;
	}

	var describeTable = this.describeTables[this.pending.tableName];

	for (var i in describeTable.KeySchema) {
		this.pending.ExpressionAttributeNames['#' + describeTable.KeySchema[i].AttributeName] = describeTable.KeySchema[i].AttributeName;
		this.pending.ConditionExpression.push("attribute_not_exists( #" + describeTable.KeySchema[i].AttributeName + ")");
	}

	var $thisQuery = {
		Put: {
			TableName: this.pending.tableName,
			Item: util.anormalizeItem(item),
			ConditionExpression: this.pending.ConditionExpression.join(' AND '),
			ExpressionAttributeNames: this.pending.ExpressionAttributeNames
		}

		//console.log("insert()", JSON.stringify($thisQuery, null, "\t"))

	};this.TransactItems.push($thisQuery);
	this.reset();

	return this;
};

Transact.prototype.insert_or_replace = function (item) {
	if (this.err) return this;

	var $this = this;

	var $thisQuery = {
		Put: {
			TableName: this.pending.tableName,
			Item: util.anormalizeItem(item)
			// ReturnValuesOnConditionCheckFailure: ALL_OLD | NONE
		}
		// ReturnValuesOnConditionCheckFailure: ALL_OLD | NONE
	};
	if (Object.keys(this.pending.ExpressionAttributeNames).length) $thisQuery.Put.ExpressionAttributeNames = this.pending.ExpressionAttributeNames;
	if (Object.keys(this.pending.ExpressionAttributeValues).length) $thisQuery.Put.ExpressionAttributeValues = this.pending.ExpressionAttributeValues;
	if (this.pending.ConditionExpression.length) $thisQuery.Put.ConditionExpression = this.pending.ConditionExpression.join(' AND ');

	this.TransactItems.push($thisQuery);
	//console.log("pending=", this.pending )
	this.reset();
	//console.log("insert_or_replace", JSON.stringify($thisQuery, null ,"\t") )
	return this;
};

Transact.prototype.replace = function (item) {
	if (this.err) return this;

	var $this = this;

	if (!this.describeTables.hasOwnProperty(this.pending.tableName)) {
		this.err = { errorMessage: "transact() needs to know table schema, please use .schema() to define it" };
		return this;
	}

	var describeTable = this.describeTables[this.pending.tableName];

	for (var i in describeTable.KeySchema) {
		this.pending.ExpressionAttributeNames['#' + describeTable.KeySchema[i].AttributeName] = describeTable.KeySchema[i].AttributeName;
		this.pending.ExpressionAttributeValues[':' + describeTable.KeySchema[i].AttributeName] = util.anormalizeItem(item)[[describeTable.KeySchema[i].AttributeName]];
		this.pending.ConditionExpression.push("( #" + describeTable.KeySchema[i].AttributeName + " = :" + describeTable.KeySchema[i].AttributeName + ")");
	}

	var $thisQuery = {
		Put: {
			TableName: this.pending.tableName,
			Item: util.anormalizeItem(item),
			ConditionExpression: this.pending.ConditionExpression.join(' AND '),
			ExpressionAttributeNames: this.pending.ExpressionAttributeNames,
			ExpressionAttributeValues: this.pending.ExpressionAttributeValues
		}

		//console.log("insert()", JSON.stringify($thisQuery, null, "\t"))

	};this.TransactItems.push($thisQuery);
	this.reset();
	return this;
};

Transact.prototype.insert_or_update = function (item) {
	if (this.err) return this;

	var $this = this;

	if (!this.describeTables.hasOwnProperty(this.pending.tableName)) {
		this.err = { errorMessage: "transact() needs to know table schema, please use .schema() to define it" };
		return this;
	}

	var describeTable = this.describeTables[this.pending.tableName];

	var item_copy = util.clone(item);

	var Key = {};
	var UpdateExpression = [];

	for (var i in describeTable.KeySchema) {
		Key[describeTable.KeySchema[i].AttributeName] = util.anormalizeItem(item)[[describeTable.KeySchema[i].AttributeName]];
		delete item_copy[describeTable.KeySchema[i].AttributeName];
	}

	Object.keys(item_copy).map(function (k) {
		$this.pending.ExpressionAttributeNames['#' + k] = k;
		$this.pending.ExpressionAttributeValues[':' + k] = util.anormalizeItem(item)[k];
		UpdateExpression.push("#" + k + " = :" + k);
	});

	var $thisQuery = {
		Update: {
			TableName: this.pending.tableName,
			Key: Key,
			// Item: util.anormalizeItem(item),
			ExpressionAttributeNames: this.pending.ExpressionAttributeNames,
			ExpressionAttributeValues: this.pending.ExpressionAttributeValues
		}
	};

	if (UpdateExpression.length) $thisQuery.Update.UpdateExpression = "SET " + UpdateExpression.join(' , ');

	if (this.pending.ConditionExpression.length) $thisQuery.Update.ConditionExpression = this.pending.ConditionExpression.join(' AND ');

	//console.log("insert_or_update()", JSON.stringify($thisQuery, null, "\t"))

	this.TransactItems.push($thisQuery);
	this.reset();
	return this;
};

Transact.prototype.update = function (item) {
	if (this.err) return this;

	var $this = this;

	var item_copy = util.clone(item);

	var Key = {};
	var UpdateExpression = [];

	Object.keys(this.pending.wheres || {}).map(function (k) {
		Key[k] = util.stringify($this.pending.wheres[k]);
		$this.pending.ExpressionAttributeNames['#' + k] = k;
		$this.pending.ConditionExpression.push("attribute_exists( #" + k + ")");
	});

	Object.keys(item_copy).map(function (k) {
		$this.pending.ExpressionAttributeNames['#update_' + k] = k;
		$this.pending.ExpressionAttributeValues[':update_' + k] = util.anormalizeItem(item)[k];
		UpdateExpression.push("#update_" + k + " = :update_" + k);
	});

	var $thisQuery = {
		Update: {
			TableName: this.pending.tableName,
			Key: Key,
			UpdateExpression: "SET " + UpdateExpression.join(' , '),
			// Item: util.anormalizeItem(item),
			ConditionExpression: this.pending.ConditionExpression.join(' AND '),
			ExpressionAttributeNames: this.pending.ExpressionAttributeNames,
			ExpressionAttributeValues: this.pending.ExpressionAttributeValues
		}

		// console.log("update()", JSON.stringify($thisQuery, null, "\t"))

	};this.TransactItems.push($thisQuery);
	this.reset();
	return this;
};

Transact.prototype.delete = function (callback) {
	var $this = this;

	var Key = {};
	Object.keys(this.pending.wheres || {}).map(function (k) {
		Key[k] = util.stringify($this.pending.wheres[k]);
	});

	var $thisQuery = {
		Delete: {
			TableName: this.pending.tableName,
			Key: Key
		}
	};

	if (Object.keys(this.pending.ExpressionAttributeNames).length) $thisQuery.Delete.ExpressionAttributeNames = this.pending.ExpressionAttributeNames;
	if (Object.keys(this.pending.ExpressionAttributeValues).length) $thisQuery.Delete.ExpressionAttributeValues = this.pending.ExpressionAttributeValues;
	if (this.pending.ConditionExpression.length) $thisQuery.Delete.ConditionExpression = this.pending.ConditionExpression.join(' AND ');

	// console.log("update()", JSON.stringify($thisQuery, null, "\t"))

	this.TransactItems.push($thisQuery);
	this.reset();
	return this;
};

Transact.prototype.write = function (callback) {
	var $this = this;
	if (this.err) {
		if (typeof callback !== "function") {
			return new Promise(function (fullfill, reject) {
				return reject(this.err);
			});
		}
		return callback.apply($this, [this.err]);
	}

	var $this = this;

	var $thisQuery = {
		TransactItems: this.TransactItems,
		// ClientRequestToken: 'STRING_VALUE',
		ReturnConsumedCapacity: 'TOTAL', // INDEXES | TOTAL | NONE,
		ReturnItemCollectionMetrics: 'SIZE' // SIZE | NONE


		//console.log(".transactWriteItems()", JSON.stringify($thisQuery, null ,"\t") )


	};if (typeof this.local_events['beforeRequest'] === "function") this.local_events['beforeRequest']('transactWriteItems', $thisQuery);

	if (typeof callback !== "function") {
		return new Promise(function (fullfill, reject) {
			$this.routeCall('transactWriteItems', $thisQuery, true, function (err, data) {
				if (err) return reject(err);

				fullfill(data.Attributes);
			});
		});
	}

	this.routeCall('transactWriteItems', $thisQuery, true, function (err, data) {

		if (err) return typeof callback !== "function" ? null : callback.apply(this, [err, false]);

		typeof callback !== "function" ? null : callback.apply(this, [err, data, data]);
	});
};

Transact.prototype.routeCall = function (method, params, reset, callback) {
	var $this = this;
	this.events.beforeRequest.apply(this, [method, params]);

	if (this.return_explain) {
		if (reset === true) $this.reset();

		var explain;
		switch (method) {}

		callback.apply($this, [null, explain]);
		return;
	}

	this.client[method](params, function (err, data) {

		if (err) $this.events.error.apply($this, [method, err, params]);

		if ((data || {}).hasOwnProperty('ConsumedCapacity')) $this.ConsumedCapacity = data.ConsumedCapacity;

		if (reset === true) $this.reset();

		callback.apply($this, [err, data]);
	});
};

module.exports = Transact;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(23)


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(2);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(29);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(2);

module.exports = Promise;
Promise.prototype.done = function (onFulfilled, onRejected) {
  var self = arguments.length ? this.then.apply(this, arguments) : this;
  self.then(null, function (err) {
    setTimeout(function () {
      throw err;
    }, 0);
  });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(2);

module.exports = Promise;
Promise.prototype.finally = function (f) {
  return this.then(function (value) {
    return Promise.resolve(f()).then(function () {
      return value;
    });
  }, function (err) {
    return Promise.resolve(f()).then(function () {
      throw err;
    });
  });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(2);

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._n);
  p._i = 1;
  p._j = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._i === 3) {
            val = val._j;
          }
          if (val._i === 1) return res(i, val._j);
          if (val._i === 2) reject(val._j);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This file contains then/promise specific extensions that are only useful
// for node.js interop

var Promise = __webpack_require__(2);
var asap = __webpack_require__(28);

module.exports = Promise;

/* Static Functions */

Promise.denodeify = function (fn, argumentCount) {
  if (
    typeof argumentCount === 'number' && argumentCount !== Infinity
  ) {
    return denodeifyWithCount(fn, argumentCount);
  } else {
    return denodeifyWithoutCount(fn);
  }
};

var callbackFn = (
  'function (err, res) {' +
  'if (err) { rj(err); } else { rs(res); }' +
  '}'
);
function denodeifyWithCount(fn, argumentCount) {
  var args = [];
  for (var i = 0; i < argumentCount; i++) {
    args.push('a' + i);
  }
  var body = [
    'return function (' + args.join(',') + ') {',
    'var self = this;',
    'return new Promise(function (rs, rj) {',
    'var res = fn.call(',
    ['self'].concat(args).concat([callbackFn]).join(','),
    ');',
    'if (res &&',
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ') {rs(res);}',
    '});',
    '};'
  ].join('');
  return Function(['Promise', 'fn'], body)(Promise, fn);
}
function denodeifyWithoutCount(fn) {
  var fnLength = Math.max(fn.length - 1, 3);
  var args = [];
  for (var i = 0; i < fnLength; i++) {
    args.push('a' + i);
  }
  var body = [
    'return function (' + args.join(',') + ') {',
    'var self = this;',
    'var args;',
    'var argLength = arguments.length;',
    'if (arguments.length > ' + fnLength + ') {',
    'args = new Array(arguments.length + 1);',
    'for (var i = 0; i < arguments.length; i++) {',
    'args[i] = arguments[i];',
    '}',
    '}',
    'return new Promise(function (rs, rj) {',
    'var cb = ' + callbackFn + ';',
    'var res;',
    'switch (argLength) {',
    args.concat(['extra']).map(function (_, index) {
      return (
        'case ' + (index) + ':' +
        'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' +
        'break;'
      );
    }).join(''),
    'default:',
    'args[argLength] = cb;',
    'res = fn.apply(self, args);',
    '}',
    
    'if (res &&',
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ') {rs(res);}',
    '});',
    '};'
  ].join('');

  return Function(
    ['Promise', 'fn'],
    body
  )(Promise, fn);
}

Promise.nodeify = function (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var callback =
      typeof args[args.length - 1] === 'function' ? args.pop() : null;
    var ctx = this;
    try {
      return fn.apply(this, arguments).nodeify(callback, ctx);
    } catch (ex) {
      if (callback === null || typeof callback == 'undefined') {
        return new Promise(function (resolve, reject) {
          reject(ex);
        });
      } else {
        asap(function () {
          callback.call(ctx, ex);
        })
      }
    }
  }
};

Promise.prototype.nodeify = function (callback, ctx) {
  if (typeof callback != 'function') return this;

  this.then(function (value) {
    asap(function () {
      callback.call(ctx, null, value);
    });
  }, function (err) {
    asap(function () {
      callback.call(ctx, err);
    });
  });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __webpack_require__(12);
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(2);

module.exports = Promise;
Promise.enableSynchronous = function () {
  Promise.prototype.isPending = function() {
    return this.getState() == 0;
  };

  Promise.prototype.isFulfilled = function() {
    return this.getState() == 1;
  };

  Promise.prototype.isRejected = function() {
    return this.getState() == 2;
  };

  Promise.prototype.getValue = function () {
    if (this._i === 3) {
      return this._j.getValue();
    }

    if (!this.isFulfilled()) {
      throw new Error('Cannot get a value of an unfulfilled promise.');
    }

    return this._j;
  };

  Promise.prototype.getReason = function () {
    if (this._i === 3) {
      return this._j.getReason();
    }

    if (!this.isRejected()) {
      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
    }

    return this._j;
  };

  Promise.prototype.getState = function () {
    if (this._i === 3) {
      return this._j.getState();
    }
    if (this._i === -1 || this._i === -2) {
      return 0;
    }

    return this._i;
  };
};

Promise.disableSynchronous = function() {
  Promise.prototype.isPending = undefined;
  Promise.prototype.isFulfilled = undefined;
  Promise.prototype.isRejected = undefined;
  Promise.prototype.getValue = undefined;
  Promise.prototype.getReason = undefined;
  Promise.prototype.getState = undefined;
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__30__;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, module) {/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var sqlparser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,15],$V1=[1,21],$V2=[1,20],$V3=[1,24],$V4=[1,23],$V5=[1,17],$V6=[1,19],$V7=[1,27],$V8=[1,26],$V9=[1,22],$Va=[1,18],$Vb=[5,6],$Vc=[5,6,50,329],$Vd=[1,36],$Ve=[1,37],$Vf=[1,376],$Vg=[1,580],$Vh=[1,230],$Vi=[1,41],$Vj=[1,42],$Vk=[1,43],$Vl=[1,44],$Vm=[1,45],$Vn=[1,46],$Vo=[1,47],$Vp=[1,48],$Vq=[1,49],$Vr=[1,50],$Vs=[1,51],$Vt=[1,52],$Vu=[1,53],$Vv=[1,54],$Vw=[1,55],$Vx=[1,56],$Vy=[1,57],$Vz=[1,58],$VA=[1,59],$VB=[1,60],$VC=[1,61],$VD=[1,62],$VE=[1,63],$VF=[1,64],$VG=[1,65],$VH=[1,66],$VI=[1,67],$VJ=[1,68],$VK=[1,69],$VL=[1,70],$VM=[1,71],$VN=[1,72],$VO=[1,73],$VP=[1,74],$VQ=[1,75],$VR=[1,76],$VS=[1,77],$VT=[1,78],$VU=[1,79],$VV=[1,80],$VW=[1,81],$VX=[1,82],$VY=[1,83],$VZ=[1,84],$V_=[1,85],$V$=[1,86],$V01=[1,87],$V11=[1,88],$V21=[1,89],$V31=[1,90],$V41=[1,91],$V51=[1,92],$V61=[1,93],$V71=[1,94],$V81=[1,95],$V91=[1,96],$Va1=[1,97],$Vb1=[1,98],$Vc1=[1,99],$Vd1=[1,100],$Ve1=[1,101],$Vf1=[1,102],$Vg1=[1,103],$Vh1=[1,104],$Vi1=[1,105],$Vj1=[1,106],$Vk1=[1,107],$Vl1=[1,108],$Vm1=[1,109],$Vn1=[1,110],$Vo1=[1,111],$Vp1=[1,112],$Vq1=[1,113],$Vr1=[1,114],$Vs1=[1,115],$Vt1=[1,116],$Vu1=[1,117],$Vv1=[1,118],$Vw1=[1,119],$Vx1=[1,120],$Vy1=[1,121],$Vz1=[1,122],$VA1=[1,123],$VB1=[1,124],$VC1=[1,125],$VD1=[1,126],$VE1=[1,127],$VF1=[1,128],$VG1=[1,129],$VH1=[1,130],$VI1=[1,131],$VJ1=[1,132],$VK1=[1,133],$VL1=[1,134],$VM1=[1,135],$VN1=[1,136],$VO1=[1,137],$VP1=[1,138],$VQ1=[1,139],$VR1=[1,140],$VS1=[1,141],$VT1=[1,142],$VU1=[1,143],$VV1=[1,144],$VW1=[1,145],$VX1=[1,146],$VY1=[1,147],$VZ1=[1,148],$V_1=[1,149],$V$1=[1,150],$V02=[1,151],$V12=[1,152],$V22=[1,153],$V32=[1,154],$V42=[1,155],$V52=[1,156],$V62=[1,157],$V72=[1,158],$V82=[1,159],$V92=[1,160],$Va2=[1,161],$Vb2=[1,162],$Vc2=[1,163],$Vd2=[1,164],$Ve2=[1,165],$Vf2=[1,166],$Vg2=[1,167],$Vh2=[1,168],$Vi2=[1,169],$Vj2=[1,170],$Vk2=[1,171],$Vl2=[1,172],$Vm2=[1,173],$Vn2=[1,174],$Vo2=[1,175],$Vp2=[1,176],$Vq2=[1,177],$Vr2=[1,178],$Vs2=[1,179],$Vt2=[1,180],$Vu2=[1,181],$Vv2=[1,182],$Vw2=[1,183],$Vx2=[1,184],$Vy2=[1,185],$Vz2=[1,186],$VA2=[1,187],$VB2=[1,188],$VC2=[1,189],$VD2=[1,190],$VE2=[1,191],$VF2=[1,192],$VG2=[1,193],$VH2=[1,194],$VI2=[1,195],$VJ2=[1,196],$VK2=[1,197],$VL2=[1,198],$VM2=[1,199],$VN2=[1,200],$VO2=[1,201],$VP2=[1,202],$VQ2=[1,203],$VR2=[1,204],$VS2=[1,205],$VT2=[1,206],$VU2=[1,207],$VV2=[1,208],$VW2=[1,209],$VX2=[1,210],$VY2=[1,211],$VZ2=[1,212],$V_2=[1,213],$V$2=[1,214],$V03=[1,215],$V13=[1,216],$V23=[1,217],$V33=[1,218],$V43=[1,219],$V53=[1,220],$V63=[1,221],$V73=[1,222],$V83=[1,223],$V93=[1,224],$Va3=[1,225],$Vb3=[1,226],$Vc3=[1,227],$Vd3=[1,228],$Ve3=[1,229],$Vf3=[1,231],$Vg3=[1,232],$Vh3=[1,233],$Vi3=[1,234],$Vj3=[1,235],$Vk3=[1,236],$Vl3=[1,237],$Vm3=[1,238],$Vn3=[1,239],$Vo3=[1,240],$Vp3=[1,241],$Vq3=[1,242],$Vr3=[1,243],$Vs3=[1,244],$Vt3=[1,245],$Vu3=[1,246],$Vv3=[1,247],$Vw3=[1,248],$Vx3=[1,249],$Vy3=[1,250],$Vz3=[1,251],$VA3=[1,252],$VB3=[1,253],$VC3=[1,254],$VD3=[1,255],$VE3=[1,256],$VF3=[1,257],$VG3=[1,258],$VH3=[1,259],$VI3=[1,260],$VJ3=[1,261],$VK3=[1,262],$VL3=[1,263],$VM3=[1,264],$VN3=[1,265],$VO3=[1,266],$VP3=[1,267],$VQ3=[1,268],$VR3=[1,269],$VS3=[1,270],$VT3=[1,271],$VU3=[1,272],$VV3=[1,273],$VW3=[1,274],$VX3=[1,275],$VY3=[1,276],$VZ3=[1,277],$V_3=[1,278],$V$3=[1,279],$V04=[1,280],$V14=[1,281],$V24=[1,282],$V34=[1,283],$V44=[1,284],$V54=[1,285],$V64=[1,286],$V74=[1,287],$V84=[1,288],$V94=[1,289],$Va4=[1,290],$Vb4=[1,291],$Vc4=[1,292],$Vd4=[1,293],$Ve4=[1,294],$Vf4=[1,295],$Vg4=[1,296],$Vh4=[1,297],$Vi4=[1,298],$Vj4=[1,299],$Vk4=[1,300],$Vl4=[1,301],$Vm4=[1,302],$Vn4=[1,303],$Vo4=[1,304],$Vp4=[1,305],$Vq4=[1,306],$Vr4=[1,307],$Vs4=[1,308],$Vt4=[1,309],$Vu4=[1,310],$Vv4=[1,311],$Vw4=[1,312],$Vx4=[1,313],$Vy4=[1,314],$Vz4=[1,315],$VA4=[1,316],$VB4=[1,317],$VC4=[1,318],$VD4=[1,319],$VE4=[1,320],$VF4=[1,321],$VG4=[1,322],$VH4=[1,323],$VI4=[1,324],$VJ4=[1,325],$VK4=[1,326],$VL4=[1,327],$VM4=[1,328],$VN4=[1,329],$VO4=[1,330],$VP4=[1,331],$VQ4=[1,332],$VR4=[1,333],$VS4=[1,334],$VT4=[1,335],$VU4=[1,336],$VV4=[1,337],$VW4=[1,338],$VX4=[1,339],$VY4=[1,340],$VZ4=[1,341],$V_4=[1,342],$V$4=[1,343],$V05=[1,344],$V15=[1,345],$V25=[1,346],$V35=[1,347],$V45=[1,348],$V55=[1,349],$V65=[1,350],$V75=[1,351],$V85=[1,352],$V95=[1,353],$Va5=[1,354],$Vb5=[1,355],$Vc5=[1,356],$Vd5=[1,357],$Ve5=[1,358],$Vf5=[1,359],$Vg5=[1,360],$Vh5=[1,361],$Vi5=[1,362],$Vj5=[1,363],$Vk5=[1,364],$Vl5=[1,365],$Vm5=[1,366],$Vn5=[1,367],$Vo5=[1,368],$Vp5=[1,369],$Vq5=[1,370],$Vr5=[1,371],$Vs5=[1,372],$Vt5=[1,373],$Vu5=[1,374],$Vv5=[1,375],$Vw5=[1,377],$Vx5=[1,378],$Vy5=[1,379],$Vz5=[1,380],$VA5=[1,381],$VB5=[1,382],$VC5=[1,383],$VD5=[1,384],$VE5=[1,385],$VF5=[1,386],$VG5=[1,387],$VH5=[1,388],$VI5=[1,389],$VJ5=[1,390],$VK5=[1,391],$VL5=[1,392],$VM5=[1,393],$VN5=[1,394],$VO5=[1,395],$VP5=[1,396],$VQ5=[1,397],$VR5=[1,398],$VS5=[1,399],$VT5=[1,400],$VU5=[1,401],$VV5=[1,402],$VW5=[1,403],$VX5=[1,404],$VY5=[1,405],$VZ5=[1,406],$V_5=[1,407],$V$5=[1,408],$V06=[1,409],$V16=[1,410],$V26=[1,411],$V36=[1,412],$V46=[1,413],$V56=[1,414],$V66=[1,415],$V76=[1,416],$V86=[1,417],$V96=[1,418],$Va6=[1,419],$Vb6=[1,420],$Vc6=[1,421],$Vd6=[1,422],$Ve6=[1,423],$Vf6=[1,424],$Vg6=[1,425],$Vh6=[1,426],$Vi6=[1,427],$Vj6=[1,428],$Vk6=[1,429],$Vl6=[1,430],$Vm6=[1,431],$Vn6=[1,432],$Vo6=[1,433],$Vp6=[1,434],$Vq6=[1,435],$Vr6=[1,436],$Vs6=[1,437],$Vt6=[1,438],$Vu6=[1,439],$Vv6=[1,440],$Vw6=[1,441],$Vx6=[1,442],$Vy6=[1,443],$Vz6=[1,444],$VA6=[1,445],$VB6=[1,446],$VC6=[1,447],$VD6=[1,448],$VE6=[1,449],$VF6=[1,450],$VG6=[1,451],$VH6=[1,452],$VI6=[1,453],$VJ6=[1,454],$VK6=[1,455],$VL6=[1,456],$VM6=[1,457],$VN6=[1,458],$VO6=[1,459],$VP6=[1,460],$VQ6=[1,461],$VR6=[1,462],$VS6=[1,463],$VT6=[1,464],$VU6=[1,465],$VV6=[1,466],$VW6=[1,467],$VX6=[1,468],$VY6=[1,469],$VZ6=[1,470],$V_6=[1,471],$V$6=[1,472],$V07=[1,473],$V17=[1,474],$V27=[1,475],$V37=[1,476],$V47=[1,477],$V57=[1,478],$V67=[1,479],$V77=[1,480],$V87=[1,481],$V97=[1,482],$Va7=[1,483],$Vb7=[1,484],$Vc7=[1,485],$Vd7=[1,486],$Ve7=[1,487],$Vf7=[1,488],$Vg7=[1,489],$Vh7=[1,490],$Vi7=[1,491],$Vj7=[1,492],$Vk7=[1,493],$Vl7=[1,494],$Vm7=[1,495],$Vn7=[1,496],$Vo7=[1,497],$Vp7=[1,498],$Vq7=[1,499],$Vr7=[1,500],$Vs7=[1,501],$Vt7=[1,502],$Vu7=[1,503],$Vv7=[1,504],$Vw7=[1,505],$Vx7=[1,506],$Vy7=[1,507],$Vz7=[1,508],$VA7=[1,509],$VB7=[1,510],$VC7=[1,511],$VD7=[1,512],$VE7=[1,513],$VF7=[1,514],$VG7=[1,515],$VH7=[1,516],$VI7=[1,517],$VJ7=[1,518],$VK7=[1,519],$VL7=[1,520],$VM7=[1,521],$VN7=[1,522],$VO7=[1,523],$VP7=[1,524],$VQ7=[1,525],$VR7=[1,526],$VS7=[1,527],$VT7=[1,528],$VU7=[1,529],$VV7=[1,530],$VW7=[1,531],$VX7=[1,532],$VY7=[1,533],$VZ7=[1,534],$V_7=[1,535],$V$7=[1,536],$V08=[1,537],$V18=[1,538],$V28=[1,539],$V38=[1,540],$V48=[1,541],$V58=[1,542],$V68=[1,543],$V78=[1,544],$V88=[1,545],$V98=[1,546],$Va8=[1,547],$Vb8=[1,548],$Vc8=[1,549],$Vd8=[1,550],$Ve8=[1,551],$Vf8=[1,552],$Vg8=[1,553],$Vh8=[1,554],$Vi8=[1,555],$Vj8=[1,556],$Vk8=[1,557],$Vl8=[1,558],$Vm8=[1,559],$Vn8=[1,560],$Vo8=[1,561],$Vp8=[1,562],$Vq8=[1,563],$Vr8=[1,564],$Vs8=[1,565],$Vt8=[1,566],$Vu8=[1,567],$Vv8=[1,568],$Vw8=[1,569],$Vx8=[1,570],$Vy8=[1,571],$Vz8=[1,572],$VA8=[1,573],$VB8=[1,574],$VC8=[1,575],$VD8=[1,576],$VE8=[1,577],$VF8=[1,578],$VG8=[1,579],$VH8=[1,581],$VI8=[1,582],$VJ8=[1,583],$VK8=[1,584],$VL8=[1,585],$VM8=[1,586],$VN8=[1,587],$VO8=[1,588],$VP8=[1,589],$VQ8=[1,590],$VR8=[1,591],$VS8=[1,592],$VT8=[1,593],$VU8=[1,594],$VV8=[1,595],$VW8=[1,596],$VX8=[1,597],$VY8=[1,598],$VZ8=[1,599],$V_8=[1,600],$V$8=[1,601],$V09=[1,602],$V19=[1,603],$V29=[1,604],$V39=[1,605],$V49=[1,606],$V59=[1,607],$V69=[1,608],$V79=[1,609],$V89=[1,610],$V99=[1,611],$Va9=[1,612],$Vb9=[1,613],$Vc9=[1,614],$Vd9=[1,615],$Ve9=[1,616],$Vf9=[1,617],$Vg9=[1,618],$Vh9=[1,619],$Vi9=[1,620],$Vj9=[1,621],$Vk9=[1,622],$Vl9=[1,623],$Vm9=[1,624],$Vn9=[1,625],$Vo9=[1,626],$Vp9=[1,627],$Vq9=[1,628],$Vr9=[1,629],$Vs9=[1,630],$Vt9=[1,631],$Vu9=[5,6,50],$Vv9=[1,647],$Vw9=[1,648],$Vx9=[1,645],$Vy9=[1,651],$Vz9=[5,6,34,50,63,64,101,103,272,306,328,329,386,510,545,602,610,623,647,662,666,668,691,695,716,717,718,719],$VA9=[2,421],$VB9=[1,668],$VC9=[254,647],$VD9=[5,6,50,55,76,80,101,186,254,306,328,329,393,647,668,691,716,717,718,719],$VE9=[623,647],$VF9=[5,6,50,272,306,329],$VG9=[1,720],$VH9=[1,753],$VI9=[1,754],$VJ9=[1,755],$VK9=[1,735],$VL9=[1,736],$VM9=[1,750],$VN9=[1,752],$VO9=[1,740],$VP9=[1,737],$VQ9=[1,751],$VR9=[1,739],$VS9=[1,738],$VT9=[1,743],$VU9=[1,757],$VV9=[5,6,647],$VW9=[5,6,50,186,329],$VX9=[5,6,50,306,329],$VY9=[1,780],$VZ9=[1,779],$V_9=[1,781],$V$9=[1,782],$V0a=[5,6,623,646,647,660],$V1a=[647,660],$V2a=[2,693],$V3a=[1,786],$V4a=[1,787],$V5a=[646,647],$V6a=[2,656],$V7a=[1,802],$V8a=[5,6,50,76,186,272,329,356,623,646,647,660,668,683,684,685],$V9a=[1,831],$Vaa=[1,832],$Vba=[1,833],$Vca=[1,829],$Vda=[1,830],$Vea=[1,825],$Vfa=[5,6,50,186,272,329],$Vga=[1,841],$Vha=[5,6,76],$Via=[1,890],$Vja=[1,881],$Vka=[1,888],$Vla=[1,889],$Vma=[1,883],$Vna=[1,884],$Voa=[1,885],$Vpa=[1,886],$Vqa=[1,887],$Vra=[5,6,50,55,76,101,186,328,329,393,691,716,717,718,719],$Vsa=[5,6,50,55,76,101,186,306,328,329,393,691,716,717,718,719],$Vta=[1,905],$Vua=[1,896],$Vva=[1,903],$Vwa=[1,904],$Vxa=[1,898],$Vya=[1,899],$Vza=[1,900],$VAa=[1,901],$VBa=[1,902],$VCa=[5,6,50,55,76,101,306,328,329,393,691,716,717,718,719],$VDa=[5,6,50,76,186,272,329,356,623,646,647,660,668,683],$VEa=[5,6,50,76,186,272,329],$VFa=[1,973],$VGa=[1,986],$VHa=[1,987],$VIa=[1,988],$VJa=[647,668],$VKa=[2,866],$VLa=[1,1026],$VMa=[2,868],$VNa=[1,1040],$VOa=[566,647,668];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"main":3,"sql_stmt_list":4,"EOF":5,"SEMICOLON":6,"sql_stmt":7,"select_stmt":8,"insert_stmt":9,"update_stmt":10,"replace_stmt":11,"delete_stmt":12,"create_table_stmt":13,"show_tables_stmt":14,"drop_table_stmt":15,"describe_table_stmt":16,"drop_index_stmt":17,"scan_stmt":18,"debug_stmt":19,"name":20,"LITERAL":21,"BRALITERAL":22,"name_or_keyword":23,"KEYWORD":24,"database_table_name":25,"DOT":26,"dynamodb_table_name":27,"dynamodb_table_name_or_keyword":28,"dynamodb_index_name_or_keyword":29,"dynamodb_attribute_name_or_keyword":30,"database_index_name":31,"dynamodb_index_name":32,"signed_number":33,"NUMBER":34,"string_literal":35,"SINGLE_QUOTED_STRING":36,"DOUBLE_QUOTED_STRING":37,"XSTRING":38,"literal_value":39,"boolean":40,"TRUE":41,"FALSE":42,"boolean_value":43,"SQLKEYWORD":44,"JSON":45,"MATH":46,"ABORT":47,"ADD":48,"AFTER":49,"CONSISTENT_READ":50,"CURRENT_DATE":51,"CURRENT_TIME":52,"CURRENT_TIMESTAMP":53,"ISNULL":54,"CONTAINS":55,"NOTNULL":56,"UNDEFINED":57,"PRAGMA":58,"TABLES":59,"STRINGSET":60,"NUMBERSET":61,"BINARYSET":62,"GSI":63,"LSI":64,"ALL":65,"KEYS_ONLY":66,"INCLUDE":67,"PROVISIONED":68,"PAY_PER_REQUEST":69,"BUFFER":70,"DEBUG":71,"DYNAMODBKEYWORD":72,"ALLOCATE":73,"ALTER":74,"ANALYZE":75,"AND":76,"ANY":77,"ARE":78,"ARRAY":79,"AS":80,"ASC":81,"ASCII":82,"ASENSITIVE":83,"ASSERTION":84,"ASYMMETRIC":85,"AT":86,"ATOMIC":87,"ATTACH":88,"ATTRIBUTE":89,"AUTH":90,"AUTHORIZATION":91,"AUTHORIZE":92,"AUTO":93,"AVG":94,"BACK":95,"BACKUP":96,"BASE":97,"BATCH":98,"BEFORE":99,"BEGIN":100,"BETWEEN":101,"BIGINT":102,"BINARY":103,"BIT":104,"BLOB":105,"BLOCK":106,"BOOLEAN":107,"BOTH":108,"BREADTH":109,"BUCKET":110,"BULK":111,"BY":112,"BYTE":113,"CALL":114,"CALLED":115,"CALLING":116,"CAPACITY":117,"CASCADE":118,"CASCADED":119,"CASE":120,"CAST":121,"CATALOG":122,"CHAR":123,"CHARACTER":124,"CHECK":125,"CLASS":126,"CLOB":127,"CLOSE":128,"CLUSTER":129,"CLUSTERED":130,"CLUSTERING":131,"CLUSTERS":132,"COALESCE":133,"COLLATE":134,"COLLATION":135,"COLLECTION":136,"COLUMN":137,"COLUMNS":138,"COMBINE":139,"COMMENT":140,"COMMIT":141,"COMPACT":142,"COMPILE":143,"COMPRESS":144,"CONDITION":145,"CONFLICT":146,"CONNECT":147,"CONNECTION":148,"CONSISTENCY":149,"CONSISTENT":150,"CONSTRAINT":151,"CONSTRAINTS":152,"CONSTRUCTOR":153,"CONSUMED":154,"CONTINUE":155,"CONVERT":156,"COPY":157,"CORRESPONDING":158,"COUNT":159,"COUNTER":160,"CREATE":161,"CROSS":162,"CUBE":163,"CURRENT":164,"CURSOR":165,"CYCLE":166,"DATA":167,"DATABASE":168,"DATE":169,"DATETIME":170,"DAY":171,"DEALLOCATE":172,"DEC":173,"DECIMAL":174,"DECLARE":175,"DEFAULT":176,"DEFERRABLE":177,"DEFERRED":178,"DEFINE":179,"DEFINED":180,"DEFINITION":181,"DELETE":182,"DELIMITED":183,"DEPTH":184,"DEREF":185,"DESC":186,"DESCRIBE":187,"DESCRIPTOR":188,"DETACH":189,"DETERMINISTIC":190,"DIAGNOSTICS":191,"DIRECTORIES":192,"DISABLE":193,"DISCONNECT":194,"DISTINCT":195,"DISTRIBUTE":196,"DO":197,"DOMAIN":198,"DOUBLE":199,"DROP":200,"DUMP":201,"DURATION":202,"DYNAMIC":203,"EACH":204,"ELEMENT":205,"ELSE":206,"ELSEIF":207,"EMPTY":208,"ENABLE":209,"END":210,"EQUAL":211,"EQUALS":212,"ERROR":213,"ESCAPE":214,"ESCAPED":215,"EVAL":216,"EVALUATE":217,"EXCEEDED":218,"EXCEPT":219,"EXCEPTION":220,"EXCEPTIONS":221,"EXCLUSIVE":222,"EXEC":223,"EXECUTE":224,"EXISTS":225,"EXIT":226,"EXPLAIN":227,"EXPLODE":228,"EXPORT":229,"EXPRESSION":230,"EXTENDED":231,"EXTERNAL":232,"EXTRACT":233,"FAIL":234,"FAMILY":235,"FETCH":236,"FIELDS":237,"FILE":238,"FILTER":239,"FILTERING":240,"FINAL":241,"FINISH":242,"FIRST":243,"FIXED":244,"FLATTERN":245,"FLOAT":246,"FOR":247,"FORCE":248,"FOREIGN":249,"FORMAT":250,"FORWARD":251,"FOUND":252,"FREE":253,"FROM":254,"FULL":255,"FUNCTION":256,"FUNCTIONS":257,"GENERAL":258,"GENERATE":259,"GET":260,"GLOB":261,"GLOBAL":262,"GO":263,"GOTO":264,"GRANT":265,"GREATER":266,"GROUP":267,"GROUPING":268,"HANDLER":269,"HASH":270,"HAVE":271,"HAVING":272,"HEAP":273,"HIDDEN":274,"HOLD":275,"HOUR":276,"IDENTIFIED":277,"IDENTITY":278,"IF":279,"IGNORE":280,"IMMEDIATE":281,"IMPORT":282,"IN":283,"INCLUDING":284,"INCLUSIVE":285,"INCREMENT":286,"INCREMENTAL":287,"INDEX":288,"INDEXED":289,"INDEXES":290,"INDICATOR":291,"INFINITE":292,"INITIALLY":293,"INLINE":294,"INNER":295,"INNTER":296,"INOUT":297,"INPUT":298,"INSENSITIVE":299,"INSERT":300,"INSTEAD":301,"INT":302,"INTEGER":303,"INTERSECT":304,"INTERVAL":305,"INTO":306,"INVALIDATE":307,"IS":308,"ISOLATION":309,"ITEM":310,"ITEMS":311,"ITERATE":312,"JOIN":313,"KEY":314,"KEYS":315,"LAG":316,"LANGUAGE":317,"LARGE":318,"LAST":319,"LATERAL":320,"LEAD":321,"LEADING":322,"LEAVE":323,"LEFT":324,"LENGTH":325,"LESS":326,"LEVEL":327,"LIKE":328,"LIMIT":329,"LIMITED":330,"LINES":331,"LIST":332,"LOAD":333,"LOCAL":334,"LOCALTIME":335,"LOCALTIMESTAMP":336,"LOCATION":337,"LOCATOR":338,"LOCK":339,"LOCKS":340,"LOG":341,"LOGED":342,"LONG":343,"LOOP":344,"LOWER":345,"MAP":346,"MATCH":347,"MATERIALIZED":348,"MAX":349,"MAXLEN":350,"MEMBER":351,"MERGE":352,"METHOD":353,"METRICS":354,"MIN":355,"MINUS":356,"MINUTE":357,"MISSING":358,"MOD":359,"MODE":360,"MODIFIES":361,"MODIFY":362,"MODULE":363,"MONTH":364,"MULTI":365,"MULTISET":366,"NAME":367,"NAMES":368,"NATIONAL":369,"NATURAL":370,"NCHAR":371,"NCLOB":372,"NEW":373,"NEXT":374,"NO":375,"NONE":376,"NOT":377,"NULL":378,"NULLIF":379,"NUMERIC":380,"OBJECT":381,"OF":382,"OFFLINE":383,"OFFSET":384,"OLD":385,"ON":386,"ONLINE":387,"ONLY":388,"OPAQUE":389,"OPEN":390,"OPERATOR":391,"OPTION":392,"OR":393,"ORDER":394,"ORDINALITY":395,"OTHER":396,"OTHERS":397,"OUT":398,"OUTER":399,"OUTPUT":400,"OVER":401,"OVERLAPS":402,"OVERRIDE":403,"OWNER":404,"PAD":405,"PARALLEL":406,"PARAMETER":407,"PARAMETERS":408,"PARTIAL":409,"PARTITION":410,"PARTITIONED":411,"PARTITIONS":412,"PATH":413,"PERCENT":414,"PERCENTILE":415,"PERMISSION":416,"PERMISSIONS":417,"PIPE":418,"PIPELINED":419,"PLAN":420,"POOL":421,"POSITION":422,"PRECISION":423,"PREPARE":424,"PRESERVE":425,"PRIMARY":426,"PRIOR":427,"PRIVATE":428,"PRIVILEGES":429,"PROCEDURE":430,"PROCESSED":431,"PROJECT":432,"PROJECTION":433,"PROPERTY":434,"PROVISIONING":435,"PUBLIC":436,"PUT":437,"QUERY":438,"QUIT":439,"QUORUM":440,"RAISE":441,"RANDOM":442,"RANGE":443,"RANK":444,"RAW":445,"READ":446,"READS":447,"REAL":448,"REBUILD":449,"RECORD":450,"RECURSIVE":451,"REDUCE":452,"REF":453,"REFERENCE":454,"REFERENCES":455,"REFERENCING":456,"REGEXP":457,"REGION":458,"REINDEX":459,"RELATIVE":460,"RELEASE":461,"REMAINDER":462,"RENAME":463,"REPEAT":464,"REPLACE":465,"REQUEST":466,"RESET":467,"RESIGNAL":468,"RESOURCE":469,"RESPONSE":470,"RESTORE":471,"RESTRICT":472,"RESULT":473,"RETURN":474,"RETURNING":475,"RETURNS":476,"REVERSE":477,"REVOKE":478,"RIGHT":479,"ROLE":480,"ROLES":481,"ROLLBACK":482,"ROLLUP":483,"ROUTINE":484,"ROW":485,"ROWS":486,"RULE":487,"RULES":488,"SAMPLE":489,"SATISFIES":490,"SAVE":491,"SAVEPOINT":492,"SCAN":493,"SCHEMA":494,"SCOPE":495,"SCROLL":496,"SEARCH":497,"SECOND":498,"SECTION":499,"SEGMENT":500,"SEGMENTS":501,"SELECT":502,"SELF":503,"SEMI":504,"SENSITIVE":505,"SEPARATE":506,"SEQUENCE":507,"SERIALIZABLE":508,"SESSION":509,"SET":510,"SETS":511,"SHARD":512,"SHARE":513,"SHARED":514,"SHORT":515,"SHOW":516,"SIGNAL":517,"SIMILAR":518,"SIZE":519,"SKEWED":520,"SMALLINT":521,"SNAPSHOT":522,"SOME":523,"SOURCE":524,"SPACE":525,"SPACES":526,"SPARSE":527,"SPECIFIC":528,"SPECIFICTYPE":529,"SPLIT":530,"SQL":531,"SQLCODE":532,"SQLERROR":533,"SQLEXCEPTION":534,"SQLSTATE":535,"SQLWARNING":536,"START":537,"STATE":538,"STATIC":539,"STATUS":540,"STORAGE":541,"STORE":542,"STORED":543,"STREAM":544,"STRING":545,"STRUCT":546,"STYLE":547,"SUB":548,"SUBMULTISET":549,"SUBPARTITION":550,"SUBSTRING":551,"SUBTYPE":552,"SUM":553,"SUPER":554,"SYMMETRIC":555,"SYNONYM":556,"SYSTEM":557,"TABLE":558,"TABLESAMPLE":559,"TEMP":560,"TEMPORARY":561,"TERMINATED":562,"TEXT":563,"THAN":564,"THEN":565,"THROUGHPUT":566,"TIME":567,"TIMESTAMP":568,"TIMEZONE":569,"TINYINT":570,"TO":571,"TOKEN":572,"TOTAL":573,"TOUCH":574,"TRAILING":575,"TRANSACTION":576,"TRANSFORM":577,"TRANSLATE":578,"TRANSLATION":579,"TREAT":580,"TRIGGER":581,"TRIM":582,"TRUNCATE":583,"TTL":584,"TUPLE":585,"TYPE":586,"UNDER":587,"UNDO":588,"UNION":589,"UNIQUE":590,"UNIT":591,"UNKNOWN":592,"UNLOGGED":593,"UNNEST":594,"UNPROCESSED":595,"UNSIGNED":596,"UNTIL":597,"UPDATE":598,"UPPER":599,"URL":600,"USAGE":601,"USE":602,"USER":603,"USERS":604,"USING":605,"UUID":606,"VACUUM":607,"VALUE":608,"VALUED":609,"VALUES":610,"VARCHAR":611,"VARIABLE":612,"VARIANCE":613,"VARINT":614,"VARYING":615,"VIEW":616,"VIEWS":617,"VIRTUAL":618,"VOID":619,"WAIT":620,"WHEN":621,"WHENEVER":622,"WHERE":623,"WHILE":624,"WINDOW":625,"WITH":626,"WITHIN":627,"WITHOUT":628,"WORK":629,"WRAPPED":630,"WRITE":631,"YEAR":632,"ZONE":633,"dynamodb_data_string":634,"dynamodb_raw_string":635,"dynamodb_data_number":636,"dynamodb_raw_number":637,"dynamodb_data_boolean":638,"dynamodb_raw_boolean":639,"dynamodb_data_null":640,"dynamodb_raw_null":641,"dynamodb_data_undefined":642,"dynamodb_data_array":643,"ARRAYLPAR":644,"array_list":645,"ARRAYRPAR":646,"COMMA":647,"array_value":648,"dynamodb_data_json":649,"dynamodb_raw_array":650,"array_list_raw":651,"array_value_raw":652,"javascript_raw_expr":653,"dynamodb_raw_json":654,"dynamodb_raw_numberset":655,"dynamodb_raw_stringset":656,"dynamodb_raw_binaryset":657,"JSONLPAR":658,"dynamodb_data_json_list":659,"JSONRPAR":660,"dynamodb_data_json_kv":661,"COLON":662,"dynamodb_data_json_list_raw":663,"dynamodb_raw_json_kv":664,"dynamodb_raw_json_kv_key":665,"LPAR":666,"stringset_list":667,"RPAR":668,"numberset_list":669,"binaryset_list":670,"javascript_data_func_buffer":671,"javascript_data_obj_date":672,"javascript_raw_date_parameter":673,"javascript_raw_obj_date":674,"def_resolvable_expr":675,"javascript_raw_obj_math":676,"javascript_data_obj_math":677,"javascript_raw_math_funcname":678,"javascript_raw_math_parameter":679,"javascript_data_func_uuid":680,"javascript_data_expr":681,"dev_resolvable_value":682,"PLUS":683,"STAR":684,"SLASH":685,"def_insert_ignore":686,"def_insert_columns":687,"def_insert_items":688,"def_insert_item":689,"def_insert_onecolumn":690,"EQ":691,"def_update_columns":692,"def_update_where":693,"def_update_onecolumn":694,"PLUSEQ":695,"def_update_where_cond":696,"def_replace_columns":697,"def_replace_onecolumn":698,"def_delete_where":699,"def_delete_where_cond":700,"def_select":701,"select_sort_clause":702,"limit_clause":703,"def_consistent_read":704,"def_select_columns":705,"def_select_onecolumn":706,"def_select_from":707,"def_select_use_index":708,"def_select_where":709,"select_where_hash":710,"select_where_range":711,"def_having":712,"having_expr":713,"where_expr":714,"bind_parameter":715,"GT":716,"GE":717,"LT":718,"LE":719,"where_between":720,"select_where_hash_value":721,"select_where_range_value":722,"select_where_between":723,"def_billing_mode":724,"def_ct_typedef_list":725,"def_ct_pk":726,"def_ct_indexes":727,"def_ct_index_list":728,"def_ct_index":729,"def_ct_projection":730,"def_ct_throughput":731,"def_ct_projection_list":732,"def_ct_typedef":733,"def_scan":734,"def_scan_limit_clause":735,"def_scan_consistent_read":736,"def_scan_columns":737,"def_scan_use_index":738,"def_scan_having":739,"def_scan_into":740,"def_scan_onecolumn":741,"def_scan_having_expr":742,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"SEMICOLON",19:"debug_stmt",21:"LITERAL",22:"BRALITERAL",26:"DOT",34:"NUMBER",36:"SINGLE_QUOTED_STRING",37:"DOUBLE_QUOTED_STRING",38:"XSTRING",41:"TRUE",42:"FALSE",45:"JSON",46:"MATH",47:"ABORT",48:"ADD",49:"AFTER",50:"CONSISTENT_READ",51:"CURRENT_DATE",52:"CURRENT_TIME",53:"CURRENT_TIMESTAMP",54:"ISNULL",55:"CONTAINS",56:"NOTNULL",57:"UNDEFINED",58:"PRAGMA",59:"TABLES",60:"STRINGSET",61:"NUMBERSET",62:"BINARYSET",63:"GSI",64:"LSI",65:"ALL",66:"KEYS_ONLY",67:"INCLUDE",68:"PROVISIONED",69:"PAY_PER_REQUEST",70:"BUFFER",71:"DEBUG",73:"ALLOCATE",74:"ALTER",75:"ANALYZE",76:"AND",77:"ANY",78:"ARE",79:"ARRAY",80:"AS",81:"ASC",82:"ASCII",83:"ASENSITIVE",84:"ASSERTION",85:"ASYMMETRIC",86:"AT",87:"ATOMIC",88:"ATTACH",89:"ATTRIBUTE",90:"AUTH",91:"AUTHORIZATION",92:"AUTHORIZE",93:"AUTO",94:"AVG",95:"BACK",96:"BACKUP",97:"BASE",98:"BATCH",99:"BEFORE",100:"BEGIN",101:"BETWEEN",102:"BIGINT",103:"BINARY",104:"BIT",105:"BLOB",106:"BLOCK",107:"BOOLEAN",108:"BOTH",109:"BREADTH",110:"BUCKET",111:"BULK",112:"BY",113:"BYTE",114:"CALL",115:"CALLED",116:"CALLING",117:"CAPACITY",118:"CASCADE",119:"CASCADED",120:"CASE",121:"CAST",122:"CATALOG",123:"CHAR",124:"CHARACTER",125:"CHECK",126:"CLASS",127:"CLOB",128:"CLOSE",129:"CLUSTER",130:"CLUSTERED",131:"CLUSTERING",132:"CLUSTERS",133:"COALESCE",134:"COLLATE",135:"COLLATION",136:"COLLECTION",137:"COLUMN",138:"COLUMNS",139:"COMBINE",140:"COMMENT",141:"COMMIT",142:"COMPACT",143:"COMPILE",144:"COMPRESS",145:"CONDITION",146:"CONFLICT",147:"CONNECT",148:"CONNECTION",149:"CONSISTENCY",150:"CONSISTENT",151:"CONSTRAINT",152:"CONSTRAINTS",153:"CONSTRUCTOR",154:"CONSUMED",155:"CONTINUE",156:"CONVERT",157:"COPY",158:"CORRESPONDING",159:"COUNT",160:"COUNTER",161:"CREATE",162:"CROSS",163:"CUBE",164:"CURRENT",165:"CURSOR",166:"CYCLE",167:"DATA",168:"DATABASE",169:"DATE",170:"DATETIME",171:"DAY",172:"DEALLOCATE",173:"DEC",174:"DECIMAL",175:"DECLARE",176:"DEFAULT",177:"DEFERRABLE",178:"DEFERRED",179:"DEFINE",180:"DEFINED",181:"DEFINITION",182:"DELETE",183:"DELIMITED",184:"DEPTH",185:"DEREF",186:"DESC",187:"DESCRIBE",188:"DESCRIPTOR",189:"DETACH",190:"DETERMINISTIC",191:"DIAGNOSTICS",192:"DIRECTORIES",193:"DISABLE",194:"DISCONNECT",195:"DISTINCT",196:"DISTRIBUTE",197:"DO",198:"DOMAIN",199:"DOUBLE",200:"DROP",201:"DUMP",202:"DURATION",203:"DYNAMIC",204:"EACH",205:"ELEMENT",206:"ELSE",207:"ELSEIF",208:"EMPTY",209:"ENABLE",210:"END",211:"EQUAL",212:"EQUALS",213:"ERROR",214:"ESCAPE",215:"ESCAPED",216:"EVAL",217:"EVALUATE",218:"EXCEEDED",219:"EXCEPT",220:"EXCEPTION",221:"EXCEPTIONS",222:"EXCLUSIVE",223:"EXEC",224:"EXECUTE",225:"EXISTS",226:"EXIT",227:"EXPLAIN",228:"EXPLODE",229:"EXPORT",230:"EXPRESSION",231:"EXTENDED",232:"EXTERNAL",233:"EXTRACT",234:"FAIL",235:"FAMILY",236:"FETCH",237:"FIELDS",238:"FILE",239:"FILTER",240:"FILTERING",241:"FINAL",242:"FINISH",243:"FIRST",244:"FIXED",245:"FLATTERN",246:"FLOAT",247:"FOR",248:"FORCE",249:"FOREIGN",250:"FORMAT",251:"FORWARD",252:"FOUND",253:"FREE",254:"FROM",255:"FULL",256:"FUNCTION",257:"FUNCTIONS",258:"GENERAL",259:"GENERATE",260:"GET",261:"GLOB",262:"GLOBAL",263:"GO",264:"GOTO",265:"GRANT",266:"GREATER",267:"GROUP",268:"GROUPING",269:"HANDLER",270:"HASH",271:"HAVE",272:"HAVING",273:"HEAP",274:"HIDDEN",275:"HOLD",276:"HOUR",277:"IDENTIFIED",278:"IDENTITY",279:"IF",280:"IGNORE",281:"IMMEDIATE",282:"IMPORT",283:"IN",284:"INCLUDING",285:"INCLUSIVE",286:"INCREMENT",287:"INCREMENTAL",288:"INDEX",289:"INDEXED",290:"INDEXES",291:"INDICATOR",292:"INFINITE",293:"INITIALLY",294:"INLINE",295:"INNER",296:"INNTER",297:"INOUT",298:"INPUT",299:"INSENSITIVE",300:"INSERT",301:"INSTEAD",302:"INT",303:"INTEGER",304:"INTERSECT",305:"INTERVAL",306:"INTO",307:"INVALIDATE",308:"IS",309:"ISOLATION",310:"ITEM",311:"ITEMS",312:"ITERATE",313:"JOIN",314:"KEY",315:"KEYS",316:"LAG",317:"LANGUAGE",318:"LARGE",319:"LAST",320:"LATERAL",321:"LEAD",322:"LEADING",323:"LEAVE",324:"LEFT",325:"LENGTH",326:"LESS",327:"LEVEL",328:"LIKE",329:"LIMIT",330:"LIMITED",331:"LINES",332:"LIST",333:"LOAD",334:"LOCAL",335:"LOCALTIME",336:"LOCALTIMESTAMP",337:"LOCATION",338:"LOCATOR",339:"LOCK",340:"LOCKS",341:"LOG",342:"LOGED",343:"LONG",344:"LOOP",345:"LOWER",346:"MAP",347:"MATCH",348:"MATERIALIZED",349:"MAX",350:"MAXLEN",351:"MEMBER",352:"MERGE",353:"METHOD",354:"METRICS",355:"MIN",356:"MINUS",357:"MINUTE",358:"MISSING",359:"MOD",360:"MODE",361:"MODIFIES",362:"MODIFY",363:"MODULE",364:"MONTH",365:"MULTI",366:"MULTISET",367:"NAME",368:"NAMES",369:"NATIONAL",370:"NATURAL",371:"NCHAR",372:"NCLOB",373:"NEW",374:"NEXT",375:"NO",376:"NONE",377:"NOT",378:"NULL",379:"NULLIF",380:"NUMERIC",381:"OBJECT",382:"OF",383:"OFFLINE",384:"OFFSET",385:"OLD",386:"ON",387:"ONLINE",388:"ONLY",389:"OPAQUE",390:"OPEN",391:"OPERATOR",392:"OPTION",393:"OR",394:"ORDER",395:"ORDINALITY",396:"OTHER",397:"OTHERS",398:"OUT",399:"OUTER",400:"OUTPUT",401:"OVER",402:"OVERLAPS",403:"OVERRIDE",404:"OWNER",405:"PAD",406:"PARALLEL",407:"PARAMETER",408:"PARAMETERS",409:"PARTIAL",410:"PARTITION",411:"PARTITIONED",412:"PARTITIONS",413:"PATH",414:"PERCENT",415:"PERCENTILE",416:"PERMISSION",417:"PERMISSIONS",418:"PIPE",419:"PIPELINED",420:"PLAN",421:"POOL",422:"POSITION",423:"PRECISION",424:"PREPARE",425:"PRESERVE",426:"PRIMARY",427:"PRIOR",428:"PRIVATE",429:"PRIVILEGES",430:"PROCEDURE",431:"PROCESSED",432:"PROJECT",433:"PROJECTION",434:"PROPERTY",435:"PROVISIONING",436:"PUBLIC",437:"PUT",438:"QUERY",439:"QUIT",440:"QUORUM",441:"RAISE",442:"RANDOM",443:"RANGE",444:"RANK",445:"RAW",446:"READ",447:"READS",448:"REAL",449:"REBUILD",450:"RECORD",451:"RECURSIVE",452:"REDUCE",453:"REF",454:"REFERENCE",455:"REFERENCES",456:"REFERENCING",457:"REGEXP",458:"REGION",459:"REINDEX",460:"RELATIVE",461:"RELEASE",462:"REMAINDER",463:"RENAME",464:"REPEAT",465:"REPLACE",466:"REQUEST",467:"RESET",468:"RESIGNAL",469:"RESOURCE",470:"RESPONSE",471:"RESTORE",472:"RESTRICT",473:"RESULT",474:"RETURN",475:"RETURNING",476:"RETURNS",477:"REVERSE",478:"REVOKE",479:"RIGHT",480:"ROLE",481:"ROLES",482:"ROLLBACK",483:"ROLLUP",484:"ROUTINE",485:"ROW",486:"ROWS",487:"RULE",488:"RULES",489:"SAMPLE",490:"SATISFIES",491:"SAVE",492:"SAVEPOINT",493:"SCAN",494:"SCHEMA",495:"SCOPE",496:"SCROLL",497:"SEARCH",498:"SECOND",499:"SECTION",500:"SEGMENT",501:"SEGMENTS",502:"SELECT",503:"SELF",504:"SEMI",505:"SENSITIVE",506:"SEPARATE",507:"SEQUENCE",508:"SERIALIZABLE",509:"SESSION",510:"SET",511:"SETS",512:"SHARD",513:"SHARE",514:"SHARED",515:"SHORT",516:"SHOW",517:"SIGNAL",518:"SIMILAR",519:"SIZE",520:"SKEWED",521:"SMALLINT",522:"SNAPSHOT",523:"SOME",524:"SOURCE",525:"SPACE",526:"SPACES",527:"SPARSE",528:"SPECIFIC",529:"SPECIFICTYPE",530:"SPLIT",531:"SQL",532:"SQLCODE",533:"SQLERROR",534:"SQLEXCEPTION",535:"SQLSTATE",536:"SQLWARNING",537:"START",538:"STATE",539:"STATIC",540:"STATUS",541:"STORAGE",542:"STORE",543:"STORED",544:"STREAM",545:"STRING",546:"STRUCT",547:"STYLE",548:"SUB",549:"SUBMULTISET",550:"SUBPARTITION",551:"SUBSTRING",552:"SUBTYPE",553:"SUM",554:"SUPER",555:"SYMMETRIC",556:"SYNONYM",557:"SYSTEM",558:"TABLE",559:"TABLESAMPLE",560:"TEMP",561:"TEMPORARY",562:"TERMINATED",563:"TEXT",564:"THAN",565:"THEN",566:"THROUGHPUT",567:"TIME",568:"TIMESTAMP",569:"TIMEZONE",570:"TINYINT",571:"TO",572:"TOKEN",573:"TOTAL",574:"TOUCH",575:"TRAILING",576:"TRANSACTION",577:"TRANSFORM",578:"TRANSLATE",579:"TRANSLATION",580:"TREAT",581:"TRIGGER",582:"TRIM",583:"TRUNCATE",584:"TTL",585:"TUPLE",586:"TYPE",587:"UNDER",588:"UNDO",589:"UNION",590:"UNIQUE",591:"UNIT",592:"UNKNOWN",593:"UNLOGGED",594:"UNNEST",595:"UNPROCESSED",596:"UNSIGNED",597:"UNTIL",598:"UPDATE",599:"UPPER",600:"URL",601:"USAGE",602:"USE",603:"USER",604:"USERS",605:"USING",606:"UUID",607:"VACUUM",608:"VALUE",609:"VALUED",610:"VALUES",611:"VARCHAR",612:"VARIABLE",613:"VARIANCE",614:"VARINT",615:"VARYING",616:"VIEW",617:"VIEWS",618:"VIRTUAL",619:"VOID",620:"WAIT",621:"WHEN",622:"WHENEVER",623:"WHERE",624:"WHILE",625:"WINDOW",626:"WITH",627:"WITHIN",628:"WITHOUT",629:"WORK",630:"WRAPPED",631:"WRITE",632:"YEAR",633:"ZONE",644:"ARRAYLPAR",646:"ARRAYRPAR",647:"COMMA",658:"JSONLPAR",660:"JSONRPAR",662:"COLON",666:"LPAR",668:"RPAR",683:"PLUS",684:"STAR",685:"SLASH",691:"EQ",695:"PLUSEQ",715:"bind_parameter",716:"GT",717:"GE",718:"LT",719:"LE"},
productions_: [0,[3,2],[4,3],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[20,1],[20,1],[23,1],[23,1],[23,1],[25,3],[25,1],[27,1],[28,1],[29,1],[30,1],[31,1],[32,1],[33,1],[35,1],[35,1],[35,1],[39,1],[39,1],[40,1],[40,1],[43,1],[43,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[72,1],[634,1],[634,1],[635,1],[635,1],[636,1],[637,1],[638,1],[638,1],[639,1],[639,1],[640,1],[641,1],[642,1],[643,3],[645,3],[645,1],[648,0],[648,1],[648,1],[648,1],[648,1],[648,1],[648,1],[650,3],[651,3],[651,1],[652,0],[652,1],[652,1],[652,1],[652,1],[652,1],[652,1],[652,1],[652,1],[649,3],[659,3],[659,1],[661,0],[661,3],[661,3],[661,3],[661,3],[661,3],[661,3],[661,3],[661,3],[661,3],[661,3],[661,3],[661,3],[661,3],[661,3],[661,3],[661,3],[661,3],[661,3],[654,3],[663,3],[663,1],[665,1],[665,1],[665,1],[664,0],[664,3],[664,3],[664,3],[664,3],[664,3],[664,3],[664,3],[664,3],[656,7],[667,3],[667,1],[655,7],[669,3],[669,1],[657,7],[670,3],[670,1],[672,5],[672,9],[674,5],[674,9],[673,0],[673,1],[676,1],[677,6],[678,1],[678,1],[679,0],[679,1],[680,3],[680,4],[671,8],[653,1],[681,1],[675,1],[675,3],[675,3],[675,3],[675,3],[675,3],[682,1],[682,1],[682,1],[682,1],[682,1],[682,1],[24,1],[24,1],[9,6],[9,6],[686,0],[686,1],[688,3],[688,1],[689,3],[687,3],[687,1],[690,3],[690,3],[690,3],[690,3],[690,3],[690,3],[690,3],[690,3],[10,6],[692,3],[692,1],[694,3],[694,3],[694,3],[694,3],[694,3],[694,3],[694,3],[694,3],[694,3],[694,3],[693,1],[693,3],[696,3],[11,5],[697,3],[697,1],[698,3],[698,3],[698,3],[698,3],[698,3],[698,3],[698,3],[698,3],[12,5],[699,1],[699,3],[700,3],[8,4],[703,0],[703,2],[702,0],[702,1],[704,0],[704,1],[705,3],[705,1],[706,1],[706,1],[706,3],[707,2],[708,0],[708,3],[709,2],[709,4],[712,2],[712,0],[701,6],[714,1],[714,1],[714,1],[714,3],[714,3],[714,3],[714,3],[714,3],[714,3],[714,3],[714,3],[714,3],[710,3],[721,1],[711,3],[711,3],[711,3],[711,3],[711,3],[711,3],[711,3],[722,1],[723,3],[723,3],[720,3],[720,3],[713,1],[713,1],[713,1],[713,1],[713,3],[713,3],[713,3],[713,3],[713,3],[713,3],[713,3],[713,3],[713,3],[713,3],[713,3],[713,3],[13,10],[724,0],[724,1],[724,1],[727,0],[727,2],[728,3],[728,1],[729,7],[729,8],[729,9],[729,10],[726,6],[726,8],[731,0],[731,3],[730,0],[730,2],[730,2],[730,5],[732,3],[732,1],[725,3],[725,1],[733,2],[733,2],[733,2],[14,2],[15,3],[16,3],[17,5],[18,3],[734,7],[735,0],[735,2],[736,0],[736,1],[737,3],[737,1],[741,1],[741,1],[741,3],[738,0],[738,3],[739,2],[739,0],[742,1],[742,1],[742,1],[742,1],[742,3],[742,3],[742,3],[742,3],[742,3],[742,3],[742,3],[742,3],[742,3],[742,3],[742,3],[742,3],[740,2],[740,0]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

			this.$ = $$[$0-1];
			return this.$;
		
break;
case 2:
 this.$ = $$[$0-2]; if($$[$0]) this.$.push($$[$0]); 
break;
case 3: case 645: case 655: case 667: case 689: case 704: case 747: case 750: case 761: case 777: case 798: case 873: case 890:
 this.$ = [$$[$0]]; 
break;
case 16: case 18: case 23: case 24: case 25: case 26: case 28: case 29: case 30: case 31: case 32: case 740: case 741: case 802: case 804: case 810: case 836: case 837: case 854: case 855: case 895: case 898: case 899:
 this.$ = $$[$0]; 
break;
case 17: case 19:
 this.$ = $$[$0].substr(1,$$[$0].length-2); 
break;
case 20: case 647: case 648: case 649: case 650: case 651: case 652: case 657: case 658: case 659: case 660: case 661: case 662: case 663: case 664: case 692: case 716: case 719: case 722: case 727: case 728: case 734: case 735: case 736: case 737: case 738: case 739: case 823: case 831:
 this.$ = $$[$0] 
break;
case 21:
 this.$ = {database:$$[$0-2], table:$$[$0]}; 
break;
case 22:
 this.$ = {table:$$[$0]}; 
break;
case 27:
 this.$ = {index:$$[$0]}; 
break;
case 33:
 this.$ = {type:'number', number:$$[$0]}; 
break;
case 34:
 this.$ = {type:'string', string: $$[$0]}
break;
case 35: case 636:
 this.$ = true; 
break;
case 36: case 637:
 this.$ = false; 
break;
case 37:
 this.$ = {type:'boolean', value: true }; 
break;
case 38:
 this.$ = {type:'boolean', value: false }; 
break;
case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: case 58: case 59: case 60: case 61: case 62: case 63: case 64: case 65: case 66: case 67: case 68: case 69: case 70: case 71: case 72: case 73: case 74: case 75: case 76: case 77: case 78: case 79: case 80: case 81: case 82: case 83: case 84: case 85: case 86: case 87: case 88: case 89: case 90: case 91: case 92: case 93: case 94: case 95: case 96: case 97: case 98: case 99: case 100: case 101: case 102: case 103: case 104: case 105: case 106: case 107: case 108: case 109: case 110: case 111: case 112: case 113: case 114: case 115: case 116: case 117: case 118: case 119: case 120: case 121: case 122: case 123: case 124: case 125: case 126: case 127: case 128: case 129: case 130: case 131: case 132: case 133: case 134: case 135: case 136: case 137: case 138: case 139: case 140: case 141: case 142: case 143: case 144: case 145: case 146: case 147: case 148: case 149: case 150: case 151: case 152: case 153: case 154: case 155: case 156: case 157: case 158: case 159: case 160: case 161: case 162: case 163: case 164: case 165: case 166: case 167: case 168: case 169: case 170: case 171: case 172: case 173: case 174: case 175: case 176: case 177: case 178: case 179: case 180: case 181: case 182: case 183: case 184: case 185: case 186: case 187: case 188: case 189: case 190: case 191: case 192: case 193: case 194: case 195: case 196: case 197: case 198: case 199: case 200: case 201: case 202: case 203: case 204: case 205: case 206: case 207: case 208: case 209: case 210: case 211: case 212: case 213: case 214: case 215: case 216: case 217: case 218: case 219: case 220: case 221: case 222: case 223: case 224: case 225: case 226: case 227: case 228: case 229: case 230: case 231: case 232: case 233: case 234: case 235: case 236: case 237: case 238: case 239: case 240: case 241: case 242: case 243: case 244: case 245: case 246: case 247: case 248: case 249: case 250: case 251: case 252: case 253: case 254: case 255: case 256: case 257: case 258: case 259: case 260: case 261: case 262: case 263: case 264: case 265: case 266: case 267: case 268: case 269: case 270: case 271: case 272: case 273: case 274: case 275: case 276: case 277: case 278: case 279: case 280: case 281: case 282: case 283: case 284: case 285: case 286: case 287: case 288: case 289: case 290: case 291: case 292: case 293: case 294: case 295: case 296: case 297: case 298: case 299: case 300: case 301: case 302: case 303: case 304: case 305: case 306: case 307: case 308: case 309: case 310: case 311: case 312: case 313: case 314: case 315: case 316: case 317: case 318: case 319: case 320: case 321: case 322: case 323: case 324: case 325: case 326: case 327: case 328: case 329: case 330: case 331: case 332: case 333: case 334: case 335: case 336: case 337: case 338: case 339: case 340: case 341: case 342: case 343: case 344: case 345: case 346: case 347: case 348: case 349: case 350: case 351: case 352: case 353: case 354: case 355: case 356: case 357: case 358: case 359: case 360: case 361: case 362: case 363: case 364: case 365: case 366: case 367: case 368: case 369: case 370: case 371: case 372: case 373: case 374: case 375: case 376: case 377: case 378: case 379: case 380: case 381: case 382: case 383: case 384: case 385: case 386: case 387: case 388: case 389: case 390: case 391: case 392: case 393: case 394: case 395: case 396: case 397: case 398: case 399: case 400: case 401: case 402: case 403: case 404: case 405: case 406: case 407: case 408: case 409: case 410: case 411: case 412: case 413: case 414: case 415: case 416: case 417: case 418: case 419: case 420: case 421: case 422: case 423: case 424: case 425: case 426: case 427: case 428: case 429: case 430: case 431: case 432: case 433: case 434: case 435: case 436: case 437: case 438: case 439: case 440: case 441: case 442: case 443: case 444: case 445: case 446: case 447: case 448: case 449: case 450: case 451: case 452: case 453: case 454: case 455: case 456: case 457: case 458: case 459: case 460: case 461: case 462: case 463: case 464: case 465: case 466: case 467: case 468: case 469: case 470: case 471: case 472: case 473: case 474: case 475: case 476: case 477: case 478: case 479: case 480: case 481: case 482: case 483: case 484: case 485: case 486: case 487: case 488: case 489: case 490: case 491: case 492: case 493: case 494: case 495: case 496: case 497: case 498: case 499: case 500: case 501: case 502: case 503: case 504: case 505: case 506: case 507: case 508: case 509: case 510: case 511: case 512: case 513: case 514: case 515: case 516: case 517: case 518: case 519: case 520: case 521: case 522: case 523: case 524: case 525: case 526: case 527: case 528: case 529: case 530: case 531: case 532: case 533: case 534: case 535: case 536: case 537: case 538: case 539: case 540: case 541: case 542: case 543: case 544: case 545: case 546: case 547: case 548: case 549: case 550: case 551: case 552: case 553: case 554: case 555: case 556: case 557: case 558: case 559: case 560: case 561: case 562: case 563: case 564: case 565: case 566: case 567: case 568: case 569: case 570: case 571: case 572: case 573: case 574: case 575: case 576: case 577: case 578: case 579: case 580: case 581: case 582: case 583: case 584: case 585: case 586: case 587: case 588: case 589: case 590: case 591: case 592: case 593: case 594: case 595: case 596: case 597: case 598: case 599: case 600: case 601: case 602: case 603: case 604: case 605: case 606: case 607: case 608: case 609: case 610: case 611: case 612: case 613: case 614: case 615: case 616: case 617: case 618: case 619: case 620: case 621: case 622: case 623: case 624: case 625: case 626: case 627: case 628: case 629:
 this.$ = yytext; 
break;
case 630: case 631:
 this.$ = eval($$[$0].split("\n").join("\\n"));
break;
case 632: case 633:
 this.$ = { 'S': eval($$[$0].split("\n").join("\\n")).toString() } 
break;
case 634:
 this.$ = eval($$[$0]); 
break;
case 635:
 this.$ = { 'N': eval($$[$0]).toString() } 
break;
case 638:
 this.$ = { 'BOOL': true  } 
break;
case 639:
 this.$ = { 'BOOL': false } 
break;
case 640:
 this.$ = null; 
break;
case 641:
 this.$ = { 'NULL': true } 
break;
case 642:
 this.$ = "\0"; 
break;
case 643:

			if ($$[$0-1].slice(-1) == "\0") {
				this.$ = $$[$0-1].slice(0,-1)
			} else
				this.$ = $$[$0-1];
		
break;
case 644: case 654:

			this.$ = $$[$0-2]
			this.$.push($$[$0]);
		
break;
case 646: case 656:
 this.$ = "\0" 
break;
case 653:

			if ($$[$0-1].slice(-1) == "\0") {
				$$[$0-1] = $$[$0-1].slice(0,-1)
			}
			this.$ = { 'L': $$[$0-1] }
		
break;
case 665:

			var $kv = {}
			if ($$[$0-1]) {
				$$[$0-1].map(function(v) {
					if (v)
						$kv[v[0]] = v[1]
				})
			}
			this.$ = $kv
		
break;
case 666: case 688: case 746: case 749: case 760: case 776: case 797: case 858: case 872: case 889:
 this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 668: case 693: case 791: case 803: case 853: case 856: case 885: case 894:
 this.$ = undefined; 
break;
case 669: case 670: case 671: case 672: case 673: case 674: case 675: case 676: case 677: case 678: case 679: case 680: case 681: case 682: case 683: case 684: case 685: case 686: case 694: case 695: case 696: case 697: case 698: case 699: case 700: case 701:
 this.$ = [$$[$0-2], $$[$0] ] 
break;
case 687:

			var $kv = {}
			if ($$[$0-1]) {
				$$[$0-1].map(function(v) {
					if (v)
						$kv[v[0]] = v[1]
				})
			}
			this.$ = { 'M': $kv }
		
break;
case 690: case 691:
 this.$ = eval($$[$0]) 
break;
case 702:

			if ($$[$0-2].slice(-1) == "\0") {
				$$[$0-2] = $$[$0-2].slice(0,-1)
			}
			this.$ = { 'SS': $$[$0-2] }
		
break;
case 703: case 709:

			this.$ = $$[$0-2] 
			this.$.push($$[$0]); 
		
break;
case 705:

			if ($$[$0-2].slice(-1) == "\0") {
				$$[$0-2] = $$[$0-2].slice(0,-1)
			}
			this.$ = { 'NS': $$[$0-2] }
		
break;
case 706:

			this.$ = $$[$0-2] 
			this.$.push( ($$[$0]).toString() ); 
		
break;
case 707:
 this.$ = [ ($$[$0]).toString() ]; 
break;
case 708:

			this.$ = { 'BS': $$[$0-2] }
		
break;
case 710: case 772: case 787: case 859: case 875:
 this.$ = [ $$[$0] ]; 
break;
case 711:

			var date;
			if ($$[$0-1])
				date = new Date($$[$0-1]);
			else
				date = new Date()

			if (typeof date === "object") {
				this.$ = date.toString()
			}
			if (typeof date === "string") {
				this.$ = date
			}
			if (typeof date === "number") {
				this.$ = date
			}
		
break;
case 712:

			var date;
			if ($$[$0-5])
				date = new Date($$[$0-5]);
			else
				date = new Date()


			if (typeof date[$$[$0-2]] === "function" ) {
				date = date[$$[$0-2]]();
				if (typeof date === "object") {
					this.$ = date.toString()
				}
				if (typeof date === "string") {
					this.$ = date
				}
				if (typeof date === "number") {
					this.$ = date
				}
			} else {
				throw $$[$0-2] + " not a function"
			}
		
break;
case 713:

			var date;
			if ($$[$0-1])
				date = new Date($$[$0-1]);
			else
				date = new Date()

			if (typeof date === "object") {
				this.$ = { S: date.toString() }
			}
			if (typeof date === "string") {
				this.$ = { S: date }
			}
			if (typeof date === "number") {
				this.$ = { N: date.toString() }
			}
		
break;
case 714:

			var date;
			if ($$[$0-5])
				date = new Date($$[$0-5]);
			else
				date = new Date()


			if (typeof date[$$[$0-2]] === "function" ) {
				date = date[$$[$0-2]]();
				if (typeof date === "object") {
					this.$ = { S: date.toString() }
				}
				if (typeof date === "string") {
					this.$ = { S: date }
				}
				if (typeof date === "number") {
					this.$ = { N: date.toString() }
				}
			} else {
				throw $$[$0-2] + " not a function"
			}
		
break;
case 715: case 721:
 this.$ = undefined 
break;
case 717:

			if (typeof $$[$0] === "object") {
				this.$ = { S: $$[$0].toString() }
			}
			if (typeof $$[$0] === "string") {
				this.$ = { S: $$[$0] }
			}
			if (typeof $$[$0] === "number") {
				this.$ = { N: $$[$0].toString() }
			}
		
break;
case 718:

			if (typeof Math[$$[$0-3]] === "function" ) {
				this.$ = Math[$$[$0-3]]($$[$0-1]);
			} else {
				throw 'Math.' + $$[$0-3] + " not a function"
			}
		
break;
case 720:
 this.$ = 'random' 
break;
case 723:

			this.$ =  '########-####-####-####-############'.replace(/[#]/g, function(c) { var r = Math.random()*16|0, v = c == '#' ? r : (r&0x3|0x8); return v.toString(16); })
 		
break;
case 724:

			this.$ =  '########-####-####-####-############'.replace(/[#]/g, function(c) { var r = Math.random()*16|0, v = c == '#' ? r : (r&0x3|0x8); return v.toString(16); })
			if ( typeof $$[$0-1] === 'string')
				this.$ =  $$[$0-1].replace(/[#]/g, function(c) { var r = Math.random()*16|0, v = c == '#' ? r : (r&0x3|0x8); return v.toString(16); })

			if ( typeof $$[$0-1] === 'number')
				this.$ = '#'.repeat(
					Math.max(
						1,
						Math.min(36, $$[$0-1])
					)
				).replace(/[#]/g, function(c) { var r = Math.random()*16|0, v = c == '#' ? r : (r&0x3|0x8); return v.toString(16); })
		
break;
case 725:

			if ( $$[$0-7] !== 'Buffer')
				throw ('ReferenceError: ' + $$[$0-7] + ' is not defined')

			if ( $$[$0-5] !== 'from')
				throw ('TypeError: Buffer.' + $$[$0-5] + ' is not a function')

			if ( $$[$0-1] !== 'base64')
				throw ('TypeError: Buffer.from - only base64 supported')

			var buf;

			if (!$$[$0-1])
				buf = Uint8Array.from( $$[$0-3] , function (c) { return c.charCodeAt(0) } )

			if ($$[$0-1] === 'base64')
				buf = Uint8Array.from( btoa($$[$0-3]) , function (c) { return c.charCodeAt(0) } )

			this.$ = buf;
		
break;
case 726:

			if ( $$[$0] instanceof Uint8Array ) {
				this.$ = { B: $$[$0] }
				return;
			}
			if (typeof $$[$0] === "object") {
				this.$ = { S: $$[$0].toString() }
			}
			if (typeof $$[$0] === "string") {
				this.$ = { S: $$[$0] }
			}
			if (typeof $$[$0] === "number") {
				this.$ = { N: $$[$0].toString() }
			}
		
break;
case 729: case 748:
 this.$ = $$[$0-1] 
break;
case 730:
 this.$ = $$[$0-2] + $$[$0] 
break;
case 731:
 this.$ = $$[$0-2] - $$[$0] 
break;
case 732:
 this.$ = $$[$0-2] * $$[$0] 
break;
case 733:

			if ($$[$0] === 0 )
				throw 'Division by 0';

			this.$ = $$[$0-2] / $$[$0]
		
break;
case 742:

			var $kv = {}
			$$[$0].map(function(v) { $kv[v[0]] = v[1] })

			this.$ = {
				statement: 'INSERT',
				operation: 'putItem',
				ignore: $$[$0-4],
				dynamodb: {
					TableName: $$[$0-2],
					Item: $kv,

				},

			};

		
break;
case 743:

			if ($$[$0].length == 1) {
				this.$ = {
					statement: 'INSERT',
					operation: 'putItem',
					ignore: $$[$0-4],
					dynamodb: {
						TableName: $$[$0-2],
						Item: $$[$0][0].M,
					},

				};
			} else {
				// batch insert
				this.$ = {
					statement: 'BATCHINSERT',
					operation: 'batchWriteItem',
					dynamodb: {
						RequestItems: {}
					}

				}

				var RequestItems = {}

				RequestItems[$$[$0-2]] = []

				$$[$0].map(function(v) {
					RequestItems[$$[$0-2]].push({
						PutRequest: {
							Item: v.M
						}
					})
				})
				this.$.dynamodb.RequestItems = RequestItems;
			}
		
break;
case 744:
 this.$ = false 
break;
case 745:
 this.$ = true 
break;
case 751: case 752: case 753: case 754: case 755: case 756: case 757: case 758: case 762: case 763: case 764: case 765: case 766: case 767: case 768: case 769: case 778: case 779: case 780: case 781: case 782: case 783: case 784: case 785: case 832: case 833:
 this.$ = [ $$[$0-2], $$[$0] ]; 
break;
case 759:


			var Key = {}
			$$[$0].map(function(k) {
				Key[k.k] = k.v
			})
			var Expected = {}
			$$[$0].map(function(k) {
				Expected[k.k] = {
					ComparisonOperator: 'EQ',
					Value: k.v,

				}
			})

			var AttributeUpdates = {}
			$$[$0-2].map(function(k) {
				var Value = k[1]
				var Action = 'PUT' // default

				if (k[2] === '+=')
					Action = 'ADD'

				if (k[2] === 'delete') {
					Action = 'DELETE'

				}

				AttributeUpdates[k[0]] = {
					Action: Action,
					Value: Value,
				}
			})

			this.$ = {
				statement: 'UPDATE',
				operation: 'updateItem',
				dynamodb: {
					TableName: $$[$0-4],
					Key: Key,
					Expected: Expected,
					AttributeUpdates: AttributeUpdates,
				},
			}
		
break;
case 770:
 this.$ = [ $$[$0-2], $$[$0], '+=' ]; 
break;
case 771:
 this.$ = [ $$[$0-2], undefined, 'delete' ]; 
break;
case 773: case 788:
 this.$ = [$$[$0-2], $$[$0]]; 
break;
case 774: case 789:
 this.$ = {k: $$[$0-2], v: $$[$0] }; 
break;
case 775:

			var $kv = {}
			$$[$0].map(function(v) {
				$kv[v[0]] = v[1]
			})
			this.$ = {
				statement: 'REPLACE',
				operation: 'putItem',
				dynamodb: {
					TableName: $$[$0-2],
					Item: $kv
				},
			}
		
break;
case 786:

			var $kv = {}
			$$[$0].map(function(v) { $kv[v.k] = v.v })

			this.$ = {
				statement: 'DELETE',
				operation: 'deleteItem',
				dynamodb: {
					TableName: $$[$0-2],
					Key: $kv,
				}
			}
		
break;
case 790:

			this.$ = {
				statement: 'SELECT',
				operation: 'query',
				dynamodb: $$[$0-3].dynamodb,
			};
			yy.extend(this.$.dynamodb,$$[$0-2]);
			yy.extend(this.$.dynamodb,$$[$0-1]);
			yy.extend(this.$.dynamodb,$$[$0]);
		
break;
case 792:
 this.$ = { Limit: $$[$0] }; 
break;
case 793:
 this.$ = { ScanIndexForward: true }; 
break;
case 794:
 this.$ = { ScanIndexForward: false }; 
break;
case 795: case 887:
 this.$ = { ConsistentRead: false }; 
break;
case 796:
 this.$ = { ConsistentRead: true }; 
break;
case 799: case 891:
 this.$ = {type: 'star', star:true}; 
break;
case 800: case 892:
 this.$ = {type: 'column', column: $$[$0]}; 
break;
case 801: case 893:
 this.$ = {type: 'column', column: $$[$0-2], alias: $$[$0] }; 
break;
case 805:

			this.$ = {
				//KeyConditionExpression: $$[$0],
				ExpressionAttributeNames: {},
				ExpressionAttributeValues: {},
			};

			this.$.ExpressionAttributeNames[ '#partitionKeyName' ] = $$[$0].partition.partitionKeyName
			this.$.ExpressionAttributeValues[ ':partitionKeyValue' ] = $$[$0].partition.partitionKeyValue
			this.$.KeyConditionExpression = ' #partitionKeyName =  :partitionKeyValue '

		
break;
case 806:

			this.$ = {
				//KeyConditionExpression: $$[$0-2],
				ExpressionAttributeNames: {},
				ExpressionAttributeValues: {},
			};

			this.$.ExpressionAttributeNames[ '#partitionKeyName' ] = $$[$0-2].partition.partitionKeyName
			this.$.ExpressionAttributeValues[ ':partitionKeyValue' ] = $$[$0-2].partition.partitionKeyValue
			this.$.KeyConditionExpression = ' #partitionKeyName =  :partitionKeyValue '


			if ($$[$0].sort) {
				this.$.ExpressionAttributeNames[ '#sortKeyName' ] = $$[$0].sort.sortKeyName

				switch ($$[$0].sort.op) {
					case '=':
					case '>':
					case '>=':
					case '<':
					case '<=':
						this.$.ExpressionAttributeValues[ ':sortKeyValue' ] = $$[$0].sort.sortKeyValue
						this.$.KeyConditionExpression += ' AND #sortKeyName ' + $$[$0].sort.op + ' :sortKeyValue '

						break;
					case 'BETWEEN':
						this.$.ExpressionAttributeValues[ ':sortKeyValue1' ] = $$[$0].sort.sortKeyValue1
						this.$.ExpressionAttributeValues[ ':sortKeyValue2' ] = $$[$0].sort.sortKeyValue2
						this.$.KeyConditionExpression += ' AND #sortKeyName BETWEEN :sortKeyValue1 AND :sortKeyValue2'
						break;
					case 'BEGINS_WITH':

						if ($$[$0].sort.sortKeyValue.S.slice(-1) !== '%' )
							throw "LIKE '%string' must end with a % for sort key "


						$$[$0].sort.sortKeyValue.S = $$[$0].sort.sortKeyValue.S.slice(0,-1)

						this.$.ExpressionAttributeValues[ ':sortKeyValue' ] = $$[$0].sort.sortKeyValue
						this.$.KeyConditionExpression += ' AND begins_with ( #sortKeyName, :sortKeyValue ) '

						break;
				}

			}


		
break;
case 807: case 896:
 this.$ = {having: $$[$0]}; 
break;
case 809:

			this.$ = {
				dynamodb: {
					TableName: $$[$0-3],
					IndexName: $$[$0-2],
				},
				columns:$$[$0-4]
			};

			yy.extend(this.$.dynamodb,$$[$0-1]);
			yy.extend(this.$.dynamodb,$$[$0]);

			// if we have star, then the rest does not matter
			if (this.$.columns.filter(function(c) { return c.type === 'star'}).length === 0) {
				if (!this.$.dynamodb.hasOwnProperty('ExpressionAttributeNames'))
					this.$.dynamodb.ExpressionAttributeNames = {}

				var ExpressionAttributeNames_from_projection = { }
				var ProjectionExpression = []
				this.$.columns.map(function(c) {
					if (c.type === "column") {
						var replaced_name = '#projection_' + c.column.split('-').join('_minus_').split('.').join('_dot_')
						ExpressionAttributeNames_from_projection[replaced_name] = c.column;
						ProjectionExpression.push(replaced_name)
					}

				})

				yy.extend(this.$.dynamodb.ExpressionAttributeNames,ExpressionAttributeNames_from_projection);

				if (ProjectionExpression.length)
					this.$.dynamodb.ProjectionExpression = ProjectionExpression.join(' , ')

			}


		
break;
case 811: case 838: case 900:
 this.$ = {bind_parameter: $$[$0]}; 
break;
case 812: case 839: case 901:
 this.$ = {column: $$[$0]}; 
break;
case 813: case 840: case 902:
 this.$ = {op: 'AND', left: $$[$0-2], right: $$[$0]}; 
break;
case 814: case 841: case 903:
 this.$ = {op: 'OR', left: $$[$0-2], right: $$[$0]}; 
break;
case 815: case 842: case 904:
 this.$ = {op: '=', left: $$[$0-2], right: $$[$0]}; 
break;
case 816: case 843: case 905:
 this.$ = {op: '>', left: $$[$0-2], right: $$[$0]}; 
break;
case 817: case 844: case 906:
 this.$ = {op: '>=', left: $$[$0-2], right: $$[$0]}; 
break;
case 818: case 845: case 907:
 this.$ = {op: '<', left: $$[$0-2], right: $$[$0]}; 
break;
case 819: case 846: case 908:
 this.$ = {op: '<=', left: $$[$0-2], right: $$[$0]}; 
break;
case 820: case 847: case 909:
 this.$ = {op: 'BETWEEN', left: $$[$0-2], right:$$[$0] }; 
break;
case 821: case 848: case 910:
 this.$ = {op: 'LIKE', left:$$[$0-2], right: { type: 'string', string: $$[$0] } }; 
break;
case 822:

			this.$ = {
				partition: {
					partitionKeyName: $$[$0-2],
					partitionKeyValue: $$[$0]
				}
			}
		
break;
case 824:

			this.$ = {
				sort: {
					sortKeyName: $$[$0-2],
					sortKeyValue: $$[$0],
					op: '='
				}
			}
		
break;
case 825:

			this.$ = {
				sort: {
					sortKeyName: $$[$0-2],
					sortKeyValue: $$[$0],
					op: '>'
				}
			}
		
break;
case 826:

			this.$ = {
				sort: {
					sortKeyName: $$[$0-2],
					sortKeyValue: $$[$0],
					op: '>='
				}
			}
		
break;
case 827:

			this.$ = {
				sort: {
					sortKeyName: $$[$0-2],
					sortKeyValue: $$[$0],
					op: '<'
				}
			}
		
break;
case 828:

			this.$ = {
				sort: {
					sortKeyName: $$[$0-2],
					sortKeyValue: $$[$0],
					op: '<='
				}
			}
		
break;
case 829:

			this.$ = {
				sort: {
					sortKeyName: $$[$0-2],
					sortKeyValue1: $$[$0][0],
					sortKeyValue2: $$[$0][1],
					op: 'BETWEEN'
				}
			}
		
break;
case 830:

			this.$ = {
				sort: {
					sortKeyName: $$[$0-2],
					sortKeyValue: $$[$0],
					op: 'BEGINS_WITH'
				}
			}
		
break;
case 834:
 this.$ = {left: { type: 'number', number: $$[$0-2]}, right: {type: 'number', number: $$[$0] } }; 
break;
case 835:
 this.$ = {left: { type: 'string', string: $$[$0-2]}, right: {type: 'string', string: $$[$0] } }; 
break;
case 849: case 911:
 this.$ = {op: 'CONTAINS', left:$$[$0-2], right: { type: 'string', string: $$[$0] } }; 
break;
case 850: case 912:
 this.$ = {op: 'CONTAINS', left:$$[$0-2], right: { type: 'number', number: $$[$0] } }; 
break;
case 851: case 913:
 this.$ = {op: 'CONTAINS', left:$$[$0-2], right: { type: 'boolean', value: $$[$0] } }; 
break;
case 852:

			this.$ = {
				statement: 'CREATE_TABLE',
				operation: 'createTable',
				dynamodb: {
					TableName: $$[$0-6],
					BillingMode: $$[$0-8],
					AttributeDefinitions: $$[$0-4],
				}

			};
			yy.extend(this.$.dynamodb,$$[$0-2]); // extend with pk
			yy.extend(this.$.dynamodb,$$[$0-1]); // extend with indexes
		
break;
case 857:

			var indexes = {
				LocalSecondaryIndexes: [],
				GlobalSecondaryIndexes: []
			}

			$$[$0].map(function(idx) {
				if (idx.hasOwnProperty('LSI'))
					indexes.LocalSecondaryIndexes.push(idx.LSI)
				if (idx.hasOwnProperty('GSI'))
					indexes.GlobalSecondaryIndexes.push(idx.GSI)
			})
			this.$ = indexes
		
break;
case 860:

			this.$ = {}
			this.$[$$[$0-4]] = {
				IndexName: $$[$0-5],
				KeySchema: [ { AttributeName: $$[$0-2], KeyType: 'HASH' } ],
				Projection: $$[$0],
			}
		
break;
case 861:

			this.$ = {}
			this.$[$$[$0-5]] = {
				IndexName: $$[$0-6],
				KeySchema: [ { AttributeName: $$[$0-3], KeyType: 'HASH' } ],
				Projection: $$[$0-1],
				ProvisionedThroughput: $$[$0]
			}
		
break;
case 862:

			this.$ = {}
			this.$[$$[$0-6]] = {
				IndexName: $$[$0-7],
				KeySchema: [ { AttributeName: $$[$0-4], KeyType: 'HASH' }, { AttributeName: $$[$0-2], KeyType: 'RANGE' } ],
				Projection: $$[$0],
			}
		
break;
case 863:

			this.$ = {}
			this.$[$$[$0-7]] = {
				IndexName: $$[$0-8],
				KeySchema: [ { AttributeName: $$[$0-5], KeyType: 'HASH' }, { AttributeName: $$[$0-3], KeyType: 'RANGE' } ],
				Projection: $$[$0-1],
				ProvisionedThroughput: $$[$0]
			}
		
break;
case 864:
 this.$ = { KeySchema: [ { AttributeName: $$[$0-2], KeyType: 'HASH' }], ProvisionedThroughput: $$[$0] }  
break;
case 865:
 this.$ = { KeySchema: [ { AttributeName: $$[$0-4], KeyType: 'HASH' } , { AttributeName: $$[$0-2], KeyType: 'RANGE' } ], ProvisionedThroughput: $$[$0] }  
break;
case 866:
 this.$ = { ReadCapacityUnits: 1, WriteCapacityUnits: 1 }; 
break;
case 867:
 this.$ = { ReadCapacityUnits: eval($$[$0-1]), WriteCapacityUnits: eval($$[$0]) } 
break;
case 868: case 869:
 this.$ = { ProjectionType: 'ALL' }; 
break;
case 870:
 this.$ = { ProjectionType: 'KEYS_ONLY' } 
break;
case 871:
 this.$ = { ProjectionType: 'INCLUDE', NonKeyAttributes: $$[$0-1] } 
break;
case 874:
 this.$ = $$[$0-2]; this.$.push($$[$0]) 
break;
case 876:
 this.$ = { AttributeName: $$[$0-1], AttributeType: 'S'}; 
break;
case 877:
 this.$ = { AttributeName: $$[$0-1], AttributeType: 'N'}; 
break;
case 878:
 this.$ = { AttributeName: $$[$0-1], AttributeType: 'B'}; 
break;
case 879:

			this.$ = {
				statement: 'SHOW_TABLES',
				operation: 'listTables',
				dynamodb: {}
			}
		
break;
case 880:

			this.$ = {
				statement: 'DROP_TABLE',
				operation: 'deleteTable',
				dynamodb: {
					TableName: $$[$0]
				}
			};
		
break;
case 881:

			this.$ = {
				statement: 'DESCRIBE_TABLE',
				operation: 'describeTable',
				dynamodb: {
					TableName: $$[$0]
				}
			};
		
break;
case 882:

			this.$ = {
				statement: 'DROP_INDEX',
				operation: 'updateTable',
				dynamodb: {
					TableName: $$[$0],
					GlobalSecondaryIndexUpdates: [
						{
							Delete: {
								IndexName: $$[$0-2]
							}
						}
					]
				}
			};
		
break;
case 883:

			this.$ = {
				statement: $$[$0-2].statement,
				operation: 'scan',
				dynamodb: $$[$0-2].dynamodb,
			};

			this.$.columns = $$[$0-2].columns
			this.$.having  = Object.keys($$[$0-2].having).length ? $$[$0-2].having : undefined;

			yy.extend(this.$.dynamodb, $$[$0-1]);
			yy.extend(this.$.dynamodb, $$[$0]);
		
break;
case 884:

			this.$ = {
				dynamodb: {
					TableName: $$[$0-3],
					IndexName: $$[$0-2],
				},
				statement: 'SCAN',
				columns:$$[$0-5],
				having: {},
			};
			yy.extend(this.$,$$[$0-1]); // filter

			if ($$[$0] && $$[$0].type === 'stream')
				this.$.statement = 'SCAN_DUMP_STREAM'

			// if we have star, then the rest does not matter
			if (this.$.columns.filter(function(c) { return c.type === 'star'}).length === 0) {
				if (!this.$.dynamodb.hasOwnProperty('ExpressionAttributeNames'))
					this.$.dynamodb.ExpressionAttributeNames = {}

				var ExpressionAttributeNames_from_projection = { }
				var ProjectionExpression = []
				this.$.columns.map(function(c) {
					if (c.type === "column") {
						var replaced_name = '#projection_' + c.column.split('-').join('_minus_').split('.').join('_dot_')
						ExpressionAttributeNames_from_projection[replaced_name] = c.column;
						ProjectionExpression.push(replaced_name)
					}
				})

				yy.extend(this.$.dynamodb.ExpressionAttributeNames,ExpressionAttributeNames_from_projection);

				if (ProjectionExpression.length)
					this.$.dynamodb.ProjectionExpression = ProjectionExpression.join(' , ')

			}


		
break;
case 886:
 this.$ = {Limit: $$[$0]}; 
break;
case 888:
 this.$ = { ConsistentRead: true  }; 
break;
case 914:

			this.$ = { type: 'stream' };
		
break;
}
},
table: [{3:1,4:2,7:3,8:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:12,17:13,18:14,19:$V0,161:$V1,182:$V2,187:$V3,200:$V4,300:$V5,465:$V6,493:$V7,502:$V8,516:$V9,598:$Va,701:16,734:25},{1:[3]},{5:[1,28],6:[1,29]},o($Vb,[2,3]),o($Vb,[2,4]),o($Vb,[2,5]),o($Vb,[2,6]),o($Vb,[2,7]),o($Vb,[2,8]),o($Vb,[2,9]),o($Vb,[2,10]),o($Vb,[2,11]),o($Vb,[2,12]),o($Vb,[2,13]),o($Vb,[2,14]),o($Vb,[2,15]),o($Vc,[2,793],{702:30,186:[1,31]}),{280:[1,33],306:[2,744],686:32},{21:$Vd,22:$Ve,23:35,24:38,28:34,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9},{306:[1,632]},{254:[1,633]},{68:[1,635],69:[1,636],558:[2,853],724:634},{59:[1,637]},{288:[1,639],558:[1,638]},{558:[1,640]},o($Vu9,[2,885],{735:641,329:[1,642]}),{20:646,21:$Vv9,22:$Vw9,684:$Vx9,705:643,706:644},{20:652,21:$Vv9,22:$Vw9,684:$Vy9,737:649,741:650},{1:[2,1]},{7:653,8:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:12,17:13,18:14,19:$V0,161:$V1,182:$V2,187:$V3,200:$V4,300:$V5,465:$V6,493:$V7,502:$V8,516:$V9,598:$Va,701:16,734:25},o($Vu9,[2,791],{703:654,329:[1,655]}),o($Vc,[2,794]),{306:[1,656]},{306:[2,745]},{510:[1,657]},o([5,6,50,272,306,329,510,602,610,623,666],[2,24]),o($Vz9,[2,18]),o($Vz9,[2,19]),o($Vz9,[2,20]),o($Vz9,[2,740]),o($Vz9,[2,741]),o($Vz9,[2,39]),o($Vz9,[2,40]),o($Vz9,[2,41]),o($Vz9,[2,42]),o($Vz9,[2,43]),o($Vz9,[2,44]),o($Vz9,[2,45]),o($Vz9,[2,46]),o($Vz9,[2,47]),o($Vz9,[2,48]),o($Vz9,[2,49]),o($Vz9,[2,50]),o($Vz9,[2,51]),o($Vz9,[2,52]),o($Vz9,[2,53]),o($Vz9,[2,54]),o($Vz9,[2,55]),o($Vz9,[2,56]),o($Vz9,[2,57]),o($Vz9,[2,58]),o($Vz9,[2,59]),o($Vz9,[2,60]),o($Vz9,[2,61]),o($Vz9,[2,62]),o($Vz9,[2,63]),o($Vz9,[2,64]),o($Vz9,[2,65]),o($Vz9,[2,66]),o($Vz9,[2,67]),o($Vz9,[2,68]),o($Vz9,[2,69]),o($Vz9,[2,70]),o($Vz9,[2,71]),o($Vz9,[2,72]),o($Vz9,[2,73]),o($Vz9,[2,74]),o($Vz9,[2,75]),o($Vz9,[2,76]),o($Vz9,[2,77]),o($Vz9,[2,78]),o($Vz9,[2,79]),o($Vz9,[2,80]),o($Vz9,[2,81]),o($Vz9,[2,82]),o($Vz9,[2,83]),o($Vz9,[2,84]),o($Vz9,[2,85]),o($Vz9,[2,86]),o($Vz9,[2,87]),o($Vz9,[2,88]),o($Vz9,[2,89]),o($Vz9,[2,90]),o($Vz9,[2,91]),o($Vz9,[2,92]),o($Vz9,[2,93]),o($Vz9,[2,94]),o($Vz9,[2,95]),o($Vz9,[2,96]),o($Vz9,[2,97]),o($Vz9,[2,98]),o($Vz9,[2,99]),o($Vz9,[2,100]),o($Vz9,[2,101]),o($Vz9,[2,102]),o($Vz9,[2,103]),o($Vz9,[2,104]),o($Vz9,[2,105]),o($Vz9,[2,106]),o($Vz9,[2,107]),o($Vz9,[2,108]),o($Vz9,[2,109]),o($Vz9,[2,110]),o($Vz9,[2,111]),o($Vz9,[2,112]),o($Vz9,[2,113]),o($Vz9,[2,114]),o($Vz9,[2,115]),o($Vz9,[2,116]),o($Vz9,[2,117]),o($Vz9,[2,118]),o($Vz9,[2,119]),o($Vz9,[2,120]),o($Vz9,[2,121]),o($Vz9,[2,122]),o($Vz9,[2,123]),o($Vz9,[2,124]),o($Vz9,[2,125]),o($Vz9,[2,126]),o($Vz9,[2,127]),o($Vz9,[2,128]),o($Vz9,[2,129]),o($Vz9,[2,130]),o($Vz9,[2,131]),o($Vz9,[2,132]),o($Vz9,[2,133]),o($Vz9,[2,134]),o($Vz9,[2,135]),o($Vz9,[2,136]),o($Vz9,[2,137]),o($Vz9,[2,138]),o($Vz9,[2,139]),o($Vz9,[2,140]),o($Vz9,[2,141]),o($Vz9,[2,142]),o($Vz9,[2,143]),o($Vz9,[2,144]),o($Vz9,[2,145]),o($Vz9,[2,146]),o($Vz9,[2,147]),o($Vz9,[2,148]),o($Vz9,[2,149]),o($Vz9,[2,150]),o($Vz9,[2,151]),o($Vz9,[2,152]),o($Vz9,[2,153]),o($Vz9,[2,154]),o($Vz9,[2,155]),o($Vz9,[2,156]),o($Vz9,[2,157]),o($Vz9,[2,158]),o($Vz9,[2,159]),o($Vz9,[2,160]),o($Vz9,[2,161]),o($Vz9,[2,162]),o($Vz9,[2,163]),o($Vz9,[2,164]),o($Vz9,[2,165]),o($Vz9,[2,166]),o($Vz9,[2,167]),o($Vz9,[2,168]),o($Vz9,[2,169]),o($Vz9,[2,170]),o($Vz9,[2,171]),o($Vz9,[2,172]),o($Vz9,[2,173]),o($Vz9,[2,174]),o($Vz9,[2,175]),o($Vz9,[2,176]),o($Vz9,[2,177]),o($Vz9,[2,178]),o($Vz9,[2,179]),o($Vz9,[2,180]),o($Vz9,[2,181]),o($Vz9,[2,182]),o($Vz9,[2,183]),o($Vz9,[2,184]),o($Vz9,[2,185]),o($Vz9,[2,186]),o($Vz9,[2,187]),o($Vz9,[2,188]),o($Vz9,[2,189]),o($Vz9,[2,190]),o($Vz9,[2,191]),o($Vz9,[2,192]),o($Vz9,[2,193]),o($Vz9,[2,194]),o($Vz9,[2,195]),o($Vz9,[2,196]),o($Vz9,[2,197]),o($Vz9,[2,198]),o($Vz9,[2,199]),o($Vz9,[2,200]),o($Vz9,[2,201]),o($Vz9,[2,202]),o($Vz9,[2,203]),o($Vz9,[2,204]),o($Vz9,[2,205]),o($Vz9,[2,206]),o($Vz9,[2,207]),o($Vz9,[2,208]),o($Vz9,[2,209]),o($Vz9,[2,210]),o($Vz9,[2,211]),o($Vz9,[2,212]),o($Vz9,[2,213]),o($Vz9,[2,214]),o($Vz9,[2,215]),o($Vz9,[2,216]),o($Vz9,[2,217]),o($Vz9,[2,218]),o($Vz9,[2,219]),o($Vz9,[2,220]),o($Vz9,[2,221]),o($Vz9,[2,222]),o($Vz9,[2,223]),o($Vz9,[2,224]),o($Vz9,[2,225]),o($Vz9,[2,226]),o($Vz9,[2,227]),o($Vz9,[2,228]),o($Vz9,[2,229]),o($Vz9,[2,230]),o($Vz9,[2,231]),o($Vz9,[2,232]),o($Vz9,[2,233]),o($Vz9,[2,234]),o($Vz9,[2,235]),o($Vz9,[2,236]),o($Vz9,[2,237]),o($Vz9,[2,238]),o($Vz9,[2,239]),o($Vz9,[2,240]),o($Vz9,[2,241]),o($Vz9,[2,242]),o($Vz9,[2,243]),o($Vz9,[2,244]),o($Vz9,[2,245]),o($Vz9,[2,246]),o($Vz9,[2,247]),o($Vz9,[2,248]),o($Vz9,[2,249]),o($Vz9,[2,250]),o($Vz9,[2,251]),o($Vz9,[2,252]),o($Vz9,[2,253]),o($Vz9,[2,254]),o($Vz9,[2,255]),o($Vz9,[2,256]),o($Vz9,[2,257]),o($Vz9,[2,258]),o($Vz9,[2,259]),o($Vz9,[2,260]),o($Vz9,[2,261]),o($Vz9,[2,262]),o($Vz9,[2,263]),o($Vz9,[2,264]),o($Vz9,[2,265]),o($Vz9,[2,266]),o($Vz9,[2,267]),o($Vz9,[2,268]),o($Vz9,[2,269]),o($Vz9,[2,270]),o($Vz9,[2,271]),o($Vz9,[2,272]),o($Vz9,[2,273]),o($Vz9,[2,274]),o($Vz9,[2,275]),o($Vz9,[2,276]),o($Vz9,[2,277]),o($Vz9,[2,278]),o($Vz9,[2,279]),o($Vz9,[2,280]),o($Vz9,[2,281]),o($Vz9,[2,282]),o($Vz9,[2,283]),o($Vz9,[2,284]),o($Vz9,[2,285]),o($Vz9,[2,286]),o($Vz9,[2,287]),o($Vz9,[2,288]),o($Vz9,[2,289]),o($Vz9,[2,290]),o($Vz9,[2,291]),o($Vz9,[2,292]),o($Vz9,[2,293]),o($Vz9,[2,294]),o($Vz9,[2,295]),o($Vz9,[2,296]),o($Vz9,[2,297]),o($Vz9,[2,298]),o($Vz9,[2,299]),o($Vz9,[2,300]),o($Vz9,[2,301]),o($Vz9,[2,302]),o($Vz9,[2,303]),o($Vz9,[2,304]),o($Vz9,[2,305]),o($Vz9,[2,306]),o($Vz9,[2,307]),o($Vz9,[2,308]),o($Vz9,[2,309]),o($Vz9,[2,310]),o($Vz9,[2,311]),o($Vz9,[2,312]),o($Vz9,[2,313]),o($Vz9,[2,314]),o($Vz9,[2,315]),o($Vz9,[2,316]),o($Vz9,[2,317]),o($Vz9,[2,318]),o($Vz9,[2,319]),o($Vz9,[2,320]),o($Vz9,[2,321]),o($Vz9,[2,322]),o($Vz9,[2,323]),o($Vz9,[2,324]),o($Vz9,[2,325]),o($Vz9,[2,326]),o($Vz9,[2,327]),o($Vz9,[2,328]),o($Vz9,[2,329]),o($Vz9,[2,330]),o($Vz9,[2,331]),o($Vz9,[2,332]),o($Vz9,[2,333]),o($Vz9,[2,334]),o($Vz9,[2,335]),o($Vz9,[2,336]),o($Vz9,[2,337]),o($Vz9,[2,338]),o($Vz9,[2,339]),o($Vz9,[2,340]),o($Vz9,[2,341]),o($Vz9,[2,342]),o($Vz9,[2,343]),o($Vz9,[2,344]),o($Vz9,[2,345]),o($Vz9,[2,346]),o($Vz9,[2,347]),o($Vz9,[2,348]),o($Vz9,[2,349]),o($Vz9,[2,350]),o($Vz9,[2,351]),o($Vz9,[2,352]),o($Vz9,[2,353]),o($Vz9,[2,354]),o($Vz9,[2,355]),o($Vz9,[2,356]),o($Vz9,[2,357]),o($Vz9,[2,358]),o($Vz9,[2,359]),o($Vz9,[2,360]),o($Vz9,[2,361]),o($Vz9,[2,362]),o($Vz9,[2,363]),o($Vz9,[2,364]),o($Vz9,[2,365]),o($Vz9,[2,366]),o($Vz9,[2,367]),o($Vz9,[2,368]),o($Vz9,[2,369]),o($Vz9,[2,370]),o($Vz9,[2,371]),o($Vz9,[2,372]),o($Vz9,[2,373]),o($Vz9,[2,374]),o($Vz9,[2,375]),o($Vz9,[2,376]),o($Vz9,[2,377]),o($Vz9,[2,378]),o($Vz9,[2,379]),o($Vz9,[2,380]),o($Vz9,[2,381]),o($Vz9,[2,382]),o($Vz9,[2,383]),o($Vz9,[2,384]),o($Vz9,[2,385]),o($Vz9,[2,386]),o($Vz9,[2,387]),o($Vz9,[2,388]),o($Vz9,[2,389]),o($Vz9,[2,390]),o($Vz9,[2,391]),o($Vz9,[2,392]),o($Vz9,[2,393]),o($Vz9,[2,394]),o($Vz9,[2,395]),o($Vz9,[2,396]),o($Vz9,[2,397]),o($Vz9,[2,398]),o($Vz9,[2,399]),o($Vz9,[2,400]),o($Vz9,[2,401]),o($Vz9,[2,402]),o($Vz9,[2,403]),o($Vz9,[2,404]),o($Vz9,[2,405]),o($Vz9,[2,406]),o($Vz9,[2,407]),o($Vz9,[2,408]),o($Vz9,[2,409]),o($Vz9,[2,410]),o($Vz9,[2,411]),o($Vz9,[2,412]),o($Vz9,[2,413]),o($Vz9,[2,414]),o($Vz9,[2,415]),o($Vz9,[2,416]),o($Vz9,[2,417]),o($Vz9,[2,418]),o($Vz9,[2,419]),o($Vz9,[2,420]),o($Vz9,$VA9),o($Vz9,[2,422]),o($Vz9,[2,423]),o($Vz9,[2,424]),o($Vz9,[2,425]),o($Vz9,[2,426]),o($Vz9,[2,427]),o($Vz9,[2,428]),o($Vz9,[2,429]),o($Vz9,[2,430]),o($Vz9,[2,431]),o($Vz9,[2,432]),o($Vz9,[2,433]),o($Vz9,[2,434]),o($Vz9,[2,435]),o($Vz9,[2,436]),o($Vz9,[2,437]),o($Vz9,[2,438]),o($Vz9,[2,439]),o($Vz9,[2,440]),o($Vz9,[2,441]),o($Vz9,[2,442]),o($Vz9,[2,443]),o($Vz9,[2,444]),o($Vz9,[2,445]),o($Vz9,[2,446]),o($Vz9,[2,447]),o($Vz9,[2,448]),o($Vz9,[2,449]),o($Vz9,[2,450]),o($Vz9,[2,451]),o($Vz9,[2,452]),o($Vz9,[2,453]),o($Vz9,[2,454]),o($Vz9,[2,455]),o($Vz9,[2,456]),o($Vz9,[2,457]),o($Vz9,[2,458]),o($Vz9,[2,459]),o($Vz9,[2,460]),o($Vz9,[2,461]),o($Vz9,[2,462]),o($Vz9,[2,463]),o($Vz9,[2,464]),o($Vz9,[2,465]),o($Vz9,[2,466]),o($Vz9,[2,467]),o($Vz9,[2,468]),o($Vz9,[2,469]),o($Vz9,[2,470]),o($Vz9,[2,471]),o($Vz9,[2,472]),o($Vz9,[2,473]),o($Vz9,[2,474]),o($Vz9,[2,475]),o($Vz9,[2,476]),o($Vz9,[2,477]),o($Vz9,[2,478]),o($Vz9,[2,479]),o($Vz9,[2,480]),o($Vz9,[2,481]),o($Vz9,[2,482]),o($Vz9,[2,483]),o($Vz9,[2,484]),o($Vz9,[2,485]),o($Vz9,[2,486]),o($Vz9,[2,487]),o($Vz9,[2,488]),o($Vz9,[2,489]),o($Vz9,[2,490]),o($Vz9,[2,491]),o($Vz9,[2,492]),o($Vz9,[2,493]),o($Vz9,[2,494]),o($Vz9,[2,495]),o($Vz9,[2,496]),o($Vz9,[2,497]),o($Vz9,[2,498]),o($Vz9,[2,499]),o($Vz9,[2,500]),o($Vz9,[2,501]),o($Vz9,[2,502]),o($Vz9,[2,503]),o($Vz9,[2,504]),o($Vz9,[2,505]),o($Vz9,[2,506]),o($Vz9,[2,507]),o($Vz9,[2,508]),o($Vz9,[2,509]),o($Vz9,[2,510]),o($Vz9,[2,511]),o($Vz9,[2,512]),o($Vz9,[2,513]),o($Vz9,[2,514]),o($Vz9,[2,515]),o($Vz9,[2,516]),o($Vz9,[2,517]),o($Vz9,[2,518]),o($Vz9,[2,519]),o($Vz9,[2,520]),o($Vz9,[2,521]),o($Vz9,[2,522]),o($Vz9,[2,523]),o($Vz9,[2,524]),o($Vz9,[2,525]),o($Vz9,[2,526]),o($Vz9,[2,527]),o($Vz9,[2,528]),o($Vz9,[2,529]),o($Vz9,[2,530]),o($Vz9,[2,531]),o($Vz9,[2,532]),o($Vz9,[2,533]),o($Vz9,[2,534]),o($Vz9,[2,535]),o($Vz9,[2,536]),o($Vz9,[2,537]),o($Vz9,[2,538]),o($Vz9,[2,539]),o($Vz9,[2,540]),o($Vz9,[2,541]),o($Vz9,[2,542]),o($Vz9,[2,543]),o($Vz9,[2,544]),o($Vz9,[2,545]),o($Vz9,[2,546]),o($Vz9,[2,547]),o($Vz9,[2,548]),o($Vz9,[2,549]),o($Vz9,[2,550]),o($Vz9,[2,551]),o($Vz9,[2,552]),o($Vz9,[2,553]),o($Vz9,[2,554]),o($Vz9,[2,555]),o($Vz9,[2,556]),o($Vz9,[2,557]),o($Vz9,[2,558]),o($Vz9,[2,559]),o($Vz9,[2,560]),o($Vz9,[2,561]),o($Vz9,[2,562]),o($Vz9,[2,563]),o($Vz9,[2,564]),o($Vz9,[2,565]),o($Vz9,[2,566]),o($Vz9,[2,567]),o($Vz9,[2,568]),o($Vz9,[2,569]),o($Vz9,[2,570]),o($Vz9,[2,571]),o($Vz9,[2,572]),o($Vz9,[2,573]),o($Vz9,[2,574]),o($Vz9,[2,575]),o($Vz9,[2,576]),o($Vz9,[2,577]),o($Vz9,[2,578]),o($Vz9,[2,579]),o($Vz9,[2,580]),o($Vz9,[2,581]),o($Vz9,[2,582]),o($Vz9,[2,583]),o($Vz9,[2,584]),o($Vz9,[2,585]),o($Vz9,[2,586]),o($Vz9,[2,587]),o($Vz9,[2,588]),o($Vz9,[2,589]),o($Vz9,[2,590]),o($Vz9,[2,591]),o($Vz9,[2,592]),o($Vz9,[2,593]),o($Vz9,[2,594]),o($Vz9,[2,595]),o($Vz9,[2,596]),o($Vz9,[2,597]),o($Vz9,[2,598]),o($Vz9,[2,599]),o($Vz9,[2,600]),o($Vz9,[2,601]),o($Vz9,[2,602]),o($Vz9,[2,603]),o($Vz9,[2,604]),o($Vz9,[2,605]),o($Vz9,[2,606]),o($Vz9,[2,607]),o($Vz9,[2,608]),o($Vz9,[2,609]),o($Vz9,[2,610]),o($Vz9,[2,611]),o($Vz9,[2,612]),o($Vz9,[2,613]),o($Vz9,[2,614]),o($Vz9,[2,615]),o($Vz9,[2,616]),o($Vz9,[2,617]),o($Vz9,[2,618]),o($Vz9,[2,619]),o($Vz9,[2,620]),o($Vz9,[2,621]),o($Vz9,[2,622]),o($Vz9,[2,623]),o($Vz9,[2,624]),o($Vz9,[2,625]),o($Vz9,[2,626]),o($Vz9,[2,627]),o($Vz9,[2,628]),o($Vz9,[2,629]),{21:$Vd,22:$Ve,23:35,24:38,28:658,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9},{21:$Vd,22:$Ve,23:35,24:38,28:659,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9},{558:[1,660]},{558:[2,854]},{558:[2,855]},o($Vb,[2,879]),{21:$Vd,22:$Ve,23:35,24:38,28:661,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9},{21:$Vd,22:$Ve,23:663,24:38,29:662,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9},{21:$Vd,22:$Ve,23:35,24:38,28:664,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9},o($Vb,[2,887],{736:665,50:[1,666]}),{33:667,34:$VB9},{254:[1,671],647:[1,670],707:669},o($VC9,[2,798]),o($VC9,[2,799]),o($VC9,[2,800],{80:[1,672]}),o($VD9,[2,16]),o($VD9,[2,17]),{254:[1,673],647:[1,674]},o($VC9,[2,890]),o($VC9,[2,891]),o($VC9,[2,892],{80:[1,675]}),o($Vb,[2,2]),o($Vb,[2,795],{704:676,50:[1,677]}),{33:678,34:$VB9},{21:$Vd,22:$Ve,23:35,24:38,28:679,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9},{21:$Vd,22:$Ve,23:683,24:38,30:682,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9,692:680,694:681},{510:[1,684]},{623:[1,685]},{21:$Vd,22:$Ve,23:35,24:38,28:686,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9},o($Vb,[2,880]),{386:[1,687]},o([5,6,50,63,64,272,306,329,386,623],[2,25]),o($Vb,[2,881]),o($Vb,[2,883]),o($Vb,[2,888]),o($Vu9,[2,886]),o([5,6,34,50,55,76,101,186,306,328,329,393,647,668,691,716,717,718,719],[2,29]),{602:[1,689],623:[2,803],708:688},{20:646,21:$Vv9,22:$Vw9,684:$Vx9,706:690},{21:$Vd,22:$Ve,23:35,24:38,28:691,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9},{20:692,21:$Vv9,22:$Vw9},{21:$Vd,22:$Ve,23:35,24:38,28:693,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9},{20:652,21:$Vv9,22:$Vw9,684:$Vy9,741:694},{20:695,21:$Vv9,22:$Vw9},o($Vb,[2,790]),o($Vb,[2,796]),o($Vu9,[2,792]),{510:[1,696],610:[1,697]},{623:[1,698],647:[1,699]},o($VE9,[2,761]),{691:[1,700],695:[1,701]},o([34,101,103,328,545,647,662,668,691,695,716,717,718,719],[2,26]),{21:$Vd,22:$Ve,23:683,24:38,30:704,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9,697:702,698:703},{21:$Vd,22:$Ve,23:683,24:38,30:707,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9,699:705,700:706},{666:[1,708]},{21:$Vd,22:$Ve,23:35,24:38,28:709,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9},{623:[1,711],709:710},{288:[1,712]},o($VC9,[2,797]),o([602,623],[2,802]),o($VC9,[2,801]),o($VF9,[2,894],{738:713,602:[1,714]}),o($VC9,[2,889]),o($VC9,[2,893]),{21:$Vd,22:$Ve,23:683,24:38,30:717,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9,687:715,690:716},{666:$VG9,688:718,689:719},{20:723,21:$Vv9,22:$Vw9,693:721,696:722},{21:$Vd,22:$Ve,23:683,24:38,30:682,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9,694:724},{34:$VH9,36:$VI9,37:$VJ9,41:$VK9,42:$VL9,46:$VM9,57:[1,741],70:$VN9,373:$VO9,378:$VP9,606:$VQ9,634:749,636:748,639:726,641:727,642:733,644:$VR9,650:729,653:725,654:728,655:731,656:730,657:732,658:$VS9,666:$VT9,671:747,672:744,675:734,677:745,680:746,682:742},{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,653:756,666:$VT9,671:747,672:744,675:734,677:745,680:746,682:742},o($Vb,[2,775],{647:[1,758]}),o($VV9,[2,777]),{691:[1,759]},o($Vb,[2,786]),o($Vb,[2,787],{76:[1,760]}),{691:[1,761]},{21:$Vd,22:$Ve,23:683,24:38,30:764,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9,725:762,733:763},o($Vb,[2,882]),o($VW9,[2,808],{712:765,272:[1,766]}),{21:$Vd,22:$Ve,23:683,24:38,30:768,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9,710:767},{21:$Vd,22:$Ve,23:663,24:38,29:769,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9},o($VX9,[2,897],{739:770,272:[1,771]}),{288:[1,772]},o($Vb,[2,742],{647:[1,773]}),o($VV9,[2,750]),{691:[1,774]},o($Vb,[2,743],{647:[1,775]}),o($VV9,[2,747]),{654:776,658:$VS9},o($Vb,[2,759]),o($Vb,[2,772],{76:[1,777]}),{691:[1,778]},o($VE9,[2,760]),o($VE9,[2,762]),o($VE9,[2,763]),o($VE9,[2,764]),o($VE9,[2,765]),o($VE9,[2,766]),o($VE9,[2,767]),o($VE9,[2,768]),o($VE9,[2,769]),o($VE9,[2,771]),o([5,6,50,76,186,272,329,623,646,647,660],[2,726],{356:$VY9,683:$VZ9,684:$V_9,685:$V$9}),o($V0a,[2,638]),o($V0a,[2,639]),o($V0a,[2,641]),o($V1a,$V2a,{24:38,44:39,72:40,23:683,663:783,664:784,665:785,30:788,21:$Vd,22:$Ve,34:$Vf,36:$V3a,37:$V4a,41:$Vg,42:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9}),o($V5a,$V6a,{675:734,682:742,672:744,677:745,680:746,671:747,636:748,634:749,651:789,652:790,653:791,639:792,641:793,650:794,654:795,655:796,656:797,657:798,34:$VH9,36:$VI9,37:$VJ9,41:$VK9,42:$VL9,46:$VM9,70:$VN9,373:$VO9,378:$VP9,606:$VQ9,644:$VR9,658:$VS9,666:$VT9}),{60:[1,799],61:[1,800],62:[1,801],169:$V7a},o($VE9,[2,642]),o($V8a,[2,728]),{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,666:$VT9,671:747,672:744,675:803,677:745,680:746,682:742},o($V8a,[2,734]),o($V8a,[2,735]),o($V8a,[2,736]),o($V8a,[2,737]),o($V8a,[2,738]),o($V8a,[2,739]),{26:[1,804]},{666:[1,805]},{26:[1,806]},o($V8a,[2,634]),o($V8a,[2,630]),o($V8a,[2,631]),o($VE9,[2,770]),{169:$V7a},{21:$Vd,22:$Ve,23:683,24:38,30:704,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9,698:807},{34:$VH9,36:$VI9,37:$VJ9,41:$VK9,42:$VL9,46:$VM9,70:$VN9,373:$VO9,378:$VP9,606:$VQ9,634:749,636:748,639:809,641:810,644:$VR9,650:812,653:808,654:811,655:814,656:813,657:815,658:$VS9,666:$VT9,671:747,672:744,675:734,677:745,680:746,682:742},{21:$Vd,22:$Ve,23:683,24:38,30:707,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9,700:816},{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,653:817,666:$VT9,671:747,672:744,675:734,677:745,680:746,682:742},{647:[1,818]},{647:[2,875]},{34:[1,820],103:[1,821],545:[1,819]},o($VW9,[2,809]),{20:826,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:823,41:$Vca,42:$Vda,43:824,713:822,715:$Vea},o($Vfa,[2,805],{76:[1,834]}),{691:[1,835]},{623:[2,804]},o($Vc,[2,915],{740:836,306:[1,837]}),{20:842,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:839,41:$Vca,42:$Vda,43:840,715:$Vga,742:838},{21:$Vd,22:$Ve,23:663,24:38,29:843,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9},{21:$Vd,22:$Ve,23:683,24:38,30:717,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9,690:844},{34:$VH9,36:$VI9,37:$VJ9,41:$VK9,42:$VL9,46:$VM9,70:$VN9,373:$VO9,378:$VP9,606:$VQ9,634:749,636:748,639:846,641:847,644:$VR9,650:849,653:845,654:848,655:851,656:850,657:852,658:$VS9,666:$VT9,671:747,672:744,675:734,677:745,680:746,682:742},{666:$VG9,689:853},{668:[1,854]},{20:723,21:$Vv9,22:$Vw9,696:855},{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,653:856,666:$VT9,671:747,672:744,675:734,677:745,680:746,682:742},{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,666:$VT9,671:747,672:744,675:857,677:745,680:746,682:742},{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,666:$VT9,671:747,672:744,675:858,677:745,680:746,682:742},{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,666:$VT9,671:747,672:744,675:859,677:745,680:746,682:742},{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,666:$VT9,671:747,672:744,675:860,677:745,680:746,682:742},{647:[1,862],660:[1,861]},o($V1a,[2,689]),{662:[1,863]},{662:[2,690]},{662:[2,691]},{662:[2,692]},{646:[1,864],647:[1,865]},o($V5a,[2,655]),o($V5a,[2,657]),o($V5a,[2,658]),o($V5a,[2,659]),o($V5a,[2,660]),o($V5a,[2,661]),o($V5a,[2,662]),o($V5a,[2,663]),o($V5a,[2,664]),{666:[1,866]},{666:[1,867]},{666:[1,868]},{666:[1,869]},{356:$VY9,668:[1,870],683:$VZ9,684:$V_9,685:$V$9},{21:[1,872],442:[1,873],678:871},{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,666:$VT9,668:[1,874],671:747,672:744,675:876,677:745,680:746,681:875,682:742},{254:[1,877]},o($VV9,[2,776]),o($VV9,[2,778]),o($VV9,[2,779]),o($VV9,[2,780]),o($VV9,[2,781]),o($VV9,[2,782]),o($VV9,[2,783]),o($VV9,[2,784]),o($VV9,[2,785]),o($Vb,[2,788]),o($Vha,[2,789]),{21:$Vd,22:$Ve,23:683,24:38,30:764,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:[1,880],427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9,726:878,733:879},{647:[2,876]},{647:[2,877]},{647:[2,878]},o($VW9,[2,807],{55:$Via,76:$Vja,101:$Vka,328:$Vla,393:[1,882],691:$Vma,716:$Vna,717:$Voa,718:$Vpa,719:$Vqa}),o($Vra,[2,836]),o($Vra,[2,837]),o($Vra,[2,838]),o($Vra,[2,839]),o($Vsa,[2,33]),o($Vsa,[2,34]),o($Vsa,[2,37]),o($Vsa,[2,38]),o($Vsa,[2,30]),o($Vsa,[2,31]),o($Vsa,[2,32]),{21:$Vd,22:$Ve,23:683,24:38,30:892,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9,711:891},{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,653:894,666:$VT9,671:747,672:744,675:734,677:745,680:746,682:742,721:893},o($Vc,[2,884]),{544:[1,895]},o($VX9,[2,896],{55:$Vta,76:$Vua,101:$Vva,328:$Vwa,393:[1,897],691:$Vxa,716:$Vya,717:$Vza,718:$VAa,719:$VBa}),o($VCa,[2,898]),o($VCa,[2,899]),o($VCa,[2,900]),o($VCa,[2,901]),o($VF9,[2,895]),o($VV9,[2,749]),o($VV9,[2,751]),o($VV9,[2,752]),o($VV9,[2,753]),o($VV9,[2,754]),o($VV9,[2,755]),o($VV9,[2,756]),o($VV9,[2,757]),o($VV9,[2,758]),o($VV9,[2,746]),o($VV9,[2,748]),o($Vb,[2,773]),o($Vha,[2,774]),o($VDa,[2,730],{684:$V_9,685:$V$9}),o($VDa,[2,731],{684:$V_9,685:$V$9}),o($V8a,[2,732]),o($V8a,[2,733]),o([5,6,623,646,647,660,668],[2,687]),o($V1a,$V2a,{24:38,44:39,72:40,23:683,665:785,30:788,664:906,21:$Vd,22:$Ve,34:$Vf,36:$V3a,37:$V4a,41:$Vg,42:$Vh,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9}),{34:$VH9,36:$VI9,37:$VJ9,41:$VK9,42:$VL9,46:$VM9,70:$VN9,373:$VO9,378:$VP9,606:$VQ9,634:749,636:748,639:908,641:909,644:$VR9,650:910,653:907,654:911,655:912,656:913,657:914,658:$VS9,666:$VT9,671:747,672:744,675:734,677:745,680:746,682:742},o($V0a,[2,653]),o($V5a,$V6a,{675:734,682:742,672:744,677:745,680:746,671:747,636:748,634:749,653:791,639:792,641:793,650:794,654:795,655:796,656:797,657:798,652:915,34:$VH9,36:$VI9,37:$VJ9,41:$VK9,42:$VL9,46:$VM9,70:$VN9,373:$VO9,378:$VP9,606:$VQ9,644:$VR9,658:$VS9,666:$VT9}),{644:[1,916]},{644:[1,917]},{644:[1,918]},{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,666:$VT9,668:[2,715],671:747,672:744,673:919,675:920,677:745,680:746,682:742},o($V8a,[2,729]),{666:[1,921]},{666:[2,719]},{666:[2,720]},o($V8a,[2,723]),{668:[1,922]},{356:$VY9,668:[2,727],683:$VZ9,684:$V_9,685:$V$9},{666:[1,923]},{647:[1,925],668:[2,856],727:924},{647:[2,874]},o([34,103,545],$VA9,{314:[1,926]}),{20:826,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:823,41:$Vca,42:$Vda,43:824,713:927,715:$Vea},{20:826,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:823,41:$Vca,42:$Vda,43:824,713:928,715:$Vea},{20:826,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:823,41:$Vca,42:$Vda,43:824,713:929,715:$Vea},{20:826,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:823,41:$Vca,42:$Vda,43:824,713:930,715:$Vea},{20:826,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:823,41:$Vca,42:$Vda,43:824,713:931,715:$Vea},{20:826,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:823,41:$Vca,42:$Vda,43:824,713:932,715:$Vea},{20:826,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:823,41:$Vca,42:$Vda,43:824,713:933,715:$Vea},{33:935,34:$VB9,35:936,36:$V9a,37:$Vaa,38:$Vba,720:934},{35:937,36:$V9a,37:$Vaa,38:$Vba},{33:939,34:$VB9,35:938,36:$V9a,37:$Vaa,38:$Vba,41:$Vca,42:$Vda,43:940},o($Vfa,[2,806]),{101:[1,946],328:[1,947],691:[1,941],716:[1,942],717:[1,943],718:[1,944],719:[1,945]},o($VEa,[2,822]),o($VEa,[2,823]),o($Vc,[2,914]),{20:842,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:839,41:$Vca,42:$Vda,43:840,715:$Vga,742:948},{20:842,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:839,41:$Vca,42:$Vda,43:840,715:$Vga,742:949},{20:842,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:839,41:$Vca,42:$Vda,43:840,715:$Vga,742:950},{20:842,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:839,41:$Vca,42:$Vda,43:840,715:$Vga,742:951},{20:842,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:839,41:$Vca,42:$Vda,43:840,715:$Vga,742:952},{20:842,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:839,41:$Vca,42:$Vda,43:840,715:$Vga,742:953},{20:842,21:$Vv9,22:$Vw9,33:827,34:$VB9,35:828,36:$V9a,37:$Vaa,38:$Vba,39:839,41:$Vca,42:$Vda,43:840,715:$Vga,742:954},{33:935,34:$VB9,35:936,36:$V9a,37:$Vaa,38:$Vba,720:955},{35:956,36:$V9a,37:$Vaa,38:$Vba},{33:958,34:$VB9,35:957,36:$V9a,37:$Vaa,38:$Vba,41:$Vca,42:$Vda,43:959},o($V1a,[2,688]),o($V1a,[2,694]),o($V1a,[2,695]),o($V1a,[2,696]),o($V1a,[2,697]),o($V1a,[2,698]),o($V1a,[2,699]),o($V1a,[2,700]),o($V1a,[2,701]),o($V5a,[2,654]),{36:$VI9,37:$VJ9,634:961,667:960},{34:$VH9,636:963,669:962},{70:$VN9,670:964,671:965},{668:[1,966]},{356:$VY9,668:[2,716],683:$VZ9,684:$V_9,685:$V$9},{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,666:$VT9,668:[2,721],671:747,672:744,675:968,677:745,679:967,680:746,682:742},o($V8a,[2,724]),{36:$VI9,37:$VJ9,634:969},{668:[1,970]},{288:$VFa,728:971,729:972},{666:[1,974]},o([5,6,50,76,186,329,393],[2,840],{55:$Via,101:$Vka,328:$Vla,691:$Vma,716:$Vna,717:$Voa,718:$Vpa,719:$Vqa}),o([5,6,50,186,329,393],[2,841],{55:$Via,76:$Vja,101:$Vka,328:$Vla,691:$Vma,716:$Vna,717:$Voa,718:$Vpa,719:$Vqa}),o([5,6,50,55,76,101,186,328,329,393,691],[2,842],{716:$Vna,717:$Voa,718:$Vpa,719:$Vqa}),o($Vra,[2,843]),o($Vra,[2,844]),o($Vra,[2,845]),o($Vra,[2,846]),o($Vra,[2,847]),{76:[1,975]},{76:[1,976]},o($Vra,[2,848]),o($Vra,[2,849]),o($Vra,[2,850]),o($Vra,[2,851]),{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,653:978,666:$VT9,671:747,672:744,675:734,677:745,680:746,682:742,722:977},{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,653:978,666:$VT9,671:747,672:744,675:734,677:745,680:746,682:742,722:979},{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,653:978,666:$VT9,671:747,672:744,675:734,677:745,680:746,682:742,722:980},{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,653:978,666:$VT9,671:747,672:744,675:734,677:745,680:746,682:742,722:981},{34:$VH9,36:$VI9,37:$VJ9,46:$VM9,70:$VN9,373:$VU9,606:$VQ9,634:749,636:748,653:978,666:$VT9,671:747,672:744,675:734,677:745,680:746,682:742,722:982},{34:$VGa,36:$VHa,37:$VIa,635:985,637:984,723:983},{36:$VHa,37:$VIa,635:989},o([5,6,50,76,306,329,393],[2,902],{55:$Vta,101:$Vva,328:$Vwa,691:$Vxa,716:$Vya,717:$Vza,718:$VAa,719:$VBa}),o([5,6,50,306,329,393],[2,903],{55:$Vta,76:$Vua,101:$Vva,328:$Vwa,691:$Vxa,716:$Vya,717:$Vza,718:$VAa,719:$VBa}),o([5,6,50,55,76,101,306,328,329,393,691],[2,904],{716:$Vya,717:$Vza,718:$VAa,719:$VBa}),o($VCa,[2,905]),o($VCa,[2,906]),o($VCa,[2,907]),o($VCa,[2,908]),o($VCa,[2,909]),o($VCa,[2,910]),o($VCa,[2,911]),o($VCa,[2,912]),o($VCa,[2,913]),{646:[1,990],647:[1,991]},o($V5a,[2,704]),{646:[1,992],647:[1,993]},o($V5a,[2,707]),{646:[1,994],647:[1,995]},o($V5a,[2,710]),o($V8a,[2,711],{26:[1,996]}),{668:[1,997]},{356:$VY9,668:[2,722],683:$VZ9,684:$V_9,685:$V$9},{647:[1,998]},o($Vb,[2,852]),{647:[1,999],668:[2,857]},o($VJa,[2,859]),{21:$Vd,22:$Ve,23:663,24:38,29:1000,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9},{20:1001,21:$Vv9,22:$Vw9},{33:1002,34:$VB9},{35:1003,36:$V9a,37:$Vaa,38:$Vba},o($Vfa,[2,824]),o($Vfa,[2,831]),o($Vfa,[2,825]),o($Vfa,[2,826]),o($Vfa,[2,827]),o($Vfa,[2,828]),o($Vfa,[2,829]),{76:[1,1004]},{76:[1,1005]},o($VEa,[2,635]),o($VEa,[2,632]),o($VEa,[2,633]),o($Vfa,[2,830]),{668:[1,1006]},{36:$VI9,37:$VJ9,634:1007},{668:[1,1008]},{34:$VH9,636:1009},{668:[1,1010]},{70:$VN9,671:1011},{21:[1,1012]},o($V8a,[2,718]),{36:$VI9,37:$VJ9,634:1013},{288:$VFa,729:1014},{63:[1,1016],64:[1,1015]},{647:[1,1018],668:[1,1017]},o($Vsa,[2,834]),o($Vsa,[2,835]),{34:$VGa,637:1019},{36:$VHa,37:$VIa,635:1020},o($V0a,[2,702]),o($V5a,[2,703]),o($V0a,[2,705]),o($V5a,[2,706]),o($V0a,[2,708]),o($V5a,[2,709]),{666:[1,1021]},{668:[1,1022]},o($VJa,[2,858]),{666:[1,1023]},{666:[1,1024]},o($VJa,$VKa,{731:1025,566:$VLa}),{20:1027,21:$Vv9,22:$Vw9},o($Vfa,[2,832]),o($Vfa,[2,833]),{668:[1,1028]},o($V8a,[2,725]),{20:1029,21:$Vv9,22:$Vw9},{20:1030,21:$Vv9,22:$Vw9},o($VJa,[2,864]),{33:1031,34:$VB9},{668:[1,1032]},o($V8a,[2,712]),{647:[1,1034],668:[1,1033]},{647:[1,1036],668:[1,1035]},{33:1037,34:$VB9},o($VJa,$VKa,{731:1038,566:$VLa}),o($VJa,$VMa,{730:1039,433:$VNa}),{20:1041,21:$Vv9,22:$Vw9},o($VOa,$VMa,{730:1042,433:$VNa}),{20:1043,21:$Vv9,22:$Vw9},o($VJa,[2,867]),o($VJa,[2,865]),o($VJa,[2,860]),{65:[1,1044],66:[1,1045],67:[1,1046]},{668:[1,1047]},o($VJa,$VKa,{731:1048,566:$VLa}),{668:[1,1049]},o($VOa,[2,869]),o($VOa,[2,870]),{666:[1,1050]},o($VJa,$VMa,{730:1051,433:$VNa}),o($VJa,[2,861]),o($VOa,$VMa,{730:1052,433:$VNa}),{21:$Vd,22:$Ve,23:683,24:38,30:1054,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9,732:1053},o($VJa,[2,862]),o($VJa,$VKa,{731:1055,566:$VLa}),{647:[1,1057],668:[1,1056]},o($VJa,[2,873]),o($VJa,[2,863]),o($VOa,[2,871]),{21:$Vd,22:$Ve,23:683,24:38,30:1058,34:$Vf,41:$Vg,42:$Vh,44:39,45:$Vi,46:$Vj,47:$Vk,48:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr,55:$Vs,56:$Vt,57:$Vu,58:$Vv,59:$Vw,60:$Vx,61:$Vy,62:$Vz,63:$VA,64:$VB,65:$VC,66:$VD,67:$VE,68:$VF,69:$VG,70:$VH,71:$VI,72:40,73:$VJ,74:$VK,75:$VL,76:$VM,77:$VN,78:$VO,79:$VP,80:$VQ,81:$VR,82:$VS,83:$VT,84:$VU,85:$VV,86:$VW,87:$VX,88:$VY,89:$VZ,90:$V_,91:$V$,92:$V01,93:$V11,94:$V21,95:$V31,96:$V41,97:$V51,98:$V61,99:$V71,100:$V81,101:$V91,102:$Va1,103:$Vb1,104:$Vc1,105:$Vd1,106:$Ve1,107:$Vf1,108:$Vg1,109:$Vh1,110:$Vi1,111:$Vj1,112:$Vk1,113:$Vl1,114:$Vm1,115:$Vn1,116:$Vo1,117:$Vp1,118:$Vq1,119:$Vr1,120:$Vs1,121:$Vt1,122:$Vu1,123:$Vv1,124:$Vw1,125:$Vx1,126:$Vy1,127:$Vz1,128:$VA1,129:$VB1,130:$VC1,131:$VD1,132:$VE1,133:$VF1,134:$VG1,135:$VH1,136:$VI1,137:$VJ1,138:$VK1,139:$VL1,140:$VM1,141:$VN1,142:$VO1,143:$VP1,144:$VQ1,145:$VR1,146:$VS1,147:$VT1,148:$VU1,149:$VV1,150:$VW1,151:$VX1,152:$VY1,153:$VZ1,154:$V_1,155:$V$1,156:$V02,157:$V12,158:$V22,159:$V32,160:$V42,161:$V52,162:$V62,163:$V72,164:$V82,165:$V92,166:$Va2,167:$Vb2,168:$Vc2,169:$Vd2,170:$Ve2,171:$Vf2,172:$Vg2,173:$Vh2,174:$Vi2,175:$Vj2,176:$Vk2,177:$Vl2,178:$Vm2,179:$Vn2,180:$Vo2,181:$Vp2,182:$Vq2,183:$Vr2,184:$Vs2,185:$Vt2,186:$Vu2,187:$Vv2,188:$Vw2,189:$Vx2,190:$Vy2,191:$Vz2,192:$VA2,193:$VB2,194:$VC2,195:$VD2,196:$VE2,197:$VF2,198:$VG2,199:$VH2,200:$VI2,201:$VJ2,202:$VK2,203:$VL2,204:$VM2,205:$VN2,206:$VO2,207:$VP2,208:$VQ2,209:$VR2,210:$VS2,211:$VT2,212:$VU2,213:$VV2,214:$VW2,215:$VX2,216:$VY2,217:$VZ2,218:$V_2,219:$V$2,220:$V03,221:$V13,222:$V23,223:$V33,224:$V43,225:$V53,226:$V63,227:$V73,228:$V83,229:$V93,230:$Va3,231:$Vb3,232:$Vc3,233:$Vd3,234:$Ve3,235:$Vf3,236:$Vg3,237:$Vh3,238:$Vi3,239:$Vj3,240:$Vk3,241:$Vl3,242:$Vm3,243:$Vn3,244:$Vo3,245:$Vp3,246:$Vq3,247:$Vr3,248:$Vs3,249:$Vt3,250:$Vu3,251:$Vv3,252:$Vw3,253:$Vx3,254:$Vy3,255:$Vz3,256:$VA3,257:$VB3,258:$VC3,259:$VD3,260:$VE3,261:$VF3,262:$VG3,263:$VH3,264:$VI3,265:$VJ3,266:$VK3,267:$VL3,268:$VM3,269:$VN3,270:$VO3,271:$VP3,272:$VQ3,273:$VR3,274:$VS3,275:$VT3,276:$VU3,277:$VV3,278:$VW3,279:$VX3,280:$VY3,281:$VZ3,282:$V_3,283:$V$3,284:$V04,285:$V14,286:$V24,287:$V34,288:$V44,289:$V54,290:$V64,291:$V74,292:$V84,293:$V94,294:$Va4,295:$Vb4,296:$Vc4,297:$Vd4,298:$Ve4,299:$Vf4,300:$Vg4,301:$Vh4,302:$Vi4,303:$Vj4,304:$Vk4,305:$Vl4,306:$Vm4,307:$Vn4,308:$Vo4,309:$Vp4,310:$Vq4,311:$Vr4,312:$Vs4,313:$Vt4,314:$Vu4,315:$Vv4,316:$Vw4,317:$Vx4,318:$Vy4,319:$Vz4,320:$VA4,321:$VB4,322:$VC4,323:$VD4,324:$VE4,325:$VF4,326:$VG4,327:$VH4,328:$VI4,329:$VJ4,330:$VK4,331:$VL4,332:$VM4,333:$VN4,334:$VO4,335:$VP4,336:$VQ4,337:$VR4,338:$VS4,339:$VT4,340:$VU4,341:$VV4,342:$VW4,343:$VX4,344:$VY4,345:$VZ4,346:$V_4,347:$V$4,348:$V05,349:$V15,350:$V25,351:$V35,352:$V45,353:$V55,354:$V65,355:$V75,356:$V85,357:$V95,358:$Va5,359:$Vb5,360:$Vc5,361:$Vd5,362:$Ve5,363:$Vf5,364:$Vg5,365:$Vh5,366:$Vi5,367:$Vj5,368:$Vk5,369:$Vl5,370:$Vm5,371:$Vn5,372:$Vo5,373:$Vp5,374:$Vq5,375:$Vr5,376:$Vs5,377:$Vt5,378:$Vu5,379:$Vv5,380:$Vw5,381:$Vx5,382:$Vy5,383:$Vz5,384:$VA5,385:$VB5,386:$VC5,387:$VD5,388:$VE5,389:$VF5,390:$VG5,391:$VH5,392:$VI5,393:$VJ5,394:$VK5,395:$VL5,396:$VM5,397:$VN5,398:$VO5,399:$VP5,400:$VQ5,401:$VR5,402:$VS5,403:$VT5,404:$VU5,405:$VV5,406:$VW5,407:$VX5,408:$VY5,409:$VZ5,410:$V_5,411:$V$5,412:$V06,413:$V16,414:$V26,415:$V36,416:$V46,417:$V56,418:$V66,419:$V76,420:$V86,421:$V96,422:$Va6,423:$Vb6,424:$Vc6,425:$Vd6,426:$Ve6,427:$Vf6,428:$Vg6,429:$Vh6,430:$Vi6,431:$Vj6,432:$Vk6,433:$Vl6,434:$Vm6,435:$Vn6,436:$Vo6,437:$Vp6,438:$Vq6,439:$Vr6,440:$Vs6,441:$Vt6,442:$Vu6,443:$Vv6,444:$Vw6,445:$Vx6,446:$Vy6,447:$Vz6,448:$VA6,449:$VB6,450:$VC6,451:$VD6,452:$VE6,453:$VF6,454:$VG6,455:$VH6,456:$VI6,457:$VJ6,458:$VK6,459:$VL6,460:$VM6,461:$VN6,462:$VO6,463:$VP6,464:$VQ6,465:$VR6,466:$VS6,467:$VT6,468:$VU6,469:$VV6,470:$VW6,471:$VX6,472:$VY6,473:$VZ6,474:$V_6,475:$V$6,476:$V07,477:$V17,478:$V27,479:$V37,480:$V47,481:$V57,482:$V67,483:$V77,484:$V87,485:$V97,486:$Va7,487:$Vb7,488:$Vc7,489:$Vd7,490:$Ve7,491:$Vf7,492:$Vg7,493:$Vh7,494:$Vi7,495:$Vj7,496:$Vk7,497:$Vl7,498:$Vm7,499:$Vn7,500:$Vo7,501:$Vp7,502:$Vq7,503:$Vr7,504:$Vs7,505:$Vt7,506:$Vu7,507:$Vv7,508:$Vw7,509:$Vx7,510:$Vy7,511:$Vz7,512:$VA7,513:$VB7,514:$VC7,515:$VD7,516:$VE7,517:$VF7,518:$VG7,519:$VH7,520:$VI7,521:$VJ7,522:$VK7,523:$VL7,524:$VM7,525:$VN7,526:$VO7,527:$VP7,528:$VQ7,529:$VR7,530:$VS7,531:$VT7,532:$VU7,533:$VV7,534:$VW7,535:$VX7,536:$VY7,537:$VZ7,538:$V_7,539:$V$7,540:$V08,541:$V18,542:$V28,543:$V38,544:$V48,545:$V58,546:$V68,547:$V78,548:$V88,549:$V98,550:$Va8,551:$Vb8,552:$Vc8,553:$Vd8,554:$Ve8,555:$Vf8,556:$Vg8,557:$Vh8,558:$Vi8,559:$Vj8,560:$Vk8,561:$Vl8,562:$Vm8,563:$Vn8,564:$Vo8,565:$Vp8,566:$Vq8,567:$Vr8,568:$Vs8,569:$Vt8,570:$Vu8,571:$Vv8,572:$Vw8,573:$Vx8,574:$Vy8,575:$Vz8,576:$VA8,577:$VB8,578:$VC8,579:$VD8,580:$VE8,581:$VF8,582:$VG8,583:$VH8,584:$VI8,585:$VJ8,586:$VK8,587:$VL8,588:$VM8,589:$VN8,590:$VO8,591:$VP8,592:$VQ8,593:$VR8,594:$VS8,595:$VT8,596:$VU8,597:$VV8,598:$VW8,599:$VX8,600:$VY8,601:$VZ8,602:$V_8,603:$V$8,604:$V09,605:$V19,606:$V29,607:$V39,608:$V49,609:$V59,610:$V69,611:$V79,612:$V89,613:$V99,614:$Va9,615:$Vb9,616:$Vc9,617:$Vd9,618:$Ve9,619:$Vf9,620:$Vg9,621:$Vh9,622:$Vi9,623:$Vj9,624:$Vk9,625:$Vl9,626:$Vm9,627:$Vn9,628:$Vo9,629:$Vp9,630:$Vq9,631:$Vr9,632:$Vs9,633:$Vt9},o($VJa,[2,872])],
defaultActions: {28:[2,1],33:[2,745],635:[2,854],636:[2,855],763:[2,875],769:[2,804],786:[2,690],787:[2,691],788:[2,692],819:[2,876],820:[2,877],821:[2,878],872:[2,719],873:[2,720],879:[2,874]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 22
break;
case 1:return 36
break;
case 2:return 37
break;
case 3:/* skip -- comments */
break;
case 4:/* skip whitespace */
break;
case 5:return 47
break;
case 6:return 48
break;
case 7:return 49
break;
case 8:return 74
break;
case 9:return 75
break;
case 10:return 76
break;
case 11:return 80
break;
case 12:return 81
break;
case 13:return 88
break;
case 14:return 99
break;
case 15:return 100
break;
case 16:return 101
break;
case 17:return 112
break;
case 18:return 118
break;
case 19:return 120
break;
case 20:return 121
break;
case 21:return 125
break;
case 22:return 134
break;
case 23:return 137
break;
case 24:return 146
break;
case 25:return 50
break;
case 26:return 151
break;
case 27:return 161
break;
case 28:return 162
break;
case 29:return 'CURRENT DATE'
break;
case 30:return 'CURRENT TIME'
break;
case 31:return 'CURRENT TIMESTAMP'
break;
case 32:return 168
break;
case 33:return 176
break;
case 34:return 177
break;
case 35:return 178
break;
case 36:return 182
break;
case 37:return 186
break;
case 38:return 189
break;
case 39:return 195
break;
case 40:return 200
break;
case 41:return 187
break;
case 42:return 204
break;
case 43:return 206
break;
case 44:return 210
break;
case 45:return 214
break;
case 46:return 219
break;
case 47:return 222
break;
case 48:return 225
break;
case 49:return 227
break;
case 50:return 234
break;
case 51:return 247
break;
case 52:return 249
break;
case 53:return 254
break;
case 54:return 255
break;
case 55:return 261
break;
case 56:return 267
break;
case 57:return 272
break;
case 58:return 279
break;
case 59:return 280
break;
case 60:return 281
break;
case 61:return 283
break;
case 62:return 602
break;
case 63:return 288
break;
case 64:return 289
break;
case 65:return 293
break;
case 66:return 295
break;
case 67:return 300
break;
case 68:return 301
break;
case 69:return 304
break;
case 70:return 306
break;
case 71:return 308
break;
case 72:return 54
break;
case 73:return 313
break;
case 74:return 314
break;
case 75:return 324
break;
case 76:return 328
break;
case 77:return 55
break;
case 78:return 329
break;
case 79:return 347
break;
case 80:return 370
break;
case 81:return 375
break;
case 82:return 377
break;
case 83:return 56
break;
case 84:return 378
break;
case 85:return 57
break;
case 86:return 382
break;
case 87:return 384
break;
case 88:return 386
break;
case 89:return 393
break;
case 90:return 394
break;
case 91:return 399
break;
case 92:return 420
break;
case 93:return 58
break;
case 94:return 426
break;
case 95:return 438
break;
case 96:return 441
break;
case 97:return 451
break;
case 98:return 455
break;
case 99:return 457
break;
case 100:return 459
break;
case 101:return 461
break;
case 102:return 463
break;
case 103:return 465
break;
case 104:return 472
break;
case 105:return 479
break;
case 106:return 482
break;
case 107:return 485
break;
case 108:return 502
break;
case 109:return 493
break;
case 110:return 510
break;
case 111:return 558
break;
case 112:return 560
break;
case 113:return 565
break;
case 114:return 571
break;
case 115:return 581
break;
case 116:return 589
break;
case 117:return 590
break;
case 118:return 598
break;
case 119:return 605
break;
case 120:return 607
break;
case 121:return 610
break;
case 122:return 616
break;
case 123:return 621
break;
case 124:return 623
break;
case 125:return 626
break;
case 126:return 41
break;
case 127:return 42
break;
case 128:return 516
break;
case 129:return 59
break;
case 130:return 545
break;
case 131:return 34
break;
case 132:return 60
break;
case 133:return 61
break;
case 134:return 62
break;
case 135:return 566
break;
case 136:return 63
break;
case 137:return 64
break;
case 138:return 433
break;
case 139:return 65
break;
case 140:return 66
break;
case 141:return 67
break;
case 142:return 373
break;
case 143:return 68
break;
case 144:return 69
break;
case 145:return 70
break;
case 146:return 71
break;
case 147:return 73
break;
case 148:return 74
break;
case 149:return 75
break;
case 150:return 76
break;
case 151:return 77
break;
case 152:return 'ARCHIVE'
break;
case 153:return 78
break;
case 154:return 79
break;
case 155:return 80
break;
case 156:return 81
break;
case 157:return 82
break;
case 158:return 83
break;
case 159:return 84
break;
case 160:return 85
break;
case 161:return 86
break;
case 162:return 87
break;
case 163:return 88
break;
case 164:return 89
break;
case 165:return 90
break;
case 166:return 91
break;
case 167:return 92
break;
case 168:return 93
break;
case 169:return 94
break;
case 170:return 95
break;
case 171:return 96
break;
case 172:return 97
break;
case 173:return 98
break;
case 174:return 99
break;
case 175:return 100
break;
case 176:return 101
break;
case 177:return 102
break;
case 178:return 103
break;
case 179:return 104
break;
case 180:return 105
break;
case 181:return 106
break;
case 182:return 107
break;
case 183:return 108
break;
case 184:return 109
break;
case 185:return 110
break;
case 186:return 111
break;
case 187:return 112
break;
case 188:return 113
break;
case 189:return 114
break;
case 190:return 115
break;
case 191:return 116
break;
case 192:return 117
break;
case 193:return 118
break;
case 194:return 119
break;
case 195:return 120
break;
case 196:return 121
break;
case 197:return 122
break;
case 198:return 123
break;
case 199:return 124
break;
case 200:return 125
break;
case 201:return 126
break;
case 202:return 127
break;
case 203:return 128
break;
case 204:return 129
break;
case 205:return 130
break;
case 206:return 131
break;
case 207:return 132
break;
case 208:return 133
break;
case 209:return 134
break;
case 210:return 135
break;
case 211:return 136
break;
case 212:return 137
break;
case 213:return 138
break;
case 214:return 139
break;
case 215:return 140
break;
case 216:return 141
break;
case 217:return 142
break;
case 218:return 143
break;
case 219:return 144
break;
case 220:return 145
break;
case 221:return 146
break;
case 222:return 147
break;
case 223:return 148
break;
case 224:return 149
break;
case 225:return 150
break;
case 226:return 151
break;
case 227:return 152
break;
case 228:return 153
break;
case 229:return 154
break;
case 230:return 155
break;
case 231:return 156
break;
case 232:return 157
break;
case 233:return 158
break;
case 234:return 159
break;
case 235:return 160
break;
case 236:return 161
break;
case 237:return 162
break;
case 238:return 163
break;
case 239:return 164
break;
case 240:return 165
break;
case 241:return 166
break;
case 242:return 167
break;
case 243:return 168
break;
case 244:return 169
break;
case 245:return 170
break;
case 246:return 171
break;
case 247:return 172
break;
case 248:return 173
break;
case 249:return 174
break;
case 250:return 175
break;
case 251:return 176
break;
case 252:return 177
break;
case 253:return 178
break;
case 254:return 179
break;
case 255:return 180
break;
case 256:return 181
break;
case 257:return 182
break;
case 258:return 183
break;
case 259:return 184
break;
case 260:return 185
break;
case 261:return 186
break;
case 262:return 187
break;
case 263:return 188
break;
case 264:return 189
break;
case 265:return 190
break;
case 266:return 191
break;
case 267:return 192
break;
case 268:return 193
break;
case 269:return 194
break;
case 270:return 195
break;
case 271:return 196
break;
case 272:return 197
break;
case 273:return 198
break;
case 274:return 199
break;
case 275:return 200
break;
case 276:return 201
break;
case 277:return 202
break;
case 278:return 203
break;
case 279:return 204
break;
case 280:return 205
break;
case 281:return 206
break;
case 282:return 207
break;
case 283:return 208
break;
case 284:return 209
break;
case 285:return 210
break;
case 286:return 211
break;
case 287:return 212
break;
case 288:return 213
break;
case 289:return 214
break;
case 290:return 215
break;
case 291:return 216
break;
case 292:return 217
break;
case 293:return 218
break;
case 294:return 219
break;
case 295:return 220
break;
case 296:return 221
break;
case 297:return 222
break;
case 298:return 223
break;
case 299:return 224
break;
case 300:return 225
break;
case 301:return 226
break;
case 302:return 227
break;
case 303:return 228
break;
case 304:return 229
break;
case 305:return 230
break;
case 306:return 231
break;
case 307:return 232
break;
case 308:return 233
break;
case 309:return 234
break;
case 310:return 42
break;
case 311:return 235
break;
case 312:return 236
break;
case 313:return 237
break;
case 314:return 238
break;
case 315:return 239
break;
case 316:return 240
break;
case 317:return 241
break;
case 318:return 242
break;
case 319:return 243
break;
case 320:return 244
break;
case 321:return 245
break;
case 322:return 246
break;
case 323:return 247
break;
case 324:return 248
break;
case 325:return 249
break;
case 326:return 250
break;
case 327:return 251
break;
case 328:return 252
break;
case 329:return 253
break;
case 330:return 254
break;
case 331:return 255
break;
case 332:return 256
break;
case 333:return 257
break;
case 334:return 258
break;
case 335:return 259
break;
case 336:return 260
break;
case 337:return 261
break;
case 338:return 262
break;
case 339:return 263
break;
case 340:return 264
break;
case 341:return 265
break;
case 342:return 266
break;
case 343:return 267
break;
case 344:return 268
break;
case 345:return 269
break;
case 346:return 270
break;
case 347:return 271
break;
case 348:return 272
break;
case 349:return 273
break;
case 350:return 274
break;
case 351:return 275
break;
case 352:return 276
break;
case 353:return 277
break;
case 354:return 278
break;
case 355:return 279
break;
case 356:return 280
break;
case 357:return 281
break;
case 358:return 282
break;
case 359:return 283
break;
case 360:return 284
break;
case 361:return 285
break;
case 362:return 286
break;
case 363:return 287
break;
case 364:return 288
break;
case 365:return 289
break;
case 366:return 290
break;
case 367:return 291
break;
case 368:return 292
break;
case 369:return 293
break;
case 370:return 294
break;
case 371:return 295
break;
case 372:return 296
break;
case 373:return 297
break;
case 374:return 298
break;
case 375:return 299
break;
case 376:return 300
break;
case 377:return 301
break;
case 378:return 302
break;
case 379:return 303
break;
case 380:return 304
break;
case 381:return 305
break;
case 382:return 306
break;
case 383:return 307
break;
case 384:return 308
break;
case 385:return 309
break;
case 386:return 310
break;
case 387:return 311
break;
case 388:return 312
break;
case 389:return 313
break;
case 390:return 314
break;
case 391:return 315
break;
case 392:return 316
break;
case 393:return 317
break;
case 394:return 318
break;
case 395:return 319
break;
case 396:return 320
break;
case 397:return 321
break;
case 398:return 322
break;
case 399:return 323
break;
case 400:return 324
break;
case 401:return 325
break;
case 402:return 326
break;
case 403:return 327
break;
case 404:return 328
break;
case 405:return 329
break;
case 406:return 330
break;
case 407:return 331
break;
case 408:return 332
break;
case 409:return 333
break;
case 410:return 334
break;
case 411:return 335
break;
case 412:return 336
break;
case 413:return 337
break;
case 414:return 338
break;
case 415:return 339
break;
case 416:return 340
break;
case 417:return 341
break;
case 418:return 342
break;
case 419:return 343
break;
case 420:return 344
break;
case 421:return 345
break;
case 422:return 346
break;
case 423:return 347
break;
case 424:return 348
break;
case 425:return 349
break;
case 426:return 350
break;
case 427:return 351
break;
case 428:return 352
break;
case 429:return 353
break;
case 430:return 354
break;
case 431:return 355
break;
case 432:return 356
break;
case 433:return 357
break;
case 434:return 358
break;
case 435:return 359
break;
case 436:return 360
break;
case 437:return 361
break;
case 438:return 362
break;
case 439:return 363
break;
case 440:return 364
break;
case 441:return 365
break;
case 442:return 366
break;
case 443:return 367
break;
case 444:return 368
break;
case 445:return 369
break;
case 446:return 370
break;
case 447:return 371
break;
case 448:return 372
break;
case 449:return 373
break;
case 450:return 374
break;
case 451:return 375
break;
case 452:return 376
break;
case 453:return 377
break;
case 454:return 378
break;
case 455:return 379
break;
case 456:return 34
break;
case 457:return 380
break;
case 458:return 381
break;
case 459:return 382
break;
case 460:return 383
break;
case 461:return 384
break;
case 462:return 385
break;
case 463:return 386
break;
case 464:return 387
break;
case 465:return 388
break;
case 466:return 389
break;
case 467:return 390
break;
case 468:return 391
break;
case 469:return 392
break;
case 470:return 393
break;
case 471:return 394
break;
case 472:return 395
break;
case 473:return 396
break;
case 474:return 397
break;
case 475:return 398
break;
case 476:return 399
break;
case 477:return 400
break;
case 478:return 401
break;
case 479:return 402
break;
case 480:return 403
break;
case 481:return 404
break;
case 482:return 405
break;
case 483:return 406
break;
case 484:return 407
break;
case 485:return 408
break;
case 486:return 409
break;
case 487:return 410
break;
case 488:return 411
break;
case 489:return 412
break;
case 490:return 413
break;
case 491:return 414
break;
case 492:return 415
break;
case 493:return 416
break;
case 494:return 417
break;
case 495:return 418
break;
case 496:return 419
break;
case 497:return 420
break;
case 498:return 421
break;
case 499:return 422
break;
case 500:return 423
break;
case 501:return 424
break;
case 502:return 425
break;
case 503:return 426
break;
case 504:return 427
break;
case 505:return 428
break;
case 506:return 429
break;
case 507:return 430
break;
case 508:return 431
break;
case 509:return 432
break;
case 510:return 433
break;
case 511:return 434
break;
case 512:return 435
break;
case 513:return 436
break;
case 514:return 437
break;
case 515:return 438
break;
case 516:return 439
break;
case 517:return 440
break;
case 518:return 441
break;
case 519:return 442
break;
case 520:return 443
break;
case 521:return 444
break;
case 522:return 445
break;
case 523:return 446
break;
case 524:return 447
break;
case 525:return 448
break;
case 526:return 449
break;
case 527:return 450
break;
case 528:return 451
break;
case 529:return 452
break;
case 530:return 453
break;
case 531:return 454
break;
case 532:return 455
break;
case 533:return 456
break;
case 534:return 457
break;
case 535:return 458
break;
case 536:return 459
break;
case 537:return 460
break;
case 538:return 461
break;
case 539:return 462
break;
case 540:return 463
break;
case 541:return 464
break;
case 542:return 465
break;
case 543:return 466
break;
case 544:return 467
break;
case 545:return 468
break;
case 546:return 469
break;
case 547:return 470
break;
case 548:return 471
break;
case 549:return 472
break;
case 550:return 473
break;
case 551:return 474
break;
case 552:return 475
break;
case 553:return 476
break;
case 554:return 477
break;
case 555:return 478
break;
case 556:return 479
break;
case 557:return 480
break;
case 558:return 481
break;
case 559:return 482
break;
case 560:return 483
break;
case 561:return 484
break;
case 562:return 485
break;
case 563:return 486
break;
case 564:return 487
break;
case 565:return 488
break;
case 566:return 489
break;
case 567:return 490
break;
case 568:return 491
break;
case 569:return 492
break;
case 570:return 493
break;
case 571:return 494
break;
case 572:return 495
break;
case 573:return 496
break;
case 574:return 497
break;
case 575:return 498
break;
case 576:return 499
break;
case 577:return 500
break;
case 578:return 501
break;
case 579:return 502
break;
case 580:return 503
break;
case 581:return 504
break;
case 582:return 505
break;
case 583:return 506
break;
case 584:return 507
break;
case 585:return 508
break;
case 586:return 509
break;
case 587:return 510
break;
case 588:return 511
break;
case 589:return 512
break;
case 590:return 513
break;
case 591:return 514
break;
case 592:return 515
break;
case 593:return 516
break;
case 594:return 517
break;
case 595:return 518
break;
case 596:return 519
break;
case 597:return 520
break;
case 598:return 521
break;
case 599:return 522
break;
case 600:return 523
break;
case 601:return 524
break;
case 602:return 525
break;
case 603:return 526
break;
case 604:return 527
break;
case 605:return 528
break;
case 606:return 529
break;
case 607:return 530
break;
case 608:return 531
break;
case 609:return 532
break;
case 610:return 533
break;
case 611:return 534
break;
case 612:return 535
break;
case 613:return 536
break;
case 614:return 537
break;
case 615:return 538
break;
case 616:return 539
break;
case 617:return 540
break;
case 618:return 541
break;
case 619:return 542
break;
case 620:return 543
break;
case 621:return 544
break;
case 622:return 545
break;
case 623:return 546
break;
case 624:return 547
break;
case 625:return 548
break;
case 626:return 549
break;
case 627:return 550
break;
case 628:return 551
break;
case 629:return 552
break;
case 630:return 553
break;
case 631:return 554
break;
case 632:return 555
break;
case 633:return 556
break;
case 634:return 557
break;
case 635:return 558
break;
case 636:return 559
break;
case 637:return 560
break;
case 638:return 561
break;
case 639:return 562
break;
case 640:return 563
break;
case 641:return 564
break;
case 642:return 565
break;
case 643:return 566
break;
case 644:return 567
break;
case 645:return 568
break;
case 646:return 569
break;
case 647:return 570
break;
case 648:return 571
break;
case 649:return 572
break;
case 650:return 573
break;
case 651:return 574
break;
case 652:return 575
break;
case 653:return 576
break;
case 654:return 577
break;
case 655:return 578
break;
case 656:return 579
break;
case 657:return 580
break;
case 658:return 581
break;
case 659:return 582
break;
case 660:return 41
break;
case 661:return 583
break;
case 662:return 584
break;
case 663:return 585
break;
case 664:return 586
break;
case 665:return 587
break;
case 666:return 588
break;
case 667:return 589
break;
case 668:return 590
break;
case 669:return 591
break;
case 670:return 592
break;
case 671:return 593
break;
case 672:return 594
break;
case 673:return 595
break;
case 674:return 596
break;
case 675:return 597
break;
case 676:return 598
break;
case 677:return 599
break;
case 678:return 600
break;
case 679:return 601
break;
case 680:return 602
break;
case 681:return 603
break;
case 682:return 604
break;
case 683:return 605
break;
case 684:return 606
break;
case 685:return 607
break;
case 686:return 608
break;
case 687:return 609
break;
case 688:return 610
break;
case 689:return 611
break;
case 690:return 612
break;
case 691:return 613
break;
case 692:return 614
break;
case 693:return 615
break;
case 694:return 616
break;
case 695:return 617
break;
case 696:return 618
break;
case 697:return 619
break;
case 698:return 620
break;
case 699:return 621
break;
case 700:return 622
break;
case 701:return 623
break;
case 702:return 624
break;
case 703:return 625
break;
case 704:return 626
break;
case 705:return 627
break;
case 706:return 628
break;
case 707:return 629
break;
case 708:return 630
break;
case 709:return 631
break;
case 710:return 632
break;
case 711:return 633
break;
case 712:return 45
break;
case 713:return 46
break;
case 714:return 606
break;
case 715:return 34
break;
case 716:return 34
break;
case 717:return 'TILDEs'
break;
case 718:return 695
break;
case 719:return 683
break;
case 720:return 356
break;
case 721:return 684
break;
case 722:return 685
break;
case 723:return 'REM'
break;
case 724:return 'RSHIFT'
break;
case 725:return 'LSHIFT'
break;
case 726:return 'NE'
break;
case 727:return 'NE'
break;
case 728:return 717
break;
case 729:return 716
break;
case 730:return 719
break;
case 731:return 718
break;
case 732:return 691
break;
case 733:return 'BITAND'
break;
case 734:return 'BITOR'
break;
case 735:return 666
break;
case 736:return 668
break;
case 737:return 658
break;
case 738:return 660
break;
case 739:return 644
break;
case 740:return 646
break;
case 741:return 26
break;
case 742:return 647
break;
case 743:return 662
break;
case 744:return 6
break;
case 745:return 'DOLLAR'
break;
case 746:return 'QUESTION'
break;
case 747:return 'CARET'
break;
case 748:return 21
break;
case 749:return 5
break;
case 750:return 'INVALID'
break;
}
},
rules: [/^(?:([`](\\.|[^"]|\\")*?[`])+)/i,/^(?:(['](\\.|[^']|\\')*?['])+)/i,/^(?:(["](\\.|[^"]|\\")*?["])+)/i,/^(?:--(.*?)($|\r\n|\r|\n))/i,/^(?:\s+)/i,/^(?:ABORT\b)/i,/^(?:ADD\b)/i,/^(?:AFTER\b)/i,/^(?:ALTER\b)/i,/^(?:ANALYZE\b)/i,/^(?:AND\b)/i,/^(?:AS\b)/i,/^(?:ASC\b)/i,/^(?:ATTACH\b)/i,/^(?:BEFORE\b)/i,/^(?:BEGIN\b)/i,/^(?:BETWEEN\b)/i,/^(?:BY\b)/i,/^(?:CASCADE\b)/i,/^(?:CASE\b)/i,/^(?:CAST\b)/i,/^(?:CHECK\b)/i,/^(?:COLLATE\b)/i,/^(?:COLUMN\b)/i,/^(?:CONFLICT\b)/i,/^(?:CONSISTENT_READ\b)/i,/^(?:CONSTRAINT\b)/i,/^(?:CREATE\b)/i,/^(?:CROSS\b)/i,/^(?:CURRENT_DATE\b)/i,/^(?:CURRENT_TIME\b)/i,/^(?:CURRENT_TIMESTAMP\b)/i,/^(?:DATABASE\b)/i,/^(?:DEFAULT\b)/i,/^(?:DEFERRABLE\b)/i,/^(?:DEFERRED\b)/i,/^(?:DELETE\b)/i,/^(?:DESC\b)/i,/^(?:DETACH\b)/i,/^(?:DISTINCT\b)/i,/^(?:DROP\b)/i,/^(?:DESCRIBE\b)/i,/^(?:EACH\b)/i,/^(?:ELSE\b)/i,/^(?:END\b)/i,/^(?:ESCAPE\b)/i,/^(?:EXCEPT\b)/i,/^(?:EXCLUSIVE\b)/i,/^(?:EXISTS\b)/i,/^(?:EXPLAIN\b)/i,/^(?:FAIL\b)/i,/^(?:FOR\b)/i,/^(?:FOREIGN\b)/i,/^(?:FROM\b)/i,/^(?:FULL\b)/i,/^(?:GLOB\b)/i,/^(?:GROUP\b)/i,/^(?:HAVING\b)/i,/^(?:IF\b)/i,/^(?:IGNORE\b)/i,/^(?:IMMEDIATE\b)/i,/^(?:IN\b)/i,/^(?:USE\b)/i,/^(?:INDEX\b)/i,/^(?:INDEXED\b)/i,/^(?:INITIALLY\b)/i,/^(?:INNER\b)/i,/^(?:INSERT\b)/i,/^(?:INSTEAD\b)/i,/^(?:INTERSECT\b)/i,/^(?:INTO\b)/i,/^(?:IS\b)/i,/^(?:ISNULL\b)/i,/^(?:JOIN\b)/i,/^(?:KEY\b)/i,/^(?:LEFT\b)/i,/^(?:LIKE\b)/i,/^(?:CONTAINS\b)/i,/^(?:LIMIT\b)/i,/^(?:MATCH\b)/i,/^(?:NATURAL\b)/i,/^(?:NO\b)/i,/^(?:NOT\b)/i,/^(?:NOTNULL\b)/i,/^(?:NULL\b)/i,/^(?:UNDEFINED\b)/i,/^(?:OF\b)/i,/^(?:OFFSET\b)/i,/^(?:ON\b)/i,/^(?:OR\b)/i,/^(?:ORDER\b)/i,/^(?:OUTER\b)/i,/^(?:PLAN\b)/i,/^(?:PRAGMA\b)/i,/^(?:PRIMARY\b)/i,/^(?:QUERY\b)/i,/^(?:RAISE\b)/i,/^(?:RECURSIVE\b)/i,/^(?:REFERENCES\b)/i,/^(?:REGEXP\b)/i,/^(?:REINDEX\b)/i,/^(?:RELEASE\b)/i,/^(?:RENAME\b)/i,/^(?:REPLACE\b)/i,/^(?:RESTRICT\b)/i,/^(?:RIGHT\b)/i,/^(?:ROLLBACK\b)/i,/^(?:ROW\b)/i,/^(?:SELECT\b)/i,/^(?:SCAN\b)/i,/^(?:SET\b)/i,/^(?:TABLE\b)/i,/^(?:TEMP\b)/i,/^(?:THEN\b)/i,/^(?:TO\b)/i,/^(?:TRIGGER\b)/i,/^(?:UNION\b)/i,/^(?:UNIQUE\b)/i,/^(?:UPDATE\b)/i,/^(?:USING\b)/i,/^(?:VACUUM\b)/i,/^(?:VALUES\b)/i,/^(?:VIEW\b)/i,/^(?:WHEN\b)/i,/^(?:WHERE\b)/i,/^(?:WITH\b)/i,/^(?:TRUE\b)/i,/^(?:FALSE\b)/i,/^(?:SHOW\b)/i,/^(?:TABLES\b)/i,/^(?:STRING\b)/i,/^(?:NUMBER\b)/i,/^(?:STRINGSET\b)/i,/^(?:NUMBERSET\b)/i,/^(?:BINARYSET\b)/i,/^(?:THROUGHPUT\b)/i,/^(?:GSI\b)/i,/^(?:LSI\b)/i,/^(?:PROJECTION\b)/i,/^(?:ALL\b)/i,/^(?:KEYS_ONLY\b)/i,/^(?:INCLUDE\b)/i,/^(?:NEW\b)/i,/^(?:PROVISIONED\b)/i,/^(?:PAY_PER_REQUEST\b)/i,/^(?:BUFFER\b)/i,/^(?:DEBUG\b)/i,/^(?:ALLOCATE\b)/i,/^(?:ALTER\b)/i,/^(?:ANALYZE\b)/i,/^(?:AND\b)/i,/^(?:ANY\b)/i,/^(?:ARCHIVE\b)/i,/^(?:ARE\b)/i,/^(?:ARRAY\b)/i,/^(?:AS\b)/i,/^(?:ASC\b)/i,/^(?:ASCII\b)/i,/^(?:ASENSITIVE\b)/i,/^(?:ASSERTION\b)/i,/^(?:ASYMMETRIC\b)/i,/^(?:AT\b)/i,/^(?:ATOMIC\b)/i,/^(?:ATTACH\b)/i,/^(?:ATTRIBUTE\b)/i,/^(?:AUTH\b)/i,/^(?:AUTHORIZATION\b)/i,/^(?:AUTHORIZE\b)/i,/^(?:AUTO\b)/i,/^(?:AVG\b)/i,/^(?:BACK\b)/i,/^(?:BACKUP\b)/i,/^(?:BASE\b)/i,/^(?:BATCH\b)/i,/^(?:BEFORE\b)/i,/^(?:BEGIN\b)/i,/^(?:BETWEEN\b)/i,/^(?:BIGINT\b)/i,/^(?:BINARY\b)/i,/^(?:BIT\b)/i,/^(?:BLOB\b)/i,/^(?:BLOCK\b)/i,/^(?:BOOLEAN\b)/i,/^(?:BOTH\b)/i,/^(?:BREADTH\b)/i,/^(?:BUCKET\b)/i,/^(?:BULK\b)/i,/^(?:BY\b)/i,/^(?:BYTE\b)/i,/^(?:CALL\b)/i,/^(?:CALLED\b)/i,/^(?:CALLING\b)/i,/^(?:CAPACITY\b)/i,/^(?:CASCADE\b)/i,/^(?:CASCADED\b)/i,/^(?:CASE\b)/i,/^(?:CAST\b)/i,/^(?:CATALOG\b)/i,/^(?:CHAR\b)/i,/^(?:CHARACTER\b)/i,/^(?:CHECK\b)/i,/^(?:CLASS\b)/i,/^(?:CLOB\b)/i,/^(?:CLOSE\b)/i,/^(?:CLUSTER\b)/i,/^(?:CLUSTERED\b)/i,/^(?:CLUSTERING\b)/i,/^(?:CLUSTERS\b)/i,/^(?:COALESCE\b)/i,/^(?:COLLATE\b)/i,/^(?:COLLATION\b)/i,/^(?:COLLECTION\b)/i,/^(?:COLUMN\b)/i,/^(?:COLUMNS\b)/i,/^(?:COMBINE\b)/i,/^(?:COMMENT\b)/i,/^(?:COMMIT\b)/i,/^(?:COMPACT\b)/i,/^(?:COMPILE\b)/i,/^(?:COMPRESS\b)/i,/^(?:CONDITION\b)/i,/^(?:CONFLICT\b)/i,/^(?:CONNECT\b)/i,/^(?:CONNECTION\b)/i,/^(?:CONSISTENCY\b)/i,/^(?:CONSISTENT\b)/i,/^(?:CONSTRAINT\b)/i,/^(?:CONSTRAINTS\b)/i,/^(?:CONSTRUCTOR\b)/i,/^(?:CONSUMED\b)/i,/^(?:CONTINUE\b)/i,/^(?:CONVERT\b)/i,/^(?:COPY\b)/i,/^(?:CORRESPONDING\b)/i,/^(?:COUNT\b)/i,/^(?:COUNTER\b)/i,/^(?:CREATE\b)/i,/^(?:CROSS\b)/i,/^(?:CUBE\b)/i,/^(?:CURRENT\b)/i,/^(?:CURSOR\b)/i,/^(?:CYCLE\b)/i,/^(?:DATA\b)/i,/^(?:DATABASE\b)/i,/^(?:DATE\b)/i,/^(?:DATETIME\b)/i,/^(?:DAY\b)/i,/^(?:DEALLOCATE\b)/i,/^(?:DEC\b)/i,/^(?:DECIMAL\b)/i,/^(?:DECLARE\b)/i,/^(?:DEFAULT\b)/i,/^(?:DEFERRABLE\b)/i,/^(?:DEFERRED\b)/i,/^(?:DEFINE\b)/i,/^(?:DEFINED\b)/i,/^(?:DEFINITION\b)/i,/^(?:DELETE\b)/i,/^(?:DELIMITED\b)/i,/^(?:DEPTH\b)/i,/^(?:DEREF\b)/i,/^(?:DESC\b)/i,/^(?:DESCRIBE\b)/i,/^(?:DESCRIPTOR\b)/i,/^(?:DETACH\b)/i,/^(?:DETERMINISTIC\b)/i,/^(?:DIAGNOSTICS\b)/i,/^(?:DIRECTORIES\b)/i,/^(?:DISABLE\b)/i,/^(?:DISCONNECT\b)/i,/^(?:DISTINCT\b)/i,/^(?:DISTRIBUTE\b)/i,/^(?:DO\b)/i,/^(?:DOMAIN\b)/i,/^(?:DOUBLE\b)/i,/^(?:DROP\b)/i,/^(?:DUMP\b)/i,/^(?:DURATION\b)/i,/^(?:DYNAMIC\b)/i,/^(?:EACH\b)/i,/^(?:ELEMENT\b)/i,/^(?:ELSE\b)/i,/^(?:ELSEIF\b)/i,/^(?:EMPTY\b)/i,/^(?:ENABLE\b)/i,/^(?:END\b)/i,/^(?:EQUAL\b)/i,/^(?:EQUALS\b)/i,/^(?:ERROR\b)/i,/^(?:ESCAPE\b)/i,/^(?:ESCAPED\b)/i,/^(?:EVAL\b)/i,/^(?:EVALUATE\b)/i,/^(?:EXCEEDED\b)/i,/^(?:EXCEPT\b)/i,/^(?:EXCEPTION\b)/i,/^(?:EXCEPTIONS\b)/i,/^(?:EXCLUSIVE\b)/i,/^(?:EXEC\b)/i,/^(?:EXECUTE\b)/i,/^(?:EXISTS\b)/i,/^(?:EXIT\b)/i,/^(?:EXPLAIN\b)/i,/^(?:EXPLODE\b)/i,/^(?:EXPORT\b)/i,/^(?:EXPRESSION\b)/i,/^(?:EXTENDED\b)/i,/^(?:EXTERNAL\b)/i,/^(?:EXTRACT\b)/i,/^(?:FAIL\b)/i,/^(?:FALSE\b)/i,/^(?:FAMILY\b)/i,/^(?:FETCH\b)/i,/^(?:FIELDS\b)/i,/^(?:FILE\b)/i,/^(?:FILTER\b)/i,/^(?:FILTERING\b)/i,/^(?:FINAL\b)/i,/^(?:FINISH\b)/i,/^(?:FIRST\b)/i,/^(?:FIXED\b)/i,/^(?:FLATTERN\b)/i,/^(?:FLOAT\b)/i,/^(?:FOR\b)/i,/^(?:FORCE\b)/i,/^(?:FOREIGN\b)/i,/^(?:FORMAT\b)/i,/^(?:FORWARD\b)/i,/^(?:FOUND\b)/i,/^(?:FREE\b)/i,/^(?:FROM\b)/i,/^(?:FULL\b)/i,/^(?:FUNCTION\b)/i,/^(?:FUNCTIONS\b)/i,/^(?:GENERAL\b)/i,/^(?:GENERATE\b)/i,/^(?:GET\b)/i,/^(?:GLOB\b)/i,/^(?:GLOBAL\b)/i,/^(?:GO\b)/i,/^(?:GOTO\b)/i,/^(?:GRANT\b)/i,/^(?:GREATER\b)/i,/^(?:GROUP\b)/i,/^(?:GROUPING\b)/i,/^(?:HANDLER\b)/i,/^(?:HASH\b)/i,/^(?:HAVE\b)/i,/^(?:HAVING\b)/i,/^(?:HEAP\b)/i,/^(?:HIDDEN\b)/i,/^(?:HOLD\b)/i,/^(?:HOUR\b)/i,/^(?:IDENTIFIED\b)/i,/^(?:IDENTITY\b)/i,/^(?:IF\b)/i,/^(?:IGNORE\b)/i,/^(?:IMMEDIATE\b)/i,/^(?:IMPORT\b)/i,/^(?:IN\b)/i,/^(?:INCLUDING\b)/i,/^(?:INCLUSIVE\b)/i,/^(?:INCREMENT\b)/i,/^(?:INCREMENTAL\b)/i,/^(?:INDEX\b)/i,/^(?:INDEXED\b)/i,/^(?:INDEXES\b)/i,/^(?:INDICATOR\b)/i,/^(?:INFINITE\b)/i,/^(?:INITIALLY\b)/i,/^(?:INLINE\b)/i,/^(?:INNER\b)/i,/^(?:INNTER\b)/i,/^(?:INOUT\b)/i,/^(?:INPUT\b)/i,/^(?:INSENSITIVE\b)/i,/^(?:INSERT\b)/i,/^(?:INSTEAD\b)/i,/^(?:INT\b)/i,/^(?:INTEGER\b)/i,/^(?:INTERSECT\b)/i,/^(?:INTERVAL\b)/i,/^(?:INTO\b)/i,/^(?:INVALIDATE\b)/i,/^(?:IS\b)/i,/^(?:ISOLATION\b)/i,/^(?:ITEM\b)/i,/^(?:ITEMS\b)/i,/^(?:ITERATE\b)/i,/^(?:JOIN\b)/i,/^(?:KEY\b)/i,/^(?:KEYS\b)/i,/^(?:LAG\b)/i,/^(?:LANGUAGE\b)/i,/^(?:LARGE\b)/i,/^(?:LAST\b)/i,/^(?:LATERAL\b)/i,/^(?:LEAD\b)/i,/^(?:LEADING\b)/i,/^(?:LEAVE\b)/i,/^(?:LEFT\b)/i,/^(?:LENGTH\b)/i,/^(?:LESS\b)/i,/^(?:LEVEL\b)/i,/^(?:LIKE\b)/i,/^(?:LIMIT\b)/i,/^(?:LIMITED\b)/i,/^(?:LINES\b)/i,/^(?:LIST\b)/i,/^(?:LOAD\b)/i,/^(?:LOCAL\b)/i,/^(?:LOCALTIME\b)/i,/^(?:LOCALTIMESTAMP\b)/i,/^(?:LOCATION\b)/i,/^(?:LOCATOR\b)/i,/^(?:LOCK\b)/i,/^(?:LOCKS\b)/i,/^(?:LOG\b)/i,/^(?:LOGED\b)/i,/^(?:LONG\b)/i,/^(?:LOOP\b)/i,/^(?:LOWER\b)/i,/^(?:MAP\b)/i,/^(?:MATCH\b)/i,/^(?:MATERIALIZED\b)/i,/^(?:MAX\b)/i,/^(?:MAXLEN\b)/i,/^(?:MEMBER\b)/i,/^(?:MERGE\b)/i,/^(?:METHOD\b)/i,/^(?:METRICS\b)/i,/^(?:MIN\b)/i,/^(?:MINUS\b)/i,/^(?:MINUTE\b)/i,/^(?:MISSING\b)/i,/^(?:MOD\b)/i,/^(?:MODE\b)/i,/^(?:MODIFIES\b)/i,/^(?:MODIFY\b)/i,/^(?:MODULE\b)/i,/^(?:MONTH\b)/i,/^(?:MULTI\b)/i,/^(?:MULTISET\b)/i,/^(?:NAME\b)/i,/^(?:NAMES\b)/i,/^(?:NATIONAL\b)/i,/^(?:NATURAL\b)/i,/^(?:NCHAR\b)/i,/^(?:NCLOB\b)/i,/^(?:NEW\b)/i,/^(?:NEXT\b)/i,/^(?:NO\b)/i,/^(?:NONE\b)/i,/^(?:NOT\b)/i,/^(?:NULL\b)/i,/^(?:NULLIF\b)/i,/^(?:NUMBER\b)/i,/^(?:NUMERIC\b)/i,/^(?:OBJECT\b)/i,/^(?:OF\b)/i,/^(?:OFFLINE\b)/i,/^(?:OFFSET\b)/i,/^(?:OLD\b)/i,/^(?:ON\b)/i,/^(?:ONLINE\b)/i,/^(?:ONLY\b)/i,/^(?:OPAQUE\b)/i,/^(?:OPEN\b)/i,/^(?:OPERATOR\b)/i,/^(?:OPTION\b)/i,/^(?:OR\b)/i,/^(?:ORDER\b)/i,/^(?:ORDINALITY\b)/i,/^(?:OTHER\b)/i,/^(?:OTHERS\b)/i,/^(?:OUT\b)/i,/^(?:OUTER\b)/i,/^(?:OUTPUT\b)/i,/^(?:OVER\b)/i,/^(?:OVERLAPS\b)/i,/^(?:OVERRIDE\b)/i,/^(?:OWNER\b)/i,/^(?:PAD\b)/i,/^(?:PARALLEL\b)/i,/^(?:PARAMETER\b)/i,/^(?:PARAMETERS\b)/i,/^(?:PARTIAL\b)/i,/^(?:PARTITION\b)/i,/^(?:PARTITIONED\b)/i,/^(?:PARTITIONS\b)/i,/^(?:PATH\b)/i,/^(?:PERCENT\b)/i,/^(?:PERCENTILE\b)/i,/^(?:PERMISSION\b)/i,/^(?:PERMISSIONS\b)/i,/^(?:PIPE\b)/i,/^(?:PIPELINED\b)/i,/^(?:PLAN\b)/i,/^(?:POOL\b)/i,/^(?:POSITION\b)/i,/^(?:PRECISION\b)/i,/^(?:PREPARE\b)/i,/^(?:PRESERVE\b)/i,/^(?:PRIMARY\b)/i,/^(?:PRIOR\b)/i,/^(?:PRIVATE\b)/i,/^(?:PRIVILEGES\b)/i,/^(?:PROCEDURE\b)/i,/^(?:PROCESSED\b)/i,/^(?:PROJECT\b)/i,/^(?:PROJECTION\b)/i,/^(?:PROPERTY\b)/i,/^(?:PROVISIONING\b)/i,/^(?:PUBLIC\b)/i,/^(?:PUT\b)/i,/^(?:QUERY\b)/i,/^(?:QUIT\b)/i,/^(?:QUORUM\b)/i,/^(?:RAISE\b)/i,/^(?:RANDOM\b)/i,/^(?:RANGE\b)/i,/^(?:RANK\b)/i,/^(?:RAW\b)/i,/^(?:READ\b)/i,/^(?:READS\b)/i,/^(?:REAL\b)/i,/^(?:REBUILD\b)/i,/^(?:RECORD\b)/i,/^(?:RECURSIVE\b)/i,/^(?:REDUCE\b)/i,/^(?:REF\b)/i,/^(?:REFERENCE\b)/i,/^(?:REFERENCES\b)/i,/^(?:REFERENCING\b)/i,/^(?:REGEXP\b)/i,/^(?:REGION\b)/i,/^(?:REINDEX\b)/i,/^(?:RELATIVE\b)/i,/^(?:RELEASE\b)/i,/^(?:REMAINDER\b)/i,/^(?:RENAME\b)/i,/^(?:REPEAT\b)/i,/^(?:REPLACE\b)/i,/^(?:REQUEST\b)/i,/^(?:RESET\b)/i,/^(?:RESIGNAL\b)/i,/^(?:RESOURCE\b)/i,/^(?:RESPONSE\b)/i,/^(?:RESTORE\b)/i,/^(?:RESTRICT\b)/i,/^(?:RESULT\b)/i,/^(?:RETURN\b)/i,/^(?:RETURNING\b)/i,/^(?:RETURNS\b)/i,/^(?:REVERSE\b)/i,/^(?:REVOKE\b)/i,/^(?:RIGHT\b)/i,/^(?:ROLE\b)/i,/^(?:ROLES\b)/i,/^(?:ROLLBACK\b)/i,/^(?:ROLLUP\b)/i,/^(?:ROUTINE\b)/i,/^(?:ROW\b)/i,/^(?:ROWS\b)/i,/^(?:RULE\b)/i,/^(?:RULES\b)/i,/^(?:SAMPLE\b)/i,/^(?:SATISFIES\b)/i,/^(?:SAVE\b)/i,/^(?:SAVEPOINT\b)/i,/^(?:SCAN\b)/i,/^(?:SCHEMA\b)/i,/^(?:SCOPE\b)/i,/^(?:SCROLL\b)/i,/^(?:SEARCH\b)/i,/^(?:SECOND\b)/i,/^(?:SECTION\b)/i,/^(?:SEGMENT\b)/i,/^(?:SEGMENTS\b)/i,/^(?:SELECT\b)/i,/^(?:SELF\b)/i,/^(?:SEMI\b)/i,/^(?:SENSITIVE\b)/i,/^(?:SEPARATE\b)/i,/^(?:SEQUENCE\b)/i,/^(?:SERIALIZABLE\b)/i,/^(?:SESSION\b)/i,/^(?:SET\b)/i,/^(?:SETS\b)/i,/^(?:SHARD\b)/i,/^(?:SHARE\b)/i,/^(?:SHARED\b)/i,/^(?:SHORT\b)/i,/^(?:SHOW\b)/i,/^(?:SIGNAL\b)/i,/^(?:SIMILAR\b)/i,/^(?:SIZE\b)/i,/^(?:SKEWED\b)/i,/^(?:SMALLINT\b)/i,/^(?:SNAPSHOT\b)/i,/^(?:SOME\b)/i,/^(?:SOURCE\b)/i,/^(?:SPACE\b)/i,/^(?:SPACES\b)/i,/^(?:SPARSE\b)/i,/^(?:SPECIFIC\b)/i,/^(?:SPECIFICTYPE\b)/i,/^(?:SPLIT\b)/i,/^(?:SQL\b)/i,/^(?:SQLCODE\b)/i,/^(?:SQLERROR\b)/i,/^(?:SQLEXCEPTION\b)/i,/^(?:SQLSTATE\b)/i,/^(?:SQLWARNING\b)/i,/^(?:START\b)/i,/^(?:STATE\b)/i,/^(?:STATIC\b)/i,/^(?:STATUS\b)/i,/^(?:STORAGE\b)/i,/^(?:STORE\b)/i,/^(?:STORED\b)/i,/^(?:STREAM\b)/i,/^(?:STRING\b)/i,/^(?:STRUCT\b)/i,/^(?:STYLE\b)/i,/^(?:SUB\b)/i,/^(?:SUBMULTISET\b)/i,/^(?:SUBPARTITION\b)/i,/^(?:SUBSTRING\b)/i,/^(?:SUBTYPE\b)/i,/^(?:SUM\b)/i,/^(?:SUPER\b)/i,/^(?:SYMMETRIC\b)/i,/^(?:SYNONYM\b)/i,/^(?:SYSTEM\b)/i,/^(?:TABLE\b)/i,/^(?:TABLESAMPLE\b)/i,/^(?:TEMP\b)/i,/^(?:TEMPORARY\b)/i,/^(?:TERMINATED\b)/i,/^(?:TEXT\b)/i,/^(?:THAN\b)/i,/^(?:THEN\b)/i,/^(?:THROUGHPUT\b)/i,/^(?:TIME\b)/i,/^(?:TIMESTAMP\b)/i,/^(?:TIMEZONE\b)/i,/^(?:TINYINT\b)/i,/^(?:TO\b)/i,/^(?:TOKEN\b)/i,/^(?:TOTAL\b)/i,/^(?:TOUCH\b)/i,/^(?:TRAILING\b)/i,/^(?:TRANSACTION\b)/i,/^(?:TRANSFORM\b)/i,/^(?:TRANSLATE\b)/i,/^(?:TRANSLATION\b)/i,/^(?:TREAT\b)/i,/^(?:TRIGGER\b)/i,/^(?:TRIM\b)/i,/^(?:TRUE\b)/i,/^(?:TRUNCATE\b)/i,/^(?:TTL\b)/i,/^(?:TUPLE\b)/i,/^(?:TYPE\b)/i,/^(?:UNDER\b)/i,/^(?:UNDO\b)/i,/^(?:UNION\b)/i,/^(?:UNIQUE\b)/i,/^(?:UNIT\b)/i,/^(?:UNKNOWN\b)/i,/^(?:UNLOGGED\b)/i,/^(?:UNNEST\b)/i,/^(?:UNPROCESSED\b)/i,/^(?:UNSIGNED\b)/i,/^(?:UNTIL\b)/i,/^(?:UPDATE\b)/i,/^(?:UPPER\b)/i,/^(?:URL\b)/i,/^(?:USAGE\b)/i,/^(?:USE\b)/i,/^(?:USER\b)/i,/^(?:USERS\b)/i,/^(?:USING\b)/i,/^(?:UUID\b)/i,/^(?:VACUUM\b)/i,/^(?:VALUE\b)/i,/^(?:VALUED\b)/i,/^(?:VALUES\b)/i,/^(?:VARCHAR\b)/i,/^(?:VARIABLE\b)/i,/^(?:VARIANCE\b)/i,/^(?:VARINT\b)/i,/^(?:VARYING\b)/i,/^(?:VIEW\b)/i,/^(?:VIEWS\b)/i,/^(?:VIRTUAL\b)/i,/^(?:VOID\b)/i,/^(?:WAIT\b)/i,/^(?:WHEN\b)/i,/^(?:WHENEVER\b)/i,/^(?:WHERE\b)/i,/^(?:WHILE\b)/i,/^(?:WINDOW\b)/i,/^(?:WITH\b)/i,/^(?:WITHIN\b)/i,/^(?:WITHOUT\b)/i,/^(?:WORK\b)/i,/^(?:WRAPPED\b)/i,/^(?:WRITE\b)/i,/^(?:YEAR\b)/i,/^(?:ZONE\b)/i,/^(?:JSON\b)/i,/^(?:MATH\b)/i,/^(?:UUID\b)/i,/^(?:[-]?(\d*[.])?\d+[eE]\d+)/i,/^(?:[-]?(\d*[.])?\d+)/i,/^(?:~)/i,/^(?:\+=)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:>>)/i,/^(?:<<)/i,/^(?:<>)/i,/^(?:!=)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:<=)/i,/^(?:<)/i,/^(?:=)/i,/^(?:&)/i,/^(?:\|)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\.)/i,/^(?:,)/i,/^(?::)/i,/^(?:;)/i,/^(?:\$)/i,/^(?:\?)/i,/^(?:\^)/i,/^(?:[a-zA-Z_][a-zA-Z_0-9]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (true) {
exports.parser = sqlparser;
exports.Parser = sqlparser.Parser;
exports.parse = function () { return sqlparser.parse.apply(sqlparser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = __webpack_require__(33).readFileSync(__webpack_require__(34).normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (  true && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3), __webpack_require__(32)(module)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = __webpack_require__(9).EventEmitter;
var inherits = __webpack_require__(36);

inherits(Stream, EE);
Stream.Readable = __webpack_require__(10);
Stream.Writable = __webpack_require__(47);
Stream.Duplex = __webpack_require__(48);
Stream.Transform = __webpack_require__(49);
Stream.PassThrough = __webpack_require__(50);

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(38)
var ieee754 = __webpack_require__(39)
var isArray = __webpack_require__(14)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = __webpack_require__(8).Buffer;
var util = __webpack_require__(42);

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

if (util && util.inspect && util.inspect.custom) {
  module.exports.prototype[util.inspect.custom] = function () {
    var obj = util.inspect({ length: this.length });
    return this.constructor.name + ' ' + obj;
  };
}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(44);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(3)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.



module.exports = PassThrough;

var Transform = __webpack_require__(18);

/*<replacement>*/
var util = __webpack_require__(4);
util.inherits = __webpack_require__(5);
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10).Transform


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10).PassThrough


/***/ })
/******/ ]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(29).Buffer))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(31)
var ieee754 = __webpack_require__(32)
var isArray = __webpack_require__(33)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(30)))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 32 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ })
/******/ ])["default"];
});