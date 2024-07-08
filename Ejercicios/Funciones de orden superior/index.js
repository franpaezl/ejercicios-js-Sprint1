//1
const printMessage = (message) => console.log(message);

//2
const createMultiplication = (number1, number2) => {
  let result = number1 * number2;
  return result;
};

//3

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let array2 = array.map(createMultiplication);

console.log(array2);

function diezCervezasConMasAlcohol(lista) {
  cervezasOrdenadas.sort((cerveza1, cerveza2) => cerveza2.abv - cerveza1.abv);
}

//4

function topDiesCrvezasConMasAvb(lista) {
  lista.sort((cerveza1, cerveza2) => cerveza2.abv - cerveza1.abv);

  let topDiez = lista.filter((numeroLista, top) => top < 10);

  return topDiez;
}

console.log(topDiesCrvezasConMasAvb(beers));

//5

function topDiesCrvezasConMenosIbu(lista) {
  lista.sort((cerveza1, cerveza2) => cerveza1.ibu - cerveza2.ibu);

  let topDiez = lista.filter((numeroLista, top) => top < 10);

  return topDiez;
}

console.log(topDiesCrvezasConMenosIbu(beers));

//6

function infoCerveza(lista, cerveza) {
  let cervezaBuscada = lista.find(
    (cervezaLista) => cervezaLista.name == cerveza
  );
  return cervezaBuscada;
}

console.log(infoCerveza(beers, "Berliner Weisse With Yuzu - B-Sides"));

//7

function buscarPorIbu(lista, ibu) {
  let numeroIbu = lista.find((cervezaLista) => cervezaLista.ibu == ibu);

  if (numeroIbu) {
    return numeroIbu;
  } else return `No existe ninguna cerveza con un IBU de ${ibu}`;
}

console.log(buscarPorIbu(beers, 35));
console.log(buscarPorIbu(beers, 100.55));

//8

function buscarPosicionCerveza(lista, nombre) {
  let indiceCerveza = lista.findIndex(
    (cervezaLista) => cervezaLista.name === nombre
  );

  if (indiceCerveza !== -1) {
    return indiceCerveza;
  } else return `${nombre} no existe`;
}

console.log(buscarPosicionCerveza(beers, "Buzz"));

//9

function cervezasConNivelDeAlcohol(lista, valueAlcohol) {
  let cervezaAvb = lista.filter(
    (cervezaLista) => cervezaLista.abv > valueAlcohol
  );

  let cervezaAvbIvu = cervezaAvb.map((cervezaLista) => {
    return {
      nombre: cervezaLista.name,
      abv: cervezaLista.abv,
      ibu: cervezaLista.ibu,
    };
  });
  return cervezaAvbIvu;
}

console.log(cervezasConNivelDeAlcohol(beers, 10));

//10
function cervezasOrdenadas(lista, propiedad, booleano) {
  let ordenadas = lista
    .filter((cervezaLista) => cervezaLista[propiedad])
    .toSorted((a, b) => {
      if (a[propiedad] < b[propiedad]) {
        return -1;
      } else if (a[propiedad] > b[propiedad]) {
        return 1;
      } else return 0;
    });

  if (booleano) {
    return ordenadas.slice(0, 10);
  }
  return ordenadas.reverse().slice(0, 10);
}
console.log(cervezasOrdenadas(beers, "abv", true));

console.log(cervezasOrdenadas(beers, "abv", false));

let gaga = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Carlos", edad: 20 },
];

//11

function crearTablaCerveza(lista, id) {
  let tabla = document.getElementById(id);
  
  tabla.classList.add("border" ,"border-black", "border-collapse")

  let thead = document.createElement("thead");

  let tbody = document.createElement("tbody");

  function appendTabla(elemento, elementoParraAppend) {
    elemento.appendChild(elementoParraAppend);
  }

  appendTabla(tabla, thead);
  appendTabla(tabla, tbody);

  let rellenoTabla = `<tr class="border border-black bg-slate-500">
<th class="border border-black p-[10px]">Nombre</th>
<th class="border border-black p-[10px]">ABV (%)</th>
<th class="border border-black p-[10px]">IBU</th>
</tr>`;

  thead.innerHTML = rellenoTabla;

  lista.forEach((cerveza) => {
    tbody.innerHTML += `<tr class="text-center">
            <td class="border border-black p-[10px]">${cerveza.name}</td>
            <td class="border border-black p-[10px]">${cerveza.abv}</td>
            <td class="border border-black p-[10px]">${cerveza.ibu}</td>
                    </tr>`
  }); 
}

crearTablaCerveza(beers, "tabla")