//1. Definir reglas de validación
const number=/^\d[0-9]{1,15}$/
const text=/^[a-zA-Zá-úÁ-ÚñÑ 0-9]{10,50}$/
const email=/^\w+([-+.']\w+)*@misena\.edu\.co$/
const password=/^[a-zA-ZñÑ_ 0-9]{10,20}$/


//1. Acceder al botón para abrir el modal
let btnModal=document.getElementById("termsCheck")

//2. Acceder a la ventana modal
let venModal=document.getElementById("termsModal")

//3. Acceder al boton de cierre de la ventana modal
let cerModal=document.querySelector("#closeModal")

btnModal.addEventListener("click",()=>{
    venModal.style.display="block"
})

//5. Cerrar la ventana Modal
cerModal.addEventListener("click",()=>{
    venModal.style.display="none"
})

let flag
//2. Acceder a los elementos que se van a alterar
// Metodo ID:
const form=document.getElementById("registrationForm")
// Metodo CLASS: const form=document.querySelector("#caja")

//3. Acceder al Feedback

const f1=document.querySelector("#camponoDoc .feedback")

const f2=document.querySelector("#campoNombre .feedback")

const f3=document.querySelector("#campoApellido .feedback")

const f4=document.querySelector("#campoFeNac .feedback")

const f5=document.querySelector("#campoCorreo .feedback")

const f6=document.querySelector("#campopassword .feedback")

const f7=document.querySelector("#campoconfirmPassword .feedback")

//casilla noDoc
form.noDoc.addEventListener('input',e=> {
    e.preventDefault()

    // console.log(e.target)

    // console.log("Se esta escribiendo sobre el Login...")
    if (number.test(e.target.value)) {
        //La regla pasa la validación
        form.noDoc.setAttribute("class","success")
        f1.style.setProperty("display","none")
        f1.style.setProperty("opacity","0")
        flag=true
    } else {
        //La regla NO pasa la validación
        form.noDoc.setAttribute("class","error")
        f1.textContent="Solo se aceptan caracteres númericos, debe ser minimo 1 a 15 caracteres"
        f1.style.setProperty("display","block")
        f1.style.setProperty("opacity","1")
        flag=false
    }
})

form.Nombre.addEventListener('input',e=> {
    e.preventDefault()

    if(text.test(e.target.value)) {
        form.Nombre.setAttribute("class","success")
        f2.style.setProperty("display","none")
        f2.style.setProperty("opacity","0")
        flag=true
    } else {
        form.Nombre.setAttribute("class","error")
        f2.textContent="Solo se aceptan caracteres alfanumericos, debe ser minimo 10 a 50 caracteres"
        f2.style.setProperty("display","block")
        f2.style.setProperty("opacity","1")
        flag=false
    }
})

form.Apellido.addEventListener('input',e=> {
    e.preventDefault()

    if(text.test(e.target.value)) {
        form.Apellido.setAttribute("class","success")
        f3.style.setProperty("display","none")
        f3.style.setProperty("opacity","0")
        flag=true
    } else {
        form.Apellido.setAttribute("class","error")
        f3.textContent="Solo se aceptan caracteres alfabeticos, debe ser minimo 10 a 50 caracteres"
        f3.style.setProperty("display","block")
        f3.style.setProperty("opacity","1")
        flag=false
    }
})

form.FeNac.addEventListener('input',e=> {
    e.preventDefault()
const FeNac=document.getElementById("FeNac").value
const fechaLimite = new Date("01/01/2002");
        const fechaActual = new Date(FeNac);

    if(fechaLimite > fechaActual) {
        form.FeNac.setAttribute("class","success")
        f4.style.setProperty("display","none")
        f4.style.setProperty("opacity","0")
        flag=true
    } else {
        form.FeNac.setAttribute("class","error")
        f4.textContent="Solo se aceptan personas mayores de 18 años en adelante"
        f4.style.setProperty("display","block")
        f4.style.setProperty("opacity","1")
        flag=false
    }
})

form.Correo.addEventListener('input',e=> {
    e.preventDefault()

    if(email.test(e.target.value)) {
        form.Correo.setAttribute("class","success")
        f5.style.setProperty("display","none")
        f5.style.setProperty("opacity","0")
        flag=true
    } else {
        form.Correo.setAttribute("class","error")
        f5.textContent="Solo se aceptan correos con @misena.edu.co"
        f5.style.setProperty("display","block")
        f5.style.setProperty("opacity","1")
        flag=false
    }
})

form.password.addEventListener('input',e=> {
    e.preventDefault()

    if(password.test(e.target.value)) {
        form.password.setAttribute("class","success")
        f6.style.setProperty("display","none")
        f6.style.setProperty("opacity","0")
        flag=true
    } else {
        form.password.setAttribute("class","error")
        f6.textContent="Solo se aceptan contraseñas con minimo una letra minuscula, mayuscula, caracteres especiales y un numero."
        f6.style.setProperty("display","block")
        f6.style.setProperty("opacity","1")
        flag=false
    }
})

form.confirmPassword.addEventListener('input',e=> {
    e.preventDefault()
const confirmPassword=document.getElementById("confirmPassword").value
const password=document.getElementById("password").value
    if(confirmPassword == password) {
        form.confirmPassword.setAttribute("class","success")
        f6.style.setProperty("display","none")
        f6.style.setProperty("opacity","0")
        flag=true
    } else {
        form.confirmPassword.setAttribute("class","error")
        f6.textContent="La contraseña debe ser exacta a la digitada anteriormente"
        f6.style.setProperty("display","block")
        f6.style.setProperty("opacity","1")
        flag=false
    }
})

//---------------------------------------------------


form.addEventListener("submit", (e)=> {
    e.preventDefault()


    if(form.documentType.value==0 || form.documentType.value==0 || flag==false){
        alert("Debe de elegir el Tipo de Documento")
        form.documentType.focus()
    } else if (form.noDoc.value==null || form.noDoc.value==0 || flag==false) {
        alert("Debe ingresar un Número de Documento")
        form.noDoc.focus()
        form.noDoc.setAttribute("class","error")
    } else if(form.Nombre.value==null || form.Nombre.value==0 || flag==false){
        alert("Debe ingresar un Nombre")
        form.Nombre.focus()
        form.Nombre.setAttribute("class","error")
    } else if(form.Apellido.value==null || form.Apellido.value==0 || flag==false){
        alert("Debe ingresar un Apellido")
        form.Apellido.focus()
        form.Apellido.setAttribute("class","error")
    } else if (form.FeNac.value == null || form.FeNac.value == 0 || flag == false) {
        alert("Debe ingresar una Fecha de nacimiento");
        form.FeNac.focus();
        form.FeNac.setAttribute("class", "error");
    } else if(form.Correo.value==null || form.Correo.value==0 || flag==false){
        alert("Debe ingresar un Correo")
        form.Correo.focus()
        form.Correo.setAttribute("class","error")
    } else if(form.password.value==null || form.password.value==0 || flag==false){
        alert("Debe ingresar una Contraseña")
        form.password.focus()
        form.password.setAttribute("class","error")
    } else if(form.confirmPassword.value==null || form.confirmPassword.value==0 || flag==false){
        alert("Debe confirmar la contraseña")
        form.confirmPassword.focus()
        form.confirmPassword.setAttribute("class","error")
    } else if(form.termsCheck.checked==false || form.termsCheck.checked==false ||flag==false){
        alert('Debe Aceptar Los Terminos')
        form.termsCheck.focus()
    } else {
        alert("Se registro exitosamente! :D")
        form.submit()
    }
})