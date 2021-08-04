// var name= "Juan Manuel";
// var lastname= "Maya Guaquespud";


/* ********************************* FORMAS DE CONCATENACIÓN *************************************/

/* ************ PRIMER FORMA ********************** */
// console.log(name  +" "+ lastname);

/* ************* SEGUNDA FORMA ********************* */
// console.log(`${name} ${lastname}`);

        //  TIPOS DE VARIABLES 
//  existen varios tipos de variables como son String, int, float, Array, Object, Fuction 
// var numero = 1.5;
// numero = "juan"
// console.log(numero);
// console.log("La variable numero es de tipo: " + typeof numero);

        //  DECLARACION DE VARIABLES 

// Existen tres formas  de declarar variables 
    // * Palabra var ----->  nunca se destruye sigue en la memoria 
    // * Palabra let -----> se destruye cuando termine el contexto  y libera memoria

    // function miFuncion(){
        // var marcaCoche= "BMW";
        // let size = 1000;
        // if((marcaCoche= "BMW")){
            // var precio = 90.0;
            
        // }
        // console.log(marcaCoche);
        // console.log (precio);
        // console.log(size);
    // }

    // miFuncion();

    // * Palabra  const ----> No puede cambiar, se le asigna variables que no van a cambiar, cuando se declaran variables 
                            // costantes de manera global se las declara en mayuscula 

        // const urlApi = "http://google.es/api";
        
        // console.log(urlApi);

// ASIGNACIÓN POR DESTRUCTURING 

    // var Objecto = {
        // name : "Juan",
        // apellido : "Maya",
        // edad : 21,
        // pais : "Colombia"
    // }
    /*  ******Asignación por destructuring********** */
    // const {name,apellido, ...rest} =Objecto

    // console.log(name);
    // console.log(apellido);
    // console.log(rest);

// *************** DECLARACIÓN DE UN OBJETO *********************

    // let ventilador={
        // altura: "100cm",
        // color: "negro",
        // potencia: "100w"
    // };

    // var opcionDelUsuario = "color";

    // ************** ANOTACIÓN POR PUNTOS *******************
    // console.log("El ventilador mide: "+ ventilador.altura);
    // console.log("La potencia del ventilador es: "+ ventilador.potencia);
    // console.log("El color del ventilador es: "+ ventilador.color);

    // ************* ANOTACIÓN POR CORCHETES ******************
    // console.log(ventilador[opcionDelUsuario]);

// ************** OBJETOS DENTRO DE OBJETOS **************************

    //  let ventilador={
        // altura: "100cm",
        // color: "negro",
        // potencia: "100w",
        // helices:{
            // tamano: "10cm",
            // material:"plastico",
            // color: "blanco",
            // precio:{
                // precio1: 20,
                // precio2: 40,
                // casa:{
                    // casa1: "la mia",
                    // casa2: "la tuya"
                // }
            // }
        // }
    // };
    // console.log(ventilador.helices.precio.casa.casa2);

// **************** MODIFICACIÓN DE OBJETOS Y CREACIÓN DE NUEVAS PROPIEDADES **************
    // let ventilador ={
        // altura: "10cm",
        // color: "negro",
        // potencia: "100w"
    // };
    
    // ********** Modificar o añadir un elemento en un objeto *******************
    // ventilador.color="blanco";
    // ventilador.potencia="105w";
    // ventilador.precio=59;
    // console.log(ventilador)

