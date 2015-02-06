define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var ArrayProxy = __dependency1__.ArrayProxy;
    var computed = __dependency1__.computed;

    var WithConfigMixin = Em.Eu.WithConfigMixin;

    var HamburgerLink = Component.extend(WithConfigMixin, {

        tagName: 'a',
        classNames: ['hamburger-link', 'glyphicon', 'glyphicon-align-justify']

    });

    __exports__["default"] = HamburgerLink
  });