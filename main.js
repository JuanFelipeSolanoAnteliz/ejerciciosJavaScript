let fruits ='🍎🍎🍐🍑🍎🍑'

const countFruits = async (fruits)=> {
    let fruitsList = [...fruits];
    console.log(fruitsList);
    let appleCount = 0;
    let pearCount = 0;
    let peachCount = 0;
    fruitsList.forEach(element => {
        if (element == '🍎' ){
            appleCount+=1;
        }    
        else if (element == '🍐' ){
            pearCount+=1;
        }
        else if (element == '🍑' ){
            peachCount+=1;
        }
    });
    console.log( ` there is ${appleCount} apples, ${pearCount} pears, ${peachCount} peachs `)
}

countFruits(fruits);