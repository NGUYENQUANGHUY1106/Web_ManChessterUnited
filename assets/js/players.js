// sign_in
document.addEventListener("DOMContentLoaded",function()
{
    const players =document.querySelector(".text_signin");
    const signin_js = document.querySelector(".signin-js");
    const signin = document.querySelector(".text_signin");

    players.addEventListener("mouseenter",function()
    {
        signin_js.style.display ="block";
    })
    signin.addEventListener("mouseleave",function()
    {
        signin_js.style.display ="none";
    });
});
// players
document.addEventListener("DOMContentLoaded", function() 
{
    const players = document.querySelector(".players");
    const overlay = document.querySelector(".overlay");
    const players1 = document.querySelector(".players");

    players.addEventListener("mouseenter", function() {
        overlay.style.display = "block";
    });

    players1.addEventListener("mouseleave", function() {
        overlay.style.display = "none";
    });
});
// mutv
document.addEventListener("DOMContentLoaded", function() 
{
    const players = document.querySelector(".mutv");
    const overlay1 = document.querySelector(".overlay1");
    const mutv = document.querySelector(".mutv");

    players.addEventListener("mouseenter", function() {
        overlay1.style.display = "block";
    });

    mutv.addEventListener("mouseleave", function() {
        overlay1.style.display = "none";
    });
});
// latest
document.addEventListener("DOMContentLoaded",function()
{
    const players = document.querySelector(".latest");
    const overlay2 = document.querySelector(".overlay2");
    const latest = document.querySelector(".latest");

    players.addEventListener("mouseenter",function(){
        overlay2.style.display ="block";
    })
    latest.addEventListener("mouseleave",function(){
        overlay2.style.display ="none";
    });
});
//shop
document.addEventListener("DOMContentLoaded",function()
{
    const players = document.querySelector(".shop");
    const overlay3 = document.querySelector(".overlay3");
    const shop = document.querySelector(".shop");
    players.addEventListener("mouseenter",function(){
        overlay3.style.display ="block";
    })
    shop.addEventListener("mouseleave",function() {
        overlay3.style.display ="none";
    });
});
// fixture
document.addEventListener("DOMContentLoaded",function()
{
    const players = document.querySelector(".fixture");
    const overlay4 = document.querySelector(".overlay4");
    const fixture = document.querySelector(".fixture");
    players.addEventListener("mouseenter",function(){
        overlay4.style.display ="block";
    })
    fixture.addEventListener("mouseleave",function() {
        overlay4.style.display ="none";
    });
});
// tìm kiếm 
document.getElementById('search-button').addEventListener('click', function() {
    var input = document.getElementById('search-input').value.trim().toLowerCase();
    var players = document.querySelectorAll('.goal-keepers-system, .players-defenders .players-defenders, .img-midfielders, .img-forwards');
    
    players.forEach(function(player) {
        var playerName = player.querySelector('.image-caption').textContent.trim().toLowerCase();
        if (playerName.includes(input)) {
            player.style.display = 'block';
        } else {
            player.style.display = 'none';
        }
    });
});





