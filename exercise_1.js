// Написать, функцию, которая принимает в качестве аргумента объект 
// и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

function getObjArgs(obj) {    
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(`object[${key}]=<${obj[key]}>`);
        }
//         else {
//             console.log(`object[${key}]=<${obj[key]}> is not ownProperty`);
//         }
    }
}

const objParent={
    notOwnProperty: true
}

const objChild = Object.create(objParent);

objChild.a = 1;
objChild.b = "two";
objChild[3] = ["c",4];

// console.log(objChild);

getObjArgs(objChild);

