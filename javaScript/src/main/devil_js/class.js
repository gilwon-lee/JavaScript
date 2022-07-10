//자바의 상속과 비슷함
const User = function(name,age){
    this.name = name;
    this.age = age;
    this.showName = function(){
        console.log(this.name);
    }
}

const mike = new User('Mike',30);

class User2{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    }
}
//class는 new 없이 실행 할 수 없음
//오류 확인에 용이함
//for in 문에서 method는 제외 됨
const tom = new User2("Tom",19);


class Car {
    constructor(color){
        this.color=color;
        this.wheel=4;
    }
    drive(){
        console.log('drive');
    }
    stop(){
        console.log('stop');
    }
}

class Bmw extends Car{
    park(){
        console.log('Park');
    }
}

const z4 = new Bmw("blue");