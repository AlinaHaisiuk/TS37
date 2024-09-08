"use strict";
console.log("#20. TypeScript homework example file");
console.log("-------------------Task 1------------------------");
function createPerson(name, age, isActive) {
    return {
        name: name,
        age: age,
        isActive: isActive,
    };
}
var newPerson = createPerson("Олександр", 31, false);
console.log(newPerson);
console.log("-------------------Task 2------------------------");
/*
 * #2
 *
 * Задача: Розробити клас `Calculator` з методами `add` і `multiply`, які будуть логувати виклики цих методів за допомогою
 * декоратора `LogMethodCalls`.
 *
 * Мета: Створити клас, що дозволяє виконувати базові арифметичні операції (додавання та множення) та логує деталі їх
 * викликів для подальшого аналізу або дебагінгу.
 *
 * Вимоги до реалізації:
 * 1. Клас `Calculator` має містити метод `add`, який приймає два числа як аргументи та повертає їх суму.
 * 2. Клас `Calculator` має містити метод `multiply`, який приймає два числа як аргументи та повертає результат їх множення.
 * 3. Обидва методи (`add` і `multiply`) мають бути оздоблені декоратором `LogMethodCalls`. Цей декоратор має логувати
 * ім'я викликаного методу та передані йому аргументи.
 * 4. Декоратор `LogMethodCalls` має бути реалізований так, щоб він міг бути застосований до будь-якого методу класу.
 * При виклику методу, оздобленого цим декоратором, має виводитись лог у форматі: `Calling "<ім'я_методу>" with arguments: <аргументи_методу>`.
 * 5. Всі виводи логів мають здійснюватись через `console.log`.
 *
 */
// function LogMethodCalls() {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ): void {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//       console.log(
//         `Calling "${propertyKey}" with arguments: ${JSON.stringify(args)}`
//       );
//       return originalMethod.apply(this, args);
//     };
//   };
// }
// class Calculator {
//   @LogMethodCalls()
//   add(value1: number, value2: number): number {
//     return value1 + value2;
//   }
//   @LogMethodCalls()
//   multiply(value1: number, value2: number): number {
//     return value1 * value2;
//   }
// }
// const calculator = new Calculator();
// console.log(calculator.add(5, 10));
// console.log(calculator.multiply(3, 7));
console.log("-------------------Task 3------------------------");
/*
 * #3
 *
 * Задача: Реалізувати функціонал для створення профілю користувача в просторі імен UserProfile.
 *
 * Мета: Надати можливість створювати об'єкт профілю з унікальним ідентифікатором, ім'ям та електронною поштою.
 *
 * Вимоги до реалізації:
 * 1. Створити namespace `UserProfile`, що слугуватиме контейнером для визначення інтерфейсу профілю та функцій.
 * 2. Визначити всередині `UserProfile` інтерфейс `ProfileInterface`, який має містити властивості `id` (string),
 * `name` (string) та `email` (string).
 * 3. Реалізувати функцію `createProfile` всередині `UserProfile`, яка приймає `name` та `email`, створює та повертає об'єкт
 * `ProfileInterface` з унікальним `id`, вказаним ім'ям та електронною поштою.
 * 4. Функція `generateId` має бути приватною всередині `UserProfile` і слугувати для генерації унікального ідентифікатора для
 * кожного профілю.
 *
 */
var UserProfile;
(function (UserProfile) {
    function generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
    function createProfile(name, email) {
        var id = generateId();
        return {
            id: id,
            name: name,
            email: email,
        };
    }
    UserProfile.createProfile = createProfile;
})(UserProfile || (UserProfile = {}));
var profile1 = UserProfile.createProfile("John Doe", "john@example.com");
console.log(profile1);
var profile2 = UserProfile.createProfile("John Doe", "john@example.com");
console.log(profile2);
// export { createPerson, Calculator, UserProfile, LogMethodCalls };
