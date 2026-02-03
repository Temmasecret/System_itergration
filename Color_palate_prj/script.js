const generate_button = document.getElementById("generate_button")
const no1 = document.getElementById("no1")
const no2 = document.getElementById("no2")
const no3 = document.getElementById("no3")
const no4 = document.getElementById("no4")
const no5 = document.getElementById("no5")
const no1_name = document.getElementById("no1_name")
const no2_name = document.getElementById("no2_name")
const no3_name = document.getElementById("no3_name")
const no4_name = document.getElementById("no4_name")
const no5_name = document.getElementById("no5_name")

// no1_name.textContent = "Hello";
// no2_name.textContent = "Hello";
// no3_name.textContent = "Hello";
// no4_name.textContent = "Hello";
// no5_name.textContent = "Hello";

var colors = [];

function Random_color(){
    var the_1 = Math.floor(Math.random()*0x1000000).toString(16);
    while (the_1 in colors) {
        the_1 = Math.floor(Math.random()*0x1000000).toString(16);
    }
    colors.push(the_1);
    return ("#"+the_1);
}

    var color1 = Random_color();
    var color2 = Random_color();
    var color3 = Random_color();
    var color4 = Random_color();
    var color5 = Random_color();
    no1.style.backgroundColor = color1;
    no2.style.backgroundColor = color2;
    no3.style.backgroundColor = color3;
    no4.style.backgroundColor = color4;
    no5.style.backgroundColor = color5;
    no1_name.textContent = color1;
    no2_name.textContent = color2;
    no3_name.textContent = color3;
    no4_name.textContent = color4;
    no5_name.textContent = color5;

function Click_button(){
    var color1 = Random_color();
    var color2 = Random_color();
    var color3 = Random_color();
    var color4 = Random_color();
    var color5 = Random_color();
    no1.style.backgroundColor = color1;
    no2.style.backgroundColor = color2;
    no3.style.backgroundColor = color3;
    no4.style.backgroundColor = color4;
    no5.style.backgroundColor = color5;
    no1_name.textContent = color1;
    no2_name.textContent = color2;
    no3_name.textContent = color3;
    no4_name.textContent = color4;
    no5_name.textContent = color5;
}


generate_button.addEventListener("click", Click_button);
