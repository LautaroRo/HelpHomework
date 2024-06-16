const form = document.getElementById("form")
const button = document.getElementById("buttonMostrar")
const buttonDelete = document.getElementById("EliminarUsuarios")
const div = document.getElementById("div")

const usuarios = []

form.addEventListener("submit", (e) => {

    e.preventDefault()

    const data = new FormData(form)

    const obj = {}

    data.forEach((value,key) => obj[key] = value)

    usuarios.push(obj)
    
    form.reset()

})


button.addEventListener("click", (e) => {
    e.preventDefault()


    div.innerHTML = ""

    let userList = "<ul>"

    for(let i = 0; usuarios.length > i; i++){

        userList += `<li>Nombre: ${usuarios[i].Nombre}</li> <li>Apellido: ${usuarios[i].Apellido}</li> <li>Edad: ${usuarios[i].Edad}</li>`
    }

    userList += "</ul>"

    div.innerHTML = userList
})


buttonDelete.addEventListener("click", (e) => {
    
    if(usuarios.length < 1){
        div.innerHTML = "<p>No hay usuarios registrados</p>"
    }else{
    usuarios.pop()
    div.innerHTML = "Se eliminaron los usuarios"
    }

})