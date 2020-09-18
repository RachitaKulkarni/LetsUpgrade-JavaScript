//start with creating an blank array object for Bus management system
window.onload = function(){
    let buses = [];

    if(localStorage.getItem("buses") == null){
        let stringbuses = JSON.stringify(buses);
        localStorage.setItem("buses",stringbuses);
    }
};


function display(superarray){

let tabledata = "";
let buses=JSON.parse(localStorage.getItem("buses"));
let srno = 1;
console.log("function display called");

buses.forEach(function (bus){ 

    let currentrow = `<tr>
    <td>${srno}</td>
    <td>${bus.name}</td>
    <td>${bus.source}</td>
    <td>${bus.destination}</td>
    <td>${bus.number}</td>
    <td>${bus.passengercapacity}</td>
    </tr>`; 
    
    tabledata = tabledata + currentrow; 
    srno++;
    //console.log(currentrow);
    console.log(tabledata);
});
    document.getElementsByClassName("tdata")[0].innerHTML= tabledata;
}


function addBus(e){
    e.preventDefault();

    let bus = {}; // Blank array object
    let names=document.getElementById("name").value;
    let sources=document.getElementById("source").value;
    let destinations=document.getElementById("destination").value;
    let numbers=document.getElementById("number").value;
    let passengercapacitys=document.getElementById("passengercapacity").value;

    bus.name=names;
    bus.source=sources;
    bus.destination=destinations;
    bus.number=numbers;
    bus.passengercapacity=Number(passengercapacitys);

    //buses.push(bus);
    let buses = JSON.parse(localStorage.getItem("buses"));
    console.log("buses");
    buses.push(bus);
    localStorage.setItem("buses",JSON.stringify(buses));

    display(buses);

    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("number").value = "";
    document.getElementById("passengercapacity").value = "";
}

function searchBySource(){ 

    console.log("typing");
    let searchValue=document.getElementById("search").value; 
    console.log(searchValue); 
    let newdata = buses.filter(function (bus){
       return (
            bus.source.toUpperCase().indexOf(searchValue.toUpperCase())!= -1 ||
            bus.destination.toUpperCase().indexOf(searchValue.toUpperCase())!= -1);
    });
    console.log(newdata);
    display(newdata);
}







