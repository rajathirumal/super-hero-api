$("#btnSearch").click(function() {
  let txtSearch = $("#txtSearch").val();
  const key = 829070330896340;
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  let url = `https://superheroapi.com/api/${key}/${txtSearch}`;
  getHero(proxyUrl + url);
});
function getHero(url) {
  console.log(url);
  $.get(url, function(hero) {
    display(hero);
  });
}
var allheros = [];
function display(hero) {
  allheros.push(hero);
  ShowInTable(hero);
}

var index = 0;
function ShowInTable(hero) {
  var table = document.getElementById("myTable").insertRow();
  table.innerHTML = `<td>${hero["id"]}</td><td>${hero["name"]}</td>
        <td>${hero.powerstats["intelligence"]}</td>
        <td>${hero.powerstats["strength"]}</td>
        <td>${hero.powerstats["speed"]}</td>
        <td>${hero.powerstats["durability"]}</td>
        <td>${hero.powerstats["power"]}</td>
        <td>${hero.powerstats["combat"]}</td>
        <td><button type="button" id="searchBtn"  onclick="BuildHero(${index++})">get more details</td>`;
}
function BuildHero(x) {
  var heroContainer = document.querySelector(".show-hero");
  var heroBuild = "";
  heroBuild = `<h3>${allheros[x].name}, ${allheros[x].biography["full-name"]}</h3>  
    <img src="${allheros[x].image["url"]} alt="$faild to load {allheros[x].name} image " width="200" height="200">`;
  console.log(allheros[x].image["url"]);

  heroBuild =
    heroBuild +
    Biography(allheros[x].biography) +
    Appearance(allheros[x].appearance);

  heroContainer.innerHTML = heroBuild;
}
function Biography(HeroBiography) {
  let divBiography = `<div class="biography-info">
  <h1>Biography</h1>
  <p>Place of Birth: ${HeroBiography["place-of-birth"]}</p>
  <p>Publisher: ${HeroBiography.publisher}</p>
  </div>`;
  return divBiography;
}

function Appearance(Heroappearance) {
  let divAppearance = `
      <div class="appearance-info">
        <h1>Appearance</h1>
        <p>Eye Color: ${Heroappearance["eye-color"]}</p>
        <p>Hair Color: ${Heroappearance["hair-color"]}</p>
        <p>Heigth: ${Heroappearance.height[1]}</p>
        <p>Race: ${Heroappearance.weight[1]}</p>
        <p>Race: ${Heroappearance.race}</p>
      </div>
      `;
  return divAppearance;
}
