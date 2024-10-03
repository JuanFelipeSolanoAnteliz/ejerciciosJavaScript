let usuarios = 'Ana Maria Lucia'; 

const showChatStatus = (input) => {
    let nombres = input.split(' '); 
    let cantidad = nombres.length;

    if (cantidad === 0) {
        console.log('There are no one online');
    } else if (cantidad === 1) {
        console.log(`${nombres[0]} is online.`);
    } else if (cantidad === 2) {
        console.log(`${nombres[0]} y ${nombres[1]} are online.`);
    } else {
        let conectadas = nombres.slice(0, 2).join(', '); 
        let extras = cantidad - 2; 
        console.log(`${conectadas} and ${extras} people are online.`);
    }
}

showChatStatus(usuarios);
