document.addEventListener('DOMContentLoaded', function () {
  console.log("Uber Clone App Loaded");

  // Initialize Google Map
  function initMap() {
    const defaultLocation = { lat: 37.7749, lng: -122.4194 }; // Default to San Francisco

    const map = new google.maps.Map(document.getElementById("map"), {
      center: defaultLocation,
      zoom: 12,
    });

    const marker = new google.maps.Marker({
      position: defaultLocation,
      map: map,
      title: "Your Location",
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          map.setCenter(userLocation);
          marker.setPosition(userLocation);
        },
        () => {
          console.warn("Geolocation failed. Using default location.");
        }
      );
    } else {
      console.warn("Geolocation not supported.");
    }
  }

  function loadGoogleMaps() {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  // Attach event listeners to ride selection buttons
  document.querySelectorAll(".ride-btn").forEach((button) => {
    button.addEventListener("click", function () {
      alert(`You selected: ${this.innerText} ride.`);
    });
  });

  // Load the Google Map
  loadGoogleMaps();
});
