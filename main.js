
let numbers=prompt("enter number with ONLY one space betwen them")
// let numbers = '1 5 17'
let numberList = numbers.split(' ');
console.log(numberList)

const numbersIdentifier = async(numberList)=>{
    let smallestNumber = parseInt(numberList[0])
    numberList.forEach(number => {
        let parsedNumber = parseInt(number)
        if(parsedNumber < smallestNumber){
            smallestNumber = number
        }
    });
    console.log(`the smallest number is: ${smallestNumber}`)
}
numbersIdentifier(numberList)


