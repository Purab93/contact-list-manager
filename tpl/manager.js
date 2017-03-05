(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['manager.tpl'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"contact-header-container\">\n    <div class=\"contact-header\">\n        <div class=\"contact-header-text-container\">\n            <span class=\"contact-header-text\">"
    + alias4(((helper = (helper = helpers.mainHeaderText || (depth0 != null ? depth0.mainHeaderText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mainHeaderText","hash":{},"data":data}) : helper)))
    + "</span>\n            <span class=\"contact-counter-holder\"></span>\n        </div>\n        <div class=\"contact-type-btn-container\">\n            <div class=\"show-all-contacts-btn btn btn-default contact-type-btn selected\" data-contact-type=\"all\">\n                <span>"
    + ((stack1 = ((helper = (helper = helpers.showAllContactsBtnText || (depth0 != null ? depth0.showAllContactsBtnText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showAllContactsBtnText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n            </div>\n            <div class=\"show-favorite-contacts-btn btn btn-default contact-type-btn\" data-contact-type=\"favorite\">\n                <span>"
    + ((stack1 = ((helper = (helper = helpers.showFavoriteBtnText || (depth0 != null ? depth0.showFavoriteBtnText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showFavoriteBtnText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n            </div>\n            <div class=\"show-family-contacts-btn btn btn-default contact-type-btn\" data-contact-type=\"family\">\n                <span>"
    + ((stack1 = ((helper = (helper = helpers.showFamilyBtnText || (depth0 != null ? depth0.showFamilyBtnText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showFamilyBtnText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"no-contact-description-text-container\">\n        <div class=\"no-contact-header-text\">"
    + alias4(((helper = (helper = helpers.descriptionHeaderText || (depth0 != null ? depth0.descriptionHeaderText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descriptionHeaderText","hash":{},"data":data}) : helper)))
    + "</div>\n        <p>"
    + alias4(((helper = (helper = helpers.descriptionText || (depth0 != null ? depth0.descriptionText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descriptionText","hash":{},"data":data}) : helper)))
    + "</p>\n        <div class=\"add-contact-btn btn btn-primary\">\n            <span>"
    + ((stack1 = ((helper = (helper = helpers.addContactBtnText || (depth0 != null ? depth0.addContactBtnText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addContactBtnText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n        </div>\n    </div>\n    <div class=\"contact-notification-container\"></div>\n    <div class=\"contact-table-container\">\n        <div class=\"contact-table-header-container\"></div>\n        <div class=\"contact-table-content-container\"></div>\n        <div class=\"contact-table-footer-container\">\n            <div class=\"dummy-select-footer-container\"></div>\n                <div class=\"table-footer-btn-container\">\n                <div class=\"delete-selected-contact-btn btn btn-default disabled\">\n                    <span>"
    + ((stack1 = ((helper = (helper = helpers.deleteSelectedBtnText || (depth0 != null ? depth0.deleteSelectedBtnText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deleteSelectedBtnText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n                </div>\n                <div class=\"delete-all-contacts-btn btn btn-default\">\n                    <span>"
    + ((stack1 = ((helper = (helper = helpers.deleteAllBtnText || (depth0 != null ? depth0.deleteAllBtnText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deleteAllBtnText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n                </div>\n                <div class=\"add-contact-btn btn btn-primary\">\n                    <span>"
    + ((stack1 = ((helper = (helper = helpers.addContactBtnText || (depth0 != null ? depth0.addContactBtnText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addContactBtnText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"add-contact-container\"></div>\n<div id=\"contact-details-container\" class=\"contact-details-container\">\n    <div class=\"contact-details-header\">"
    + alias4(((helper = (helper = helpers.contactDetailsHeaderText || (depth0 != null ? depth0.contactDetailsHeaderText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contactDetailsHeaderText","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"contact-details-holder\"></div>\n</div>";
},"useData":true});
})();