let monkeysAndBananas = '🐵🍌🍌🍌🐵🍌🐵🍌'; // Ejemplo de entrada

const countMonkeysAndBananas = async (input) => {
    let itemsList = [...input];
    console.log(itemsList);
    
    let monkeyCount = 0;
    let bananaCount = 0;
    
    itemsList.forEach(element => {
        if (element === '🐵') {
            monkeyCount += 1;
        } else if (element === '🍌') {
            bananaCount += 1;
        }
    });
    
    console.log(`Hay ${monkeyCount} monos y ${bananaCount} bananas.`);
    
    const bananasPerMonkey = prompt("¿Cuántas bananas come un mono?: ");
    
    if (bananaCount >= monkeyCount * bananasPerMonkey) {
        console.log(`¡Hay suficientes bananas para los monos! 🍌`);
    } else {
        console.log(`¡Oh no! ¡No hay suficientes bananas para los monos! 😭`);
    }
}

countMonkeysAndBananas(monkeysAndBananas);
