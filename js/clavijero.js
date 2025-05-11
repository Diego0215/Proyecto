// Datos de ejemplo (reemplazar con API real)
const sampleSchedule = [
    { ruta: "Ruta 5", vehiculo: "Bus #22", salida: "08:00", llegada: "08:45", estado: "Programado" },
    { ruta: "Ruta 8", vehiculo: "Bus #18", salida: "08:15", llegada: "09:00", estado: "En ruta" }
];

function loadSchedule() {
    const table = document.getElementById('tablaClavijero');
    const tbody = table.querySelector('tbody');
    
    tbody.innerHTML = sampleSchedule.map(item => `
        <tr>
            <td>${item.ruta}</td>
            <td>${item.vehiculo}</td>
            <td>${item.salida}</td>
            <td>${item.llegada}</td>
            <td><span class="badge ${getStatusBadge(item.estado)}">${item.estado}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary">Editar</button>
            </td>
        </tr>
    `).join('');
}

function getStatusBadge(status) {
    const statusClasses = {
        "Programado": "bg-secondary",
        "En ruta": "bg-primary",
        "Retrasado": "bg-warning",
        "Completado": "bg-success"
    };
    return statusClasses[status] || "bg-light text-dark";
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadSchedule();
    
    // Configuración de DataTable
    $('#tablaClavijero').DataTable({
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json'
        }
    });
});