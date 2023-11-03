let nombre = prompt(`Ingrese su nombre`);

alert(nombre + " bienvenido/a a Seguros Blasque");

const seguros = [
  { tipo: 'Seguro de vida', precio: 100 },
  { tipo: 'Seguro de hogar', precio: 200 },
  { tipo: 'Seguro de auto', precio: 250 }
];

const clientes = [];

function mostrarOpciones() {
  let opciones = '';
  seguros.forEach((seguro, index) => {
    opciones += `${index + 1}.${seguro.tipo} $${seguro.precio}\n`;
  });
  alert(`Elija el tipo de seguro que desea adquirir:
${opciones}
Todos los seguros cuentan con un 10% de descuento al finalizar la compra`);
}

function comprar() {
  let respuesta = Number(prompt("Elija su tipo de seguro"));
  if (respuesta >= 1 && respuesta <= seguros.length) {
    const seleccion = seguros[respuesta - 1].tipo;
    const precioSinDescuento = seguros[respuesta - 1].precio;
    const descuento = precioSinDescuento * 0.1;
    const precioConDescuento = precioSinDescuento - descuento;
    clientes.push({ nombre: nombre, seleccion: seleccion, precio: precioConDescuento });
    alert(`Gracias por elegir tu ${seleccion}! El costo total con descuento es $${precioConDescuento}`);
  } else {
    alert("Usted seleccionó una opción inválida");
    return comprar();
  }
}

mostrarOpciones();
comprar();

alert(`Gracias por confiar en Seguros Blasque. Vuelva pronto!`);

console.log(clientes);