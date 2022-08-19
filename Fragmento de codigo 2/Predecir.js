function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
/*
console.log(auntContactInfo) = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
Diagrama en T
variables          valores 
auntContactInfo    ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]
*/
function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
/*
console.log(frozen) = ["brócoli", "helado", "croqueta de papa"];

Diagrama en T
Variables       Valores
var produce = ["manzanas", "naranjas"];
var frozen = ["brócoli", "helado"];
var frozen = ["brócoli", "helado", "croqueta de papa"];
*/
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

/*
cosole.log(movieLibrary) = ["Bambi", "E.T.", "Toy Story","Zoro"],["Beetlejuice"]
 
Diagrama en T 
Variables       Valores 
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
var movieLibrary = ["Bambi", "E.T.", "Toy Story","Zoro"];
var movieLibrary = ["Bambi", "E.T.", "Toy Story","Zoro"],["Beetlejuice"]
*/
