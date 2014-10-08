module.exports = {
    className: 'map',
    template: require('./index.html'),
    data: {
        name: 'Map',
        icon: '/images/blocks_map.png',
        attributes: {
            latitude: {
                label: 'Latitude',
                type: 'double',
                value: '0.0'
            },
            longitude: {
                label: 'Longitude',
                type: 'double',
                value: '0.0'
            },
            address: {
                label: 'Address',
                type: 'string',
                value: 'The Pond Road',
            },
        }
    },
    attached: function () {
        var L = require('leaflet');
        var map = L.map('map');

        L.tileLayer('http://{s}.tiles.mapbox.com/v3/MapID/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(map);
    }
};
