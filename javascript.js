function Solve(val) { /*solve function with val parameter*/ 
    var v = document.getElementById('res');
    v.value += val;
 }
 function Result() { /*result function to display the output*/ 
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
 }
 function Clear() { /*clear function to erase or clear the screen*/ 
    var inp = document.getElementById('res');
    inp.value = '';
 }
 function Back() { /*back function  */
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
 }