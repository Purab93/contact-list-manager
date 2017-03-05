 define([
     'js/models/contact'
], function(ContactModel) {
    'use strict';
    var ContactCollection = Backbone.Collection.extend({
        model:ContactModel
    });
    return ContactCollection;
});