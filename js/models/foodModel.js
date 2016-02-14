var app = app || {};

app.FoodItem = Backbone.Model.extend({
    defaults: {
        item_name: "",
        brand_name: "",
        nf_calories: 0,
        nf_calories: 0,
        nf_serving_size_unit: "serving",
        nf_serving_size_qty: 0,
        saved: false
    },

    parse: function(response){
        console.log(response.fields)
        return response.fields;
    },

    toggle: function(){
        this.save({
            saved: !this.get(saved)
        });
    }
})