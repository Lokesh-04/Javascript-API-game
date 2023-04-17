let newHeroButton = document.getElementById('btn');
let searchButton = document.getElementById('Sbtn');
const BaseURL = "https://superheroapi.com/api.php/472086168432227";
let character_name = document.getElementById('SearchInput');

const getSearchSuperHero = (name) =>{
    fetch(`${BaseURL}/search/${name}`)
  .then(response => response.json())
  .then(info => {
    let data = info.results[0];
    getHeroinfo(data);
  })
}

const getRandomSuperHero = (id) => {
    fetch(`${BaseURL}/${id}`)
  .then(response => response.json())
  .then(data => {
    getHeroinfo(data);
  })
}

const randomHero = () => {
    const numberOfHeroes = 731
    return Math. floor(Math.random() * numberOfHeroes) + 1
}

newHeroButton.onclick = () => getRandomSuperHero(randomHero())
searchButton.onclick = () => getSearchSuperHero(character_name.value)

const getHeroinfo = (character) => {
  const nameElement = document.getElementById('char_name');
  nameElement.textContent = character.name;

  const ImageElement = document.getElementById('image');
  ImageElement.src = character.image.url

  const emojis = {
    intelligence: '🧠',
    strength: '💪', 
    speed: '⚡',
    durability: '🏋️',
    power: '📊',
    combat: '⚔️'
  }
  const stats = Object.keys(character.powerstats).map(stat => {
   return `<p>${emojis[stat]}${stat.toUpperCase()}:${character.powerstats[stat].toUpperCase()}</p>`
  })
  // console.log(stats.join(' '))
  const powerstatsElement = document.getElementById('powerstats');
  powerstatsElement.innerHTML = stats.join('')
}