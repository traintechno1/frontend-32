// console.log("Good morning!");

// var, let, const

// var a = 100; // (var a)variable declaration (a = 100) assignment

// a = 200; // assignment
// console.log(a);
// console.log(typeof a);

// a = "Rohan";
// console.log(a);
// console.log(typeof a);

// a = true;
// console.log(a);
// console.log(typeof a);

// console.log(a);


// var b = 300;

// var c = a + b;
// // 100 = a + b; // invalid left hand side
// console.log("Addition: " + c);

// c = a - b;
// console.log("Substraction: " + c);

// c = a * b;
// console.log("Multiplication: " + c);

// c = a / b;
// console.log("Division: " + c);

// c = 35 % 3;
// console.log("Division: " + c);

// c = b > a;
// console.log("Greater than: " + c);

// c = 100 >= 100;
// console.log("Greater than equal to : " + c);

// c = a < b;
// console.log("Less than: " + c);

// c = 100 <= 100;
// console.log("Less than equal to : " + c);

// c = a == b;
// console.log("Equal to : " + c);

// c = a != b;
// console.log("Not equal to : " + c);

// console.log("-----Logical AND-------");
// console.log("true && true : ", true && true);
// console.log("false && true :", false && true);
// console.log("true && false", true && false);
// console.log("false && false", false && false);


// console.log("-----Logical OR-------");
// console.log("true || true : ", true || true);
// console.log("false || true :", false || true);
// console.log("true || false", true || false);
// console.log("false || false", false || false);

// console.log("-----Logical NOT-------");

// console.log("!true : ", !true);
// console.log("!false : ", !false);

// console.log(a > b ? "A is greater" :  "B is greater");

// c = ++a;
// console.log("a :" + a); // 101
// console.log("c : "+ c); // 101

// c = a++;
// console.log("a :" + a); // 101
// console.log("c : "+ c); // 100

// c = --a;
// console.log("a :" + a); // 99
// console.log("c : "+ c); // 99

// c = a--;
// console.log("a :" + a); // 99
// console.log("c : "+ c); // 100


// const age = 22;
// const nationality = "Indian";

// if(age > 18 && nationality == "Indian"){
//     console.log("User is eligible to apply for this job role");
// }else{
//     console.log("User is not allowed for the Job")
// }


const grade = "A";

// if(grade == "A"){
//     console.log("Salary package: 7.5LPA");
// }else if(grade == "B"){
//     console.log("Salary Package: 5.5LPA");
// }else if(grade == "C"){
//     console.log("Salary Package: 4LPA");   
// }else{
//     console.log("Job offer rejected!");
// }


// switch(grade){
//     case "A": 
//         console.log("Salary package: 7.5LPA");
//     break;
//     case "B": 
//         console.log("Salary package: 5.5LPA");
//     break;
//     case "C": 
//         console.log("Salary package: 4LPA");
//     break;
//     default:
//         console.log("Job offer rejected!");
//     break
// }


// const gender = "T";

// if(gender == "M"){
//     if(age> 21){
//         console.log("Male Allowed to marry")
//     }else{
//         console.log("Male Not legally allowed to marry")
//     }
// }else if(gender == "F"){
//     if(age> 18){
//         console.log("Female Allowed to marry")
//     }else{
//         console.log("Female Not legally allowed to marry")
//     }
// }else{
//     console.log("Invalid Gender data");
// }


// for(let i = 10; i >=1; i--){
//     console.log(i * 20);
// }

// console.log("-----------------------------");

// let i = 1;
// while(i <=10){
    //     console.log(i * 15);
    //     i++;
    // }
    
// let i = 11;
// do{
//     console.log(i * 30);
//     i++
// }while(i<=10);



// "Rohan", true, ["Karan", "Akash"]
// let arr = [1,3,5,8,7,9,20];

// const evenNumbers = arr.filter((e)=> {return e > 2});
// console.log(evenNumbers);
// console.log(arr);


// const added =  arr.map(e => e + 10);
// console.log(added);
// console.log(arr);

// console.log(arr);
// console.log(arr.reduce((acc, e)=> acc / e , 1));


// arr.push(99);

// arr.forEach((v)=>{
//     console.log(v)
// })

// let arr2 = arr.concat([100,200,300]);
// console.log(arr);
// console.log(arr2);

// console.log(arr.every(e=> e % 2 == 1))

// console.log(arr.fill(100, 0, 2));

// console.log(arr.findIndex(e => e == 9));

// console.log(arr.flat(Infinity));

// console.log(arr.includes(5));

// console.log(arr.indexOf(5));

// console.log(arr.pop());
// console.log(arr.flat(2).join("*-*"));

// console.log(arr.reverse());
// console.log(arr.slice(0, 3));
// console.log(arr.splice(2, 2));
// console.log(arr);

// console.log(arr.length);

// function printMessage(){
//     console.log("Printing message through function!");
// }

// printMessage();
// printMessage();
// printMessage();
// printMessage();
// printMessage();

// let degree = "C";
// let score = 68;
// let field = "IT";
// let interview = "clear";

// function shouldHire(degree,score,field,interview){
//     if(degree == "C" && score > 60 && field == "IT" && interview == "clear"){
//         return true;
//     }else{
//         return false
//     }
// }

// console.log(shouldHire("C", 78, "IT", "clear"));
// console.log(shouldHire("C", 55, "IT", "clear"))
// console.log(shouldHire("N", 80, "IT", "clear"))


// const add = (value1, value2)=>{
//     console.log(value1 + value2);
// }

// add(100, 400);


const person = [
    {
        first_name: "Rohit",
        "last_name": "Satpute",
        email: "rohit.s@gmail.com",
        mobile: 9173612212,
        gender: "Male",
        address: {
            line1: "Near ABC school",
            line2: "Commonwealth society",
            city: "Pune",
            state: "MH",
            country: "India",
            pin: 411021
        }
    },
    {
        first_name: "Rohit",
        "last_name": "Satpute",
        email: "rohit.s@gmail.com",
        mobile: 9173612212,
        gender: "Male",
        address: {
            line1: "Near ABC school",
            line2: "Commonwealth society",
            city: "Pune",
            state: "MH",
            country: "India",
            pin: 411021
        }
    },
    {
        first_name: "Rohit",
        "last_name": "Satpute",
        email: "rohit.s@gmail.com",
        mobile: 9173612212,
        gender: "Male",
        address: {
            line1: "Near ABC school",
            line2: "Commonwealth society",
            city: "Pune",
            state: "MH",
            country: "India",
            pin: 411021
        }
    }
]


console.log(person)

person[0].mobile = 8000123434;
// // delete person.address;
// person.college = "Test college";
// console.log(person["gender"]);
// console.log(person.email);
// console.log(person);
// console.log(person.address.country);