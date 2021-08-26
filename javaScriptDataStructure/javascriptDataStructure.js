/**
 * Array Practice Problems
 */

//Declaring array
num = new Array();

//Input The 10 random Two digit Numbers to Array
for(i=0;i<10;i++){
    randNum = Math.floor(Math.random() * 90) + 10;
    console.log(i+" th num is : "+randNum);
    num[i]=randNum;
}
console.log("\nArray Of Number is : "+num);

// Sort The array
num.sort();
console.log("\nArray Of sorted Number is : "+num);

// MAX and MIN from an Array
console.log("Min num from a array : "+num[0]);
console.log("Max num from a array : "+num[num.length-1]);

//Array Operaions
let dogs = ["Lab","Beagle","Bull"];
console.log("dogs Array : "+dogs);
let cats = ["American","Bengal"]
console.log("cats Array : "+cats);
let animal = dogs.concat(cats);
console.log("Animal Array : "+animal);

sliceDogs = dogs.slice(0,2);
console.log("sliced dogs Array : "+sliceDogs);

dogs.push("Golden");
console.log("dogs Array after push : "+dogs);
dogs.pop();
console.log("dogs Array after pop : "+dogs);
