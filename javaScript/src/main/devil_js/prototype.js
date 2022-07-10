// const user ={
//     name:'Mike'
// }

// console.log(user.name);
// console.log(user);

//상속 
const car  ={
    wheels:4,
    drive(){
        console.log("drive..");
    }
}

const bmw = {
    color:"red",
    navigation:1
}

const benz = {
    color:"black",
}

const audi = {
    color:"blue",
}

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

const Bmw = function (color) {
    const c =color;
    this.getColor = function(){
        console.log(c);
    }
};

const x5 = new Bmw("red");
console.log(x5.color);