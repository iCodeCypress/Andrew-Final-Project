function checkPassword(){
    let password = document.getElementById("password").value;
    var actual = "m";
    if(password.length != 0){
        if(password == actual){
            document.location.href='secret.html';
        }
    }
}
