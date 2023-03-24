// Mostarar en consola el get
// $(document).ready(function( ) {

//     $("button").click(function() {
//         $.get("dato.txt", function(dato, status,  xhr) {
//             console.log("Mensaje: " + dato + "\nStatus: " + status + " " + xhr.status);
//         });
//     });
// });


// Extraer informacion de un json

// $(function () { 
//     $("button").click( function() {
//         $.get("datos.json", function(datos) {
//             console.log(datos);
//             $("#info").text(datos.nombre + " " + datos.apellido)
//         });
//     });

// });


// Json-Array
// $(function () {
//     $.get("datos2.json", function(data){
//         console.log(data);


//         // Validacion
//         if ($("#info").is(":empty")) {
//             //For Each
//             $.each(data, function(index, obj) {
//                 $("#info").append(obj.nombre+" "+obj.apellido+ " Tiene: "+ obj.edad + " Años" + '<br/>')
//             })
//         }
//     });
// });


//getJSON 

// $(function () {
//     $("button").click(function() {
//         $.getJSON("datos3.json", function(data) {
//             console.log(data);
            
//             $.each(data.empleado, function(index, obj) {
//                 $("ul").append("<li>" + obj.nombre + " : " + obj.salario + "</li>");
//             });
        
//         });
//     });
// });


// Ejercicio Encontrar la edad menor de una persona y solo mostarara esos datos

// $(function () {
//     $("button").click(function() {
//         $.getJSON("datos4.json", function(data) {
//             //Crear arrglo personas
//             var personas = [];
//             var edadMenor = [];
            
//             $.each(data, function(index, obj) {
//                 //Almacenar la edad dentro del arreglo "personas"
//                 personas.push(obj.edad);
//                 edadMenor = personas[0];

//                 // Iterando cada edad que se encuentra dentro del arreglo personas 
//                 $.each(personas, function(index, edad){
//                     if (edad< edadMenor) {
//                         edadMenor = edad;
//                     }
//                 });
//             });
//             $("#info").text("La edad menor es: " + edadMenor); 
//         });
//     });
// });


// Metdo ajax
// $(function () {
//     $("button").click(function () { 
//         $.ajax({
//             type: "GET",
//             url: "datos2.json",
//             dataType: "json",
//             success: function(data) {
//                 console.log(data);
//                 if ($("#info").is(":empty") ) {
                    
//                     $.each(data, function(index, obj){
//                         $("#info").append(obj.nombre + " " + obj.apellido + "<br/>")
//                     });
//                 }
//             },
//             error: function(xhr, status, error) {
//                 console.log(xhr);
//                 console.log(status);
//                 console.log(error);
//             }
//         });
//     });
// });


$(function () {
    $("button").click(function( ) {
        var usuario = $("#nombre").val();
        $.get("servidor.php", {nombre: usuario}, function (data) { 
            $("#info").text(data );
        });
    });
});