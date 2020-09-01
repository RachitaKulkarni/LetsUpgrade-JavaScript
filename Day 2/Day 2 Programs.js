//Question 1 : Program to search for a particular character in a string
let data = "HelloWorld"; 
console.log(data.indexOf("W")); // Starting from 0, W is at position 5


//Question 2 : Program to convert minutes to seconds
let minutes = 60;
let seconds = minutes*60;
console.log(seconds); //3600 seconds


//Question 3 : Program to search for a element in an array of strings
let array1 = ["Apple","Mango","Banana","Grapes","Jackfruit"];
for(let i = 0; i<array1.length;i++){

    if(array1[i] == "Grapes"){
        console.log("Fruit is " + array1[i] + " at index " + array1.indexOf(array1[i]));
        //Output : Fruit is Grapes at index 3
    }
}
//OR
console.log(array1.indexOf("Grapes")); // 3


//Question 4 : Program to display only elements containing 'a' in them from a array
let array2 = ["Apple","Mango","Banana","Chikko","Jackfruit"];
for(let i = 0; i<array2.length;i++){
 if(array2[i].indexOf("a") != -1){
     console.log(array2[i]);
}} //Output : Mango Banana Jackfruit


//Question 5 : Print an array in reverse order
let revarray = ["a","b","c","d","e"];
for(let i = revarray.length -1; i>=0;i--){
    console.log(revarray[i]);
} //Output : e d c b a