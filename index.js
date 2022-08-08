// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    
    const m=cats.push(name);
    return m;
}

 
function destructivelyPrependCat(name){
    
   const m= cats.unshift(name);
    return m;
}


function destructivelyRemoveLastCat(name){
    
    const m= cats.pop(name);
     return m;
 }

 function destructivelyRemoveFirstCat(name){
    
    const m= cats.shift(name);
     return m;
 }

 function appendCat(name){
    
    const m= [...cats,name]

     return m;
 }
  function prependCat(name){
    const m= [name,...cats]

    return m;
  }
  function removeLastCat(){
    const m= cats.slice(0,2);
     return m;
  }
  function removeFirstCat(){
    const m= cats.slice(1);
     return m;
  }