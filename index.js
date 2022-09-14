let div = document.createElement("div");
div.style.textAlign="center";
div.style.backgroundColor="yellow";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");
let deaths=document.createElement("div");
deaths.setAttribute("id","deaths");
let recovered=document.createElement("div");
recovered.setAttribute("id","recovered");

div.append(input,button,active,deaths,recovered);
document.body.append(div);
 
async function foo() {
    let countryname=document.getElementById("country").value;
    console.log(countryname);
    let url=`https://api.covid19api.com/dayone/country/${countryname}`;
    let res = await fetch(url);
    let res1 = await res.json();
    console.log(res1);
    let index=res1.length-1;
    console.log(res1[index].Active);
    console.log(res1[index].Deaths);
    console.log(res1[index].Recovered);

    
    active.innerHTML=`total active cases:${res1[index].Active}`;
    deaths.innerHTML=`total active cases:${res1[index].Deaths}`;
    recovered.innerHTML=`total active cases:${res1[index].Recovered}`;
}