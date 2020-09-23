sum = 0
count = 0
var i = 0
for (i = 0; i < 10; i++) {
    sum = sum + i;
    count = count+1;
    average = sum/count;
    //console.log(sum, count, average )
}
console.log("The sum of the numbers is " + sum + " while the average is " +  average)

//Boolean("a");



//Handling Default Values
function  mynameis(name){
    //you can do it like this 👇
    if (name === undefined) {
        name = "Emino";
    } 
    //or like this 👇
   // name = name ||"Emino"
    
    console.log("My name is " + name)
}
mynameis()

//Object creation (object literal)
var company = {
    name:"Nexbuy", 
    ceo:{
        name:"Philomema Obasi", 
        baseLocation:"Lagos Branch"
    }, 
    cmo: {
        Name:"Samuel Dike", 
    }, 
    brandAmbassadors:{
        lead1:"Chioma", 
        lead2:"Emino"
    }, 
    "Sales Executive":"Nze Shalom"
};
console.log(company);
console.log(company["Sales Executive"]);
console.log(company.brandAmbassadors.lead2)