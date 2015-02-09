define(
  ["./hamburger-link/hamburger-link","./hamburger-menu/hamburger-menu","./hamburger-menu/hamburger-menu-tmpl","ember","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    // Main components file
    var HamburgerLinkComponent = __dependency1__["default"] || __dependency1__;
    var HamburgerMenuComponent = __dependency2__["default"] || __dependency2__;
    var HamburgerMenuTmplComponent = __dependency3__["default"] || __dependency3__;


    var Application = __dependency4__.Application;
    var Namespace = __dependency4__.Namespace;

    Application.initializer({
        name: 'cat-components',
        initialize: function (c) {
            

            c.register('component:cat-hamburger-link', HamburgerLinkComponent);

            c.register('component:cat-hamburger-menu', HamburgerMenuComponent);
            c.register('template:cat-hamburger-menu',  HamburgerMenuTmplComponent);
        }
    });

    __exports__.HamburgerLinkComponent = HamburgerLinkComponent;
    __exports__.HamburgerMenuComponent = HamburgerMenuComponent;
  });