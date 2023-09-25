$(document).ready(function () {
    $("#registrationForm").submit(function (event) {
        event.preventDefault();

        var username = $("#username").val();
        var pass = $("#password").val();
        console.log(username);
        console.log(pass)

        if (username == pass) {
            alert("Login successful!")
            localStorage.setItem('isLoggedIn', JSON.stringify(true))
            window.location.href = "./index.html";
        } else {
            alert(`Please Enter Valid Credentials ${username} ${pass}`)
        }

    });

});