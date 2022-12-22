var plus_btns = document.querySelectorAll(".plus")
// console.log(plus_btns);

var minus_btns = document.querySelectorAll(".minus")
console.log(minus_btns);

var total = document.getElementById("total")

var prices = document.querySelectorAll(".price")

var like_btns = document.querySelectorAll(".like")

var delete_btns = document.querySelectorAll(".delete")


function sum ()
{
    var somme = 0;
    for (let i = 0; i < prices.length; i++) 
    {
        somme = somme + Number(prices[i].innerHTML)
        total.innerHTML=somme
     }
}


for (let i = 0; i < plus_btns.length; i++) 
{
    plus_btns[i].addEventListener("click", inc);
}

for (let i = 0; i < minus_btns.length; i++) {
    minus_btns[i].addEventListener("click", dec);
    
}

for (let i = 0; i < like_btns.length; i++) {
    like_btns[i].addEventListener("click", changeColor)
    
}

for (let i = 0; i < delete_btns.length; i++) {
    delete_btns[i].addEventListener("click", deleteRow)
    
}



function changeColor(e)
{
    var cible =e.target
    if(cible.style.color !="red")
    {
        cible.style.color = "red"
    }
    else
    {
        cible.style.color = "gray"
    }
}

function deleteRow(e)
{
    var cible =e.target
   var tr = cible.parentElement.parentElement.parentElement.parentElement
   var price = tr.querySelector(".price")
   price.innerHTML=0
   tr.remove() 
   sum()
}

function inc(e)
{
    var clicked_button=e.target ;
    // console.log(clicked_button);
    var div_container=clicked_button.parentElement;
    // console.log(div_container);
    var paragraph = div_container.querySelector("p");
    // console.log(paragraph);
    var value = Number(paragraph.innerHTML);
   // console.log(value);
    value++
    // console.log(value);
    paragraph.innerHTML = value
    // console.log(paragraph);
    var tr = div_container.parentElement.parentElement;
    // console.log(tr);
    var unit_price = tr.querySelector(".unitPrice");
    // console.log(unit_price);
    var up = Number(unit_price.innerHTML);
    // console.log(up);
    var price = tr.querySelector(".price")
    price.innerHTML= value*up ;
    sum ()
}

function dec(e)
{
   var clicked_button=e.target ;
//    console.log(clicked_button);
   var div_container=clicked_button.parentElement;
    // console.log(div_container);
    var paragraph = div_container.querySelector("p")
    // console.log(paragraph);
    var value = Number(paragraph.innerHTML);
    // console.log(value);
    if (value>0) 
    {
        value--
    }
   paragraph.innerHTML=value
//    console.log(paragraph);
var tr = div_container.parentElement.parentElement;
// console.log(tr);
var unit_price = tr.querySelector(".unitPrice");
// console.log(unit_price);
var up = Number(unit_price.innerHTML);
// console.log(up);
var price = tr.querySelector(".price")
price.innerHTML= value*up ;
sum ()
}

