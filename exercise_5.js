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

class ElectroAppliance{
    constructor(){
        this.state = "off";
        this.power_type = "electro";
    }

    switch(bool){
        this.state = bool?"on":"off";
        console.log(`EA is switched ${this.state}`);
    }
}

    const eAppliance = new ElectroAppliance();
        console.log(eAppliance);
    eAppliance.switch(true);
        console.log(eAppliance);

//////////////////////////////////////////////////////////////
class Computer extends ElectroAppliance{
    constructor(os){
        super(); // need super() even if there is no args in parent class!
        this.os     = os;
        this.sleep  = false;
    }

    sleepMode(bool){
        this.sleep = bool;
        console.log(`Computer <${this.os}> is ${(bool?"in sleep mode":'active')}`)
    }
}

    const myWindows  = new Computer("WINDOWS");
        console.log(myWindows);
    myWindows.switch(true);
        console.log(myWindows);

    const myMac = new Computer("MAC");  
        console.log(myMac);

    myMac.sleepMode(true);
        console.log(myMac);
        
    eAppliance.switch(false);
        console.log(eAppliance);

//////////////////////////////////////////////////////////////
class DeskLamp extends ElectroAppliance{
    constructor(led){
        super();
        this.state = "off";
        this.led = led;
        this.rotated = false;
        this.degree = 0;
    }

    rotate(degree){
        this.rotated = (degree===0)?true:false;
        this.degree = degree;
        console.log(`Lamp rotated ${degree} degrees`)
    }
}
    
    const deskLamp1 = new DeskLamp(true);
    const deskLamp2 = new DeskLamp(false);

    deskLamp1.switch(true);
    deskLamp2.rotate(90);
        
        console.log(deskLamp1);
        console.log(deskLamp2);
        
//////////////////////////////////////////////////////////////
class MilkFrother extends ElectroAppliance{
    constructor(manufacturer){
        super();
        this.manufacturer = manufacturer;
        this.mode = "waiting";
    }
    
    changeMode(vars){
        this.mode = (vars===0)?"waiting":((vars===1)?"foaming":"mixing");
        console.log(`Now <${this.manufacturer}> is ${this.mode}`);
    }
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

