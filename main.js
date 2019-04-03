$("#btn").click(function loadName() {
  // Create XHR OBJ

  let xhr = new XMLHttpRequest();
  // OPEN - type, url/file, async
  let url = "https://pokeapi.co/api/v2/pokemon/";

  // Waarde van wat gebruiker ingeeft in een variable steken en in xhr.open achter de url zetten (zie hieronder)
  let inputName = document.getElementById("inputName").value;

  // Linken naar API (url steekt in variable bovenaan code)
  xhr.open("GET", url + inputName, true);

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // converteer JSON into TEXT
      let MyResponse = JSON.parse(xhr.responseText);

      let moves = "";

      let pokeImage = MyResponse.sprites.front_default;
      let pokeName = MyResponse.name;
      let pokeID = MyResponse.id;
      let pokeMove = MyResponse.moves;

      document.getElementById("image").setAttribute("src", pokeImage);
      document.getElementById("name").innerHTML = pokeName;
      document.getElementById("pokeId").innerHTML = pokeID;
      document.getElementById("moves").innerHTML = pokeMove;

      for (let i = 0; i < pokeMove.length; i++) {
        if (i === 4) {
          break;
        }
        document.getElementById("moves").innerHTML = pokeMove[i].move.name;
      }
    }
  };
  // Send Request
  xhr.send();
});
