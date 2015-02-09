"use strict";
var Component = require("ember").Component;
var ArrayProxy = require("ember").ArrayProxy;
var computed = require("ember").computed;

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