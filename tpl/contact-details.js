(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['contact-details.tpl'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"contact-detail-favorite-container\">\r\n            <span class=\"glyphicon glyphicon-ok\"></span>\r\n            <span class=\"contact-detail-type-text\">Favorite</span>\r\n        </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"contact-detail-family-container\">\r\n            <span class=\"glyphicon glyphicon-star\"></span>\r\n            <span class=\"contact-detail-type-text\">Family</span>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"contact-main-details-container\">\r\n    <div class=\"contact-detail-name\">"
    + alias4(((helper = (helper = helpers.contactName || (depth0 != null ? depth0.contactName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contactName","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"contact-detail-email\">"
    + alias4(((helper = (helper = helpers.contactEmail || (depth0 != null ? depth0.contactEmail : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contactEmail","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"contact-detail-number\">"
    + alias4(((helper = (helper = helpers.contactNumber || (depth0 != null ? depth0.contactNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contactNumber","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n<div class=\"contact-type-container\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isFavorite : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isFamily : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n<div class=\"contact-detail-btn-container\">\r\n    <div class=\"edit-contact-detail-btn btn contact-detail-btn\">"
    + alias4(((helper = (helper = helpers.editContactBtnText || (depth0 != null ? depth0.editContactBtnText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"editContactBtnText","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"delete-contact-detail-btn btn contact-detail-btn\">"
    + alias4(((helper = (helper = helpers.deleteBtnText || (depth0 != null ? depth0.deleteBtnText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deleteBtnText","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>";
},"useData":true});
})();