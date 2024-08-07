export class Robot {
  constructor() {
    this.reset();
  }

  reset() {
    this._name = Robot.generateName();
  }

  static generateName() {
    
    //функция для получения целого числа в заданном диапазоне (включительно) с MDN
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); 
    }
    
    //функция для генерации 2 рандомных заглавных букв
    //65-90 код заглавных букв по таблице ASCII
    function genLetters() {
      let letters = '';
      for (let i = 0; i < 2; i++) {
        letters += String.fromCharCode(getRandomIntInclusive(65, 90));
      }
      return letters;
    }
    
    //функция для генерации 3 рандомных цифр
    //48-57 код цифр 0-9 по таблице ASCII
    function genNumbers() {
      let numbers = '';
      for (let i = 0; i < 3; i++) {
        numbers += String.fromCharCode(getRandomIntInclusive(48, 57));
      }
      return numbers;
    }

    //проверка существования массива для проверки уникальности имен
    if (!Robot.usedNames) {
      Robot.usedNames = [];
    }

    //присвоение и проверка на уникальность имени
    let uniqName;

    do {
      uniqName = genLetters() + genNumbers();
    } while (Robot.usedNames.includes(uniqName));
    
    Robot.usedNames.push(uniqName);

    return uniqName;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    throw new Error("Robot name cannot be modified");
  }

  static releaseNames() {
    Robot.usedNames.length = 0;
  }
}