define([
    'tpl/contact-details'
], function(contactDetailsTpl) {
    'use strict';
    var ContactDetailsView = Backbone.View.extend({
        events:{
            "click .edit-contact-detail-btn":"editContact",
            "click .delete-contact-detail-btn":"deleteContact"
        },
        render:function(){
            var model=this.model,
                templateOptions={
                "contactName":model.get('firstName') +' '+ model.get('lastName'),
                "contactEmail":model.get('email'),
                "contactNumber":model.get('mobile'),
                "isFavorite":model.get('favTypeContact'),
                "isFamily":model.get('familyTypeContact'),
                "editContactBtnText":"Edit",
                "deleteBtnText":"Delete"
            },
            addContactHtml=Handlebars.templates["contact-details.tpl"](templateOptions);
            this.$el.html(addContactHtml);
        },
        editContact:function(){
            this.trigger(this.constructor.EVENTS.EDIT_CONTACT,this.model);
        },
        deleteContact:function(){
            this.trigger(this.constructor.EVENTS.DELETE_CONTACT,this.model);
        }
    },{
        "EVENTS":{
            "EDIT_CONTACT":"edit-contact",
            "DELETE_CONTACT":"delete-contact"
        }
    });
    return ContactDetailsView;
});