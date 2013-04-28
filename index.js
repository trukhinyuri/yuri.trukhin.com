"use strict";
(function () {
    var events = new Modules.Events();
    events.addStartupListener(function() {
        alert("hi");
        var modules = new Modules.Loader("/modules");
        modules.load("globalNavigationMenu", "header");
    });
}());