
module.exports = {
    className: 'map',
    template: require('./index.html'),
    data: {
        name: 'Map',
        icon: '/images/blocks_image.png',
        attributes: {
            mapOptions: {
            center: { lat: -34.397, lng: 150.644},
            zoom: 8
            },
            address: {
                value: 'Australia.... somewhere'
            }
        },
        initialize: function (e) {
            var map = new google.maps.Map(document.getElementById('map-canvas'), attributes.mapOptions);
        }
    }
};
