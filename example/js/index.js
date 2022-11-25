const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
const pageOne = document.querySelector('#pageOne');
const pageTwo = document.querySelector('#pageTwo');
const buttons = document.querySelectorAll('button');

async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json();
    console.log(data);

    return data.key;
}

async function getPlanets() {
    const key = await getKey();
    const response = await fetch(`${BASE_URL}/bodies`, {
        headers: {
            'x-zocom': key
        }
    });
    const data = await response.json();
    console.log(data);
}

function showOrHide() {
    pageOne.classList.toggle('hide'); // Om CSS - klassen hide finns tas den bort och vice versa
    pageTwo.classList.toggle('hide'); // Om CSS - klassen hide finns tas den bort och vice versa
} 

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        showOrHide();
    });
})

getPlanets();

