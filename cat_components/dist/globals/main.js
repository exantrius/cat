!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),(o.Em||(o.Em={})).CatComponets=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var ArrayProxy = window.Ember.ArrayProxy;
var computed = window.Ember.computed;

var WithConfigMixin = Em.Eu.WithConfigMixin;

var HamburgerLink = Component.extend(WithConfigMixin, {

    tagName: 'a',
    classNames: ['hamburger-link', 'glyphicon', 'glyphicon-align-justify'],

    'on-click': undefined,

    onClick: function () {
        this.sendAction('on-click');
    }.on('click')

    // click: function (e) {
    //     e.preventDefault();
    //     this.controller.toggleHamburgerMenu();        
    // }

});

exports["default"] = HamburgerLink;
},{}],2:[function(_dereq_,module,exports){
"use strict";
exports["default"] = Ember.Handlebars.compile("<div id=\"navigation\" class=\"nav-close\">\n    <h3>Shop Brands</h3>\n    <ul class=\"col-md-12 nav\">\n        <li>\n            <a href=\"#\">Outfitters</a>\n        </li>\n        <li>\n            <a href=\"#\">Factory</a>\n        </li>\n    </ul>\n    <ul class=\"col-md-12 nav\">\n        <li>\n            <a href=\"#\">\n                Find a Store\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Gift Cards\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Credit\n            </a>\n        </li>\n    </ul>\n    <ul class=\"col-md-12 nav\">\n        <li>\n            <a href=\"#\">\n                My Account\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Track Orders\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Favorites\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Rewards\n            </a>\n        </li>\n    </ul>\n    <ul class=\"col-md-12 nav\">\n        <li>\n            <a href=\"#\">\n                International Settings\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Help\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Contact Us\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Feedback\n            </a>\n        </li>\n    </ul>\n</div>\n");
},{}],3:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var ArrayProxy = window.Ember.ArrayProxy;
var computed = window.Ember.computed;

var WithConfigMixin = Em.Eu.WithConfigMixin;

var HamburgerMenu = Component.extend(WithConfigMixin, {

    layoutName: 'cat-hamburger-menu',
    classNames: ['slide-in'],
    classNameBindings: ['slideInOpen', 'slideInDir', 'slideIn90'],
    dir: 'up', // or 'down', or 'right', or 'left'
    slideIn90: true,

    slideInDir: function () {
        return 'slide-in-dir-' + this.get('dir');
    }.property('dir'),

    slideInOpen: function () {
        return this.controller.isHamburgerMenuVisible;
    }.property('this.controller.isHamburgerMenuVisible')


});

exports["default"] = HamburgerMenu;
},{}],4:[function(_dereq_,module,exports){
"use strict";
// Main components file
var HamburgerLinkComponent = _dereq_("./hamburger-link/hamburger-link")["default"] || _dereq_("./hamburger-link/hamburger-link");
var HamburgerMenuComponent = _dereq_("./hamburger-menu/hamburger-menu")["default"] || _dereq_("./hamburger-menu/hamburger-menu");
var HamburgerMenuTmplComponent = _dereq_("./hamburger-menu/hamburger-menu-tmpl")["default"] || _dereq_("./hamburger-menu/hamburger-menu-tmpl");


var Application = window.Ember.Application;
var Namespace = window.Ember.Namespace;

Application.initializer({
    name: 'cat-components',
    initialize: function (c) {
        

        c.register('component:cat-hamburger-link', HamburgerLinkComponent);

        c.register('component:cat-hamburger-menu', HamburgerMenuComponent);
        c.register('template:cat-hamburger-menu',  HamburgerMenuTmplComponent);
    }
});

exports.HamburgerLinkComponent = HamburgerLinkComponent;
exports.HamburgerMenuComponent = HamburgerMenuComponent;
},{"./hamburger-link/hamburger-link":1,"./hamburger-menu/hamburger-menu":3,"./hamburger-menu/hamburger-menu-tmpl":2}]},{},[4])
(4)
});