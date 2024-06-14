const title = document.querySelector('.tieude');
const divs = document.querySelectorAll('.input_radio_gender');

title.addEventListener('click', function() {
    divs.forEach(div => {// lặp qua mỗi phần tử trong mảng divs
        div.classList.toggle('hidden');// thêm hoặc xóa lớp hidden 
    });

    // Thay đổi mũi tên khi ẩn/hiện
    if (divs[0].classList.contains('hidden')) { // kiểm tra xem phần tử đầu tiên của mảng có chưa lớp hidden k 
        title.innerHTML = 'Gender/Age &#9660;'; // Hiển thị mũi tên xuống
    } else {
        title.innerHTML = 'Gender/Age &#9650;'; // Hiển thị mũi tên lên
    }
});
// popular collection
const title1 = document.querySelector('.tieude1');
const divs1 = document.querySelectorAll('.input_radio_popular');

title1.addEventListener('click', function() {
    divs1.forEach(div => {
        div.classList.toggle('hidden1');
    });

    // Thay đổi mũi tên khi ẩn/hiện
    if (divs1[0].classList.contains('hidden1')) {
        title1.innerHTML = 'Popular Collection &#9660;';
    } else {
        title1.innerHTML = 'Popular Collection &#9650;';
    }
});
// brands
const title2 = document.querySelector('.tieude2');
const divs2 = document.querySelectorAll('.input_radio_brands');

title2.addEventListener('click',function()
{
    divs2.forEach(div => {
            div.classList.toggle('hidden2');
        });
        
        if(divs2[0].classList.contains('hidden2'))
        {
            title2.innerHTML = 'Featured Brands &#9660;';
        } else
        {
            title2.innerHTML ='Featureds Brands &#9650';
        }
});
// shopping
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
});
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
});

let products = [
        {
            id: 1,
            name: 'Manchester Unied adidas Training T-Shirt -White',
            image: '1.avif',
            price: 874000
        },
        {
            id: 2,
            name: 'Manchester United adidas Training Jersey - Green',
            image: '2.avif',
            price: 713000
        },
        {
            id: 3,
            name: 'Manchester United adidas Training Pants - Black',
            image: '3.avif',
            price: 552000
        },
        {
            id: 4,
            name: 'Manchester United adidas Training Hoodie - Green',
            image: '4.avif',
            price: 874000
        },
        {
            id: 5,
            name: 'Manchester United adidas Pro Training Pants - Black',
            image: '5.avif',
            price: 506000
        },
        {
            id: 6,
            name: 'Manchester United adidas Training Jersey - Green  Kids',
            image: '6.avif',
            price: 644000
        }
        ,
        {
            id: 7,
            name: 'Manchester Unied adidas Training T-Shirt -White',
            image: '7.avif',
            price: 874000
        },
        {
            id: 8,
            name: 'Manchester United Reversible Anthem Jacket - Black',
            image: '8.avif',
            price: 1380000
        },
        {
            id: 9,
            name: 'Manchester United adidas D4GMDY Travel Jacket - Green',
            image: '9.avif',
            price: 1196000
        },
        {
            id: 10,
            name: 'Manchester United adidas D4GMDY Travel Shorts  Black',
            image: '32.avif',
            price: 575000
        },
        {
            id: 11,
            name: 'Manchester United Golf Ripstop 9 Inch Golf Short - Olive Strata - Mens',
            image: '33.avif',
            price: 759000
        },
        {
            id: 12,
            name: 'Manchester United adidas Training Shorts - Black - Kids',
            image: '34.avif',
            price: 644000
        }
        ,
        {
            id: 13,
            name: 'Manchester United adidas Golf Ultimate Adjustable Shorts - Black - Boys',
            image: '35.avif',
            price: 805000
        },
        {
            id:14 ,
            name: 'Manchester United adidas ALL SZN Shorts - Black - Mens',
            image: '36.avif',
            price: 690000
        },
        {
            id: 15,
            name: 'Manchester United adidas Z.N.E. Premium Tracksuit Bottoms - Black - Mens',
            image: '37.avif',
            price: 1140000
        },
        {
            id: 16,
            name: 'Manchester United adidas Originals Stone Roses Shorts  Black',
            image: '38.avif',
            price: 1265000
        },
        {
            id: 17,
            name: 'Manchester United Training Pants - Black - Womens',
            image: '39.avif',
            price: 1012000
        },
        {
            id: 18,
            name: 'Manchester United adidas Future Icons 3-Stripes Shorts - Black - Mens',
            image: '40.avif',
            price: 483000
        }
    
];

let productLinks = {
    1: 'shirt_main.html',
    2: 'shirt_main2.html',
    3: 'shirt_man3.html',
    4: 'shirt_main4.html',
    5: 'shirt_main5.html',
    6: 'shirt_main6.html',
    7: 'shirt_main7.html',
    8: 'shirt_main8.html',
    9: 'shirt-main9.html',
    10: 'shirt_main10.html',
    11: 'shirt_main11.html',
    12: 'shirt_main12.html',
    13: 'shirt_main13.html',
    14: 'shirt_main14.html',
    15: 'shirt_main15.html',
    16: 'shirt_main16.html',
    17: 'shirt_main17.html',
    18: 'shirt_main18.html'
};

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        let productLink = productLinks[value.id];
        newDiv.innerHTML = `
            <a href="${productLink}"><img src="/assets/image/${value.image}" alt="${value.name}"></a>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    });
}

initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price * value.quantity;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="/assets/image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

// check modal
// Hiển thị modal khi nhấn vào tổng số tiền
total.addEventListener('click', showCheckoutModal);

// Sự kiện khi người dùng chọn tệp ảnh
document.getElementById('upload_image').addEventListener('change', function() {
    var imgElement = document.getElementById('uploaded_image');
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            imgElement.src = e.target.result;
            imgElement.style.display = 'block';
        }
        reader.readAsDataURL(this.files[0]);
    }
});

function showCheckoutModal() {
    const modal = document.querySelector('.checkout-modal');
    const totalRect = total.getBoundingClientRect();
    const modalWidth = 600; // Độ rộng của modal

    modal.style.top = totalRect.top + 'px';
    modal.style.left = (totalRect.left - modalWidth - 10) + 'px';
    modal.classList.add('active');

    // Thêm sự kiện cho nút close
    document.querySelector('.closeShopping').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    // Hiển thị hoặc ẩn mã QR khi chọn phương thức thanh toán
    const radios = document.querySelectorAll('input[name="payment_method"]');
    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'bank') {
                document.querySelector('.qr-code').style.display = 'block';
                document.querySelector('.upload_img').style.display = 'block';
            } else {
                document.querySelector('.qr-code').style.display = 'none';
                document.querySelector('.upload_img').style.display = 'none';
            }
        });
    });
}

// Đóng modal khi click ra ngoài modal
document.querySelector('.checkout-modal').addEventListener('click', function(event) {
    if (event.target === this) {
        this.classList.remove('active');
    }
});

function reg() {
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var address = document.getElementById('address').value.trim();
    var email = document.getElementById('email').value.trim();

    if (name === '') {
        alert('Please enter your name.');
    } else if (address === '') {
        alert('Please enter your phone address.');
    } else if (phone === '') {
        alert('Please enter your phone.');
    } else if (email === '') {
        alert('Please enter your email.');
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your order has been placed, Thank you',
            showConfirmButton: false,
            timer: 3000
        });
    }
}


// check input

