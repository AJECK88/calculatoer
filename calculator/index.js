const buttons= document.querySelectorAll("button")
const display = document.querySelector("#display")
let sum= document.querySelector("#sum")
const importantValues = ["%","=","+","/","x"]
let output ="";



 const calculate =(buttonValue)=>{
   try{ 
      

   if(buttonValue === "=" && output !==""){
      document.querySelector("#sum").innerHTML= eval(output.replace("%", "/100"))
    
     
   }
   else if(buttonValue === "Ac"){
    output=output.toString().slice(0, -1)
    document.querySelector("#sum").innerHTML= "0";
   }
   else if(buttonValue === "C"){
      document.querySelector("#sum").innerHTML= "0";
      output= ""
   }else{
      if( output ==="" && importantValues.includes(buttonValue)) return 1;
      output += buttonValue;
   }
   display.value= output;
 }

 
 catch(erro){
   document.querySelector("#sum").innerHTML="erro";
 }
}
buttons.forEach((button)=>{
   /* || button click listiner calls the calculatore() with the dataset value as argument */
    button.addEventListener('click', (e) =>{ calculate(e.target.dataset.value) });
})