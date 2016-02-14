var app = app || {};

app.ResultView = Backbone.View.extend({

    tagName: "li",
    template: _.template($('#result-template').html()),
    
    render: function(){
        this.$el.html(this.template(this.model.attributes));
        return this;
    },

    selectFood: function(){
        alert("Food Clicked");
    }

})