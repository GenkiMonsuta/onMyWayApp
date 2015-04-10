

function initializeMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.210645, 4.035176),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("mapt"), mapOptions);
}
