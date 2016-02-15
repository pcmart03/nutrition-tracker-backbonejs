var app = app || {};

var Workspace = Backbone.Router.extend({
    routes: {
        "": "home",
        "search": "searchPage",
        "search/:search_term": "searchFoods",
        "food/:food_id": "addFood"
    },

    home: function(){
        this.homeView = new app.HomeView();
        this.homeView.render();
    },

    searchPage: function(){
        this.searchView = new app.SearchView();
        this.searchView.render();
    },

    searchFoods: function(search_term){
        this.resultsView = new app.SearchView();
        this.resultsView.render();
        this.resultsView.search(search_term);
    },

    addFood: function(id){
        var food = app.resultsCollection.get(id);
        this.addFoodView = new app.AddFoodView({model:food});
        this.addFoodView.render();
    }
});

    app.foodrouter = new Workspace();
    Backbone.history.start();
