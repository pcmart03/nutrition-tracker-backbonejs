var app = app || {};

app.Workspace = Backbone.Router.extend({
    routes: {
        "": "homePage",
        "search": "searchFoods"
    },

    homePage: function(){
        this.home = new app.AppView();
        this.home.render();
    },

    searchFoods: function(){
        this.searchView = new app.SearchView();
        this.searchView.render();
    }
});

