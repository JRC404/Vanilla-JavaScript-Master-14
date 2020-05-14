// // const fs = require('fs')

// let anythingAtAll = [4, 'grey', true];

// let carObject = {
// 	color: ['grey', 'red'],
// 	doors: {
// 		material: 'carbon fiber',
// 		windows: {
// 			tinted: true,
// 			typeOfGlass: 'regular'
// 		}
// 	},
// 	convertible: true,
// 	queryCar() {
// 		// code to make the car drive
// 		return this.convertible;
// 	}
// }

// let convertible = carObject.queryCar();
// const doThing = () => {
// 	//do something with convertible var
// }
// console.log(carObject); // called before the creation of childSeat

// carObject.registration = "D34N0";
// carObject.tyres = "Bridgestone";
// // console.log(carObject.registration);

// console.log(carObject); // called before the creation of childSeat
// carObject.childSeat = true;
// carObject.stolen = false;
// console.log(carObject); // called after the creation of childSeat & stolen

// // delete carObject.;
// console.log(carObject)


class Car { // all classes should and will begin with a capital letter

    constructor(color, doors, convertible, age) { // I'm going to build this class based on the user input for these values - init

        this.color = color; // defined by the user
        this.doors = doors;
        this.convertible = convertible;
        this.age = age;
        this.wheels = true; // all cars in this class have wheels.
        this.windows = "hopefully"; // will the user be able to specify whether it has windows or not? 
        // this.huh = whatIsHeGoingOnAbout;
    }
    // classes don't need the const or function keyword
    drive() {
        console.log("Hi Emily..");
    }

    yearPassed() {
        this.age++;
        console.log("Congratulations on survive another year.")
    }

    takeAwayADoor() {
        this.doors--;
        console.log(`You now have ${this.doors} doors left. Kerry would be proud.`)
    }

}

// const EmilyCar = new Car("red", 5, false, 10);

// EmilyCar.takeAwayADoor()
// () {

// }

// const KerryKar = new Car("pink", 0, false, 45);
// // objects are instances of classes... 
// const KaelaKar = new Car("white", 4, false, 20);
// const JayJar = new Car("grey", 0, true, 1);

// // console.log(KerryKar);
// // KaelaKar.takeAwayADoor();
// // KaelaKar.takeAwayADoor();
// // KaelaKar.takeAwayADoor();
// // KaelaKar.takeAwayADoor();
// // console.table(JayJar)
// // console.log(KaelaKar);
// // console.table(KaelaKar);

// // class UserInformation {
// //     // create a class with the following: 
// //     // name, password, age... etc! Some using constructor and some not...
// //     constructor(name, age, email) {
// //         this.name = name;
// //         this.age = age;
// //         this.email = email;
// //         this.admin = false;
// //         // this.accountCreated = new Date;
// //         }
// // }

// // const Ebuka = new UserInformation("Ebuka", 47, "lion.king@lionking.com");
// // console.table(Ebuka);
// // const James = new UserInformation("James", 19, "poorconnection.com");
// // console.table(James);

// class CodeNation {
//     constructor(name, age, role) {
//         this.name = name;
//         this.age = age;
//         this.role = role;
//     }
// }

// // const jacob = new CodeNation("Jacob", 45, "Instructor");
// // console.log(jacob);

// class Student extends CodeNation {
//     constructor(name, age, role, status, employer) {
//         super(name, age, role); // inheriting the parameters from its extension... it's taking name, age, role FROM CodeNation
//         this.status = status;
//         this.employer = employer;
//         // what you think the super keyword is doing here...
//     }
// }

// class Staff extends CodeNation {
//     constructor(name, age, role, employeeNumber, room, payGrade, techStacks) {
//         super(name, age, role);
//         this.employeeNumber = employeeNumber;
//         this.room = room;
//         this.payGrade = payGrade;
//         this.techStacks = techStacks;
//     }
// }

// const dean = new Staff("Dean", 39, "Does stuff", 17, "Jacob's room.", 1,
//     ["Node", "Express", "React", "Vanilla JS", "C#", "Java", "CSS", "ScriptThatHasTypes"]);
// const harry = new Student("Harry", 62, "Student", "Apprentice", "Talk Talk")

// console.log(dean)
// console.table(harry)


// // let jsonData = JSON.stringify(carObject)
// // fs.writeFileSync("Classes/data.json", jsonData)


// const functionOne = () => {
//     // something
// }

// function functionTwo() {

// }