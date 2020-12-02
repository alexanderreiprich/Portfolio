"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let articlelist = new Array;
    main();
    async function main() {
        articlelist = await loadArticleList();
        loadShoppingCart();
    }
    function loadShoppingCart() {
        //stuff that goes above the shopping cart
        let newRemoveAllButton = document.createElement("button");
        newRemoveAllButton.innerHTML = "Remove all items";
        newRemoveAllButton.addEventListener("click", function () {
            while (Aufgabe07.shoppinglist.length != 0) {
                Aufgabe07.removeArticleFromCart(articlelist[Aufgabe07.shoppinglist[0].artikelid], Aufgabe07.shoppinglist[0].anzahl);
            }
            updateCart();
        });
        newRemoveAllButton.id = "removeAllButton";
        document.getElementById("cartcontent")?.appendChild(newRemoveAllButton);
        newRemoveAllButton.hidden = (Aufgabe07.shoppinglist.length == 0);
        //shopping cart
        for (let i = 0; i < Aufgabe07.shoppinglist.length; i++) {
            //div for article
            let newDiv = document.createElement("div");
            newDiv.id = "articleID" + i;
            document.getElementById("cartcontent")?.appendChild(newDiv);
            //rest of article
            createArticle(i);
        }
        //stuff that goes below the shopping cart
        let newBreak = document.createElement("hr");
        document.getElementById("cartcontent")?.appendChild(newBreak);
        let totalValue = 0;
        for (let i = 0; i < Aufgabe07.shoppinglist.length; i++) {
            totalValue += (articlelist[Aufgabe07.shoppinglist[i].artikelid].preis * Aufgabe07.shoppinglist[i].anzahl);
        }
        let newSubtotal = document.createElement("h1");
        newSubtotal.innerHTML = "Subtotal: " + (Math.round((totalValue) * 100) / 100) + " $";
        document.getElementById("cartcontent")?.appendChild(newSubtotal);
    }
    //function to create one article
    function createArticle(i) {
        //h3
        let newh3 = document.createElement("h3");
        newh3.innerHTML = articlelist[Aufgabe07.shoppinglist[i].artikelid].name;
        document.getElementById("articleID" + i)?.appendChild(newh3);
        //img
        let newImg = document.createElement("img");
        newImg.src = articlelist[Aufgabe07.shoppinglist[i].artikelid].bild;
        document.getElementById("articleID" + i)?.appendChild(newImg);
        //inputamount 
        let newInput = document.createElement("input");
        let newAmount = Aufgabe07.shoppinglist[i].anzahl.toString();
        newInput.type = "number";
        newInput.value = newAmount;
        newInput.min = "1";
        newInput.addEventListener("change", function () {
            if (newInput.validity.valid) {
                Aufgabe07.updateArticleInCart(articlelist[Aufgabe07.shoppinglist[i].artikelid], newInput.valueAsNumber);
                updateCart();
            }
        });
        document.getElementById("articleID" + i)?.appendChild(newInput);
        //removeSingleItemButton
        let newButton = document.createElement("button");
        newButton.innerHTML = "Remove one item from cart";
        newButton.addEventListener("click", function () {
            Aufgabe07.removeArticleFromCart(articlelist[Aufgabe07.shoppinglist[i].artikelid], 1);
            updateCart();
        });
        document.getElementById("articleID" + i)?.appendChild(newButton);
        //removeAllItemsInCart
        let newRemoveOneButton = document.createElement("button");
        newRemoveOneButton.innerHTML = "Remove entire item";
        newRemoveOneButton.addEventListener("click", function () {
            Aufgabe07.removeArticleFromCart(articlelist[Aufgabe07.shoppinglist[i].artikelid], Aufgabe07.shoppinglist[i].anzahl);
            updateCart();
        });
        document.getElementById("articleID" + i)?.appendChild(newRemoveOneButton);
        //price per unit
        let newh4unit = document.createElement("h4");
        newh4unit.innerHTML = Aufgabe07.shoppinglist[i].anzahl + " x " + articlelist[Aufgabe07.shoppinglist[i].artikelid].preis.toString() + " $";
        newh4unit.id = "pricePerUnit";
        document.getElementById("articleID" + i)?.appendChild(newh4unit);
        //total price
        let newh4total = document.createElement("h4");
        newh4total.innerHTML = (Math.round((articlelist[Aufgabe07.shoppinglist[i].artikelid].preis * Aufgabe07.shoppinglist[i].anzahl) * 100) / 100) + " $";
        newh4total.id = "priceTotal";
        document.getElementById("articleID" + i)?.appendChild(newh4total);
    }
    async function loadArticleList() {
        return await Aufgabe07.loadArticles();
    }
    function updateCart() {
        let element = document.getElementById("cartcontent");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        loadShoppingCart();
        Aufgabe07.updateCounter();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=shoppingcart.js.map