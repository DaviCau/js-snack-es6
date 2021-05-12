/* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. */

const biciclette = [
    {
        nome: "TheBike",
        peso: 21
    },
    {
        nome: "LighterBike",
        peso: 17
    },
    {
        nome: "SuperBike",
        peso: 24
    }
];

console.log("Biciclette:", biciclette);

let {peso: pesoMinore} = biciclette[0];
let piuLeggera = biciclette[0];

for (let i = 1; i < biciclette.length; i++) {

    const {peso} = biciclette[i]
    if (peso < pesoMinore) {
        pesoMinore = peso;
        piuLeggera = biciclette[i];
    }
    
}

const messaggio = `La bicicletta più leggera è la ${piuLeggera.nome},
che pesa ${piuLeggera.peso} kg.`

console.log(messaggio);