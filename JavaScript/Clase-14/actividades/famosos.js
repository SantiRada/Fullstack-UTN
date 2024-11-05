

const famosos = [
    {
        "name": "Leonardo DiCaprio",
        "edad": 49,
    },
    {
        "name": "Tom Hanks",
        "edad": 67,
    },
    {
        "name": "Robert Downey Jr.",
        "edad": 57,
    },
    {
        "name": "Arnold Schwarzenegger",
        "edad": 75,
    }
];

let response;
let question;
let correct = 0;

for(let i=0;i < 3;i++){
    question = Math.floor(Math.random() * famosos.length);

    response = prompt(`¿Cuántos años tiene la celebridad ${famosos[question]['name']}?`);

    if(response != famosos[question]['edad']){
        if(response > famosos[question]['edad']) { alert(`${famosos[question]['name']} es más joven...`); }
        else { alert(`${famosos[question]['name']} es más grande...`); }
    }else{
        alert(`¡Exacto! ${famosos[question]['name']} tiene ${response} años.`);
        correct++;
    }

    if(i < 2){ alert("¡Siguiente Pregunta!"); }
}

if(correct == 1) { alert(`Has contestado ${correct} pregunta correctamente.`); }
else { alert(`Has contestado ${correct} preguntas correctamente.`); }
