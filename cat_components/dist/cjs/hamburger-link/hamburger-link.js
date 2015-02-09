"use strict";
var Component = require("ember").Component;
var ArrayProxy = require("ember").ArrayProxy;
var computed = require("ember").computed;

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