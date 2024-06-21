function showHiddenPass(passId, eyeId) {
   const passInput = document.getElementById(passId);
   const eyeIcon = document.getElementById(eyeId);

   eyeIcon.addEventListener('click', function () {
       if (passInput.type === 'password') {
           passInput.type = 'text';
           eyeIcon.classList.remove('ri-eye-off-line');
           eyeIcon.classList.add('ri-eye-line');
       } else {
           passInput.type = 'password';
           eyeIcon.classList.remove('ri-eye-line');
           eyeIcon.classList.add('ri-eye-off-line');
       }
   });
}

showHiddenPass('login-pass', 'login-eye');

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}
function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
   document.addEventListener("DOMContentLoaded", function() {
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Toggle password visibility
    document.querySelectorAll('.login__eye').forEach(eye => {
        eye.addEventListener('click', function() {
            const input = this.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                this.classList.replace('ri-eye-off-line', 'ri-eye-line');
            } else {
                input.type = 'password';
                this.classList.replace('ri-eye-line', 'ri-eye-off-line');
            }
        });
    });
});

document.getElementById('register-link').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
});

