this["templates"] = this["templates"] || {};

this["templates"]["cartView"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"Row"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias1).call(depth0,(depth0 != null ? depth0.couponApplied : depth0),true,{"name":"ifEquals","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"\n             data-id="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n            <div class=\"Cell\"><p>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p></div>\n            <div class=\"Cell\"><p>"
    + alias3(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"amount","hash":{},"data":data}) : helper)))
    + "</p></div>\n            <div class=\"Cell\"><p>"
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p></div>\n        </div>\n";
},"2":function(depth0,helpers,partials,data) {
    return " discountedItem";
},"4":function(depth0,helpers,partials,data) {
    return " coupenized";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"cart-table\">\n    <div class=\"Heading\">\n        <div class=\"Cell\">name</div>\n        <div class=\"Cell\">amount</div>\n        <div class=\"Cell\">price</div>\n    </div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"total table-footer Row"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.total : depth0)) != null ? stack1.totalCouponApplied : stack1),true,{"name":"ifEquals","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n        <div class=\"Cell\">Total:</div>\n        <div class=\"Cell total-amount\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.total : depth0)) != null ? stack1.amount : stack1), depth0))
    + "</div>\n        <div class=\"Cell total-price\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.total : depth0)) != null ? stack1.price : stack1), depth0))
    + "</div>\n    </div>\n</div>\n\n\n<div class=\"coupon\">\n    <label for=\"coupon-code\">Coupon Code:</label>\n    <input id=\"coupon-code\">\n    <button class=\"apply\">Apply</button>\n</div>\n";
},"useData":true});

this["templates"]["mainView"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <div class=\"Cell\" data-field=\""
    + alias2(alias1(depth0, depth0))
    + "\"><span class=\"sort-highestFirst\">&#8593;</span>"
    + alias2(alias1(depth0, depth0))
    + "<span class=\"sort-lowestFirst\">&#8595;</span></div>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"Row\" data-id="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n        <div class=\"Cell\"><p>"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "</p></div>\n        <div class=\"Cell\"><p>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p></div>\n        <div class=\"Cell\"><p>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + " </p></div>\n        <div class=\"Cell\"><img src="
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "></div>\n        <div class=\"Cell\">\n            <p>\n"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),"onsale",{"name":"ifEquals","hash":{},"fn":this.program(4, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "            </p>\n\n        </div>\n        <div class=\"Cell\"><p>"
    + alias3(((helper = (helper = helpers.stock || (depth0 != null ? depth0.stock : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stock","hash":{},"data":data}) : helper)))
    + "</p></div>\n        <div class=\"Cell\"><input class=\"amount\" type=\"number\" data-id="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n            <button class=\"addToCartBtn\" data-id="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " disabled>Add</button>\n        </div>\n    </div>\n";
},"4":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <span class=\"old-price\">"
    + alias3(((helper = (helper = helpers.oldprice || (depth0 != null ? depth0.oldprice : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"oldprice","hash":{},"data":data}) : helper)))
    + "</span>\n                    <span class=\"sale-price\">"
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper;

  return "                    "
    + this.escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"Heading\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.properties : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["templates"]["pageList"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression, alias2=this.lambda;

  return "        <li class=\"page-number"
    + alias1((helpers.currentPageClass || (depth0 && depth0.currentPageClass) || helpers.helperMissing).call(depth0,depth0,{"name":"currentPageClass","hash":{},"data":data}))
    + "\" data-number="
    + alias1(alias2(depth0, depth0))
    + ">"
    + alias1(alias2(depth0, depth0))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});