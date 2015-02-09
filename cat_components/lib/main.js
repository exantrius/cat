// Main components file
import HamburgerLinkComponent     from './hamburger-link/hamburger-link';
import HamburgerMenuComponent     from './hamburger-menu/hamburger-menu';
import HamburgerMenuTmplComponent from './hamburger-menu/hamburger-menu-tmpl';


import {Application, Namespace} from 'ember';

Application.initializer({
    name: 'cat-components',
    initialize: function (c) {
        

        c.register('component:cat-hamburger-link', HamburgerLinkComponent);

        c.register('component:cat-hamburger-menu', HamburgerMenuComponent);
        c.register('template:cat-hamburger-menu',  HamburgerMenuTmplComponent);
    }
});

export {
    HamburgerLinkComponent,
    HamburgerMenuComponent
};