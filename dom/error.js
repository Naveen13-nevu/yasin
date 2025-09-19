// //Examples of Error

// // try and catch

// try {
//     let x = 5 / 10;
    
//     console.log("result : ", x);
    
    
    
// }
// catch (error){
//     console.log("Error Got " , error.message);
    
// }
// finally {
//     console.log("this will always happen");
    
// }

//function with try and catch ***

// function check(age) {
//     if (age < 18) {
//         throw "age must be 18 or above "
//     }
//     return "access granted "
    
// }
// try {
//   console.log(check(20));
// }
// catch (error) {
//   console.log("custom :",error);
// }


// function divide(a, b) {
//     if (b === 0) {
//         throw new Error ("cannot divide by 0 ")
//     }
//     return a/b
// }
// try {
//     console.log(divide(4,5));
    
// }
// catch (err) {
//     console.log("no :", err.message);
    
// }
