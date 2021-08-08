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

console.log(
    '%c Заезд начался, ставки не принимаются!',
    'color: brown; font-size: 14px;',
);

const promises = horses.map(hors => run(hors));
promises.then(r => console.log(r)); 

function run(horse) {
    return new Promise((res) => {
        const time = getRandomTime(2000, 3500);

        setTimeout(() => {
            res({horse, time});
        }, time);
    })
};

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(
//     '%c Победитель ${1}, финишировал за ${1} времени',
//     'color: green; font-size: 14px;',
// );

// console.log(
//     '%c Заезд окончен, ставки принимаются!',
//     'color: blue; font-size: 14px;',
// );