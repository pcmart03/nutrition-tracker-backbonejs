var app = app || {};

app.HomeView = Backbone.View.extend({
    el: "#nutrition-app",
    tagName: "div",
    template: _.template($("#main-view").html()),

    initialize: function(){
        this.listenTo(app.savedFoods, 'add', this.addOne);
        this.listenTo(app.savedFoods, 'reset', this.addAll);
    },

    render: function(){
        this.$el.html(this.template());
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

