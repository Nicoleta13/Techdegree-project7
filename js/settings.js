//takes references to the new button and the heading
var onOff = document.getElementById('myonoffswitch').checked;
var onOff1 = document.getElementById('myonoffswitch1').checked;
var timezone = document.querySelector('#timezone').value;
var save = document.getElementById('saveBtn');

//save to localStorage
function mySettings() {
localStorage.setItem('onOff', onOff);
localStorage.setItem('onOff1', onOff1);
localStorage.setItem('timezone', timezone);
}

let checked;
let checked1;

if(localStorage.getItem('onOff') === true) {
  checked = true;
} else {
  checked = false;
}
// onOff = checked;

if(localStorage.getItem('onOff1') === true) {
  checked1 = true;
} else {
  checked1 = false;
}
// onOff1 = checked1;

save.addEventListener('click', ()=> {
    mySettings();
    onOff = checked;
    onOff1 = checked1;
    console.log('Your data have been saved');
});
