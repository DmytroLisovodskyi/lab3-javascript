(function () {
    var names = [
        "Bill", "John", "Jen", "Jason", "Paul",
        "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"
    ];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === "j") {
            SpeakGoodBye(names[i]);
        } else {
            SpeakHello(names[i]);
        }
    }

    console.log("-----------------------------");
    console.log("Additional functionality:");
    console.log("Distribution by last letter:");

    var endingWithA = [];
    var otherNames = [];

    for (var i = 0; i < names.length; i++) {
        var lastLetter = names[i].charAt(names[i].length - 1).toLowerCase();

        if (lastLetter === "a") {
            endingWithA.push(names[i]);
        } else {
            otherNames.push(names[i]);
        }
    }

    console.log("Names ending with 'a':", endingWithA);
    console.log("Other names:", otherNames);

})();