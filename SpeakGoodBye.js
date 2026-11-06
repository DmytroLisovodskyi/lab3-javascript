(function (window) {
    var speakWord = "Goodbye";

    function speak(name) {
        console.log(speakWord + " " + name);
    }

    window.SpeakGoodBye = speak;

})(window);