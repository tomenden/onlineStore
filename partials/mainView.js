this["JST"] = this["JST"] || {};

this["JST"]["partials/mainView.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
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