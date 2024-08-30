// Datos de ejemplo
const experiencias = [
    { puesto: "Analista de datos", empresa: "Data Masters", periodo: "2020 - 2021", descripcion: "Analisis y desarrollo de soluciones desde los datos de distintas empresas." }];

const educacion = [
    { titulo: "Ingenieria de sistemas", institucion: "UNAD", año: "2023" },
];

// Función para añadir experiencias
function añadirExperiencias() {
    const listaExperiencia = document.getElementById('lista-experiencia');
    experiencias.forEach(exp => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${exp.puesto}</strong> en ${exp.empresa}<br>
                        ${exp.periodo}<br>
                        ${exp.descripcion}`;
        listaExperiencia.appendChild(li);
    });
}

// Función para añadir educación
function añadirEducacion() {
    const listaEducacion = document.getElementById('lista-educacion');
    educacion.forEach(edu => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${edu.titulo}</strong><br>
                        ${edu.institucion}, ${edu.año}`;
        listaEducacion.appendChild(li);
    });
}

