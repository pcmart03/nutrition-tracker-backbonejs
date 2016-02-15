var app = app || {};

var Foods = Backbone.Collection.extend({
    model: app.FoodItem,
    
    initialize: function(options){
        if (options.searchTerm) {
            this.searchTerm = options.searchTerm;
        }
    },

    url: function(){
        var APP_ID = "de86943f";
        var APP_KEY = "7c49c265a4450f1c80b004885aeee028";
        var urlString = "https://api.nutritionix.com/v1_1/search/";
        urlString += this.searchTerm;
        urlString += '?results=0%3A20&cal_min=0&cal_max=50000&';
        urlString += 'fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_serving_size_unit%2Cnf_serving_size_qty%2C&';
        urlString += 'appId=' + APP_ID;
        urlString += '&appKey=' + APP_KEY;
        return urlString;
    },

    parse: function(response){
            return response.hits;
    
    }


});
