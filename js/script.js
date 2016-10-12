//ejercicio 1
function Promedio (a, b, c, callback) {
	var resultado = (a+b+c)/3;

	return callback (resultado);
	}
// ejercicio 2
var myVar = setInterval(function(){ myTimer() }, 1000);

		function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = 5;