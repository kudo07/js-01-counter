// document.addEventListener('DOMContentLoaded', function () {
//   const counterValueEl = document.querySelector('.counter__value');
//   const increaseButtonEl = document.querySelector('.counter__button--increase');
//   const decreaseButtonEl = document.querySelector('.counter__button--decrease');
//   const resetButtonEl = document.querySelector('.counter__reset--button');
//   const counterTitleEl = document.querySelector('.counter__title');
//   increaseButtonEl.addEventListener('click', function () {
//     let currentValue = parseInt(counterValueEl.textContent);
//     console.log(typeof currentValue);
//     currentValue += 1;
//     counterValueEl.textContent = currentValue;
//   });
// });
// after using the  defer

const counterEl = document.querySelector('.counter');
const counterTitleEl = document.querySelector('.counter__title');
const counterValueEl = document.querySelector('.counter__value');
const resetButtonEl = document.querySelector('.counter__reset-button');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const increaseButtonEl = document.querySelector('.counter__button--increase');

//reset the button
resetButtonEl.addEventListener('click', () => {
  // set counter value to 0
  counterValueEl.textContent = 0;

  // reset the background color
  counterEl.classList.remove('counter--limit');

  // reset the counter title
  counterTitleEl.textContent = 'Fancy Counter';
  // enable increase and decrease buttons
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  // unfocus (blur) reset button
  resetButtonEl.blur();
});

decreaseButtonEl.addEventListener('click', () => {
  // get the current value
  const currentValue = counterValueEl.textContent;

  // convert value value to number type
  const currentValueAsNumber = +currentValue;

  // decrease the current value when the button is click
  const newValue = currentValue - 1;
  if (newValue < 0) {
    newValue = 0;
  }

  // update the counter with new value
  counterValueEl.textContent = newValue;

  //unfocus the blur button

  decreaseButtonEl.blur();
});

const increaseCounter = () => {
  // get current value of counter
  const currentValue = counterValueEl.textContent;

  // console.log(typeof currentValue);=> string
  // convert the value into the number
  const currentValueAsNumber = +currentValue;

  // increment by 1
  let newValue = currentValueAsNumber + 1;
  console.log(newValue);
  // check if the value is greater than 5 or not
  if (newValue > 5) {
    // if it is , forcr it to be 5 instead
    newValue = 5;

    //give visual indicator that limit has been reached
    counterEl.classList.add('counter--limit');

    // update the counter title
    counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for >5';

    // disabled increase and decrease button
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }
  // setcounter element with new value
  counterValueEl.textContent = newValue;

  // unfocus(blur) button
  increaseButtonEl.blur();
};
increaseButtonEl.addEventListener('click', increaseCounter);
document.addEventListener('keydown', increaseCounter);
