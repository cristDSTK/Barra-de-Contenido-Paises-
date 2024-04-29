
// INFORMACION DE LOS PAISES //

const paises = {
    chile: {
        nombre : "chile", 
        html: `
        <h1>Chile</h1>
        <p>
        Chile es un país largo y angosto que se 
        extiende por el borde occidental de Sudamérica, con 
        más de 6,000 km de costa en el océano Pacífico. Santiago,
        su capital, se ubica en un valle rodeado de los Andes y la 
        cordillera de la Costa. En la Plaza de Armas de la ciudad, 
        bordeada de palmeras, se encuentra la catedral neoclásica y
        el Museo de Historia Nacional. El enorme Parque Metropolitano 
        cuenta con piscinas, un jardín botánico y un zoológico. 
        </p>
        <img src="https://storage.googleapis.com/chile-travel-newsite-static-content/2021/08/Santiago-covid-2.jpg">
        `
    }, 
    argentina: {
        nombre:argentina,
        html: `
        <h1>Argentina</h1>
        <p>
        Argentina es un país sudamericano de gran envergadura 
        con un terreno que incluye las montañas de los Andes, 
        lagos glaciales y praderas en las Pampas, la tierra 
        tradicional de pastoreo de su famoso ganado. El país es 
        conocido por el baile y la música del tango. Su gran capital 
        cosmopolita, Buenos Aires, se centra en la Plaza de Mayo, 
        rodeada por imponentes edificios del siglo XIX, como la Casa 
        Rosada, el icónico palacio presidencial. 
        </p>
        <img src="https://www.cepal.org/sites/default/files/styles/1920x1080/public/regionaloffice/images/buenos_aires.jpg?itok=6zbx-OVO">
        `
    }, 
    colombia: {
        nombre: "colombia", 
        html: `
        <h1>colombia</h1>
        <p>
        Colombia es un país del extremo norte de Sudamérica. 
        Su paisaje cuenta con bosques tropicales, las montañas 
        de los Andes y varias plantaciones de café. En Bogotá, su 
        capital a gran altura, el distrito Zona Rosa es famoso por 
        sus restaurantes y tiendas. Cartagena, en la costa del Caribe, 
        tiene una Ciudad Antigua colonial amurallada, un castillo del 
        siglo XVI y arrecifes de coral cercanos. 
        </p>
        <img src="https://content.r9cdn.net/rimg/dimg/16/60/a2791cb8-city-26923-164c90b0ab4.jpg?crop=true&width=1366&height=768&xhint=2659&yhint=2675">
    `
    }, 
    bolivia: {
        nombre: "bolivia", 
        html: `
        <h1>bolivia</h1>
        <p>
        Bolivia es un país del centro de Sudamérica, con un terreno
        variado desde los Andes, el Desierto de Atacama y el bosque
        pluvial en la cuenca del Amazonas. A más de 3,500 m de altura,
        su capital administrativa, La Paz, se ubica en el Altiplano 
        de los Andes con el monte nevado Illimani de fondo. Cerca se 
        encuentra el cristalino lago Titicaca, el más grande del 
        continente, que se extiende por la frontera con Perú. 
        </p>
        <img src="https://content.r9cdn.net/rimg/dimg/bc/c4/40691bb8-city-13346-16d3f0364a4.jpg?crop=true&width=1366&height=768&xhint=2771&yhint=1944">
    `
    }, 
    uruguay: {
        nombre: "uruguay",
        html:  `
        <h1>uruguay</h1>
        <p>
        Uruguay es un país de Sudamérica conocido por su interior verde 
        y costa bordeada de playas. La capital, Montevideo, se ubica en 
        torno a la plaza Independencia, donde alguna vez hubo una ciudadela 
        española. Esta lleva a la Ciudad Vieja, con edificios art deco, 
        casas coloniales y el Mercado del Puerto con muchos restaurantes 
        de carnes. La Rambla es un paseo costero con puestos de pescados, 
        muelles y parques. 
        </p>
        <img src="https://content.r9cdn.net/rimg/dimg/14/25/4e10637c-city-13850-16916acf1b1.jpg?crop=true&width=1020&height=498">
    `
    }
}


// DOM //

const divDescription = document.querySelector(".card__description");
const btnPaises = document.querySelectorAll(".pais");


// FUNCION //

btnPaises.forEach(btn => {
    btn.addEventListener("click", (event)=>{
        if(event.target.innerText === "CHILE"){
            divDescription.innerHTML = paises.chile.html;
        } else if (event.target.innerText === "ARGENTINA"){
            divDescription.innerHTML = paises.argentina.html;
        } else if (event.target.innerText === "COLOMBIA"){
            divDescription.innerHTML = paises.colombia.html;
        } else if (event.target.innerText === "BOLIVIA"){
            divDescription.innerHTML = paises.bolivia.html;
        } else if (event.target.innerText === "URUGUAY"){
            divDescription.innerHTML = paises.uruguay.html;
        }
    });
})














