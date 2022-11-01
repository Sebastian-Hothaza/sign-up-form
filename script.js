
function validatePsw(){
    const userPsw = document.querySelector("#user_psw");
    const userPswRep = document.querySelector("#user_psw_rep");
    if (userPsw.value != userPswRep.value){
        alert("Passwords do not match!")
        return false;
    }
    return true;
}