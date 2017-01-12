const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');

let lastChecked;

function handleCheck(e) {
// check if they had the shiftkey down
// and checked that they are checking it
let inBetween = false;
if(e.shiftKey && this.checked) {
   //go ahead and do what we please
   //loop over every single box
   checkboxes.forEach(checkbox => {
     console.log(checkbox);
     if (checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
     }

     if(inBetween) {
        checkbox.checked = true;
     }
   });
}

lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
