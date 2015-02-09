import {Component, ArrayProxy, computed} from 'ember';

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

export default HamburgerLink;