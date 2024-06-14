document.addEventListener('DOMContentLoaded', function () {
  var currentList = 1; 

  document.getElementById('nextBtn').addEventListener('click', function () {
      var list1 = document.getElementById('list1');
      var list2 = document.getElementById('list2');
      var list3 = document.getElementById('list3');
      var list4 = document.getElementById('list4');

      if (currentList === 1) {
          list1.style.display = 'none';
          list2.style.display = 'flex';
          currentList = 2;
      } else if (currentList === 2) {
          list2.style.display = 'none';
          list3.style.display = 'flex';
          currentList = 3;
      } else if (currentList === 3) {
          list3.style.display = 'none';
          list4.style.display = 'flex';
          currentList = 4;
      } else if (currentList === 4) {
          list4.style.display = 'none';
          list1.style.display = 'flex';
          currentList = 1;
      }
  });
});
// prevbtn
document.addEventListener('DOMContentLoaded', function () {
  var currentList1 = 4;

  document.getElementById('prevBtn').addEventListener('click', function () {
    var list1 = document.getElementById('list1');
    var list2 = document.getElementById('list2');
    var list3 = document.getElementById('list3');
    var list4 = document.getElementById('list4');

    if (currentList1 === 4) {
      list4.style.display = 'none';
      list3.style.display = 'flex';
      currentList1 = 3;
    } else if (currentList1 === 3) {
      list3.style.display = 'none';
      list2.style.display = 'flex';
      currentList1 = 2;
    } else if (currentList1 === 2) {
      list2.style.display = 'none';
      list1.style.display = 'flex';
      currentList1 = 1;
    }
    else if(currentList1===1)
    {
      list1.style.display ='none';
      list4.style.display ='flex';
      currentList1 = 4 ;
    }
  });
});
// mainShop.js

document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");

  navToggle.addEventListener("click", function() {
      nav.classList.toggle("active");
  });
});
