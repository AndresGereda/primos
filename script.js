
var b1 = document.getElementById("e");
b1.addEventListener("click", f);
var r = document.getElementById("r");
var r1 = document.getElementById("r1");
function f()
{
  var start = new Date().getTime();

    var t1= document.getElementById("t1");
    var sum=0;
    var vector = [];
    for(var j = 2; j <= t1.value; j++){
        var a=0;
    for (var i = 2; i < j; i++) {
      if (j%i === 0){a=1;}
  }
  if(a !== 1){
    sum=sum+1;
  vector.push(j);
}
}
r.innerHTML ="Los numeros primos hasta "+t1.value+" son: "+vector;
r1.innerHTML ="La cantidad de numeros primos hasta "+t1.value+" son: "+sum;

var end = new Date().getTime();
var time = end - start;

console.log("El proceso tardó " + time + " milisegundos");
}



//METODO 2


var b2 = document.getElementById("e1");
b2.addEventListener("click", c);
var q = document.getElementById("q");
var q1 = document.getElementById("q1");
function c()
{
  var start = new Date().getTime();

    var t2= document.getElementById("t2");
    var sum=0;
    var vector = [];
    for(var j = 2; j <= t2.value; j++){
        var a=0;
        var j1=Math.trunc(Math.sqrt(j));
    for (var i = 2; i <= j1; i++) {
      if (j%i === 0){a=1;}
  }
  if(a !== 1){
    sum=sum+1;
  vector.push(j);
}
}
q.innerHTML ="Los numeros primos hasta "+t2.value+" son: "+vector;
q1.innerHTML ="La cantidad de numeros primos hasta "+t2.value+" son: "+sum;


var end = new Date().getTime();
var time = end - start;

console.log("El proceso tardó " + time + " milisegundos");
}
