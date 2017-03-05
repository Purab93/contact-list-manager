define([
    'js/collections/contactCollection'
], function(contactCollection) {
    'use strict';
    var AppManagerModel= Backbone.Model.extend({
        defaults:{
            "contactCollection":null
        },
        initialize:function(){
            this.set('contactCollection',new contactCollection());
        }
    });
    return AppManagerModel;
});