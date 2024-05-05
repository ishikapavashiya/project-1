// let arr = [5, 1, 2, 4, 8,50,40,80,9,20,10,]

// let length = arr.length;
// for (let i = 0; i < length; i++) {
//     for(let j=1;j<length-i;j++){
//         if( arr[j-1]>arr[j]){
//             let temp = arr[j]
//             arr[j]=arr[j-1]
//             arr[j-1]=temp
//         }
//     }
// }
// console.log(arr);
// ==============================sec=====================
// let arr = [5, 1, 2, 4, 3, 0, 8, 6, 10, 2, 70, 90, 80, 40]

// let length = arr.length;

// for (let i = 0; i < length - 1; i++) {
//   let mid = i;
//   for(let j = i+1;j<length;j++){
//     if(arr[mid]>arr[j]){
//         mid=j;
//     }
//     let temp = arr[mid];
//     arr[mid]=arr[i];
//     arr[i]=temp;
//   }
//   for(let i = 0;i<length;i++){

//   }
// }
// console.log(arr);



// ==============================new element========================

// let arr = [1, 2, 3, 4, 8, 9];
// let element = 2;
// let add = 20;

// for (let i = arr.length - 1; i >= element; i--) {
//     arr[i + 1] = arr[i];
// }
// let index = element;
// do {
//     if (index === element) {
//         arr[index] = add;
//     }
//     index++;
// } while (index < arr.length);
// console.log(arr);

// ===============remove elemant==================

// let arr = [1, 2, 3, 4, 8, 9];
// let element = 2;

// for (let i = element; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
// }
// arr.length--;

// console.log(arr);
