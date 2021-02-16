
let uname= document.getElementById("uname");
let password= document.getElementById("password");
let mainu= document.getElementById("mainu");


function check(todo) {
 if((uname.value=="admin")||(password.value=="12345"))
 {
    todo();
   
 }
 else{
    
    alert("Invalid Username or password!! ");
    return false;
    
 }
}
function redirect(){
    console.log("hI");
   mainu.setAttribute("action","todo.html");
   // window.location='todo.html';
  //location.replace("todo.html")
}

function validate(){
    console.log("koi");
    check(redirect);
}