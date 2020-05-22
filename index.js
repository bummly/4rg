//index.js

let url= document.getElementById("url");
let btn= document.getElementById("btn");
let display = document.getElementById("display");

btn.onclick = function () {
   
  let key=Math.random().toString(36).substr(2, 5);
  let value= ' <blockquote class="embedly-card"><h4><a href=" '+url.value+' "></a></h4><p></p></blockquote> ';
  
 // console.log(key);
  
  if(key && value){
    
    localStorage.setItem(key, value);
   // window.reload();

window.location.reload(false)

    //console.log(key);
    }
  
  };

for(let i=0; i<localStorage.length; i++){
  
  let key= localStorage.key(i);
  let value= localStorage.getItem(key);
  
  display.innerHTML += value+'</br>';
  }
