define([
    'tpl/add-contact'
], function(AddContactTpl) {
    'use strict';
    var AddEditContactView = Backbone.View.extend({
        events:{
            "click .add-contact-info-btn":"addContactInfo",
            "click .error-close-btn":"closeErrorClick",
            "click .reset-btn":"resetContactData",
            "click .edit-contact-info-btn":"updateContactInfo",
            "click .delete-contact-info-btn":"deleteContact"
        },
        render:function(){
            var templateOptions={
                "addContactHeaderText":"Add new contact!",
                "addContactHeaderDescription":"Fill out the form below to add a new contact",
                "errorMessageHeader":"There was some errors with your submission",
                "addContactBtnText":"Add Contact",
                "resetBtnText":"Reset",
                "editContactBtnText":"Save",
                "deleteBtnText":"Delete"
            },
            addContactHtml=Handlebars.templates["add-contact.tpl"](templateOptions);
            this.$el.append(addContactHtml);
            this.editContactBtnConfig(false);
            this.$('.error-messages-container').hide();
        },
        addContactInfo:function(){
            var vaildationInfo = this.validateContactInfo(),
                contactInfo;

            if(vaildationInfo.isValid){
                contactInfo= this.getContactInfo();
                this.trigger(this.constructor.EVENTS.ADD_CONTACT_INFO,contactInfo);
                this.hideForm();
            } else {
                this.showErrorMsg(vaildationInfo.errorMsgs);
            }
        },
        showErrorMsg:function(errorMsgList){
            var errorMsgCounter=0;
            this.$('.error-messages-container').show();
                this.$('.error-message-holder').html('');
                for(;errorMsgCounter<errorMsgList.length;errorMsgCounter++){
                    this.$('.error-message-holder').append('<li>'+errorMsgList[errorMsgCounter]+'</li>');
                }
        },
        getContactInfo:function(){
            return {
                    "firstName":this.$('.contact-first-name').val(),
                    "lastName":this.$('.contact-last-name').val(),
                    "mobile":this.$('.contact-mobile').val(),
                    "email":this.$('.contact-email').val(),
                    "favTypeContact":this.$('.contact-type-favourite').prop('checked'),
                    "familyTypeContact": this.$('.contact-type-family').prop('checked')
                };
        },
        setContactInfo:function(contactModel){
            this.$('.contact-first-name').val(contactModel.get("firstName"));
            this.$('.contact-last-name').val(contactModel.get("lastName"));
            this.$('.contact-mobile').val(contactModel.get("mobile"));
            this.$('.contact-email').val(contactModel.get("email"));
            this.$('.contact-type-family').prop('checked',contactModel.get("favTypeContact"));
            this.$('.contact-type-favourite').prop('checked',contactModel.get("familyTypeContact"));
        },
        resetContactData:function(){
            this.resetErrorTextHighlight();
            this.$('.contact-first-name').val("");
            this.$('.contact-last-name').val("");
            this.$('.contact-mobile').val("");
            this.$('.contact-email').val("");
            this.$('.contact-type-family').prop('checked',false);
            this.$('.contact-type-favourite').prop('checked',false);
            this.$('.error-message-holder').html('');
            this.$('.error-messages-container').hide();
        },
        validateContactInfo:function(){
            this.resetErrorTextHighlight();
            var errorMsgs=[],
                emailRegexCheck=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                mobRegexCheck=/^(\+\d{1,3}[- ]?)?\d{10}$/,
                firstNameValue=this.$('.contact-first-name').val(),
                mobileValue=this.$('.contact-mobile').val(),
                emailValue=this.$('.contact-email').val();

            if(firstNameValue === ""){
                errorMsgs.push('Please include First Name for adding contact.');
                this.$('.first-name-field-holder').addClass('error-text-color');
                this.$('.first-name-field-holder input').addClass('error-input-color');
            } else if(firstNameValue.length<3){
                errorMsgs.push('First Name should be minimum than 3 characters.');
                this.$('.first-name-field-holder').addClass('error-text-color');
                this.$('.first-name-field-holder input').addClass('error-input-color');
            }

            if(mobileValue === ""){
                errorMsgs.push('Please include number for adding contact.');
                this.$('.mobile-field-holder').addClass('error-text-color');
                this.$('.mobile-field-holder input').addClass('error-input-color');
            } else if (mobileValue.search(mobRegexCheck)=== -1){
                errorMsgs.push('Please enter a valid mobile number.');
                this.$('.mobile-field-holder').addClass('error-text-color');
                this.$('.mobile-field-holder input').addClass('error-input-color');
            }

            if(emailValue === ""){
                errorMsgs.push('Please include email for adding contact.');
                this.$('.email-field-holder').addClass('error-text-color');
                this.$('.email-field-holder input').addClass('error-input-color');
            }else if(emailValue.search(emailRegexCheck) === -1){
                errorMsgs.push('Please enter a valid email id.');
                this.$('.email-field-holder').addClass('error-text-color');
                this.$('.email-field-holder input').addClass('error-input-color');
            }

            return {
                "isValid":errorMsgs.length ? false : true,
                "errorMsgs":errorMsgs
            };
        },
        resetErrorTextHighlight:function(){
            this.$('.field-holder').removeClass('error-text-color');
            this.$('.field-holder input').removeClass('error-input-color');
        },
        closeErrorClick:function(){
            this.$('.error-messages-container').hide();
            this.resetErrorTextHighlight();
        },
        showForm:function(){
            this.$el.show();
        },
        hideForm:function(){
            this.$el.hide();
            this.editContactBtnConfig(false);
            this.resetErrorTextHighlight();
        },
        editContact:function(contactModel){
            this.currentEditModel=contactModel;
            this.resetContactData();
            this.setContactInfo(contactModel);
            this.editContactBtnConfig(true);
        },
        updateContactInfo:function(){
            var vaildationInfo = this.validateContactInfo(),
                contactInfo;

            if(vaildationInfo.isValid){
            this.currentEditModel.set(this.getContactInfo());
            this.trigger(this.constructor.EVENTS.EDIT_CONTACT_INFO,this.currentEditModel);
            this.editContactBtnConfig(false);
            this.hideForm();
            } else{
                this.showErrorMsg(vaildationInfo.errorMsgs);
            }
        },
        deleteContact:function(){
            this.trigger(this.constructor.EVENTS.DELETE_CONTACT_INFO,this.currentEditModel);
            this.editContactBtnConfig(false);
            this.hideForm();
        },
        editContactBtnConfig:function(editContact){
            if(editContact){
                this.$('.add-contact-btn-container').hide();
                this.$('.edit-contact-btn-container').show();
            } else {
                this.$('.add-contact-btn-container').show();
                this.$('.edit-contact-btn-container').hide();
            }
        }
    },{
        "EVENTS":{
            "ADD_CONTACT_INFO":"add-contact-info",
            "EDIT_CONTACT_INFO":"edit-contact-info",
            "DELETE_CONTACT_INFO":"delete-contact-info"
        }
    });
    return AddEditContactView;
});