(function(){

    window.BackboneApp = {
        Models: {},
        Collections: {},
        Views: {}
    };

    BackboneApp.Views.HamburgerLink = Backbone.View.extend({
        el: $('.hamburger-link:first'),
        events: {
            click: function(e) {
                e.preventDefault();
                $('.hamburger-menu').toggleClass("slide-in-open");
                $('.page-holder').toggleClass("remove-offset adjust-offset");
            }
        }
    });

    var hamburgerLinkView = new BackboneApp.Views.HamburgerLink();


})();
