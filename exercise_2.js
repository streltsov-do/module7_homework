// Написать функцию, которая принимает в качестве аргументов строку и 
// объект, а затем проверяет есть ли у переданного объекта свойство 
// с данным именем. Функция должна возвращать true или false.

function getProperty(obj,property){
    for (let key in obj) {
//         console.log(key);
        if (key===property) {
//             console.log(true);
            return true;
        }
    }
//     console.log(false);
    return false;
}

const alo={
  gj: true,
  gl: false,
  gg: 1,
}

console.log(`<nealo>    is a property of <alo>? - ${getProperty(alo,"nealo")}`);
console.log(`<gl>       is a property of <alo>? - ${getProperty(alo,"gl")}`);