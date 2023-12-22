function validation(){
    let username= document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password= document.getElementById("password").value;
    let message = document.getElementById("message").value;

    let userCheck = /^[A-Za-z]+$/
    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let passwordCheck = /^[A-Za-z]+$/
    let messageCheck = /^[A-Za-z]+$/

    if(userCheck.test(username)){
        document.getElementById("usererror").innerHTML = ""
    }else{
        document.getElementById("usererror").innerHTML = "Invalid Username"
        return false;
    }
    
    if(emailCheck.test(email)){
        document.getElementById("emailerror").innerHTML = ""
    }else{
        document.getElementById("emailerror").innerHTML = "Invalid Email"
        return false;
    }
    
    if(passwordCheck.test(password)){
        document.getElementById("passworderror").innerHTML = ""
    }else{
        document.getElementById("passworderror").innerHTML = "Invalid Password"
        return false;
    }
    
    if(messageCheck.test(message)){
        document.getElementById("messageerror").innerHTML = ""
    }else{
        document.getElementById("messageerror").innerHTML = "Invalid message"
        return false;
    }

    if(userCheck.test(username) && emailCheck.test(email) && passwordCheck.test(password) && messageCheck.test(message)){
        swal("Good job!", "You clicked the button!", "success");
        return false;
    }
    else{
        alert("Invalid")
        return false;

    }
}

const spinnerWrapperEl= document.querySelector('.spinner-wrapper');

window.addEventListener('load', () =>{
    spinnerWrapperEl.style.opacity= '0';

    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 200)
})

