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
            "order": app.savedFoods.nextOrder() || 1,
            "fields": {
                "item_id": this.model.attributes.item_id,
                "item_name": this.model.attributes.item_name,
                "brand_name": this.model.attributes.brand_name,
                "nf_calories": this.model.attributes.nf_calories,
                "nf_serving_size_unit": this.model.attributes.nf_serving_size_unit,
                "nf_serving_size_qty": this.model.attributes.nf_serving_size_qty,
                "serving_eaten": $('#serving_input').val().trim(),
                "calories_eaten": $('#calories_eaten').html(),
                }
            }; 
    },

    saveFood: function(event){
        var servings = $('#serving_input').val().trim();
        app.savedFoods.create(this.newAttributes());
        app.foodrouter.navigate("", { trigger: true})
    }
});

app.SavedFoodView = Backbone.View.extend({
    template: _.template($('#food-row').html()),
    tagName: 'tr',
    render: function(){
        this.$el.append(this.template(this.model.attributes));
        return this;
    }
});