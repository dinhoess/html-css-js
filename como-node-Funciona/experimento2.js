function f1(){
   setTimeout(()=>f2(),2000)
   console.log('chamei - f1');
}

function f2(){
    setTimeout(()=> f3(),2000) 
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