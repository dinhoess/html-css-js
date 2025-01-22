function f1(){
   f2() 
   console.log('chamei - f1');
}

function f2(){
    f3() 
    console.log('chamei - f2');
 }

 function f3(){   
    console.log('chamei - f3');
 }

 function principal(){    
    console.log('Função Principal!')
    f1()
 }

 principal()