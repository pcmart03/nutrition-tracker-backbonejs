var app = app || {};

app.AppView = Backbone.View.extend({
    el: "#nutrition-app",
    tagName: "div",
    template: _.template($("#main-view").html()),


    render: function(){
        this.$el.html(this.template());
    }
});


app.SearchView = Backbone.View.extend({
    el: "#nutrition-app",
    template: _.template($('#search-view').html()),

    events: {
        'keypress .search-box': 'searchOnEnter'
    },

    initialize: function(){
        this.$searchBox = this.$('.search-box');
        this.$searchResults = this.$('#search-results');

        this.listenTo(app.resultsCollection, 'reset', this.addAll);
    },
    
    render: function(){
        this.$el.html(this.template());
        return this;
    },

    searchOnEnter: function(event){
        var _self = this;
        if (event.which !== ENTER_KEY){
            return;
        }
        var searchQuery = $('.search-box').val().trim();
        console.log(searchQuery);
        app.resultsCollection = new Foods({searchTerm: searchQuery});
        app.resultsCollection.fetch().done(function(){
            _self.addAll();
        });
        //this.addAll();
    },

    addOne: function(food) {
        var view = new app.ResultView({model: food});
        $('#results-list').append(view.render().el);
    },

    addAll: function(){
        this.$('#results-list').html('');
        app.resultsCollection.each(this.addOne, this);
    },
});