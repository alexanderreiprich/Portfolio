"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    Aufgabe07.shoppinglist = new Array();
    loadShoppingcartList();
    function addArticleToCart(_article) {
        addToList(_article.id);
    }
    Aufgabe07.addArticleToCart = addArticleToCart;
    function removeArticleFromCart(_article, _amount) {
        removeFromList(_article.id, _amount);
    }
    Aufgabe07.removeArticleFromCart = removeArticleFromCart;
    function updateArticleInCart(_article, _amount) {
        updateList(_article.id, _amount);
    }
    Aufgabe07.updateArticleInCart = updateArticleInCart;
    function updateList(_articleid, _amount) {
        for (let i = 0; i < Aufgabe07.shoppinglist.length; i++) {
            if (Aufgabe07.shoppinglist[i].artikelid == _articleid) {
                Aufgabe07.shoppinglist[i].anzahl = _amount;
                if (Aufgabe07.shoppinglist[i].anzahl == 0) {
                    Aufgabe07.shoppinglist.splice(i, 1);
                }
                let jsonFile = JSON.stringify(Aufgabe07.shoppinglist);
                localStorage.setItem("cartcontent", jsonFile);
            }
        }
    }
    function addToList(_articleid) {
        let articleFound = false;
        for (let i = 0; i < Aufgabe07.shoppinglist.length; i++) {
            if (Aufgabe07.shoppinglist[i].artikelid == _articleid) {
                Aufgabe07.shoppinglist[i].anzahl++;
                articleFound = true;
            }
        }
        if (articleFound == false) {
            let newObject = { artikelid: _articleid, anzahl: 1 };
            Aufgabe07.shoppinglist.push(newObject);
        }
        let jsonFile = JSON.stringify(Aufgabe07.shoppinglist);
        localStorage.setItem("cartcontent", jsonFile);
    }
    function removeFromList(_articleid, _amount) {
        for (let i = 0; i < Aufgabe07.shoppinglist.length; i++) {
            if (Aufgabe07.shoppinglist[i].artikelid == _articleid) {
                Aufgabe07.shoppinglist[i].anzahl -= _amount;
                let amountLeft = Aufgabe07.shoppinglist[i].anzahl;
                if (Aufgabe07.shoppinglist[i].anzahl == 0) {
                    Aufgabe07.shoppinglist.splice(i, 1);
                }
                let jsonFile = JSON.stringify(Aufgabe07.shoppinglist);
                localStorage.setItem("cartcontent", jsonFile);
                return (amountLeft > 0 ? amountLeft : 0);
            }
        }
        return -1;
    }
    function loadShoppingcartList() {
        let jsonFile = localStorage.getItem("cartcontent");
        if (jsonFile != null) {
            Aufgabe07.shoppinglist = JSON.parse(jsonFile);
        }
    }
    Aufgabe07.loadShoppingcartList = loadShoppingcartList;
    function amountOfArticles() {
        let amount = 0;
        for (let i = 0; i < Aufgabe07.shoppinglist.length; i++) {
            amount = amount + Aufgabe07.shoppinglist[i].anzahl;
        }
        return amount;
    }
    Aufgabe07.amountOfArticles = amountOfArticles;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script_shoppingcart.js.map