// **************** ARRAYS SIMPLES *******************************

    let numeros = [1,2,4,5,6,8,9];
    // console.log(numeros);
    
    let arrayMezclado=[99,"Juan", 4.77, true, false];
    // console.log(arrayMezclado);

    // ******** Añadir elemenentos a un array con la funcion push***************
    
    let miArray=[];
    // console.log(miArray);

    miArray.push("Juan");
    // console.log(miArray);

    miArray.push(55,106,true);
    // console.log(miArray);

    // *********** tamaño de una array ***************************

    // console.log("Mi array tiene un tamaño de: "+ miArray.length+ " elementos");

    // *********** acceder a un elemento del array ***************

    // console.log("el tercer elemento es: "+ miArray[2]);

    // **********Eliminar el ultimo elemento de un array con POP *****************

    miArray.pop();
    // console.log(miArray);

    // **********Eliminar el PRIMER elemento de un array con SHIFT *****************

    miArray.shift();
    // console.log(miArray);

    // ************ Ordenar alfabeticamente un array con SORT **********************

    miArray.sort();

    // **********Encontrar un elemento en un array *****************

    let indexArray= miArray.indexOf(106);
    //  console.log(miArray[indexArray]);

    // ********* como clonar un array con SLICE **************************
    
    let copiaArray = miArray.slice();
    copiaArray.push("Juan");
    let pos=2;
    copiaArray.splice(pos, 2);
    // console.log(miArray);
    // console.log(copiaArray);

// *********************ARRAY DE OBJETOS *************************

    let arrayObjetos = [
        {
            nombre:"Spider Man",
            edad: 17,
            superpoderes:["escalar","tela de arana","super agilidad"],
            armas: false,
            armasLista:[]
        },
        {
            nombre:"HULK",
            edad:32,
            superpoderes:["Super fuerza", "color verde Moco"],
            armas:false,
            armasLista:[]
        },
        {
            nombre: "Iron Man",
            edad: 41,
            superpoderes:["tecnologia","Inteligencia"],
            armas:true,
            armasLista:["Robbots","Laser","Misiles"]
        
        },
        {
            nombre: "aaaa",
            edad: 21,
        }

    ];
    //  console.log(arrayObjetos[1].nombre);


    if(arrayObjetos[2].armas == true){
        // console.log(arrayObjetos[2].nombre);
        // console.log(arrayObjetos[2].armasLista);
    }else{
        // console.log("No tiene armas");
    }
    
// *************** IF ELSE ****************************************
    let nombreHeroe=arrayObjetos[1].nombre;
    let armas= arrayObjetos[1].armas;
    let edad= arrayObjetos[1].edad;

    if(armas){        /* para simplificar true solo se deja la variable*/
        // console.log(`El nombre de tu heroe es ${nombreHeroe}`);
    }else if(!armas){             /* para simplificar el false colocamos ! al principio*/
        // console.log(`${nombreHeroe} No tiene armas`);
    }else{
        // console.log(`Heroe desconocido....`);
    }

// *************** IF TERNARIO *****************************
// se lo utiliza para hacer una comprobación rapida 

    //console.log(arrayObjetos[0].armas ?"Si tiene armas" : "No tiene armas");

// *************** SWITCH *********************************

    let nombre="Hulk";
    
    switch(nombre){
        case "Hulk":
            // console.log(`Estamos en le caso Hulk`);
            break;
        case "Iron Man":
            // console.log(`Estamos en el caso de Iron Man`);
            break;
        case "Capitan America":
            // console.log(`Estamos en el caso de Capitan America`);
            break;
        default:
            // console.log(`Caso desconocido`);
    }

// **************** BUCLE FOR ******************************************
// es el bucle mas sencillo sirve para recorrer arrays

     for(let x=0; x < arrayObjetos.length; x++){
            // console.log(arrayObjetos[x].nombre);
        
        if(arrayObjetos[x].armas==true){
            for(let i=0; i<arrayObjetos[x].armasLista.length; i++){
                // console.log(`las armas son: ${arrayObjetos[x].armasLista[i]}`);
            }
        }else{
            // console.log(`No tine armas`);
        }
     }

// *********** Bucle FOREACH ***************************
    
     arrayObjetos.forEach(heroe =>{
        //  console.log(heroe.nombre);

         if(heroe.armas){
            //  console.log(`Tiene armas`);
             heroe.armasLista.forEach(lista =>{
                //  console.log(lista);
             })
         }else{
            //  console.log(`No tiene armas`);
         }
        //  console.log(`**********************`);
     });
