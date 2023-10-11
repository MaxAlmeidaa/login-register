const token = sessionStorage.getItem("token");
console.log(token)
 if(token == null){
    location.href = "index.html"
 }



 function loggout(){
    sessionStorage.removeItem('token')
    location.href = "index.html"
 }
 