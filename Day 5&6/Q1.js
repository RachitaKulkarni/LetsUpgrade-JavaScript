// Create a array containing five objects with properties { name, age , city , salary }
let people = [
    {
        name : "John",
        age : 40,
        city : "Hyderabad",
        salary : "200000",
    },
    {
        name : "Anthony",
        age : 34,
        city : "Chennai",
        salary : "100000",
    },
    {
        name : "Paul",
        age : 18,
        city : "Delhi",
        salary : "2500",
    },
    {
        name : "Christopher",
        age : 65,
        city : "Bangalore",
        salary : "500000",
    },
    {
        name : "David",
        age : 25,
        city : "Mumbai",
        salary : "50000",
    },
];


function display(superarray){//edited to take parameter for search function.Else it directly used superheroes array

let tabledata = "";
let srno = 1;
console.log("function display is called");

superarray.forEach(function (person, index){ 

    let currentrow = `<tr>
    <td>${srno}</td>
    <td>${person.name}</td>
    <td>${person.age}</td>
    <td>${person.city}</td>
    <td>${person.salary}</td>
    <td><button onclick="deleteSuperhero(${index})">Delete</button></td>
    </tr>`; 
   
    tabledata = tabledata + currentrow; 
    srno++;
    //console.log(currentrow);
    console.log(tabledata);
});

    document.getElementsByClassName("tdata")[0].innerHTML= tabledata;
}

display(people); //simply to display existing 5 rows in table


function searchByName(){ 
    console.log("search function called");

    let searchValue=document.getElementsByClassName("search")[0].value; //whatever types in is stored in searchValue variable

    let newdata = people.filter(function (person){
       return (
            person.name.toUpperCase().indexOf(searchValue.toUpperCase())!= -1 ||
            person.city.toUpperCase().indexOf(searchValue.toUpperCase())!= -1 );    
    });

    display(newdata);
}

function deleteSuperhero(index){
    people.splice(index,1);
    display(people);
}