// ************************* Funciones estandar *********************************************
    // Funsion simple 

    function holaMundo(){
        // console.log(`Hola Mundo`);
    }
    holaMundo();

    // Funcion con parametros 

    function holaPersona(nombre,apellidos){
        // console.log(`Hola ${nombre} ${apellidos}`);
    }

    holaPersona("Juan","Maya Guaquespud");

    // Funsion de calculo

    function sumaDosNumeros(numero1, numero2){
        let resultado=0;
        resultado= numero1 + numero2;
        // console.log(`La suma de: ${numero1} + ${numero2} es: ${resultado} `);
    }

    sumaDosNumeros(1000,9000);

    // Funcion de multiplicar

    function tablaMultiplicar(numero){
        
        let maxNum=10;
        for(let x=0; x<=maxNum; x++){
            let resultado= numero*x;
            // console.log(`${numero}x${x}= ${resultado}`);
            
        }     
    }
    tablaMultiplicar(50);

    // funsion para calcular la edad pasando el año de nacimiento 

    function cualEsMiEdad(anioNacimiento){
        let date = new Date();
        let anioActual= date.getFullYear();
        let edad= anioActual-anioNacimiento;
        // console.log(`Tienes ${edad} años`);    
    }
    cualEsMiEdad(2000);

    // Funcion con retorno

    function menosUno(numero){
        return numero -1;
    }
    let resultado= menosUno(10);
    // console.log(resultado);

    // funsion con objeto

    function miFunctionObjeto(objeto){
        let date = new Date();
        let anioActual= date.getFullYear();
        objeto.anioActual=anioActual;
        return objeto;
    }
    let miObjeto={
        nombre: 'Juan',
        apellidos: 'maya'
    }

    let madre={
        nombre:'Mercede',
        apellido:'Guaquespud'
    }

    miObjeto=miFunctionObjeto(miObjeto, madre);
    // console.log(miObjeto,madre);

