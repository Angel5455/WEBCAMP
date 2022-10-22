(function() {
    'use strict';
    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function() {


        // var map = L.map('mapa').setView([14.925545, -88.242778], 17);

        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // }).addTo(map);

        // L.marker([14.925545, -88.242778]).addTo(map)
        //     .bindPopup('Arpaz System 2021')
        //     .openPopup()
        //     .bindTooltip('Barrio Llano del Conejo, por los apartamentos de Benigno Pineda')
        //     .openTooltip();




        // Campos Datos de Usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        // campos pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        // Botones y divs
        var calcular = document.getElementById("calcular");
        var errorDiv = document.getElementById("error");
        var lista_productos = document.getElementById("lista-productos");
        var suma = document.getElementById('suma-total');

        //Extras
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');


        if (document.getElementById('calcular')) {

            calcular.addEventListener('click', calcularMontos);

            // pase_dia.addEventListener('blur', mostrarDias);
            // pase_dosdias.addEventListener('blur', mostrarDias);
            // pase_completo.addEventListener('blur', mostrarDias);


            pase_dia.onblur = function() {

                if (this.value > 0) {

                    document.getElementById('viernes').style.display = 'block';

                }

            };

            pase_dia.onfocus = function() {

                if (this.value > 0) {

                    document.getElementById('viernes').style.display = 'none';

                }

            };

            pase_dosdias.onblur = function() {

                if (this.value > 0) {

                    document.getElementById('viernes').style.display = 'block';
                    document.getElementById('sabado').style.display = 'block';

                }

            };

            pase_dosdias.onfocus = function() {

                if (this.value > 0) {

                    document.getElementById('viernes').style.display = 'none';
                    document.getElementById('sabado').style.display = 'none';

                }

            };

            pase_completo.onblur = function() {

                if (this.value > 0) {

                    document.getElementById('viernes').style.display = 'block';
                    document.getElementById('sabado').style.display = 'block';
                    document.getElementById('domingo').style.display = 'block';

                }

            };

            pase_completo.onfocus = function() {

                if (this.value > 0) {

                    document.getElementById('viernes').style.display = 'none';
                    document.getElementById('sabado').style.display = 'none';
                    document.getElementById('domingo').style.display = 'none';

                }

            };


            nombre.addEventListener('blur', validarCampos);
            apellido.addEventListener('blur', validarCampos);
            email.addEventListener('blur', validarCampos);

            email.addEventListener('blur', function() {
                if (this.value.indexOf('@') > -1) {
                    errorDiv.style.display = "none";
                    this.style.border = "1px solid #ccc";
                } else {
                    errorDiv.innerHTML = "No es un Correo Electronico Valido";
                    errorDiv.style.color = 'red';
                    errorDiv.style.display = "block";
                }

            });



            function validarCampos() {
                if (this.value == '') {
                    errorDiv.style.display = "block";
                    errorDiv.innerHTML = "Este campo es requerido";
                    errorDiv.style.color = 'red';
                    this.style.border = "1px solid red";
                } else {
                    errorDiv.style.display = "none";
                    this.style.border = "1px solid #ccc";
                }
            }


            function calcularMontos(event) {
                event.preventDefault();
                // console.log("Has hecho click en calcular");
                // console.log(regalo.value);
                if (regalo.value === "") {
                    alert('Debes elegir un regalo');
                    regalo.focus();
                } else {
                    var boletosDia = parseInt(pase_dia.value, 10) || 0,
                        boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                        boletosCompletos = parseInt(pase_completo.value, 10) || 0,
                        cantCamisas = parseInt(camisas.value, 10) || 0,
                        cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                    var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletosCompletos * 50) + ((cantCamisas * 10) * 0.93) + (cantEtiquetas * 2);
                    console.log(totalPagar);

                    var listaProductos = [];

                    if (boletosDia >= 1) {
                        listaProductos.push(boletosDia + " Pases por dia");
                    }

                    if (boletos2Dias >= 1) {
                        listaProductos.push(boletos2Dias + " Pases por dos dia");
                    }

                    if (boletosCompletos >= 1) {
                        listaProductos.push(boletosCompletos + " Pases Completos");
                    }

                    if (cantCamisas >= 1) {
                        listaProductos.push(cantCamisas + " Camisas");
                    }

                    if (cantEtiquetas >= 1) {
                        listaProductos.push(cantEtiquetas + " Etiquetas");
                    }

                    // console.log(listaProductos);
                    lista_productos.innerHTML = '';
                    lista_productos.style.display = "block";
                    for (var i = 0; i < listaProductos.length; i++) {
                        lista_productos.innerHTML += listaProductos[i] + "<br/>";

                    }
                    // toFixed es para que agarre 2 despues del punto decimal
                    suma.innerHTML = "$ " + totalPagar.toFixed(2);

                }
                // fin del else

            } // funcion Calcular montos

            // function mostrarDias() {
            //     var boletosDia = parseInt(pase_dia.value, 10) || 0,
            //         boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
            //         boletosCompletos = parseInt(pase_completo.value, 10) || 0;

            //     var diasElegidos = [];

            //     if (boletosDia > 0) {
            //         diasElegidos.push('viernes');
            //     }

            //     if (boletos2Dias > 0) {
            //         diasElegidos.push('viernes', 'sabado');
            //     }
            //     if (boletosCompletos > 0) {
            //         diasElegidos.push('viernes', 'sabado', 'domingo');
            //     }

            //     for (var i = 0; i < diasElegidos.length; i++) {

            //         document.getElementById(diasElegidos[i]).style.display = 'block';

            //     }


            // }
        }
    });
    // DOM CONTENT LOADER


})();

(function() {
    'use strict';
    $('div.ocultar').hide();
    $('.menu-programa a:first').addClass('activo');


    //Programa de Conferencia
    $('.programa-evento .info-curso:first').show();

    $('.menu-programa a').on('click', function() {

        $('.ocultar').hide();

        var enlaces = $(this).attr('href');
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        // console.log(enlaces);
        $(enlaces).fadeIn(1000);

        return false;

    });

    //ANIMACIONES PARA LOS NUMEROS
    // nth-child para seleccionar entre los li (primer li (1))

    var resumenLista = $('.resumen-evento');

    if (resumenLista.length > 0) {
        $('.resumen-evento').waypoint(function() {

            $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1200);
            $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 1200);
            $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1500);
            $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 4 }, 1500);

        }, {
            offset: '60%'
        });
    }


    //CUENTA REGREGIVA

    $('.cuenta-regresiva').countdown('2021/03/18 09:00:00', function(event) {
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });

    //LETTERING // TEXTO
    $('.nombre-sitio').lettering();


    // METODO PARA SABER CUANTO MIDE LA VENTANA
    var altura = $(window).height();
    // altura de la barra
    var barraAltura = $(".barra").innerHeight();
    console.log(altura);

    // MENU FIJO
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        // console.log(scroll);

        if (scroll > altura) {
            // console.log("Ya arrebasaste altura de ventana");
            $(".barra").addClass("fixed");
            $('body').css({ 'margin-top': barraAltura + "px" });
        } else {
            // console.log("aun no");
            $(".barra").removeClass("fixed");
            $('body').css({ 'margin-top': "0px" });
        }



        // console.log("Altura barra " + barraAltura);
    });

    // MENU HAMBURGUESA

    $('.menu-movil').on('click', function() {
        // console.log("menu");
        $('.navegacion-principal').slideToggle();
    });


})();
