// Реализуйте следующее консольное приложение подобно примеру, 
// который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. 
// Посчитайте потребляемую мощность (передайте аргумент). 

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.

//      План:
// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

//      Общие требования:
// Имена функций, свойств и методов должны быть информативными
// Соблюдайте best practices:
// использование camelCase нотации для переменных и методов, 
// PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами 
// (класс описывает множество, а экземпляр — конкретную реализацию);
// использование синтаксиса es6 (кроме функции-конструкторов) и так далее.

function ElectroAppliance(){
    this.state = "off";
    this.power_type = "electro";
}
    ElectroAppliance.prototype.switch = function(bool){
        this.state = bool?"on":"off";
        console.log(`EA is switched ${this.state}`);
    }

    const eAppliance = new ElectroAppliance();
        console.log(eAppliance);
    eAppliance.switch(true);
        console.log(eAppliance);

//////////////////////////////////////////////////////////////
function Computer(os){
    this.os     = os;
    this.state  = "off";
    this.sleep  = false;
}

Computer.prototype = new ElectroAppliance();
    Computer.prototype.sleepMode = function(bool){
        this.sleep = bool;
        console.log(`Computer <${this.os}> is ${(bool?"in sleep mode":'active')}`)
    }

    const myWindows  = new Computer("WINDOWS");
        console.log(myWindows);
    myWindows.switch(true);
        console.log(myWindows);

    // изменит свойство switched класса ElectroAppliance по умолчанию
    // Object.getPrototypeOf(myWindows).switch(true);
    // console.log(myWindows);

    const myMac = new Computer("MAC");  
        console.log(myMac);

        myMac.sleepMode(true);
        console.log(myMac);
        
    eAppliance.switch(false);
        console.log(eAppliance);

//////////////////////////////////////////////////////////////
function DeskLamp(led){
    this.state = "off";
    this.led = led;
    this.rotated = false;
    this.degree = 0;
}
DeskLamp.prototype = new ElectroAppliance();

    DeskLamp.prototype.rotate = function(degree){
        this.rotated = (degree===0)?true:false;
        this.degree = degree;
        console.log(`Lamp rotated ${degree} degrees`)
    }

    
    const deskLamp1 = new DeskLamp(true);
    const deskLamp2 = new DeskLamp(false);
        console.log(deskLamp1);
        console.log(deskLamp2);

    deskLamp1.switch(true);
    deskLamp2.rotate(90);
        console.log(deskLamp1);
        console.log(deskLamp2);
        
//////////////////////////////////////////////////////////////
function MilkFrother(manufacturer){
    this.state = "off";
    this.manufacturer = manufacturer;
    this.mode = "waiting";
}

MilkFrother.prototype = new ElectroAppliance();

    MilkFrother.prototype.changeMode = function(vars){
            this.mode = (vars===0)?"waiting":((vars===1)?"foaming":"mixing");
            console.log(`Now <${this.manufacturer}> is ${this.mode}`);
        }


    const kt_786 = new MilkFrother("kitfort");
    const mf_f102 = new MilkFrother("pioneer");

        console.log(kt_786);
        console.log(mf_f102);

    kt_786.changeMode(1);
        console.log(kt_786);
    mf_f102.changeMode(0);
        console.log(mf_f102);
    mf_f102.changeMode(2);
    mf_f102.switch(true);
        console.log(mf_f102);

