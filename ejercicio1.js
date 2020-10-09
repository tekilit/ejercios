//- ¿Cómo salgo vestido hoy?
//Declara una variable de nombre “temperature” con un valor numérico entre 0 y 50.
//Declara una variable de nombre “sky” con un valor de tipo string que podrá ser “lloviendo” o “soleado”.
//Declara una tercera variable con el nombre “outfit” donde almacenarás el resultado.
//Declara una cuarta variable auxiliar “message” donde guardaremos el mensaje a mostrar.
//A continuación crea un bloque de código que, usando condicionales, concatene en message una prenda según la temperatura (si es mayor de 25 grados añadirá “Ponte una camiseta”, si es menor o igual a 25 añade “Ponte un sweater”)
//Añade otra condición que agregue a message “y un paraguas” si llueve, o “y un sombrero” si hay sol.
//Por ejemplo: “Ponte un sweater y lleva paraguas”

var temperature = 20
var sky = 'lloviendo'
var message= "Ponte"
var outfit = message  


if (temperature >25) {
  console.log (outfit + ' una camiseta' )
}

else if (temperature <= 25) {
  console.log (outfit + ' un sweater')
} 

if  (sky === 'soleado') {
  console.log ('y un sombrero')
}

 if (sky === 'lloviendo') {
  console.log ('y lleva un paraguas')
}
