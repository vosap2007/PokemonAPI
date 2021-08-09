const pokemonEl = document.querySelector('.js-pokemon-profil');

// fetch('https://pokeapi.co/api/v2/pokemon/1')
// .then(r => r.json())
// .then(r => {
//         const imgPokemon = r.sprites.front_shiny;
//         const namePokemon = r.name;

//         pokemonEl.insertAdjacentHTML('beforeend', `<img src = ${imgPokemon}></img> <p>${namePokemon}</p>`)
//     })

// const puch = 'https://pokeapi.co/api/v2/pokemon/1';

//     function onGetPokemon(puch) {
//       return  fetch(puch)
//                .then(r => r.json())
//     };

//     onGetPokemon(puch)
//     .then(onFetchSuccess)
//     .catch(onFefchError);

//     function onFetchSuccess(r) {
//         const imgPokemon = r.sprites.front_shiny;
//         const namePokemon = r.name;

//         pokemonEl.insertAdjacentHTML('beforeend', `<img src = ${imgPokemon}></img> <p>${namePokemon}</p>`)
//     };

//     function onFefchError(err) {
//         console.log(err)
//     }

// const makePromise = () => {
//    return new Promise((resolve, reject) => {
//         resolve('Привет, это resolve');
//     });
// };

// makePromise().then(r => console.log(r))

const horses = [
    'Secretariat',
    'Eclipse',
    'West Australia',
    'Fluing Fox',
    'Sebascuit',
];

const buttonRaceEl =document.querySelector('.js-button-race');
const winnerEl =document.querySelector('.js-winner');
const progressEl =document.querySelector('.js-progress');
const resultTableEl =document.querySelector('.js-result-table > tbody');
let num = 0;

buttonRaceEl.addEventListener('click', () => {
    winnerEl.textContent ='';
    progressEl.textContent = 'Заезд начался, ставки не принимаются!';

    const promises = horses.map(hors => run(hors));
    
    num += 1;

   Promise.race(promises).then(({horse, time}) => {
            winnerEl.textContent = `Победитель ${horse}, финишировал за ${time} времени`;
            apdateTableWinner({horse, time, num});
    });

   Promise.all(promises).then(r => 
    progressEl.textContent = 'Заезд окончен, ставки принимаются!');
});

   function run(horse) {
    return new Promise((res) => {
        const time = getRandomTime(2000, 3500);

        setTimeout(() => {
            res({horse, time});
        }, time);
    })
};

function apdateTableWinner({horse, time, num}) {
    const tr = `<tr><td>${num}</td></tr><tr><td>${horse}</td></tr><tr><td>${time}</td></tr>`;
    resultTableEl.insertAdjacentHTML('beforeend', tr);
}

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};