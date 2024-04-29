"use strict"



// function sumOfOddNums(arr){
//     let sum = 0;
//     for (const item of arr) {
//         if(item % 2 == 1){
//             sum+= item
//         } 
//     }
//     console.log(sum);
// }

// let nums =[1,2,3,4,6]
// sumOfOddNums(nums);



// function sumOfEvenNums(arr){
//     let sum = 0;
//     for (const item of arr) {
//         if(item % 2 == 0){
//             sum+= item
//         } 
//     }
//     console.log(sum);
// }

// let nums2= [12,3,4,5,6,7]
// console.log(sumOfEvenNums(nums2));



// function checkEvenNum(num) {
//     return num % 2 == 0;
// }


// function checkOddNum(num) {
//     return num % 2 == 1;
// }




// function sumOfNumsbyConditions(arr,callback){
//     let sum = 0;
//     for (const item of arr) {
//         if(callback(item)){
//             sum+= item
//         } 
//     }
//     console.log(sum);
// }


//  let nums= [12,3,4,5,6,7]
// //  sumOfNumsbyConditions(nums, checkOddNum);
// //  sumOfNumsbyConditions(nums, checkEvenNum);

// sumOfNumsbyConditions(nums, m => m % 2 ==0)
// sumOfNumsbyConditions(nums, m => m % 2 ==1)



// let nums= [12,3,4,5,6,7]



// let result = nums.filter(m => m > 5);


// let result = nums.find(m => m > 5);


// let result = nums.findIndex(m => m == 5);


// console.log(nums);


// console.log(result);



/////////////////////////////////////
//Class prototype typescript


// class Animal {
//     constructor(heigt, width) {
//         this.heigt = heigt;
//         this.width = width;
//     }
// }


// let animal = new Animal(100,200);
// console.log(animal.heigt);


// class Bird extends Animal{
//     constructor() {
//         super(100,200)      // c# base mentiqi
//         this.name = "Devequshu";
//     }

//     getName(t){
//         console.log("ttes")
//     }

// }


// let bird = new Bird();
// console.log(bird.name);
// bird.getName(100);






// let surname = new String();

// surname= "salam";

// console.log(surname);



// let isMarried = new Boolean();

// isMarried = true;

// console.log(isMarried);



//prototype

// class Test{
//     constructor(name){
//         this.name= name;
//     }
// }

// // console.log(test.name);


//  Test.prototype.surname = "Surname for test";

//  Test.prototype.getName= function(){
//     console.log("this is a test name")
//  }


//  let test = new Test("salam");

// console.log(test.surname);
//  test.getName();



// String.prototype.customContains = function(searchTeaxt){
//     return this.includes(searchTeaxt)
// }


// let name = "Reshad";

// let surname = "Aghayev";

// console.log(surname.customContains("h"));
// console.log(name.customContains("h"));
// console.log(name.customContains("c"));




//Date

// let date = new Date();

// console.log(date);


// let year = date.getFullYear();

// console.log(year)

// let month = date.getMonth();

// console.log(month);

// let result = `Month-${month + 1} - Year- ${year}`

// console.log(result);




//math

// let data = Math.pow(2,4);

// let datas = Math.sqrt(64);


// console.log(data);
// console.log(datas);






/////////////////////////////////
//DOM


// let elems = document.getElementsByTagName("h1")
 
// for (let i = 0; i < elems.length; i++) {
//         const element = elems[i];
//         console.log(element)
//     }


// let elemm = document.getElementsByClassName("test");

// console.log(elemm);



//important

// let elem = document.getElementById("products");
// console.log(elem);


// let elems = document.querySelectorAll("#products h1");


// for (let i = 0; i < elems.length; i++) {
//             const element = elems[i];
//             console.log(element)
//         }




        
// let elems = document.querySelectorAll("#products h1");
// elems[1].style.backgroundColor = "red";



// for (const item of elems) {
//     item.style.backgroundColor = "red";
// }




///////////////////////////////


let h1 = document.querySelector("h1")

// console.log(h1.innerText)

// console.log(h1.innerHTML)


// h1.innerHTML = "<span>Reshad bey</span>"

// h1.innerText = "<span>Reshad bey</span>"


// h1.style.color = "teal";

// h1.style.margin = "200px";


// h1.className = "active";

// h1.classList.add("active");

// console.log(h1.classList.contains("active"));



// h1.setAttribute("id","text");
// console.log(h1.getAttribute("id"));
// console.log(h1.hasAttribute("id"));



let button = document.querySelector(".add-product");

// button.addEventListener("click" , function(){
//     alert("Hello World")
// });


// button.addEventListener("mouseover" , function(){
//     alert("Hello World")
// });



// button.addEventListener("click" , function(){
//         this.style.backgroundColor = "Magenta"
// });



// button.addEventListener("click" , function(){
//     this.style.backgroundColor = "Magenta"

//     h1.style.backgroundColor = "green";
//     h1.style.color= "white";
//     // h1.innerText = "Salam Fatime xanim";
//     h1.style.width="200px";
//     let btnText = this.innerText;
//     this.innerText = h1.innerText;
//     h1.innerText = btnText;

// });




