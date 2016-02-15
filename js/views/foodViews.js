var app = app || {};

app.ResultView = Backbone.View.extend({

    tagName: "li",
    template: _.template($('#result-template').html()),
    
    render: function(){
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});

app.AddFoodView = Backbone.View.extend({
    el: "#nutrition-app",

    template: _.template($('#add-food-template').html()),
    
    tagName: "div",
    render: function(){
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});