// var par= document.getElementsByTagName("p");
// const myarr= par;
const any=document.querySelectorAll("rule")
myarr[0].innerHTML="<h1>This is h1 </h1>"
var mydiv=document.getElementsByTagName("p");

console.log(mydiv);

var mydiv2=document.querySelectorAll("#mydiv>p");
// console.log(mydiv2);



for (let index = 0; index < mydiv2.length; index++) {
    // const element = array[index];
    mydiv2[index].onclick = function ()
    {
        alert(
          mydiv2[index].innerText
        );
    }
    
}
