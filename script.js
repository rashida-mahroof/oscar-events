// Google Maps initialization
function initMap() {
    const mapOptions = {
        center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
        zoom: 12
    };
    const map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
    
    // Add a marker
    const marker = new google.maps.Marker({
        position: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
        map: map,
        title: 'Harmoni Event Management'
    });
}

$(document).ready(function(){
    $("#heroCarousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        nav: false,
        dots: true,
        animateOut: 'fadeOut',
        smartSpeed: 450
    });
});