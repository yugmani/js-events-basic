const mouseoverEl = document.getElementById('mouse-over');
const keydownEl = document.getElementById('keydown');
const pageLoadEl = document.querySelector('.event1');
const containerEl = document.querySelector('.container');

function pageload() {
  // alert('Page loaded Successfully!');
  document.body.backgroundColor = 'whitesmoke';
  containerEl.style.display = 'none';

  setTimeout(function() {
    pageLoadEl.style.display = 'none';
    containerEl.style.display = 'block';
  }, 2000);
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
