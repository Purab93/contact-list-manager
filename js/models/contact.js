define([
], function() {
    'use strict';
    var ContactModel = Backbone.Model.extend({
        defaults:{
            "firstName":null,
            "lastName":null,
            "mobile":null,
            "email":null,
            "favTypeContact":false,
            "familyTypeContact": false,
            "guid":null
        }
    },{
        EVENTS:{
            "CONTACT_INFO_UPDATED":"contact-info-updated",
            "HIDE_CONTACT":"hide-contact"
        }
    });
    return ContactModel;
});