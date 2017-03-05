define([
    'tpl/table-row',
    'js/models/contact'
], function(TableRowTpl,ContactModel) {
    'use strict';
    var ContactView = Backbone.View.extend({
        events:{
            "click .contact-edit-container":"editContact",
            "click .contact-delete-container":"deleteContact",
            "click .contact-name-container":"viewContactDetails",
            "change .select-contact-input":"contactSelected"
        },
        render:function(){
            this.renderContactData();
            this.bindEvents();
        },
        bindEvents:function(){
            this.listenTo(this.model,'destroy',this.deleteContactView);
            this.listenTo(this.model,ContactModel.EVENTS.CONTACT_INFO_UPDATED,this.renderUpdatedInfo);
            this.listenTo(this.model,ContactModel.EVENTS.HIDE_CONTACT,this.hideContactView);
        },
        renderContactData:function(){
            var model=this.model,
                templateOptions={
                "guid":model.get('guid'),
                "contactName":model.get('firstName') +' '+ model.get('lastName'),
                "contactMobile":model.get('mobile'),
                "contactEmail":model.get('email'),
                "contactFavorite":model.get('favTypeContact')?"Yes":"No",
                "contactFamily":model.get('familyTypeContact')?"Yes":"No",
                "isRow":true
            },
            contactHtml=Handlebars.templates["table-row.tpl"](templateOptions);
            this.$el.append(contactHtml);
        },
        renderUpdatedInfo:function(){
            this.$el.html('');
            this.renderContactData();
        },
        editContact:function(event){
            this.trigger(this.constructor.EVENTS.EDIT_CONTACT,this.model);
        },
        deleteContact:function(event){
            this.trigger(this.constructor.EVENTS.DELETE_CONTACT,this.model);
            this.deleteContactView();
        },
        deleteContactView:function(){
            this.$el.remove();
        },
        hideContactView:function(){
            this.$el.hide();
        },
        viewContactDetails:function(){
            this.trigger(this.constructor.EVENTS.VIEW_CONTACT_DETAILS,this.model);
        },
        "contactSelected":function(){
            this.trigger(this.constructor.EVENTS.CONTACT_SELECTED,this.model);
        }
    },{
        "EVENTS":{
            "EDIT_CONTACT":"edit-contact",
            "DELETE_CONTACT":"delete-contact",
            "VIEW_CONTACT_DETAILS":"view-contact-details",
            "CONTACT_SELECTED":"contact-selected"
        }
    });
    return ContactView;
});