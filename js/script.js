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

var ingredients = document.getElementsByClassName('ingredients-list')[0].getElementsByTagName('input');

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

  discountedPrice = 0;

  if (coupons.indexOf(couponInput.value.toLowerCase()) !== -1) {
    discountedPrice = (burgerBaseCost + ingredientsPrice) * discount;
  }

  finalPrice = (burgerBaseCost + ingredientsPrice) - discountedPrice;

  if (flagName && flagMinIngredients) {
    totalPriceHTML.innerText = '$ ' + finalPrice;

    alert(finalPrice)
  }

  console.log(ingredientsPrice);
});

var ingredientHTML = document.getElementsByClassName('ingredient');

var checkSign = document.getElementsByTagName('i');

ingredientHTML[0].addEventListener('click' , function(){
  if (ingredients[0].checked) {
    ingredients[0].checked = false;

    checkSign[0].classList.add('hidden');
  }else {
    ingredients[0].checked = true;

    checkSign[0].classList.remove('hidden');
  }
});

ingredientHTML[1].addEventListener('click' , function(){
  if (ingredients[1].checked) {
    ingredients[1].checked = false;

    checkSign[1].classList.add('hidden');
  }else {
    ingredients[1].checked = true;

    checkSign[1].classList.remove('hidden');
  }
});

ingredientHTML[2].addEventListener('click' , function(){
  if (ingredients[2].checked) {
    ingredients[2].checked = false;

    checkSign[2].classList.add('hidden');
  }else {
    ingredients[2].checked = true;

    checkSign[2].classList.remove('hidden');
  }
});

ingredientHTML[3].addEventListener('click' , function(){
  if (ingredients[3].checked) {
    ingredients[3].checked = false;

    checkSign[3].classList.add('hidden');
  }else {
    ingredients[3].checked = true;

    checkSign[3].classList.remove('hidden');
  }
});

ingredientHTML[4].addEventListener('click' , function(){
  if (ingredients[4].checked) {
    ingredients[4].checked = false;

    checkSign[4].classList.add('hidden');
  }else {
    ingredients[4].checked = true;

    checkSign[4].classList.remove('hidden');
  }
});

ingredientHTML[5].addEventListener('click' , function(){
  if (ingredients[5].checked) {
    ingredients[5].checked = false;

    checkSign[5].classList.add('hidden');
  }else {
    ingredients[5].checked = true;

    checkSign[5].classList.remove('hidden');
  }
});
