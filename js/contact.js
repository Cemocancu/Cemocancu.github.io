// Ensure initMap is globally accessible for the Google Maps API callback
window.initMap = function () {
    const mapElement = document.getElementById('map');

    if (!mapElement) {
        return;
    }
    
    const address = "Küçükyalı, Irmaklar Sok. Küçükyalı İş Merkezi A Blok No:4, 34852 Maltepe/İstanbul";
    const location = { lat: 40.942626, lng: 29.1321432 }; // Hardcoded coordinates
    const mapOptions = {
        center: location,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        rotateControl: false,
        scaleControl: false,
        panControl: false,
        mapId: "CELIKIS_MAP_ID"
    };

    const map = new google.maps.Map(mapElement, mapOptions);
    const marker = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: location
    });
    const infoWindowContent = `
        <div style="font-family: 'Inter', sans-serif; padding: 5px;">
            <h3 style="margin: 0 0 5px 0; font-size: 16px; font-weight: 600;">ÇELİKİŞ</h3>
            <p style="margin: 0; font-size: 14px; color: #333;">${address}</p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}" target="_blank" style="display: inline-block; margin-top: 10px; color: #3b82f6; text-decoration: none; font-weight: 500;">
                Get Directions
            </a>
        </div>
    `;
    const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent,
    });
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
};

if (document.getElementById('map')) {
    // This ensures the Google Maps API is loaded only once and its `initMap` callback is fired.
    const googleMapsApiKey = 'AIzaSyAqGzsdRH59U8gxVo88PpBtKfprBGDjEio';
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&loading=async&callback=initMap&v=weekly&libraries=marker`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}