var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.themealdb.com/api/json/v1/1/latest.php");
xhr.send();
xhr.onload = function () {
    result = xhr.response;
    resobject = JSON.parse(result);
    createTodayspecial(resobject)
}

function createTodayspecial(resobject) {

    for (var i = 0; i < resobject.meals.length - 1; i++) {

        var cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card col-lg-3 align-middle mx-lg-5 mb-3 bg-warning");
        var divElem = document.querySelector("#today")
        divElem.appendChild(cardDiv);

        var img = document.createElement("img");
        img.setAttribute("class", "card-img-top figure-img img-fluid");
        img.setAttribute("src", resobject.meals[i].strMealThumb);
        cardDiv.appendChild(img);

        var div = document.createElement("div");
        div.setAttribute("class", "card body btn-outline-warning");
        cardDiv.appendChild(div);

        var h2 = document.createElement("button");
        h2.setAttribute("class", "text-center btn btn-outline-dark btn-lg btn-block");
        h2.textContent = resobject.meals[i].strMeal;
        div.appendChild(h2);

    }
}

$("#today").hide();

$("#todays").click(function () {
    $("#today").show(1000);
    $("#img").hide();
    $("#Vegan").hide();
    $("#vegi").hide();
    $("#chick").hide();
    $("#seafood").hide();
    $("#pork").hide();
    $("#desserts").hide();
    $("#pasta").hide();
    $("#box2").hide();
});


var xhr1 = new XMLHttpRequest();
xhr1.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?f=v");
xhr1.send();
xhr1.onload = function () {
    result1 = xhr1.response;
    resobject1 = JSON.parse(result1);
    createvegan(resobject1)
}

function createvegan(resobject1) {

    var cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card col-lg-4 align-middle mx-lg-5 mb-3 bg-warning mb-3");
    var divElem = document.querySelector("#Vegan")
    divElem.appendChild(cardDiv);

    var img = document.createElement("img");
    img.setAttribute("class", "img-fluid p-4");
    img.setAttribute("src", resobject1.meals[0].strMealThumb);
    cardDiv.appendChild(img);

    var div = document.createElement("div");
    div.setAttribute("class", "card body btn-outline-warning");
    cardDiv.appendChild(div);

    var h2 = document.createElement("button");
    h2.setAttribute("class", "text-center btn btn-outline-dark btn-lg btn-block");
    h2.textContent = resobject1.meals[0].strMeal;
    div.appendChild(h2);

    var cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card col-lg-4 align-middle mx-lg-5 mb-3 bg-warning mb-3");
    var divElem = document.querySelector("#Vegan")
    divElem.appendChild(cardDiv);

    var img = document.createElement("img");
    img.setAttribute("class", "card-img-top img-fluid p-4");
    img.setAttribute("src", resobject1.meals[1].strMealThumb);
    cardDiv.appendChild(img)

    var div = document.createElement("div");
    div.setAttribute("class", "card body btn-outline-warning");
    cardDiv.appendChild(div);

    var h2 = document.createElement("button");
    h2.setAttribute("class", "text-center btn btn-outline-dark btn-lg btn-block");
    h2.textContent = resobject1.meals[1].strMeal;
    div.appendChild(h2);

}

$("#Vegan").hide();

$("#vegans").click(function () {
    $("#Vegan").show(1000);
    $("#img").hide();
    $("#today").hide();
    $("#vegi").hide();
    $("#chick").hide();
    $("#seafood").hide();
    $("#pork").hide();
    $("#desserts").hide();
    $("#pasta").hide();
    $("#box2").hide();
});


var xhr2 = new XMLHttpRequest();
xhr2.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?f=v");
xhr2.send();
xhr2.onload = function () {
    result2 = xhr2.response;
    resobject2 = JSON.parse(result2);
    createvegi(resobject2)
}

