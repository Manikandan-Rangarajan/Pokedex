import Search from "/main";

 const PokemonData = Search().PokData;

 console.log(PokemonData.name);

async function IndividualDetails() {
    // const pokeUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    // const pokemonJson = await pokeUrl.json();
    // console.log(pokemonJson);
    let index = document.getElementById("nindex");
    let img = document.getElementById("nimage");
    let para = document.getElementById("n-type");
    index.innerHTML = "Fuck you";
    para.innerText = "Lorem ipsum was a shit"
  }

IndividualDetails();