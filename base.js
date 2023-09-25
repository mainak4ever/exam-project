var isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || null
if (!isLoggedIn) {
    window.location.href = "./login.html";
}

$('#login').click(function () {
    if (isLoggedIn == true) {
        window.localStorage.setItem("isLoggedIn", false);
        $('#login').text('Login');
        window.location.href = "./login.html";
    }

})