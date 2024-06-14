let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next')

let active =0;
let lengItems = items.length -1 ;

next.onclick = function()
{
    if(active+1>lengItems)
    {
        active = 0;
    }
    else
    {
        active = active +1 ;
    }
    reloadSlider();
}

prev.onclick = function() {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
}
let timeSlider = setInterval(()=>
{
    next.click()
}, 5000);
function reloadSlider ()
{
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}
dots.forEach((li, key)=>
{
    li.addEventListener('click',function()
    {
        active = key;
        reloadSlider();
    })
})

window.addEventListener('DOMContentLoaded', function() {
    reloadSlider();
});

// gắn size cho sự kiện // lựa chọn size
document.addEventListener('DOMContentLoaded', function() 
{
    const sizeElements = document.querySelectorAll('.table_size li');
    const sizeDisplay = document.querySelector('.select_header_size .size');
    
    sizeElements.forEach(sizeElement => 
        {
        sizeElement.addEventListener('click', function() {
            const isNoneClass = sizeElement.classList.contains('none');
            const isNotNoneClass = sizeElement.classList.contains('notnone');
            
            if (isNoneClass) 
            {
                const selectedNoneElement = document.querySelector('.table_size .none.selected');
                if (selectedNoneElement) 
                {
                    selectedNoneElement.classList.remove('selected');
                }
            } else if (isNotNoneClass) 
            {
                const selectedNotNoneElement = document.querySelector('.table_size .notnone.selected');
                if (selectedNotNoneElement)
                 {
                    selectedNotNoneElement.classList.remove('selected');
                }
                
                sizeDisplay.textContent = `Size: ${sizeElement.textContent}`;
            }
            
            sizeElement.classList.add('selected');
        });
    });
});
// size chart
document.addEventListener("DOMContentLoaded", function() {
    var sizechart = document.querySelector(".sizechart");
    var tabSize = document.querySelector(".tab_size");

    sizechart.addEventListener("click", function() {
        if (tabSize.style.display === "none" || tabSize.style.display === "") {
            tabSize.style.display = "block";
        } else {
            tabSize.style.display = "none";
        }
    });
});

// parameter
const title_shipping = document.querySelector('.text_shipping');
const list_shipping = document.querySelectorAll('.introduction_shipping');

title_shipping.addEventListener('click',function()
{
    list_shipping.forEach(div =>
        {
            div.classList.toggle('shippingparameter');
        });

        if(list_shipping[0].classList.contains('shippingparameter'))
        {
            title_shipping.innerHTML = 'Shipping &#9660;';
        }else
        {
            title_shipping.innerHTML =' Shipping &#9650;';
        }
});
// detalis
const textdetails = document.querySelector('.textdetails');
const list_details = document.querySelectorAll('.introduction_details');

textdetails.addEventListener('click',function()
{
    list_details.forEach(div =>
        {
            div.classList.toggle('detailsparameter');
        });

        if(list_details[0].classList.contains('detailsparameter'))
        {
            textdetails.innerHTML = 'Details &#9660;' ;
        }
        else
        {
            textdetails.innerHTML = 'Details &#9650;';
        }
});
// description
const textdescription = document.querySelector('.textdescription');
const list_description = document.querySelectorAll ('.introduction_description');

textdescription.addEventListener('click',function()
{
    list_description.forEach(div =>
        {
            div.classList.toggle('descriptionparameter');
        });

        if(list_description[0].classList.contains('descriptionparameter'))
        {
            textdescription.innerHTML = ' Description &#9660';
        }
        else
        {
            textdescription.innerHTML = ' Description &#9650';
        }
});