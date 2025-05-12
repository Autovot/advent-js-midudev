const ovejas = [
    {name: "Noa", color: "azul"},
    {name: "Euge", color: "rojo"},
    {name: "Navidad", color: "rojo"},
    {name: "Ki Na Ma", color: "rojo"},
    {name: "AAAAAaaaaa", color: "rojo"},
    {name: "Nnnnnnnn", color: "rojo"}
];

// Hiper simplificada
function contarOvejas(ovejas) {
    return ovejas.filter((oveja) => oveja.color.toLowerCase() === "rojo" && oveja.name.toLowerCase().includes("n") && oveja.name.toLowerCase().includes("a"));
}

// // Solución legible 100%
// function contarOvejas(ovejas) {
//     return ovejas.filter((oveja) => {
//         if (oveja.color.toLowerCase() !== "rojo") {
//             return false;
//         }
//
//         if (!oveja.name.toLowerCase().includes("n")) {
//             return false;
//         }
//
//         if (!oveja.name.toLowerCase().includes("a")) {
//             return false;
//         }
//
//         return true;
//     });
// }


const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
