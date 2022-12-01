

//wheel
function shuffle(array){
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex],

        ];
    }
    return array;

}

//creo una funcion spin con DOM, la cual va a hacer que gire, encuentre un item ganador y alerte del item en cuestion

function spin() {
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";
    
    let item1 = shuffle([1890, 2250, 2610]);
    let item2 = shuffle([1850,2210,2570]);
    let item3 = shuffle([1770,2130,2490]);
    let item4 = shuffle([1810,2170,2530]);
    let item5 = shuffle([1750,2110,2470]);
    let item6 = shuffle([1630,1999,2350]);
    let item7 = shuffle([1570,1930,2290]);
    let item8 = shuffle([1570,1930,2290]);
    let item9 = shuffle([1570,1930,2290]);
    let item10 = shuffle([1570,1930,2290]);

    let results = shuffle([
        item1[0],
        item2[0],
        item3[0],
        item4[0],
        item5[0],
        item6[0],
        item7[0],
        item8[0],
        item9[0],
        item10[0],
    ]);

    if(item1.includes(results[0]))SelectedItem = "CandyMan";
    if(item2.includes(results[0]))SelectedItem = "Rosemarys baby";
    if(item3.includes(results[0]))SelectedItem = "Hereditary";
    if(item4.includes(results[0]))SelectedItem = "La cura siniestra";
    if(item5.includes(results[0]))SelectedItem = "El orfanato";
    if(item6.includes(results[0]))SelectedItem = "Deliver us from evil";
    if(item7.includes(results[0]))SelectedItem = "Halloween";
    if(item8.includes(results[0]))SelectedItem = "Ready or not";
    if(item9.includes(results[0]))SelectedItem = "The night house";
    if(item10.includes(results[0]))SelectedItem = "Geralds game";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");

    }, 5000);
    setTimeout(function(){
        applause.play();
    Swal.fire({
    title: 'Dulce o truco?',
    html: 'Tu pelicula para esta noche es ' + SelectedItem + ' | ' + '<a href="#"> Mas info </a>',
    imageUrl: '/assets/spooky.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    })
    }, 5500)

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";

    }, 6000);
}

sessionStorage.setItem("Pelicula",SelectedItem );