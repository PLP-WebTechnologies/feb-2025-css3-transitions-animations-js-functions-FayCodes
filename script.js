const mealInput = document.getElementById('meal');
const drinkSelect = document.getElementById('drink');
const saveBtn = document.getElementById('saveBtn');
const confirmation = document.getElementById('confirmation');
const storedData = document.getElementById('storedData');

// Load saved preferences on page load
window.onload = () => {
  const savedMeal = localStorage.getItem('meal');
  const savedDrink = localStorage.getItem('drink');
  if (savedMeal && savedDrink) {
    mealInput.value = savedMeal;
    drinkSelect.value = savedDrink;
    storedData.textContent = `Last saved: ${savedMeal} with ${savedDrink}`;
  }
};

saveBtn.addEventListener('click', () => {
  const meal = mealInput.value;
  const drink = drinkSelect.value;

  // Save to localStorage
  localStorage.setItem('meal', meal);
  localStorage.setItem('drink', drink);

  // Show confirmation with animation
  confirmation.style.display = 'inline-block';
  confirmation.classList.remove('animated');
  void confirmation.offsetWidth; // restart animation
  confirmation.classList.add('animated');

  // Show saved data
  storedData.textContent = `Saved: ${meal} with ${drink}`;
});


