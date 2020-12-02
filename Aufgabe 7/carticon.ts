namespace Aufgabe07 {

    //create carticon with counter
    let counterDiv: HTMLDivElement = document.createElement("div");
    counterDiv.id = "container_counter";
    document.getElementById("header")?.appendChild(counterDiv);
   
    let newh5: HTMLElement = document.createElement("h5");

    updateCounter();

    export function updateCounter(): void {
        
        let counter: number = amountOfArticles();

        let cartElement: HTMLElement = <HTMLElement>document.getElementById("container_counter");
        cartElement.hidden = (counter == 0);
        
        document.getElementById("container_counter")?.append(newh5);
        newh5.innerHTML = "" + counter;
        
    }

}