// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  one()
  two()
  three()
  four()

  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we add an event listener to it:
  one.addEventListener('mouseenter', makeBlue)
  // Finally, we add one to make the colour white again
  one.addEventListener('mouseleave', makeWhite)
}

// CREATE FUNCTION two HERE
function two () {
  var one = document.getElementById('two');
  one.addEventListener('mouseenter', makeGreen);
  one.addEventListener('mouseleave', makeWhite);
}
// CREATE FUNCTION three HERE
function three () {
  var one = document.getElementById('three');
  one.addEventListener('mouseenter', makeGray);
  one.addEventListener('mouseleave', makeWhite);
}

// CREATE FUNCTION four HERE
function four () {
  var one = document.getElementById('four');
  one.addEventListener('mouseenter', makeBlack);
  one.addEventListener('mouseleave', makeWhite);
}

// Changes the background color of event's target
function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}
function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}
function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green'
}
function makeBlack (evt) {
  evt.target.style.backgroundColor = 'black'
}
function makeGray (evt) {
  evt.target.style.backgroundColor = 'gray'
}
