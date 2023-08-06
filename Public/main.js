console.log("fuck you");

let btn = document.getElementById("btn");
let input,PokData;

async function PokeData() {
  btn.addEventListener("click", () => {
    console.log(input + " inside the button");
    Search();
    IndividualDetails(input);
  });
  

}

async function Search() {
  input = document.getElementById("input1").value;
  console.log(input + "inside the function");
  const pokeUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
  const pokemonJson = await pokeUrl.json();
  console.log(pokemonJson.name);
  console.log(pokeUrl);
  PokData = {
    name: input,
    id: 1
  }
  
  print();
  Data();
  return PokData;
  
}

async function cardDetails() {
  for (let i = 1; i <= 9; i++) {
    const pokeUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemonJson = await pokeUrl.json();
    console.log(pokemonJson);
    let ids = document.getElementById(i + "ind");
    let img = document.getElementById(i + "img");
    let nums = document.getElementsByClassName("pokName");
    let para = document.getElementById(i + "type");
    ids.innerHTML = pokemonJson.name;
    para.innerText = pokemonJson.types[0].type.name;
    let imgurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${i}.png`;
    // document.querySelector("#"+i+"img").src = imgurl
    img.src = imgurl;
    console.log(pokemonJson.id)
  }
  console.log("function works");
  
}

async function print(){
  console.log(PokData.name);
}

PokeData();
cardDetails();

//Second Half of the code

async function IndividualDetails(input) { 

  const pokeUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
  const pokemonJson = await pokeUrl.json();
  console.log(pokemonJson);
  let index = document.getElementById("nindex");
  let img = document.getElementById("nimage");
  let para = document.getElementById("Poktype");
  let Pokname = document.getElementById("nName");
  let id = pokemonJson.id;
  let height = document.getElementById("height");
  let weight = document.getElementById("weight");
  let location = document.getElementById("loc");
  const pokemonUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonJson2 = await pokemonUrl.json();
  const loc_src = "https://pokeapi.co/api/v2/pokemon/1/encounters"
  index.innerHTML = "Name: "+(pokemonJson.name).toUpperCase();
  Pokname.innerHTML = (pokemonJson.name).toUpperCase();
  let i;
  for(i=0;i<10;i++){
    let Pokmove = document.getElementById(i+"move")
    Pokmove.innerText = (pokemonJson.moves[i].move.name).toUpperCase();
  }
  
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
  para.innerText = (pokemonJson.types[0].type.name).toUpperCase() + " TYPE"
  height.innerText = ("HEIGHT: "+pokemonJson.height+ "m").toUpperCase();
  weight.innerText = ("WEIGHT: "+pokemonJson.weight +" lbs").toUpperCase();
  // console.log(pokemonJson.location_area_encounters.name)
  location.innerText = "BASE EXP: "+ (pokemonJson.base_experience)
  console.log(pokemonJson2.encoounter)
}



export function Data(){
    let value = input;
    return value;
}
