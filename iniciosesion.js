const Usuarios = [
    { username: "admin", contrasena: "123", ruta: "./administrador/admin.html" },
    { username: "cliente1", contrasena: "123", ruta: "./cliente/cliente.html" },
    { username: "restaurante1", contrasena: "123", ruta: "./restaurante/restaurante.html" },
    { username: "repartidor1", contrasena: "123", ruta: "./repartidor/repartidor.html" }
];

function validateLogin(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === ""){
        swal("Escribe las credenciales", "Usuario y contraseña están vacíos", "info");
        return;
    }

    const userFound = Usuarios.find(u => u.username === username && u.contrasena === password);

    if (userFound) {
        swal("Bienvenido", "Inicio de sesión exitoso", "success")
        .then(() => {
            window.location.assign(userFound.ruta);
        });
    } else {
        swal("Inténtalo de nuevo", "Credenciales incorrectas", "warning");
    }
}
