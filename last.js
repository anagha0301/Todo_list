
let checkedCount=0;
let initial_count =0;
function ajax() {
    var xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var output = "";

            for (var i = 0; i < response.length; i++) {
                output += `<li class="list-group-item  ${response[i].completed?'disabledList':''}"> <input type="checkbox" onchange="getcount()" name ="checking" class="checkbox"  ${response[i].completed?' checked':''}/> <label for=""> ${response[i].title}</label></li>`
            }
           

            document.getElementById("demo").innerHTML = output;
            initial_count = $('.checkbox:checked').length;
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}

const alertPromise= ()=>{
     return new Promise((resolve,reject)=>{
        if(checkedCount===5){
            resolve(checkedCount)
        }
        else{
            reject('count not equal to 5');
        }
    });
}

const promiseCall=()=>{
    alertPromise().then((data)=>{
        alert(`Congratulations !! ${data} tasks have been successfully completed`);
    })
    .catch((err)=>{
        console.log(err);
    })
}


function getcount(){
    checkedCount = ($('.checkbox:checked').length)-initial_count;
    if(checkedCount<0){
        checkedCount = 0;
    }
    console.log(checkedCount);
    promiseCall();
}
