/**
 * 인터페이스
 */

// 인터페이스의 이름은 I를 처음에 붙이는 경우가 많음
// ex : IPerson
interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void; // 호출시그니처 사용가능
  sayHi(a: number, b: number): void;
  //   sayHi: () => void; // 함수 표현식 // 오버로딩 불가능
  //   sayHi: (a: number, b: number) => void;
}
// | number
// 인터페이스로 만든 객체는 union이나 intersection 불가능
// 사용하려면?!

// type Type1 = number | string | Person;
// type Type2 = number & string & Person;
// 1. 타입 별칭에 사용

const person: Person = {
  // const person: Person | number = {
  // 2. type 주석에 사용
  name: "얌",
  sayHi: function () {
    console.log("HI");
  },
};

// person.name = "밍"; // readonly 일기전용이라 재할당 불가
person.sayHi();
person.sayHi(1, 2);
// 오버로딩 하고 싶을 때는 함수타입 표현식 불가! 호출시그니처 사용해야함

// type Func = {
//   (): void;
// };

// const func: Func = () => {};
