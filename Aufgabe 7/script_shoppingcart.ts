namespace Aufgabe07 {

export let shoppinglist: Warenkorbobjekt[] = new Array();

loadShoppingcartList();

export function addArticleToCart(_article: Artikel): void {

    addToList(_article.id);
    
}

export function removeArticleFromCart(_article: Artikel, _amount: number): void {

    removeFromList(_article.id, _amount);

}

export function updateArticleInCart(_article: Artikel, _amount: number): void {

    updateList(_article.id, _amount);

}

function updateList(_articleid: number, _amount: number): void {

    for (let i: number = 0; i < shoppinglist.length; i++) {

        if (shoppinglist[i].artikelid == _articleid) {

            shoppinglist[i].anzahl = _amount;

            if (shoppinglist[i].anzahl == 0) {
                shoppinglist.splice(i, 1);
            }

            let jsonFile: string = JSON.stringify(shoppinglist);
            localStorage.setItem("cartcontent", jsonFile);

        }

    }
    
}

function addToList(_articleid: number): void {

    let articleFound: boolean = false;

    for (let i: number = 0; i < shoppinglist.length; i++) {

        if (shoppinglist[i].artikelid == _articleid) {
            shoppinglist[i].anzahl++;
            articleFound = true;
        }

    }

    if (articleFound == false) {
    let newObject: Warenkorbobjekt = {artikelid: _articleid, anzahl: 1};
    shoppinglist.push(newObject);
    }

    let jsonFile: string = JSON.stringify(shoppinglist);
    localStorage.setItem("cartcontent", jsonFile);
}

function removeFromList(_articleid: number, _amount: number): number {

    for (let i: number = 0; i < shoppinglist.length; i++) {

        if (shoppinglist[i].artikelid == _articleid) {

            shoppinglist[i].anzahl -= _amount;
            let amountLeft: number = shoppinglist[i].anzahl;

            if (shoppinglist[i].anzahl == 0) {
                shoppinglist.splice(i, 1);
            }

            let jsonFile: string = JSON.stringify(shoppinglist);
            localStorage.setItem("cartcontent", jsonFile);

            return (amountLeft > 0 ? amountLeft : 0);

        }

    }

    return -1;

}

export function loadShoppingcartList(): void {
    
    let jsonFile: string = <string>localStorage.getItem("cartcontent");
    if (jsonFile != null) {

        shoppinglist = JSON.parse(jsonFile);

    }
    
}

export function amountOfArticles(): number {

    let amount: number = 0;

    for (let i: number = 0; i < shoppinglist.length; i++) {

        amount = amount + shoppinglist[i].anzahl;

    }

    return amount;
}


}