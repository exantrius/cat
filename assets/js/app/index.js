var App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true
    //rootElement: '#ember-app'
});

App.ApplicationController = Ember.Controller.extend({
    isHamburgerMenuVisible: false,
    init: function () {
        console.log('call Application ctor');
    },
    toggleHamburgerMenu: function () {
        this.toggleProperty('isHamburgerMenuVisible');
        $('.page-holder:first').toggleClass("remove-offset adjust-offset");
    },
    actions: {
        testAction: function () {
            console.log('test action');
        }
    }

});

App.ApplicationRoute = Ember.Route.extend({

    init: function () {
        console.log('call ApplicationRoute ctor');
    },
    // renderTemplate: function () {
    //     this.render('hamburger-link');
    // }
    actions: {
        didTransition: function () {
            var _hamburgerLinkViewEl = App.HamburgerLinkView.create({
                container: this.container,
                controller: this.controller
            });
            _hamburgerLinkViewEl.appendTo('#hamburger_link_wrapper');

            var _navigationMenuViewEl = App.NavigationMenuView.create({
                container: this.container,
                controller: this.controller,
                dir: 'right'
            });
            _navigationMenuViewEl.appendTo('#navigation_wrapper');
            return true;
        }
    }

});

App.HamburgerLinkController = Ember.Component.extend({
    init: function () {
        console.log('hamburger ling ctor');
    }
});

App.HamburgerLinkView = Ember.View.extend({
    templateName: 'hamburger-link',
    click: function (e) {
        e.preventDefault();
        this.controller.toggleHamburgerMenu();
    }
});

App.NavigationMenuView = Ember.View.extend({
    templateName: 'navigation',
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

// App.ApplicationController = Ember.Controller.extend({
//     isHamburgerMenuVisible: false,

//     adjustOffset: function () {
//         return 'adjust-offset';
//     }.property('toggleHamburgerMenu'),

//     actions: {
//         toggleHamburgerMenu: function () {
//             this.toggleProperty('isHamburgerMenuVisible');
//         }
//     }
// });

// App.ApplicationRoute = Ember.Route.extend({
//     init: function () {
//         console.log('call ApplicationRoute ctor');
//         //console.log(this.render);
//         //console.log(this.container);
//     },
//     actions: {
//         didTransition: function () {
//             console.log('call didTransition');
//             // var view = Ember.View.create({
//             //     classNames: ['app-loading']
//             // })
//             // .append();
//             return true;
//         }
//     }
// });

// App.IndexView = Ember.View.extend({
//     willInserElement: function () {
//         console.log('index view will_insert_element');
//     }
// })

// App.SlideInComponent = Ember.Component.extend({
//     classNames: ['slide-in'],
//     classNameBindings: ['slideInOpen', 'slideInDir', 'slideIn90'],
//     dir: 'up', // or 'down', or 'right', or 'left'
//     slideInOpen: false,
//     slideIn90: true,

//     slideInDir: function () {
//         return 'slide-in-dir-' + this.get('dir');
//     }.property('dir')
// });
