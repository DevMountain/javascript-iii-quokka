
class Animal {
    constructor(sound, species) {
        this.sound = sound;
        this.species = species;
    }

    makeSound() {
        return "The " + this.species + " says " + this.sound
    }
}

var genny = new Animal("hhoooof", "giraffe")
var zenny = new Animal("whoop whoop", "zebra")
var lenny = new Animal("good day to you sir", "lion")

var giraffeSound = genny.makeSound();
giraffeSound;
var zebraSound = zenny.makeSound();
zebraSound;
var lionSound = lenny.makeSound();
lionSound;


class BankAccount {
    constructor(accountNum, startingAmount) {
        this.balance = startingAmount;
        this.accountNum = accountNum;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    deposit(amount) {
        this.balance += amount;
    }
}

var marconesAccount = new BankAccount(22, 100102010);
marconesAccount;
marconesAccount.withdraw(9000000);
marconesAccount
marconesAccount.deposit(102011312)
marconesAccount

var karynsAccount = new BankAccount(18, 1000);
karynsAccount;
karynsAccount.withdraw(900);
karynsAccount
karynsAccount.deposit(100)
karynsAccount
marconesAccount


class Movie {
    constructor(title, year, director) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.ratings = []
    }

    addRating(score) {
        this.ratings.push(score)
    }

    averageRating() {
        var sum = this.ratings.reduce((sum, next) => sum + next)
        return sum / this.ratings.length;
    }
}
var boj = {
    title: "HarryPotter",
    year: 1998,
    director: "J.K.",
    ratings =[],
    addRating: function (score) {
        this.ratings.push(score)
    },
    averageRating: function () {
        return avg;
    }
}

var harryPotter = new Movie("Harry Potter", 1998, "J.K.");
harryPotter.addRating(5)
harryPotter.addRating(5)
harryPotter.addRating(3)
var avg = harryPotter.averageRating()
avg;

var lordOfTheRings = new Movie("Lord of the Rings", 2002, "Tolkein")
lordOfTheRings.addRating(5);
lordOfTheRings.addRating(5);
lordOfTheRings.addRating(1);
let avg2 = lordOfTheRings.averageRating();
avg2;
