"use strict";
// Main components file
var HamburgerLinkComponent = require("./hamburger-link/hamburger-link")["default"] || require("./hamburger-link/hamburger-link");
var HamburgerMenuComponent = require("./hamburger-menu/hamburger-menu")["default"] || require("./hamburger-menu/hamburger-menu");
var HamburgerMenuTmplComponent = require("./hamburger-menu/hamburger-menu-tmpl")["default"] || require("./hamburger-menu/hamburger-menu-tmpl");


var Application = require("ember").Application;
var Namespace = require("ember").Namespace;

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