function createvegi(resobject2) {

    var cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card col-lg-4 align-middle mx-lg-5 mb-3 bg-warning mb-3");
    var divElem = document.querySelector("#vegi")
    divElem.appendChild(cardDiv);

    var img = document.createElement("img");
    img.setAttribute("class", "card-img-top img-fluid p-4");
    img.setAttribute("src", resobject2.meals[4].strMealThumb);
    cardDiv.appendChild(img);

    var div = document.createElement("div");
    div.setAttribute("class", "card body btn-outline-warning");
    cardDiv.appendChild(div);

    var h2 = document.createElement("button");
    h2.setAttribute("class", "text-center btn btn-outline-dark btn-lg btn-block");
    h2.textContent = resobject2.meals[4].strMeal;
    div.appendChild(h2);

    var cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card col-lg-4 align-middle mx-lg-5 mb-3 bg-warning mb-3");
    var divElem = document.querySelector("#vegi")
    divElem.appendChild(cardDiv);

    var img = document.createElement("img");
    img.setAttribute("class", "card-img-top img-fluid p-4");
    img.setAttribute("src", resobject2.meals[5].strMealThumb);
    cardDiv.appendChild(img)

    var div = document.createElement("div");
    div.setAttribute("class", "card body btn-outline-warning");
    cardDiv.appendChild(div);

    var h2 = document.createElement("button");
    h2.setAttribute("class", "text-center btn btn-outline-dark btn-lg btn-block");
    h2.textContent = resobject2.meals[5].strMeal;
    div.appendChild(h2);

}

$("#vegi").hide();

$("#vege").click(function () {
    $("#vegi").show(1000);
    $("#img").hide();
    $("#today").hide();
    $("#Vegan").hide();
    $("#chick").hide();
    $("#seafood").hide();
    $("#pork").hide();
    $("#desserts").hide();
    $("#pasta").hide();
    $("#box2").hide();
});


var xhr3 = new XMLHttpRequest();
xhr3.open("GET", "https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken");
xhr3.send();
xhr3.onload = function () {
    result3 = xhr3.response;
    resobject3 = JSON.parse(result3);
    createchicken(resobject3)
}

function createchicken(resobject3) {

    for (var i = 0; i < resobject3.meals.length; i++) {

        var cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card col-lg-3 align-middle mx-lg-5 mb-3 bg-warning mb-3");
        var divElem = document.querySelector("#chick")
        divElem.appendChild(cardDiv);

        var img = document.createElement("img");
        img.setAttribute("class", "card-img-top img-fluid p-4");
        img.setAttribute("src", resobject3.meals[i].strMealThumb);
        cardDiv.appendChild(img);

        var div = document.createElement("div");
        div.setAttribute("class", "card body btn-outline-warning");
        cardDiv.appendChild(div);

        var h2 = document.createElement("button");
        h2.setAttribute("class", "text-center btn btn-outline-dark btn-lg btn-block");
        h2.textContent = resobject3.meals[i].strMeal;
        div.appendChild(h2);

    }
}

$("#chick").hide();

$("#chicki").click(function () {
    $("#chick").show(1000);
    $("#img").hide();
    $("#today").hide();
    $("#Vegan").hide();
    $("#vegi").hide();
    $("#seafood").hide();
    $("#pork").hide();
    $("#desserts").hide();
    $("#pasta").hide();
    $("#box2").hide();
});

var xhr4 = new XMLHttpRequest();
xhr4.open("GET", "https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood");
xhr4.send();
xhr4.onload = function () {
    result4 = xhr4.response;
    resobject4 = JSON.parse(result4);
    createseafood(resobject4)
}

function createseafood(resobject4) {

    for (var i = 0; i < resobject4.meals.length; i++) {

        var cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card col-lg-3 align-middle mx-lg-5 mb-3 bg-warning mb-3");
        var divElem = document.querySelector("#seafood")
        divElem.appendChild(cardDiv);

        var img = document.createElement("img");
        img.setAttribute("class", "card-img-top img-fluid p-4");
        img.setAttribute("src", resobject4.meals[i].strMealThumb);
        cardDiv.appendChild(img);

        var div = document.createElement("div");
        div.setAttribute("class", "card body btn-outline-warning");
        cardDiv.appendChild(div);

        var h2 = document.createElement("button");
        h2.setAttribute("class", "text-center btn btn-outline-dark btn-lg btn-block");
        h2.textContent = resobject4.meals[i].strMeal;
        div.appendChild(h2);

    }
}

$("#seafood").hide();

$("#seafoodie").click(function () {
    $("#seafood").show(1000);
    $("#img").hide();
    $("#today").hide();
    $("#Vegan").hide();
    $("#vegi").hide();
    $("#chick").hide();
    $("#pork").hide();
    $("#desserts").hide();
    $("#pasta").hide();
    $("#box2").hide();
});

