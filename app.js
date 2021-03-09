//grab keyboard upper container
const keybrdUpper = $("#keyboard-upper-container");
//hide keybrdUpper
keybrdUpper.hide();
//grab keyboard-lower-container
const keybrdLower = $("#keyboard-lower-container");
//grab body
const body = $('body')
//keydown function
body.keydown((e) => {
    //if shift is pressed shows keybrdUpper and hides keybrdLower
    e.keyCode == 16 ? keybrdUpper.toggle() && keybrdLower.toggle() : null
})
$(this).keyup((e) => {
    //if shift is let go hides keybrdUpper and shows keybrdLower
    e.keyCode == 16 ? keybrdUpper.toggle() && keybrdLower.toggle() : null
});