// *********************** FUNCIONES DE TIPO FECHA (ARROW FUCTIONS)****************

    // Funcion tipo fecha

    const miNombre= () =>{
        // console.log(`Juan Manuel Maya`);
    }
    miNombre();

    // Funcion tipo fecha con return 

    const miApellido=()=>{
        return 'Maya';
    }

    let apellido= miApellido();
    // console.log(apellido);

    const sumaFn = (numero1, numero2)=>{
        let operacion= numero1+numero2;
        return operacion;
    }

    let sumaFinal= sumaFn(2,5);
    // console.log(`el resultado de la suma es: ${sumaFinal}`);

    //funcion tipo fecha numero par o impar

    const numeroParImpar=(numero)=>{
        if(numero%2==0){
            // console.log(`El numero ${numero} es par`);
        }else{
            // console.log(`El numero ${numero} es impar`);
        }
    }
    numeroParImpar(5);

    // ***************** FUNCIONES DE ESPERA DE TIEMPO *****************
    // el setTimeout() sirve para retrasar ejecucciones en una aplicación 

    // console.log(`Carga completa`);
    // setTimeout(() => {
        // alert(`suscribete`);
    // }, 2000);

    const miFuncion =(edad)=>{
        // console.log(`Estamos calculando tu edad`);
        setTimeout(() => {
            miEdad(edad);
        }, 5000);
    }

    const miEdad =(edad)=>{
        // console.log(`Tu edad es de ${edad}`);
    }
    miFuncion(22);

    // *************** FUNCION.MAP() **************************

    //  Es para recorrer array y lo que hace es devolvernos otro array siempre el .MAP() siempre tiene que devolver algo

        const numerosA=[1,5,9,10,50,99,209];
        const dobles=numerosA.map((numero)=>{
            return numero*2;
        });

        // console.log(dobles);

        const arrayClaveValor =[
            {clave:"nombre", valor: "Juan"},
            {clave: "apellidoUno", valor: "Maya"},
            {clave: "apellidoDos", valor:"Guaquespud"},
        ];
        // {nombre: "Juan"}
        // {appelidoUno: "Maya"}
        // {apellidoDos: "Guaquespud"}
        const reformatearArray=arrayClaveValor.map((objeto)=>{
            let obj={};
            obj[objeto.clave]= objeto.valor;
            return obj;
        });
        // console.log(reformatearArray);

    // **************** FUNCION.FILTER() *********************

    // sirve para crar un filtro en los arrays por ejemplo hacer una condicion si esta cumple devolvera contenido
    //  de lo contrario no devolvera nada 

    const arrayHeroes=[
        "Iron Man",
        "Thor",
        "Capitan America",
        "Spiderman",
        "Deadpool"
    ]
    // crear funcion filter()

    const resultHeroesFilter =arrayHeroes.filter((heroe)=>{
        return heroe.length>6;
    });

    const arrayList=["Thor", 77,88,3,6.9, false,"Deadpool",true];

    const resultArrayList=arrayList.filter((elemento)=>{
       return typeof elemento === "number";
    });
    // console.log(resultArrayList);

    // ************* CONVERTIR VARIABLES DE NUMBER A STRING  Y DE STRING A NUMBER *********************

    var number = 10;
    // console.log(`la variable ${number} es de tipo ${typeof number}`);

    // convertir a string

    // var numerString= number.toString();
    // console.log(`la varibale ${numerString} es de tipo ${typeof numerString}`);
    if(typeof number ==="number"){
        var numerString= number.toString();
        // console.log(`la varibale ${numerString} es de tipo ${typeof numerString}`);
    }else{
        // console.log(`la varibale ${numerString} es de tipo ${typeof numerString}`);
    }

    var numeroUno="20";
    var numeroDos=10;

    var total = parseInt(numeroUno)+ numeroDos;
    // console.log(`El resultado de la suma es: ${total}`);
    
    // *************** FUNCION .REPLACE() ********************************
    
    var texto="Mi coche es rojo";
    // console.log(texto);

    var textoCorregido=texto.replace("rojo", "azul");
    // console.log(textoCorregido);

    var numero=6.7;
    // console.log(`${numero} €`);
    var numeroComa=numero.toString();
    numeroComa=numeroComa.replace("." , ",");
    // console.log(`${numeroComa} €`);

    // ************** JSON.STRINGFY() Y JSON.PARSE() **************************

    // ******* FUNCION JSON.STRINGFY()*************
    const coche ={
        marca :"Ferrari",
        color : "Rojo",
        precio: 600000
    }
    // console.log(coche);
    const cocheJson= JSON.stringify(coche);
    // console.log(cocheJson);

    const jsonRecibido= '{"marca":"Ferrari","color":"Rojo","precio":600000}';
    // console.log(jsonRecibido);
    
    const jsonRecibidoObjeto= JSON.parse(jsonRecibido);
    // console.log(jsonRecibidoObjeto);

    // ********** NEW palabra reservada para crear Objetos con tipo.*****************
    
    function Animal(tipo,nombre,edad){
        this.tipo= tipo,
        this.nombre= nombre,
        this.edad= edad
    }

    var dunky = new Animal("Perro","Dunky",9);
    var gato= new Animal("Gato","nose", 5);
    // console.log(dunky);
    // console.log(gato);

    // *********************Async y Await**************************
    var nombreP = null;
    function acualizarNombre(){
        // console.log("Acuatualizando");
        return new Promise(resolve =>{
            setTimeout(() => {
                // console.log("Acualizacion Completa");
                resolve ("Juan Manuel");
            }, 1000);
        })
    }

   async function saludar(){
        nombreP= await acualizarNombre();
        // console.log("Acualizacion Finalizada");
        // console.log(`Hola me llamo ${nombreP}`);
    }
    saludar();

    

    // ********* Creando, Eliminando, Mostrando Cookies y usando Escape y Unescape *******************
    // cookies: son unos registros que se guardan en el navegador del usuario por ejemplo para lamcenar datos no sensibles 
    // Escape: crea una nueva cadena de caracteres en los
    //  que ciertos caracteres han sido sustituidos por una secuencia hexadecimal de escape.
    //Unescape: devuelve los valores a su forma normal
    var nombreE= escape("Ju;an");
    // console.log(nombreE);
    // console.log(unescape(nombreE));
    document.cookie= "nombre=Ju;an; expires=";
    document.cookie="apellidos=maya guaquespud";
    document.cookie="aaaaaaa=wwww";
    document.cookie="wwww=111";

    let cookies= document.cookie;

    const crearCookies=(clave, valor)=>{
        const valorEscape= escape(valor);
        let mesSiguiente= new Date();
        mesSiguiente.setMonth(mesSiguiente.getMonth()+1);
        document.cookie= `${clave}= ${valorEscape};expires=${mesSiguiente}:`;
    }
    crearCookies('MarcaCoche', 'Audi');
    crearCookies('potenciaCoche', '175cw');

    const borraCookie =(clave)=>{
        let mesAntes= new Date();
        mesAntes.setMonth(mesAntes.getMonth()-1);
        // console.log(mesAntes);
        document.cookie=`${clave}=g;expires=${mesAntes}:`;
    }
    // borraCookie("potenciaCoche");

    const obtenerCookies=()=>{
        const cookies=document.cookie;
        const arrayCookies= cookies.split('; ');
        let objetoCookies ={};
        arrayCookies.forEach(cookie =>{
            const cookieArray= cookies.split('=');
            // console.log(cookieArray);
        });

        // console.log(arrayCookies);
    }
    obtenerCookies();
    
    // ***********************LocalStorage ********************************************

    // ********* Crear en localStorage **************
