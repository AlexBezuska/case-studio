var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');

var models = "./src/component-models";
var templates = "./src/component-templates";

var layout = require("./src/layout.json");

var header = fs.readFileSync("./src/header.hbs", "utf8");
var footer = fs.readFileSync("./src/footer.hbs", "utf8");


generateOutputFile("./index.html", fillComponents(layout, null));

function fillComponents(layout, data){
  var html = header;
  layout.map((componentName)=>{
    html += fillComponent(componentName,  null);
  });
  return html += footer;
}

function fillComponent(componentName, data){
  var template = fs.readFileSync(path.join(templates, componentName + ".hbs"), "utf8");
  var model = require("./src/component-models/" + componentName +".json");
  var template = handlebars.compile(template);
  return template(model); //FIXME
}

function generateOutputFile(filename, html){
  fs.writeFile(filename, html, function(err) {
    if(err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
}
