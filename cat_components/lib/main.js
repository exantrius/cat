// Main components file
import HamburgerLinkComponent   from './hamburger-link/hamburger-link';


import {Application, Namespace} from 'ember';

Application.initializer({
    name: 'cat-components',
    initialize: function (c) {
        

        c.register('component:cat-hamburger-link', HamburgerLinkComponent);
    }
});

export {};