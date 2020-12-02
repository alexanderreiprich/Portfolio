"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    //create carticon with counter
    let counterDiv = document.createElement("div");
    counterDiv.id = "container_counter";
    document.getElementById("header")?.appendChild(counterDiv);
    let newh5 = document.createElement("h5");
    updateCounter();
    function updateCounter() {
        let counter = Aufgabe07.amountOfArticles();
        let cartElement = document.getElementById("container_counter");
        cartElement.hidden = (counter == 0);
        document.getElementById("container_counter")?.append(newh5);
        newh5.innerHTML = "" + counter;
    }
    Aufgabe07.updateCounter = updateCounter;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=carticon.js.map