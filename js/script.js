// let ch = document.getElementById('chess')

// let input = document.getElementById('input')

// let btn = document.getElementById('btn')


// let chisla = {
//    '0': [
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 1, 0, 0, 1, 0, 0],
//       [0, 0, 1, 0, 0, 1, 0, 0],
//       [0, 0, 1, 0, 0, 1, 0, 0],
//       [0, 0, 1, 0, 0, 1, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0]
//    ],
//    "1": [
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 1, 0, 0, 0],
//       [0, 0, 0, 1, 1, 0, 0, 0],
//       [0, 0, 1, 0, 1, 0, 0, 0],
//       [0, 0, 0, 0, 1, 0, 0, 0],
//       [0, 0, 0, 0, 1, 0, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0]
//    ],

//    "2": [
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 0, 0, 0, 1, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 1, 0, 0, 0, 0, 0],
//       [0, 0, 1, 0, 0, 0, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0]
//    ], '3': [
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 0, 0, 0, 1, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 0, 0, 0, 1, 0, 0],
//       [0, 0, 0, 0, 0, 1, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0]
//    ],
//    '4': [
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 1, 0, 0, 1, 0, 0],
//       [0, 0, 1, 0, 0, 1, 0, 0],
//       [0, 0, 1, 0, 0, 1, 0, 0],
//       [0, 0, 1, 1, 1, 1, 1, 0],
//       [0, 0, 0, 0, 0, 1, 0, 0],
//       [0, 0, 0, 0, 0, 1, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0]
//    ],
//    '5': [
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 1, 0, 0, 0, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 0, 0, 0, 1, 0, 0],
//       [0, 0, 0, 0, 0, 1, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0]
//    ],
//    '6': [
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 1, 0, 0, 0, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 1, 0, 0, 1, 0, 0],
//       [0, 0, 1, 0, 0, 1, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0]
//    ],
//    '7': [
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 0, 0, 0, 1, 0, 0],
//       [0, 0, 0, 0, 1, 0, 0, 0],
//       [0, 0, 1, 1, 1, 1, 1, 0],
//       [0, 0, 0, 0, 1, 0, 0, 0],
//       [0, 0, 0, 0, 1, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0]
//    ],
//    '8': [
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 1, 0, 0, 1, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 1, 0, 0, 1, 0, 0],
//       [0, 0, 1, 0, 0, 1, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0]
//    ],
//    '9': [
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 1, 0, 0, 1, 0, 0],
//       [0, 0, 1, 0, 0, 1, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 0, 0, 0, 1, 0, 0],
//       [0, 0, 1, 1, 1, 1, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0]
//    ],
//    '10': [
//       [0, 0, 1, 0, 0, 1, 1, 1],
//       [0, 1, 1, 0, 0, 1, 0, 1],
//       [1, 0, 1, 0, 0, 1, 0, 1],
//       [0, 0, 1, 0, 0, 1, 0, 1],
//       [0, 0, 1, 0, 0, 1, 0, 1],
//       [0, 0, 1, 0, 0, 1, 0, 1],
//       [0, 1, 1, 1, 0, 1, 1, 1],
//       [0, 0, 0, 0, 0, 0, 0, 0]
//    ]
// }

// function findNum(arr) {
//    ch.innerHTML = ""
//    arr.forEach((row) => {
//       let rowAppent = document.createElement('div')
//       rowAppent.classList.add('row')
//       ch.appendChild(rowAppent)
//       row.forEach(col => {
//          let colAppent = document.createElement('div')
//          colAppent.classList.add('col', col == 1 ? 'active' : 'notactive')
//          rowAppent.appendChild(colAppent)
//       })
//    });

// }



// $("#btn").on("click", function () {
//    let a = $("#input").val()
//    findNum(chisla[a])
// })


// let arr = [3, 7, 6, 8, 10];
// function arraySum(array) {
//    let sum = 0;
//    for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//    }
//    console.log(sum);
// }
// arraySum(arr);

// let arr = ['сая', "Арман", "Ардак", "Жаныл", "Ердос"]
// let a = [];
// let b = []
// for (let index = 0; index < arr.length; index++) {

//    let c = arr[index].substring(0, 1,);
//    let d = arr[index].substring(3, 4,);
//    a.push(c);
//    d.length == 0 ? b.push('Введите 4 буккву!') : b.push(d)
// }
// console.log(a, b);

// let cab = {
//    name: '108',
//    pc: 24,
//    notWork: 6,
//    howWorkStudent() {
//       let a = this.pc - this.notWork
//       return a

//    }
// }

// let count = 0;

// let colors = ["red", "blue", "green", "yellow"]

// console.log(colors[0 + 1]);


// $(".btn").on("click", function () {
//    count = count + 1
//    $(".colors_blc1").addClass(colors[0 + count - 1])
//    $(".colors_blc2").removeClass("yellow blue red green yellow")
//    if (count > 4) {
//       $(".colors_blc2").addClass(colors[0 + count])
//       $(".colors_blc1").removeClass("yellow blue red green yellow")
//       count = 0
//    }
// if (count == 1) {
//    $(".colors_blc1").addClass("red")
// }
// if (count == 2) {
//    $(".colors_blc1").addClass("blue")
// }
// if (count == 3) {
//    $(".colors_blc1").addClass("green")
// }
// if (count == 4) {
//    $(".colors_blc1").addClass("yellow")
// }

// if (count == 5) {
//    $(".colors_blc2").addClass("red")
//    $(".colors_blc1").addClass("white")
// }
// if (count == 6) {
//    $(".colors_blc2").addClass("blue")
//    $(".colors_blc1").addClass("white")
// }
// if (count == 7) {
//    $(".colors_blc2").addClass("green")
//    $(".colors_blc1").addClass("white")
// }
// if (count == 8) {
//    $(".colors_blc2").addClass("yellow")
//    $(".colors_blc1").addClass("white")
// }

// if (count == 9) {
//    $(".colors_blc2").removeClass("yellow")
//    $(".colors_blc2").removeClass("blue")
//    $(".colors_blc2").removeClass("red")
//    $(".colors_blc2").removeClass("green")
//    $(".colors_blc2").removeClass("white")
//    $(".colors_blc1").removeClass("yellow")
//    $(".colors_blc1").removeClass("blue")
//    $(".colors_blc1").removeClass("red")
//    $(".colors_blc1").removeClass("green")
//    $(".colors_blc1").removeClass("white")
//    count = 0
// }
// })

let text = 'Sekonti';
let text2 = 'Sekonti';
let count = 0;

$('.btn').on('click', function () {
   count += 1
   if (count == 2) {
      count = 0
      document.getElementById("text").innerHTML = text2
   } else {
      String.prototype.shuffle = function () {
         let a = this.split(""),
            n = a.length;

         for (let i = n - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
         }
         return a.join("");
      }

      document.getElementById("text").innerHTML = text.shuffle()

   }

})