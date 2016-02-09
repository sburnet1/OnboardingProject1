function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("All Fields Must Be Completed");
        return false;
    }
}
