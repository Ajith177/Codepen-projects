// let paragraph_content = document.querySelector(".first-para");

// let 

// let store = paragraph_content.innerText.split(' ')
// store.forEach ((element) => {
//     console.log(element);
    
//     if (element.length >8 ) {
//         console.log(`<mark>${element}</mark>`)
//         return `<mark>${element}</mark>`
//     }
    
//     else {
//         return element
//     }
// });

// console.log(store);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let paragraph=document.querySelector(".first-para");


let arr=[];
arr.push(paragraph.innerText);
console.log(arr);

let b
arr.forEach((element)=>{
    b= element.split(" ");
});
console.log(b);

let c=b.map((value)=>{
    if(value.length>9){
        return `<mark>${value}</mark>`
    }
    else{
        return value
    }
});
paragraph.innerHTML = c.join(' ');
// =========================================================================================================================================================================================================================

// ----------Dharun_CODE---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let para_Content = document.querySelector('.paraContent')
// let para_B = document.querySelector('#para_2')


// let arr = []
// arr.push(para_Content.innerText)
// console.log(arr);

// let splt
// // function highLight(arr) {
//     arr.forEach((element) => {
//         // let pat = /[,.!?\s]+/
//         splt = element.split(" ")
//     });
//     console.log(splt[0],);

//     let marker = splt.map((value) => {
//         if (value.length >= 8) {
//             return `<mark>${value}</mark>`
//         }
//         else {
//             return value
//         }
//     });
//     console.log(marker);
//     para_B.innerHTML = marker.join(' ').toString()
    
// }
// highLight(arr)


