const display_msg = (msg,color,id) => {
    document.getElementById(id).innerHTML = msg
    document.getElementById(id).style.color = color
}

const name_validation = () => {
    let name = document.getElementById("name").value
    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)&&!name.match(/^[a-zA-Z]+$/)&&!name.match(/^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/)){
        display_msg("name must only contain alphabets","red","name_msg")
        return false
    }
    else if(name.length<3){
        display_msg("name must be at least 3 characters","red","name_msg")
        return false
    }
    else if(name.length>30){
        display_msg("name must not be more than 30 characters","red","name_msg")   
        return false
    }
    else{
        display_msg("valid name","green","name_msg")
        return true
    }
}

const age_validation = () => {
    let age = document.getElementById("age").value
    if(!age.match(/^[0-9]+$/)){
        display_msg("age must only be numbers","red","age_msg")
        return false
    }
    else if(age<18){
        display_msg("you must be at least 18 years","red","age_msg")
        return false
    }
    else{
        display_msg("valid age","green","age_msg")
        return true
    }
}

const phone_validation = () => {
    let phone = document.getElementById("phone").value
    if(!phone.match(/^[0-9]+$/)){
        display_msg("phone must only be numbers","red","phone_msg")
        return false
    }
    else if(!phone.match(/^98/)){
        display_msg("phone number must start with 9","red","phone_msg")
        return false
    }
    else if(phone.length<10){
        display_msg("phone numbers must be at least 10 digits","red","phone_msg")
        return false
    }
    else if(phone.length>10){
        display_msg("phone numbers must not be more than 10 digits","red","phone_msg")
        return false
    }
    else{
        display_msg("valid phone number","green","phone_msg")
        return true
    }
}

const email_validation = () => {
    let email = document.getElementById("email").value
    // if(!email.match(/^[a-zA-Z][a-zA-Z0-9_.]+[@](gmail)+[.][a-z]+$/)){
    // if(!email.match(/^[a-zA-Z][a-zA-Z0-9_.]+[@][a-zA-Z]+[.][a-z]+$/)){
    if(!email.match(/^[a-zA-Z][a-zA-Z0-9_.]+[@][a-zA-Z]+[.]com$/)){
        display_msg("invalid email, email should be in format: example@example.com","red","email_msg")
        return false
    }
    else{
        display_msg("valid email","green","email_msg")
        return true
    }
}

const password_validation = () => {
    let password = document.getElementById("pwd").value
    // if(!password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!_\-]).{8,30}$/))
    // {
    //     display_msg("invalid password", "red", "pwd_msg")
    // }
    if(!password.match(/[a-z]/)){
        display_msg("Password must contain at least 1 lowercase alphabet", "red", "pwd_msg")
        return false
    }
    else if(!password.match(/[A-Z]/)){
        display_msg("Password must contain at least 1 uppercase alphabet", "red", "pwd_msg")
        return false
    }
    else if(!password.match(/[0-9]/)){
        display_msg("Password must contain at least 1 number", "red", "pwd_msg")
        return false
    }
    else if(!password.match(/[!@#$+_]/)){
        display_msg("Password must contain at least 1 special character", "red", "pwd_msg")
        return false
    }
    else if(password.match(/ /)){
        display_msg("Password must not contain space character", "red", "pwd_msg")
        return false
    }
    else if(password.length<8 || password.length>30){
        display_msg("Password must be between 8 and 30 characters ", "red", "pwd_msg")
        return false
    }
    else{
        display_msg("valid password","green","pwd_msg")
        return true
    }
}

const validate= () => {
    if(name_validation() && age_validation() && phone_validation() && email_validation() && password_validation()){
        return true
    }
    else{
        return false
    }
}

