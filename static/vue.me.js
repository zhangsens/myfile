'use strict'

var x = 1;
console.log(x);

var component = {
    template: "<p>this is component!</p>"
}

var app = new Vue({
    el: "#app",
    components: {
        "mycomponent": component
    },
    data: {
        message: "this is message"
    },
    beforeCreate: function() {
        console.log("before create the Vue object!");
    }
});