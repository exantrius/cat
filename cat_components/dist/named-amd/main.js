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

    __exports__["default"] = HamburgerLink;
  });
define("cat-components/hamburger-menu/hamburger-menu-tmpl",
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Handlebars.compile("<div id=\"navigation\" class=\"nav-close\">\n    <h3>Shop Brands</h3>\n    <ul class=\"col-md-12 nav\">\n        <li>\n            <a href=\"#\">Outfitters</a>\n        </li>\n        <li>\n            <a href=\"#\">Factory</a>\n        </li>\n    </ul>\n    <ul class=\"col-md-12 nav\">\n        <li>\n            <a href=\"#\">\n                Find a Store\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Gift Cards\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Credit\n            </a>\n        </li>\n    </ul>\n    <ul class=\"col-md-12 nav\">\n        <li>\n            <a href=\"#\">\n                My Account\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Track Orders\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Favorites\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Rewards\n            </a>\n        </li>\n    </ul>\n    <ul class=\"col-md-12 nav\">\n        <li>\n            <a href=\"#\">\n                International Settings\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Help\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Contact Us\n            </a>\n        </li>\n        <li>\n            <a href=\"#\">\n                Feedback\n            </a>\n        </li>\n    </ul>\n</div>\n");
  });
define("cat-components/hamburger-menu/hamburger-menu",
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
define("cat-components",
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