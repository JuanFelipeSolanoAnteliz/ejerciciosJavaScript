let elements = 'que si cristian que si'
let elementToFind = 'si'

const findElement = async (elements, search) =>{
    let elementsList = elements.split(' ');
    console.log(elementsList)
    let auth = false;
    elementsList.forEach((element, index) => {
        if(element === search){
            console.log(`"${element}" is in the index number: ${index}`);
            auth = true;
        }
    });
    if( auth === false){
        console.log(`${search} is not the words that were provided`);
    }
}
await findElement(elements,elementToFind);