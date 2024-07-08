let titulo = document.getElementById("titulo");

let tituloPrincipal = "Frutas";

titulo.classList.add("text-2xl", "my-[20px]" ,"font-bold")

titulo.innerText = tituloPrincipal;

let encabezadoYPie = document.querySelectorAll(".encabezadoYPie");

encabezadoYPie.forEach((valor) => valor.classList.add("bg-orange-500"));

let pFooter = document.querySelector("footer p");

let nombreCompletoYCohort = "Mind Hub - Francisco Páez Lastra - Cohort 55";

pFooter.innerHTML = nombreCompletoYCohort;

let contenedor = document.createElement("div");

contenedor.setAttribute("id", "contenedor");

contenedor.classList.add("flex" , "flex-wrap" , "w-[80%]" , "gap-[10px]" )

let main = document.querySelector("main");

main.classList.add("flex", "flex-col"  , "items-center", "text-center")

main.appendChild(contenedor);

function card(nombre, foto, descripcion) {
  return `
            <img src="${foto}" alt="" class="img w-[100px] h-[100px] >
            <h3 class="text-[16px]">${nombre}</h3>
            <p class="text-[12px]">${descripcion}</p>
        `;
}

function crearCard(array) {
    for (let i = 0; i < array.length; i++) {
        let article = document.createElement("article");
        article.innerHTML = card(array[i].nombre, array[i].foto, array[i].descripcion);
        article.classList.add("w-[200px]", "grow" , "border-[1px]" , "border-black" ,"flex" , "flex-col" , "jsutify-center" , "items-center" , "gap-[20px]" ,"p-[20px]" ,"rounded-[10px]")
        contenedor.appendChild(article);
    }
}
crearCard(frutas)

let div = document.createElement("div");

div.id = "lista";

main.appendChild(div);

let tituloFruta = `<h3 class="font-bold">Fruta Dulce</h3>`

div.innerHTML = tituloFruta

div.classList.add("my-[20px]")



function crearUl(arrayFrutas){
    let ul = document.createElement('ul');
    for (let i = 0; i < arrayFrutas.length; i++) {
        let li = document.createElement('li');
        li.textContent = arrayFrutas[i].nombre
        ul.appendChild(li)
        
    }
    ul.classList.add("list-disc","mt-[10px]")
     div.appendChild(ul)
 }

 crearUl(frutas);



