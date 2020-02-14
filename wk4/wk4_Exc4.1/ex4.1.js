// select empty div and assign it to a var
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// put an h1 inside empty div
// 1. create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Llamas are ruminates. They have one stomach with three compartments.';

// Add a pointer.
heading.style.cursor = 'pointer';

//  Add (attach) event listener to <h1> to change background color
//  Can attach click event to any visible element in the DOM- addEventListener('click')
//  can pass it a fxn or we can create an anony fxn
heading.addEventListener('click', handleHeadingCLick)

// Attach it to the DOM with appendChild. Need to attach -can't see until you attach to something
myEmptyDiv.appendChild(heading);
function handleHeadingCLick () {
  document.body.style.backgroundColor = 'yellow';
}
// console.log('heading has been clicked');
