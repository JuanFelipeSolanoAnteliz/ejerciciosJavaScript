let numbersPropmt = prompt("enter numbers with ONLY one space between them");
let numbersList = numbersPropmt.split(' ');
console.log(numbersList)

const operation = async (numbersList)=>{
    let result = 0;
    numbersList.forEach(element => {
        let number = parseInt(element);
        result += number;
    });
    return result;
}

console.log(await operation(numbersList))
