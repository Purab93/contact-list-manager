define([
    'tpl/manager',
    'js/views/add-edit-contact',
    'js/models/contact',
    'js/views/contact',
    'tpl/table-row',
    'js/views/contact-details'
], function(ManagerTpl,AddEditContactView,ContactModel,ContactView,TableRowTpl,ContactDetailsView) {
    'use strict';
    var AppManagerView = Backbone.View.extend({
        events:{
            "click .add-contact-btn":"addContactBtnClick",
            "click .delete-selected-contact-btn:not(disabled)":"deleteSelectedContacts",
            "click .delete-all-contacts-btn":"deleteAllContacts",
            "change .select-all-contact-input":"updateSelectedContacts",
            "click .contact-type-btn":"showContactTypeBtn"
        },
        initialize:function(){
            this.render();
        },
        render:function(){
            var templateOptions={
                "mainHeaderText":"Contacts",
                "descriptionHeaderText":"No contact in your address book",
                "descriptionText":"Why dont you go ahead and add one?",
                "addContactBtnText":"<span class='glyphicon glyphicon-user'></span><span class='add-btn-text'>&nbsp;Add Contacts</span>",
                "deleteSelectedBtnText":"Delete Selected",
                "deleteAllBtnText":"Delete All",
                "showAllContactsBtnText":"All",
                "showFavoriteBtnText":"Favorites",
                "showFamilyBtnText":"Family",
                "contactDetailsHeaderText":"Contact Details"
            },
            managerHtml = Handlebars.templates["manager.tpl"](templateOptions);
            this.$el.append(managerHtml);
            this.renderTableHeaderFooter();
            this.updateContactCounter();
        },
        renderTableHeaderFooter:function(){
            var headerTemplateOptions={
                "guid":"header",
                "contactName":"Name",
                "contactMobile":"Mobile",
                "contactEmail":"E-mail Address",
                "contactFavorite":"Favorite",
                "contactFamily":"Family"
            },
            headerHtml=Handlebars.templates["table-row.tpl"](headerTemplateOptions);
            this.$('.contact-table-header-container').append(headerHtml);
            this.$('.contact-table-header-container .contact-table-cell').addClass('table-header-cell')
            this.$('.contact-table-header-container .select-contact-container').addClass('select-all-contact-container').removeClass('select-contact-container');
            this.$('.select-all-contact-container input').addClass('select-all-contact-input').removeClass('select-contact-input');
        },
        addContactBtnClick:function(event){
            if(!this.addContactView){
                this.renderAddEditContactView();
            }
            this.addContactView.resetContactData();
            this.addContactView.showForm();
            this.$('.contact-details-container').hide();
        },
        renderAddEditContactView:function(event){
            this.addContactView= new AddEditContactView({
                el:this.$('.add-contact-container')
            });
            this.addContactView.render();
            this.bindAddEditContactEvents();
        },
        bindAddEditContactEvents:function(){
            this.listenTo(this.addContactView,AddEditContactView.EVENTS.ADD_CONTACT_INFO,this.addContact);
            this.listenTo(this.addContactView,AddEditContactView.EVENTS.EDIT_CONTACT_INFO,this.updateContactData);
            this.listenTo(this.addContactView,AddEditContactView.EVENTS.DELETE_CONTACT_INFO,this.removeContactInfo);
        },
        updateContactData:function(contactModel){
            contactModel.trigger(ContactModel.EVENTS.CONTACT_INFO_UPDATED);
            this.editContactInfo=true;
            this.updateNotificationText();
        },
        addContact:function(contactInfo){
            contactInfo.guid=this.getGuid();
            this.$('.contact-table-content-container').append('<div id="contact-row-'+contactInfo.guid+'" class="contact-row" data-guid="'+contactInfo.guid+'"></div>')
            var contactModel=new ContactModel(contactInfo),
                contactView=new ContactView({
                    "model":contactModel,
                    "el":this.$('#contact-row-'+contactInfo.guid)
                });
            contactView.render();
            this.model.get('contactCollection').push(contactModel);
            this.bindContactViewEvents(contactView);
            this.updateContactCounter();
            this.updateNotificationText();
        },
        bindContactViewEvents:function(contactView){
            this.listenTo(contactView,ContactView.EVENTS.EDIT_CONTACT,this.editContact);
            this.listenTo(contactView,ContactView.EVENTS.DELETE_CONTACT,this.removeContactInfo);
            this.listenTo(contactView,ContactView.EVENTS.VIEW_CONTACT_DETAILS,this.viewContactDetails);
            this.listenTo(contactView,ContactView.EVENTS.CONTACT_SELECTED,this.updateButtonStates);

        },
        updateButtonStates:function(){
            var selectedBtns=this.$('.select-contact-input:checked');

            if(selectedBtns.length){
                this.$('.delete-selected-contact-btn').removeClass('disabled');
                if(selectedBtns.length === this.model.get('contactCollection').length){
                    this.$('.select-all-contact-input').prop('checked',true);
                }else{
                    this.$('.select-all-contact-input').prop('checked',false);
                }
            } else{
                this.$('.delete-selected-contact-btn').addClass('disabled');
                this.$('.select-all-contact-input').prop('checked',false);
            }
        },
        viewContactDetails:function(contactModel){
            this.addContactView.hideForm();
            this.$('.contact-details-container').show();
            this.contactDetailsView=new ContactDetailsView({
                model:contactModel,
                el:this.$('.contact-details-holder')
            });
            this.contactDetailsView.render();
            this.listenTo(this.contactDetailsView,ContactDetailsView.EVENTS.EDIT_CONTACT,this.editContact);
            this.listenTo(this.contactDetailsView,ContactDetailsView.EVENTS.DELETE_CONTACT,this.removeContactInfo);
        },
        editContact:function(contactModel){
            this.addContactView.editContact(contactModel);
            this.addContactView.showForm();
            this.$('.contact-details-container').hide();
        },
        removeContactInfo:function(contactModel){
            this.model.get('contactCollection').remove(contactModel);
            contactModel.destroy();
            this.updateContactCounter();
            this.$('.contact-details-container').hide();
            this.updateNotificationText(1);
        },
        getGuid: function() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        },
        updateContactCounter:function(){
            var contactCollectionLength = this.model.get('contactCollection').length,
                counter;
            if(contactCollectionLength){
                counter = contactCollectionLength>10?contactCollectionLength: '0' + contactCollectionLength;
                this.$('.contact-counter-holder').html('('+counter+')');
                this.$('.no-contact-description-text-container').hide();
                this.$('.contact-table-container').show();
                this.$('.contact-type-btn-container').show();
            } else{
                this.$('.contact-counter-holder').html('');
                this.$('.no-contact-description-text-container').show();
                this.$('.contact-table-container').hide();
                this.$('.contact-type-btn-container').hide();
            }
            if(this.addContactView){
                this.addContactView.hideForm();
            }
            this.$('.contact-details-container').hide();
        },
        deleteSelectedContacts:function(){
            var selectedContacts=this.$('.select-contact-input:checked'),
                currentGuid,
                selectedContactsCounter=0;

            this.updateNotificationText(selectedContacts.length);
            for(;selectedContactsCounter<selectedContacts.length;selectedContactsCounter++){
                currentGuid=$(selectedContacts[selectedContactsCounter]).closest('.contact-row').data('guid');
                this.model.get('contactCollection').where({'guid':currentGuid})[0].destroy();
            }
            this.updateContactCounter();
        },
        deleteAllContacts:function(){
            var contactCollection = this.model.get('contactCollection'),
                contactCounter,
                selectedContactType= this.$('.contact-type-btn.selected').data('contact-type'),
                isCollection=false;
            switch(selectedContactType){
                case "favorite":
                    contactCollection=contactCollection.where({'favTypeContact':true});
                    break;
                case "family":
                    contactCollection=contactCollection.where({'familyTypeContact':true});
                    break;
                default:
                    isCollection=true;
                    break; 
            }
            this.updateNotificationText(contactCollection.length);
            if(isCollection){
                contactCounter=contactCollection.length-1;
                for(;0<contactCollection.length;contactCounter--){
                    contactCollection.at(contactCounter).destroy();
                }
            } else {
                contactCounter=0;
                for(;contactCounter<contactCollection.length;contactCounter++){
                    contactCollection[contactCounter].destroy();
                }
            }
            this.updateContactCounter();
            this.$('.select-all-contact-input').prop('checked',false);
        },
        updateSelectedContacts:function(event){
            var isChecked = $(event.currentTarget).prop('checked');
            this.$('.select-contact-input').prop('checked',isChecked);
        },
        showContactTypeBtn:function(event){
            var contactType=$(event.currentTarget).data('contact-type');
            this.$('.contact-type-btn').removeClass('selected');
            $(event.currentTarget).addClass('selected');
            this.$('.contact-row').show();
            switch(contactType){
                case "favorite":
                    this.hideFamilyContacts();
                    break;
                case "family":
                    this.hideFavContacts();
                    break;
                default:
                    break;
            }
        },
        hideFamilyContacts:function(){
            var familyContactModels=this.model.get('contactCollection').where({'familyTypeContact':true,'favTypeContact':false}),
            bothTypeFalseModels=this.model.get('contactCollection').where({'familyTypeContact':false,'favTypeContact':false}),
                familyTypeContactscounter=0;

            familyContactModels=_.union(familyContactModels,bothTypeFalseModels);
            for(;familyTypeContactscounter<familyContactModels.length;familyTypeContactscounter++){
                familyContactModels[familyTypeContactscounter].trigger(ContactModel.EVENTS.HIDE_CONTACT);
            }

        },
        hideFavContacts:function(){
            var favContactModels=this.model.get('contactCollection').where({'favTypeContact':true,'familyTypeContact':false}),
            bothTypeFalseModels=this.model.get('contactCollection').where({'familyTypeContact':false,'favTypeContact':false}),
                favTypeContactscounter=0;

            favContactModels=_.union(favContactModels,bothTypeFalseModels);
            for(;favTypeContactscounter<favContactModels.length;favTypeContactscounter++){
                favContactModels[favTypeContactscounter].trigger(ContactModel.EVENTS.HIDE_CONTACT);
            }
        },
        updateNotificationText:function(contactsDeleted){
            var notificationText;
            if(contactsDeleted){
                notificationText= contactsDeleted>1?contactsDeleted + ' contacts deleted successfully.':contactsDeleted + ' contact deleted successfully.'
            }else if(this.editContactInfo){
                notificationText='Contact edited successfully.'
                this.editContactInfo=false;
            }else{
                notificationText='New contact added successfully.'
            }
            this.$('.contact-notification-container').html(notificationText).show();
        }
    });
    return AppManagerView;
});