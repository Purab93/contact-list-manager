(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['add-contact.tpl'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"add-new-contact-holder\">\r\n    <div class=\"add-new-contact-header-container\">\r\n        <div class=\"header-text\">"
    + alias4(((helper = (helper = helpers.addContactHeaderText || (depth0 != null ? depth0.addContactHeaderText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addContactHeaderText","hash":{},"data":data}) : helper)))
    + "</div>\r\n        <div>"
    + alias4(((helper = (helper = helpers.addContactHeaderDescription || (depth0 != null ? depth0.addContactHeaderDescription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addContactHeaderDescription","hash":{},"data":data}) : helper)))
    + "</div>\r\n    </div>\r\n    <div class=\"error-messages-container\">\r\n        <div class=\"error-close-btn btn\"><span class=\"glyphicon glyphicon-remove\"></span></div>\r\n        <div class=\"error-message-header\">"
    + alias4(((helper = (helper = helpers.errorMessageHeader || (depth0 != null ? depth0.errorMessageHeader : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"errorMessageHeader","hash":{},"data":data}) : helper)))
    + "</div>\r\n        <ul class=\"error-message-holder\"></ul>\r\n    </div>\r\n    <div class=\"contact-info-fields-container\">\r\n        <div class=\"first-name-field-holder field-holder\">\r\n              <div class=\"field-holder-text\">First name</div>\r\n              <input type=\"text\" class=\"contact-first-name\" name=\"contact-first-name\" placeholder=\"Name\">\r\n        </div>\r\n        <div class=\"last-name-field-holder field-holder\">\r\n              <div class=\"field-holder-text\">Last name</div>\r\n              <input type=\"text\" class=\"contact-last-name\" name=\"contact-last-name\" placeholder=\"Surname\">\r\n        </div>\r\n        <div class=\"mobile-field-holder field-holder\">\r\n              <div class=\"field-holder-text\">Mobile</div>\r\n              <input type=\"number\" class=\"contact-mobile\" name=\"contact-mobile\" placeholder=\"Mobile\" min=\"0\">\r\n        </div>\r\n        <div class=\"email-field-holder field-holder\">\r\n              <div class=\"field-holder-text\">Email</div>\r\n              <input type=\"email\" class=\"contact-email\" name=\"contact-email\" placeholder=\"Email\">\r\n        </div>\r\n        <div class=\"contact-type-field-holder\">\r\n            <div class=\"contact-type-checkbox\">\r\n                <label><input type=\"checkbox\" class=\"contact-type-favourite\"><span class=\"contact-type-text\">Favourite</span></label>\r\n            </div>\r\n            <div class=\"contact-type-checkbox\">\r\n                <label><input type=\"checkbox\" class=\"contact-type-family\"><span class=\"contact-type-text\">Family</span></label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"add-contact-btn-container\">\r\n        <div class=\"add-contact-info-btn btn btn-primary add-edit-btn\">"
    + alias4(((helper = (helper = helpers.addContactBtnText || (depth0 != null ? depth0.addContactBtnText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addContactBtnText","hash":{},"data":data}) : helper)))
    + "</div>\r\n        <div class=\"reset-btn btn add-edit-btn\">"
    + alias4(((helper = (helper = helpers.resetBtnText || (depth0 != null ? depth0.resetBtnText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resetBtnText","hash":{},"data":data}) : helper)))
    + "</div>\r\n    </div>\r\n    <div class=\"edit-contact-btn-container\">\r\n        <div class=\"edit-contact-info-btn btn btn-primary add-edit-btn\">"
    + alias4(((helper = (helper = helpers.editContactBtnText || (depth0 != null ? depth0.editContactBtnText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"editContactBtnText","hash":{},"data":data}) : helper)))
    + "</div>\r\n        <div class=\"delete-contact-info-btn btn btn-danger add-edit-btn\">"
    + alias4(((helper = (helper = helpers.deleteBtnText || (depth0 != null ? depth0.deleteBtnText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deleteBtnText","hash":{},"data":data}) : helper)))
    + "</div>\r\n    </div>\r\n</div>";
},"useData":true});
})();