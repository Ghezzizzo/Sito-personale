var words = ['Personal trainer', 'Football team coach','Programmer'];
var counter = 0;
var word = document.getElementById("soft_skills");
setInterval(update_carousel_words, 1500);
function update_carousel_words(){
    word.innerHTML = words[counter];
    counter++;
    if(counter >= words.length){
        counter = 0;
    }
};

