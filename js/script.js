var burgerName = document.getElementsByClassName('burger-name')[0];

var okGoTot;

var ingredients = document.getElementsByClassName('ingredients-list')[0].getElementsByTagName('input')

var counterCheckedIngredients;

var totalPrice = 5.30;

var totalPriceHTML = document.getElementById('total');

var coupons = ['evil20', 'garm20', 'wolf20', 'kel20']

var couponInput = document.getElementsByClassName('coupon')[0].getElementsByTagName('input')[0];

var couponFlag;

document.getElementsByTagName('button')[0].addEventListener('click' , function(){
  okGoTot = false;

  if (burgerName.value) {
    okGoTot = true;
  }else {
    alert('You must name your burger!');

    okGoTot = false;
  }

  counterCheckedIngredients = 0;

  totalPrice = 5.30;

  for (var i = 0; i < ingredients.length; i++) {
    if (ingredients[i].checked) {
      counterCheckedIngredients++;

      totalPrice += parseFloat(ingredients[i].value);
    }
  }

  if (counterCheckedIngredients >= 2) {
    okGoTot = true;
  } else {
    okGoTot = false;

    alert('You have to choose at least two ingredients!');
  }

  couponFlag = false;

  for (var i = 0; i < coupons.length; i++) {
    if (coupons[i] === couponInput.value.toLowerCase()) {
      couponFlag = true;
    }else if (couponInput.value === '') {
      console.log('Coupon non inserito.');
    }else {
      couponFlag = false;
    }
  }

  if (couponFlag) {
    totalPrice = totalPrice * 0.8;
  }else {
    alert('Coupon non valido.')
  }

  if (okGoTot) {
    totalPriceHTML.innerText = '$ ' + totalPrice;

    alert(totalPrice)
  }
});
