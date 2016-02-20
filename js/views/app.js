var app = app || {};

app.AppView = Backbone.View.extend({
    el: "#nutrition-app",
    tagName: "div",
    template: _.template($("#main-view").html()),

    initialize: function(){

        app.savedFoods.fetch();
    },

    render: function(){
        this.$el.html(this.template());
    }

});

app.HomeView = Backbone.View.extend({
    el: "#nutrition-app",
    tagName: "div",
    template: _.template($("#main-view").html()),

    initialize: function(){
        this.listenTo(app.savedFoods, 'add', this.addOne);
        this.listenTo(app.SavedFoods, 'reset', this.addAll);
        app.savedFoods.fetch();
    },

    render: function(){
        this.$el.html(this.template());
        this.addAll();
    },

    addOne: function(food) {
        var foodObj = food;
        var view = new app.SavedFoodView({model: foodObj});
        $('#food-diary-table').append(view.render().el);
    },

    addAll: function(){;
        app.savedFoods.each(this.addOne, this);
    },

});

