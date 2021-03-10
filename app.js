//grab keyboard upper container
const keybrdUpper = $("#keyboard-upper-container");
//hide keybrdUpper
keybrdUpper.hide();
//grab keyboard-lower-container
const keybrdLower = $("#keyboard-lower-container");
//grab body
const body = $('body')
//keydown event listener
body.keydown((e) => {
    //if shift is pressed shows keybrdUpper and hides keybrdLower
    e.keyCode == 16 ? keybrdUpper.show() && keybrdLower.hide() : null
});
//keyup event listener
$(this).keyup((e) => {
    //if shift is let go hides keybrdUpper and shows keybrdLower
    e.keyCode == 16 ? keybrdUpper.hide() && keybrdLower.show() : null
});
//keypress event listener
body.keypress((e) => {
    $(`#${e.which}`).animate({
        padding: "26px",
        borderRadius: "8px"
    }, 50,
    function() {
        $(this).animate({
            padding: "24px",
            borderRadius: "6px"
        }, 50);
    })
})