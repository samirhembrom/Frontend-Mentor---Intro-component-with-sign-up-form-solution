const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function onSumbit(){
    const firstnameValue = document.getElementById("first_name").value;
    const firstnameEl = document.getElementById("first_name");
    const lastnameValue = document.getElementById("last_name").value;
    const lastnameEl = document.getElementById("last_name");
    const emailValue = document.getElementById("email").value;
    const emailEl = document.getElementById("email");
    const passwordValue = document.getElementById("password").value;
    const passwordEl = document.getElementById("password");
    if(firstnameValue == ""){
        document.getElementById("first_name_error").innerHTML = "First Name cannot be empty";
        firstnameEl.classList.add('icon');
        firstnameEl.style.borderColor = "hsl(0, 100%, 74%)";
        firstnameEl.style.borderWidth = "2px";
    }else if(firstnameValue != ""){
        document.getElementById("first_name_error").innerHTML = "";
        firstnameEl.classList.remove('icon');
        firstnameEl.style.borderColor = "";
        firstnameEl.style.borderWidth = "1px";
    }
    if(lastnameValue == ""){
        document.getElementById("last_name_error").innerHTML = "Last Name cannot be empty";
        lastnameEl.classList.add('icon');
        lastnameEl.style.borderColor = "hsl(0, 100%, 74%)"
        lastnameEl.style.borderWidth = "2px";
    }else if(lastnameValue != ""){
        document.getElementById("last_name_error").innerHTML = "";
        lastnameEl.classList.remove('icon');
        lastnameEl.style.borderColor = ""
        lastnameEl.style.borderWidth = "1px";
    }
    if(emailValue == ""){
        document.getElementById("email_error").innerHTML = "Email cannot be empty";
        emailEl.classList.add('icon');
        emailEl.style.borderColor = "hsl(0, 100%, 74%)"
        emailEl.style.borderWidth = "2px";
    }else if(emailValue != ""){
        if(re.test(emailValue)){
            document.getElementById("email_error").innerHTML = "";
            emailEl.classList.remove('icon');
            emailEl.style.borderColor = ""
            emailEl.style.borderWidth = "1px";
        }else{
            document.getElementById("email_error").innerHTML = "Looks like this not an email";
            emailEl.classList.add('icon');
            emailEl.style.borderColor = "hsl(0, 100%, 74%)"
            emailEl.style.borderWidth = "2px";
        }
    }
    if(passwordValue == ""){
        document.getElementById("password_error").innerHTML = "Password cannot be empty";
        passwordEl.classList.add('icon');
        passwordEl.style.borderColor = "hsl(0, 100%, 74%)"
        passwordEl.style.borderWidth = "2px";
    }else if(passwordValue != ""){
        document.getElementById("password_error").innerHTML = "";
        passwordEl.classList.remove('icon');
        passwordEl.style.borderColor = ""
        passwordEl.style.borderWidth = "1px";
    }
        
}