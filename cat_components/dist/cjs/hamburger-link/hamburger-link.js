"use strict";
var Component = require("ember").Component;
var ArrayProxy = require("ember").ArrayProxy;
var computed = require("ember").computed;

var WithConfigMixin = Em.Eu.WithConfigMixin;

var HamburgerLink = Component.extend(WithConfigMixin, {

	tagName: 'a',
	

});

exports["default"] = HamburgerLink