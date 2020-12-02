namespace Aufgabe07 {

    let articlelist: Artikel[] = new Array;

    main();

    async function main(): Promise<void> {

        articlelist = await loadArticleList();
        loadShoppingCart();

    }

    function loadShoppingCart(): void {

        //stuff that goes above the shopping cart
        let newRemoveAllButton: HTMLButtonElement = document.createElement("button");
        newRemoveAllButton.innerHTML = "Remove all items";

        newRemoveAllButton.addEventListener("click", function (): void {
         while (shoppinglist.length != 0) {
            removeArticleFromCart(articlelist[shoppinglist[0].artikelid], shoppinglist[0].anzahl);
         }
         updateCart();
         });
        newRemoveAllButton.id = "removeAllButton";
        document.getElementById("cartcontent")?.appendChild(newRemoveAllButton);

        newRemoveAllButton.hidden = (shoppinglist.length == 0);


        //shopping cart
        for (let i: number = 0; i < shoppinglist.length; i++) {
        
         //div for article
         let newDiv: HTMLDivElement = document.createElement("div");
         newDiv.id = "articleID" + i;
         document.getElementById("cartcontent")?.appendChild(newDiv);
        
         //rest of article
         createArticle(i); 

        }


        //stuff that goes below the shopping cart

        let newBreak: HTMLHRElement = document.createElement("hr");
        document.getElementById("cartcontent")?.appendChild(newBreak);

        let totalValue: number = 0; 
        for (let i: number = 0; i < shoppinglist.length; i++) {
            totalValue += (articlelist[shoppinglist[i].artikelid].preis * shoppinglist[i].anzahl);
        }

        let newSubtotal: HTMLElement = document.createElement("h1");
        newSubtotal.innerHTML = "Subtotal: " + (Math.round((totalValue) * 100) / 100) + " $";
        document.getElementById("cartcontent")?.appendChild(newSubtotal);
    }

    //function to create one article
    function createArticle(i: number): void {

         //h3
         let newh3: HTMLElement = document.createElement("h3");
         newh3.innerHTML = articlelist[shoppinglist[i].artikelid].name;
         document.getElementById("articleID" + i)?.appendChild(newh3);
        
         //img
         let newImg: HTMLImageElement = document.createElement("img");
         newImg.src = articlelist[shoppinglist[i].artikelid].bild;
         document.getElementById("articleID" + i)?.appendChild(newImg);

         //inputamount 
         let newInput: HTMLInputElement = document.createElement("input");
         let newAmount: string = shoppinglist[i].anzahl.toString();
         newInput.type = "number";
         newInput.value = newAmount;
         newInput.min = "1";
         newInput.addEventListener("change", function (): void {
            if (newInput.validity.valid) {
                updateArticleInCart(articlelist[shoppinglist[i].artikelid], newInput.valueAsNumber);
                updateCart();
            }
         });
         document.getElementById("articleID" + i)?.appendChild(newInput);

         //removeSingleItemButton
         let newButton: HTMLButtonElement = document.createElement("button");
         newButton.innerHTML = "Remove one item from cart";

         newButton.addEventListener("click", function (): void {
         removeArticleFromCart(articlelist[shoppinglist[i].artikelid], 1);
         updateCart();
         });
         document.getElementById("articleID" + i)?.appendChild(newButton);

         //removeAllItemsInCart
         let newRemoveOneButton: HTMLButtonElement = document.createElement("button");
         newRemoveOneButton.innerHTML = "Remove entire item";
         newRemoveOneButton.addEventListener("click", function (): void {
            removeArticleFromCart(articlelist[shoppinglist[i].artikelid], shoppinglist[i].anzahl);
            updateCart();
         });
         document.getElementById("articleID" + i)?.appendChild(newRemoveOneButton);

         //price per unit
         let newh4unit: HTMLElement = document.createElement("h4");
         newh4unit.innerHTML =  shoppinglist[i].anzahl + " x " + articlelist[shoppinglist[i].artikelid].preis.toString() + " $";
         newh4unit.id = "pricePerUnit";
         document.getElementById("articleID" + i)?.appendChild(newh4unit);
             
         //total price
         let newh4total: HTMLElement = document.createElement("h4");
         newh4total.innerHTML = (Math.round((articlelist[shoppinglist[i].artikelid].preis * shoppinglist[i].anzahl) * 100) / 100)  + " $";
         newh4total.id = "priceTotal";
         document.getElementById("articleID" + i)?.appendChild(newh4total);

    }

    async function loadArticleList(): Promise<Artikel[]> {

        return await loadArticles();

    }

    function updateCart(): void {

        let element: HTMLElement = <HTMLElement>document.getElementById("cartcontent");
        while (element.firstChild) {
            element.removeChild(element.firstChild);

         }
        loadShoppingCart();
        updateCounter();
    }

}