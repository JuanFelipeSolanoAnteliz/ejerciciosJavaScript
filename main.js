let pets = '🐶🐱🐶🐱🐱🐶🐶'; 

const groupPets = async (input) => {
    let petsList = [...input];
    console.log(petsList);
    
    let dogs = [];
    let cats = [];
    
    petsList.forEach(pet => {
        if (pet === '🐶') {
            dogs.push(pet);
        } else if (pet === '🐱') {
            cats.push(pet);
        }
    });
    
    let groupedPets = [...dogs, ...cats];
    console.log(`Resultado: ${groupedPets.join('')}`);
}

groupPets(pets);
