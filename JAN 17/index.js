// function manipulateArray(array, callback){
//     return callback(array);
// }

// function mulBy4(array){
//     return array*4;
// }

// function add9(array){
//     return array+2;
// }

// var array = [2,4,6,8];
// var geek1 = manipulateArray(array, mulBy4);
// var geek2 = manipulateArray(array, add9);
// console.log(geek1);
// console.log(geek2);



// function mulBy2(array) {
//     var result = [];
//     for (let i = 0; i < array.length; i++) {
//       var y = array[i] * 2;
//       result.push(y);
//     }
//     return result;
//   }



//   function add2(array) {
//     var result = [];
//     for (let i = 0; i < array.length; i++) {
//       var y = array[i] + 2;
//       result.push(y);
//     }
//     return result;
//   }

a = [2,5,8,9];
var result =[];
for(let i=0; i<a.length; i++){
    var b =(a[i]+4);
    var c =(a[i]*9);
    result.push([b]);
    console.log([b]);
    result.push([c]);
    console.log([c]);
}

