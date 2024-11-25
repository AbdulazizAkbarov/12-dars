
//1.1-Misol

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;

//   this.start = function () {
//     console.log(`${this.make} ${this.model} ishga chiqarildi.`);
//   };

//   this.drive = function () {
//     console.log(`${this.make} ${this.model} haydab ketmoqda.`);
//   };

//   this.stop = function () {
//     console.log(`${this.make} ${this.model} avarya boldi va moshina yoq bopketti.`);
//   };
// }



//1.2-Misol//


// function Student(name, age, group) {
//   this.name = name;
//   this.age = age;

//   this.introduce = function () {
//     console.log(`Men ${this.name}, yoshim ${this.age}, guruhim ${this.group}.`);
//   };

//   this.study = function () {
//     console.log(`${this.name} o‘qishda.`);
//   };

//   this.takeExam = function () {
//     console.log(`${this.name} imtihon topshirmoqda.`);
//   };
// }




//1.3-Misol//


// function Book(title, author, pages) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;

//   this.read = function () {
//     console.log(`${this.title} kitobini o‘qiyapman.`);
//   };

//   this.info = function () {
//     console.log(`Kitob: ${this.title}, Muallif: ${this.author}, Sahifalar: ${this.pages}`);
//   };

//   this.close = function () {
//     console.log(`${this.title} kitobi yopildi.`);
//   };
// }




//1.4-Misol//


// function Phone(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   this.call = function (number) {
//     console.log(`${this.brand} ${this.model} orqali ${number} raqamiga qo‘ng‘iroq qilindi.`);
//   };

//   this.text = function (number, message) {
//     console.log(`${number} raqamiga "${message}" xabari yuborildi.`);
//   };

//   this.showSpecs = function () {
//     console.log(`Telefon: ${this.brand} ${this.model}, Narx: $${this.price}`);
//   };
// }
// const car1 = new Car("Chevrolet", "Malibu", 2023);
// car1.start();
// car1.drive();
// car1.stop();

// const student1 = new Student("Abdulaziz", 18, "A1");
// student1.introduce();
// student1.study();
// student1.takeExam();

// const book1 = new Book("JavaScript Darslari", "Abdulaziz Akbarov...", 350);
// book1.read();
// book1.info();
// book1.close();

// const phone1 = new Phone("Iphone", "16 ProMax",1000);
// phone1.call("+998938231177");
// phone1.text("+998938231177", "Salom!");
// phone1.showSpecs();









////////////////////////////////////////////////  2-Misolllar //////////////////////////////////////////////////






class Animal {
  #secret; 

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.#secret = "Hayvonning shaxsiy siridir.";
  }

  eat() {
    console.log(`${this.name} ovqat yemoqda.`);
  }

  getSecret() {
    return this.#secret;
  }
}






class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} vovulamoqda!`);
  }

  eat() {
    console.log(`${this.name} it ovqat yemoqda.`);
  }
}










class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }

  meow() {
    console.log(`${this.name} miyovlamoqda.`);
  }

  eat() {
    console.log(`${this.name} mushuk  ovqat yemoqda.`);
  }
}







class Bird extends Animal {
  constructor(name, age, canFly) {
    super(name, age);
    this.canFly = canFly;
  }

  chirp() {
    console.log(`${this.name} chirqilamoqda.`);
  }

  eat() {
    console.log(`${this.name} qush  ovqat yemoqda.`);
  }
}







class Rabbit extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }

  hop() {
    console.log(`${this.name} sakramoqda.`);
  }

  eat() {
    console.log(`${this.name} quyonlar  ovqat yemoqda.`);
  }
}
const dog = new Dog("Bobik", 3, "Ovcharka");
dog.eat();
dog.bark();
console.log(dog.getSecret());

const cat = new Cat("Kisa", 2, "Qora");
cat.eat();
cat.meow();
console.log(cat.getSecret());

const bird = new Bird("Chirpy", 1, true);
bird.eat();
bird.chirp();
console.log(bird.getSecret());

const rabbit = new Rabbit("Quyonvoy", 1, "Tez");
rabbit.eat();
rabbit.hop();
console.log(rabbit.getSecret());
