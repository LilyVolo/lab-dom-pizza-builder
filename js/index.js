// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}
function renderButtons() {
  const buttonSelector = {
    pepperoni: ".btn-pepperoni",
    mushrooms: ".btn-mushrooms",
    greenPeppers: ".btn-green-peppers",
    whiteSauce: ".btn-sauce",
    glutenFreeCrust: ".btn-crust"
  }
  for(const key in state) {
    if (state[key]) {
      document.querySelector(buttonSelector[key]).classList.add("active")

    } else {
    document.querySelector(buttonSelector[key]).classList.remove("active");
    }
  }
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
      renderPrice(ingredients.pepperoni.name, ingredients.pepperoni.price)
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });


}

function renderGreenPeppers() {
  
  document.querySelectorAll('.green-pepper').forEach((onePeper) => {
    if (state.greenPeppers) {
      onePeper.style.visibility = 'visible';
    } else {
      onePeper.style.visibility = 'hidden';
    }
  });


}

function renderWhiteSauce() {

  let b =document.querySelector('.sauce')
    if (state.whiteSauce) {
      b.classList.add('sauce-white')
    } else {
      b.classList.remove('sauce-white')
    }
  


}

function renderGlutenFreeCrust() {
  let b =document.querySelector('.crust')
 
    if (state.glutenFreeCrust) {
      b.classList.add('crust-gluten-free')
 
    } else {
      b.classList.remove('crust-gluten-free')
    }
}



function renderPrice() {
  const allToppings = document.querySelector('.panel.price ul');
  const priceElement = document.querySelector('.panel.price strong');
  let total = basePrice;

  allToppings.innerHTML = '';
  for (const key in state) {
    if (state[key]) {
      const ingredient = ingredients[key];
      console.log(ingredients[key].name)
      const li = document.createElement('li');
      let n = ingredients[key].name;
      let p = ingredients[key].price
      li.textContent = `${n} ${p}`;

      allToppings.appendChild(li);
      total += ingredient.price;
    }
  }
  priceElement.textContent = `$${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;

  renderEverything();

  
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
  console.log( state.mushrooms)
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', function () {
  if(state.whiteSauce === false) {
    state.whiteSauce = true;
    renderEverything();
   
  }
else {
  state.whiteSauce = !state.whiteSauce
  state.whiteSauce = false;
    renderEverything();
}

});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', function () {
  if(state.glutenFreeCrust === false) {
    state.glutenFreeCrust = true;
    renderEverything();
   
  }
else {
  state.glutenFreeCrust = !state.glutenFreeCrust
  state.glutenFreeCrust = false;
    renderEverything();

  }

});