const listText = document.querySelectorAll('.timer-text');

setInterval(() => {
    let hora = new Date();

    let horas = String(hora.getHours()).padStart(2, '0');
    let minutos = String(hora.getMinutes()).padStart(2, '0');
    let segundos = String(hora.getSeconds()).padStart(2, '0');

    let horario = [ horas, minutos, segundos ];
    listText.forEach((text, i) => {
        text.textContent = horario[i];
    });

}, 1000);