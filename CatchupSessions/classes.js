
/**
 * name:
 * hair:
 * legs:
 * eyes:
 * headache:
 */

let studentObject = {
    name: "Emma",
    hair: true,
    legs: true,
    eyes: true,
    headache: false
}

let studentObject2 = {
    name: "James",
    hair: true,
    beard: "He wishes.",
    legs: true,
    eyes: true,
    headache: false
}

let studentObject3 = {
    name: "Imoan",
    hairColor: true,
    legs: true,
    eyes: true,
    headache: false
}

// console.log(studentObject)
// console.log(studentObject2)
// console.log(studentObject3)

class Student {
    constructor(name, headache, legs, eyes, hairColor) {
        this.name = name; // inside of THIS class, name exists... target name
        this.headache = headache; // nothing
        this.legs = legs; // nothing 
        this.eyes = eyes; // nothing
        this.hairColor = hairColor;
        this.apprentice = true; // every student is an apprentice
        this.workPlaceForNowUntilYouLeave = "Code Nation"
    }

    apprenticeCheck() {
        if (this.apprentice) {
            console.log("Lucky devil");
        }
        else {
            console.log("Why did we quit?")
        }
    }

    quit(quitting) { // let quitting;
        if (quitting == true) {
            this.apprentice = false;
            console.log(this.apprentice)
        }
    }
}

const harry = new Student("Harry", false, 2, true, "brownForEase");
const jay = new Student("Jay", true, "annieIsTheBestMusical", 4, "something inbetweenblondeandbrownnocamelcasingforthewin")
const kerry = new Student("Kerry", false, true, true, "Not going there")



kerry.apprenticeCheck() // lucky devil because apprentice == true
kerry.quit(true) // quitting = true
kerry.apprenticeCheck() // why did we quit? Was it me? Do you hate me?

// kerry.quit(true)
// Hello, OneFile
// harry.oneFile()
// Hello, OneFile
// Go on it then.
// Go on it then.
// jay.oneFile()

// console.log(Student())

// console.table(jay)
// console.table(harry);
// console.table(kerry) // pre-defined apprentice... doesn't need defining AGAIN.
/**
Student {
  name: 'Harry',
  headache: false,
  legs: 2,
  eyes: true,
  hairColor: 'brownForEase',
  apprentice: true,
  workPlaceForNowUntilYouLeave: 'Code Nation'
}
 */
