 
const formulario = document.getElementById('formulario');
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const imagen = document.getElementById("imagen");
const tipo = document.getElementById("tipo");
const password = document.getElementById("password");
const confirmar_contraseña = document.getElementById("confirmar_contraseña");



// console.log(formulario,nombre,email,imagen,tipo, password,confirmar_contraseña);
 
const setErrors = (message, field, isError = true) => {
    if (isError) {
      field.classList.add("invalid");
      field.nextElementSibling.classList.add("error");
      field.nextElementSibling.innerText = message;
    } else {
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("error");
      field.nextElementSibling.innerText = "";
    }
  }
  const validateEmptyField = (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length === 0) {
      setErrors(message, field);
    } else {
      setErrors("", field, false);
    }
  }

// Validaciones form de registro
//   Validación del Email
const validateEmailFormat = e => {
  const field = e.target;
  const fieldValue = e.target.value;
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  if (fieldValue.trim().length > 4 && !regex.test(fieldValue)) {
    setErrors("Por favor ingresa un email valido", field);
  } else {
    setErrors("", field, false);
  }
}

// Mensaje de las validaciones 
nombre.addEventListener("blur", (e) => validateEmptyField("Ingresa tu nombre", e));
password.addEventListener("blur", (e) => validateEmptyField("Ingresa tu contraseña", e));
email.addEventListener("blur", (e) => validateEmptyField("Ingresa tu email", e));
email.addEventListener("input", validateEmailFormat);
confirmar_contraseña.addEventListener("blur", (e) => validateEmptyField("Ingresa nuevamente contraseña anterior", e));

// Validación del campo nombre completo
nombre.addEventListener("change", (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^.{5,20}$/);
    if (fieldValue.trim().length <5 && !regex.test(fieldValue)) {
      setErrors("El nombre debe de contener minimo 5 caracteres", field);
    } else {
      setErrors("", field, false);
    }
  });
  console.log("nombre")

  var imgsize = document.getElementsByClassName("subirimagen")[0].files[0].size;

if(imgsize > 2000000){
	alert('El archivo supera los 2Mb.');
}
// Validación del campo Imagen de perfil
imagen.addEventListener("change", (e) => {
  const field = e.target;
  const fileExt = e.target.files[0].name.split(".").pop().toLowerCase();
  const allowedExt = ["jpg", "jpeg", "png", "gif"];
  if (!allowedExt.includes(fileExt)) {
    setErrors(`Los únicos formatos permitidas son ${allowedExt.join(", ")}`, field);
  } else {
    setErrors("", field, false);
  }
});


// Validación contraseña
password.addEventListener("input", (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^.{6,16}$/);
    if (fieldValue.trim().length >5 && !regex.test(fieldValue)) {
      setErrors("Ingresa una contraseña  de al menos 6 caracteres", field);
    } else {
      setErrors("", field, false);
    }
  });
// Validación confirmar contraseña
confirmar_contraseña.addEventListener("change", (e) => {
    const field = e.target;
    const fileExt = e.target.value;
    if (password.value != confirmar_contraseña.value) {
      setErrors(`Las contraseñas no coinciden`, field);
    } else {
      setErrors("", field, false);
    }
  });




 
