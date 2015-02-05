define("cat-components/hamburger-link/hamburger-link",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var ArrayProxy = __dependency1__.ArrayProxy;
    var computed = __dependency1__.computed;

    var WithConfigMixin = Em.Eu.WithConfigMixin;

    var HamburgerLink = Component.extend(WithConfigMixin, {

    	tagName: 'a',
    	

    });

    __exports__["default"] = HamburgerLink
  });
define("cat-components",
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