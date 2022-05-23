var btn = document.getElementById("btn");


function key(){
    alert("Search function is not available now!");
}

function qwerty(){
    alert("This page will be acceptable in soon");
}

function change_btn_text(){
    btn.innerHTML = "To know more about us - connect with us";
}

function change_btn_text2(){
    btn.innerHTML = "Hover your mouse here";
}

function music() {
    document.getElementById('sound').play();
}

var string = "The best cosmetics are here!";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
var running = setTimeout(animate, 90);
})();

var string2 = "Cosmetic Queens is a Kazakh company in the cosmetics industry, which has a high position in the ranking among compatriots. It appeared relatively recently - in 2021. Today, it is actively developing and constantly increasing brand awareness. In the manufacture of products uses only natural herbal ingredients. No aggressive and harmful synthetic substances, dyes, flavors are used. All components are carefully selected for properties and compatibility, so that the final product is efficient and effective.";
var str2 = string2.split("");
var el2 = document.getElementById('str2');
(function animate() {
str2.length > 0 ? el2.innerHTML += str2.shift() : clearTimeout(running2);
var running2 = setTimeout(animate, 30);
})();
