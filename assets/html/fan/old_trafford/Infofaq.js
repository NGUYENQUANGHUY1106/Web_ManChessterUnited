document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const isActive = header.classList.contains('active');

        // Remove active state from all headers and hide all contents
        document.querySelectorAll('.accordion-header').forEach(item => {
            item.classList.remove('active');
            item.nextElementSibling.style.maxHeight = '0';
            item.nextElementSibling.style.padding = '0 15px';
            item.nextElementSibling.style.opacity = '0';
        });

        // If the clicked header was not active, make it active and display its content
        if (!isActive) {
            header.classList.add('active');
            const content = header.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.padding = '15px';
            content.style.opacity = '1';
        }
    });
});
// const title = document.querySelector('.accordion-header');
// const list = document .querySelectorAll('.accordion-content');

// title.addEventListener('click',function()
// {
//     list.forEach(div =>
//         {
//             div.classList.toggle('hidden');
//         }
//     )
//     if(list[0].classList.contains('hidden'))
//         {
//             title.innerHTML = 'BEFORE I VISIT &#9660;';
//         }
//         else
//         {
//             title.innerHTML = 'BEFORE I VISIT &#9650;';
//         }
// });