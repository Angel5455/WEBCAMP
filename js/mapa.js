(function() {
    'use strict';


    var map = L.map('mapa').setView([14.925545, -88.242778], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([14.925545, -88.242778]).addTo(map)
        .bindPopup('Arpaz System 2021')
        .openPopup()
        .bindTooltip('Barrio Llano del Conejo, por los apartamentos de Benigno Pineda')
        .openTooltip();


})();
