import {Component, ArrayProxy, computed} from 'ember';

var WithConfigMixin = Em.Eu.WithConfigMixin;

var HamburgerLink = Component.extend(WithConfigMixin, {

    tagName: 'a',
    classNames: ['hamburger-link', 'glyphicon', 'glyphicon-align-justify']

});

export default HamburgerLink