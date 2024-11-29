let spaceTask = document.querySelector('.tags');
let spaceList = document.getElementById('board');
let spaceModal = document.getElementById('modal-task');
let spaceEdit = document.getElementById('modal-edit');
let spaceCreate = document.getElementById('modal-create');

let tasks = [
    {
        "name": "Research",
        "background": "#de81c1",
        "color": "#000",
    },
    {
        "name": "Design",
        "background": "#8cde81",
        "color": "#000",
    },
    {
        "name": "Development",
        "background": "#dea881",
        "color": "#000",
    },
];
let list = [
    {
        name: "Backlog",
        background: "#0b5618",
        color: "#fff",
        card: [0],
    },
    {
        name: "In Proccess",
        background: "#ea32d4",
        color: "#fff",
        card: [1],
    },
    {
        name: "Finalized",
        background: "#ffcd00",
        color: "#000",
        card: [],
    },
];
let cards = [
    {
        name: "Agregar cuestionario",
        description: "Lorem ipsum for more content...",
        list: 0,
        color: "#ff0000",
    },
    {
        name: "Espacio nulo",
        description: "Lorem ipsum for more content...",
        list: 1,
        color: "#ff0000",
    },
];

function createTags(){
    spaceTask.innerHTML = "";
    for(let task of tasks){
        const tag = document.createElement('li');
        tag.classList.add('item-tags');
        tag.textContent = task.name;
        tag.style.backgroundColor = task.background;
        tag.style.color = task.color;
        spaceTask.appendChild(tag);
    }
}

function createLists(){
    spaceList.innerHTML = "";
    for(let i = 0; i < list.length; i++){
        let item = document.createElement('div');
        item.classList.add('list');
        spaceList.appendChild(item);

        let title = document.createElement('h3');
        title.textContent = list[i].name;
        title.style.background = list[i].background;
        title.style.color = list[i].color;
        item.appendChild(title);

        let icon = document.createElement('i');
        icon.classList.add('fas');
        icon.classList.add('fa-plus');
        icon.style.color = list[i].color;
        title.appendChild(icon);

        let content = document.createElement('div');
        content.classList.add('content');
        item.appendChild(content);

        if(list[i].card.length == 0){
            let button = document.createElement('a');
            button.classList.add('create-task');
            button.textContent = "Crear tarea"
            button.addEventListener('click', () => openCreator())
            content.appendChild(button);

            let icon = document.createElement('i');
            icon.classList.add('fas');
            icon.classList.add('fa-plus');
            button.appendChild(icon);
        }else{
            for(let j = 0; j < list[i].card.length; j++){
                let card = document.createElement('p');
                card.classList.add('card');
                card.textContent = cards[list[i].card[j]].name;
                card.addEventListener('click', () => openTask(list[i].card[j]));
                content.appendChild(card);

                let icon = document.createElement('i');
                icon.classList.add('fas');
                icon.classList.add('fa-pizza-slice');
                card.appendChild(icon);
            }
        }
    }
}

function openTask(num){
    document.querySelector('.name-card').textContent = cards[num].name;
    document.querySelector('.name-list').textContent = list[cards[num].list].name;
    document.querySelector('.description-card').textContent = cards[num].description;
    document.querySelector('.color-card').style.background = cards[num].color;
    document.querySelector('.icon-edit').setAttribute('data-id', num);

    spaceModal.style.display = "flex";
}
function closeTask() { spaceModal.style.display = "none"; }

function editTask(){
    const id = document.querySelector('.icon-edit').getAttribute('data-id');

    document.querySelector('.input-title').value = cards[id].name;
    document.querySelector('.description-card').value = cards[id].description;

    spaceEdit.style.display = "flex";
}
function closeEdit() { spaceEdit.style.display = "none"; }

function createTask(){

}

function openCreator() { spaceCreate.style.display = "flex"; }

function closeCreator() { spaceCreate.style.display = "none"; }

createTags();
createLists();