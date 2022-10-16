// TODO: Crear las funciones, objetos y variables indicadas en el enunciado


// TODO: Variable global
let presupuesto = 0;
let gastos = [];
let idGasto = 0;

function actualizarPresupuesto(valor) {
   if (!isNaN(valor) && valor>0){
     return presupuesto = valor;
   }
   else{
    return -1
   }
}

function mostrarPresupuesto() {
    return (`Tu presupuesto actual es de ${presupuesto} €`)
}

function CrearGasto( descripcion, valor, fecha, ...etiquetas ) {
    //Función constructora
    this.descripcion = descripcion;
    this.valor = (valor >= 0) ? valor : 0;
    this.etiquetas = [];

    if (fecha){
        fecha = Date.parse(fecha);
    }
    else {
        fecha = Date.now();
    }
    this.fecha=fecha;

    //Método mostrarGasto
    this.mostrarGasto = function () {
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
    }

    //Método actualizarDescripcion
    this.actualizarDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    }

    //Método actualizarValor
    this.actualizarValor = function (valor){
        if ( !isNaN (valor) && valor >= 0) {
            this.valor = valor;
        }       
    }

    //Método anyadirEtiquetas
    this.anyadirEtiquetas = function (...etiquetas){
        let pos = -1;

        for (let e of etiquetas){

            pos = this.etiquetas.indexOf(e);

            if (pos != -1){
                this.etiquetas.push (pos, 1);
            }
        }
    }
    this.anyadirEtiquetas (...etiquetas);

    //Método borrarEtiquetas
    this.borrarEtiquetas = function (...etiquetas){
        let pos = -1;

        for (let e of etiquetas){

            pos = this.etiquetas.indexOf(e);

            if (pos != -1){
                this.etiquetas.splice (pos, 1);
            }
        }
    }

    //Método mostrarGastoCompleto
    this.mostrarGastoCompleto = function (){
        let txt = "";
        let fecha = new Date (this.fecha)
        let fechaLocal = fecha.toLocaleString (fecha);

        txt += `Gasto correspondiente a ${this.descripcion} con valor ${valor} €\n
        Fecha: ${fechaLocal}\n
        Etiquetas:\n`;

        for (let e of this.etiquetas){
            txt += (`- ${e}\n`);
        }

        return txt;
    }

    //Método actualizarFecha
    this.actualizarFecha = function (fecha){
        fecha = Date.parse (fecha);

        if (fecha){
            this.fecha = fecha;
        }
    }
}

    //Función listarGastos
    function listarGastos(){
        return gastos;
    }

    //Función anyadirGasto
    function anyadirGasto (gasto){
        gasto.id = idGasto;

        idGasto++

        gastos.push(gasto);
    }

    //Función borrarGasto
    function borrarGasto(id){
        let pos = gastos.findIndex(gasto => gasto.id === id);

        if(pos !=-1){
            gastos.splice(pos,1);
        }
    }

    //Función calcularTotalGastos
    function calcularTotalGastos (){
        let total = 0;

        for (let g of gastos){
            total += g.valor;
        }
        return total;
    }

    //Función calcularBalance
    function calcularBalance (){
        return presupuesto - calcularTotalGastos();
    }

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
}
