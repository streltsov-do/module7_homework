// Написать функцию, которая создает пустой объект, но без прототипа.

function createObjectWoProto(variant){
    let varOut;
    switch (variant) {
        case 0:
            varOut = new Object;
            break;
        case 1:
            varOut = {};
            break;
        case 2:
            varOut = new Object();
            break;
    
        default:
            break;
    }
    return varOut;
}

let objWoProto0 = createObjectWoProto(0);
let objWoProto1 = createObjectWoProto(1);
let objWoProto2 = createObjectWoProto(2);

objWoProto0.a = 1;
objWoProto0.b = true;
objWoProto1.a = 1;
objWoProto1.b = true;
objWoProto2.a = 1;
objWoProto2.b = true;

console.log(objWoProto0);
console.log(objWoProto1);
console.log(objWoProto2);
