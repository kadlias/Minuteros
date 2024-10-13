// Función que evalúa la tabla proporcionada
function evaluarTabla(g1_12h1, g1_12h2, g2_12h1, g2_12h2) {
    const tabla = {
        'si_si_si_si': 'si',
        'si_si_no_si': 'si',
        'si_si_si_no': 'si',
        'si_si_no_no': 'no',
        'si_no_si_si': 'si',
        'si_no_si_no': 'no',
        'si_no_no_no': 'no',
        'no_si_si_si': 'si',
        'no_si_si_no': 'no',
        'no_si_no_no': 'no',
        'no_no_si_si': 'no',
        'no_no_si_no': 'no',
        'no_no_no_no': 'no',
        'si_no_si_no': 'no',
        'no_si_no_si': 'no',
        'no_no_no_si': 'no',
    };

    const clave = `${g1_12h1}_${g1_12h2}_${g2_12h1}_${g2_12h2}`;
    return tabla[clave] || 'Valor inválido';
}

// Función principal para la evaluación
document.getElementById('evaluar-btn').addEventListener('click', function () {
    const primeras_12h = document.getElementById('primeras_12h').value.toLowerCase();
    const segundas_12h = document.getElementById('segundas_12h').value.toLowerCase();

    // Condiciones de terminación inmediata
    if (['ss', 'h'].includes(primeras_12h) || ['ss', 'h'].includes(segundas_12h)) {
        alert('Baja inmediata. El programa ha finalizado.');
        return;
    }

    // Si se ingresa "rr" en las primeras 12 horas, no se activa la evaluación por bloques
    if (primeras_12h === 'rr') {
        alert('Condiciones no cumplidas. No se puede ingresar "rr" en las primeras 12 horas.');
        return;
    }

    // Evaluación para activación de bloques
    if (segundas_12h === 'rr' || 
        (primeras_12h === 'si' && segundas_12h === 'no') || 
        (primeras_12h === 'no' && segundas_12h === 'si')) {
        
        alert('Se ha activado la evaluación por bloques.');
        document.getElementById('bloques').classList.remove('hidden');
    } else {
        alert('Condiciones no cumplidas. Cerrando el programa.');
    }
});

// Función para evaluar los bloques
document.getElementById('evaluar-bloques-btn').addEventListener('click', function () {
    const guerra1_12h1 = document.getElementById('guerra1_12h1').value.toLowerCase();
    const guerra1_12h2 = document.getElementById('guerra1_12h2').value.toLowerCase();
    const guerra2_12h1 = document.getElementById('guerra2_12h1').value.toLowerCase();
    const guerra2_12h2 = document.getElementById('guerra2_12h2').value.toLowerCase();

    const resultado = evaluarTabla(guerra1_12h1, guerra1_12h2, guerra2_12h1, guerra2_12h2);
    alert(`Resultado final: ${resultado}`);
});

// Detectar la tecla Enter para la evaluación inicial
document.getElementById('primeras_12h').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('evaluar-btn').click();
    }
});

document.getElementById('segundas_12h').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('evaluar-btn').click();
    }
});

// Detectar la tecla Enter para la evaluación de bloques
document.getElementById('guerra1_12h1').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('evaluar-bloques-btn').click();
    }
});

document.getElementById('guerra1_12h2').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('evaluar-bloques-btn').click();
    }
});

document.getElementById('guerra2_12h1').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('evaluar-bloques-btn').click();
    }
});

document.getElementById('guerra2_12h2').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('evaluar-bloques-btn').click();
    }
});
