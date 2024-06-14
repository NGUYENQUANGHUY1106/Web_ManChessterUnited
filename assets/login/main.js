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

document.addEventListener('DOMContentLoaded', function () {
   const loginForm = document.getElementById('login-form');
   const loginMessage = document.getElementById('login-message');

   loginForm.addEventListener('submit', function (event) {
       event.preventDefault(); // Prevent the default form behavior

       const email = document.getElementById('login-email').value;
       const password = document.getElementById('login-pass').value;

       console.log(`Email: ${email}, Password: ${password}`); 

       if (email === 'nguyenquanghuy110605@gmail.com' && password === '11062005') {
           console.log('Login successful'); 
           Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Logged in successfully',
               showConfirmButton: false,
               timer: 3000
           }).then(() => {
               window.location.href = '/assets/html/index.html'; 
           });
       } else {
           console.log('Login failed'); 
           Swal.fire({
               icon: "error",
               title: "Error...",
               text: "Wrong password or email!",
           });
       }
   });
});

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
