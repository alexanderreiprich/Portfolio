"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    console.log(Aufgabe07.shoppinglist);
    let buttonShowReal = document.getElementById("button_real");
    buttonShowReal.setAttribute("category", "real");
    let buttonShowNotReal = document.getElementById("button_notreal");
    buttonShowNotReal.setAttribute("category", "notreal");
    let buttonShowAll = document.getElementById("everything");
    buttonShowAll.setAttribute("category", "all");
    let buttonShowNothing = document.getElementById("button_nothing");
    buttonShowNothing.setAttribute("category", "void");
    buttonShowReal.addEventListener("click", function () {
        hide(buttonShowReal.getAttribute("category"));
    });
    buttonShowNotReal.addEventListener("click", function () {
        hide(buttonShowNotReal.getAttribute("category"));
    });
    buttonShowAll.addEventListener("click", function () {
        hide(buttonShowAll.getAttribute("category"));
    });
    buttonShowNothing.addEventListener("click", function () {
        hide(buttonShowNothing.getAttribute("category"));
    });
    getArticles();
    async function getArticles() {
        let artikel = await Aufgabe07.loadArticles();
        for (let i = 0; i < artikel.length; i++) {
            //div
            let newDiv = document.createElement("div");
            newDiv.id = "articleID" + i;
            document.getElementById(artikel[i].typ)?.appendChild(newDiv);
            //h3
            let newh3 = document.createElement("h3");
            newh3.innerHTML = artikel[i].name;
            document.getElementById("articleID" + i)?.appendChild(newh3);
            //img
            let newImg = document.createElement("img");
            newImg.src = artikel[i].bild;
            document.getElementById("articleID" + i)?.appendChild(newImg);
            //p
            let newP = document.createElement("p");
            newP.innerHTML = artikel[i].beschreibung;
            document.getElementById("articleID" + i)?.appendChild(newP);
            //h4
            let newh4 = document.createElement("h4");
            newh4.innerHTML = artikel[i].preis + "$";
            document.getElementById("articleID" + i)?.appendChild(newh4);
            //button
            let newButton = document.createElement("button");
            newButton.innerHTML = artikel[i].button_text;
            if (artikel[i].name != "lobster") {
                newButton.addEventListener("click", function () {
                    Aufgabe07.addArticleToCart(artikel[i]);
                    Aufgabe07.updateCounter();
                });
            }
            document.getElementById("articleID" + i)?.appendChild(newButton);
        }
    }
    function hide(_category) {
        let keys = Object.keys(Aufgabe07.Category);
        for (let index = 0; index < keys.length; index++) {
            let element = document.getElementById("complete_" + keys[index]);
            if (_category != keys[index] && _category != "all") {
                element.hidden = true;
            }
            else {
                element.hidden = false;
            }
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map