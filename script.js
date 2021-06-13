const mouseoverEl = document.getElementById('mouse-over');
const keydownEl = document.getElementById('keydown');

function pageload() {
  alert('Page loaded Successfully!');
  //refersh the web page and check it
}

function myOnclick() {
  alert('Welcome to my webPage!');
}

function myKeyDown() {
  keydownEl.style.backgroundColor = 'blue';
  keydownEl.style.color = 'white';
}

function myMouseOver() {
  mouseoverEl.style.backgroundColor = 'lightyellow';
  mouseoverEl.style.color = 'red';
}

function myMouseOut() {
  mouseoverEl.style.backgroundColor = 'lightblue';
  mouseoverEl.style.color = 'white';
}
