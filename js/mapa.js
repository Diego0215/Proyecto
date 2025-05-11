// Inicialización del mapa
function initMap() {
    const map = L.map('live-map').setView([5.8245, -73.0346], 13); // Coordenadas de Duitama
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Marcadores de ejemplo (reemplazar con datos reales)
    const vehicleMarkers = {
        "bus-22": L.marker([5.826, -73.032]).bindPopup("Bus #22 - Ruta 5"),
        "bus-18": L.marker([5.821, -73.038]).bindPopup("Bus #18 - Ruta 8")
    };

    Object.values(vehicleMarkers).forEach(marker => marker.addTo(map));
}

document.addEventListener('DOMContentLoaded', initMap);