define(
  ["./hamburger-link/hamburger-link","ember","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    // Main components file
    var HamburgerLinkComponent = __dependency1__["default"] || __dependency1__;


    var Application = __dependency2__.Application;
    var Namespace = __dependency2__.Namespace;

    Application.initializer({
        name: 'cat-components',
        initialize: function (c) {
            

            c.register('component:cat-hamburger-link', HamburgerLinkComponent);
        }
    });

    __exports__.HamburgerLinkComponent = HamburgerLinkComponent;
  });