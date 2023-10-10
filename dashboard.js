const token = sessionStorage.getItem("token");
console.log(token)
 if(token == null){
    location.href = "http://127.0.0.1:5500/index.html"
 }



 function loggout(){
    sessionStorage.removeItem('token')
    location.href = "http://127.0.0.1:5500/index.html"
 }
 