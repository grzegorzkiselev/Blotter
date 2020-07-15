// BLOTTER - Example 1
var text = new Blotter.Text("здравствуй, мир", {
    family : "'Baskerville', serif",
    size : 200,
    fill :  "Orange",
    paddingLeft : 100,
    paddingRight : 100,
    paddingTop : 100,
    paddingBottom : 100
  });
  
  var material = new Blotter.LiquidDistortMaterial();

  material.uniforms.uSpeed.value = 0.1;
  
  var blotter = new Blotter(material, {
    texts : text
  });
  
  var elem = document.querySelector(".app");
  var scope = blotter.forText(text);
  
  scope.appendTo(elem);

  addEventListener("mousemove", function (e) {
        material.uniforms.uVolatility.value = e.clientX * 0.0001;
  })