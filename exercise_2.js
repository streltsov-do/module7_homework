// Написать функцию, которая принимает в качестве аргументов строку и 
// объект, а затем проверяет есть ли у переданного объекта свойство 
// с данным именем. Функция должна возвращать true или false.

// * Неоптимальное решение!
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

//////////////////////////////////////////////////////////////////////
// Оптимальное решение
const alo1={
    gj: true,
    gl: false,
    gg: 1,
  }

function getPropertyBest(obj,property){
    return property in obj;
}

console.log(`<nealo>    is a property of <alo1>? - ${getPropertyBest(alo1,"nealo")}`);
console.log(`<gl>       is a property of <alo1>? - ${getPropertyBest(alo1,"gl")}`);

//////////////////////////////////////////////////////////////////////
// поиск только в собсвенных свойствах

function AloFunc(){
     this.gj = true;
     this.gl = false;
     this.gg = 1;
}

function AloOwn(){
    this.own1 = [];
    this.own2 = 1;
}
AloOwn.prototype = new AloFunc();

AloOwn.own1 = [];
AloOwn.own2 = 1;

function getPropertyOwn(obj,property){
    return obj.hasOwnProperty(property);
}

const aloOwn1 = new AloOwn(); 

console.log(aloOwn1);

console.log(`<gg>   is a property of <aloOwn1>? - ${getProperty(aloOwn1,"gg")}`);
console.log(`<gg>   is a property of <aloOwn1>? - ${getPropertyBest(aloOwn1,"gg")}`);
console.log(`<gg>   is a own property of <aloOwn1>? - ${getPropertyOwn(aloOwn1,"gg")}`);
console.log(`<own2> is a own property of <aloOwn1>? - ${getPropertyOwn(aloOwn1,"own2")}`);

//////////////////////////////////////////////////////////////////////
// некорректное решение - при существующем свойстве, инициализированным undefined - 
// будет возвращать false
function getPropertyFail(obj,property){
    let vOut = (obj[property]==undefined)?false:true;
    return vOut;
}

const aloF={
    gj: true,
    gl: false,
    gg: undefined,
  }

console.log(`<nealo>    is a property of <alo1>? - ${getPropertyFail(aloF,"nealo")}`);
console.log(`<gl>       is a property of <alo1>? - ${getPropertyFail(aloF,"gl")}`);
console.log(`<gg>       is a property of <alo1>? - ${getPropertyFail(aloF,"gg")}`); // will be false
console.log(`<11>       is a property of <alo1>? - ${getPropertyFail(aloF,"11")}`);