define([
'js/models/app-manager',
'js/views/app-manager'
], function(AppManagerModel,AppManagerView) {
    'use strict';
    var appManagerView = new AppManagerView({
        model: new AppManagerModel(),
        el: $('.application-container')
    });
});