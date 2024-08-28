// script.js
const apiKey = 'AIzaSyA5eBTueOlRZy-3cKEnAr8mJwxh3dXzQ2s'; // Your Google Maps API key
const chargeMapApiUrl = 'https://api.openchargemap.io/v3/poi'; // Example API URL
let map, infoWindow;

function initMap() {
    // Initialize the map
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12
    });

    // Initialize info window
    infoWindow = new google.maps.InfoWindow();

    // Get the user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                // Center the map on the user's location
                map.setCenter(userLocation);

                // Add a marker for the user's location
                new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: 'Your Location'
                });

                // Fetch and display charging stations near the user's location
                fetchChargingStations(userLocation);
            },
            () => {
                handleLocationError(true, infoWindow, map.getCenter());
            }
        );
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function fetchChargingStations(location) {
    fetch(`${chargeMapApiUrl}?output=json&countrycode=IN&latitude=${location.lat}&longitude=${location.lng}&radius=10&compact=true&limit=10`)
        .then(response => response.json())
        .then(data => {
            // Clear existing markers
            clearMarkers();

            // Add new markers from API response
            data.forEach(station => {
                const marker = new google.maps.Marker({
                    position: { lat: station.AddressInfo.Latitude, lng: station.AddressInfo.Longitude },
                    map: map,
                    title: station.AddressInfo.Title
                });

                // Add info window
                marker.addListener('click', () => {
                    infoWindow.setContent(`<div><strong>${station.AddressInfo.Title}</strong><br>${station.AddressInfo.AddressLine1}</div>`);
                    infoWindow.open(map, marker);
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Clear all markers from the map
function clearMarkers() {
    const markers = map.markers || [];
    markers.forEach(marker => marker.setMap(null));
    map.markers = [];
}

// Handle location errors
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

// Load Google Maps script
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=places`;
script.async = true;
document.body.appendChild(script);
