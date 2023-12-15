import React, { useEffect } from 'react';

const apiKey = 'AIzaSyDxJrcxxMu1WZvzGfIl7UW3UEAygP154To';

function getMarkerColor(waitTime) {
  if (waitTime <= 10) {
    return 'green';
  } else if (waitTime <= 30) {
    return 'yellow';
  } else {
    return 'red';
  }
}

function initMap(hospitals, center) {
  const defaultLatLng = { lat: 48.4284, lng: -123.3656 };
  const centerLatLng = center || defaultLatLng;

  const map = new window.google.maps.Map(document.getElementById('map'), {
    center: centerLatLng,
    zoom: 12,
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'transit',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'road.local',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
    ],
    mapTypeControl: false,
    streetViewControl: false,
  });

  const infoWindow = new window.google.maps.InfoWindow();

  hospitals.forEach((hospital) => {
    const hospitalLatLng = { lat: hospital.latitude, lng: hospital.longitude };

    const markerColor = getMarkerColor(hospital.wait);

    const marker = new window.google.maps.Marker({
      position: hospitalLatLng,
      map: map,
      title: hospital.name,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: markerColor,
        fillOpacity: 1,
        strokeColor: 'white',
        strokeWeight: 0.5,
        scale: 10,
      },
    });

    const content = `
      <div>
        <strong>Hospital ID:</strong> ${hospital.id}<br>
        <strong>Hospital Name:</strong> ${hospital.name}<br>
        <strong>Wait Time:</strong> ${hospital.wait}<br>
        <strong>Address:</strong> ${hospital.address}<br>
        <strong>Capacity:</strong> ${hospital.capacity}<br>
        <button onclick="openDirections(${hospital.latitude}, ${hospital.longitude})">Directions</button>
        <button onclick="bookAppointment()">Book Appointment</button>
      </div>
    `;

    marker.addListener('click', () => {
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    });
  });
}

function loadGoogleMapsScript(callback) {
  if (window.google && window.google.maps) {
    callback();
  } else {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onload = callback;
    document.head.appendChild(script);
  }
}

const Map = ({ hospitals, location }) => {
  useEffect(() => {
    const createMap = async () => {
      try {
        await loadGoogleMapsScript(() => {
          initMap(hospitals, location);
        });
      } catch (error) {
        console.error('Error loading Google Maps API:', error);
      }
    };

    createMap();
  }, [hospitals, location]);

  window.openDirections = (lat, lng) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`);
  };

  window.bookAppointment = () => {
    window.location.href = '/appointment-booking';
  };

  return <div id="map" style={{ height: '440px', width: '100%' }} />;
};

export default Map;
