function checkNameLength(){
    var first_name = document.getElementById("firstName");
    if (first_name.value.length < 5){
        alert("First Name must be at least 5 characters");
    }
    var last_name = document.getElementById("lastName")
    if (last_name.value.length < 5){
        alert("Last Name must be at least 5 characters")
    }
    return false
}
