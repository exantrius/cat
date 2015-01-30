var App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true
    //rootElement: '#ember-app'
});

App.Router = Ember.Router.extend({
    location: 'none'
});

App.HamburgerLink = Ember.ProxView.extend({
    click: function () {
        console.log('HamburgerLink on click');
    }

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
