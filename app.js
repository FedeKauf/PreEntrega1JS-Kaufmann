let nombreCliente;
let nombreProducto;
let precioProducto = 0;
let cantidad;
let total = 0;
let continuarCompra;

nombreCliente = prompt(
  "Bienvenido a Nike online!. Por favor, ingrese su nombre"
);
nombreCliente = alert(
  "Hola " +
    nombreCliente +
    "! Ahora ingresarás el nombre y precios de tus productos!"
);

do {
  nombreProducto = prompt(`Ingrese el NOMBRE que corresponda al producto:
        1. Remera/s   4.Pantalon/es  7.Zapatillas
        2. Chomba/s   5.Shorts       8.Zapatos
        3. Camisa/s   6.Maya/s       9.Crocks
        `);
  while (nombreProducto <= 10){
    alert(
      "Ese nombre no corresponde a un producto, por favor ingrese sólo el NOMBRE de producto. Ejemplo 'Remera'"
    );
    nombreProducto = prompt(`Ingrese el NOMBRE que corresponda al producto:
            1. Remera/s   4.Pantalon/es  7.Zapatillas
            2. Chomba/s   5.Shorts       8.Zapatos
            3. Camisa/s   6.Maya/s       9.Crocks
            `);
  }
  precioProducto = parseFloat(prompt(`Usted ingresó ${nombreProducto + "/s"}. Ingrese el PRECIO del producto que eligió:
        1. Remera: $100   4.Pantalon: $500   7.Zapatillas: $300
        2. Chomba: $200   5.Shorts:   $200   8.Zapatos:    $400
        3. Camisa: $500   6.Maya:     $200   9.Crocks:     $100
        `)
  );
  while (precioProducto <= 99) {
    precioProducto = alert(
      "Precio inválido, ingrese precio como se encuentra en la lista y sin signo $!"
    );
    precioProducto = parseFloat(
      prompt(`Usted ingresó ${
        nombreProducto + "/s"
      }. Ingrese el precio del producto
            1. Remera: $100   4.Pantalon: $500   7.Zapatillas: $300
            2. Chomba: $200   5.Shorts:   $200   8.Zapatos:    $400
            3. Camisa: $500   6.Maya:     $200   9.Crocks:     $100
            `)
    );
  }
  while (precioProducto <= 0);
  cantidad = parseInt(
    prompt(`Ingrese su cantidad de ${nombreProducto + "/s"}`)
  );
  while (cantidad <= 0) {
    cantidad = parseInt(
      prompt("Cantidad incorrecta, no puede ser menor a 1, vuelva a ingresarla")
    );
    cantidad = parseInt(
      prompt(`Ingrese su cantidad de ${nombreProducto + "/s"}`)
    );
  }
  total = total + precioProducto * cantidad;
  continuarCompra = prompt("Desea ingresar otro producto? si/no");
  while ((continuarCompra != "si") && (continuarCompra != "no")){
    alert("Usted ha ingresado una palabra distinta a 'SI' y/o a 'NO'. Por favor, escriba su elección nuevamente")
    continuarCompra = prompt("Desea ingresar otro producto? si/no");
  }

} while (continuarCompra == "si");
alert(`El total es: ${total}. Muchas gracias por su compra, vuelva pronto!`);
