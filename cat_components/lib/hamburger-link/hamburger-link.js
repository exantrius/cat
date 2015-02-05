import {Component, ArrayProxy, computed} from 'ember';

var WithConfigMixin = Em.Eu.WithConfigMixin;

var HamburgerLink = Component.extend(WithConfigMixin, {

	tagName: 'a',
	

});

export default HamburgerLink