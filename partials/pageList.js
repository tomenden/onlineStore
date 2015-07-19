this["JST"] = this["JST"] || {};

this["JST"]["partials/pageList.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
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