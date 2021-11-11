import './style.css';


const cardBlock = document.querySelector('.card-block')

let imgArr = [
    { src: '1.jpg', title: "Осень" }, { src: '2.jpg', title: "Пейзаж" }, { src: '3.jpg', title: "Дома" }, { src: '4.gif', title: 'Гифка' }
];
let soundArr = [
    { src: "1.mp3", title: "Восход" }, { src: "2.mp3", title: "Ручей" }, { src: "3.mp3", title: "Вечерние сверчки" }
]
let videoArr = [{ src: "1.mp4", title: "Never Gonna Give You Up" }, { src: "2.mp4", title: "Морской прибой" }]

function imgCardHandler(imgArr) {
    imgArr.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                    <img src="./images/${element.src}" class="card-image">
                    <p class="card-text">${element.title}</p>
        `;
        cardBlock.appendChild(card);

    });

};

function soundCardHandler(soundArr) {
    soundArr.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                    <audio controls src="./audio/${element.src}" class="card-sound"></audio>
                    <p class="card-text">${element.title}</p>
        `;
        cardBlock.appendChild(card);
    })
};

function videoHandler(videoArr) {
    videoArr.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                    <video controls src="./video/${element.src}" class="card-video"></video>
                    <p class="card-text">${element.title}</p>
        `;
        cardBlock.appendChild(card);
    })
};

imgCardHandler(imgArr);
soundCardHandler(soundArr);
videoHandler(videoArr);