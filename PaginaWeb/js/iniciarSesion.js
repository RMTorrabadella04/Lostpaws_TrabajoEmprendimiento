let usuario;
let cont;
let dentro = false;

// Menu

function menu() {
  if (!dentro) {
    let opcion = prompt(
      "¿Quieres iniciar sesión o registrarte?",
      "Iniciar sesión / Registrarse"
    );

    switch (opcion.toLowerCase()) {
      case "iniciar sesión":
        iniciarSesion();
        break;
      case "registrarse":
        registrarse();
        break;
      default:
        alert(
          "Opción no reconocida. Por favor, selecciona 'Iniciar sesión' o 'Registrarse'."
        );
        break;
    }
  } else if (dentro) {
    let salir = prompt("Desea salir de la sesion", "Si / No");

    switch (salir.toLowerCase()) {
      case "si":
        alert("Se va ha salir de la sesion");
        dentro = false;
        break;
      case "no":
        alert("Ok, " + usuario);
        break;
      default:
        alert("Opción no reconocida. Por favor, selecciona 'Si' o 'No'.");
        break;
    }
  }
}

// Funcion para registrarse

function registrarse() {
  if (usuario != null) {
    let sobreescribir = prompt(
      "Ya tienes un usuario creado, en caso de que quieras volver a registrarte sobreescribiras los datos y no podras volver a usar el anterior usuario.\n\n¿Quieres registrarse y sobreescribir?",
      "Si / No"
    );

    switch (sobreescribir.toLowerCase()) {
      case "si":
        usuario = null;
        cont = null;
        do {
          usuario = prompt("Por favor introduzca un usuario.");

          cont = prompt("Introduzca la contraseña");
        } while (usuario == null);
        break;
      case "no":
        alert("Ok, " + usuario);
        break;
      default:
        alert("Opción no reconocida. Por favor, selecciona 'Si' o 'No'.");
        break;
    }
  } else {
    do {
      usuario = prompt("Por favor introduzca un usuario.");

      cont = prompt("Introduzca la contraseña");
    } while (usuario == null);
  }
}

// Funcion para iniciar sesion

function iniciarSesion() {
  let user = prompt("Por favor introduzca el usuario anteriormente creado");

  let c = prompt("Por favor introduzca la contraseña del usuario");

  if (usuario == user && cont == c && usuario != null) {
    alert("Se ha iniciado sesion con exito");
    dentro = true;
  } else {
    alert(
      "Ha habido algún error, a lo mejor no te hs registrado o has puesto mal el usuario o la contraseña"
    );
  }
}
