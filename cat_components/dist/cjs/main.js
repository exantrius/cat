"use strict";
// Main components file
var HamburgerLinkComponent = require("./hamburger-link/hamburger-link")["default"] || require("./hamburger-link/hamburger-link");


var Application = require("ember").Application;
var Namespace = require("ember").Namespace;

Application.initializer({
    name: 'cat-components',
    initialize: function (c) {
        

        c.register('component:cat-hamburger-link', HamburgerLinkComponent);
    }
});

exports.HamburgerLinkComponent = HamburgerLinkComponent;