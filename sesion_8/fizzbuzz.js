// 1: 1
// 2: 2
// 3: fizz
// 4: 4
// 5: buzz
// 15: fizzbuzz
var fizz="fizz"
var buzz="buzz"
var fizzbuzz="fizzbuzz"

const fb = (x,y)=>{
    for(let i = x; i <=y ; i++){
        if(i%3==0 & i%5==0){
            console.log(`${i}: ${fizzbuzz}`);
        }else if(i%3==0){
            console.log(`${i}: ${fizz}`);    
        }else if(i%5==0){
            console.log(`${i}: ${buzz}`);    
        }else{
            console.log(`${i}: ${i}`);
        }
    }
}

fb(20,60)