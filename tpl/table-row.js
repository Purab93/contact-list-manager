(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['table-row.tpl'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        <span class=\"contact-edit-text table-cell-text\">Edit</span>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <span class=\"contact-delete-text table-cell-text\">Delete</span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"select-contact-container contact-table-cell\">\r\n    <input type=\"checkbox\" class=\"select-contact-input\">\r\n</div>\r\n<div class=\"contact-name-container contact-table-cell\">\r\n    <a href=\"#contact-details-container\"><span class=\"contact-name-text table-cell-text\">"
    + alias4(((helper = (helper = helpers.contactName || (depth0 != null ? depth0.contactName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contactName","hash":{},"data":data}) : helper)))
    + "</span></a>\r\n</div>\r\n<div class=\"contact-mobile-container contact-table-cell\">\r\n    <span class=\"contact-mobile-text table-cell-text\">"
    + alias4(((helper = (helper = helpers.contactMobile || (depth0 != null ? depth0.contactMobile : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contactMobile","hash":{},"data":data}) : helper)))
    + "</span>\r\n</div>\r\n<div class=\"contact-email-container contact-table-cell\">\r\n    <span class=\"contact-email-text table-cell-text\">"
    + alias4(((helper = (helper = helpers.contactEmail || (depth0 != null ? depth0.contactEmail : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contactEmail","hash":{},"data":data}) : helper)))
    + "</span>\r\n</div>\r\n<div class=\"contact-favorite-container contact-table-cell\">\r\n    <span class=\"contact-favorite-text table-cell-text\">"
    + alias4(((helper = (helper = helpers.contactFavorite || (depth0 != null ? depth0.contactFavorite : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contactFavorite","hash":{},"data":data}) : helper)))
    + "</span>\r\n</div>\r\n<div class=\"contact-family-container contact-table-cell\">\r\n    <span class=\"contact-family-text table-cell-text\">"
    + alias4(((helper = (helper = helpers.contactFamily || (depth0 != null ? depth0.contactFamily : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contactFamily","hash":{},"data":data}) : helper)))
    + "</span>\r\n</div>\r\n<div class=\"contact-edit-container contact-table-cell\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isRow : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n<div class=\"contact-delete-container contact-table-cell\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isRow : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});
})();