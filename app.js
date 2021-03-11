//Sentences array
const sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
//counter for sentences
let sentenceCount = 0;
//counter for keys pressed
let keysPressed = 0;
//number of words
const words = 54;
//mistakes counter
let mistakes = 0;
//make a start time
const startTime = new Date();
//grab feedback
const feedBack = $("#feedback")
//grab #sentence
const sentence = $("#sentence");
//add sentences array to #sentence
sentence.append(sentences[0]);
//grab target-letter
const targetLetter = $("#target-letter");
//insert correct letter into target for starting position
targetLetter.append(sentences[sentenceCount][keysPressed]);
//grab keyboard upper container
const keybrdUpper = $("#keyboard-upper-container");
//hide keybrdUpper
keybrdUpper.hide();
//grab keyboard-lower-container
const keybrdLower = $("#keyboard-lower-container");
//grab body
const body = $('body');
//grab #yellow-block
const yellowBlock = $("#yellow-block");
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
    //if correct button is pressed
    if (String.fromCharCode(e.which) == sentences[sentenceCount][keysPressed]) {
        //for feedBack remove class .glyphicon-remove, text displayed "√" and add class .glyphicon-ok
        feedBack.removeClass("glyphicon-remove").text("√").addClass("glyphicon-ok");
        //keysPressed + 1
        keysPressed++;
        //targetLetter text is current expected character
        targetLetter.text(sentences[sentenceCount][keysPressed]);
        //move yellowBlock forward
        yellowBlock.animate({
            left: "+=17.5px"
        }, 0.1);
    } else {
        //for feedBack remove class .glyphicon-ok, text displayed "✗", and add class .glyphicon-remove
        feedBack.removeClass("glyphicon-ok").text("✗").addClass("glyphicon-remove");
        //mistakes add 1
        mistakes++;
    };
    //if you reach the end of a sentence
    if (sentences[sentenceCount][keysPressed] == [0][47] || [1][46] || [2][47] || [3][47]) {
        //add 1 to sentenceCount
        sentenceCount++;
        //keyspressed is 0
        keysPressed = 0;
        //change sentence text to current sentence
        sentence.text(sentences[sentenceCount]);
        //targetLetter text is current expected character
        targetLetter.text(sentences[sentenceCount][keysPressed]);
    }
});