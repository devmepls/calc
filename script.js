'use strict';



// output 
const sum = document.querySelector('#screen');
const btn = document.querySelector('#ans');
const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#two');
const btn3 = document.querySelector('#three');
const btn4 = document.querySelector('#four');
const btn5 = document.querySelector('#five');
const btn6 = document.querySelector('#six');
const btn7 = document.querySelector('#seven');
const btn8 = document.querySelector('#eight');
const btn9 = document.querySelector('#nine');
const btn10 = document.querySelector('#add');
const btn12 = document.querySelector('#clr');
const btn13 = document.querySelector('#sub');
const btn14 = document.querySelector('#mul');
const btn15 = document.querySelector('#divd');


btn1.addEventListener('click',function(){
    sum.textContent+=`1`;

})
btn2.addEventListener('click',function(){
    sum.textContent+=`2`;
  })
btn3.addEventListener('click',function(){
    sum.textContent+=`3`;

})
btn4.addEventListener('click',function(){
  sum.textContent+=`4`;

})
btn5.addEventListener('click',function(){
  sum.textContent+=`5`;

})
btn6.addEventListener('click',function(){
  sum.textContent+=`6`;

})
btn7.addEventListener('click',function(){
  sum.textContent+=`7`;

})
btn8.addEventListener('click',function(){
  sum.textContent+=`8`;

})
btn9.addEventListener('click',function(){
  sum.textContent+=`9`;

})
btn10.addEventListener('click',function(){
    sum.textContent+=`+`;
  })
btn13.addEventListener('click',function(){
    sum.textContent+=`-`;
  })
btn14.addEventListener('click',function(){
    sum.textContent+=`*`;
  })

btn15.addEventListener('click',function(){
    sum.textContent+=`/`;
  })

btn.addEventListener('click',function(){
    let x = document.getElementById('screen').textContent;
    
    let y = eval(x)
    sum.textContent=y;
    
   
  })


  btn12.addEventListener('click',function(){
      sum.textContent= " ";
})

  
  


// btn.addEventListener('click',function(){
//     const random1 = Math.floor(Math.random()*(6)+1);
//     const random2 = Math.floor(Math.random()*(6)+1);
//     const random3 = Math.floor(Math.random()*(6)+1);

//     const total=random1+random2+random3;
//     sum.textContent=`Sum : ${total}`;
// })

