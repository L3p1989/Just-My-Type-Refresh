//Sentences array
const sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
//counter for sentences
let sentenceCount = 0;
//counter for keys pressed
let keyPress = 0;
//grab #sentence
const sentence = $("#sentence");
//add sentences array to #sentence
sentence.append(sentences[sentenceCount]);
//grab target-letter
const targetLetter = $("#target-letter");
//insert correct letter into target for starting position
targetLetter.append(sentences[0][0]);
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
    //select id by key pressed and animate key on screen by changing styles for 50ms
    $(`#${e.which}`).animate({
        padding: "26px",
        borderRadius: "8px"
    }, 50,
    function() {
        $(this).animate({
            padding: "24px",
            borderRadius: "6px"
        }, 50);
    });
});