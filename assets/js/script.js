const boton = document.getElementById('boton')
boton.addEventListener('click', () =>{
    let nombre = document.getElementById('propietario').value
    let telefono = document.getElementById('telefono').value
    let direccion = document.getElementById('direccion').value
    let nombreMascota = document.getElementById('nombreMascota').value
    let tipo = document.getElementById('tipo').value
    let enfermedad = document.getElementById('enfermedad').value
    let resultado = document.getElementById('resultado')
    let datosagregados = document.getElementById('datosagregados')
    let mensaje = document.getElementById('mensaje')

    datosagregados.innerHTML = `<p>Datos Agregados</p>`


    if (tipo === 'perro') {
        perro = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        resultado.innerHTML = perro.datosPropietario() + perro.tipo + perro.datosMascota()
    }
    else if(tipo === 'gato'){
        let gato = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        resultado.innerHTML = gato.datosPropietario() + gato.tipo + gato.datosMascota()
    }
    else if(tipo === 'conejo'){
        let conejo = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        resultado.innerHTML = conejo.datosPropietario() + conejo.tipo + conejo.datosMascota()
    }
    mensaje.classList.add('mensaje')
    mensaje.scrollIntoView({behavior: "smooth", inline: "end"})
})

class Propietario{
    constructor(nombre, direccion, telefono){
        this._nombre = nombre,
        this._direccion = direccion,
        this._telefono = telefono
    }
    datosPropietario(){
        return `<li>El nombre del dueño es: ${this._nombre}, El domicilio es: ${this._direccion}, y el número telefónico de contacto es: ${this._telefono}.</li>`
    }
    }

    class Animal extends Propietario{
        constructor(nombre, direccion, telefono, tipo){
            super(nombre, direccion, telefono)
            this._tipo = tipo
        }
        get tipo(){
            return `<li>El tipo de animal es un: ${this._tipo}`
        }
        set tipo(v){
            this._tipo = v
        }
    }

class Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota,
        this._enfermedad = enfermedad
    }
    get nombreMascota(){
        return this._nombreMascota
    }
    set nombreMascota(v){
        return this._nombreMascota = v
    }
    get enfermedad(){
        return this._enfermedad = enfermedad
    }
    set enfermedad(v){
        return this._enfermedad = v
    }
    datosMascota(){
        return `, mientras que el nombre de la mascota es: ${this._nombreMascota} y la enfermedad es: ${this._enfermedad}.</li>`
    }
}