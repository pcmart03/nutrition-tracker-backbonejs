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

    events: {
        "click #save-button": "saveFood",
        "click #update": "calculateCalories" 
    },

    template: _.template($('#add-food-template').html()),
    
    tagName: "div",
    render: function(){
        this.$el.html(this.template(this.model.attributes));
        this.calculateCalories()
        return this;
    },

    calculateCalories: function(){
        var servingSize = $('#serving_input').val();
        var calories = $('#nf_calories').html();
        var totalCalories = servingSize * calories
        $('#calories_eaten').html(totalCalories);
    },

    newAttributes: function(){
        return {
                name: this.model.get('item_name'),
                calories: $('#calories_eaten').html(),
                }
    },

    saveFood: function(event){
        var servings = $('#serving_input').val().trim();
        newFood = this.newAttributes();
        console.log(newFood)
        app.savedFoods.create(newFood);
        app.foodrouter.navigate("", { trigger: true})
    }
});

app.SavedFoodView = Backbone.View.extend({
    template: _.template($('#food-row').html()),
    tagName: 'tr',
      initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },
    render: function(){
        this.$el.append(this.template(this.model.attributes));
        return this;
    }
});