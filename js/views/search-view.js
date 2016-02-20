var app = app || {};

app.SearchView = Backbone.View.extend({
    el: "#nutrition-app",
    template: _.template($('#search-view').html()),

    events: {
        'keypress #search-box': 'searchOnEnter'
    },

    initialize: function(){
        this.$searchBox = this.$('#search-box');
        this.$searchResults = this.$('#search-results');

        this.listenTo(app.resultsCollection, 'reset', this.addAll);
    },
    
    render: function(){
        this.$el.html(this.template());
        return this;
    },

    searchOnEnter: function(event) {
        if (event.which !== ENTER_KEY){
            return;
        }
        
        var query = $('#search-box').val().trim();
        app.foodrouter.navigate('search/' + query, {trigger: true});

    },

    search: function(query){
        var _self = this;
        var searchQuery = query;
        app.resultsCollection = new Foods({searchTerm: searchQuery});
        app.resultsCollection.fetch().done(function(){
            _self.addAll();
            $('#search-box').val(query)
        });
    },

    addOne: function(food) {
        var foodObj = food;
        var view = new app.ResultView({model: foodObj});
        $('#results-list').append(view.render().el);
    },

    addAll: function(){
        this.$('#results-list').html('');
        app.resultsCollection.each(this.addOne, this);
    },
});