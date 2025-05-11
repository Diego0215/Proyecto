// Control del sidebar responsive
document.addEventListener('DOMContentLoaded', function() {
    // Toggle del sidebar
    document.querySelectorAll('.sidebar-collapse').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.sidebar').classList.toggle('active');
        });
    });

    // Activar tooltips de Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Función para cargar datos API
async function fetchTransportData(endpoint) {
    try {
        const response = await fetch(`/api/${endpoint}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}