namespace Aufgabe07 {

export enum Category {
    real = "real", notreal = "notreal"
}

export interface Artikel {

    name: string;
    id: number;
    beschreibung: string;
    preis: number;
    bild: string;
    button_text: string;
    typ: Category;

}

export interface Warenkorbobjekt {

    artikelid: number;
    anzahl: number;

}

export async function loadArticles(): Promise<Artikel[]> {

    return await loadData("data.json");
    

}

async function loadData(_path: string): Promise<Artikel[]> {

    return await fetch(_path).then(res => res.json());

}

} 