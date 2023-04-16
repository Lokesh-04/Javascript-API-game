let newHeroButton = document.getElementById('btn');
let searchButton = document.getElementById('Sbtn');
const BaseURL = "https://superheroapi.com/api.php/472086168432227";
let character_name = document.getElementById('SearchInput');


const getSearchSuperHero = (name) =>{

    fetch(`${BaseURL}/search/${name}`)
  .then(response => response.json())
  .then(info => {

    let data = info.results[0];

    const ImageElement = document.getElementById('image');
    ImageElement.src = data.image.url

    const containerElement = document.getElementById('head3');
    containerElement.innerText = data.name
    

  })

}
const getRandomSuperHero = (id) => {

    fetch(`${BaseURL}/${id}`)
  .then(response => response.json())
  .then(data => {
    // Do something with the data
    const nameElement = document.createElement('h2');
    nameElement.textContent = data.name;

    const ImageElement = document.getElementById('image');
    ImageElement.src = data.image.url

    const containerElement = document.getElementById('container');
    containerElement.appendChild(nameElement);

  })

}

const randomHero = () => {
    const numberOfHeroes = 731
    return Math. floor(Math.random() * numberOfHeroes) + 1
}

newHeroButton.onclick = () => getRandomSuperHero(randomHero())
searchButton.onclick = () => getSearchSuperHero(character_name.value)




