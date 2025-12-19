document.writeln("external file");
let t=60;
if(t>=100){
    document.writeln("boling");

}else if (t>=70 && t<100){

    document.writeln("hot")

}else if  (t>=50 && t<70){ 

    document.writeln("warm");
}else{
    document.writeln("cold ");
}




let day=2;
switch(day){
    case 1:
        document.writeln("sunday");
        break;
    case 2:
        document.writeln("monday");
        break;
    default:
        document.writeln("not a day ");        
}






let  temp = (t<=100)?"boiling":"not boiling ";



let tem ;
if(t>=100){
    tem="boiling";

}else{
    tem="not boiling ";
}




for(var i= 1; i<4;i++){
    document.writeln(i);
}
  var  w =3;
  while (w<5){
    document.writeln(w );
    w++

  }
  document.writeln("finished")






  function welcome(){
    console.log("welcome")
  }
  welcome()



  function sum (num1,num2){
    var result= num1+num2;
    console.log(result)
  }

  sum(12,3)



  function multi(n1,n2){
    var result=n1*n2
    return result
  }

 console.log( multi(4,3))




  var w=  ()=>{
    console.log("this is anonymous function")
  }
  
w()



function callAnotherfn(anotherfn){
    console.log("this is the function that calls another function ")

}

callAnotherfn(w)            



var arr = [100,200,300,400,500]
console.log(arr[0])

arr[3]=450
console.log(arr)
console.log(arr.length)
arr.pop
console.log(arr)
arr.push(700,800)
console.log(arr)
arr.splice(2,2)
console.log(arr)
arr.splice(2,0,"name")
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(40)
console.log(arr)