var xhr5 = new XMLHttpRequest();
xhr5.open("GET", "https://www.themealdb.com/api/json/v1/1/filter.php?c=pork");
xhr5.send();
xhr5.onload = function () {
    result5 = xhr5.response;
    resobject5 = JSON.parse(result5);
    createpork(resobject5)
}

function createpork(resobject5) {

    for (var i = 0; i < resobject5.meals.length; i++) {

        var cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card col-lg-3 align-middle mx-lg-5 mb-3 bg-warning mb-3");
        var divElem = document.querySelector("#pork")
        divElem.appendChild(cardDiv);

        var img = document.createElement("img");
        img.setAttribute("class", "card-img-top img-fluid p-4");
        img.setAttribute("src", resobject5.meals[i].strMealThumb);
        cardDiv.appendChild(img);

        var div = document.createElement("div");
        div.setAttribute("class", "card body btn-outline-warning");
        cardDiv.appendChild(div);

        var h2 = document.createElement("button");
        h2.setAttribute("class", "text-center btn btn-outline-dark btn-lg btn-block");
        h2.textContent = resobject5.meals[i].strMeal;
        div.appendChild(h2);

    }
}

$("#pork").hide();

$("#porki").click(function () {
    $("#pork").show(1000);
    $("#img").hide();
    $("#today").hide();
    $("#Vegan").hide();
    $("#vegi").hide();
    $("#chick").hide();
    $("#seafood").hide();
    $("#desserts").hide();
    $("#pasta").hide();
    $("#box2").hide();
});

var xhr6 = new XMLHttpRequest();
xhr6.open("GET", "https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert");
xhr6.send();
xhr6.onload = function () {
    result6 = xhr6.response;
    resobject6 = JSON.parse(result6);
    createdesserts(resobject6)
}

function createdesserts(resobject6) {

    for (var i = 0; i < resobject6.meals.length; i++) {

        var cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card col-lg-3 align-middle mx-lg-5 mb-3 bg-warning mb-3");
        var divElem = document.querySelector("#desserts")
        divElem.appendChild(cardDiv);

        var img = document.createElement("img");
        img.setAttribute("class", "card-img-top img-fluid p-4");
        img.setAttribute("src", resobject6.meals[i].strMealThumb);
        cardDiv.appendChild(img);

        var div = document.createElement("div");
        div.setAttribute("class", "card body btn-outline-warning");
        cardDiv.appendChild(div);

        var h2 = document.createElement("button");
        h2.setAttribute("class", "text-center btn btn-outline-dark btn-lg btn-block");
        h2.textContent = resobject6.meals[i].strMeal;
        div.appendChild(h2);

    }
}

$("#desserts").hide();

$("#desserti").click(function () {
    $("#desserts").show(1000);
    $("#img").hide();
    $("#today").hide();
    $("#Vegan").hide();
    $("#vegi").hide();
    $("#chick").hide();
    $("#seafood").hide();
    $("#pork").hide();
    $("#pasta").hide();
    $("#box2").hide();
});


var xhr7 = new XMLHttpRequest();
xhr7.open("GET", "https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta");
xhr7.send();
xhr7.onload = function () {
    result7 = xhr7.response;
    resobject7 = JSON.parse(result7);
    createpasta(resobject7)
}

function createpasta(resobject7) {

    for (var i = 0; i < resobject7.meals.length; i++) {

        var cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card col-lg-3 align-middle mx-lg-5 mb-3 bg-warning mb-3");
        var divElem = document.querySelector("#pasta")
        divElem.appendChild(cardDiv);

        var img = document.createElement("img");
        img.setAttribute("class", "card-img-top img-fluid p-4");
        img.setAttribute("src", resobject7.meals[i].strMealThumb);
        cardDiv.appendChild(img);

        var div = document.createElement("div");
        div.setAttribute("class", "card body btn-outline-warning");
        cardDiv.appendChild(div);

        var h2 = document.createElement("button");
        h2.setAttribute("class", "text-center btn btn-outline-dark btn-lg btn-block");
        h2.textContent = resobject7.meals[i].strMeal;
        div.appendChild(h2);

    }
}

$("#pasta").hide();

$("#pastas").click(function () {
    $("#pasta").show(1000);
    $("#img").hide();
    $("#today").hide();
    $("#Vegan").hide();
    $("#vegi").hide();
    $("#chick").hide();
    $("#seafood").hide();
    $("#pork").hide();
    $("#desserts").hide();
    $("#box2").hide();
});