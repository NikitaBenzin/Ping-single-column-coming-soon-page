function validation(){
    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        error.innerHTML = "We will send you email";
        error.style.color = "#151f29";
        

    }else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        error.innerHTML = "Please provide a valid email";
        error.style.color = "#ff5263";
    }
    if(email == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        error.innerHTML = "Whoops! It looks like you forgot to add your email";
        error.style.color = "#ff5263";
    }
    return false;
}