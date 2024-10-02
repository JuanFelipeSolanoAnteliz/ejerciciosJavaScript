let names =prompt("ingrese nombres separados por espacios")
let nameList = names.split(' ');
const saludos = async(names)=>{
    nameList.forEach(name => {
        console.log(`!hola ${name}¡`);
    });
}
saludos()
