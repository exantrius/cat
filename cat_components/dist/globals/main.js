!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),(o.Em||(o.Em={})).CatComponets=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var ArrayProxy = window.Ember.ArrayProxy;
var computed = window.Ember.computed;

var WithConfigMixin = Em.Eu.WithConfigMixin;

var HamburgerLink = Component.extend(WithConfigMixin, {

    tagName: 'a',
    classNames: ['hamburger-link', 'glyphicon', 'glyphicon-align-justify']

});

exports["default"] = HamburgerLink
},{}],2:[function(_dereq_,module,exports){
"use strict";
// Main components file
var HamburgerLinkComponent = _dereq_("./hamburger-link/hamburger-link")["default"] || _dereq_("./hamburger-link/hamburger-link");


var Application = window.Ember.Application;
var Namespace = window.Ember.Namespace;

Application.initializer({
    name: 'cat-components',
    initialize: function (c) {
        

        c.register('component:cat-hamburger-link', HamburgerLinkComponent);
    }
});

exports.HamburgerLinkComponent = HamburgerLinkComponent;
},{"./hamburger-link/hamburger-link":1}]},{},[2])
(2)
});