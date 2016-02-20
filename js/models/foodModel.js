var app = app || {};

app.FoodItem = Backbone.Model.extend({
    defaults: {
        item_id: "",
        item_name: "",
        brand_name: "",
        nf_calories: 0,
        nf_calories: 0,
        nf_serving_size_unit: "serving",
        nf_serving_size_qty: 0,
        serving_eaten: 1,
        calories_eaten: 0
    },

    idAttribute: "item_id",

    parse: function(response){
        return response.fields;
    },

});

app.SavedItem = Backbone.Model.extend({
    defaults: {
        name: "item name",
        calories: 0
    }
})