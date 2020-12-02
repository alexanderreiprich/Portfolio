"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let Category;
    (function (Category) {
        Category["real"] = "real";
        Category["notreal"] = "notreal";
    })(Category = Aufgabe07.Category || (Aufgabe07.Category = {}));
    async function loadArticles() {
        return await loadData("data.json");
    }
    Aufgabe07.loadArticles = loadArticles;
    async function loadData(_path) {
        return await fetch(_path).then(res => res.json());
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=data.js.map