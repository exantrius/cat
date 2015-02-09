define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var ArrayProxy = __dependency1__.ArrayProxy;
    var computed = __dependency1__.computed;

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

    __exports__["default"] = HamburgerMenu;
  });