"use strict";

// function toggleField(elementId) {
//     $("#" + elementId).removeClass("hidden");

    // let ele = window.document.getElementById(elementId);
    // ele.style.display = "block !important;";

// }

// document.getElementById("crust-choice")
//     .addEventListener('change', function(){
//         console.log(document.getElementById("pizza-size-container"));
//     });

$(document).ready(function($){
    let pizzaOrder = getOrder();
    populateForm(pizzaOrder);
    unhider(pizzaOrder);
    updater(pizzaOrder);
});

function createOrder() {
    return {
        crust: null,
        size: null,
        toppingsMeat: [],
        toppingsMisc: []
    };
}

function updater(pizzaOrder){
        $(".pizza-updater").on("change", function(e){
        let fieldName = $(this).attr('name');
        if(fieldName == 'crust-choice') {
            pizzaOrder.crust = $(this).val();
        }
        if(fieldName == 'pizza-size') {
            pizzaOrder.size = $(this).val();
        }
        // https://stackoverflow.com/questions/36325509/removing-from-array-values-of-checkboxes-in-jquery
        if(fieldName == 'toppingsMeat') {
            let checked = [];
            $("input:checkbox[name=toppingsMeat]:checked").each(function(){
                checked.push($(this).val());
            });
            pizzaOrder.toppingsMeat = checked;
        }
        if(fieldName == 'toppingsVeg') {
            let checked = [];
            $("input:checkbox[name=toppingsVeg]:checked").each(function(){
                checked.push($(this).val());
            });
            pizzaOrder.toppingsMisc = checked;
        }
        saveOrder(pizzaOrder);
        calcPrice(pizzaOrder);
    });
}

function unhider(pizzaOrder){
    $("#crust-choice").on("change", function(e){
        $("#pizza-size-container").removeClass("hidden");
    });

    $("#pizza-size").on("change", function(e){
        $(".toppings-container").removeClass("hidden")
    });
}
function saveOrder(pizzaOrder) {
    localStorage.pizza_order = JSON.stringify(pizzaOrder);
}

function getOrder() {
    return (localStorage['pizza_order'])
        ? JSON.parse(localStorage['pizza_order'])
        : createOrder();
}

function calcPrice(pizzaOrder) {
    let dataPrice = 0.00;
    dataPrice += pizzaOrder.toppingsMeat.length*2.00;
    dataPrice += pizzaOrder.toppingsMisc.length*1.00;
    $(".price").html('Total: $' + dataPrice);
}

function populateForm(pizzaOrder){
    if(localStorage.length != 0) {
        $("select[name=crust-choice]").val(pizzaOrder.crust);
        $("select[name=pizza-size]").val(pizzaOrder.size);
        $("input[name=toppingsMeat]").val(pizzaOrder.toppingsMeat);
        $("input[name=toppingsVeg]").val(pizzaOrder.toppingsMisc);
        $("#pizza-size-container").removeClass("hidden");
        $(".toppings-container").removeClass("hidden");
        calcPrice(pizzaOrder);
    }

}

// function sayHello() {
//     alert("Hello!");
// }
//
// sayHello();

// let sayHello = function(name) {
//     alert("hello " + name);
// };
//
// sayHello(sayHello);

// let sum = (a, b) => {return a + b;}


// let donnaAge = 23;
// let donnaName = "Donna";
// let favColor = "brown";
//
// let donna = {
//     age: 23,
//     name: "Donna",
//     favColor: "brown",
// };
//
// console.log(donna);
//
//
// let i;
// for (i = 0; i < 10; i++) {
//
//     console.log("i is : " + i);
// }
// console.log("Done iteration, i is: " + i);

//
// let obj1 = {};
// let obj2 = {};
// let obj3 = {};
// let obj4 = {};
// let obj5 = {};
//
// let myObjects = [
//     28,
//     13,
//     "hello",
//     'c',
//     12.3,
//     -18,
//     {
//         age: 23,
//         name: "Donna",
//         favColor: "brown"
//     }
// ];
//

// let donna = {
//     name: "Donna",
//     favSongGenre: 'jazz'
// };

// localStorage['donna'] = JSON.stringify(donna);
//
//
// let elly = JSON.parse(localStorage['donna']);
//
// elly.name = "Elly";
// console.log(elly);