/*
    var nombreU= "Juan";
    var apellidoU= "Maya";
    var edadU= 20;

    localStorage.setItem("nombre", nombreU);
    localStorage.setItem("apellido", apellidoU);
    localStorage.setItem("edad", edadU);

    console.log(localStorage.getItem("nombre"));
    console.log(localStorage.getItem("apellido"));
    console.log(localStorage.getItem("edad"));

    // ******* Borrar en localStorage **************

    localStorage.removeItem("apellido");

    console.log(localStorage.getItem("nombre"));
    console.log(localStorage.getItem("apellido"));
    console.log(localStorage.getItem("edad"));

    // ******* Actualixar en localStorage************
    localStorage.setItem("nombre", "Juan Manuel");

    console.log(localStorage.getItem("nombre"));
    console.log(localStorage.getItem("apellido"));
    console.log(localStorage.getItem("edad"));
*/
    localStorage.removeItem("edad");
    localStorage.removeItem("nombre");
    // ************ LocalStorage con Objetos *****************
     const vehiculo ={
         marca: "ferrari",
         color : "Rojo",
         precio : 600000
     }

     
     const vehiculoString = JSON.stringify(vehiculo);
    //  console.log(vehiculoString);

     localStorage.setItem("vehiculo", vehiculoString);

     let cocheStorage = localStorage.getItem("vehiculo");
     cocheStorage= JSON.parse(cocheStorage);
     cocheStorage.color="negro";
     cocheStorage= JSON.stringify(cocheStorage);
     localStorage.setItem("vehiculo", cocheStorage);
     localStorage.removeItem("vehiculo");
    //  console.log(cocheStorage);

    // ******************onSubmit de un formulario ****************

    function enviarFormulario(){
        event.preventDefault();
        console.log("Formulario enviado");
    }

    // *************PETICION GET CON FETCH *********************
    

    






    