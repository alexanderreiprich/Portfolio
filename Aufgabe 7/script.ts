namespace Aufgabe07 {

    console.log(shoppinglist);

    let buttonShowReal: HTMLElement = <HTMLElement>document.getElementById("button_real");
    buttonShowReal.setAttribute("category", "real");
    let buttonShowNotReal: HTMLElement = <HTMLElement>document.getElementById("button_notreal");
    buttonShowNotReal.setAttribute("category", "notreal");
    let buttonShowAll: HTMLElement = <HTMLElement>document.getElementById("everything");
    buttonShowAll.setAttribute("category", "all");
    let buttonShowNothing: HTMLElement = <HTMLElement>document.getElementById("button_nothing");
    buttonShowNothing.setAttribute("category", "void");

    buttonShowReal.addEventListener("click", function(): void {
        hide(<string>buttonShowReal.getAttribute("category")); 
    });
    buttonShowNotReal.addEventListener("click", function(): void {
        hide(<string>buttonShowNotReal.getAttribute("category")); 
    });
    buttonShowAll.addEventListener("click", function(): void {
        hide(<string>buttonShowAll.getAttribute("category")); 
    });
    buttonShowNothing.addEventListener("click", function(): void {
        hide(<string>buttonShowNothing.getAttribute("category"));
    });



    getArticles();

    async function getArticles(): Promise<void> {

        let artikel: Artikel[] = await loadArticles();

        for (let i: number = 0; i < artikel.length; i++) {
        
            //div
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "articleID" + i;
            document.getElementById(artikel[i].typ)?.appendChild(newDiv);
    
            //h3
            let newh3: HTMLElement = document.createElement("h3");
            newh3.innerHTML = artikel[i].name;
            document.getElementById("articleID" + i)?.appendChild(newh3);
    
            //img
            let newImg: HTMLImageElement = document.createElement("img");
            newImg.src = artikel[i].bild;
            document.getElementById("articleID" + i)?.appendChild(newImg);
    
            //p
            let newP: HTMLParagraphElement = document.createElement("p");
            newP.innerHTML = artikel[i].beschreibung;
            document.getElementById("articleID" + i)?.appendChild(newP);
    
            //h4
            let newh4: HTMLElement = document.createElement("h4");
            newh4.innerHTML = artikel[i].preis + "$";
            document.getElementById("articleID" + i)?.appendChild(newh4);
    
            //button
            let newButton: HTMLButtonElement = document.createElement("button");
            newButton.innerHTML = artikel[i].button_text;
            if (artikel[i].name != "lobster") {
                newButton.addEventListener("click", function (): void {
                    addArticleToCart(artikel[i]); 
                    updateCounter();
                });

    
            }
            document.getElementById("articleID" + i)?.appendChild(newButton);
    
        }
    }



    function hide(_category: String): void {

        let keys: String[] = Object.keys(Category);

        for (let index: number = 0; index < keys.length; index++) {

            let element: HTMLElement = <HTMLElement>document.getElementById("complete_" + keys[index]);

            if (_category != keys[index] && _category != "all") { 

                element.hidden = true;

            }
            else {

                element.hidden = false;

            }

        }

    }

    

}