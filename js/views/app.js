var app = app || {};

app.AppView = Backbone.View.extend({
    el: "#nutrition-app",
    tagName: "div",
    template: _.template($("#main-view").html()),


    render: function(){
        this.$el.html(this.template());
    }
});

app.HomeView = Backbone.View.extend({
    el: "#nutrition-app",
    tagName: "div",
    template: _.template($("#main-view").html()),


    render: function(){
        this.$el.html(this.template());
    } 
});