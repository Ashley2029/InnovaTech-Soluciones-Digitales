// Esperar a que todo el árbol HTML esté listo en el navegador
document.addEventListener('DOMContentLoaded', () => {
    
    const surveyForm = document.getElementById('marketSurvey');
    const resultBox = document.getElementById('surveyResult');
    const resultText = document.getElementById('resultText');

    // Escuchar el evento de envío del formulario
    surveyForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue por defecto

        // Capturar los valores elegidos por el usuario en la encuesta
        const formData = new FormData(surveyForm);
        const tieneWeb = formData.get('q1');
        const fuenteClientes = formData.get('q2');
        const dispuestoInvertir = formData.get('q3');
        const obstaculo = formData.get('q4');

        // Lógica lógica/empresarial de diagnóstico algorítmico
        let diagnostico = "";

        if (tieneWeb === 'no' && dispuestoInvertir === 'si') {
            diagnostico = "¡Alerta de Alta Oportunidad! Tu negocio se encuentra desprotegido en internet frente a la competencia directa. Al no poseer una infraestructura web propia, estás perdiendo el flujo constante de clientes locales que buscan tus servicios en Google. El obstáculo de '" + 
            (obstaculo === 'tecnico' ? "Falta de conocimiento técnico" : "Precios del mercado elevados") + "' lo resolvemos en InnovaTech encargándonos de todo el despliegue técnico a precios accesibles.";
        } else if (tieneWeb === 'no' && dispuestoInvertir === 'quizas') {
            diagnostico = "Oportunidad de Crecimiento Gradual. Tu negocio depende mucho de " + 
            (fuenteClientes === 'redes' ? "Redes Sociales" : "Recomendaciones boca a boca") + ", lo cual es un canal inestable a largo plazo. Una Landing Page económica te ayudaría a centralizar la información de tus productos y automatizar pedidos sin perder tiempo.";
        } else if (tieneWeb === 'si') {
            diagnostico = "Diagnóstico de Optimización: ¡Excelente por ya tener una web! Sin embargo, si la infraestructura actual sufre de cargas lentas o no está optimizada correctamente para celulares, tus ventas caerán. Te sugerimos una auditoría gratuita de UI/UX y base de datos con nosotros.";
        } else {
            diagnostico = "Diagnóstico Analítico: Todo negocio comercial requiere visibilidad hoy en día. Aunque consideres que no es prioritario, la automatización a través de un sitio web reduce las cargas de trabajo manuales y optimiza tus finanzas operativas a mediano plazo.";
        }

        // Modificar dinámicamente el DOM para mostrar el resultado en la caja oculta
        resultText.innerText = diagnostico;
        resultBox.classList.remove('hidden');

        // Hacer un scroll suave automático hacia la caja de diagnóstico para una mejor UX
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});
