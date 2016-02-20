var app = app || {};

var SavedFoods = Backbone.Firebase.Collection.extend({
    model: app.SavedItem,

    //localStorage: new Backbone.LocalStorage('savedFoods-backbone'),
    url: "https://amber-heat-4345.firebaseio.com/",
        // We keep the Saved foods in sequential order, despite being saved by unordered
    // GUID in the database. This generated the next order number for new items.
    nextOrder: function(){
        if(!this.length){
            return 1;
        }
        return this.last().get('order') + 1;
    },

    // Todos are sortered by their original insertion order.
    comparator: function(food){
        return food.get('order');
    }

});

app.savedFoods = new SavedFoods();
