// Valori costanti--------------------------------------------------------------
var minCheckedIngredients = 2;

var burgerBaseCost = 6;

var discount = 0.2;

var coupons = ['evil20', 'garm20', 'wolf20', 'kel20']
//------------------------------------------------------------------------------

var burgerName = document.getElementsByClassName('burger-name')[0];

var flagName = false;

var flagMinIngredients = false;

var flagTot = false;

var ingredients = document.getElementsByClassName('ingredients-list')[0].getElementsByTagName('input')

var counterCheckedIngredients;

var ingredientsPrice = 0;

var totalPrice;

var totalPriceHTML = document.getElementById('total');

var couponInput = document.getElementsByClassName('coupon')[0].getElementsByTagName('input')[0];

var couponFlag;

var discountedPrice = 0;

var finalPrice;

document.getElementsByTagName('button')[0].addEventListener('click' , function(){
  flagName = false;

  if (burgerName.value) {
    flagName = true;
  }else {
    alert('You must name your burger!');
  }

  counterCheckedIngredients = 0;

  ingredientsPrice = 0;

  for (var i = 0; i < ingredients.length; i++) {
    if (ingredients[i].checked) {
      counterCheckedIngredients++;

      ingredientsPrice += parseFloat(ingredients[i].value);
    }
  }

  flagMinIngredients = false;

  if (counterCheckedIngredients >= minCheckedIngredients) {
    flagMinIngredients = true;
  } else {
    alert('You have to choose at least two ingredients!');
  }

  if (coupons.indexOf(couponInput.value.toLowerCase()) !== -1) {
    discountedPrice = (burgerBaseCost + ingredientsPrice) * discount;
  }

  finalPrice = (burgerBaseCost + ingredientsPrice) - discountedPrice;

  if (flagName && flagMinIngredients) {
    totalPriceHTML.innerText = '$ ' + finalPrice;

    alert(finalPrice)
  }
});
