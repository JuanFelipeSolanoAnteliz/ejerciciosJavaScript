// Ingresar nombres: Sam Frodo Legolas
// Sam y Frodo están juntos, ¡Frodo está a salvo!

// Ingresar nombres: Sam Orco Frodo
// Sam y Frodo están separados, ¡Frodo está en peligro!
const names = 'Sam pepe Orco Frodo'

const findFrodo = async(names)=>{   
    let namesLits = names.split(' ');
    console.log(namesLits);
    let frodoSafe = false; 
    namesLits.forEach((element,index) => {
        if(element == 'Sam' & index != 0 ){
            console.log('hola, soy Sam',index)
            if(namesLits[index+1] == 'Frodo' || namesLits[index-1] == 'Frodo'){
                frodoSafe  = true;
            }
        }
        else if( element == 'Sam' & index == 0){
            console.log('sam en 0')
            if(namesLits[index+1] == 'Frodo'){
            frodoSafe  = true;
            }
        }
    });
    if(!frodoSafe){
        console.log('Frodo es alejado, cuidado')
    }
    else if(frodoSafe){
        console.log('Frodo esta a salvo')
    } 
}

await findFrodo(names)